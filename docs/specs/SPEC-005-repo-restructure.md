# SPEC-005: Repository Separation & Folder Restructure

**Sprint:** 5
**Severity:** HIGH (architecture) / LOW (file organization)
**Audit refs:** 2.1, 5.1, 5.2

---

## Objective

Separate the dashboard into its own repository and reorganize the marketing site's folder structure for clarity and maintainability.

---

## Part 1: Dashboard Separation

### Action

Move `dashboard-refactored/` to a new repository (e.g., `Mentra-AI/mentra-dashboard`).

### Steps

1. Create new repo `mentra-dashboard` on GitHub
2. Copy `dashboard-refactored/` contents to new repo root
3. Set up its own CI/CD, Dockerfile, and `.env.example`
4. Remove `dashboard-refactored/` from this repo
5. Update any cross-references

### Dashboard repo structure

```
mentra-dashboard/
├── client/
│   ├── css/
│   ├── js/
│   └── templates/
├── config/
├── server/
│   ├── middleware/
│   ├── routes/
│   └── services/
├── .env.example
├── .github/workflows/
├── Dockerfile
├── package.json
└── README.md
```

---

## Part 2: Marketing Site Folder Restructure

### Current → Target

```
# Components reorganization
src/components/Header.tsx        → src/components/layout/Header.tsx
src/components/Footer.tsx        → src/components/layout/Footer.tsx
(new)                            → src/components/layout/ErrorBoundary.tsx

src/components/HeroSection.tsx   → src/components/sections/HeroSection.tsx
src/components/AboutSection.tsx  → src/components/sections/AboutSection.tsx
src/components/FeaturesSection.tsx → src/components/sections/FeaturesSection.tsx
src/components/TestimonialsSection.tsx → src/components/sections/TestimonialsSection.tsx
src/components/SprigActionSection.tsx → src/components/sections/SprigActionSection.tsx
src/components/CTASection.tsx    → src/components/sections/CTASection.tsx
src/components/CookieConsent.tsx → src/components/sections/CookieConsent.tsx

src/components/ui/*              → src/components/ui/* (unchanged, just pruned)
```

### Image File Renames

```
# Logos
f05d5e11-f8b1-4798-ba3d-a85133efccfd.png → mentra-logo-color.png
69642821-e647-4bdf-b739-25771a5f9674.png → mentra-logo-alt.png

# Sprig characters
060630a8-ed64-4d31-8e7b-c1c12d2b6e6e.png → sprig-hero.png
13ee0557-7701-4480-8818-ad3335de97fd.png → sprig-wave.png
cedb8c52-6559-4531-87f6-39ad0937d397.png → sprig-thinking.png
ee369d68-1572-409b-ba14-676fe8d3ca36.png → sprig-happy.png
```

After renaming, update all references in:
- `index.html`, `404.html`
- All component files that reference image paths
- `public/sw.js` (if retained)

### Import Path Updates

All moved components need their import paths updated in consuming files. Use find-and-replace across the project.

---

## Final Target Structure

```
mentra-website/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── docs/
│   ├── audit.md
│   ├── remediation_roadmap.md
│   └── specs/
├── public/
│   ├── images/
│   │   ├── logos/
│   │   ├── sprig/
│   │   └── photos/
│   ├── robots.txt
│   └── CNAME
├── src/
│   ├── components/
│   │   ├── layout/       # Header, Footer, ErrorBoundary
│   │   ├── sections/     # Page section components
│   │   └── ui/           # Only used shadcn components
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   └── styles/           # index.css, App.css
├── .dockerignore
├── .env.example
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── index.html
├── nginx.conf
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Validation

- `dashboard-refactored/` no longer exists in this repo
- Dashboard repo builds and runs independently
- All imports resolve after restructure
- `npm run build` succeeds
- All pages render correctly in browser
- All image references load correctly
