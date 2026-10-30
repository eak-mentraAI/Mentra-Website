import { lazy, Suspense, useEffect } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import ErrorBoundary from "./components/layout/ErrorBoundary";
import Index from "./pages/Index";
import CookieConsent from "./components/sections/CookieConsent";
import { ScheduleCallProvider } from "./contexts/ScheduleCallContext";

// Lazy-loaded pages — only Index is eager (landing page, must be fast)
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Cookies = lazy(() => import("./pages/Cookies"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Press = lazy(() => import("./pages/Press"));
const Platform = lazy(() => import("./pages/Platform"));
const SponsorASchool = lazy(() => import("./pages/SponsorASchool"));
const AudiencePage = lazy(() => import("./pages/AudiencePage"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <img
      src="/images/logos/logo_watermark.png"
      alt=""
      width="64"
      height="64"
      className="w-16 h-16 animate-pulse-slow"
      aria-hidden="true"
    />
    <span className="sr-only">Loading</span>
  </div>
);

// Redirect old routes to homepage anchor sections
const RedirectToHash = ({ hash }: { hash: string }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/#${hash}`, { replace: true });
  }, [navigate, hash]);
  return null;
};

// Reset scroll to top on every route change so footer/header links don't
// land users mid-page on the new route. Skips when a hash is present so
// in-page anchor scrolling (handled by Index.tsx and scroll-mt-* margins)
// still works.
// 'instant' overrides the global `scroll-behavior: smooth`: a smooth scroll gets cut off when the old page is
// swapped out, leaving visitors near the new page's footer.
const scrollToTopNow = () => {
  if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) scrollToTopNow();
  }, [pathname, hash]);
  return null;
};

function AnimatedRoutes() {
  const location = useLocation();
  // The new page mounts only after the old one's exit animation, so reset the scroll again at that point.
  return (
    <AnimatePresence mode="wait" onExitComplete={scrollToTopNow}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/press" element={<Press />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/sponsor-a-school" element={<SponsorASchool />} />
        <Route path="/teachers" element={<AudiencePage audienceId="teachers" />} />
        <Route path="/parents" element={<AudiencePage audienceId="parents" />} />
        <Route path="/schools" element={<AudiencePage audienceId="schools" />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        {/* Redirects for old routes */}
        <Route path="/how-it-works" element={<RedirectToHash hash="the-story" />} />
        <Route path="/students" element={<RedirectToHash hash="the-story" />} />
        <Route path="/institutions" element={<Navigate to="/schools" replace />} />
        <Route path="/districts" element={<Navigate to="/schools" replace />} />
        <Route path="/pricing" element={<RedirectToHash hash="pricing" />} />
        <Route path="/faq" element={<RedirectToHash hash="faq" />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <ErrorBoundary>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <ScheduleCallProvider>
          <Suspense fallback={<PageLoader />}>
            <AnimatedRoutes />
          </Suspense>
          <CookieConsent />
        </ScheduleCallProvider>
      </BrowserRouter>
    </TooltipProvider>
  </ErrorBoundary>
);

export default App;
