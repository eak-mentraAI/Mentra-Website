# SPEC-D02: Hero & Social Proof Redesign

**Sprint:** Design 2
**Priority:** HIGH — First impression and conversion impact

---

## Objective

Transform the hero section from a flat text+image layout to a layered, premium composition. Add a social proof bar below the hero to establish credibility immediately.

---

## Changes

### 1. Hero Background Depth

**File:** `src/components/sections/HeroSection.tsx`

Add layered background elements behind the existing content:

**Radial gradient glow behind Sprig:**
```tsx
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-mentra-blue/20 via-wisdom-purple/10 to-transparent rounded-full blur-3xl pointer-events-none" />
```

**Dot grid texture:**
Add a CSS dot pattern to the hero background using a pseudo-element or inline style:
```css
background-image: radial-gradient(circle, #3A86FF08 1px, transparent 1px);
background-size: 24px 24px;
```

This creates a subtle grid texture that adds visual interest without competing with content.

### 2. Floating Pill Badges

Add 3 floating badges around the hero area that gently animate:

```tsx
const pills = [
  { text: 'Adaptive Learning', color: 'mentra-blue', position: 'top-20 left-10' },
  { text: 'AI-Powered', color: 'growth-green', position: 'top-32 right-16' },
  { text: 'FERPA Compliant', color: 'wisdom-purple', position: 'bottom-24 left-20' },
];
```

Each pill:
- Styled as a rounded capsule with `bg-{color}/10 text-{color} border border-{color}/20`
- Font: `text-xs font-medium`
- Animated with `float` keyframe at different delays (0s, 0.5s, 1s)
- Hidden on mobile (`hidden lg:block`) to avoid clutter on small screens
- `pointer-events-none` so they don't interfere with clicks

### 3. Social Proof Bar

Create `src/components/sections/SocialProofBar.tsx`:

A slim horizontal strip displaying trust indicators:

```tsx
const trustItems = [
  { icon: ShieldCheck, text: 'COPPA & FERPA Compliant' },
  { icon: School, text: 'Built for K-12' },
  { icon: Lock, text: 'SOC 2 Type II Ready' },
  { icon: Users, text: 'Student-Centered Design' },
];
```

**Layout:**
- Full-width, light background (`bg-white/60 backdrop-blur-sm`)
- Horizontal flex with items centered, separated by subtle dividers
- Icons in muted brand colors, text in `text-gray-500 text-sm`
- On mobile: horizontal scroll or 2×2 grid
- Subtle top/bottom border: `border-y border-gray-100`

**Placement:** In `src/pages/Index.tsx`, insert between `<HeroSection />` and `<AboutSection />`.

### 4. Tailwind Config Addition

Add radial gradient utility if not present:

```ts
backgroundImage: {
  'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
```

---

## Validation

- Hero feels layered with visible depth (glow + dots + pills)
- Pills don't obscure headline or CTA buttons
- Social proof bar is visible immediately below the fold
- Mobile: pills hidden, social proof bar readable (no horizontal overflow)
- Lighthouse performance score unchanged (no heavy images added)
- Build passes, zero lint errors
