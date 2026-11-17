import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, X } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { cn } from '@/lib/utils';

// "Built for a class, not one student": a summary of what the reader has just seen, placed after the evidence
// section. It states what Mentra gives a school rather than arguing with any named product. The free-tools column
// describes free study modes and AI chat summaries generally (see the Mentra App repo's reports/K12 teacher insight
// competitor teardown.md: none documents separating helped from unaided work, or saying it cannot tell). Where the
// teardown says nothing either way (families, safeguards), there's no row to cross out: those sit below the table
// as "Also with Mentra". Mentra's column traces to app code: assignment
// AI-help levels (AdvancedSettingsCard.tsx), independence labels and mimicry scoring (independence_evidence.py),
// template-built teacher briefs, "too early to tell", RecommendationCard.tsx, consent for every student
// (coppa_gate.py), district data separation and age-band safety settings.
type Row = { topic: string; free: string; mentra: string };

const rows: Row[] = [
  {
    topic: 'Who sets the help',
    free: 'Each student chooses whether to use a study mode',
    mentra: 'The teacher, for each assignment, including No AI Help',
  },
  {
    topic: 'Help vs. on their own',
    free: 'No line between the two',
    mentra: 'A report showing which answers came with help, and which were unaided',
  },
  {
    topic: 'What the teacher reads',
    free: 'An AI-written summary of what students asked about',
    mentra: 'Briefs built by fixed rules from the recorded work, not written by a chatbot',
  },
  {
    topic: 'When evidence is thin',
    free: 'No documented way to say it can’t tell',
    mentra: '“Too early to tell”, instead of a guess',
  },
];

const alsoMentra = [
  'One thing for families to try at home',
  'Consent for every student, data separated by district, safety tuned by age',
];

// Column widths in twelfths, so the Mentra outline can sit exactly over its column.
const COLS = 'md:grid-cols-[minmax(0,3fr)_minmax(0,4fr)_minmax(0,5fr)]';
const MENTRA_LEFT = `${(7 / 12) * 100}%`;

const StudyModeComparison = () => (
  <section id="why-mentra" className="py-16 sm:py-20 bg-white scroll-mt-20" aria-labelledby="why-mentra-heading">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        <AnimateOnScroll>
          <div className="grid items-center gap-6 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-10">
            <div className="max-w-3xl space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mentra-blue">Why Mentra</p>
              <h2 id="why-mentra-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
                Built for a class, not one student
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Free AI tools now coach students and summarise their chats for teachers. Mentra is built for a
                different job: showing a teacher what each student did with help, and what they did on their own.
              </p>
            </div>
            {/* A teacher helping one student, another working alone, and one walking on by itself */}
            <img
              src="/images/sprig/sprig-class-1100.webp"
              alt="A teacher Sprig in glasses helps one student Sprig at a tree-stump desk while another works on its own, and a third Sprig walks off alone along a dotted path."
              width={1100}
              height={459}
              loading="lazy"
              decoding="async"
              className="w-full h-auto"
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="relative border-b border-gray-200" role="table" aria-label="Free AI tools compared with Mentra">
            {/* The Mentra column's outline, desktop only (phones outline each Mentra cell instead) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 hidden rounded-2xl border-2 border-mentra-blue/60 md:block"
              style={{ left: MENTRA_LEFT }}
            />
            <div role="row" className={cn('hidden md:grid', COLS)}>
              <span role="columnheader" className="sr-only">Topic</span>
              <span role="columnheader" className="px-5 pb-3 pt-5 text-sm font-bold text-gray-500">Free AI tools give a class</span>
              <span role="columnheader" className="flex items-center gap-2 px-5 pb-3 pt-5 text-sm font-bold text-gray-900">
                <img src="/images/sprig/sprig-greet-80.webp" alt="" width={80} height={80} loading="lazy" decoding="async" className="h-7 w-7" />
                Mentra gives a school
              </span>
            </div>
            {rows.map((r) => (
              <div
                key={r.topic}
                role="row"
                className={cn('grid gap-2 border-t border-gray-200 py-4 md:gap-0 md:py-0', COLS)}
              >
                <span role="rowheader" className="text-sm font-semibold text-gray-900 md:px-5 md:py-4 md:text-base">
                  {r.topic}
                </span>
                <span role="cell" className="flex gap-2.5 text-sm leading-snug text-gray-500 md:px-5 md:py-4 md:text-base">
                  <X className="mt-0.5 h-4 w-4 flex-none text-gray-400" aria-label="No" />
                  <span>
                    <span className="font-medium md:hidden">Free AI tools: </span>
                    {r.free}
                  </span>
                </span>
                <span
                  role="cell"
                  className="flex gap-2.5 rounded-lg border border-mentra-blue/40 px-3 py-2 text-sm leading-snug text-gray-900 md:rounded-none md:border-0 md:px-5 md:py-4 md:text-base"
                >
                  <Check className="mt-0.5 h-4 w-4 flex-none text-mentra-blue" strokeWidth={3} aria-label="Yes" />
                  <span>
                    <span className="font-semibold md:hidden">Mentra: </span>
                    {r.mentra}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <div className="space-y-6">
          <div className="flex flex-col gap-3 text-base text-gray-900 md:flex-row md:flex-wrap md:items-center md:gap-x-8">
            <span className="text-sm font-semibold text-gray-500">Also with Mentra</span>
            {alsoMentra.map((a) => (
              <span key={a} className="flex gap-2.5 leading-snug">
                <Check className="mt-0.5 h-4 w-4 flex-none text-mentra-blue" strokeWidth={3} aria-hidden="true" />
                {a}
              </span>
            ))}
          </div>
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
