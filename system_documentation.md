# Quebec Real Estate Investment Agent — Complete System Documentation

> **Purpose of this document:** A full technical reference describing every process, function, flow, API endpoint, and data pipeline in the system. Use this to build a new frontend for the same backend without changing any backend code.

---

## 1. System Overview

This is a **three-service architecture**:

| Service | Technology | Role |
|---|---|---|
| **Backend API** | FastAPI (Python) + PostgreSQL + PostGIS | Data store, AI pipeline, auth, scraping scheduler |
| **Calc Engine** | FastAPI (Python) + SQLite | Accurate Quebec tax & financial calculations (mortgage, welcome tax, cap rate) |
| **Frontend** | React 18 + TypeScript + Vite + Tailwind CSS | User-facing dashboard SPA |

All three services are deployed independently (e.g., on Railway). The frontend talks only to the Backend API via REST/JSON. The Backend API calls the Calc Engine internally (HTTP).

---

## 2. High-Level Data Flow

```
1. SCRAPE (every 2 hours)
   Centris.ca + Realtor.ca + ReMax QC
        ↓  (via Scrapfly anti-bot proxy)
   Raw listing data (JSON / HTML parsed)
        ↓
2. DEDUPLICATION
   PropertyDeduplicator (MLS number, address hash, agent fingerprint)
        ↓  (new/updated → needs_reanalysis = True)
3. AI PIPELINE (runs concurrently with scrape)
   Stage 0: Geocoding (address → lat/lng, PostGIS POINT)
   Stage 1: ComparableFinder (similar nearby properties → median price, discount %)
   Stage 2a: CalcEngine HTTP call → accurate Quebec taxes, cap rate, cash flow
   Stage 2b: FinancialCalculator (fallback estimates + comparables analysis)
   Stage 2c: MarketBenchmark (Colliers cap rate cross-check)
   Stage 3a: RiskAssessor → RiskAssessment (severity flags)
   Stage 3b: NeighbourhoodAnalyzer → city percentile context
   Stage 4: OpportunityScorer → score 0–100 + category
   Stage 5a: AssessmentMatcher → official lot area + dwelling count
   Stage 5a2: ConstraintMatcher → flood/agricultural/heritage flags
   Stage 5b: ZoningMatcher + RebuildEconomicsCalculator → development upside
   Stage 6: BriefGenerator (Claude AI) → plain-English investment brief (EN + FR)
        ↓
4. PostgreSQL Storage (properties table + supporting tables)
        ↓
5. FRONTEND (React SPA)
   REST API calls via Axios + TanStack React Query
   Pages: Landing → Login/Register → Dashboard → Properties → PropertyPage
         → AnalysisPage → Settings → Alerts → Saved → Reports → Compare
```

---

## 3. Backend API — Startup & Configuration

### 3.1 Entry Point (`backend/app/main.py`)

On startup, the FastAPI app:
1. Runs `_bootstrap_admin()` — creates one admin user (email/password from env vars `ADMIN_BOOTSTRAP_EMAIL` / `ADMIN_BOOTSTRAP_PASSWORD`) if it doesn't exist yet.
2. If `SCRAPFLY_API_KEY` is set, starts the APScheduler (see Section 8). If not → "demo mode" (no scraping).
3. Registers CORS middleware (allows frontend URL + localhost ports 3000/5173 + any `*.railway.app`).
4. Registers SessionMiddleware (for Google OAuth CSRF state).
5. Mounts all routers.

### 3.2 Configuration (`backend/app/config.py`)

All settings read from `.env` file:

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `SCRAPFLY_API_KEY` | Primary scraping key (empty = demo mode) |
| `SCRAPFLY_API_KEY_2` to `_4` | Fallback keys (auto-rotated when credits run out) |
| `ANTHROPIC_API_KEY` | Claude AI brief generation |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | OAuth (empty = disabled) |
| `APP_SECRET_KEY` | Signs JWT access tokens + session cookie |
| `APP_BASE_URL` | Backend's public URL (for OAuth redirect URI) |
| `FRONTEND_URL` | Frontend's public URL (for CORS + OAuth redirect) |
| `ADMIN_BOOTSTRAP_EMAIL` / `ADMIN_BOOTSTRAP_PASSWORD` | Auto-created admin account |
| `REQUIRE_INVITE_CODE` | `true` = registration requires an invite code |
| `SCRAPE_INTERVAL_HOURS` | How often the scraper runs (default: 2) |
| `TARGET_CITIES` | Comma-separated list of cities to keep (e.g., `montreal,laval`) |

---

## 4. Authentication System

**Auth method:** HttpOnly cookie-based sessions with JWT access tokens + opaque refresh tokens.

### 4.1 Routes (`/api/auth/*`)

#### `POST /api/auth/register`
- **Input:** `{ email, password, name?, invite_code? }`
- **Process:**
  1. If `REQUIRE_INVITE_CODE=true`, validates the invite code via `validate_code()`.
  2. Checks no duplicate email exists.
  3. Hashes password with bcrypt.
  4. Creates `Broker` record (role = `user`).
  5. Calls `_issue_session()` → sets two HttpOnly cookies:
     - `access_token` (JWT, short-lived ~15 min)
     - `refresh_token` (random UUID, long-lived ~30 days, stored hashed in `refresh_tokens` table)
  6. Logs `LOGIN` analytics event.
- **Response:** `UserResponse` (user profile)

#### `POST /api/auth/login`
- **Input:** `{ email, password }`
- **Process:** Verifies password hash, checks `is_active`, calls `_issue_session()`.
- **Response:** `UserResponse`

#### `POST /api/auth/logout`
- **Process:** Revokes the refresh token in DB, deletes both cookies.

#### `GET /api/auth/me`
- **Auth required:** Yes (reads `access_token` cookie)
- **Response:** Current user's profile including all preferences.

#### `PATCH /api/auth/me`
- **Input:** Partial `PreferencesUpdate` object:
  - `location_city`, `location_cities[]`, `location_radius_km`
  - `price_min`, `price_max`, `property_types[]`
  - `investment_strategy` (`buy_and_hold` | `buy_fix_sell` | `both`)
  - `min_score_for_alert`, `email_alerts_enabled`
  - `language` (`en` | `fr`)
  - `custom_score_weights` (dict of 7 factors summing to 1.0)
  - `custom_buy_box` (dict with keys: `cash_flow_min`, `cap_rate_min`, `discount_min`, `days_on_market_min`, `price_drop_min`, `price_drop_pct_min`, `price_max`)
- **Response:** Updated `UserResponse`

#### `GET /api/auth/google/login`
- Redirects browser to Google OAuth consent screen.
- Optionally accepts `?invite_code=` (for first-time signups).

#### `GET /api/auth/google/callback`
- Google redirects here after consent.
- Creates/links user account, calls `_issue_session()`.
- Redirects browser to `{FRONTEND_URL}/`.

### 4.2 Token Refresh Flow

On each request, `get_current_user()` dependency:
1. Reads `access_token` cookie → decodes JWT.
2. If expired → reads `refresh_token` cookie → looks up hash in `refresh_tokens` → issues new access token.
3. If no valid token → raises 401.

### 4.3 User Roles

| Role | Permissions |
|---|---|
| `user` | Browse properties, view analysis, save properties, configure preferences |
| `admin` | All user permissions + admin dashboard, manual pipeline/scrape triggers, user management |

---

## 5. Property Data Model

### 5.1 Core Table: `properties`

One row = one unique physical property in Quebec.

**Deduplication keys:**
- `mls_number` (Centris/Realtor share MLS — unique across sources)
- `address_hash` (SHA-256 of normalized address + city — for sites without MLS)

**Key fields:**

| Field | Type | Description |
|---|---|---|
| `id` | UUID | Primary key |
| `full_address` | str | Full display address |
| `city` | str | City name (indexed) |
| `location` | PostGIS POINT | Lat/lng for geo queries |
| `property_type` | enum | `duplex`, `triplex`, `quadruplex`, `quintuplex_plus`, `single_family`, `condo`, `townhouse` |
| `listing_type` | enum | `for_sale` \| `for_rent` |
| `status` | enum | `active`, `price_changed`, `sold`, `delisted`, `expired` |
| `asking_price` | float | Current asking price ($CAD) |
| `unit_count` | int | Number of units |
| `sqft_total` | int | Living area |
| `year_built` | int | Year of construction |
| `bedrooms_total` | int | Total bedrooms |
| `rental_income_monthly` | float | Disclosed monthly rent |
| `municipal_taxes_annual` | float | Annual municipal tax |
| `school_taxes_annual` | float | Annual school tax |
| `photos` | JSONB array | Photo URLs |
| `price_history` | JSONB array | `[{price, date, event}]` |
| `score` | int (0-100) | AI opportunity score |
| `score_category` | enum | `strong_opportunity`/`worth_investigating`/`market_price`/`not_recommended` |
| `score_components` | JSONB | Per-factor breakdown |
| `cap_rate` | float | Cap rate % |
| `noi_annual` | float | Net operating income |
| `monthly_cash_flow` | float | Cash flow after all costs |
| `cash_on_cash_return` | float | CoC return % |
| `discount_pct` | float | % below comparable median (positive = below = good) |
| `comparable_count` | int | Number of comps found |
| `comparable_median_price` | float | Median price of comps |
| `comparable_ids` | JSONB | UUIDs of comparable properties |
| `ai_brief_en` | text | Claude-generated English brief |
| `ai_brief_fr` | text | Claude-generated French brief |
| `welcome_tax` | float | Quebec mutation tax ($CAD) |
| `monthly_mortgage` | float | Estimated mortgage payment |
| `analysis_confidence` | enum | `high`/`medium`/`low` |
| `needs_reanalysis` | bool | True = pipeline needs to re-run |
| `zoning_zone_id` | FK | Linked zoning zone |
| `rebuild_economics` | JSONB | Rebuild-to-max scenario |
| `assessment_data` | JSONB | Official municipal assessment roll data |
| `development_constraints` | JSONB | `[{type, name, source_url}]` — flood/agri/heritage |
| `market_benchmark` | JSONB | Colliers cap rate comparison |

### 5.2 Supporting Tables

| Table | Purpose |
|---|---|
| `property_sources` | One row per source (Centris/Realtor/ReMax) per property — tracks per-source price, URL, agent |
| `brokers` | User accounts (email, role, preferences) |
| `refresh_tokens` | Opaque refresh token store (hashed) |
| `invite_codes` | Single-use invite codes for gated registration |
| `user_events` | Analytics event log (LOGIN, SEARCH, PROPERTY_VIEW, etc.) |
| `zoning_zones` | Quebec zoning bylaw data with PostGIS polygon geometries |
| `constraint_zones` | Flood/agricultural/heritage constraint polygons |

---

## 6. Properties API — All Endpoints

Base prefix: `/api/properties`

### 6.1 `GET /api/properties` — List Properties

**Auth:** Optional (logged-in users get personalized "Your Verdict" scores)

**Query parameters (all optional):**

| Param | Type | Description |
|---|---|---|
| `city` | str | Filter by city (accent-insensitive, substring match) |
| `address` | str | Filter by address (accent-insensitive, substring match) |
| `mls_number` | str | Filter by MLS number |
| `property_type` | str | `duplex`\|`triplex`\|etc. |
| `listing_type` | str | `for_sale` \| `for_rent` |
| `score_min` | int 0-100 | Min AI score |
| `score_max` | int 0-100 | Max AI score |
| `price_min` | float | Min asking price |
| `price_max` | float | Max asking price |
| `cap_rate_min` | float | Min cap rate (%) |
| `cash_flow_min` | float | Min monthly cash flow ($) |
| `discount_min` | float | Min % below comparable median |
| `days_on_market_min` | int | Min days listed |
| `price_drop_min` | float | Min absolute price drop ($) since first listing |
| `price_drop_pct_min` | float | Min % price drop since first listing |
| `your_score_min` | int | Min "Your Verdict" score (logged-in only) |
| `status` | str | `active`, `price_changed`, etc. |
| `multi_site` | bool | Only properties listed on 2+ sources |
| `has_sqft` | bool | Only properties with known sqft |
| `flood_zone` | bool | Only properties in flood zones |
| `listed_within` | str | `24h`\|`48h`\|`7d`\|`30d` |
| `sort_by` | str | `score`\|`your_verdict`\|`price`\|`price_asc`\|`price_desc`\|`newest`\|`discount`\|`days_listed` |
| `page` | int | Page number (default 1) |
| `page_size` | int | Results per page (default 20, max 100) |

**Response:**
```json
{
  "items": [PropertyCard],
  "total": 1234,
  "page": 1,
  "page_size": 20,
  "pages": 62
}
```

**PropertyCard fields:** `id`, `mls_number`, `full_address`, `city`, `neighborhood`, `property_type`, `listing_type`, `unit_count`, `sqft_total`, `year_built`, `bedrooms_total`, `asking_price`, `price_per_sqft`, `score`, `score_category`, `your_score`, `your_score_category`, `discount_pct`, `cap_rate`, `monthly_cash_flow`, `comparable_count`, `analysis_confidence`, `photos[]`, `listing_url`, `primary_source`, `active_sources[]`, `status`, `days_on_market`, `days_on_market_is_real`, `is_new`, `first_seen_at`, `last_seen_at`, `multi_site_count`, `lowest_price_source`, `lowest_price`, `zoning_max_units`, `zoning_upside`, `flood_zone`

**Side effect:** Logs `SEARCH` analytics event for authenticated users.

---

### 6.2 `GET /api/properties/stats` — Dashboard Summary

**Auth:** None required

**Response:**
```json
{
  "total_properties": 5420,
  "new_today": 34,
  "strong_opportunities": 89,   // score ≥ 80
  "worth_investigating": 312,   // score 60-79
  "market_price": 1840,         // score 40-59
  "not_recommended": 2910,      // score < 40
  "price_drops_today": 12,
  "avg_score": 41.3,
  "cities": ["Laval", "Montréal", ...],
  "multi_site_properties": 234
}
```

---

### 6.3 `GET /api/properties/map` — Map Data

**Auth:** None required

Returns up to 1000 properties with coordinates (for map view):
```json
[{ "id", "full_address", "city", "asking_price", "score", "score_category", "photo", "lat", "lng" }]
```

---

### 6.4 `GET /api/properties/suggest` — Address Autocomplete

**Auth:** None required  
**Params:** `q` (min 2 chars), `limit` (default 8, max 20)  
**Response:** `[{ id, full_address, city, asking_price, score }]`

---

### 6.5 `GET /api/properties/{id}` — Property Detail

**Auth:** Optional

**Response:** `PropertyDetail` — all fields from `PropertyCard` plus:

| Field | Description |
|---|---|
| `street_number`, `street_name`, `postal_code` | Address parts |
| `lot_sqft`, `floors`, `bathrooms_total`, `parking_spaces` | Physical details |
| `price_history` | `[{price, date, event}]` array |
| `listed_at` | Original listing date |
| `description` | Full listing description text |
| `rental_income_monthly` | Disclosed rent |
| `municipal_taxes_annual`, `school_taxes_annual` | Tax fields |
| `condo_fees_monthly` | For condos |
| `comparable_median_price`, `comparable_mean_price`, `value_gap` | Comp analysis |
| `noi_annual`, `grm`, `cash_on_cash_return` | Core metrics |
| `welcome_tax`, `down_payment_20pct`, `monthly_mortgage` | Acquisition costs |
| `ai_brief_en`, `ai_brief_fr` | AI-generated briefs |
| `cross_site_prices[]` | Per-source price breakdown |
| `zoning` | `ZoningInfo` object (see below) |
| `rebuild_economics` | `RebuildEconomicsInfo` object |
| `market_benchmark` | `MarketBenchmarkInfo` (Colliers cap rate) |
| `assessment` | `AssessmentInfo` (official assessment roll) |
| `constraints[]` | Development constraint flags |
| `score_components` | Per-factor score breakdown (dict) |
| `ai_weights` | Weights used to combine score components |

**Side effect:** Logs `PROPERTY_VIEW` analytics event.

**ZoningInfo fields:** `zone_code`, `city`, `type_milieu`, `allowed_uses[]`, `bylaw_reference`, `confidence`, `max_units`, `is_open_ended`, `estimated_max_units`, `estimate_method`, `max_coverage_pct`, `max_storeys`, `estimate_lot_m2`, `source_document_url`, `affectation`, `intensification`, `min_density_per_ha`

---

### 6.6 `GET /api/properties/{id}/zoning/boundary` — Zone Map Data

Returns GeoJSON polygon of the zoning zone + property point. Used to render the zoning overlay map on the property page. Result cached 1 hour.

```json
{ "zone_code": "H.1", "zone_geometry": {GeoJSON}, "property_point": {GeoJSON} }
```

---

### 6.7 `GET /api/properties/{id}/flood/boundary` — Flood Zone Map Data

Returns GeoJSON polygon(s) of flood constraint zones + property point. Cached 1 hour.

---

### 6.8 `GET /api/properties/{id}/comparables` — Comparable Properties

**Params:** `by` (comma-separated criteria): `match` | `distance` | `price` | `sqft` | `type`

- `match` — uses the stored comparable set from the pipeline (best quality)
- `distance` — nearest active listings (requires coordinates)
- `price` — closest asking price
- `sqft` — closest living area
- `type` — same property type, best score first
- Combinations like `distance,price,sqft` are normalized and summed for a combined ranking.

**Response:** `[ComparablePropertySchema]` (max 12)

---

### 6.9 `POST /api/properties/{id}/analyze` — Trigger Re-Analysis (Admin)

Manually queues a property for re-analysis by setting `needs_reanalysis = True`.

---

### 6.10 `GET /api/properties/{id}/full-analysis` — On-Demand Deep Analysis

Runs the full AI pipeline on-demand (even if already analyzed) and returns the complete structured result:

```json
{
  "property_id": "uuid",
  "full_address": "...",
  "financial": { FinancialProfile },
  "score": { ScoreResult },
  "risk": { RiskAssessment },
  "projection": { FiveYearProjection },
  "renovation": { RenovationROI },
  "neighbourhood": { NeighbourhoodContext },
  "ai_brief": "...",
  "computed_at": "ISO timestamp",
  "sources": [{ DataSource }]
}
```

**FiveYearProjection:** Year-by-year snapshots of `property_value`, `monthly_rent`, `noi`, `monthly_cash_flow`, `equity`, `cumulative_cash_flow`, plus `total_return_pct` and `annualized_return`.

**RenovationROI:** Three scenarios (Light, Medium, Full renovation) each with `renovation_cost`, `rent_increase_per_unit`, `new_monthly_rent`, `new_cap_rate`, `new_cash_flow`, `payback_years`, `roi_pct`.

---

## 7. AI Investment Pipeline — Stage by Stage

File: `backend/app/agent/pipeline.py`

### Stage 0: Geocoding

- **When:** Property has no coordinates (`location IS NULL`) but has an address.
- **What:** Looks up the address in a local address index (official Quebec address points shapefile).
- **Result:** Sets `property.location` as a PostGIS `POINT(lng lat)`.
- **Importance:** Without coordinates, Stages 1 (geo comparables), 5a (assessment), 5a2 (constraints), and 5b (zoning) cannot run.

---

### Stage 1: ComparableFinder (`backend/app/agent/comparables.py`)

**Goal:** Find 3–10 similar properties nearby to establish a market price benchmark.

**Process:**
1. Tries PostGIS radius search, expanding outward: **2 km → 5 km → 10 km → 25 km** until `MIN_COMPS = 3` found.
2. Filters to same `property_type` and `listing_type`, price within ±40% of target.
3. Excludes the target property itself.
4. If no coordinates → falls back to same-city filter.
5. Scores each comparable on similarity (property type match, price proximity, sqft proximity) → sorts descending, keeps top 10.

**Confidence levels:**
- `high` = 7+ comps within 5 km
- `medium` = 3–6 comps
- `low` = fewer than 3

**Outputs:** `ComparableSet` with `median_price`, `mean_price`, `confidence`, and list of `Comparable` objects.

---

### Stage 2a: CalcEngine HTTP Call (`backend/app/services/calc_client.py`)

**Goal:** Get accurate Quebec tax calculations from the dedicated Calc Engine microservice.

**What it sends:** Property details (price, city, unit count, rent, etc.)

**What it gets back (merged into FinancialProfile):**
- `cap_rate`, `noi_annual`, `monthly_cash_flow`
- `welcome_tax` (Quebec mutation tax — bracket-based)
- `monthly_mortgage` (standard Quebec amortization)
- `municipal_taxes_annual` (from official municipal rates)
- `school_taxes_annual`
- `down_payment_20pct`

If the Calc Engine is unavailable, the backend falls back to its own estimates.

---

### Stage 2b: FinancialCalculator (`backend/app/agent/calculator.py`)

**Goal:** Calculate all financial metrics using pure Python formulas (no LLM).

**Inputs:** Property record + ComparableSet

**Income estimation (`_estimate_rent`):**
- Uses `rental_income_monthly` from the listing if disclosed.
- Otherwise estimates: `unit_count × DEFAULT_RENT_PER_UNIT` (fallback). Sets `rent_is_estimated = True`.

**Expense calculation:**
- `vacancy_loss` = rent × `VACANCY_RATE` (5%)
- `municipal_taxes` = from listing, or `assessed_value × city_rate`, or `asking_price × MUNICIPAL_TAX_RATE_FALLBACK`
- `school_taxes` = from listing, or `assessed_value × SCHOOL_TAX_RATE_FALLBACK`
- `insurance` = `asking_price × INSURANCE_RATE`
- `maintenance` = `asking_price × MAINTENANCE_RATE`

**Core metrics:**
- `noi_annual` = `gross_rent_annual - total_expenses_annual`
- `cap_rate` = `(noi_annual / asking_price) × 100`
- `grm` = `asking_price / gross_rent_annual` (Gross Rent Multiplier)
- `monthly_cash_flow` = `(noi_annual - mortgage_annual) / 12`
- `cash_on_cash_return` = `(annual_cash_flow / down_payment) × 100`

**Comparable analysis:**
- `value_gap` = `comparable_median_price - asking_price`
- `discount_pct` = `(value_gap / comparable_median_price) × 100` (positive = below market = good)

**Acquisition costs:**
- `down_payment` = `asking_price × 0.20` (20% down)
- `loan_amount` = `asking_price × 0.80`
- `monthly_mortgage` = standard amortization formula (25 yr, current rate)
- `welcome_tax` = Quebec bracket calculation (0.5%/1%/1.5%/2%/2.5% tiers + Montreal surcharge)

**Output:** `FinancialProfile` dataclass with all above fields.

---

### Stage 2c: Market Benchmark (`backend/app/agent/market_benchmark.py`)

- Compares the property's `cap_rate` against Colliers' published cap rate bands for the same city and building grade.
- Positions: `above` / `within` / `below` the market band.
- Informational only — does not affect the score.
- Stored in `property.market_benchmark` JSONB.

---

### Stage 3a: RiskAssessor (`backend/app/agent/risk.py`)

**Goal:** Flag specific investment risks with severity levels.

**Checks run:**

| Check | Severity | Condition |
|---|---|---|
| Negative NOI | `critical` | `noi_annual < 0` |
| Low cap rate | `high` | `cap_rate < 4.5%` |
| Negative cash flow | `high` | `monthly_cash_flow < -$200` |
| Above market price | `medium` | `discount_pct < -5%` (5%+ above comps) |
| Low comp confidence | `medium` | `comparable_count < 3` |
| Hot market (low DOM) | `low` | `days_on_market < 7` |
| Old property | `medium` | `year_built < 1960` |
| High vacancy exposure | `medium` | High GRM + estimated rent |
| Unverified rent | `low` | `rent_is_estimated = True` |

**Overall risk:** Highest severity among all triggered checks.

**Score modifiers applied later in scorer:**
- `CRITICAL`: hard cap at 35 (never rises above `not_recommended`)
- 2+ `HIGH`: −15 points
- 1 `HIGH`: −8 points
- `MEDIUM` only: −3 points

---

### Stage 3b: NeighbourhoodAnalyzer (`backend/app/agent/neighbourhood.py`)

**Goal:** Place the property in context of its local market peers.

**Process:** Queries nearby active properties of the same type (within 5 km radius or same city).

**Outputs:**
- `sample_size` (peer count)
- `city_avg_price`, `city_avg_price_per_sqft`, `city_avg_cap_rate`, `city_avg_days_on_market`, `city_avg_score`
- `price_vs_avg_pct`, `cap_rate_vs_avg_pct`, `score_vs_avg_pct`
- `price_percentile`, `cap_rate_percentile`, `score_percentile`

**Score modifiers applied in scorer (when sample_size ≥ 5):**
- `score_percentile ≥ 75th`: +5 points
- `score_percentile ≤ 25th`: −5 points
- `cap_rate_percentile ≥ 80th`: +3 additional points

---

### Stage 4: OpportunityScorer (`backend/app/agent/scorer.py`)

**Goal:** Produce a single 0–100 score using weighted factors.

**Weight sets (by investment strategy):**

| Factor | buy_and_hold | buy_fix_sell | both (default) |
|---|---|---|---|
| `discount` (vs comps) | 18% | 38% | 28% |
| `cap_rate` | 27% | 8% | 18% |
| `cash_flow` | 22% | 8% | 17% |
| `grm` | 10% | 5% | 7% |
| `confidence` (data quality) | 11% | 13% | 10% |
| `dom_bonus` (days on market) | 7% | 18% | 13% |
| `price_history` (price drops) | 5% | 10% | 7% |

**Per-factor scoring (all normalized to 0–100):**

- **`discount`**: 0% → 20 pts; ≥20% below market → 100 pts
- **`cap_rate`**: 1% → 0 pts; 6%+ → 100 pts (Quebec benchmark)
- **`cash_flow`**: −$3000/mo → 0; +$500/mo → 100
- **`grm`**: 18x → 0 pts; 10x → 100 pts (lower = better)
- **`confidence`**: `low`=20, `medium`=55, `high`=90; +5 bonus for live tax data
- **`dom_bonus`**: <7 days→15, 7-45→30, 45-90→55, >90→80
- **`price_history`**: No history→30, 1 price drop→45+, 2+ drops→55+ (motivated seller signal)

**Post-processing modifiers:**
- Risk modifier (from Stage 3a): see risk checks above
- Neighbourhood modifier (from Stage 3b): see above
- If `rent_is_estimated = True`: hard cap at 59 (never `worth_investigating` or `strong_opportunity`)

**Score categories:**
- 80–100 → `strong_opportunity`
- 60–79 → `worth_investigating`
- 40–59 → `market_price`
- 0–39 → `not_recommended`

**"Your Verdict" (personalized scoring):** The backend can compute a broker-personalized score using `custom_score_weights` and `custom_buy_box` stored in their profile. This is computed as a SQL expression on the stored `score_components` JSONB, meaning it doesn't re-run the pipeline — it just re-weights already-computed component scores in real-time.

---

### Stage 5a: AssessmentMatcher (`backend/app/agent/assessment_matcher.py`)

- Matches the property to its official municipal assessment roll entry (by coordinates + address fuzzy match).
- Extracts: `lot_area_m2`, `num_dwellings`, `frontage_m`, `year_built`, `roll_year`.
- Stored in `property.assessment_data` JSONB.
- Used by Stage 5b to get the authoritative lot area for buildable unit estimates.

---

### Stage 5a2: ConstraintMatcher (`backend/app/agent/constraint_matcher.py`)

- Checks if the property's PostGIS point falls inside any `constraint_zones` polygon.
- Constraint types: `flood`, `agricultural`, `heritage`.
- Returns list of `{type, name, source_url, explanation}` dicts.
- Stored in `property.development_constraints` JSONB.
- Flood constraint = `flood_zone = True` on property cards.

---

### Stage 5b: ZoningMatcher + RebuildEconomicsCalculator

**ZoningMatcher (`backend/app/agent/zoning_matcher.py`):**
- Matches property coordinates to a polygon in the `zoning_zones` table (PostGIS `ST_Contains`).
- Each zone has: `zone_code`, `city`, `bylaw_reference`, `rules` JSONB (max_units, allowed_uses, max_storeys, max_coverage_pct, etc.)
- Confidence levels: `geometry_only` (basic) → `bylaw_matched` (verified).

**RebuildEconomicsCalculator (`backend/app/agent/rebuild_economics.py`):**
- Only runs when: zone allows more units than currently exist + property type is plex/revenue.
- Estimates: demolition cost, hard construction cost, soft costs, contingency, financing carry, total rebuild cost, projected new NOI, projected new value, net upside.
- Stored in `property.rebuild_economics` JSONB.
- `is_open_ended_target = True` when the zone has no hard unit cap ("envelope" estimate).

---

### Stage 6: BriefGenerator (`backend/app/agent/brief.py`)

**Goal:** Generate a plain-English investment brief via Claude AI.

**When it runs:**
- `score ≥ 40` → generate English brief
- `score ≥ 60` → also generate French brief
- `force=True` (on-demand from UI) → always generates both

**Model used:** `claude-haiku-4-5-20251001` (fast, cost-efficient)

**System prompt:** Instructs Claude to write for everyday investors (not experts), in plain language, no tables, max 160 words.

**Data injected into prompt:**
- Address, property type, asking price
- Opportunity score and category
- Monthly rent (noted as estimated or from listing)
- Monthly cash flow
- Cap rate with Quebec benchmark signal
- Price vs. market (discount %)
- Cash needed to buy (down payment + welcome tax)
- Price history (all entries with dates and % change)
- Risk profile (top 3 risk items)
- Neighbourhood context (peers, percentiles)
- Zoning context (if rebuild upside exists)

**Output format (3 sections):**
```
## VERDICT
One clear sentence: is this a good investment?

## WHAT'S WORKING
- 2-3 positives with real numbers

## WATCH OUT FOR
- 2 risks the buyer needs to know
```

---

## 8. Scraping System

### 8.1 Scheduler (`backend/app/scheduler.py`)

- Uses **APScheduler** with `AsyncIOScheduler`.
- Runs `scrape_job` + `pipeline_job` concurrently every `SCRAPE_INTERVAL_HOURS` (default: 2 hours).
- Progress tracked in `scrape_progress` object, polled by frontend every 2 seconds via `GET /api/admin/scrape-status`.

**Per-cycle targets (new properties):**
- Realtor.ca: 100 new
- Centris: 100 new
- ReMax: 100 new

**Safety cap:** Max 20 pages per source per cycle. Stops early after 3 consecutive pages with 0 new properties (5 for Centris).

---

### 8.2 Three Scrapers

#### Centris (`backend/app/scrapers/centris.py`)
- Scrapes Centris.ca (Quebec's official real estate MLS system).
- Uses Scrapfly for JavaScript rendering + ASP.NET anti-bot bypass.
- Paginates using UpdateSort (newest-first).
- Loops over property categories: plex, condo, house.
- Extracts: MLS number, address, price, photos, unit count, taxes, rent, agent info, welcome tax (Centris calculates it on the listing page).

#### Realtor (`backend/app/scrapers/realtor.py`)
- Uses Realtor.ca's internal JSON API (not the public website).
- Requests bounding-box tiles for all of Quebec (defined in `QUEBEC_CITY_BBOXES`).
- Sort=6-D (newest first).
- Ships GPS coordinates → most properties have `location` set without geocoding.

#### ReMax (`backend/app/scrapers/remax.py`)
- Walks the ReMax Quebec sitemap to discover listing URLs.
- Diffs sitemap against already-scraped URLs → only fetches genuinely new listings.
- Parses listing pages for price, address, agent, etc.

---

### 8.3 Deduplicator (`backend/app/scrapers/deduplicator.py`)

**Matching order:**
1. **MLS number** (exact match across Centris/Realtor)
2. **Address hash** (SHA-256 of normalized street_number + street_name + city)
3. **Agent fingerprint** (agent name + address similarity — catches cross-site listings without MLS)

**On match (existing property):**
- Updates `last_seen_at`, price, status.
- If price changed → sets `status = price_changed`, appends to `price_history`.
- Upserts `PropertySource` record for the source.
- If significant change → sets `needs_reanalysis = True`.

**On new property:**
- Creates `Property` record.
- Creates `PropertySource` record.
- Sets `needs_reanalysis = True`.

---

## 9. Calc Engine Service

### 9.1 Architecture

Separate FastAPI service on its own port/deployment. Backend calls it via HTTP.

### 9.2 Main Endpoint: `POST /api/v1/property/analyze`

**Input:** Property details  
**Output:** Accurate Quebec financial calculations:
- `welcome_tax` (mutation tax — tiered: 0.5%/1%/1.5%/2%/2.5%, Montreal adds surcharge above $500K)
- `municipal_taxes_annual` (official municipal rates by city)
- `school_taxes_annual`
- `cap_rate`
- `noi_annual`
- `monthly_cash_flow`
- `monthly_mortgage`
- `down_payment_20pct`

### 9.3 Rate Refresh

The Calc Engine has its own APScheduler job that refreshes tax rates every 3 weeks by scraping official Quebec government sources. Rates are stored in its own SQLite database.

---

## 10. Admin API

Base prefix: `/api/admin` — **Admin role required on all routes.**

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/admin/status` | Pending analysis count, scored/unscored totals, with-brief count |
| `POST` | `/api/admin/pipeline` | Manually trigger AI pipeline on all `needs_reanalysis=True` properties |
| `POST` | `/api/admin/scrape` | Manually trigger one general scrape cycle |
| `POST` | `/api/admin/scrape-multiunit` | Manually trigger 4+ unit focused scrape cycle |
| `GET` | `/api/admin/scrape-status` | Live scrape progress (polled every 2s by frontend) |
| `GET` | `/api/admin/multiunit-scrape-status` | Live multiunit scrape progress |

---

## 11. Analytics API

### 11.1 User-Facing

`POST /api/analytics/pageview` — authenticated user reports a SPA page view. Body: `{ path: "/dashboard" }`.

### 11.2 Admin Analytics

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/admin/users` | All users with activity summary (engagement tier, last active, properties viewed/analyzed) |
| `GET` | `/api/admin/users/{id}` | Full user detail: pages visited, properties viewed, recent searches |
| `GET` | `/api/admin/analytics/overview` | Site-wide activity (total events, MAU, budget distribution, engagement breakdown) |

**Engagement tiers:**
- `hot_lead` = ran full analysis on 2+ properties in last 14 days
- `warm` = viewed 5+ properties OR searched 3+ times in last 14 days
- `exploring` = any recent activity
- `cold` = no activity in last 14 days

**Events logged server-side:** `LOGIN`, `SEARCH`, `PROPERTY_VIEW`, `FULL_ANALYSIS`  
**Events logged client-side:** `PAGE_VIEW` (SPA route changes)

---

## 12. Brokers/Invites API

### 12.1 Brokers (`/api/brokers`)

- `GET /api/brokers` (admin) — list all brokers
- `GET /api/brokers/{id}` (admin) — broker profile
- `PATCH /api/brokers/{id}` (admin) — update broker (role, active status)
- `DELETE /api/brokers/{id}` (admin) — deactivate broker

### 12.2 Invites (`/api/invites`)

- `POST /api/invites` (admin) — generate a new single-use invite code
- `GET /api/invites` (admin) — list all invite codes + usage status
- `DELETE /api/invites/{code}` (admin) — revoke an invite code

---

## 13. Images API

`GET /api/images/proxy?url=...` — proxies external listing images through the backend to avoid CORS issues. Used by the frontend when images need to be fetched cross-origin.

---

## 14. Frontend Architecture

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS + TanStack React Query + Axios + Recharts + MapLibre GL

### 14.1 Context Providers (wrapping the entire app)

| Provider | State held | Purpose |
|---|---|---|
| `AuthProvider` | `user` object, `login()`, `logout()` | JWT cookie auth state |
| `LanguageProvider` | `lang` (`en`\|`fr`), `t()` translation function | EN/FR i18n |
| `CompareProvider` | Up to 3 property IDs for comparison | Cross-page compare state |

---

### 14.2 Routing Structure

```
/                   → LandingPage (public, outside Layout)
/login              → Login (public)
/register           → Register (public)

[ProtectedRoute — requires auth]
  [Layout — sidebar + header]
    /dashboard      → Dashboard
    /properties     → Properties (grid/map/list)
    /properties/:id → PropertyPage (detail tabs)
    /analyze/:id    → AnalysisPage (full deep analysis)
    /watching       → SavedProperties
    /saved          → SavedProperties (alias)
    /alerts         → MarketAlerts
    /reports        → Reports
    /compare        → Compare
    /searches       → SavedSearches
    /settings       → Settings
    [AdminRoute]
      /admin        → AdminDashboard
```

---

### 14.3 Layout Component (`src/components/Layout.tsx`)

- **Sidebar** (desktop): always-visible 240px rail with nav links:
  - Dashboard, Properties, Market Alerts, Saved Searches, Reports, Saved Properties, Settings, Admin (admin only)
- **Mobile**: hamburger → slide-in drawer
- **Header bar**: Logo ("PlexAI"), ScrapeProgressBar (live during scrape), CompareBar (when properties are queued for compare), language toggle (EN/FR), user avatar + logout
- **Page view tracking**: `PageViewTracker` component fires `POST /api/analytics/pageview` on every route change.

---

### 14.4 Page-by-Page Description

#### Landing Page (`/`)
- Marketing page (public, no auth required)
- Describes the product features
- Links to `/login` and `/register`

#### Login (`/login`)
- Form: email + password → `POST /api/auth/login`
- Google OAuth button → navigates browser to `GET /api/auth/google/login`
- Error handling for invalid credentials, disabled account
- Link to `/register`

#### Register (`/register`)
- Form: email, password, name (optional), invite code
- `POST /api/auth/register`
- Google OAuth (with invite code param)

#### Dashboard (`/dashboard`)
- Calls `GET /api/properties/stats` (refreshed every 60s)
- Shows 6 metric cards: Total Properties, New Today, Strong Opportunities, Worth Investigating, Price Drops Today, Average Score
- Shows "Top Opportunities" grid:
  - If broker has `custom_score_weights` → sorts by `your_verdict`
  - Otherwise → sorts by `score` (AI)
- Shows "Newest Listings" grid (sort by `newest`)
- Uses `PropertyCardGrid` component

#### Properties (`/properties`)
- Full filterable/sortable property browser
- Filter panel: city, property type, listing type, price range, score range, cap rate, cash flow, discount, days on market, price drop, flood zone, multi-site, listed within
- Sort options: Score, Your Verdict, Price (asc/desc), Newest, Discount, Days Listed
- Two view modes: **Grid** (property cards) and **Map** (MapLibre + marker clusters)
- Pagination (page selector + page size)
- Address autocomplete search bar (calls `GET /api/properties/suggest`)
- "Buy Box" mode: applies broker's saved `custom_buy_box` filters automatically
- Add-to-compare button on each card (max 3 properties)
- Save-to-localStorage button on each card

#### PropertyPage (`/properties/:id`)
- Fetches `GET /api/properties/{id}`
- Photo gallery carousel (keyboard navigable)
- Score badge (`ScoreBadge` — color-coded by category)
- "Your Verdict" vs AI Verdict comparison panel (`VerdictCompare`)
- Price history chart (Recharts AreaChart)
- Cross-site price table (multiple sources)
- Days on market + listing status badge
- **Tab system:**
  1. **Overview** — key numbers (cap rate, cash flow, NOI, GRM, CoC return, discount, down payment, welcome tax, mortgage)
  2. **Financials** — full expense breakdown (vacancy, taxes, insurance, maintenance, mortgage) + income breakdown + Financing Workbench
  3. **AI Brief** — Claude-generated brief (EN/FR toggle)
  4. **Comparables** — comparable properties table (filterable by criteria: match/distance/price/sqft/type)
  5. **Zoning** — zone code, allowed uses, max units, buildable estimate, bylaw reference link, zoning map (MapLibre, lazy-loaded), flood zone map
  6. **Score Breakdown** — per-factor score bars showing how each component contributed
- **Financing Workbench** — interactive slider tool:
  - Adjustable: down payment %, interest rate, amortization period
  - Recalculates in real-time: mortgage payment, cash flow, CoC return, total cash needed
  - Includes Desjardins mortgage calculator link
- Save-to-localStorage toggle (bookmark)

#### AnalysisPage (`/analyze/:id`)
- Calls `GET /api/properties/{id}/full-analysis` (triggers fresh pipeline run)
- Shows loading state during computation
- **Sections:**
  1. Financial Profile (all metrics)
  2. Risk Assessment (color-coded severity flags with mitigation text)
  3. 5-Year Projection chart (Recharts AreaChart — property value + equity + cumulative cash flow)
  4. Renovation ROI (3 scenarios in side-by-side comparison)
  5. Neighbourhood Context (percentile bars vs. city peers)
  6. AI Brief
  7. Data Sources (list of official sources used)

#### Compare (`/compare`)
- Side-by-side comparison of up to 3 properties selected via CompareBar
- Shows all key metrics in aligned columns
- `VerdictCompare` component for score breakdown comparison

#### Market Alerts (`/alerts`)
- Configured by broker's saved preferences (city, property types, price range, min score)
- Shows properties matching those criteria that were listed/updated recently
- "New since your last visit" filtering
- Configures alerts via link to Settings page

#### Saved Properties (`/watching` or `/saved`)
- Reads from `localStorage` (no server-side saves)
- Fetches each saved property from `GET /api/properties/{id}`
- Shows as property card grid with remove option

#### Saved Searches (`/searches`)
- Saves/loads filter configurations to/from `localStorage`
- Can name a search and re-run it with one click

#### Reports (`/reports`)
- Pre-built report views:
  1. **Best Deals** — top score + top discount combo
  2. **Recent Price Drops** — `status = price_changed`, sorted by price drop %
  3. **Newest Listings** — `sort_by=newest`, `listed_within=7d`
  4. **Multi-Site Properties** — listed on 2+ sources
- Each report section shows a PropertyCardGrid

#### Settings (`/settings`)
- Investment profile form → `PATCH /api/auth/me`:
  - Investment strategy (`buy_and_hold` / `buy_fix_sell` / `both`)
  - Target cities (multi-city picker)
  - Price range
  - Property types
  - Language
- Alert settings:
  - Enable/disable email alerts
  - Minimum score for alert
- Custom Score Weights (advanced):
  - 7 sliders (must sum to 100%)
  - Applies broker's own weighting strategy
- Custom Buy Box (advanced):
  - Set minimum targets for: cash flow, cap rate, discount, days on market, price drop
- Admin section (admin only):
  - Trigger manual scrape
  - Trigger manual pipeline
  - Live scrape progress bar

#### Admin Dashboard (`/admin`)
- Calls `GET /api/admin/users`
- User table: email, role, engagement tier (hot/warm/exploring/cold), last active, properties viewed/analyzed
- Click user → detail view (pages visited, properties viewed, searches)
- Site analytics overview chart
- Quick-trigger buttons for scrape/pipeline

---

### 14.5 Key Reusable Components

| Component | Purpose |
|---|---|
| `PropertyCardGrid` | Renders a responsive grid of property cards with all metadata, score badge, compare/save buttons |
| `PropertyMapView` | MapLibre GL map with marker clusters; clicking a marker shows property popup |
| `ScoreBadge` | Color pill showing score number + category label |
| `VerdictCompare` | Side-by-side: AI score vs. Your Verdict, with factor breakdown |
| `ScrapeProgressBar` | Polls `GET /api/admin/scrape-status` every 2s during active scrape |
| `CompareBar` | Sticky bottom bar showing queued properties for comparison |
| `FinancingWorkbench` | Interactive mortgage calculator with live sliders |
| `ZoningMap` | MapLibre map showing zone polygon overlay (lazy-loaded) |
| `FloodZoneMap` | MapLibre map showing flood zone overlay (lazy-loaded) |
| `DesjardinsCalculator` | Embeds Desjardins mortgage tool link/widget |
| `ValueSlider` | Accessible range slider with formatted value display |
| `InfoModal` | Tooltip/modal for explaining financial terms |

---

### 14.6 State Management

- **Server state:** TanStack React Query (caching, refetch, loading states) for all API data
- **Auth state:** React Context (`AuthProvider`) — initialized by calling `GET /api/auth/me` on mount
- **Language state:** React Context (`LanguageProvider`) — persisted to `localStorage`
- **Compare state:** React Context (`CompareProvider`) — up to 3 property IDs
- **Saved properties:** `localStorage` (key: `qre_saved_props`) — no server persistence
- **Saved searches:** `localStorage` — no server persistence
- **Financing workbench:** Local component state (sliders)

---

## 15. "Your Verdict" System (Personalized Scoring)

This is a key differentiating feature. Every property is scored twice:

1. **AI Score** (`property.score`): Computed by the pipeline using the `both` strategy weights. Static — stored in DB, doesn't change until re-analysis.

2. **Your Verdict** (`your_score`): Computed on-the-fly in SQL using the broker's `custom_score_weights` applied to the stored `score_components` JSONB. If the broker also has a `custom_buy_box`, those targets override the component thresholds.

**How it works technically:**
- `score_components` (JSONB) stores the raw per-factor 0–100 sub-scores.
- `verdict.weighted_score_expr()` builds a SQLAlchemy expression that multiplies each component by the broker's weight directly in SQL.
- This means no re-running the pipeline — just a different weighted combination of already-computed numbers.
- `effective_weights()` merges `custom_score_weights` with `custom_buy_box` targets (buy box targets override the normalization thresholds for the relevant factor).

---

## 16. Invite Code System

When `REQUIRE_INVITE_CODE=true` (default):
- Registration (email/password or Google first-time) requires a valid unused invite code.
- Admin creates codes via `POST /api/invites`.
- Each code is single-use — consumed on registration.
- Users can be invited by sending the code + registration link.
- Existing user logins are **never** gated by invite codes.

---

## 17. Key API Contracts Summary

### Authentication Headers

All API calls must include `credentials: true` (Axios: `withCredentials: true`). The browser automatically sends the `access_token` HttpOnly cookie on same-origin requests. In production (cross-origin), the backend sets `SameSite=None; Secure` on cookies.

### Error Responses

Standard FastAPI HTTP exceptions:
- `401 Unauthorized` — no valid session (redirect to `/login`)
- `403 Forbidden` — wrong role (e.g., non-admin hitting admin route)
- `404 Not Found` — resource doesn't exist
- `409 Conflict` — duplicate (e.g., email already registered)
- `422 Unprocessable Entity` — validation error (Pydantic)

### Pagination Pattern

All list endpoints return:
```json
{ "items": [], "total": N, "page": 1, "page_size": 20, "pages": K }
```

---

## 18. Database Migrations

Uses **Alembic** for schema migrations.

- Migration files in `backend/alembic/versions/`
- Run: `alembic upgrade head`
- PostGIS extension must be enabled on the PostgreSQL database before running migrations.

---

## 19. Property Status Lifecycle

```
Scraped for first time
        ↓
   status = "active"
   needs_reanalysis = True
        ↓
   Pipeline runs
   score, ai_brief, financials populated
   needs_reanalysis = False
        ↓
   On re-scrape:
     ├── Price changed → status = "price_changed", price_history updated
     ├── Not found → status = "delisted" (after several missed scrapes)
     └── No change → last_seen_at updated, no re-analysis triggered
```

---

## 20. Frontend API Call Reference

All calls use the `http` Axios instance (base: `VITE_API_URL` or `/api`).

```typescript
// Auth
GET  /api/auth/me          → UserResponse
POST /api/auth/login       → UserResponse
POST /api/auth/register    → UserResponse
POST /api/auth/logout      → 204
PATCH /api/auth/me         → UserResponse

// Properties
GET  /api/properties                          → PropertyListResponse
GET  /api/properties/stats                    → StatsResponse
GET  /api/properties/map                      → MapProperty[]
GET  /api/properties/suggest?q=...            → PropertySuggestion[]
GET  /api/properties/:id                      → PropertyDetail
GET  /api/properties/:id/full-analysis        → FullAnalysisResponse
GET  /api/properties/:id/comparables?by=...   → ComparablePropertySchema[]
GET  /api/properties/:id/zoning/boundary      → ZoningBoundary
GET  /api/properties/:id/flood/boundary       → FloodBoundary

// Analytics
POST /api/analytics/pageview                  → 204

// Admin (admin role only)
GET  /api/admin/status                        → pipeline status
POST /api/admin/pipeline                      → trigger pipeline
POST /api/admin/scrape                        → trigger scrape
GET  /api/admin/scrape-status                 → ScrapeProgress
GET  /api/admin/users                         → UserSummary[]
GET  /api/admin/users/:id                     → UserDetail
GET  /api/admin/analytics/overview            → AnalyticsOverview
POST /api/invites                             → InviteCode
GET  /api/invites                             → InviteCode[]
```

---

## 21. Notes for Building a New Frontend

The backend API is **completely stable and unchanged** — only the frontend visual layer needs to be rebuilt. Key implementation notes:

1. **Auth:** Use `withCredentials: true` on all requests. Call `GET /api/auth/me` on app load to restore session. The backend handles token refresh automatically via cookies.

2. **Language:** The backend stores and returns `ai_brief_en` and `ai_brief_fr` separately. Your frontend decides which to display based on the user's `language` preference.

3. **Score display:** Always show both `score` (AI) and `your_score` (personalized) when the user is logged in. `score_category` and `your_score_category` give you the color/label.

4. **Zoning & Flood maps:** These require a maps library (the current implementation uses MapLibre GL JS). You fetch GeoJSON from the boundary endpoints and render it as a polygon overlay.

5. **Saved properties:** No server-side API for this — must use `localStorage` or your own API.

6. **Financing Workbench:** Purely client-side calculations. You need: down payment %, interest rate, amortization period → standard amortization formula → monthly payment → cash flow = NOI/12 - monthly_payment.

7. **Compare feature:** Client-side state (max 3 property IDs), fetches their `PropertyDetail` from the API, displays side by side.

8. **Real-time scrape progress:** Poll `GET /api/admin/scrape-status` every 2 seconds during a scrape cycle. Response includes `is_running`, `sources` (per-source progress), `total_new`, `total_updated`, `started_at`.

9. **Bilingual support:** All user-facing text in the current system has `en`/`fr` translations. The backend returns data in both languages where applicable (briefs). Other UI strings need to be handled on the frontend.
