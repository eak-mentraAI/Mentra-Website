import React from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { SHOWCASE_DISCLOSURE } from '@/data/productScreens';

// The Independence Report and recommendations are what free AI study modes don't give a school, so they get their
// own scene: teacher Sprig at a desk holding the real screens. Crops come from the batch-c live captures
// (teacher-independence.webp, teacher-recommendation.webp), with each row's status label kept beside it.
// Claims trace to app code: independence_evidence.py (labels), help_intensity_rollup.py ("not enough data yet")
// and RecommendationCard.tsx (confidence, "when this may be wrong", approve/modify/dismiss).
const crops = [
  {
    src: '/images/product/teacher-independence-rows.webp',
    width: 1010,
    height: 330,
    alt: "The Independence Report: Leo is marked Leaning on support, with independent first attempts falling and moderate confidence; Jordan is marked Not enough data yet, with a link to see recent turns.",
    caption: 'It names who needs a look, and says “not enough data yet” instead of guessing.',
  },
  {
    src: '/images/product/teacher-recommendation-card.webp',
    width: 986,
    height: 466,
    alt: "A recommendation for Jordan Lee: Watch this trend, lower confidence, with why it matters, what it's based on, what success looks like, when it may be wrong, and Approve, Modify, Dismiss and Track outcome buttons.",
    caption: 'Each recommendation says when it may be wrong. Nothing happens until the teacher decides.',
  },
];

const TeacherEvidenceSection = () => (
  <section id="teacher-evidence" className="py-24 bg-gray-50 scroll-mt-20" aria-labelledby="teacher-evidence-heading">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto space-y-12">
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

        {/* Colour comes from Sprig's art; the desk is a neutral surface */}
        <div className="grid gap-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:items-end">
          <img
            src="/images/sprig/sprig-teacher-600.webp"
            alt="Sprig dressed as a teacher, holding a pointer and an open book"
            width={300}
            height={300}
            loading="lazy"
            decoding="async"
            className="mx-auto h-44 w-44 object-contain sm:h-56 sm:w-56 lg:h-72 lg:w-72"
          />
          <div className="relative min-w-0 rounded-[1.75rem] border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">
            <img
              src="/images/sprig/sprig-detective-600.webp"
              alt=""
              aria-hidden="true"
              width={300}
              height={300}
              loading="lazy"
              decoding="async"
              className="absolute -top-14 right-2 h-20 w-20 object-contain sm:-top-20 sm:right-4 sm:h-28 sm:w-28"
            />
            <div className="space-y-6">
              {crops.map((c, i) => (
                <AnimateOnScroll key={c.src} delay={i * 80}>
                  <figure className="space-y-2">
                    <a
                      href={c.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block overflow-hidden rounded-xl border border-gray-200 bg-white cursor-zoom-in"
                    >
                      <img
                        src={c.src}
                        alt={c.alt}
                        width={c.width}
                        height={c.height}
                        loading="lazy"
                        decoding="async"
                        className="block h-auto w-full"
                      />
                    </a>
                    <figcaption className="text-sm text-gray-600 leading-relaxed">{c.caption}</figcaption>
                  </figure>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 leading-relaxed max-w-xl">{SHOWCASE_DISCLOSURE}</p>
      </div>
    </div>
  </section>
);

export default TeacherEvidenceSection;
