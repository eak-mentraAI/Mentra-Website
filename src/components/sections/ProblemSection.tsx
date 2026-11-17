import React from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import BrandGradient from '@/components/ui/BrandGradient';

// The problem, from the school's and district's side, from the November 2026 research pulse (Mentra App repo,
// reports/K12 education and AI sentiment pulse.md). About and Teachers tell it from the classroom; keep this one the
// buyer's view. Use only figures that report marks as confirmed, each with its source. Each card's line is a shortened
// form of the finding; `detail` keeps the full wording as the source link's title. Don't say Mentra
// "proves" anything or catches cheating: it shows the student's working.
const facts = [
  {
    figure: '67%',
    line: 'of students say using AI for schoolwork harms their critical thinking. Their AI homework use rose anyway.',
    detail: 'Of students in a RAND panel, 67% say using AI for schoolwork harms their critical thinking, up from 54% a year earlier. Their AI homework use rose anyway.',
    source: 'RAND, via eSchool News, 2026',
    href: 'https://www.eschoolnews.com/digital-learning/2026/03/25/student-use-of-ai-for-homework-rises/',
  },
  {
    figure: '2 in 10',
    line: 'Americans rate schools good or excellent at teaching critical thinking.',
    detail: 'Two in ten Americans rate schools good or excellent at teaching critical thinking, in Gallup’s 2026 education poll, as satisfaction with K-12 hit a record low.',
    source: 'Gallup, via AP, 2026',
    href: 'https://civilbeat.org/2026/09/americans-school-satisfaction-is-at-a-low-point-national-poll-shows',
  },
  {
    figure: '17%',
    line: 'is how often the typical student messaged an optional AI tutor after a mistake.',
    detail: '17% is how often the typical student messaged an AI tutor after making a mistake, in a two-year trial across 18 Tennessee middle schools. Offered as an optional chat beside the work, the tutor mostly went unused.',
    source: 'NBER working paper 35620, 2026',
    href: 'https://www.nber.org/papers/w35620',
  },
];

const ProblemSection = () => (
  <section id="the-problem" className="py-16 sm:py-20 bg-white border-t border-gray-100 scroll-mt-20" aria-labelledby="the-problem-heading">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        <AnimateOnScroll>
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mentra-blue">The problem</p>
            <h2 id="the-problem-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
              Take-home work stopped showing <BrandGradient>who did the thinking</BrandGradient>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your schools grade work a chatbot can produce in seconds. Detectors offer a probability, not evidence,
              and flag students who did their own work. So the evidence is being bought back with class time:
              handwritten essays, oral checks, proctored tests.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mentra isn&rsquo;t a cheating detector. Assignments happen with Sprig, and each teacher sees the
              student&rsquo;s working: what they tried, where they needed help, what they managed on their own. When
              there isn&rsquo;t enough to go on, it says so.
            </p>
          </div>
        </AnimateOnScroll>

        <ul className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {facts.map((f, i) => (
            <li key={f.figure} className="flex">
              <AnimateOnScroll delay={i * 80} className="flex w-full">
                <div className="flex w-full flex-col rounded-2xl border border-gray-200 p-6">
                  <p className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900">{f.figure}</p>
                  <p className="mt-3 flex-1 text-base leading-snug text-gray-700">{f.line}</p>
                  <a
                    href={f.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={f.detail}
                    className="mt-4 self-start text-xs text-gray-500 underline underline-offset-4 hover:text-mentra-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-mentra-blue rounded"
                  >
                    {f.source}
                  </a>
                </div>
              </AnimateOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ProblemSection;
