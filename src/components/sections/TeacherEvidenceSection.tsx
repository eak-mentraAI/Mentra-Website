import React from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { SHOWCASE_DISCLOSURE } from '@/data/productScreens';

// What teachers see and decide, then how help steps back over weeks (this absorbs the old How it works section).
// Adults decide here, so the real screens carry the section and Sprig only appears in the fading-ladder scene.
// Crops come from the batch-c live captures (teacher-independence.webp, teacher-recommendation.webp), with each
// row's status label kept beside it. Claims trace to app code: independence_evidence.py (labels),
// help_intensity_rollup.py ("not enough data yet"), RecommendationCard.tsx (confidence, "when this may be wrong",
// approve/modify/dismiss), and CoachingPolicy / scaffold_calibration.py (help steps back after real unaided success).
const crops = [
  {
    src: '/images/product/teacher-independence-rows.webp',
    width: 1010,
    height: 330,
    title: 'The Independence Report',
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
  <section id="teacher-evidence" className="py-24 bg-white scroll-mt-20" aria-labelledby="teacher-evidence-heading">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto space-y-12">
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

        <div className="rounded-[2rem] border border-gray-200 bg-gray-50 p-4 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            {crops.map((c, i) => (
              <AnimateOnScroll key={c.src} delay={i * 80}>
                <figure className="flex h-full flex-col gap-3">
                  <h3 className="text-base font-bold text-gray-900">{c.title}</h3>
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

        {/* Help steps back over weeks: the one Sprig scene in this section */}
        <AnimateOnScroll>
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-12">
            <img
              src="/images/scenes/scaffolding-fades-1200.webp"
              alt="Three panels: a student sits stuck beside a ladder with Sprig; then walks with Sprig as the ladder fades; then walks on alone while Sprig waves."
              width={1200}
              height={600}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-2xl"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 text-balance">Over weeks, the help steps back</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Once a student shows a skill on their own, Sprig asks a harder open question instead of offering
                another hint. If they start to struggle again, the support comes back.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <p className="text-xs text-gray-400 leading-relaxed max-w-xl">{SHOWCASE_DISCLOSURE}</p>
      </div>
    </div>
  </section>
);

export default TeacherEvidenceSection;
