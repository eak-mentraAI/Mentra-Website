import React from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

// Compares what free AI study modes are designed for with what Mentra gives a school. Don't name companies or claim
// specifics about any one product's settings; the rows describe design intent. Mentra's column must trace to app code:
// assignment AI-help levels (AdvancedSettingsCard.tsx), independence labels, RecommendationCard.tsx, parent prompts,
// consent for every student (coppa_gate.py), district data separation, and age-band safety settings.
const rows = [
  {
    aspect: 'Who controls the help',
    free: 'The student',
    mentra: 'The teacher sets it for each assignment, including No AI Help',
  },
  {
    aspect: 'What the teacher sees',
    free: 'No record of which answers came with help',
    mentra: 'Which answers came with help, and which were unaided',
  },
  {
    aspect: 'What happens next',
    free: 'Up to the student',
    mentra: 'Recommendations the teacher approves, changes or dismisses',
  },
  {
    aspect: 'Families',
    free: 'Not built in',
    mentra: 'One thing to try at home',
  },
  {
    aspect: 'Built around',
    free: 'One student choosing to study',
    mentra: 'A class and a district: consent for every student, data separated by district, safety tuned by age',
  },
];

// Same heading-left, rows-right layout as How it works, trust and the pilot section.
const StudyModeComparison = () => (
  <section id="why-mentra" className="py-24 bg-white scroll-mt-20" aria-labelledby="why-mentra-heading">
    <div className="container mx-auto px-4">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="space-y-5 lg:sticky lg:top-28">
            <h2 id="why-mentra-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
              Why not a free AI study mode?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Free study modes are built for one student who chooses to learn. Mentra is built for a class, a teacher
              and a district.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Free tools differ. This compares what they&rsquo;re designed for, not any one product.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={60}>
          <div>
            <div className="hidden sm:grid grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)_minmax(0,1.3fr)] gap-6 pb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
              <span />
              <span>Free AI study modes</span>
              <span className="text-mentra-blue">Mentra</span>
            </div>
            <dl className="divide-y divide-gray-200 border-y border-gray-200">
              {rows.map((row) => (
                <div
                  key={row.aspect}
                  className="grid gap-2 py-5 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)_minmax(0,1.3fr)] sm:gap-6"
                >
                  <dt className="text-base font-bold text-gray-900">{row.aspect}</dt>
                  <dd className="text-base text-gray-600 leading-relaxed">
                    <span className="sm:hidden font-medium text-gray-500">Free study modes: </span>
                    {row.free}
                  </dd>
                  <dd className="text-base text-gray-900 leading-relaxed">
                    <span className="sm:hidden font-semibold text-mentra-blue">Mentra: </span>
                    {row.mentra}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
);

export default StudyModeComparison;
