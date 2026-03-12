import React, { useEffect } from 'react';
import PageTransition from '../components/layout/PageTransition';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import SocialProofBar from '../components/sections/SocialProofBar';
import AboutSection from '../components/sections/AboutSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import SprigActionSection from '../components/sections/SprigActionSection';
import CTASection from '../components/sections/CTASection';
import Footer from '../components/layout/Footer';

const Index = () => {
  useEffect(() => {
    if (window.location.hash === '#features') {
      const el = document.getElementById('features');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // slight delay to ensure DOM is ready
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
      <FeaturesSection />
      <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-growth-green/40 to-wisdom-purple/40" />
      <TestimonialsSection />
      <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-wisdom-purple/40 to-grit-gold/40" />
      <SprigActionSection />
      <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-grit-gold/40 to-mentra-blue/40" />
      <CTASection />
      <Footer />
    </div>
    </PageTransition>
  );
};

export default Index;
