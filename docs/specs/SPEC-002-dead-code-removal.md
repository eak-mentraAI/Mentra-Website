# SPEC-002: Dead Code Removal & Dependency Pruning

**Sprint:** 2
**Severity:** HIGH
**Audit refs:** 2.2, 2.3, 2.4, 4.6, 4.7, 4.8, 6.1

---

## Objective

Remove all code, components, and dependencies that are not used by the marketing site. This reduces bundle size, attack surface, and cognitive overhead for future development.

---

## Components to Remove (48 unused UI + 7 modals + 1 orphan)

### Unused shadcn/ui components (not imported outside `ui/`)

```
src/components/ui/alert.tsx
src/components/ui/alert-dialog.tsx
src/components/ui/aspect-ratio.tsx
src/components/ui/avatar.tsx
src/components/ui/badge.tsx
src/components/ui/badge-variants.ts
src/components/ui/breadcrumb.tsx
src/components/ui/button-variants.ts
src/components/ui/calendar.tsx
src/components/ui/chart.tsx
src/components/ui/collapsible.tsx
src/components/ui/command.tsx
src/components/ui/context-menu.tsx
src/components/ui/drawer.tsx
src/components/ui/dropdown-menu.tsx
src/components/ui/form.tsx
src/components/ui/form-hooks.ts
src/components/ui/form-types.ts
src/components/ui/hover-card.tsx
src/components/ui/input-otp.tsx
src/components/ui/label.tsx
src/components/ui/menubar.tsx
src/components/ui/navigation-menu.tsx
src/components/ui/navigation-menu-variants.ts
src/components/ui/pagination.tsx
src/components/ui/popover.tsx
src/components/ui/progress.tsx
src/components/ui/radio-group.tsx
src/components/ui/resizable.tsx
src/components/ui/scroll-area.tsx
src/components/ui/separator.tsx
src/components/ui/sheet.tsx
src/components/ui/sidebar.tsx
src/components/ui/sidebar-constants.ts
src/components/ui/sidebar-context-type.ts
src/components/ui/sidebar-variants.ts
src/components/ui/skeleton.tsx
src/components/ui/slider.tsx
src/components/ui/sonner-types.ts
src/components/ui/switch.tsx
src/components/ui/table.tsx
src/components/ui/textarea.tsx
src/components/ui/toast.tsx
src/components/ui/toggle.tsx
src/components/ui/toggle-group.tsx
src/components/ui/toggle-variants.ts
src/components/ui/use-toast.ts
```

### Unused custom modals

```
src/components/ui/ExportModal.tsx
src/components/ui/FormFieldWithGuidance.tsx
src/components/ui/LoadWorkflowModal.tsx
src/components/ui/NewProjectModal.tsx
src/components/ui/ProjectGoalModal.tsx
src/components/ui/ProjectMenu.tsx
src/components/ui/TemplateModal.tsx
```

### Other orphaned files

```
src/components/OptimizedImage.tsx
src/types/project.ts
src/utils/evaluationUtils.ts
src/utils/performance.ts
```

### Components that STAY (12 actively used)

```
src/components/ui/accordion.tsx    # FAQ.tsx
src/components/ui/button.tsx       # Many pages
src/components/ui/card.tsx         # HowItWorks, sections
src/components/ui/carousel.tsx     # HowItWorks, SprigActionSection
src/components/ui/checkbox.tsx     # CookieConsent
src/components/ui/dialog.tsx       # CookieConsent
src/components/ui/input.tsx        # Blog
src/components/ui/select.tsx       # Blog
src/components/ui/tabs.tsx         # Educators, Parents
src/components/ui/toaster.tsx      # App.tsx (remove if switching to Sonner only)
src/components/ui/sonner.tsx       # App.tsx
src/components/ui/tooltip.tsx      # App.tsx
```

---

## Dependencies to Remove

```json
// Remove from dependencies:
"reactflow": "^11.11.4",
"recharts": "^2.12.7",
"react-hook-form": "^7.53.0",
"@hookform/resolvers": "^3.9.0",
"zod": "^3.23.8",
"react-day-picker": "^8.10.1",
"date-fns": "^3.6.0",
"input-otp": "^1.2.4",
"cmdk": "^1.0.0",
"react-resizable-panels": "^2.1.3",
"next-themes": "^0.3.0",
"embla-carousel-react": "^8.3.0",
"@tanstack/react-query": "^5.56.2",
"vaul": "^0.9.3"

// Remove from devDependencies:
"lovable-tagger": "^1.1.7"
```

Also remove corresponding `@radix-ui/*` packages that only back removed components.

---

## App.tsx Cleanup

- Remove `QueryClientProvider` wrapper (no queries used)
- Remove one of the two toast systems (keep Sonner, remove radix Toaster)
- Remove `isAgentWorkbench` dead code path

---

## Validation

- `npm run build` succeeds
- `npm ls --all 2>&1 | grep "UNMET\|ERR"` returns nothing
- Verify each page loads in browser after cleanup
- Compare bundle size before/after (expect significant reduction)
