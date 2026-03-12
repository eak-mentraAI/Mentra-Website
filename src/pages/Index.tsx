import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
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
    <div className="min-h-screen font-rounded">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <SprigActionSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
