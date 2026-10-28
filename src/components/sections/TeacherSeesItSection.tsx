import React from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ProductScreen from '@/components/ui/ProductScreen';
import { screens, SHOWCASE_DISCLOSURE } from '@/data/productScreens';

/** The next beat of the story's first tab: the teacher's side of Jordan's conversation (2026-10-27 motion loop). */
const TeacherSeesItSection = () => (
  <section id="teacher-sees-it" className="py-24 bg-white scroll-mt-20" aria-labelledby="teacher-sees-it-heading">
    <div className="container mx-auto px-4">
      <AnimateOnScroll>
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mentra-blue mb-3">Then the teacher sees it</p>
          <h2 id="teacher-sees-it-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Every turn the report looked at is one click away.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mb-8">
            Later, Jordan&rsquo;s teacher opens the report. Each turn is labelled: on their own, with help, or repeated what
            Sprig said. One click opens the exact turn in the conversation. A turn where Jordan only repeated Sprig
            isn&rsquo;t counted as independent work, and until there&rsquo;s enough recent work, the read says so.
          </p>
          <ProductScreen screen={screens.teacherTurnTrace} />
          <p className="text-xs text-gray-400 text-center mt-10 leading-relaxed max-w-3xl mx-auto">{SHOWCASE_DISCLOSURE}</p>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default TeacherSeesItSection;
