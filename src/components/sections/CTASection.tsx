import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const CTASection = () => {
  const handleScrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section data-sprig-cta className="py-20 bg-gradient-to-br from-mentra-blue via-mentra-blue/90 to-growth-green/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-grit-gold/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-curiosity-coral/20 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll variant="scale-in">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-snug text-balance" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              Ready for AI That <span className="bg-gradient-to-r from-white to-grit-gold bg-clip-text text-transparent">Steps Back</span>?
            </h2>

            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Support that builds capability, not dependency. Humans in control at every level.
            </p>

            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-white text-mentra-blue hover:bg-white/90 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 shadow-2xl hover:shadow-3xl group"
                onClick={handleScrollToPricing}
              >
                Begin Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-white/90 text-lg leading-relaxed mb-4">
              "The AI is training wheels, not a motor. Every feature is designed to transfer capability to the student — not create a crutch they can't walk without."
            </p>
            <div className="flex items-center justify-center gap-3">
              <img
                src="/images/sprig/happy-sprig.png"
                alt="Sprig"
                width="32"
                height="32"
                className="w-8 h-8 object-contain"
                loading="lazy"
              />
              <span className="text-white font-medium">— The Mentra Team</span>
            </div>
          </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
