# SPEC-D04: Typography & Gradient Upgrades

**Sprint:** Design 4
**Priority:** MEDIUM — Visual refinement layer

---

## Objective

Add gradient text treatment to key headings and refine typographic details for stronger visual hierarchy. Small changes that compound across every page.

---

## Changes

### 1. Gradient Text Utility

**File:** `tailwind.config.ts`

No config change needed — Tailwind supports gradient text natively:

```tsx
<span className="bg-gradient-to-r from-mentra-blue to-growth-green bg-clip-text text-transparent">
  gets you
</span>
```

**Browser support:** Works in all modern browsers. For safety, test in Safari (requires `-webkit-background-clip`). Tailwind's `bg-clip-text` outputs both prefixed and unprefixed.

**Fallback:** If `bg-clip-text` is unsupported, the text is invisible. Add a fallback by setting `text-mentra-blue` as a base class — the gradient overrides it when supported.

### 2. Application Map

Apply gradient text to the accent spans on key headings:

| Page | Current | Updated Gradient |
|------|---------|------------------|
| Index Hero | `text-mentra-blue` on "Growth" | `from-mentra-blue to-growth-green` |
| Students H1 | `text-mentra-blue` on "gets you" | `from-mentra-blue to-wisdom-purple` |
| Teachers H1 | `text-mentra-blue` on "Reach them..." | `from-mentra-blue to-growth-green` |
| Parents H1 | `text-mentra-blue` on "when it actually matters" | `from-grit-gold to-curiosity-coral` |
| Institutions H1 | `text-mentra-blue` on "will actually approve" | `from-mentra-blue to-wisdom-purple` |
| CTA Section | `text-mentra-blue` on "Begin Your Journey" | `from-mentra-blue to-growth-green` |

**Rule:** Only apply gradient to the *accent phrase* in H1 headings and the main CTA. Don't overuse — if everything is gradient, nothing stands out.

### 3. Heading Text Shadow

Add subtle text shadow to hero H1 elements for depth against gradient backgrounds:

```tsx
style={{ textShadow: '0 2px 4px rgba(0,0,0,0.06)' }}
```

Apply only to:
- Index hero H1
- Persona page H1s

This is subtle — barely visible on white backgrounds but adds perceived depth.

### 4. Section Dividers

Currently sections are separated only by padding. Add subtle gradient dividers between major sections on the Index page:

```tsx
<div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-mentra-blue/40 to-growth-green/40" />
```

Place between:
- About → Features
- Features → Testimonials
- Testimonials → Sprig Action
- Sprig Action → CTA

Keep these small (w-24) and subtle (40% opacity). They provide visual rhythm without being heavy-handed.

### 5. Text Balance

Add `text-balance` to all major headings for better line wrapping:

```tsx
<h1 className="... text-balance">
```

`text-wrap: balance` distributes text more evenly across lines, preventing awkward short last lines. Supported in Chrome 114+, Safari 17.4+, Firefox (behind flag). Falls back gracefully to normal wrapping.

### 6. Line Height Tightening

Review headings using `leading-tight` (1.25) and consider `leading-snug` (1.375) where text spans 2+ lines for better readability:

- Single-line headings: keep `leading-tight`
- Multi-line headings (hero, persona hooks): use `leading-snug`
- Body text: keep `leading-relaxed` (1.625)

---

## Validation

- Gradient text renders in Chrome, Safari, Firefox — no invisible text
- Text shadow is barely perceptible, not heavy or drop-shadow-like
- Section dividers visible but subtle between Index sections
- `text-balance` improves heading wrapping where supported
- No accessibility regression — check color contrast on gradient text endpoints
- Build passes, zero lint errors
