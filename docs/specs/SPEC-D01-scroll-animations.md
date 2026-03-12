# SPEC-D01: Scroll Animations & Micro-interactions

**Sprint:** Design 1
**Priority:** HIGH — Biggest visual impact for least code

---

## Objective

Add scroll-triggered entrance animations to all major sections and card grids. The site currently renders all content statically — sections appear fully visible on load regardless of scroll position. Adding entrance animations creates a sense of progression and polish.

---

## Changes

### 1. `AnimateOnScroll` Component

Create `src/components/ui/AnimateOnScroll.tsx` — a wrapper that uses `IntersectionObserver` to trigger CSS animations when elements enter the viewport.

```tsx
interface Props {
  children: React.ReactNode;
  variant?: 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in';
  delay?: number;       // ms delay (for stagger)
  threshold?: number;   // 0-1, default 0.1
  once?: boolean;       // animate only once (default true)
  className?: string;
}
```

**Implementation approach:**
- Uses a single `IntersectionObserver` instance per component
- Element starts with `opacity: 0` and a transform offset
- When intersection fires, a CSS class is added that triggers the animation
- `once: true` disconnects the observer after first trigger
- Respects `prefers-reduced-motion` — skips animation, renders visible immediately

**Critical: No CLS.**
The wrapper must reserve layout space. Use `visibility: hidden` (not `display: none`) or `opacity: 0` with the element's full dimensions intact. The element occupies its natural space in the document flow at all times.

### 2. Stagger Helper

For card grids, provide a `staggerChildren` prop or a `StaggerGroup` wrapper:

```tsx
<AnimateOnScroll variant="fade-in-up">
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map((item, i) => (
      <AnimateOnScroll key={item.id} variant="fade-in-up" delay={i * 100}>
        <Card ... />
      </AnimateOnScroll>
    ))}
  </div>
</AnimateOnScroll>
```

Cards animate in sequence with 100ms between each. The parent section heading animates first, then cards follow.

### 3. Tailwind Keyframes

Add to `tailwind.config.ts`:

```ts
keyframes: {
  'fade-in-up': {
    '0%': { opacity: '0', transform: 'translateY(20px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  'fade-in-left': {
    '0%': { opacity: '0', transform: 'translateX(-20px)' },
    '100%': { opacity: '1', transform: 'translateX(0)' },
  },
  'fade-in-right': {
    '0%': { opacity: '0', transform: 'translateX(20px)' },
    '100%': { opacity: '1', transform: 'translateX(0)' },
  },
  'scale-in': {
    '0%': { opacity: '0', transform: 'scale(0.95)' },
    '100%': { opacity: '1', transform: 'scale(1)' },
  },
},
animation: {
  'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
  'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
  'fade-in-right': 'fade-in-right 0.6s ease-out forwards',
  'scale-in': 'scale-in 0.5s ease-out forwards',
}
```

### 4. Application Map

| Page | Sections to animate | Variant |
|------|---------------------|---------|
| Index | Hero (already visible), About, Features, Testimonials, Sprig, CTA | `fade-in-up` for all, `scale-in` for CTA |
| Teachers | Hook, Problem, Blurb grid, Trust bar, CTA | `fade-in-up`, cards staggered |
| Students | Hook, Problem, Blurb grid, Bigger Picture, CTA | `fade-in-up`, cards staggered |
| Parents | Hook, Problem, Blurb grid, Trust bar, CTA | `fade-in-up`, cards staggered |
| Institutions | Hook, Problem, Stats bar, Blurb grid, Trust quote, CTA | `fade-in-up`, stats `scale-in` |
| HowItWorks | Video, Discovery grid, Flywheel, Testimonial | `fade-in-up` |
| Pricing | Toggle, Plan cards, FAQ | `fade-in-up`, cards staggered |
| About | Hero, Vision, Challenge cards, Who We Are, Roadmap | `fade-in-up`, cards staggered |
| Blog | Featured, Grid | `fade-in-up` |
| FAQ | Accordion items | `fade-in-up`, staggered |

**Exception:** Hero sections on every page should NOT animate — they're above the fold and should be immediately visible.

---

## Validation

- Scroll through every page — sections animate in smoothly on first encounter
- Scroll back up and down — animations don't replay (once: true)
- Test with `prefers-reduced-motion: reduce` in devtools — all content visible immediately, no animation
- Lighthouse audit — CLS score remains 0
- Test on mobile Safari and Chrome — IntersectionObserver supported in all target browsers
- Build passes, zero lint errors
