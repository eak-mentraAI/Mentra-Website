# Mentra Website Codebase Audit

**Date:** 2026-03-12
**Scope:** Full codebase review — architecture, security, code quality, folder structure, deployment

---

## Executive Summary

The Mentra Website is a React + Vite SPA deployed to GitHub Pages, with an untracked Express.js dashboard (`dashboard-refactored/`) living alongside it. The marketing site is reasonably structured, but the codebase has **critical security issues** (hardcoded credentials and API keys), **dead/orphaned code**, **no containerization**, **no test coverage**, and several architectural concerns that will compound as the project grows.

**Severity breakdown:**
- CRITICAL: 3
- HIGH: 6
- MEDIUM: 8
- LOW: 5

---

## 1. CRITICAL: Security Vulnerabilities

### 1.1 Hardcoded Credentials & API Keys in Source Code
**File:** `dashboard-refactored/config/constants.js`
**Severity:** CRITICAL

```js
VALID_CREDENTIALS: {
    'edward.kerr@mymentra.ai': '<REDACTED>',
    'amine.elbadaoui@mymentra.ai': '<REDACTED>'
},
API_KEYS: {
    HUGGINGFACE: '<REDACTED>',
    VLLM: '<REDACTED>'
}
```

Plaintext passwords and API keys are committed to version control. Anyone with repo access (or if the repo is/was public) has these credentials. These should be **immediately rotated** regardless of any other changes.

**Remediation:**
- Rotate ALL exposed credentials and API keys immediately
- Move to environment variables (`.env` files, never committed)
- Use a secrets manager (e.g., GitHub Secrets, AWS Secrets Manager, Vault)
- Add `.env` to `.gitignore` (it's not there currently)
- Implement proper password hashing (bcrypt) for any credential storage

### 1.2 Hardcoded Session Secret
**File:** `dashboard-refactored/config/constants.js:13`
**Severity:** CRITICAL

```js
SECRET: process.env.SESSION_SECRET || 'your-secret-key-change-this',
```

The fallback session secret is a known placeholder. In any environment where `SESSION_SECRET` isn't set, sessions are trivially forgeable.

### 1.3 Shell Injection via `exec()`
**File:** `dashboard-refactored/server/services/vllm.js:71,97`
**Severity:** CRITICAL

```js
exec('../start.sh', { cwd: process.cwd() }, ...);
exec('../stop.sh', { cwd: process.cwd() }, ...);
```

While these specific calls use static strings, the use of `child_process.exec()` is inherently dangerous. If any user input ever reaches these paths (or if shell scripts are modified), it becomes a remote code execution vector. The pattern should use `execFile()` or `spawn()` instead.

---

## 2. HIGH: Architecture & Code Organization

### 2.1 Two Disconnected Applications in One Repository
**Severity:** HIGH

The repo contains two entirely separate applications:
1. **React SPA** (marketing site) — Vite + React + TypeScript
2. **Express dashboard** (`dashboard-refactored/`) — Node.js + Handlebars + vanilla JS

These share no code, no dependencies, and no deployment pipeline. The dashboard has its own `package.json` but is not referenced from the root. This creates confusion about what this repo actually is.

**Remediation:**
- Split into separate repos, or
- Use a monorepo tool (Turborepo, Nx) with proper workspace configuration
- Each app should have independent CI/CD pipelines

### 2.2 Massive UI Component Library (Mostly Unused)
**Severity:** HIGH

The `src/components/ui/` directory contains **50+ shadcn/ui components**, most of which appear unused by the marketing site pages. Observed unused components include:
- `calendar.tsx`, `carousel.tsx`, `chart.tsx`, `command.tsx`, `context-menu.tsx`
- `drawer.tsx`, `hover-card.tsx`, `input-otp.tsx`, `menubar.tsx`
- `pagination.tsx`, `resizable.tsx`, `slider.tsx`, `table.tsx`, `tabs.tsx`
- `ExportModal.tsx`, `FormFieldWithGuidance.tsx`, `LoadWorkflowModal.tsx`
- `NewProjectModal.tsx`, `ProjectGoalModal.tsx`, `ProjectMenu.tsx`, `TemplateModal.tsx`

The dashboard-related modals (`ExportModal`, `LoadWorkflowModal`, `ProjectGoalModal`, etc.) are remnants of a feature that doesn't exist in the marketing site. This is dead code bloat.

**Remediation:**
- Audit component usage with a tree-shaking analysis
- Remove unused components
- Only install shadcn/ui components as needed

### 2.3 Unused Dependencies
**Severity:** HIGH

The `package.json` includes heavy dependencies that appear unused by the marketing site:
- `reactflow` — graph/flow editor library (no flow editor in the site)
- `recharts` — charting library (no charts in the marketing site)
- `react-hook-form` + `@hookform/resolvers` + `zod` — form validation (no complex forms)
- `react-day-picker` + `date-fns` — date picking (not used)
- `input-otp` — OTP input (not used)
- `cmdk` — command palette (not used)
- `react-resizable-panels` — panel layout (not used)
- `next-themes` — Next.js theming (this is a Vite project)
- `embla-carousel-react` — carousel (not used)

These bloat the bundle and increase attack surface.

### 2.4 Orphaned Types & Utilities
**Severity:** MEDIUM

- `src/types/project.ts` — Complex project/workflow types not used by marketing pages
- `src/utils/evaluationUtils.ts` — Evaluation scoring logic not used anywhere in the site
- `src/utils/performance.ts` — Performance monitoring that is entirely commented out or only logs to console
- `src/components/OptimizedImage.tsx` — Not imported by any page component

These suggest code was carried over from a different project (likely the dashboard/workbench) and never cleaned up.

---

## 3. HIGH: Deployment & Infrastructure

### 3.1 No Containerization
**Severity:** HIGH

There is no `Dockerfile`, `docker-compose.yml`, or `.dockerignore` anywhere in the project. The deploy pipeline is GitHub Pages only (static hosting). The Express dashboard has no deployment strategy at all.

**Remediation for the marketing site (static):**
```dockerfile
# Example multi-stage Dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

**Remediation for the dashboard (if needed):**
- Separate Dockerfile with proper health checks
- Docker Compose for local dev with dependencies
- Consider whether the dashboard should be a separate deployment

### 3.2 GitHub Pages SPA Routing Hack
**Severity:** MEDIUM

**Files:** `404.html`, `index.html` (redirect script), `package.json` (postbuild copies index to 404)

The SPA routing relies on GitHub Pages serving `404.html` as a fallback, using `sessionStorage` for redirect. This is a known hack with limitations:
- Brief flash of 404 page on direct navigation
- Search engines may index routes as 404s (SEO penalty)
- The `404.html` references `/lovable-uploads/...` paths that don't exist (moved to `/images/`)

**Remediation:**
- If staying on GitHub Pages, this is the only option — but fix the broken asset paths
- Migrating to Vercel, Netlify, or Cloudflare Pages gives proper SPA fallback via `_redirects` or config

### 3.3 Broken OG/Meta Image Paths
**Severity:** MEDIUM

**Files:** `index.html:13,17,23,24` and `404.html:13,17,23,24`

```html
<meta property="og:image" content="/lovable-uploads/f05d5e11-f8b1-4798-ba3d-a85133efccfd.png" />
<link rel="icon" type="image/png" href="/lovable-uploads/f05d5e11-f8b1-4798-ba3d-a85133efccfd.png" />
```

Images were reorganized into `/images/logos/` but these paths were never updated. Social sharing previews and favicons are broken.

### 3.4 CI/CD Pipeline is Minimal
**Severity:** MEDIUM

**File:** `.github/workflows/deploy.yml`

The pipeline only does: checkout → install → build → deploy. Missing:
- No linting step (`eslint` is configured but not run in CI)
- No type checking (`tsc --noEmit` not run)
- No tests (none exist)
- No dependency auditing (`npm audit`)
- No build size tracking
- No preview deployments for PRs
- No caching of `node_modules`

---

## 4. MEDIUM: Code Quality Issues

### 4.1 `dangerouslySetInnerHTML` with Inline HTML Strings
**File:** `src/pages/FAQ.tsx`
**Severity:** MEDIUM

```tsx
question: "How do we <span className='text-mentra-blue'>begin</span> using Mentra?",
// ...
<span dangerouslySetInnerHTML={{ __html: faq.question }} />
```

FAQ questions contain raw HTML strings that are rendered with `dangerouslySetInnerHTML`. While the data is currently static (not user-supplied), this pattern is an XSS risk if the data source ever changes. The coloring could be achieved with a simple text highlight component instead.

### 4.2 Service Worker with Stale Cache Paths
**File:** `public/sw.js`
**Severity:** MEDIUM

The service worker caches paths that don't exist:
```js
'/src/main.tsx',           // Not served in production (Vite bundles this)
'/edward-kerr.jpg',       // Moved to /images/other/
'/press.png',             // Moved to /images/sprig/
'/spy.png',               // etc.
```

The cache version is hardcoded as `mentra-v1` with no cache-busting strategy. Stale service workers will serve outdated content indefinitely.

### 4.3 No Error Boundaries
**Severity:** MEDIUM

The React app has no `ErrorBoundary` components. A runtime error in any component will crash the entire page with a white screen.

### 4.4 No Loading States or Code Splitting
**Severity:** MEDIUM

All pages are eagerly imported in `App.tsx`. For a marketing site with 12+ pages, lazy loading with `React.lazy()` + `Suspense` would improve initial load time.

### 4.5 Header Uses `<a>` Tags Instead of React Router `<Link>`
**File:** `src/components/Header.tsx`
**Severity:** MEDIUM

Navigation uses raw `<a>` tags, causing full page reloads on every navigation instead of client-side transitions. This defeats the purpose of using React Router.

### 4.6 Duplicate Toast Systems
**File:** `src/App.tsx`
**Severity:** LOW

Both `<Toaster />` (from radix toast) and `<Sonner />` are mounted. Pick one.

### 4.7 `QueryClientProvider` with No Queries
**Severity:** LOW

`@tanstack/react-query` is set up but there are no `useQuery` or `useMutation` calls in the marketing site. It's unused boilerplate.

### 4.8 Stale `isAgentWorkbench` Check
**File:** `src/App.tsx:26`
**Severity:** LOW

```tsx
const isAgentWorkbench = location.pathname === '/agent-workbench';
```

There is no `/agent-workbench` route. This is dead code from a removed feature.

---

## 5. LOW: Folder Structure & Organization

### 5.1 Current Structure Assessment

```
root/
├── .github/workflows/     # CI/CD (minimal)
├── dashboard-refactored/  # Entirely separate Express app (untracked, no CI)
├── dist/                  # Build output (should be gitignored — IS gitignored but still present)
├── public/                # Static assets
│   ├── images/            # Reorganized but with stale references
│   ├── sw.js              # Broken service worker
│   └── CNAME              # GitHub Pages custom domain
├── scripts/               # Single image optimization script
├── src/
│   ├── components/
│   │   ├── ui/            # 50+ shadcn components (mostly unused)
│   │   └── *.tsx          # 8 page-section components
│   ├── hooks/             # 2 hooks
│   ├── lib/               # 2 utility files
│   ├── pages/             # 12 page components
│   ├── types/             # 1 type file (unused by marketing site)
│   └── utils/             # 2 utility files (mostly unused)
├── package.json           # Root marketing site
└── dashboard-refactored/package.json  # Separate dashboard
```

**Issues:**
- No clear separation between "marketing site" and "dashboard" at the repo level
- `src/components/ui/` is a dumping ground — shadcn components mixed with custom modals
- Image filenames are UUID-based (`f05d5e11-f8b1-4798-ba3d-a85133efccfd.png`) making them unidentifiable
- `.DS_Store` files committed to the repo (missing from `.gitignore` for subdirectories)

### 5.2 Recommended Structure

```
root/
├── .github/
│   └── workflows/
│       ├── ci.yml          # Lint + typecheck + test
│       └── deploy.yml      # Build + deploy (only on main)
├── public/
│   └── images/
│       ├── logos/          # Rename files to descriptive names
│       ├── sprig/
│       └── photos/
├── src/
│   ├── components/
│   │   ├── layout/        # Header, Footer, ErrorBoundary
│   │   ├── sections/      # HeroSection, AboutSection, etc.
│   │   └── ui/            # Only actually-used shadcn components
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   └── styles/
├── docs/
├── Dockerfile
├── .env.example
└── package.json
```

---

## 6. Additional Observations

### 6.1 `lovable-tagger` Dependency
The `lovable-tagger` dev dependency suggests this project was scaffolded with Lovable.dev (AI code generation tool). The commented-out `componentTagger()` in `vite.config.ts` confirms this. The boilerplate it generated (unused shadcn components, query client, dual toast systems) should be cleaned up.

### 6.2 No `.env.example`
There's no documentation of required environment variables for either application.

### 6.3 No Tests
Zero test files exist. No testing framework is configured. The dashboard's test script is literally `echo "No tests specified"`.

### 6.4 `bun.lockb` AND `package-lock.json` Both Present
Two lock files from different package managers (Bun and npm). The CI uses `npm ci`. Pick one package manager and remove the other lock file.

### 6.5 `.DS_Store` Files in Public Assets
Multiple `.DS_Store` files exist in `public/images/` subdirectories. Add `**/.DS_Store` to `.gitignore` and remove tracked ones.

---

## Priority Action Items

| # | Action | Severity | Effort |
|---|--------|----------|--------|
| 1 | **Rotate all exposed credentials and API keys** | CRITICAL | Immediate |
| 2 | Move secrets to env vars, add `.env` to `.gitignore` | CRITICAL | Low |
| 3 | Replace `exec()` with `execFile()` in vllm.js | CRITICAL | Low |
| 4 | Remove unused dependencies (reactflow, recharts, etc.) | HIGH | Low |
| 5 | Remove dead components and orphaned code | HIGH | Medium |
| 6 | Fix broken OG image/favicon paths in index.html and 404.html | MEDIUM | Low |
| 7 | Fix or remove the service worker | MEDIUM | Low |
| 8 | Add error boundaries to React app | MEDIUM | Low |
| 9 | Add CI steps: lint, typecheck, audit | MEDIUM | Low |
| 10 | Decide on dashboard-refactored: separate repo or remove | HIGH | Medium |
| 11 | Add a Dockerfile for containerized deployment | HIGH | Medium |
| 12 | Switch `<a>` tags to React Router `<Link>` | MEDIUM | Low |
| 13 | Add lazy loading for page routes | MEDIUM | Low |
| 14 | Clean up dual lock files, pick bun or npm | LOW | Low |
| 15 | Rename UUID-based image files to descriptive names | LOW | Low |
