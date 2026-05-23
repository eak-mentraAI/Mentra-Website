import React, { useEffect } from 'react';
import PageTransition from '../components/layout/PageTransition';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import PersonaSwitcher from '../components/sections/PersonaSwitcher';
import PricingSection from '../components/sections/PricingSection';
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
      <HowItWorksSection />
      <div className="bg-gray-50 pb-10"><HairlineDivider width="md" /></div>
      <PersonaSwitcher />
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
