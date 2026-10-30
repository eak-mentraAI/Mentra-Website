import React from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ProductScreen from '@/components/ui/ProductScreen';
import { screens, SHOWCASE_DISCLOSURE } from '@/data/productScreens';

// The Independence Report and recommendations are what free AI study modes don't give a school, so they get their
// own section. Every line traces to app code: independence_evidence.py (labels), help_intensity_rollup.py (the
// "not enough data yet" threshold) and RecommendationCard.tsx (confidence, "when this may be wrong", approve/modify/dismiss).
const TeacherEvidenceSection = () => (
  <section id="teacher-evidence" className="py-24 bg-gray-50 scroll-mt-20" aria-labelledby="teacher-evidence-heading">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto space-y-14">
        <AnimateOnScroll>
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mentra-blue">For teachers</p>
            <h2 id="teacher-evidence-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
              See which progress is the student&rsquo;s own
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Independence Report labels each answer by how it was reached: on their own, with help, or repeating
              what Sprig said. Until there&rsquo;s enough unaided work to read, it says so instead of guessing.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-10 items-start">
          <AnimateOnScroll>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">The Independence Report</h3>
              <ProductScreen
                screen={screens.teacherIndependence}
                caption="Help is weighed separately from independent work, and every label links to the turn behind it."
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={80}>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Recommendations the teacher decides on</h3>
              <ProductScreen
                screen={screens.teacherRecommendation}
                caption="Each recommendation shows its confidence, what it’s based on and when it may be wrong. Nothing happens until the teacher approves, modifies or dismisses it."
              />
            </div>
          </AnimateOnScroll>
        </div>

        <p className="text-xs text-gray-400 leading-relaxed max-w-xl">{SHOWCASE_DISCLOSURE}</p>
      </div>
    </div>
  </section>
);

export default TeacherEvidenceSection;
