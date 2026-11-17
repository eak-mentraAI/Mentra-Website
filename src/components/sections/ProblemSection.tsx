import React from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import BrandGradient from '@/components/ui/BrandGradient';

// The problem, in the teacher's terms, from the November 2026 research pulse (Mentra App repo,
// reports/K12 education and AI sentiment pulse.md). Use only figures that report marks as confirmed, each
// with its source. Don't say Mentra "proves" anything or catches cheating: it shows the student's working.
const facts = [
  {
    figure: '67%',
    text: 'of students in a RAND panel say using AI for schoolwork harms their critical thinking, up from 54% a year earlier. Their AI homework use rose anyway.',
    source: 'RAND, via eSchool News, 2026',
    href: 'https://www.eschoolnews.com/digital-learning/2026/03/25/student-use-of-ai-for-homework-rises/',
  },
  {
    figure: '2 in 10',
    text: 'Americans rate schools good or excellent at teaching critical thinking, in Gallup’s 2026 education poll, as satisfaction with K-12 hit a record low.',
    source: 'Gallup, via AP, 2026',
    href: 'https://civilbeat.org/2026/09/americans-school-satisfaction-is-at-a-low-point-national-poll-shows',
  },
  {
    figure: '17%',
    text: 'is how often the typical student messaged an AI tutor after making a mistake, in a two-year trial across 18 Tennessee middle schools. Offered as an optional chat beside the work, the tutor mostly went unused.',
    source: 'NBER working paper 35620, 2026',
    href: 'https://www.nber.org/papers/w35620',
  },
];

const ProblemSection = () => (
  <section id="the-problem" className="py-24 bg-white border-t border-gray-100 scroll-mt-20" aria-labelledby="the-problem-heading">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <AnimateOnScroll>
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mentra-blue">The problem</p>
            <h2 id="the-problem-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
              Take-home work stopped showing <BrandGradient>who did the thinking</BrandGradient>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A finished essay or a page of right answers used to tell a teacher something. Now a chatbot can produce
              it in seconds. Detectors give a probability rather than evidence, and they flag students who did their
              own work. So teachers are getting the evidence back with their own time: handwritten essays in class,
              oral checks, and standing at the back of the room for every test.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mentra isn&rsquo;t a cheating detector. The assignment happens with Sprig, and the teacher sees the
              student&rsquo;s working: what they tried, where they needed help, and what they managed on their own.
              When there isn&rsquo;t enough to go on, it says so.
            </p>
          </div>
        </AnimateOnScroll>

        <ul className="grid gap-6 md:grid-cols-3">
          {facts.map((f, i) => (
            <li key={f.figure} className="flex">
              <AnimateOnScroll delay={i * 80} className="flex w-full">
                <div className="flex w-full flex-col rounded-2xl border border-gray-200 p-6">
                  <p className="text-4xl font-bold text-gray-900">{f.figure}</p>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-gray-700">{f.text}</p>
                  <a
                    href={f.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-sm text-gray-500 underline underline-offset-4 hover:text-mentra-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-mentra-blue rounded"
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
