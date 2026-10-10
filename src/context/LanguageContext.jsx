// src/context/LanguageContext.jsx
import React, { createContext, useContext, useState } from "react";

const translations = {
	EN: {
		nav: {
			features: "Features",
			howItWorks: "How it works",
			faq: "FAQ",
			signIn: "Sign in",
			getStarted: "Get started",
		},
		hero: {
			badge: "Quebec real-estate investment intelligence",
			headline: "Spot the undervalued Quebec property before anyone else.",
			subheadline:
				"PlexAI watches the entire Quebec market around the clock, scores every listing with AI, uncovers hidden development potential from official records, and pings you the second a real opportunity appears.",
			startFree: "Start free",
			seeHowItWorks: "See how it works",
			badges: [
				"2,000+ listings analyzed",
				"Full analysis in seconds",
				"Backed by official data",
			],
		},
		mockup: {
			liveMonitor: "Live Monitor",
			searchPlaceholder: "Search Montréal, Laval, Triplex...",
			regionTag: "Quebec Real Estate",
			strongBuy: "82 - STRONG BUY",
			triplexBadge: "Triplex",
			capRate: "Cap Rate",
			cashFlow: "Net Cash Flow",
			compGap: "Comparable Gap",
			welcomeTax: "Welcome Tax",
			zoningTitle: "Zoning & Cadastre",
			source: "Source",
			officialLot: "Official Lot: 3,420 sq ft",
			permittedDensity: "Permitted density allows up to 4 units",
			unitPotential: "+1 Unit Potential",
			recentScans: "Recent Market Scans",
			officialCheck: "Official Cadastral Check",
			gpsVerified: "Zoning Polygon Verified by GPS",
		},
		stats: [
			{ value: "12,894", label: "Properties scored" },
			{ value: "96", label: "Added in the last 24h" },
			{ value: "239", label: "Quebec cities covered" },
			{ value: "100%", label: "Backed by official data" },
		],
		problemSolution: {
			tag: "WHY PLEXAI",
			heading: "Investing on gut feel leaves money on the table",
			subheading:
				"Serious investors win on speed and information. PlexAI gives you both.",
			oldWayTitle: "The Old Way",
			oldWayItems: [
				"Refresh listing sites for hours, hoping to catch a deal first",
				"Guess at value with no comparable analysis",
				"Never know if the lot can be developed further",
				"Miss price drops until the property is already gone",
			],
			newWayTitle: "With PlexAI",
			newWayItems: [
				"New deals scored and delivered to you automatically",
				"AI value gap vs. comparable sales, computed instantly",
				"Development potential from official zoning + lot data",
				"Alerted the moment a matching property or price drop appears",
			],
		},
		showcase: {
			tag: "THE PLEXAI EDGE",
			heading: "Turn a single-family lot into a development opportunity",
			body: "A property listed as a house might sit on land the city already allows you to build several units on. PlexAI reads the official zoning code and the government lot record, then estimates what could be built — right on the listing, with the source document one click away.",
			bullets: [
				"An interactive map matches the exact zoning polygon by GPS",
				"Real lot size from official records — not the listing",
				"Framed honestly: a guide, always “confirm with the city”",
			],
			availability: "Live for Montréal & Laval — more cities on the way.",
			polygonMatched: "Official Polygon Matched",
			builtToday: "Built today",
			singleFamily: "Single family",
			zoningPotential: "Zoning potential",
			permittedUnits: "Permitted units",
			disclaimer:
				"Estimated from official lot area × permitted density. A guide, not a permit.",
		},
		features: {
			tag: "FEATURES",
			heading: "Everything you need to move faster than the market",
			subheading:
				"One dashboard that replaces hours of manual research — built for investors who value their time.",
			biggestEdgeBadge: "BIGGEST EDGE",
			items: [
				{
					title: "AI deal score, 0–100",
					desc: "Every listing graded on cap rate, cash flow, discount vs. comparable sales and risk — so you know in seconds whether it deserves a closer look.",
				},
				{
					title: "Development potential",
					desc: "See what could be built on any lot from official zoning + lot data — the upside most investors never check, surfaced automatically.",
				},
				{
					title: "Interactive zoning map",
					desc: "The property pinned inside its exact zone boundary on a live map, with the official bylaw and source document one click away.",
				},
				{
					title: "Rebuild & profit calculator",
					desc: "Model a teardown-and-rebuild with your own construction costs and rents — PlexAI computes the numbers and the net upside live.",
				},
				{
					title: "Comparable-sales value gap",
					desc: "We find nearby comparable sales and show exactly how far below (or above) market the asking price really is.",
				},
				{
					title: "Instant deal alerts",
					desc: "Set your criteria once. The moment a matching property — or a price drop — appears, PlexAI pings you by email or WhatsApp.",
				},
			],
			alsoIncludedTitle: "Also included on every property:",
			additional: [
				"5-year cash-flow projection",
				"Live Quebec taxes & welcome tax",
				"Deal-killer overlays (flood, agricultural)",
				"Full price history per listing",
				"Risk assessment on every deal",
				"Neighbourhood context & benchmarks",
			],
		},
		dealScore: {
			tag: "THE SCORE",
			heading: "One number tells you if it's worth your time",
			body: "Every property gets a 0–100 deal score that blends cash flow, cap rate, discount to market and risk. Sort your whole market by it and the best opportunities float to the top instantly.",
			tiers: [
				{ label: "Skip", range: "0–39" },
				{ label: "Fair", range: "40–59" },
				{ label: "Worth checking", range: "60–79" },
				{ label: "Strong buy", range: "80–100" },
			],
		},
		workflow: {
			tag: "HOW IT WORKS",
			heading: "From the whole market to a verdict — in seconds",
			steps: [
				{
					num: "01",
					title: "Step 1: We scan, around the clock",
					desc: "PlexAI continuously monitors the Quebec market and merges duplicate listings into one clean record.",
				},
				{
					num: "02",
					title: "Step 2: AI scores & checks zoning",
					desc: "Each property gets a deal score, full financials, comparable analysis, and its development potential.",
				},
				{
					num: "03",
					title: "Step 3: You get the edge",
					desc: "Browse the ranked dashboard, or let alerts bring the best matching deals straight to your inbox.",
				},
			],
		},
		testimonials: {
			tag: "INVESTORS",
			heading: "Built for people who move first",
			items: [
				{
					quote:
						"“I found a triplex 12% under market the morning it was listed. PlexAI flagged the development upside I would have completely missed.”",
					author: "Marc-André L.",
					role: "Plex investor · Montréal",
				},
				{
					quote:
						"“The zoning read alone is worth it. Knowing a lot can take four units before I even call the broker changes how I bid.”",
					author: "Sophie T.",
					role: "Real-estate investor · Laval",
				},
				{
					quote:
						"“I used to spend my evenings refreshing listings. Now the good deals just land in my inbox, already analyzed.”",
					author: "David R.",
					role: "Buy-and-hold investor",
				},
			],
		},
		faq: {
			tag: "FAQ",
			heading: "Questions, answered",
			items: [
				{
					q: "How accurate is the data?",
					a: "Lot size, dwelling counts and zoning come from official government records, with the source document linked on each property so you can verify it yourself. Financials use live Quebec tax rates. Any development estimate is framed as a guide — always confirm with the city before acting.",
				},
				{
					q: "What makes the development-potential feature different?",
					a: "Cross-references municipal zoning bylaws, cadastral lot plans, and allowed floor-space ratio / maximum allowed dwellings against existing construction automatically.",
				},
				{
					q: "Which cities are covered?",
					a: "Full coverage across Greater Montréal, Laval, and expanding to major municipalities across Quebec.",
				},
				{
					q: "How fast are the alerts?",
					a: "Listings and price alterations are ingested continuously, delivering instant alerts via email or WhatsApp within minutes of publication.",
				},
				{
					q: "Can I tune what counts as a “good deal”?",
					a: "Yes, customizable filters for minimum cap rate, expected cash flow, target regions, property types, and minimum deal score thresholds.",
				},
				{
					q: "Do I need a credit card to start?",
					a: "No credit card required for initial access and trial evaluation.",
				},
			],
		},
		finalCta: {
			heading: "Stop guessing. Start investing with an edge.",
			subheading:
				"Join Quebec investors who find better deals in less time with PlexAI.",
			startFree: "Get started free →",
			signIn: "Sign in",
			note: "No credit card required · Cancel anytime",
		},
		footer: {
			brandDesc:
				"PlexAI — Intelligence d'investissement immobilier au Québec — Analyse de rentabilité par IA, potentiel de développement foncier issu de données officielles et alertes en temps réel.",
			colProduct: "Product",
			colAccount: "Account",
			colCompany: "Company",
			createAccount: "Create account",
			whyPlex: "Why PlexAI",
			theEdge: "The PlexAI edge",
			rights: "© 2026 PlexAI. All rights reserved.",
			disclaimer:
				"Indicative analysis only — confirm with a licensed professional before investing.",
		},
	},

	// -------------------------------------------------------------
	// FRENCH TRANSLATIONS (FR)
	// -------------------------------------------------------------
	FR: {
		nav: {
			features: "Fonctionnalités",
			howItWorks: "Comment ça marche",
			faq: "FAQ",
			signIn: "Connexion",
			getStarted: "Commencer",
		},
		hero: {
			badge: "Intelligence immobilière pour investisseurs québécois",
			headline:
				"Dénichez les propriétés sous-évaluées au Québec avant tout le monde.",
			subheadline:
				"PlexAI surveille le marché québécois en continu, évalue chaque inscription grâce à l'IA, révèle le potentiel de densification via les données officielles et vous alerte dès qu'une opportunité apparaît.",
			startFree: "Essai gratuit",
			seeHowItWorks: "Voir comment ça marche",
			badges: [
				"2 000+ propriétés analysées",
				"Analyse complète en secondes",
				"Données officielles et vérifiées",
			],
		},
		mockup: {
			liveMonitor: "Surveillance directe",
			searchPlaceholder: "Rechercher Montréal, Laval, Triplex...",
			regionTag: "Immobilier Québec",
			strongBuy: "82 - ACHAT FORT",
			triplexBadge: "Triplex",
			capRate: "Taux de cap.",
			cashFlow: "Cash-flow net",
			compGap: "Écart comparables",
			welcomeTax: "Taxe de bienvenue",
			zoningTitle: "Zonage & Cadastre",
			source: "Source",
			officialLot: "Terrain officiel : 3 420 pi²",
			permittedDensity: "Densité permise jusqu'à 4 logements",
			unitPotential: "+1 logement potentiel",
			recentScans: "Analyses récentes du marché",
			officialCheck: "Vérification cadastrale officielle",
			gpsVerified: "Polygone de zonage validé par GPS",
		},
		stats: [
			{ value: "12 894", label: "Propriétés évaluées" },
			{ value: "96", label: "Ajoutées ces dernières 24h" },
			{ value: "239", label: "Villes du Québec couvertes" },
			{ value: "100%", label: "Appuyé par des données officielles" },
		],
		problemSolution: {
			tag: "POURQUOI PLEXAI",
			heading: "Investir à l'intuition coûte cher",
			subheading:
				"Les investisseurs sérieux gagnent sur la vitesse et la précision de l'information. PlexAI vous offre les deux.",
			oldWayTitle: "L'ancienne méthode",
			oldWayItems: [
				"Actualiser les portails pendant des heures en espérant voir une aubaine",
				"Deviner la juste valeur marchande sans comparables précis",
				"Ignorer si le terrain permet de construire davantage de logements",
				"Rater les baisses de prix avant que la propriété ne soit déjà vendue",
			],
			newWayTitle: "Avec PlexAI",
			newWayItems: [
				"Nouvelles opportunités notées et livrées automatiquement",
				"Écart de valeur calculé instantanément par rapport aux ventes comparables",
				"Potentiel de densification calculé selon le zonage et le cadastre",
				"Alerte instantanée dès qu'une propriété ciblée ou une baisse de prix survient",
			],
		},
		showcase: {
			tag: "L'AVANTAGE PLEXAI",
			heading:
				"Transformez un terrain unifamilial en opportunité de développement",
			body: "Une propriété affichée comme unifamiliale peut reposer sur un terrain où la municipalité autorise déjà plusieurs unités. PlexAI analyse le règlement de zonage officiel et la fiche cadastrale, puis estime le potentiel constructible directement sur la fiche avec le document officiel en un clic.",
			bullets: [
				"Carte interactive associant le polygone de zonage exact par GPS",
				"Superficie réelle issue des registres officiels — pas de l'annonce",
				"Approche rigoureuse : un guide fiable, à valider auprès de la ville",
			],
			availability:
				"Actif pour Montréal et Laval — d'autres municipalités à venir.",
			polygonMatched: "Polygone officiel apparié",
			builtToday: "Bâti aujourd'hui",
			singleFamily: "Unifamiliale",
			zoningPotential: "Potentiel zonage",
			permittedUnits: "Unités permises",
			disclaimer:
				"Calculé selon la superficie cadastrale × coefficient d'occupation. Guide indicatif, non un permis.",
		},
		features: {
			tag: "FONCTIONNALITÉS",
			heading: "Tout ce dont vous avez besoin pour devancer le marché",
			subheading:
				"Un tableau de bord unique qui remplace des heures de recherche fastidieuse — conçu pour les investisseurs avisés.",
			biggestEdgeBadge: "MEILLEUR AVANTAGE",
			items: [
				{
					title: "Score d'opportunité IA, 0–100",
					desc: "Chaque inscription est notée sur le cap rate, le cash-flow, la décote par rapport aux ventes comparables et le risque pour décider en quelques secondes.",
				},
				{
					title: "Potentiel de densification",
					desc: "Visualisez ce qui peut être bâti sur n'importe quel lot grâce au zonage officiel — la valeur cachée que la plupart ignorent, révélée automatiquement.",
				},
				{
					title: "Carte de zonage interactive",
					desc: "La propriété positionnée dans sa zone municipale exacte avec le règlement et la fiche de source accessible en un clic.",
				},
				{
					title: "Calculateur de rentabilité & reconstruction",
					desc: "Simulez une démolition-reconstruction avec vos propres coûts de travaux et revenus locatifs — calcul automatique de la rentabilité nette.",
				},
				{
					title: "Écart de valeur avec ventes comparables",
					desc: "Nous identifions les transactions récentes du secteur et quantifions l'écart réel par rapport au prix demandé.",
				},
				{
					title: "Alertes d'aubaines instantanées",
					desc: "Configurez vos critères une seule fois. Dès qu'une propriété admissible ou une baisse de prix est publiée, PlexAI vous alerte par courriel ou WhatsApp.",
				},
			],
			alsoIncludedTitle: "Également inclus pour chaque fiche :",
			additional: [
				"Projection de cash-flow sur 5 ans",
				"Calcul en temps réel des taxes municipales et droit de mutation (bienvenue)",
				"Filtres de contraintes (zones inondables, terres agricoles)",
				"Historique complet des prix par inscription",
				"Évaluation des risques sur chaque transaction",
				"Contexte de quartier et indicateurs socio-économiques",
			],
		},
		dealScore: {
			tag: "LE SCORE",
			heading: "Un chiffre clair pour savoir si l'opportunité vaut votre temps",
			body: "Chaque propriété reçoit une note de 0 à 100 combinant cash-flow, taux de capitalisation, décote par rapport au marché et profil de risque.",
			tiers: [
				{ label: "À ignorer", range: "0–39" },
				{ label: "Moyen", range: "40–59" },
				{ label: "Intéressant", range: "60–79" },
				{ label: "Achat fort", range: "80–100" },
			],
		},
		workflow: {
			tag: "COMMENT ÇA MARCHE",
			heading: "De l'ensemble du marché à une décision — en quelques secondes",
			steps: [
				{
					num: "01",
					title: "Étape 1 : Surveillance 24/7 du marché",
					desc: "PlexAI analyse le marché québécois en continu et élimine les doublons pour présenter des fiches consolidées.",
				},
				{
					num: "02",
					title: "Étape 2 : Évaluation IA et vérification du zonage",
					desc: "Chaque dossier obtient son score d'opportunité, ses projections financières, ses comparables et son potentiel de développement.",
				},
				{
					num: "03",
					title: "Étape 3 : Prenez une longueur d'avance",
					desc: "Consultez le classement ou recevez directement les meilleures affaires ciblées dans votre boîte de réception.",
				},
			],
		},
		testimonials: {
			tag: "INVESTISSEURS",
			heading: "Pensé pour ceux qui passent à l'action les premiers",
			items: [
				{
					quote:
						"« J'ai trouvé un triplex à 12 % sous le marché dès le matin de sa mise en vente. PlexAI a décelé un potentiel d'agrandissement qui m'aurait complètement échappé. »",
					author: "Marc-André L.",
					role: "Investisseur Plex · Montréal",
				},
				{
					quote:
						"« L'analyse du zonage à elle seule justifie la plateforme. Savoir qu'un lot peut accueillir 4 logements avant même d'appeler le courtier change complètement la donne. »",
					author: "Sophie T.",
					role: "Investisseuse immobilière · Laval",
				},
				{
					quote:
						"« Je passais mes soirées à rafraîchir les annonces. Maintenant, les meilleures opportunités arrivent toutes calculées directement dans mes courriels. »",
					author: "David R.",
					role: "Investisseur buy-and-hold",
				},
			],
		},
		faq: {
			tag: "FAQ",
			heading: "Questions fréquentes",
			items: [
				{
					q: "Quelle est la précision des données ?",
					a: "La superficie du terrain, le nombre de logements et le zonage proviennent directement des registres municipaux et fonciers officiels. Le document source est lié sur chaque fiche. Les calculs intègrent les taux d'imposition québécois en vigueur. Tout potentiel de densification reste indicatif et doit être validé auprès de la municipalité.",
				},
				{
					q: "Qu'est-ce qui rend la fonction de potentiel de développement unique ?",
					a: "Elle croise automatiquement les grilles d'usages et de normes de zonage municipales, les plans cadastraux et le nombre maximal de logements autorisés avec le bâti existant.",
				},
				{
					q: "Quelles villes sont couvertes ?",
					a: "Couverture intégrale du Grand Montréal, de Laval, avec extension en cours sur les principales agglomérations du Québec.",
				},
				{
					q: "À quelle vitesse les alertes sont-elles envoyées ?",
					a: "Les inscriptions et ajustements de prix sont traités en continu, avec notification immédiate par courriel ou WhatsApp en quelques minutes.",
				},
				{
					q: "Puis-je personnaliser les critères d'une « bonne affaire » ?",
					a: "Oui, les filtres permettent d'ajuster le taux de capitalisation cible, le cash-flow mensuel minimal, les secteurs géographiques, le type d'immeuble et le score minimal.",
				},
				{
					q: "Faut-il une carte de crédit pour débuter ?",
					a: "Aucune carte de crédit n'est requise pour commencer l'évaluation gratuite de la plateforme.",
				},
			],
		},
		finalCta: {
			heading:
				"Cessez d'estimer au hasard. Investissez avec un temps d'avance.",
			subheading:
				"Rejoignez les investisseurs québécois qui trouvent de meilleures opportunités plus rapidement avec PlexAI.",
			startFree: "Commencer gratuitement →",
			signIn: "Connexion",
			note: "Sans carte de crédit · Annulation en tout temps",
		},
		footer: {
			brandDesc:
				"PlexAI — Intelligence d'investissement immobilier au Québec — Fiches scorées par IA, potentiel de densification issu de données officielles et alertes instantanées.",
			colProduct: "Produit",
			colAccount: "Compte",
			colCompany: "Entreprise",
			createAccount: "Créer un compte",
			whyPlex: "Pourquoi PlexAI",
			theEdge: "L'avantage PlexAI",
			rights: "© 2026 PlexAI. Tous droits réservés.",
			disclaimer:
				"Analyse purement indicative — validez toujours avec un professionnel agréé avant toute transaction.",
		},
	},
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
	const [lang, setLang] = useState("EN");

	return (
		<LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
}
