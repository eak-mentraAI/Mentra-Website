import React from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

// "Built for a class, not one student": a summary of what the reader has just seen, placed after the evidence
// section. It states what Mentra gives a school rather than arguing with any product; the study-mode column describes
// design intent only. Mentra's column traces to app code: assignment AI-help levels (AdvancedSettingsCard.tsx),
// independence labels (independence_evidence.py), RecommendationCard.tsx, parent prompts, consent for every student
// (coppa_gate.py), district data separation and age-band safety settings.
const studyMode = [
  'An AI tutor the student chooses to use',
  'A switch back to direct answers whenever they want',
  'No record for the teacher of how the work was reached',
];

const mentra = [
  'Help the teacher sets for each assignment, including No AI Help',
  'A report showing which answers came with help, and which were unaided',
  'Recommendations the teacher approves, changes or dismisses',
  'One thing for families to try at home',
  'Consent for every student, data separated by district, safety tuned by age',
];

const StudyModeComparison = () => (
  <section id="why-mentra" className="py-24 bg-white scroll-mt-20" aria-labelledby="why-mentra-heading">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <AnimateOnScroll>
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mentra-blue">Why Mentra</p>
            <h2 id="why-mentra-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
              Built for a class, not one student
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Free AI study modes are built for one student who chooses to learn. Mentra is built for a class, a
              teacher and a district.
            </p>
          </div>
        </AnimateOnScroll>

        {/* A teacher helping one student, another working alone, and one walking on by itself */}
        <img
          src="/images/sprig/sprig-class-1100.webp"
          alt="A teacher Sprig in glasses helps one student Sprig at a tree-stump desk while another works on its own, and a third Sprig walks off alone along a dotted path."
          width={1100}
          height={459}
          loading="lazy"
          decoding="async"
          className="mx-auto w-full max-w-4xl h-auto"
        />

        <div className="grid gap-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-8">
          <AnimateOnScroll>
            <div className="h-full rounded-2xl border border-gray-200 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-gray-500">A study mode gives a student</h3>
              <ul className="mt-4 space-y-3 text-base leading-relaxed text-gray-600">
                {studyMode.map((s) => (
                  <li key={s} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-gray-300" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={80}>
            <div className="h-full rounded-2xl border border-mentra-blue/25 bg-mentra-blue/[0.04] p-6 sm:p-8">
              <h3 className="text-lg font-bold text-gray-900">Mentra gives a school</h3>
              <ul className="mt-4 space-y-3 text-base leading-relaxed text-gray-900">
                {mentra.map((s) => (
                  <li key={s} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-mentra-blue" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>

        <p className="text-sm text-gray-500">Free tools differ. This compares what they&rsquo;re designed for, not any one product.</p>
      </div>
    </div>
  </section>
);

export default StudyModeComparison;
