import React from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { SHOWCASE_DISCLOSURE } from '@/data/productScreens';

// The Independence Report and recommendations are what free AI study modes don't give a school, so they get their
// own scene: teacher Sprig beside the heading, the real screens laid out on a desk. Crops come from the batch-c live
// captures (teacher-independence.webp, teacher-recommendation.webp), with each row's status label kept beside it.
// Claims trace to app code: independence_evidence.py (labels), help_intensity_rollup.py ("not enough data yet")
// and RecommendationCard.tsx (confidence, "when this may be wrong", approve/modify/dismiss).
const crops: { src: string; width: number; height: number; title: string; sprig?: string; alt: string; caption: string }[] = [
  {
    src: '/images/product/teacher-independence-rows.webp',
    width: 1010,
    height: 330,
    title: 'The Independence Report',
    sprig: '/images/sprig/sprig-detective-600.webp',
    alt: "The Independence Report: Leo is marked Leaning on support, with independent first attempts falling and moderate confidence; Jordan is marked Not enough data yet, with a link to see recent turns.",
    caption: 'It names who needs a look, and says “not enough data yet” instead of guessing.',
  },
  {
    src: '/images/product/teacher-recommendation-card.webp',
    width: 986,
    height: 466,
    title: 'A recommendation',
    alt: "A recommendation for Jordan Lee: Watch this trend, lower confidence, with why it matters, what it's based on, what success looks like, when it may be wrong, and Approve, Modify, Dismiss and Track outcome buttons.",
    caption: 'It says when it may be wrong. Nothing happens until the teacher decides.',
  },
];

const TeacherEvidenceSection = () => (
  <section id="teacher-evidence" className="py-24 bg-gray-50 scroll-mt-20" aria-labelledby="teacher-evidence-heading">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid items-end gap-6 sm:grid-cols-[minmax(0,1fr)_auto]">
          <AnimateOnScroll>
            <div className="max-w-3xl space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mentra-blue">For teachers</p>
              <h2 id="teacher-evidence-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
                See which progress is the student&rsquo;s own
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Independence Report labels each answer by how it was reached: on their own, with help, or
                repeating what Sprig said. Until there&rsquo;s enough unaided work to read, it says so instead of
                guessing.
              </p>
            </div>
          </AnimateOnScroll>
          {/* Colour comes from Sprig's art; the desk below is a neutral surface */}
          <img
            src="/images/sprig/sprig-teacher-600.webp"
            alt="Sprig dressed as a teacher, holding a pointer and an open book"
            width={300}
            height={300}
            loading="lazy"
            decoding="async"
            className="hidden h-44 w-44 object-contain sm:block lg:h-56 lg:w-56"
          />
        </div>

        <div className="rounded-[2rem] border border-gray-200 bg-white p-4 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            {crops.map((c, i) => (
              <AnimateOnScroll key={c.src} delay={i * 80}>
                <figure className="flex h-full flex-col gap-3">
                  <div className="flex min-h-12 items-end justify-between gap-3">
                    <h3 className="text-base font-bold text-gray-900">{c.title}</h3>
                    {c.sprig && (
                      // Detective Sprig inspecting the report
                      <img src={c.sprig} alt="" aria-hidden="true" width={300} height={300} loading="lazy" decoding="async" className="-mb-2 h-14 w-14 object-contain sm:h-16 sm:w-16" />
                    )}
                  </div>
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
                  <figcaption className="text-sm leading-relaxed text-gray-600">{c.caption}</figcaption>
                </figure>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 leading-relaxed max-w-xl">{SHOWCASE_DISCLOSURE}</p>
      </div>
    </div>
  </section>
);

export default TeacherEvidenceSection;
