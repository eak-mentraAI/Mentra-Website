# Mobile Friendliness & Performance Audit

**Date:** 2026-03-12
**Status:** REMEDIATED

---

## Issues Found & Fixed

### CRITICAL — CLS Prevention
| File | Fix |
|------|-----|
| All `<img>` tags across 15+ files | Added explicit `width` and `height` HTML attributes to prevent Cumulative Layout Shift |
| Blog images (featured + grid) | Added `loading="lazy"` and dimensions |
| Sprig character images | Added dimensions (`width`/`height`) throughout |

### HIGH — Mobile Usability
| Issue | Fix |
|-------|-----|
| Mobile menu doesn't lock body scroll | Added `overflow: hidden` on body when menu is open (Header.tsx) |
| Form inputs too short for touch (32px) | Increased `py-2` → `py-3` on all inputs/textareas/buttons (Educators, Parents) |
| Cookie banner ignores safe areas | Added `pb-[env(safe-area-inset-bottom)]` for iPhone gesture area |
| Headings too large on small screens | Added `text-3xl sm:text-4xl` breakpoint to About, CTA, Testimonials, Blog headings |
| Logo too large on mobile (64px) | Reduced to `h-12 sm:h-16 md:h-20` in Header and Footer |
| Blog grid jumps 1→3 columns | Changed to `sm:grid-cols-2 lg:grid-cols-3` for tablet breakpoint |
| Testimonial card padding cramped on mobile | Added `p-6 sm:p-12` responsive padding |

### MEDIUM — Performance
| Issue | Fix |
|-------|-----|
| ~30 redundant CSS color utilities in index.css | Removed — Tailwind config already defines all brand colors |
| Dead ReactFlow CSS (`.react-flow__node`, `.reactflow-no-scroll`) | Removed from index.css |
| Dead template CSS (`.logo`, `.card`, `.read-the-docs`, `#root text-align`) | Removed from App.css |
| Duplicate `@keyframes` (CSS vs Tailwind with conflicting values) | Consolidated — single source of truth in tailwind.config.ts |
| Unused sidebar CSS variables (7 vars) | Removed from index.css |
| Font loads 7 weights (300-900) | Reduced to 5 weights (400, 500, 600, 700, 800) |
| Missing `theme-color` meta tag | Added `<meta name="theme-color" content="#3A86FF">` to index.html and 404.html |
| No `prefers-reduced-motion` support | Added global media query to disable all animations |
| Missing `pulse-slow` keyframe (used in HeroSection) | Added to tailwind.config.ts |

### Results
- **CSS bundle:** 51.20 KB → 49.42 KB (-3.5%)
- **Font payload:** ~7 weights → 5 weights (~30% reduction)
- **CLS risk:** Eliminated across all image elements
- **Touch targets:** All form inputs now meet 44px minimum height
- **Accessibility:** Animations respect `prefers-reduced-motion`
- **Build:** Typecheck clean, lint 0 errors, build passes
