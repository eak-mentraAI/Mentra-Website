import { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/layout/ErrorBoundary";
import Index from "./pages/Index";
import CookieConsent from "./components/sections/CookieConsent";

// Lazy-loaded pages — only Index is eager (landing page, must be fast)
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Teachers = lazy(() => import("./pages/Teachers"));
const Students = lazy(() => import("./pages/Students"));
const Parents = lazy(() => import("./pages/Parents"));
const Institutions = lazy(() => import("./pages/Institutions"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Cookies = lazy(() => import("./pages/Cookies"));
const Blog = lazy(() => import("./pages/Blog"));
const Press = lazy(() => import("./pages/Press"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-mentra-blue border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <ErrorBoundary>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/students" element={<Students />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/press" element={<Press />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </ErrorBoundary>
);

export default App;
