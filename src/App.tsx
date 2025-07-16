import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import Index from "./pages/Index";
import CookieConsent from "./components/CookieConsent";

// Lazy load all pages for code splitting
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Educators = lazy(() => import("./pages/Educators"));
const Parents = lazy(() => import("./pages/Parents"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Cookies = lazy(() => import("./pages/Cookies"));
const Blog = lazy(() => import("./pages/Blog"));
const Press = lazy(() => import("./pages/Press"));

// Loading component for Suspense fallback
const PageLoading = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mentra-blue mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

// Component to conditionally render CookieConsent
const AppContent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={
          <Suspense fallback={<PageLoading />}>
            <About />
          </Suspense>
        } />
        <Route path="/how-it-works" element={
          <Suspense fallback={<PageLoading />}>
            <HowItWorks />
          </Suspense>
        } />
        <Route path="/educators" element={
          <Suspense fallback={<PageLoading />}>
            <Educators />
          </Suspense>
        } />
        <Route path="/parents" element={
          <Suspense fallback={<PageLoading />}>
            <Parents />
          </Suspense>
        } />
        <Route path="/faq" element={
          <Suspense fallback={<PageLoading />}>
            <FAQ />
          </Suspense>
        } />
        <Route path="/pricing" element={
          <Suspense fallback={<PageLoading />}>
            <Pricing />
          </Suspense>
        } />
        <Route path="/privacy" element={
          <Suspense fallback={<PageLoading />}>
            <Privacy />
          </Suspense>
        } />
        <Route path="/terms" element={
          <Suspense fallback={<PageLoading />}>
            <Terms />
          </Suspense>
        } />
        <Route path="/cookies" element={
          <Suspense fallback={<PageLoading />}>
            <Cookies />
          </Suspense>
        } />
        <Route path="/blog" element={
          <Suspense fallback={<PageLoading />}>
            <Blog />
          </Suspense>
        } />
        <Route path="/press" element={
          <Suspense fallback={<PageLoading />}>
            <Press />
          </Suspense>
        } />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={
          <Suspense fallback={<PageLoading />}>
            <NotFound />
          </Suspense>
        } />
      </Routes>
      <CookieConsent />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
