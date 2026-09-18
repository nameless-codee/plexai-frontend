# AI Frontend Generation Prompt

## Sendr-Inspired Modern SaaS Landing Page

You are an expert frontend engineer and UI designer.

Build a production-quality, responsive SaaS landing page using the
existing React + Vite project.

The visual direction should be inspired by the design language of modern
premium SaaS websites such as Sendr.ai, but the implementation must be
original. Do not copy Sendr.ai's branding, text, logos, illustrations,
layouts pixel-for-pixel, or proprietary visual identity.

The result should look like a carefully designed real SaaS product, not
an AI-generated template.

------------------------------------------------------------------------

# 1. Existing Technology Stack

Use the technologies already installed in the project:

-   React
-   Vite
-   Tailwind CSS v4
-   shadcn/ui
-   Motion
-   Lucide React

Do not replace the existing stack.

Do not introduce another component library.

Use:

-   shadcn/ui for reusable interface primitives
-   Motion for animation and interaction
-   Lucide React for interface icons
-   Tailwind CSS v4 for styling and layout
-   React for component composition

If a shadcn component is not installed yet, install only the required
component.

------------------------------------------------------------------------

# 2. Core Design Goal

Create a minimal, premium, product-first SaaS landing page.

The design should communicate:

-   simplicity
-   intelligence
-   speed
-   trust
-   technical sophistication
-   clarity
-   modern SaaS quality

The visual hierarchy should follow:

``` text
Small label / badge
        ↓
Large headline
        ↓
Short supporting copy
        ↓
Primary + secondary CTA
        ↓
Large product UI
        ↓
Subtle floating interface elements
```

Use generous whitespace.

Do not fill empty areas simply because they are available.

The design should feel intentional.

------------------------------------------------------------------------

# 3. Visual Identity

Use a warm neutral background.

Primary palette:

``` text
Background:       #F8F8F5
Surface:          #FFFFFF
Foreground:       #111111
Muted Foreground: #6B7280
Border:           #E5E5E0
Primary:          #635BFF
Secondary Accent: #8B5CF6
```

Dark sections may use:

``` text
Dark Background: #111111
Dark Surface:    #181818
Dark Foreground: #F8F8F5
```

Do not use many accent colors.

The majority of the page should be neutral.

Use the primary accent sparingly for:

-   CTA buttons
-   active states
-   badges
-   important metrics
-   selected workflow states
-   subtle decorative highlights

Avoid excessive gradients.

Avoid rainbow gradients.

Avoid excessive glassmorphism.

------------------------------------------------------------------------

# 4. Typography

Use a modern sans-serif font.

Large headings should have strong visual presence.

Hero heading:

``` text
Desktop: 72px - 96px
Tablet:  56px - 72px
Mobile:  40px - 48px
```

Hero heading styling:

``` text
font-semibold
tracking-[-0.04em]
leading-[0.95]
```

Use smaller typography for supporting content.

Recommended:

``` text
Hero paragraph:
18px - 20px desktop
16px - 18px mobile

Section heading:
48px - 64px desktop
36px - 44px mobile

Body:
16px - 18px
```

Do not make every heading enormous.

Reserve the strongest typography for:

-   hero
-   major section introductions
-   final CTA

------------------------------------------------------------------------

# 5. Responsive Breakpoints

Design mobile-first.

Use Tailwind breakpoints:

``` text
default: mobile
sm:      640px
md:      768px
lg:      1024px
xl:      1280px
2xl:     1536px
```

Use these practical layout targets:

``` text
320px - 639px
Mobile

640px - 767px
Large mobile

768px - 1023px
Tablet

1024px - 1279px
Desktop

1280px+
Large desktop
```

Main content container:

``` text
w-full
max-w-[1440px]
mx-auto
px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12
```

Do not allow horizontal overflow.

Every section must work at approximately:

``` text
320px
375px
768px
1024px
1280px
1440px
```

------------------------------------------------------------------------

# 6. Global Spacing

Use generous section spacing.

Recommended:

``` text
Mobile:
py-20 to py-24

Tablet:
py-24 to py-28

Desktop:
py-28 to py-36

Large desktop:
py-32 to py-40
```

Do not make every section exactly the same height.

Let content determine the height while maintaining consistent rhythm.

------------------------------------------------------------------------

# 7. Global Border and Radius System

Use subtle borders.

Preferred:

``` text
border border-black/10
```

or the project's shadcn border token.

Use rounded corners consistently:

``` text
rounded-xl
rounded-2xl
rounded-3xl
```

Recommended:

``` text
Buttons:
rounded-lg or rounded-xl

Small cards:
rounded-xl

Feature cards:
rounded-2xl

Large product mockups:
rounded-2xl or rounded-3xl
```

Do not use extremely rounded pill shapes everywhere.

Use pills only for:

-   badges
-   small status labels
-   compact controls

------------------------------------------------------------------------

# 8. Exact Page Hierarchy

Build the homepage in this exact order:

``` text
<App>
  <Home>
    <Navbar />
    <Hero />
      <HeroContent />
      <HeroActions />
      <ProductMockup />
      <FloatingCards />

    <LogoCloud />

    <ProblemSolution />

    <Stats />

    <Workflow />

    <BentoFeatures />

    <ProductShowcase />

    <Testimonials />

    <UseCases />

    <Pricing />

    <FAQ />

    <FinalCTA />

    <Footer />
  </Home>
</App>
```

Do not place unrelated sections before the hero.

The hero should be the strongest first impression.

------------------------------------------------------------------------

# 9. Recommended Component Structure

Use this structure:

``` text
src/
├── components/
│   ├── ui/
│   │   └── shadcn components
│   │
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProductMockup.jsx
│   ├── FloatingCard.jsx
│   ├── LogoCloud.jsx
│   ├── ProblemSolution.jsx
│   ├── Stats.jsx
│   ├── Workflow.jsx
│   ├── BentoFeatures.jsx
│   ├── FeatureCard.jsx
│   ├── ProductShowcase.jsx
│   ├── Testimonials.jsx
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

Keep each component focused.

Do not create one enormous Home component.

Use arrays and `.map()` for repeated UI such as:

-   navigation items
-   statistics
-   features
-   workflow steps
-   testimonials
-   pricing features
-   FAQs
-   footer links

------------------------------------------------------------------------

# 10. Animation System

Use Motion consistently.

Import from Motion using the package already installed in the project.

Create reusable animation variants rather than writing unrelated
animations for every element.

Recommended variants:

## fadeUp

``` js
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
```

## fadeIn

``` js
const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
```

## scaleIn

``` js
const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
```

## staggerContainer

``` js
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
```

## floating

Use a subtle repeating animation for floating cards.

Concept:

``` text
y: [0, -6, 0]
duration: 4-5 seconds
ease: easeInOut
repeat: Infinity
```

Keep movement extremely subtle.

------------------------------------------------------------------------

# 11. Motion Accessibility

Respect reduced-motion preferences.

If the user has requested reduced motion through their operating
system/browser:

-   remove continuous floating animations
-   minimize transform animations
-   use simple opacity transitions
-   avoid decorative movement

Do not make animation necessary to understand the content.

------------------------------------------------------------------------

# 12. Navbar

Create a sticky navbar.

Desktop:

``` text
┌────────────────────────────────────────────────────────────┐
│ LOGO      Product  Solutions  Resources  Pricing   Login  │
│                                                   Get Started│
└────────────────────────────────────────────────────────────┘
```

Use:

``` text
fixed or sticky
top-0
z-50
```

Initial state:

``` text
bg-transparent
border-transparent
```

Scrolled state:

``` text
bg-background/75
backdrop-blur-xl
border-b
```

Animate the transition.

Desktop navigation appears at:

``` text
lg:flex
```

Mobile navigation:

``` text
flex lg:hidden
```

Use a shadcn Dialog or Sheet if available for the mobile menu.

Lucide icons:

``` text
Menu
X
ChevronDown
ArrowRight
```

Do not use text symbols as icons.

Suggested Tailwind structure:

``` text
h-16 sm:h-18 lg:h-20
px-5 sm:px-6 lg:px-10
```

------------------------------------------------------------------------

# 13. Hero

The hero should occupy approximately the first viewport and a portion of
the second.

Recommended structure:

``` text
<section>
  container
    badge
    heading
    paragraph
    actions
    product mockup
</section>
```

Suggested Tailwind:

``` text
relative
overflow-hidden
pt-28 sm:pt-32 lg:pt-40
pb-16 sm:pb-20 lg:pb-28
```

Center the hero content.

Hero content width:

``` text
max-w-4xl
mx-auto
text-center
```

Badge:

``` text
inline-flex
items-center
rounded-full
border
px-3
py-1.5
text-xs
sm:text-sm
```

Heading:

``` text
mt-6
text-5xl
sm:text-6xl
md:text-7xl
lg:text-8xl
font-semibold
tracking-[-0.04em]
leading-[0.95]
```

Do not allow the heading to become an unreadable single line.

Use:

``` text
max-w-5xl
mx-auto
```

Supporting text:

``` text
mt-6
max-w-2xl
mx-auto
text-base
sm:text-lg
lg:text-xl
text-muted-foreground
leading-relaxed
```

CTA area:

``` text
mt-8
flex
flex-col
sm:flex-row
items-center
justify-center
gap-3
```

Primary button:

``` text
<Button size="lg">
```

Use an ArrowRight icon.

Secondary button can use:

``` text
variant="outline"
```

------------------------------------------------------------------------

# 14. Hero Background

Keep the background mostly clean.

Optional:

-   extremely subtle radial gradient
-   very low-opacity decorative grid
-   faint blurred accent shape

Do not create a visually noisy background.

If using a radial gradient, keep opacity extremely low.

The product mockup must remain the visual focus.

------------------------------------------------------------------------

# 15. ProductMockup

This is the primary hero visual.

Do not use a screenshot.

Construct the interface using React.

Outer container:

``` text
relative
mx-auto
mt-14 sm:mt-16 lg:mt-20
w-full
max-w-6xl
```

Mockup shell:

``` text
overflow-hidden
rounded-2xl
border
bg-white
shadow-2xl
```

On mobile:

``` text
min-h-[420px]
```

On desktop:

``` text
min-h-[600px]
```

Build:

``` text
Top bar
Sidebar
Main dashboard
Metric cards
Activity section
Chart/visual
```

------------------------------------------------------------------------

# 16. ProductMockup Desktop Layout

Use:

``` text
grid
grid-cols-[220px_1fr]
```

on desktop.

At mobile:

``` text
grid-cols-1
```

Hide or simplify the sidebar on small screens.

Desktop structure:

``` text
┌─────────────────────────────────────────────┐
│ Product / Search / Notifications / Profile │
├────────────┬────────────────────────────────┤
│            │                                │
│ Overview   │ Dashboard                      │
│ Campaigns  │                                │
│ Contacts   │ Metrics                        │
│ Analytics  │                                │
│ Settings   │ Recent activity                │
│            │ Chart                          │
└────────────┴────────────────────────────────┘
```

Use Lucide icons for sidebar navigation.

Use shadcn Card components for metrics.

------------------------------------------------------------------------

# 17. ProductMockup Metrics

Create three or four metric cards.

Example:

``` text
24.8K
Actions

87%
Open rate

342
Replies
```

Do not claim these are real product statistics.

Treat them as illustrative UI data.

Use:

``` text
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-3
```

Each card:

``` text
rounded-xl
border
bg-background
p-4
```

------------------------------------------------------------------------

# 18. ProductMockup Activity

Create a recent activity list.

Example:

``` text
Campaign launched
Content generated
24 contacts enriched
Workflow completed
```

Use Lucide `Check` or similar icons.

Use subtle dividers.

Animate the activity rows with a staggered Motion reveal.

------------------------------------------------------------------------

# 19. Floating Cards

Position small cards around the product mockup.

Desktop only:

``` text
hidden lg:block
```

Example positions:

``` text
top-12 -left-8
top-32 -right-10
bottom-16 -right-6
bottom-8 left-10
```

Use:

``` text
rounded-xl
border
bg-white
shadow-lg
p-3
```

Keep the cards relatively small.

Examples:

``` text
AI task completed
Campaign ready

+24% conversion

342 replies
```

Use Lucide icons.

Animate them with:

``` text
initial fade + translateY
then subtle infinite movement
```

Do not let floating cards cover important dashboard content.

------------------------------------------------------------------------

# 20. LogoCloud

Create a subtle trust section after the hero.

Structure:

``` text
Trusted by modern teams

Logo    Logo    Logo    Logo    Logo
```

If real logos are unavailable, use neutral placeholder company names.

Do not imply that real companies use the product unless this is actually
true.

Tailwind:

``` text
py-12 sm:py-16
border-y
```

Logo row:

``` text
flex
flex-wrap
items-center
justify-center
gap-x-10
gap-y-6
```

Use muted typography.

------------------------------------------------------------------------

# 21. ProblemSolution

Create a two-part section.

Desktop:

``` text
grid
lg:grid-cols-2
gap-8
```

Left:

``` text
THE OLD WAY

Scattered tools.
Manual work.
Slow processes.
Too much context switching.
```

Right:

``` text
THE NEW WAY

One intelligent workflow.
Automated processes.
Centralized information.
Faster execution.
```

Use cards, but do not make them generic.

The "new way" side can use the primary accent subtly.

Animate each side with staggered `fadeUp`.

------------------------------------------------------------------------

# 22. Stats

Create a clean metrics section.

Layout:

``` text
grid
grid-cols-2
lg:grid-cols-4
```

Each metric:

``` text
text-4xl
sm:text-5xl
font-semibold
tracking-tight
```

Label:

``` text
mt-2
text-sm
sm:text-base
text-muted-foreground
```

Use Motion for number reveal/counting.

Do not use fake statistics as factual claims. If the product has no real
metrics, label them as examples or use clearly illustrative values.

------------------------------------------------------------------------

# 23. Workflow

Create a highly visual workflow section.

Section intro:

``` text
HOW IT WORKS

One workflow.
Zero unnecessary complexity.
```

Desktop:

``` text
grid
lg:grid-cols-[280px_1fr]
```

Left side:

Workflow steps.

Right side:

Dynamic product visualization.

Steps:

``` text
01 Discover
02 Personalize
03 Launch
04 Convert
```

Each step contains:

``` text
number
title
description
```

Active step:

``` text
border
bg-muted
accent indicator
```

Inactive step:

``` text
opacity-60
```

------------------------------------------------------------------------

# 24. Workflow Scroll Interaction

Use Motion and viewport/scroll state.

As the user scrolls through the workflow section:

``` text
Step 01 → active
Step 02 → active
Step 03 → active
Step 04 → active
```

The right-side product preview should change based on the active step.

Use `AnimatePresence` for content transitions.

Transitions:

``` text
opacity
y
scale
```

Avoid dramatic transitions.

If scroll-driven behavior becomes fragile, use viewport-triggered step
activation instead.

------------------------------------------------------------------------

# 25. BentoFeatures

Create a modern bento grid.

Desktop layout:

``` text
grid
grid-cols-4
gap-4
```

Suggested layout:

``` text
┌──────────────────────────────┬───────────────┐
│                              │               │
│       AI AUTOMATION          │   ANALYTICS   │
│       col-span-3             │   col-span-1  │
│                              │               │
├──────────────────┬───────────┴───────────────┤
│                  │                           │
│ PERSONALIZATION  │       WORKFLOWS           │
│ col-span-1       │       col-span-3          │
│                  │                           │
└──────────────────┴───────────────────────────┘
```

On mobile:

``` text
grid-cols-1
```

On tablet:

``` text
md:grid-cols-2
```

Cards should have different visual compositions.

Do not create four identical cards with different text.

------------------------------------------------------------------------

# 26. FeatureCard

Every feature card should contain:

``` text
Lucide icon
feature title
short description
visual element
```

Example visual elements:

-   miniature dashboard
-   animated progress bar
-   workflow nodes
-   metric
-   activity list
-   small chart

Use shadcn Card where appropriate.

Use Motion on hover.

Recommended hover:

``` text
whileHover:
  y: -4
```

Transition:

``` text
duration: 0.2
ease: easeOut
```

Do not make cards dramatically scale.

------------------------------------------------------------------------

# 27. ProductShowcase

Create a large alternating product showcase.

First block:

``` text
Left:
heading
description
CTA

Right:
large product UI
```

Second block:

``` text
Left:
large product UI

Right:
heading
description
CTA
```

Desktop:

``` text
lg:grid-cols-2
gap-10 lg:gap-16
items-center
```

Mobile:

``` text
grid-cols-1
```

Use `scaleIn` for product UI.

Use `fadeUp` for text.

------------------------------------------------------------------------

# 28. Testimonials

Create a clean testimonial section.

Use shadcn Card.

Desktop:

``` text
grid-cols-3
```

Mobile:

``` text
grid-cols-1
```

Each card:

``` text
quote
avatar
name
role
```

Do not fabricate testimonials attributed to real people.

Use placeholder identities/content until actual testimonials are
supplied.

Use subtle hover animation.

------------------------------------------------------------------------

# 29. UseCases

Create a tabbed use-case section.

Use shadcn Tabs.

Example tabs:

``` text
Teams
Marketing
Operations
Developers
```

Each tab displays:

``` text
heading
description
product visualization
CTA
```

Use Motion `AnimatePresence` when switching content.

Do not animate the entire page.

Animate only the changing content.

------------------------------------------------------------------------

# 30. Pricing

Create a clean pricing section.

Use three cards:

``` text
Starter
Pro
Enterprise
```

Desktop:

``` text
lg:grid-cols-3
```

Featured plan can use:

``` text
border-primary
ring-1
ring-primary/20
```

Do not use excessive scale.

Pricing card structure:

``` text
badge
plan name
description
price
billing period
CTA
feature list
```

Use Lucide `Check` for feature list items.

If actual pricing is unknown, use placeholders rather than inventing
factual pricing.

------------------------------------------------------------------------

# 31. FAQ

Use shadcn Accordion.

Layout:

``` text
max-w-3xl
mx-auto
```

Questions:

``` text
What is the product?
How does it work?
Can I integrate it with my existing tools?
Is there a free plan?
How does billing work?
Can I cancel anytime?
```

Use concise placeholder answers.

Do not make the FAQ overly long.

------------------------------------------------------------------------

# 32. FinalCTA

Create a visually strong closing CTA.

Desktop:

``` text
py-28 lg:py-36
rounded-3xl
```

Possible dark treatment:

``` text
bg-[#111111]
text-[#F8F8F5]
```

Structure:

``` text
Ready to simplify your workflow?

Short supporting statement.

[Get Started]
```

Use Motion `fadeUp`.

Keep the design minimal.

------------------------------------------------------------------------

# 33. Footer

Create a multi-column SaaS footer.

Desktop:

``` text
grid-cols-4 or grid-cols-5
```

Mobile:

``` text
grid-cols-2
```

Sections:

``` text
Product
Solutions
Resources
Company
```

Bottom row:

``` text
© 2026 Company Name

Privacy
Terms
```

Use Lucide icons for social links if necessary.

Do not use emoji icons.

------------------------------------------------------------------------

# 34. Lucide React Rules

Use Lucide React for interface icons.

Preferred examples:

``` jsx
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
  Bell,
  Search,
  Bot,
  Database,
  ChartNoAxesCombined
} from "lucide-react";
```

Choose icons semantically.

Do not use icons just to decorate every heading.

Do not use emoji characters anywhere in the UI.

------------------------------------------------------------------------

# 35. shadcn/ui Rules

Use shadcn/ui for:

-   Button
-   Card
-   Badge
-   Avatar
-   Accordion
-   Separator
-   Tooltip
-   Dialog/Sheet
-   Tabs
-   DropdownMenu
-   NavigationMenu
-   Input
-   Progress

Do not force shadcn into custom visual sections where a normal React
component is better.

Use shadcn as the foundation, not as a limitation.

Customize the components with Tailwind when necessary.

------------------------------------------------------------------------

# 36. Button System

Primary CTA:

``` text
<Button size="lg">
```

Suggested classes:

``` text
rounded-xl
px-6
h-11
sm:h-12
font-medium
```

Secondary CTA:

``` text
variant="outline"
```

Use:

``` text
ArrowRight
ArrowUpRight
```

where appropriate.

Do not put icons on every button.

------------------------------------------------------------------------

# 37. Motion Interaction Rules

Use Motion for meaningful feedback.

Good:

``` text
button hover
card hover
scroll reveal
hero entrance
workflow transition
dashboard activity
number reveal
navbar scroll state
```

Avoid:

``` text
continuous page-wide movement
random floating objects
large rotations
bouncing buttons
rapid scaling
flashing elements
```

Animations should feel expensive and controlled.

------------------------------------------------------------------------

# 38. Scroll Reveal Implementation

For section elements, use Motion viewport detection.

Concept:

``` jsx
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
```

Use:

``` text
once: true
```

for most marketing content.

Do not repeatedly animate the same content every time it enters the
viewport.

------------------------------------------------------------------------

# 39. Staggered Content

For lists and grids:

``` jsx
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
>
  {items.map((item) => (
    <motion.div variants={fadeUp}>
      ...
    </motion.div>
  ))}
</motion.div>
```

Use small stagger intervals.

Recommended:

``` text
0.05 - 0.1 seconds
```

------------------------------------------------------------------------

# 40. Hover Effects

Cards:

``` text
whileHover={{ y: -4 }}
```

Buttons:

``` text
whileHover={{ y: -1 }}
```

Use very small movement.

For interactive visual cards, a subtle border or shadow transition is
sufficient.

Do not overuse scale.

------------------------------------------------------------------------

# 41. Dashboard Animation

The dashboard mockup should feel alive.

Possible animation sequence:

``` text
dashboard appears
    ↓
metric cards appear
    ↓
activity items stagger in
    ↓
progress/chart visual animates
    ↓
floating notification appears
```

Use Motion.

Do not make the dashboard constantly animate after loading unless the
animation represents a useful product behavior.

------------------------------------------------------------------------

# 42. Data and Content Architecture

Keep repeated data outside JSX when possible.

Example:

``` js
const features = [
  {
    icon: Sparkles,
    title: "AI Automation",
    description: "...",
  },
];
```

Render with:

``` jsx
{features.map((feature) => {
  const Icon = feature.icon;

  return (
    <FeatureCard
      key={feature.title}
      icon={Icon}
      ...
    />
  );
})}
```

This makes the UI easy to modify.

------------------------------------------------------------------------

# 43. Avoid Hardcoded Repetition

Do not write:

``` jsx
<Card>...</Card>
<Card>...</Card>
<Card>...</Card>
<Card>...</Card>
```

when the cards share the same structure.

Use reusable components and data arrays.

------------------------------------------------------------------------

# 44. Accessibility

Implement:

-   semantic HTML
-   proper heading hierarchy
-   keyboard-accessible navigation
-   visible focus states
-   accessible buttons
-   accessible mobile menu
-   meaningful aria-labels
-   sufficient color contrast
-   reduced-motion support

Do not communicate important information through color alone.

Use actual buttons for actions.

Do not use clickable `<div>` elements.

------------------------------------------------------------------------

# 45. Performance

Keep the implementation lightweight.

Prefer:

``` text
React
Tailwind
shadcn
Motion
Lucide
```

Avoid adding unnecessary libraries.

Do not use huge images if a React/CSS product visualization can be built
instead.

Avoid unnecessary re-renders.

Use React state only where interaction actually requires it.

------------------------------------------------------------------------

# 46. Mobile-Specific Rules

Mobile must not simply be a smaller desktop.

On mobile:

-   stack columns
-   reduce heading sizes
-   reduce section spacing
-   simplify product mockups
-   hide decorative floating cards
-   collapse navigation
-   make CTAs accessible
-   prevent horizontal overflow

Hero CTA:

``` text
flex-col
w-full sm:w-auto
```

Product mockup should remain visually understandable.

Do not force a complex desktop dashboard into a tiny viewport.

------------------------------------------------------------------------

# 47. Desktop-Specific Rules

At `lg` and above:

-   use multi-column layouts
-   enable floating cards
-   use larger product mockups
-   use expanded navbar
-   use bento layouts
-   use large typography
-   increase whitespace

At `xl` and `2xl`, do not simply make everything larger.

Increase maximum content width and breathing room instead.

------------------------------------------------------------------------

# 48. Visual Consistency

Maintain consistent:

``` text
border radius
spacing
typography
icon sizing
button sizing
card padding
animation timing
```

Do not create every section with a different design language.

The entire page should feel like one product.

------------------------------------------------------------------------

# 49. What NOT to Do

Do not:

-   clone Sendr.ai
-   copy Sendr.ai text
-   copy proprietary branding
-   use random stock photos
-   use emoji icons
-   use excessive gradients
-   use excessive glassmorphism
-   use excessive shadows
-   animate everything
-   create huge walls of text
-   use fake testimonials
-   use fake company logos
-   claim fake statistics
-   create meaningless decorative UI
-   add unnecessary dependencies
-   create a giant monolithic component
-   ignore mobile layouts
-   ignore accessibility

------------------------------------------------------------------------

# 50. Implementation Order

Implement in this exact order.

## Phase 1: Foundation

Create:

``` text
global styling
container system
typography
color system
animation variants
```

## Phase 2: First Viewport

Create:

``` text
Navbar
Hero
ProductMockup
FloatingCards
```

Stop and polish this area before continuing.

The first viewport is the most important part of the site.

## Phase 3: Supporting Content

Create:

``` text
LogoCloud
ProblemSolution
Stats
```

## Phase 4: Product Story

Create:

``` text
Workflow
BentoFeatures
ProductShowcase
```

## Phase 5: Trust and Conversion

Create:

``` text
Testimonials
UseCases
Pricing
FAQ
```

## Phase 6: Completion

Create:

``` text
FinalCTA
Footer
```

## Phase 7: Polish

Review:

``` text
responsive behavior
spacing
typography
hover states
Motion
accessibility
performance
visual consistency
```

------------------------------------------------------------------------

# 51. Quality Gate

Before considering the implementation complete, verify:

### Visual

-   Does the hero immediately communicate the product?
-   Is the typography strong?
-   Is there enough whitespace?
-   Does the product UI look real?
-   Are the colors restrained?
-   Are borders subtle?
-   Do the sections feel connected?

### Motion

-   Are entrance animations smooth?
-   Are hover animations subtle?
-   Are floating cards restrained?
-   Does the workflow transition smoothly?
-   Does reduced motion work?

### Responsive

-   Does 320px work?
-   Does 375px work?
-   Does 768px work?
-   Does 1024px work?
-   Does 1280px work?
-   Does 1440px work?
-   Is there any horizontal overflow?

### Code

-   Are components reusable?
-   Are repeated elements data-driven?
-   Is Home.jsx reasonably small?
-   Are shadcn components reused?
-   Is Motion centralized where possible?
-   Are Lucide icons used consistently?
-   Are there unnecessary dependencies?

### UX

-   Are CTAs obvious?
-   Is navigation clear?
-   Are interactive elements accessible?
-   Is the page easy to scan?
-   Does every section have a purpose?

------------------------------------------------------------------------

# 52. Final Instruction to the Coding Agent

Build the website as a polished, production-quality SaaS landing page.

Do not produce a generic AI landing-page template.

Do not copy Sendr.ai.

Use its general design language only as inspiration:

``` text
large typography
+
generous whitespace
+
product-first UI
+
workflow storytelling
+
bento layouts
+
subtle borders
+
floating interface cards
+
restrained colors
+
smooth Motion
```

The core visual identity must be original.

Use:

``` text
shadcn/ui
+
Motion
+
Lucide React
+
Tailwind CSS v4
+
React
```

The most important area is:

``` text
Navbar
        ↓
Hero
        ↓
Product Mockup
        ↓
Floating UI
```

Make this first viewport exceptionally polished before implementing the
rest of the page.

The final result should feel like a real SaaS product that could be
shipped, not a collection of UI components placed one after another.
