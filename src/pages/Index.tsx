import React, { useEffect } from 'react';
import PageTransition from '../components/layout/PageTransition';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import ProductStory from '../components/sections/ProductStory';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import AudienceLinks from '../components/sections/AudienceLinks';
import PricingSection from '../components/sections/PricingSection';
import TrustSection from '../components/sections/TrustSection';
import FAQSection from '../components/sections/FAQSection';
import Footer from '../components/layout/Footer';
import FloatingSprig from '../components/FloatingSprig';
import HairlineDivider from '../components/ui/HairlineDivider';

const Index = () => {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <PageTransition>
    <div className="min-h-screen font-rounded">
      <Header />
      <HeroSection />
      <ProductStory />
      <HowItWorksSection />
      <div className="bg-gray-50 pb-10"><HairlineDivider width="md" /></div>
      <AudienceLinks />
      <TrustSection />
      <PricingSection />
      <div className="bg-white py-10"><HairlineDivider width="md" /></div>
      <FAQSection />
      <Footer />
      <FloatingSprig />
    </div>
    </PageTransition>
  );
};

export default Index;
