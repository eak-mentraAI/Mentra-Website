import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { Button } from '@/components/ui/button';

/** Homepage entrypoint to the Sponsor a School campaign. */
const SponsorCallout = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white" aria-labelledby="sponsor-callout-heading">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-mentra-blue/5 to-growth-green/10 border border-mentra-blue/15 p-8 sm:p-12">
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
              <div className="flex-1 text-center md:text-left space-y-4">
                <div className="inline-flex items-center gap-2 bg-mentra-blue/10 text-mentra-blue text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full">
                  <Heart className="w-4 h-4" aria-hidden="true" />
                  Sponsor a school
                </div>
                <h2 id="sponsor-callout-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 text-balance">
                  Fund a year of Mentra for a school that can't afford one
                </h2>
                <p className="text-gray-600 leading-relaxed max-w-xl">
                  AI is widening the gap between students who can pay for it and those who can't.
                  We're closing it one school at a time — donors cover the running costs, Mentra
                  donates the rest. Sponsor a year of learning for a child who'd otherwise go without.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button
                  size="lg"
                  onClick={() => navigate('/sponsor-a-school')}
                  className="bg-mentra-blue hover:bg-mentra-blue/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 shadow-lg hover:shadow-xl group focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2"
                  aria-label="See the Sponsor a School campaign"
                >
                  See the campaign
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default SponsorCallout;
