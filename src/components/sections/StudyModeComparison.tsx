import React from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

// Compares what free AI study modes are designed for with what Mentra gives a school, told as a crossroads. Don't name
// companies or claim specifics about any one product's settings; the left path describes design intent. Mentra's path
// must trace to app code: assignment AI-help levels (AdvancedSettingsCard.tsx), independence labels,
// RecommendationCard.tsx, parent prompts, consent for every student (coppa_gate.py), district data separation and
// age-band safety settings.
const shortcut = [
  'The student can switch back to direct answers',
  'The worksheet looks done',
  'The teacher has no record of how it was reached',
];

const sprigsPath = [
  'The teacher sets the help for each assignment, including No AI Help',
  'The report shows which answers came with help, and which were unaided',
  'Recommendations the teacher approves, changes or dismisses',
];

const StudyModeComparison = () => (
  <section id="why-mentra" className="py-24 bg-white scroll-mt-20" aria-labelledby="why-mentra-heading">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 id="why-mentra-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
              Why not a free AI study mode?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Free study modes are built for one student who chooses to learn. Mentra is built for a class, a teacher
              and a district.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_16rem_minmax(0,1fr)] md:items-center">
          <AnimateOnScroll>
            <div className="min-w-0 space-y-4">
              {/* Signpost pointing left */}
              <p
                className="inline-block bg-stone-200 py-2 pl-7 pr-4 font-display text-base font-bold text-stone-700"
                style={{ clipPath: 'polygon(14px 0, 100% 0, 100% 100%, 14px 100%, 0 50%)' }}
              >
                The shortcut
              </p>
              <ol className="list-decimal space-y-2.5 pl-5 text-base leading-relaxed text-gray-500 marker:text-gray-400">
                {shortcut.map((s) => <li key={s}>{s}</li>)}
              </ol>
            </div>
          </AnimateOnScroll>

          <img
            src="/images/sprig/sprig-lost-600.webp"
            alt="Sprig at a crossroads holding a map, between wooden signposts"
            width={600}
            height={600}
            loading="lazy"
            decoding="async"
            className="order-first mx-auto h-48 w-48 object-contain sm:h-64 sm:w-64 md:order-none"
          />

          <AnimateOnScroll delay={80}>
            <div className="min-w-0 space-y-4">
              {/* Signpost pointing right */}
              <p
                className="inline-block bg-mentra-blue py-2 pl-4 pr-7 font-display text-base font-bold text-white"
                style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)' }}
              >
                Sprig&rsquo;s path
              </p>
              <ol className="list-decimal space-y-2.5 pl-5 text-base leading-relaxed text-gray-900 marker:text-mentra-blue">
                {sprigsPath.map((s) => <li key={s}>{s}</li>)}
              </ol>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="grid gap-x-10 gap-y-3 border-t border-gray-200 pt-8 text-base text-gray-600 sm:grid-cols-2">
          <p><span className="font-semibold text-gray-900">Families:</span> one thing to try at home, through the school.</p>
          <p>
            <span className="font-semibold text-gray-900">Built for districts:</span> consent for every student, data
            separated by district, safety tuned by age.
          </p>
        </div>
        <p className="text-center text-sm text-gray-500">Free tools differ. This compares what they&rsquo;re designed for, not any one product.</p>
      </div>
    </div>
  </section>
);

export default StudyModeComparison;
