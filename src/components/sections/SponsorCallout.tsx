import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

/** Homepage entrypoint to the Sponsor a School campaign. */
const SponsorCallout = () => {
  return (
    <section className="w-full bg-white py-16" aria-labelledby="sponsor-callout-heading">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-growth-green/10 to-mentra-blue/10 border border-growth-green/20 p-8 sm:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1 text-center md:text-left space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-growth-green">
                  <Heart className="w-4 h-4" aria-hidden="true" />
                  Sponsor a school
                </div>
                <h2 id="sponsor-callout-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 text-balance">
                  Help fund a free year of Mentra for a school in need
                </h2>
                <p className="text-gray-600 leading-relaxed max-w-xl">
                  We believe education should be free and equal for those who need it most.
                  Follow the campaign and chip in — every gift brings a full year of Mentra
                  to students who couldn't otherwise access it.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  to="/sponsor-a-school"
                  className="inline-flex items-center gap-2 bg-growth-green hover:bg-growth-green/90 text-white px-7 py-3 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-growth-green focus:ring-offset-2"
                >
                  See the campaign
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default SponsorCallout;
