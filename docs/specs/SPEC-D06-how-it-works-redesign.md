# SPEC-D06: How It Works Interactive Redesign

**Sprint:** Design 6
**Priority:** MEDIUM — Key conversion page

---

## Objective

Replace the carousel-based Mentra Flywheel with a scroll-driven vertical timeline that activates steps as the user scrolls. This pattern (used by Stripe, Linear, Vercel) is more engaging and easier to follow than a carousel.

---

## Changes

### 1. Scroll-Driven Timeline Component

Create `src/components/sections/ScrollTimeline.tsx`:

**Desktop layout (lg+):**
```
┌─────────────────────────────────────────┐
│                                         │
│  ● Step 1 (active)     [ Content &     │
│  │                       illustration ] │
│  ○ Step 2                               │
│  │                                      │
│  ○ Step 3                               │
│  │                                      │
│  ○ Step 4                               │
│  │                                      │
│  ○ Step 5                               │
│                                         │
└─────────────────────────────────────────┘
```

**Left panel (sticky):**
- Vertical line connecting numbered nodes
- Active node: filled circle in `mentra-blue`, label bold
- Inactive nodes: hollow circles in `gray-300`, label muted
- Progress fill: the line between nodes fills with `mentra-blue` as user scrolls
- Panel is `sticky top-24` so it stays visible while right content scrolls

**Right panel (scrollable):**
- Each step is a full section (~60vh height) that scrolls naturally
- Content: heading, description, and optional icon/illustration
- Active step content fades in; previous/next steps are faded out

### 2. Step Data

Preserve the existing 5 flywheel steps from the current `HowItWorks.tsx`:

```tsx
const steps = [
  {
    number: 1,
    title: 'Explore',
    description: '...existing text...',
    icon: Compass,         // or Sprig variant
    color: 'curiosity-coral',
  },
  // ... steps 2-5
];
```

### 3. Scroll Detection

Use `IntersectionObserver` on each step's content section:

```tsx
// Each step section has a ref
// When a step enters the viewport (threshold: 0.5), it becomes active
// Active step index drives:
//   - Timeline node highlighting
//   - Progress line fill (height = activeIndex / totalSteps * 100%)
//   - Content opacity/transform transitions
```

**Progress line implementation:**
```tsx
<div className="absolute left-4 top-0 w-0.5 bg-gray-200 h-full">
  <div
    className="w-full bg-mentra-blue transition-all duration-500"
    style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
  />
</div>
```

### 4. Mobile Layout

On mobile (< lg), collapse to a single column:

```
● Step 1
  [ Content block ]

● Step 2
  [ Content block ]

...
```

- No sticky panel — steps flow vertically with inline markers
- Each step marker is a colored dot with a connecting line
- Content animates in as user scrolls (reuse `AnimateOnScroll` from Sprint 1)
- Active step detection still works for highlighting

### 5. Preserve Existing Sections

The HowItWorks page has other sections that should remain:
- YouTube video embed (top of page) — keep as-is
- "What You'll Discover" 3-column grid — keep as-is, apply scroll animation
- Student testimonial quote — keep as-is

Only the flywheel carousel is replaced with the timeline.

### 6. Content Transitions

When a step becomes active:
```tsx
// Active step
className="opacity-100 translate-y-0 transition-all duration-500"

// Inactive step
className="opacity-30 translate-y-4 transition-all duration-500"
```

This creates a smooth spotlight effect — the active step is fully visible while surrounding steps fade.

---

## Performance

- No external libraries needed — pure CSS + IntersectionObserver
- Step content is always in the DOM (no lazy loading needed for 5 items)
- CSS transitions only (no JS animation frames)
- Total new code: ~150-200 lines (component + styles)

---

## Validation

- Scroll through the flywheel section — each step activates sequentially
- Timeline progress line fills as you scroll down
- Active node is visually distinct (filled, colored, bold label)
- Mobile: steps stack vertically with inline markers
- YouTube embed still plays correctly
- "What You'll Discover" grid unchanged
- Tab/keyboard navigation: steps are accessible (can tab through)
- `prefers-reduced-motion`: steps visible without animation, progress line still fills
- Build passes, zero lint errors
