import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { useScheduleCall } from '@/contexts/ScheduleCallContext';

const CTASection = () => {
  const { open: openScheduleCall } = useScheduleCall();
  const { pathname } = useLocation();

  return (
    <section data-sprig-cta className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
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
                aria-label="Book a walkthrough with the Mentra team"
                onClick={openScheduleCall}
              >
                Book a walkthrough
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Second path, merged in from the old homepage Sponsor callout */}
            {pathname !== '/sponsor-a-school' && (
              <p className="text-gray-400 text-sm sm:text-base">
                <Heart className="inline w-4 h-4 mr-1.5 -mt-0.5 text-curiosity-coral" aria-hidden="true" />
                Know a school that can&rsquo;t afford it?{' '}
                <Link to="/sponsor-a-school" className="text-white font-semibold underline-offset-4 hover:underline">
                  Sponsor a year of Mentra
                </Link>
              </p>
            )}
          </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
