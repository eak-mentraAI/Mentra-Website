# Mentra Website — Frontend Design Upgrade Roadmap

**Created:** 2026-03-12
**Goal:** Elevate the visual design from functional to premium while maintaining brand consistency.

---

## Sprint Overview

| Sprint | Theme | Duration | Spec |
|--------|-------|----------|------|
| **Sprint 1** | Scroll Animations & Micro-interactions | 1 day | [SPEC-D01](./specs/SPEC-D01-scroll-animations.md) |
| **Sprint 2** | Hero & Social Proof Redesign | 1 day | [SPEC-D02](./specs/SPEC-D02-hero-social-proof.md) |
| **Sprint 3** | Card & Form Polish | 1 day | [SPEC-D03](./specs/SPEC-D03-card-form-polish.md) |
| **Sprint 4** | Typography & Gradient Upgrades | 0.5 day | [SPEC-D04](./specs/SPEC-D04-typography-gradients.md) |
| **Sprint 5** | Testimonials & Sprig Personality | 1-2 days | [SPEC-D05](./specs/SPEC-D05-testimonials-sprig.md) |
| **Sprint 6** | How It Works Interactive Redesign | 1-2 days | [SPEC-D06](./specs/SPEC-D06-how-it-works-redesign.md) |
| **Sprint 7** | Page Transitions & Illustrated Icons | 1-2 days | [SPEC-D07](./specs/SPEC-D07-transitions-icons.md) |

---

## Sprint 1 — Scroll Animations & Micro-interactions
**Spec:** [SPEC-D01](./specs/SPEC-D01-scroll-animations.md)
**Status:** COMPLETE

### Tasks
- [ ] Create reusable `AnimateOnScroll` wrapper component using `IntersectionObserver`
- [ ] Support variants: `fade-in-up`, `fade-in-left`, `fade-in-right`, `scale-in`
- [ ] Add stagger support for grid children (cards animate in sequence)
- [ ] Apply to all section headings, blurb card grids, stats bars, and CTA blocks
- [ ] Apply to Index page sections: Hero, About, Features, Testimonials, Sprig, CTA
- [ ] Apply to persona pages: Teachers, Students, Parents, Institutions
- [ ] Apply to HowItWorks, Pricing, About, Blog, FAQ, Press
- [ ] Add corresponding keyframes to `tailwind.config.ts`
- [ ] Respect `prefers-reduced-motion` (disable all scroll animations)
- [ ] Verify no CLS introduced by animation (elements reserve space before animating)

### Acceptance Criteria
- Every major section animates into view on first scroll
- Grid children (cards) stagger with 100ms delay between items
- Zero layout shift — elements are invisible but occupy space before animation
- Animations disabled when `prefers-reduced-motion: reduce` is set
- Build passes, no new lint errors

---

## Sprint 2 — Hero & Social Proof Redesign
**Spec:** [SPEC-D02](./specs/SPEC-D02-hero-social-proof.md)
**Status:** COMPLETE

### Tasks
- [ ] Add radial gradient glow behind Sprig hero image (blue/purple, soft blur)
- [ ] Add floating pill badges to hero ("Adaptive Learning", "AI-Powered", "FERPA Compliant")
- [ ] Animate pills with gentle `float` and staggered delays
- [ ] Add subtle dot grid or noise texture to hero background
- [ ] Create `SocialProofBar` component below hero section
- [ ] Include trust indicators: school count, compliance badges, rating
- [ ] Style as slim horizontal strip with muted icons and text
- [ ] Add `SocialProofBar` to Index page between Hero and About sections
- [ ] Ensure fully responsive (stack or scroll on mobile)

### Acceptance Criteria
- Hero feels layered and premium, not flat
- Floating pills are readable and don't obscure content
- Social proof bar renders on all breakpoints
- No performance regression (no heavy images added)
- Build passes

---

## Sprint 3 — Card & Form Polish
**Spec:** [SPEC-D03](./specs/SPEC-D03-card-form-polish.md)
**Status:** COMPLETE

### Tasks
- [ ] Add `hover:-translate-y-1 transition-all duration-300` to all blurb cards
- [ ] Add colored top border on hover matching card's `color` prop
- [ ] Add subtle background gradient on hover (color/5 → transparent)
- [ ] Update card shadows: `shadow-md → shadow-sm` default, `hover:shadow-xl` on hover
- [ ] Restyle form inputs: add `bg-journal-sand/30` background
- [ ] Add blue left accent border on focus (`focus:border-l-4 focus:border-l-mentra-blue`)
- [ ] Add glow ring on focus (`focus:shadow-[0_0_0_4px_rgba(58,134,255,0.1)]`)
- [ ] Style submit buttons with gradient (`bg-gradient-to-r from-mentra-blue to-mentra-blue/80`)
- [ ] Add hover animation to submit buttons (subtle scale + shadow lift)
- [ ] Apply to all pages with forms: Teachers, Parents, Institutions
- [ ] Apply card improvements to all persona pages and Index sections

### Acceptance Criteria
- Cards feel interactive — clear visual feedback on hover
- Form inputs look branded, not browser-default
- Hover effects are smooth (no jank, 60fps transitions)
- Touch devices: hover states don't stick on mobile
- All form functionality preserved (Formspree submission works)
- Build passes

---

## Sprint 4 — Typography & Gradient Upgrades
**Spec:** [SPEC-D04](./specs/SPEC-D04-typography-gradients.md)
**Status:** COMPLETE

### Tasks
- [ ] Add gradient text utility class to Tailwind config
- [ ] Apply gradient text to hero H1 accent span (blue → green)
- [ ] Apply gradient text to persona page H1 accent spans
- [ ] Apply gradient text to CTA section headings
- [ ] Add subtle text-shadow to hero headings for depth
- [ ] Upgrade section dividers: replace plain spacing with gradient line or fade
- [ ] Add `text-balance` to all major headings for better line wrapping
- [ ] Review and tighten line-height on headings (leading-tight → leading-snug where appropriate)

### Acceptance Criteria
- Gradient text renders correctly on all browsers (Chrome, Safari, Firefox)
- Fallback for browsers without `bg-clip-text` support (solid color)
- Visual hierarchy feels stronger — headings pop more
- No accessibility regression (contrast ratios maintained)
- Build passes

---

## Sprint 5 — Testimonials & Sprig Personality
**Spec:** [SPEC-D05](./specs/SPEC-D05-testimonials-sprig.md)
**Status:** COMPLETE

### Tasks
- [ ] Redesign testimonials from single rotating card to multi-card layout
- [ ] Show 3 testimonials at once on desktop, 1 on mobile (carousel or stacked)
- [ ] Vary card sizes: one featured (larger), two supporting (smaller)
- [ ] Add quotation mark decorative element (large, faded brand color)
- [ ] Add subtle entrance animation to testimonial cards
- [ ] Sprig personality: create CSS-based expression transitions
- [ ] Swap Sprig image src on scroll milestones (wave → thinking → happy)
- [ ] Add subtle bob/bounce animation to Sprig in hero (idle state)
- [ ] Add Sprig reaction on CTA hover (e.g., swap to happy expression)

### Acceptance Criteria
- Testimonials feel more trustworthy with multiple visible at once
- Testimonial layout is responsive (3 → 2 → 1 column)
- Sprig feels alive — at least 2 expression changes during a full page scroll
- Sprig transitions are smooth (CSS transition on opacity/transform, not jarring swaps)
- Image preloading prevents flash when swapping Sprig expressions
- Build passes

---

## Sprint 6 — How It Works Interactive Redesign
**Spec:** [SPEC-D06](./specs/SPEC-D06-how-it-works-redesign.md)
**Status:** COMPLETE

### Tasks
- [ ] Replace carousel-based flywheel with vertical scroll-driven timeline
- [ ] Left panel: sticky step indicator with numbered nodes and connecting line
- [ ] Right panel: step content (heading, description, illustration) animates per step
- [ ] Active step highlights in timeline as user scrolls through
- [ ] Progress line fills as user scrolls through steps
- [ ] Add icons or small illustrations per step (reuse Lucide or Sprig variants)
- [ ] Mobile: collapse to single-column with step markers inline
- [ ] Preserve existing content: all 5 flywheel steps and "What You'll Discover" grid
- [ ] Ensure YouTube embed still works and is responsive

### Acceptance Criteria
- Each flywheel step activates as the user scrolls to it
- Timeline progress is visually clear (filled line + active node)
- Content transitions are smooth (fade or slide, not abrupt)
- Mobile layout is readable without horizontal scroll
- Video embed maintains 16:9 aspect ratio at all sizes
- Build passes

---

## Sprint 7 — Page Transitions & Illustrated Icons
**Spec:** [SPEC-D07](./specs/SPEC-D07-transitions-icons.md)
**Status:** COMPLETE

### Tasks
- [ ] Install `framer-motion` (lightweight, tree-shakeable)
- [ ] Create `PageTransition` wrapper component with fade + subtle slide
- [ ] Wrap all `<Route>` elements with `AnimatePresence` and `PageTransition`
- [ ] Transition duration: 200-300ms (fast enough to feel snappy)
- [ ] Replace Lucide icons on persona page blurb cards with duotone SVG icons
- [ ] Create 28 custom duotone icons (7 per persona page) using brand color pairs
- [ ] Icons use primary brand color for fill, lighter tint (10-20%) for secondary shape
- [ ] Ensure icons are inline SVG (no external requests, tree-shakeable)
- [ ] Fallback: keep Lucide icons for nav, footer, and utility contexts

### Acceptance Criteria
- Page navigation feels app-like with smooth enter/exit transitions
- No flash of blank content between pages
- Duotone icons are visually distinct from generic Lucide line icons
- Icons render crisp at all sizes (24px card icons, tested)
- Bundle size increase from framer-motion is < 15 KB gzip
- Build passes
