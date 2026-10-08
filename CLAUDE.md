# CLAUDE.md — Mentra Website

Marketing site for Mentra AI at **https://www.mymentra.ai**. Mentra is a Socratic, K-12 AI
learning platform: it captures learning signals as students work and turns them into
plain-prose insight for teachers, so the AI scaffolding fades and kids learn to think for
themselves. COPPA/FERPA compliance and honest measurement are core brand promises; copy
must never overclaim them.

**Audiences:** district/school buyers and teachers (primary), parents, sponsors/donors
(Sponsor a School).
**Primary conversion:** "Schedule a call" modal (`ScheduleCallModal`, posts to Formspree),
opened from anywhere via `useScheduleCall()`.

## Stack

- React 18 + TypeScript + Vite 5 (SWC), single-page app
- Tailwind CSS + shadcn/ui (Radix primitives) in `src/components/ui/`, framer-motion, lucide/iconify icons
- React Router 6; blog posts are Markdown in `src/content/blog/` rendered with react-markdown
- Hosting: GitHub Pages with custom domain (`public/CNAME`). `.github/workflows/deploy.yml`
  deploys **on every push to `main`**, so merging is publishing.

## Layout

- `src/pages/`: one file per route (Index, About, Platform, Teachers, SponsorASchool, Blog, BlogPost, Press, legal pages). Routes and old-route redirects live in `src/App.tsx`.
- `src/components/sections/`: homepage and shared sections (Hero, HowItWorks, PersonaSwitcher, Pricing, FAQ, CTA, TrustStrip, SponsorCallout, ScheduleCallModal, CookieConsent)
- `src/components/layout/`: Header, Footer, ErrorBoundary, PageTransition
- `src/data/personas.ts`: persona copy. `src/lib/`: blog loader, cookie consent, `cn()` util
- `docs/`: audits, design/remediation roadmaps, specs (`SPEC-00x`, `SPEC-D0x`)

## Commands

```bash
npm ci
npm run lint
npx tsc --noEmit
npm run build      # also copies dist/index.html to dist/404.html for SPA routing
npm run dev        # http://localhost:3000
```

CI (`.github/workflows/ci.yml`) runs lint, typecheck and build on PRs. There are no unit tests,
so "done" means all three pass.

## Conventions

- Only `Index` loads eagerly. Every other page is `React.lazy()` in `App.tsx`; keep it that way.
- Style with Tailwind utilities and the existing shadcn components. Don't add a component library.
- Use the `@/` import alias.
- Keep copy consistent with the "cognition machine" / Socratic positioning used on About, Platform and FAQ. Pricing claims must match `PricingSection.tsx` and the FAQ.
- Analytics run only after cookie consent (`src/lib/cookies.ts`). Never add tracking that bypasses consent.
- Mobile performance matters (see `docs/mobile-performance-audit.md`): optimize images, avoid heavy new dependencies.
- Commits use `type(scope): description` (feat, fix, docs, chore, refactor, perf).

## Agent rules

- Work on a `claude/` branch and open a PR. Never push to `main` or merge, because pushing to `main` deploys.
- Don't edit `public/CNAME`, `.github/workflows/`, or the Formspree endpoint without explicit approval.
- Don't invent customer logos, testimonials, statistics or certifications. Proof must be real, or be clearly marked as a placeholder in the PR for a human to fill.
- Contact address is `hello@mymentra.ai`. Legal pages still say `privacy@mentra.ai` and `legal@mentra.ai` (wrong domain). Ask before changing them, because those mailboxes may not exist.
