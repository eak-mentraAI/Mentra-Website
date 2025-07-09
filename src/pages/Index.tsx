
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SprigActionSection from '@/components/SprigActionSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
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
