import React from 'react';
import { ZoomIn } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

// What teachers see and decide, then how help steps back over weeks (this absorbs the old How it works section).
// Adults decide here, so the real screens carry the section. Crops come from the batch-c live captures
// (teacher-independence.webp, teacher-recommendation.webp). The Independence Report rows are shown large, near 1:1, so
// the labels can be read; the recommendation card supports it at a smaller size. Claims trace to app code:
// independence_evidence.py (labels), help_intensity_rollup.py ("not enough data yet"), RecommendationCard.tsx
// (confidence, "when this may be wrong", approve/modify/dismiss), and CoachingPolicy / scaffold_calibration.py (help
// steps back after real unaided success). The synthetic-data disclosure is shown once, in ConversationStory.
const report = {
  src: '/images/product/teacher-independence-rows.webp',
  width: 1010,
  height: 330,
  alt: "The Independence Report: Leo is marked Leaning on support, with independent first attempts falling and moderate confidence; Jordan is marked Not enough data yet, with a link to see recent turns.",
};

const recommendation = {
  src: '/images/product/teacher-recommendation-card.webp',
  width: 986,
  height: 466,
  alt: "A recommendation for Jordan Lee: Watch this trend, lower confidence, with why it matters, what it's based on, what success looks like, when it may be wrong, and Approve, Modify, Dismiss and Track outcome buttons.",
};

// Illustrative only: Sprig's help shrinking as a student shows the skill, then returning when they struggle.
const helpBars = [100, 78, 56, 36, 20, 48];

const TeacherEvidenceSection = () => (
  <section id="teacher-evidence" className="py-16 sm:py-20 bg-gray-50 scroll-mt-20" aria-labelledby="teacher-evidence-heading">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        <AnimateOnScroll>
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mentra-blue">For teachers</p>
            <h2 id="teacher-evidence-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
              See the student&rsquo;s working, not just the answer
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Independence Report labels each answer by how it was reached: on their own, with help, or
              repeating what Sprig said. Until there&rsquo;s enough unaided work to read, it says so instead of
              guessing. It&rsquo;s a record to teach from, not a verdict on a student.
            </p>
          </div>
        </AnimateOnScroll>

        {/* The main screen, large enough to read. Phones scroll it sideways rather than shrinking the text away. */}
        <AnimateOnScroll>
          <figure className="m-0 space-y-3">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-base font-bold text-gray-900">The Independence Report</h3>
              <span className="text-xs text-gray-500 sm:hidden" aria-hidden="true">Swipe to read the row &rarr;</span>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
              <img
                src={report.src}
                alt={report.alt}
                width={report.width}
                height={report.height}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full min-w-[40rem] max-w-none"
              />
            </div>
            <figcaption className="text-sm leading-relaxed text-gray-600">
              It names who needs a look, and says &ldquo;not enough data yet&rdquo; instead of guessing.
            </figcaption>
          </figure>
        </AnimateOnScroll>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-12">
          {/* Supporting screen: smaller, with a link to the full-size capture */}
          <AnimateOnScroll>
            <figure className="m-0 space-y-3">
              <a
                href={recommendation.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-mentra-blue"
              >
                <img
                  src={recommendation.src}
                  alt={recommendation.alt}
                  width={recommendation.width}
                  height={recommendation.height}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full"
                />
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-gray-600 shadow-sm ring-1 ring-gray-200 group-hover:text-gray-900">
                  <ZoomIn className="h-3.5 w-3.5" aria-hidden="true" />
                  Full size
                </span>
              </a>
              <figcaption className="text-sm leading-relaxed text-gray-600">
                <span className="font-semibold text-gray-900">A recommendation.</span> It says when it may be wrong.
                Nothing happens until the teacher decides.
              </figcaption>
            </figure>
          </AnimateOnScroll>

          {/* Help steps back over weeks */}
          <AnimateOnScroll delay={80}>
            <div className="space-y-5">
              <div className="flex items-end gap-4" aria-hidden="true">
                <div className="flex h-24 flex-1 items-end gap-1.5 border-b border-gray-200">
                  {helpBars.map((h, i) => (
                    <span
                      key={i}
                      className={i === helpBars.length - 1 ? 'flex-1 rounded-t-md border-2 border-dashed border-mentra-blue/50' : 'flex-1 rounded-t-md bg-mentra-blue'}
                      style={{ height: `${h}%`, opacity: i === helpBars.length - 1 ? 1 : 1 - i * 0.15 }}
                    />
                  ))}
                </div>
                <img
                  src="/images/sprig/flywheel-05-independence-192.webp"
                  alt=""
                  width={192}
                  height={192}
                  loading="lazy"
                  decoding="async"
                  className="h-24 w-24 sm:h-28 sm:w-28 shrink-0 object-contain"
                />
              </div>
              <p className="text-xs text-gray-500" aria-hidden="true">Sprig&rsquo;s help, assignment by assignment (illustrative)</p>
              <h3 className="text-2xl font-bold text-gray-900 text-balance">Over weeks, the help steps back</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Once a student shows a skill on their own, Sprig asks a harder open question instead of offering
                another hint. If they start to struggle again, the support comes back.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  </section>
);

export default TeacherEvidenceSection;
