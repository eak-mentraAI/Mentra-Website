import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { useScheduleCall } from '@/contexts/ScheduleCallContext';
import { getAudience } from '@/data/audiences';

// Pilot-first pricing. Every line here restates the FAQ ("How does Mentra pricing work?", implementation and
// contract answers) or the Schools page pilot plan; keep them in sync rather than adding new claims.
const pilotRows = getAudience('schools').pilot ?? [];

const PricingSection = () => {
  const { open: openScheduleCall } = useScheduleCall();

  return (
    <section id="pricing" className="py-24 bg-white scroll-mt-20" aria-labelledby="pricing-heading">
      <div className="container mx-auto px-4">
        {/* Same heading-left, rows-right layout as How it works and the trust section */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 max-w-6xl mx-auto">
          <AnimateOnScroll>
            <div className="space-y-6 lg:sticky lg:top-28">
              <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
                Start with a pilot.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Try Mentra with your students before you commit. Before the pilot starts, we agree with you on how
                you&rsquo;ll judge whether it worked.
              </p>

              <div>
                <p className="text-gray-900">
                  <span className="block text-5xl font-bold tracking-tight tabular-nums">$9&ndash;18</span>
                  <span className="block mt-1 text-lg font-medium text-gray-700">per student, per month</span>
                </p>
                <ul className="mt-5 max-w-md space-y-2.5 border-l-2 border-gray-200 pl-4 text-sm text-gray-600 leading-relaxed">
                  <li>The exact price depends on how many students you have and how long you sign up for.</li>
                  <li>There&rsquo;s also a platform fee for the school, and pilot pricing in the first year.</li>
                  <li>Getting set up is designed to take 2&ndash;3 weeks, with training for teachers.</li>
                  <li>Families don&rsquo;t pay. They join free through the school.</li>
                </ul>
              </div>

              <Button
                size="lg"
                className="bg-mentra-blue hover:bg-mentra-blue/90 text-white px-8 py-4 rounded-full font-medium text-lg focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2"
                aria-label="Book a walkthrough with the Mentra team"
                onClick={openScheduleCall}
              >
                <CalendarDays className="mr-2 h-5 w-5" aria-hidden="true" />
                Book a walkthrough
              </Button>
            </div>
          </AnimateOnScroll>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">What the pilot will tell you</h3>
            <ul className="divide-y divide-gray-200 border-y border-gray-200">
              {pilotRows.map((row, i) => (
                <li key={row.question}>
                  <AnimateOnScroll delay={i * 60}>
                    <div className="py-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{row.question}</h4>
                      <p className="text-base text-gray-700 leading-relaxed">
                        <span className="font-medium text-gray-900">How we&rsquo;ll know: </span>
                        {row.evidence.charAt(0).toLowerCase() + row.evidence.slice(1)}
                      </p>
                    </div>
                  </AnimateOnScroll>
                </li>
              ))}
            </ul>
            <Link
              to="/schools"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-mentra-blue underline-offset-4 hover:underline"
            >
              See the full pilot plan
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
