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
    <section data-sprig-cta className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll variant="scale-in">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug text-balance">
              Ready for AI that steps back?
            </h2>

            <p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Support that builds capability, not dependency. Humans in control at every level.
            </p>

            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-mentra-blue hover:bg-mentra-blue/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 shadow-lg hover:shadow-xl group"
                onClick={handleScrollToPricing}
              >
                Begin Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
