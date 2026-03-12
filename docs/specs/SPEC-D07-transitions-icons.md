# SPEC-D07: Page Transitions & Illustrated Icons

**Sprint:** Design 7
**Priority:** LOW-MEDIUM — Final polish layer

---

## Objective

Add smooth page transitions to make navigation feel app-like. Replace generic Lucide line icons on persona page blurb cards with custom duotone SVG icons for brand differentiation.

---

## Changes

### 1. Install framer-motion

```bash
npm install framer-motion
```

**Bundle impact:** framer-motion is tree-shakeable. Importing only `motion`, `AnimatePresence` adds ~13-15 KB gzip. This is acceptable for the UX improvement.

### 2. PageTransition Wrapper

Create `src/components/layout/PageTransition.tsx`:

```tsx
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const pageTransition = {
  duration: 0.25,
  ease: 'easeInOut',
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}
```

### 3. Integration in App.tsx

Wrap `<Routes>` with `AnimatePresence`:

```tsx
import { AnimatePresence } from 'framer-motion';

// Inside the Router
<AnimatePresence mode="wait">
  <Routes location={location} key={location.pathname}>
    ...
  </Routes>
</AnimatePresence>
```

Each page component wraps its content in `<PageTransition>`:

```tsx
export default function Teachers() {
  return (
    <PageTransition>
      <div className="min-h-screen ...">
        ...
      </div>
    </PageTransition>
  );
}
```

**Important:** `mode="wait"` ensures the exiting page completes its animation before the entering page starts. This prevents layout overlap.

### 4. Respect Reduced Motion

```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const pageTransition = {
  duration: prefersReducedMotion ? 0 : 0.25,
  ease: 'easeInOut',
};
```

### 5. Duotone Icon System

Create `src/components/icons/` directory with custom SVG icons.

**Design approach:**
Each icon uses two layers from the card's brand color:
- **Primary shape:** Full brand color (e.g., `text-mentra-blue`)
- **Secondary shape:** 20% opacity of the same color (e.g., `text-mentra-blue/20`)

**Example icon component:**
```tsx
// src/components/icons/AdaptiveLearning.tsx
export default function AdaptiveLearning({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background shape at 20% opacity */}
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2" />
      {/* Primary shape */}
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
```

Using `currentColor` means the icon inherits the text color class from its parent, just like Lucide icons. This keeps the existing `text-{color}` classes working.

### 6. Icon Map

28 icons total (7 per persona page):

**Teachers:**
| Card | Current (Lucide) | Duotone Concept |
|------|-------------------|-----------------|
| Intelligence Hub | Eye | Eye with radar waves |
| Weekly Digest | Clock | Calendar with checkmark |
| Live Dashboard | BarChart3 | Screen with live pulse |
| Concept Maps | Brain | Brain with connection nodes |
| AI Control | Shield | Shield with toggle |
| Spot Quiet Ones | Sparkles | Magnifying glass with heart |
| Grading | FileText | Document with star |

**Students:**
| Card | Current (Lucide) | Duotone Concept |
|------|-------------------|-----------------|
| Sparks | Sparkles | Lightbulb with sparks |
| Adaptive Tutor | Brain | Chat bubble with brain |
| Stuck Detection | LifeBuoy | Life ring with arrow |
| Code/Build | Code | Terminal with brackets |
| Learner Passport | BarChart3 | ID card with chart |
| XP/Sprigs | Trophy | Trophy with growth plant |
| Journal | BookOpen | Open book with pen |

**Parents:**
| Card | Current (Lucide) | Duotone Concept |
|------|-------------------|-----------------|
| Status Light | CircleDot | Traffic light (simplified) |
| Full Dashboard | LayoutDashboard | Dashboard with magnifier |
| Safety Monitor | ShieldAlert | Shield with pulse |
| Goals | Target | Target with growth arrow |
| Consent | KeyRound | Key with lock |
| Portability | FolderOutput | Folder with export arrow |
| Emotional Data | HeartHandshake | Heart with shield |
| Learner Identity | Fingerprint | Fingerprint with spark |

**Institutions:**
| Card | Current (Lucide) | Duotone Concept |
|------|-------------------|-----------------|
| COPPA/FERPA | ShieldCheck | Shield with checkmark badge |
| Roster Integration | Plug | Plug with sync arrows |
| Kill Switch | Power | Power button with bolt |
| Explainability | Eye | Eye with document |
| Data Portability | FileText | File with lock + arrow |
| IT Observability | Activity | Dashboard with heartbeat |
| Tenant Isolation | Lock | Lock with wall |

### 7. Icon Replacement

In each persona page, replace the Lucide import with the custom icon:

```tsx
// Before
import { Eye, Clock, ... } from 'lucide-react';

// After
import IntelligenceHub from '@/components/icons/IntelligenceHub';
import WeeklyDigest from '@/components/icons/WeeklyDigest';
// ...
```

Update the blurbs array to use the custom component:
```tsx
{ icon: IntelligenceHub, title: '...', ... }
```

The rendering code (`<b.icon className={...} />`) stays the same since both Lucide and custom icons accept `className`.

### 8. Fallback Strategy

- Keep Lucide icons for Header nav, Footer, FAQ, and utility UI
- Custom duotone icons only on the 4 persona pages' blurb cards
- If a custom icon isn't ready, the Lucide fallback still works

---

## Validation

- Navigate between pages — smooth fade+slide transition (no flash of white)
- Transition duration feels snappy (~250ms), not sluggish
- Back/forward browser navigation works correctly with transitions
- Custom icons render at 24px with correct brand colors
- Icons look crisp on retina displays (SVG, resolution-independent)
- `prefers-reduced-motion`: instant page switch, no animation
- Bundle size increase < 15 KB gzip (check with `npx vite-bundle-visualizer`)
- Build passes, zero lint errors
