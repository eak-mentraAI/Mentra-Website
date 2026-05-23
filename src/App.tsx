import { lazy, Suspense, useEffect } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
const Press = lazy(() => import("./pages/Press"));
const Platform = lazy(() => import("./pages/Platform"));

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

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/press" element={<Press />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        {/* Redirects for old routes */}
        <Route path="/how-it-works" element={<RedirectToHash hash="how-it-works" />} />
        <Route path="/students" element={<RedirectToHash hash="personas" />} />
        <Route path="/teachers" element={<RedirectToHash hash="personas" />} />
        <Route path="/parents" element={<RedirectToHash hash="personas" />} />
        <Route path="/institutions" element={<RedirectToHash hash="personas" />} />
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
