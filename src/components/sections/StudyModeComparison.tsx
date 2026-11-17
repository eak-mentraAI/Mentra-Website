import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

// "Built for a class, not one student": a summary of what the reader has just seen, placed after the evidence
// section. It states what Mentra gives a school rather than arguing with any named product. The left column describes
// free study modes and AI chat summaries generally (see the Mentra App repo's reports/K12 teacher insight competitor
// teardown.md: none documents separating helped from unaided work, or saying it cannot tell). Mentra's column traces
// to app code: assignment AI-help levels (AdvancedSettingsCard.tsx), independence labels and mimicry scoring
// (independence_evidence.py), template-built teacher briefs, "too early to tell", RecommendationCard.tsx, consent for
// every student (coppa_gate.py), district data separation and age-band safety settings.
const studyMode = [
  'A study mode each student chooses whether to use',
  'An AI-written summary of what students asked about',
  'No line between work done with help and work done alone',
];

const mentra = [
  'Help the teacher sets for each assignment, including No AI Help',
  'A report showing which answers came with help, and which were unaided',
  'Teacher briefs built by fixed rules from the recorded work, not written by a chatbot',
  '“Too early to tell” when the evidence is thin, instead of a guess',
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
              Free AI tools now coach students and summarise their chats for teachers. Mentra is built for a different
              job: showing a teacher what each student did with help, and what they did on their own.
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
              <h3 className="text-lg font-bold text-gray-500">Free AI tools give a class</h3>
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

        <div>
          <Link
            to="/blog/five-questions-before-choosing-an-ai-tutor"
            className="inline-flex items-center gap-1.5 font-semibold text-mentra-blue underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-mentra-blue rounded"
          >
            Comparing options? Five questions to ask before choosing an AI tutor
            <ArrowRight className="h-4 w-4 flex-none" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default StudyModeComparison;
