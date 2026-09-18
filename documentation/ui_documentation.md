# SaaS Landing Page UI Specification

## 1. Project Goal

Create a modern SaaS landing page inspired by the visual language of Sendr.ai.

The website should feel:

- Minimal
- Premium
- Modern
- Professional
- Product-focused
- Spacious
- Interactive
- Technically polished

Do NOT clone Sendr.ai directly.

Use Sendr.ai only as a design reference for concepts such as:

- Large typography
- Generous whitespace
- Product-first visuals
- Workflow storytelling
- Bento layouts
- Subtle borders
- Floating UI elements
- Restrained colors
- Scroll-based animation
- Strong calls to action

Create an original visual identity, layout, copy, dashboard UI, component styling, and animations.

---

# 2. Technology Stack

Use the existing project stack:

- React
- Vite
- Tailwind CSS v4
- shadcn/ui
- Motion
- Lucide React

Prioritize the libraries as follows:

1. shadcn/ui for reusable UI primitives
2. Motion for animations and interactions
3. Lucide React for interface icons
4. Tailwind CSS for layout and styling
5. React for component architecture

Do not introduce another UI component library unless absolutely necessary.

---

# 3. Design Philosophy

The design should follow this visual hierarchy:

```text
Minimal
   ↓
Large typography
   ↓
Short, focused copy
   ↓
Strong CTA
   ↓
Product visualization
   ↓
Whitespace
   ↓
Subtle motion
```

Avoid visual clutter.

Every section should have a clear purpose.

Do not fill empty space unnecessarily.

The website should feel like a real premium SaaS product rather than a generic template.

---

# 4. Color System

Use a warm, slightly off-white background rather than pure white.

Suggested palette:

```text
Background:       #F8F8F5
Surface:          #FFFFFF
Foreground:       #111111
Muted Foreground: #6B7280
Border:           #E5E5E0
Primary:          #635BFF
Secondary Accent: #8B5CF6
```

Keep the accent color restrained.

Do not use many unrelated accent colors.

The majority of the interface should remain neutral.

If a dark section is required, use:

```text
Dark Background: #111111
Dark Surface:    #181818
Dark Text:       #F8F8F5
```

---

# 5. Typography

Use a modern sans-serif typeface.

Typography should be one of the strongest visual elements of the website.

Hero heading:

```text
Desktop: 72px - 96px
Tablet:  48px - 64px
Mobile:  40px - 48px
```

Hero heading:

```css
font-weight: 600;
letter-spacing: -0.04em;
line-height: 0.95;
```

Use tight letter spacing for large headings.

Supporting text should be considerably smaller and visually muted.

Do not use excessively large typography everywhere. Reserve extreme sizes for important headings.

---

# 6. Global Layout

Use a centered responsive container.

Recommended structure:

```text
max-width:
1280px - 1440px

horizontal padding:
mobile: 20px
tablet: 32px
desktop: 48px
```

Sections should have generous vertical spacing.

Use consistent spacing between:

- Section label
- Heading
- Description
- CTA
- Visual content

Avoid tightly packed sections.

---

# 7. Navbar

Create a minimal sticky navigation bar.

Desktop layout:

```text
LOGO

Product    Solutions    Resources    Pricing

                           Log in   [Get Started]
```

Requirements:

- Sticky positioning
- Transparent background initially
- Background becomes slightly opaque after scrolling
- `backdrop-blur-xl`
- Subtle bottom border
- Smooth transition when scrolling
- Responsive mobile navigation
- Mobile menu using shadcn/ui components where appropriate

Suggested styling:

```text
bg-background/70
backdrop-blur-xl
border-b
```

Use Motion to animate the navbar state when the user scrolls.

Use Lucide React icons for:

- Menu
- X
- ChevronDown
- ArrowRight

Do not use text characters as icons.

---

# 8. Hero Section

The hero is the most important section.

Structure:

```text
                [Small Badge]

        BIG PRODUCT PROMISE

       Short supporting description

        [Get Started] [View Demo]


             PRODUCT UI
               MOCKUP
```

The headline should communicate the product's main value proposition.

Do not copy Sendr.ai's wording.

Use short, confident copy.

The hero should have:

- Small badge
- Large heading
- Supporting paragraph
- Primary CTA
- Secondary CTA
- Large product visualization
- Floating interface cards

---

# 9. Hero Animation

Use Motion extensively but subtly.

Animation sequence:

```text
Page loads
   ↓
Badge fades in
   ↓
Heading moves upward + fades in
   ↓
Description appears
   ↓
CTA buttons appear
   ↓
Product mockup scales/fades in
   ↓
Floating cards appear
```

Recommended principles:

- Use opacity transitions
- Use small vertical movement
- Use subtle scale transitions
- Avoid excessive bouncing
- Avoid aggressive rotation
- Avoid distracting animations

The animation should communicate polish rather than spectacle.

---

# 10. Product Mockup

Do not use a random stock image.

Build the product preview using React components.

The mockup should look like a real application.

Example:

```text
┌──────────────────────────────────────────────┐
│ Dashboard                          ○  ○  ○  │
├────────────┬─────────────────────────────────┤
│            │                                 │
│ Overview   │  Dashboard                      │
│ Campaigns  │                                 │
│ Contacts   │  ┌────────┐ ┌────────┐ ┌──────┐│
│ Analytics  │  │ 24.8K  │ │  87%   │ │ 342  ││
│ Settings   │  │ Leads  │ │ Open   │ │Reply ││
│            │  └────────┘ └────────┘ └──────┘│
│            │                                 │
│            │  Recent Activity                │
│            │  ─────────────────────────────  │
│            │  Campaign launched              │
│            │  Content generated               │
│            │  Leads enriched                  │
│            │                                 │
└────────────┴─────────────────────────────────┘
```

Use shadcn/ui components inside the mockup where appropriate:

- Card
- Badge
- Avatar
- Progress
- Tabs
- Button
- Separator

The mockup should feel like part of the product, not a screenshot pasted into the page.

---

# 11. Floating UI Cards

Add small interface cards around the main product mockup.

Examples:

```text
┌─────────────────────┐
│ ✓ AI completed      │
│ Campaign ready      │
└─────────────────────┘
```

```text
┌─────────────────────┐
│ +24% conversion     │
└─────────────────────┘
```

```text
┌─────────────────────┐
│ 342 replies         │
│ ↑ 18.4%             │
└─────────────────────┘
```

Build these as actual React components.

Use Motion to animate them independently.

Possible animation:

```text
fade in
+
small upward movement
+
subtle floating movement
```

Do not make the cards continuously move aggressively.

---

# 12. Trust / Logo Section

Immediately after the hero, add a subtle trust section.

Example:

```text
Trusted by modern teams

[Logo] [Logo] [Logo] [Logo] [Logo]
```

If real company logos are not available, use neutral placeholder brands.

Do not invent claims about real companies using the product.

Keep the section visually quiet.

---

# 13. Problem → Solution Section

Create a section explaining the problem the product solves.

Structure:

```text
THE OLD WAY

Scattered tools.
Manual work.
Slow processes.
Too much context switching.


              ↓


THE NEW WAY

One intelligent workflow.
Automated processes.
Centralized information.
Faster execution.
```

Use two-column layout on desktop.

Use stacked layout on mobile.

Use subtle Motion scroll reveals.

---

# 14. Statistics Section

Create a simple metrics section.

Example:

```text
10K+
Active users

98%
Automation success

24.8K
Actions completed

4.9/5
User satisfaction
```

Only use realistic or placeholder values unless actual product data is provided.

Animate the numbers when they enter the viewport.

Use Motion for the animation.

Do not over-design the statistics.

---

# 15. How It Works Section

Create a workflow storytelling section.

Example:

```text
HOW IT WORKS

One workflow.
Zero unnecessary complexity.


01
Discover
Find the right information.


02
Personalize
Generate relevant content.


03
Launch
Start the workflow.


04
Convert
Turn engagement into results.
```

The active step should visually change as the user scrolls.

Possible interaction:

```text
Scroll
   ↓
Step 01 becomes active
   ↓
Step 02 becomes active
   ↓
Step 03 becomes active
   ↓
Step 04 becomes active
```

Use Motion for:

- Active step transitions
- Progress indicator
- Content transitions
- Product preview changes

---

# 16. Bento Feature Grid

Create a modern bento-style feature section.

Example:

```text
┌───────────────────────────────┬───────────────┐
│                               │               │
│       AI AUTOMATION           │   ANALYTICS   │
│                               │               │
│       Large visual            │    24.8K      │
│                               │    actions    │
│                               │               │
├───────────────────┬───────────┴───────────────┤
│                   │                           │
│ PERSONALIZATION   │        WORKFLOWS          │
│                   │                           │
│     AI            │       → → → →             │
│                   │                           │
└───────────────────┴───────────────────────────┘
```

Use shadcn:

- Card
- Badge
- Button
- Tooltip
- Progress
- Avatar

Each card should have its own visual concept.

Do not make every card identical.

---

# 17. Feature Cards

Each feature card should contain:

```text
[Lucide Icon]

Feature title

Short description

Optional visual
```

Use Lucide React icons instead of manually drawn SVG icons.

Examples:

```text
Sparkles
Workflow
ChartNoAxesCombined
Users
Zap
Database
Bot
ShieldCheck
```

Choose icons based on meaning.

Do not use icons purely for decoration.

---

# 18. Product Showcase

Create a large product-focused section.

Layout:

```text
┌────────────────────────────────────────────┐
│                                            │
│             LARGE PRODUCT UI               │
│                                            │
│          Dashboard / Workflow              │
│                                            │
└────────────────────────────────────────────┘

       Powerful tools.
       Designed around your workflow.

       Short explanation of the feature.
```

Use a large UI mockup rather than stock imagery.

Add subtle Motion interactions when the section enters the viewport.

---

# 19. Interactive Dashboard Preview

Create an animated dashboard preview.

Example structure:

```text
Dashboard

Sidebar
├── Overview
├── Campaigns
├── Contacts
├── Analytics
└── Settings

Main Content
├── Metrics
├── Activity
├── Chart
└── Recent Actions
```

Use:

- Card
- Tabs
- Badge
- Avatar
- Progress
- Button
- Separator

from shadcn/ui.

Use Lucide React for dashboard navigation icons.

Use Motion for:

- Metric entrance
- Chart animation
- Activity list appearance
- Tab transitions
- Hover states

---

# 20. Testimonials

Create a social-proof section.

Layout:

```text
WHAT USERS SAY

┌────────────────────────────┐
│                            │
│ "Short testimonial..."     │
│                            │
│ [Avatar] Name              │
│          Role              │
│                            │
└────────────────────────────┘
```

Use shadcn Card.

Keep testimonials visually simple.

Do not invent testimonials from real people or companies.

Use placeholder content if actual testimonials are unavailable.

---

# 21. Use Cases

Create a section showing different user types or use cases.

Example:

```text
FOR TEAMS
Automate repetitive workflows.

FOR MARKETERS
Create personalized campaigns.

FOR OPERATIONS
Centralize processes.

FOR DEVELOPERS
Connect your existing tools.
```

Use tabs or cards.

Potential shadcn components:

- Tabs
- Card
- Button
- Badge

Use Motion when changing between use cases.

---

# 22. Pricing Section

Create a clean pricing section.

Example:

```text
PLANS

Starter
For individuals

$XX / month

[Get Started]


Pro
For growing teams

$XX / month

[Start Free Trial]


Enterprise
For larger organizations

Custom

[Contact Sales]
```

Use shadcn Card and Button.

The recommended/featured plan can have:

- Slightly stronger border
- Subtle accent background
- Badge
- Slight scale difference

Avoid excessive gradients.

---

# 23. FAQ

Use shadcn Accordion.

Example:

```text
Frequently Asked Questions

What is the product?

How does it work?

Can I integrate it with my existing tools?

Is there a free plan?

How does billing work?

Can I cancel anytime?
```

Accordion animation should be handled by the shadcn component.

---

# 24. Final CTA

Create a large final call-to-action section.

Example:

```text
Ready to simplify your workflow?

Start building with a smarter way to work.

[Get Started]
```

Make this section visually stronger than the surrounding sections.

Use a dark background if it fits the visual identity.

Add subtle Motion entrance animation.

---

# 25. Footer

Create a clean SaaS footer.

Structure:

```text
LOGO

Product
Features
Pricing
Integrations

Solutions
Teams
Marketing
Operations

Resources
Documentation
Blog
FAQ

Company
About
Contact
Careers

──────────────────────────────

© 2026 Company Name

Privacy
Terms
```

Use Lucide React icons for social links if needed.

Do not use emojis as icons.

---

# 26. Motion Guidelines

Motion should be used throughout the website, but animations must remain subtle.

Use Motion for:

- Page entrance
- Hero animation
- Scroll reveals
- Floating UI cards
- Number counters
- Workflow transitions
- Card hover effects
- Navbar transformation
- Product mockup transitions
- Tabs
- CTA interactions

Recommended animation principles:

```text
opacity
+
translateY
+
scale
```

Prefer short, smooth transitions.

Avoid:

- Excessive bouncing
- Constant rotation
- Large zoom effects
- Fast flashing
- Excessive parallax
- Animating every element independently

The animation should make the interface feel alive without distracting from the content.

---

# 27. Scroll Reveal Pattern

Create reusable Motion animation variants.

Conceptually:

```text
hidden:
opacity: 0
y: 30

visible:
opacity: 1
y: 0
```

Use viewport-based triggering.

Elements should animate once when they enter the viewport unless a repeated animation is specifically useful.

---

# 28. Hover Interactions

Cards should have subtle hover feedback.

Examples:

```text
Card hover
    ↓
slight translateY
    +
border transition
    +
subtle shadow
```

Buttons should have:

```text
hover
    ↓
slight background change
    +
subtle scale
```

Do not overuse scale animations.

---

# 29. Lucide React Guidelines

Use Lucide React for interface icons.

Examples:

```jsx
import {
	ArrowRight,
	ArrowUpRight,
	Check,
	ChevronDown,
	Menu,
	X,
	Sparkles,
	Workflow,
	Users,
	BarChart3,
	Zap,
	ShieldCheck,
	Settings,
} from "lucide-react";
```

Use icons consistently.

Recommended sizes:

```text
Small UI icon: 16px
Normal icon:   18px - 20px
Feature icon:  20px - 24px
Large visual:  32px+
```

Do not use emoji characters as interface icons.

---

# 30. shadcn/ui Usage

Use shadcn/ui as the foundation for reusable UI primitives.

Recommended components:

```text
Button
Card
Badge
Avatar
Accordion
Separator
Tooltip
Dialog
Tabs
DropdownMenu
NavigationMenu
Input
Progress
```

Install only the components that are actually required.

Example:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add avatar
npx shadcn@latest add accordion
npx shadcn@latest add separator
npx shadcn@latest add tooltip
npx shadcn@latest add dialog
npx shadcn@latest add tabs
npx shadcn@latest add dropdown-menu
npx shadcn@latest add navigation-menu
npx shadcn@latest add input
npx shadcn@latest add progress
```

Do not force shadcn components into places where a custom component would be more appropriate.

---

# 31. Component Architecture

Keep reusable UI primitives separate from marketing components.

Recommended structure:

```text
src/
├── components/
│   ├── ui/
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── badge.jsx
│   │   └── ...
│   │
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProductMockup.jsx
│   ├── FloatingCard.jsx
│   ├── LogoCloud.jsx
│   ├── Stats.jsx
│   ├── Workflow.jsx
│   ├── FeatureCard.jsx
│   ├── BentoGrid.jsx
│   ├── ProductShowcase.jsx
│   ├── Testimonial.jsx
│   ├── UseCases.jsx
│   ├── Pricing.jsx
│   ├── FAQ.jsx
│   ├── FinalCTA.jsx
│   └── Footer.jsx
│
├── pages/
│   └── Home.jsx
│
├── lib/
│   └── utils.js
│
├── App.jsx
└── main.jsx
```

Keep components focused.

Avoid creating one huge `Home.jsx` file containing the entire website.

---

# 32. Responsive Design

The website must be fully responsive.

Desktop:

```text
Large typography
Multi-column layouts
Large product mockups
Floating cards
Expanded navigation
```

Tablet:

```text
Reduced typography
Simplified grids
Reduced spacing
```

Mobile:

```text
Stacked sections
Compact typography
Mobile navigation
Full-width CTA buttons where appropriate
Simplified product mockups
No overlapping floating cards that break the layout
```

Always test:

```text
320px
375px
768px
1024px
1280px
1440px+
```

---

# 33. Accessibility

Follow accessible UI practices.

Requirements:

- Semantic HTML
- Proper heading hierarchy
- Accessible buttons
- Accessible navigation
- Keyboard navigation
- Visible focus states
- Sufficient contrast
- Meaningful `aria-label` values where needed
- Do not communicate information through color alone
- Respect `prefers-reduced-motion`

Motion-heavy sections should reduce or disable non-essential animations when the user prefers reduced motion.

---

# 34. Performance

Avoid unnecessary dependencies.

Prefer:

```text
CSS
+
Tailwind
+
Motion
+
shadcn
+
Lucide
```

Do not add large animation libraries.

Do not use massive image assets when a React/CSS UI representation can achieve the same result.

Lazy-load large assets where appropriate.

Avoid unnecessary re-renders.

---

# 35. Important Visual Rules

Always follow these rules:

1. Keep the interface minimal.
2. Use generous whitespace.
3. Use large typography for major headlines.
4. Keep body copy short.
5. Use one primary accent color.
6. Use subtle borders.
7. Use rounded corners consistently.
8. Use product UI instead of generic stock imagery.
9. Use Motion for meaningful interactions.
10. Use Lucide React instead of emoji icons.
11. Use shadcn/ui for reusable primitives.
12. Build custom components for unique marketing sections.
13. Keep animations subtle.
14. Maintain strong visual hierarchy.
15. Make every section feel connected to the product.

---

# 36. Avoid These Patterns

Do NOT create:

- Generic Bootstrap-style layouts
- Excessive gradients
- Excessive glassmorphism
- Random floating shapes
- Emoji-based UI
- Huge collections of unrelated colors
- Excessive shadows
- Excessive rounded cards
- Stock-photo-heavy sections
- Constant animations
- Overly complicated navigation
- Walls of text
- Identical cards repeated across the page
- Fake company logos
- Fake customer claims
- Fake statistics
- Direct copies of Sendr.ai branding or content

---

# 37. Development Strategy

Do not generate the entire website as one giant component.

Build in stages.

## Stage 1

Build:

```text
Navbar
Hero
ProductMockup
FloatingCards
```

Focus heavily on visual quality.

The first viewport should already look polished.

## Stage 2

Build:

```text
LogoCloud
ProblemSolution
Stats
```

## Stage 3

Build:

```text
Workflow
BentoGrid
FeatureCards
ProductShowcase
```

## Stage 4

Build:

```text
Testimonials
UseCases
Pricing
FAQ
```

## Stage 5

Build:

```text
FinalCTA
Footer
```

## Stage 6

Polish:

```text
Responsive behavior
Motion
Hover states
Accessibility
Performance
Spacing
Typography
```

---

# 38. First Milestone

The first implementation should ONLY focus on:

```text
Navbar
   ↓
Hero
   ↓
Product Mockup
   ↓
Floating UI Cards
```

Do not immediately generate every section.

The first viewport should establish the entire visual language of the product.

Once the Navbar, Hero, and Product Mockup look excellent, build the remaining sections around that visual system.

---

# 39. Final Design Direction

The final website should communicate:

```text
Modern SaaS
       +
Minimal design
       +
Strong typography
       +
Real product UI
       +
Subtle Motion
       +
shadcn components
       +
Lucide icons
       +
Generous whitespace
```

The goal is not to make the website look like a copy of Sendr.ai.

The goal is to capture the same type of polished, product-first SaaS experience while creating an original identity.

Build the interface as if it were a real production SaaS website rather than a static landing-page mockup.
