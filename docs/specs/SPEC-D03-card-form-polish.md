# SPEC-D03: Card & Form Polish

**Sprint:** Design 3
**Priority:** HIGH — Affects every persona page and CTA section

---

## Objective

Upgrade blurb cards from flat rectangles to interactive, branded components. Restyle form inputs from generic browser-default appearance to a cohesive branded look.

---

## Changes

### 1. Blurb Card Hover Improvements

**Files:** Teachers.tsx, Students.tsx, Parents.tsx, Institutions.tsx (blurb card render sections)

Current card:
```tsx
<div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
```

Updated card:
```tsx
<div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-t-4 hover:border-t-{color} group">
```

**Changes:**
- Default shadow reduced from `shadow-md` to `shadow-sm` (softer at rest)
- Hover shadow increased to `shadow-xl` (more dramatic lift)
- Add `hover:-translate-y-1` for physical lift effect
- Add colored top border on hover using the card's `color` prop
- Transition covers all properties: `transition-all duration-300`
- Add `group` class for child hover effects

**Colored top border approach:**
Since Tailwind can't do dynamic `hover:border-t-{color}`, implement with inline style or a small set of explicit class mappings:

```tsx
const colorBorderMap: Record<string, string> = {
  'mentra-blue': 'hover:border-t-mentra-blue',
  'growth-green': 'hover:border-t-growth-green',
  'curiosity-coral': 'hover:border-t-curiosity-coral',
  'grit-gold': 'hover:border-t-grit-gold',
  'wisdom-purple': 'hover:border-t-wisdom-purple',
};
```

**Icon micro-interaction:**
On card hover, the icon container scales slightly:
```tsx
<div className={`... group-hover:scale-110 transition-transform duration-300`}>
```

### 2. Index Page Card Improvements

Apply similar hover improvements to:
- Features carousel cards (`FeaturesSection.tsx`)
- About section challenge cards (`About.tsx`)
- "Who We Are" cards (`About.tsx`)
- Stats cards on Institutions page

For stats cards, use `scale-in` on hover instead of translate:
```tsx
hover:scale-105 transition-transform duration-300
```

### 3. Form Input Restyling

**Files:** All pages with forms (Teachers.tsx, Parents.tsx, Institutions.tsx)

Current input:
```tsx
<input className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-mentra-blue focus:border-mentra-blue text-base" />
```

Updated input:
```tsx
<input className="w-full px-4 py-3 rounded-lg bg-journal-sand/30 border border-gray-200 focus:border-mentra-blue focus:ring-2 focus:ring-mentra-blue/20 focus:shadow-[0_0_0_4px_rgba(58,134,255,0.08)] focus:bg-white transition-all duration-200 text-base placeholder:text-gray-400" />
```

**Changes:**
- Background: `bg-journal-sand/30` (warm tint at rest)
- Border: softer `border-gray-200`
- Border radius: `rounded` → `rounded-lg`
- Focus: blue ring + outer glow shadow + white background
- Placeholder: explicit `placeholder:text-gray-400`
- Smooth transition between states

### 4. Submit Button Upgrade

Current:
```tsx
<button className="w-full bg-mentra-blue text-white font-semibold py-3 rounded-full hover:bg-mentra-blue/90 transition text-base">
```

Updated:
```tsx
<button className="w-full bg-gradient-to-r from-mentra-blue to-mentra-blue/85 text-white font-semibold py-3 rounded-full hover:from-mentra-blue/95 hover:to-mentra-blue/80 hover:shadow-lg hover:shadow-mentra-blue/25 active:scale-[0.98] transition-all duration-200 text-base">
```

**Changes:**
- Gradient background (subtle, same-color gradient for depth)
- Hover: shadow glow in brand color
- Active: tiny scale press effect (0.98)
- Smooth transition on all properties

---

## Mobile Considerations

- `hover:-translate-y-1` should be wrapped in `@media (hover: hover)` to prevent sticky hover on touch devices
- Use Tailwind's `hover:` modifier which respects this by default on modern browsers
- Test on iOS Safari: ensure cards don't stay elevated after tap

---

## Validation

- Hover over any blurb card — see lift, shadow, and colored top border
- Tab through form inputs — see focus glow and background change
- Submit a form — Formspree receives the data (no regression)
- Mobile: cards don't stick in hover state after tap
- Run on iOS Safari and Chrome Android — all transitions smooth
- Build passes, zero lint errors
