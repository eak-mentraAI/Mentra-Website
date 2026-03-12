import React, { useEffect } from 'react';
import PageTransition from '../components/layout/PageTransition';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import SocialProofBar from '../components/sections/SocialProofBar';
import AboutSection from '../components/sections/AboutSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import PersonaSwitcher from '../components/sections/PersonaSwitcher';
import FeaturesSection from '../components/sections/FeaturesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import SprigActionSection from '../components/sections/SprigActionSection';
import PricingSection from '../components/sections/PricingSection';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';
import Footer from '../components/layout/Footer';

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
      <SocialProofBar />
      <AboutSection />
      <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-mentra-blue/40 to-growth-green/40" />
      <HowItWorksSection />
      <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-growth-green/40 to-wisdom-purple/40" />
      <PersonaSwitcher />
      <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-wisdom-purple/40 to-grit-gold/40" />
      <FeaturesSection />
      <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-grit-gold/40 to-curiosity-coral/40" />
      <TestimonialsSection />
      <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-curiosity-coral/40 to-mentra-blue/40" />
      <SprigActionSection />
      <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-mentra-blue/40 to-growth-green/40" />
      <PricingSection />
      <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-growth-green/40 to-wisdom-purple/40" />
      <FAQSection />
      <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-wisdom-purple/40 to-grit-gold/40" />
      <CTASection />
      <Footer />
    </div>
    </PageTransition>
  );
};

export default Index;
