# SPEC-D05: Testimonials & Sprig Personality

**Sprint:** Design 5
**Priority:** MEDIUM — Trust and brand personality

---

## Objective

Redesign the testimonials section from a single auto-rotating card to a multi-card layout that shows more social proof at once. Make Sprig feel alive by transitioning between expressions as the user scrolls.

---

## Changes

### 1. Testimonials Multi-Card Layout

**File:** `src/components/sections/TestimonialsSection.tsx`

**Current:** Single testimonial card with auto-rotate (5s interval), prev/next buttons.

**New layout:**

Desktop (lg+):
```
┌─────────────────┐  ┌───────────┐
│                  │  │           │
│  Featured Quote  │  │  Quote 2  │
│  (larger card)   │  │           │
│                  │  ├───────────┤
│                  │  │           │
└─────────────────┘  │  Quote 3  │
                      │           │
                      └───────────┘
```

- Featured card: spans 60% width, larger font (text-xl), full author details
- Supporting cards: 40% width, stacked, smaller font (text-base), compact
- Featured rotates on a longer interval (8s) or stays static
- Supporting cards can rotate independently

Tablet (md):
- 2 equal cards side by side

Mobile:
- Single card with swipe/dots (similar to current behavior)

**Decorative elements:**
- Large quotation mark (`"`) behind featured card: `text-8xl text-mentra-blue/10 absolute -top-4 -left-2`
- Subtle gradient line between featured and supporting cards

### 2. Testimonial Card Component

Extract a reusable `TestimonialCard` component:

```tsx
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  featured?: boolean;
}
```

- `featured` controls size, font, and layout
- Both variants share the same structure (avatar, name, role, quote)
- Entrance animation via `AnimateOnScroll` from Sprint 1

### 3. Sprig Expression Transitions

**Files:** `src/components/sections/HeroSection.tsx`, `src/components/sections/CTASection.tsx`

**Concept:** Sprig's image changes based on user context:

| Context | Expression | Image |
|---------|-----------|-------|
| Hero idle | Wave | `/images/sprig/sprig-wave.png` |
| Scrolled past hero | Thinking | `/images/sprig/sprig-thinking.png` |
| CTA section visible | Happy | `/images/sprig/sprig-happy.png` |
| CTA button hovered | Happy | `/images/sprig/sprig-happy.png` |

**Implementation:**

Create a `useSprigExpression` hook:
```tsx
function useSprigExpression(): 'wave' | 'thinking' | 'happy' {
  // Uses IntersectionObserver on sentinel elements
  // Returns current expression based on scroll position
}
```

In HeroSection, render the Sprig image with a CSS transition:
```tsx
<div className="relative">
  <img
    src={`/images/sprig/sprig-${expression}.png`}
    className="transition-opacity duration-500"
  />
</div>
```

**Preloading:** Add `<link rel="preload">` for all Sprig expression images in `index.html` to prevent flash on first swap:
```html
<link rel="preload" as="image" href="/images/sprig/sprig-wave.png" />
<link rel="preload" as="image" href="/images/sprig/sprig-thinking.png" />
<link rel="preload" as="image" href="/images/sprig/sprig-happy.png" />
```

### 4. Sprig Idle Animation

Add a gentle bob to the Sprig hero image:

```tsx
<img className="animate-bounce-gentle" ... />
```

The `bounce-gentle` keyframe already exists in the Tailwind config (2s, ±5px). Apply it to the hero Sprig image only.

---

## Mobile Considerations

- Testimonials: single card with dots on mobile, no auto-rotate (let user control)
- Sprig expressions: still transition on scroll but with fewer checkpoints
- Bob animation: reduce or disable on mobile to save battery

---

## Validation

- Desktop: 3 testimonials visible simultaneously
- Mobile: single testimonial with swipe navigation
- Sprig changes expression at least twice during a full Index page scroll
- No image flash when Sprig expression changes (preloaded)
- Bob animation is subtle and doesn't feel jittery
- `prefers-reduced-motion`: Sprig stays static (wave), no bob, no transitions
- Build passes, zero lint errors
