# SPEC-003: Code Quality & React Best Practices

**Sprint:** 3
**Severity:** MEDIUM
**Audit refs:** 4.1, 4.2, 4.3, 4.4, 4.5

---

## Objective

Apply React best practices to improve user experience (error handling, client-side nav, code splitting) and eliminate unsafe patterns (`dangerouslySetInnerHTML`, broken service worker).

---

## Changes

### 1. Error Boundary

Create `src/components/layout/ErrorBoundary.tsx` — a class component that catches render errors and shows a user-friendly fallback instead of a white screen.

```tsx
class ErrorBoundary extends React.Component<Props, State> {
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) return <ErrorFallback />;
    return this.props.children;
  }
}
```

Wrap `<AppContent />` inside `<ErrorBoundary>` in `App.tsx`.

### 2. React Router `<Link>` Migration

**File:** `src/components/Header.tsx` (and any other nav components)

Replace all `<a href="/path">` with `<Link to="/path">` from react-router-dom. This enables client-side navigation without full page reloads.

Special handling for:
- `#features` anchor link: use `<Link to="/#features">` with scroll logic
- External links: keep as `<a>` with `target="_blank" rel="noopener noreferrer"`

### 3. Code Splitting with `React.lazy`

**File:** `src/App.tsx`

```tsx
const About = lazy(() => import('./pages/About'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
// ... all pages except Index (keep Index eager for fast first paint)

<Suspense fallback={<PageLoader />}>
  <Routes>...</Routes>
</Suspense>
```

### 4. Remove `dangerouslySetInnerHTML` from FAQ

**File:** `src/pages/FAQ.tsx`

Replace HTML-in-strings with a data structure:

```tsx
// Before
question: "How do we <span className='text-mentra-blue'>begin</span> using Mentra?"

// After
question: "How do we {begin} using Mentra?"
// Render with a HighlightText component that wraps {words} in styled spans
```

### 5. Fix or Remove Service Worker

**File:** `public/sw.js`

**Option A (Recommended):** Remove the service worker entirely. A marketing site doesn't need offline support, and a misconfigured SW causes more problems than it solves. Add an unregister script to clean up existing SW installations.

**Option B:** Fix all cache paths, implement proper versioning tied to build hash, and add an update-on-reload strategy.

---

## Validation

- Navigate between pages — no full page reloads in network tab
- Throw an error in a component — fallback UI appears, not white screen
- Check network tab — page chunks load on navigation, not all up front
- `grep -r "dangerouslySetInnerHTML" src/` returns only chart.tsx (shadcn internal)
- Service worker is either correctly functioning or fully unregistered
