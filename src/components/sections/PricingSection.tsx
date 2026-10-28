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
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 max-w-6xl mx-auto">
          <AnimateOnScroll>
            <div className="space-y-6">
              <h2 id="pricing-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
                Start with a pilot.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We agree the measures with you before it starts, so the result is yours to judge.
              </p>

              <div className="rounded-2xl bg-gray-50 p-6 space-y-3">
                <p className="text-3xl font-bold text-gray-900 tabular-nums">
                  $9–18 <span className="text-base font-medium text-gray-600">per student, per month</span>
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Per-student licensing, depending on scale and commitment, plus an institutional platform fee. Pilot
                  pricing in year one. Families use Mentra free through their school&rsquo;s plan.
                </p>
              </div>

              <p className="text-base text-gray-700 leading-relaxed">
                Pilot onboarding is designed to take 2&ndash;3 weeks, with live sessions and ongoing support for teachers.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Button
                  size="lg"
                  className="bg-mentra-blue hover:bg-mentra-blue/90 text-white px-8 py-4 rounded-full font-medium text-lg focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2"
                  aria-label="Book a walkthrough with the Mentra team"
                  onClick={openScheduleCall}
                >
                  <CalendarDays className="mr-2 h-5 w-5" aria-hidden="true" />
                  Book a walkthrough
                </Button>
                <Link
                  to="/schools"
                  className="inline-flex items-center gap-1.5 font-semibold text-mentra-blue underline-offset-4 hover:underline"
                >
                  See the full pilot plan
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">What a pilot measures</h3>
              <dl className="divide-y divide-gray-200 border-y border-gray-200">
                {pilotRows.map((row) => (
                  <div key={row.question} className="grid gap-1 py-5 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-6">
                    <dt className="font-semibold text-gray-900">{row.question}</dt>
                    <dd className="text-gray-700 leading-relaxed">{row.evidence}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
