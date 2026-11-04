import React from 'react';
import { Link } from 'react-router-dom';
import ProductVideo from '@/components/ui/ProductVideo';
import { SHOWCASE_DISCLOSURE } from '@/data/productScreens';
import { getAudience } from '@/data/audiences';
import { useScheduleCall } from '@/contexts/ScheduleCallContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import PageTransition from '@/components/layout/PageTransition';
import { ArrowRight, Check } from 'lucide-react';

// About tells one story in order: the problem, our approach, what exists today, what is
// still unproven, where we're heading, how we mean to make it free for schools that need
// it, and who is behind it. Every factual claim here restates the Platform page, the
// Schools pilot plan or the Sponsor a School page; keep them in sync rather than adding
// new ones. Partnerships and funding are pursued, not secured: say so until they are.

const approach = [
  {
    title: 'Sprig guides, it doesn’t answer',
    description:
      'Sprig asks questions back and leaves the thinking to the student. Help is there through the hard part, and it fades as a student’s independent work holds up. The struggle is where reasoning gets built, so we keep it.',
  },
  {
    title: 'Teachers stay in control',
    description:
      'Teachers see how each student worked, with every turn labelled, and can review and override what Sprig suggests. Parents give consent before a child under 13 uses Sprig. School admins can switch AI off.',
  },
  {
    title: 'Honest about what it knows',
    description:
      'Help is weighed separately from independent work. Until there’s enough recent work to say something useful, Mentra says so instead of producing a score. It builds a fuller picture of each student as they work.',
  },
];

const built = [
  'Socratic tutoring, coding and investigations with Sprig',
  'Learning signals captured as students work, not just their answers',
  'A teacher report that labels each turn and weighs help separately',
  'Parent consent controls, with review, withdrawal and deletion',
  'LTI 1.3, OneRoster, and sign-in through Clever, ClassLink, Google and Microsoft',
];

const pilotRows = getAudience('schools').pilot ?? [];

// Forward-looking and deliberately general: directions we're working toward, not dated
// commitments. Update "Now" as the platform changes.
const roadmap = [
  {
    phase: 'Now',
    label: 'A working platform',
    text: 'Sprig, the learning signals underneath it, and the reports teachers and parents read, running in schools’ existing systems.',
  },
  {
    phase: 'Next',
    label: 'A larger pilot',
    text: 'Partner schools, measures agreed up front, and the evidence to show whether Mentra improves learning. What the pilot finds decides what we build next.',
  },
  {
    phase: 'Then',
    label: 'Free for schools that need it',
    text: 'Bring Mentra at no cost to under-resourced schools, funded by the partnerships we’re pursuing now.',
  },
  {
    phase: 'Ahead',
    label: 'Wherever students learn',
    text: 'More subjects, grades and languages; hands-on work beyond the screen; and a record of growth that students own and can take with them.',
  },
];

const funding = [
  {
    title: 'AI lab partnerships',
    text: 'Help covering the cost of the AI models Sprig runs on, so it isn’t passed to schools.',
  },
  {
    title: 'Philanthropic funding',
    text: 'Support for the infrastructure behind each school: hosting, AI usage and support, given through a charitable partner.',
  },
  {
    title: 'School partnerships',
    text: 'Working directly with under-resourced schools so the program fits how they already teach.',
  },
];

function SectionIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="max-w-3xl mb-12">
      <div className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-mentra-blue mb-3">{eyebrow}</div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">{title}</h2>
      {children && <div className="text-lg text-gray-500 leading-relaxed space-y-4">{children}</div>}
    </div>
  );
}

export default function About() {
  const { open: openScheduleCall } = useScheduleCall();

  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-white flex flex-col font-rounded">

        {/* Hero */}
        <section className="w-full" aria-labelledby="about-hero-heading">
          <div className="mx-auto max-w-screen-xl px-4 pt-24 pb-16 sm:pt-32 sm:pb-20">
            <div className="max-w-4xl">
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-mentra-blue mb-6">
                About Mentra
              </div>
              <h1
                id="about-hero-heading"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight text-balance"
              >
                AI that leaves students thinking for themselves
              </h1>
              <p className="mt-8 text-lg sm:text-xl lg:text-2xl text-gray-500 leading-relaxed max-w-2xl">
                Why we built Mentra, what exists today, what we still have to prove, and how we mean to make it free for the schools that need it most.
              </p>
            </div>
          </div>
        </section>

        {/* The problem */}
        <section className="w-full bg-gray-50 py-24" aria-labelledby="about-problem-heading">
          <div className="mx-auto max-w-screen-xl px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl">
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-mentra-blue mb-3">The problem</div>
                <h2 id="about-problem-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
                  AI risks replacing the thinking students need most
                </h2>
                <div className="text-lg text-gray-500 leading-relaxed space-y-4">
                  <p>
                    A student can now get a finished answer in seconds. What gets skipped is the slow part: working out what the question asks, trying something, getting it wrong, and trying again. That’s where reasoning is built.
                  </p>
                  <p>
                    Most ed-tech responded by giving kids more AI. We asked a different question: what if AI’s job was to make itself unnecessary, so that every interaction left a student stronger, not more dependent?
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Our approach */}
        <section className="w-full py-24" aria-label="Our approach">
          <div className="mx-auto max-w-screen-xl px-4">
            <AnimateOnScroll>
              <SectionIntro eyebrow="Our approach" title="Teacher-controlled AI that builds reasoning">
                <p>Three decisions shape everything we build.</p>
              </SectionIntro>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-3 gap-8">
              {approach.map((item, i) => (
                <AnimateOnScroll key={item.title} delay={i * 100}>
                  <div className="rounded-2xl border border-gray-200 p-6 h-full">
                    <div className="w-10 h-10 bg-mentra-blue/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-mentra-blue font-bold text-sm">{i + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* What we've built */}
        <section className="w-full bg-gray-50 py-24" aria-label="What we've built">
          <div className="mx-auto max-w-screen-xl px-4">
            <AnimateOnScroll>
              <SectionIntro eyebrow="What we’ve built" title="A working platform, and a first beta" />
            </AnimateOnScroll>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <AnimateOnScroll>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Built and running today</h3>
                <ul className="space-y-3">
                  {built.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                      <Check className="w-4 h-4 text-mentra-blue flex-shrink-0 mt-1.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/platform"
                  className="inline-flex items-center gap-2 mt-6 font-semibold text-mentra-blue hover:underline"
                >
                  See how the platform works
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-mentra-blue mb-3">Summer 2025 beta</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">20 middle-school students</h3>
                  <p className="text-gray-500 leading-relaxed mb-3">
                    An early version of Mentra ran with 20 middle-school students across math, coding and English. We used it to check two things: whether the AI held to its Socratic role instead of handing out answers, and how students engaged with it.
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    It was small and early. It wasn’t designed to measure learning outcomes, and we don’t claim it did. That’s what the next step is for.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="mt-16 max-w-5xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Mentra in 30 seconds</h3>
              <p className="text-gray-500 leading-relaxed text-center max-w-2xl mx-auto mb-6">
                Sprig coaches two students through tutoring and code, and then their teacher sees the work.
              </p>
              <ProductVideo
                mode="player"
                src="/videos/promo-30s.mp4"
                poster="/images/product/promo-30s-poster.webp"
                alt="A 30-second product film: Zoe asks Sprig for a homework answer and Sprig asks a question back; Jordan works toward why plants need sunlight and Sprig confirms the key idea; in a coding project Jordan fixes a line and runs it; then the teacher opens the report, where each turn is labelled, and one click opens Jordan's energy turn, labelled with help: help is weighed separately, not counted as independent work."
                width={1280}
                height={720}
              />
              <p className="text-xs text-gray-400 text-center mt-4">{SHOWCASE_DISCLOSURE}</p>
            </div>
          </div>
        </section>

        {/* What we need to prove */}
        <section className="w-full py-24" aria-label="What we need to prove">
          <div className="mx-auto max-w-screen-xl px-4">
            <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">
              <AnimateOnScroll>
                <SectionIntro eyebrow="What we need to prove" title="Whether Mentra improves learning">
                  <p>
                    A 20-student beta can’t answer that. The next step is a larger pilot with partner schools, judged on measures we agree before it starts, including students’ unaided work outside Mentra.
                  </p>
                </SectionIntro>
              </AnimateOnScroll>
              <img
                src="/images/sprig/pilot-measure-480.webp"
                alt=""
                width={480}
                height={480}
                loading="lazy"
                className="hidden lg:block w-64 h-64"
              />
            </div>

            <AnimateOnScroll>
              <dl className="divide-y divide-gray-200 border-y border-gray-200 max-w-4xl">
                {pilotRows.map((row) => (
                  <div key={row.question} className="grid sm:grid-cols-2 gap-2 sm:gap-8 py-5">
                    <dt className="font-semibold text-gray-900">{row.question}</dt>
                    <dd className="text-gray-500 leading-relaxed">{row.evidence}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
                <button
                  type="button"
                  onClick={openScheduleCall}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-mentra-blue px-6 py-3 font-semibold text-white hover:bg-mentra-blue/90 transition-colors"
                >
                  Talk to us about the pilot
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <Link to="/schools" className="font-semibold text-mentra-blue hover:underline">
                  See the full pilot plan
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Where we're going */}
        <section className="w-full bg-gray-50 py-24" aria-label="Where we're going">
          <div className="mx-auto max-w-screen-xl px-4">
            <AnimateOnScroll>
              <SectionIntro eyebrow="Where we’re going" title="The path from here">
                <p>Directions we’re working toward, not dated promises. Each step depends on what the one before it shows.</p>
              </SectionIntro>
            </AnimateOnScroll>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {roadmap.map((step, i) => (
                <AnimateOnScroll key={step.phase} delay={i * 80}>
                  <li className="bg-white rounded-2xl border border-gray-200 p-6 h-full">
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-mentra-blue bg-mentra-blue/10 px-2.5 py-1 rounded-full mb-4">
                      {step.phase}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.label}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.text}</p>
                  </li>
                </AnimateOnScroll>
              ))}
            </ol>
          </div>
        </section>

        {/* The free education mission */}
        <section className="w-full py-24" aria-label="The free education mission">
          <div className="mx-auto max-w-screen-xl px-4">
            <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">
              <AnimateOnScroll>
                <SectionIntro eyebrow="The free education mission" title="Free for the schools that need it most">
                  <p>
                    A school’s budget shouldn’t decide whether its students get AI that teaches them to think. Our aim is to offer Mentra free to under-resourced schools, funded in three ways.
                  </p>
                </SectionIntro>
              </AnimateOnScroll>
              <img
                src="/images/sprig/MENTRA_SPRIG_GIVE-256.webp"
                alt=""
                width={256}
                height={256}
                loading="lazy"
                className="hidden lg:block w-48 h-48"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {funding.map((item, i) => (
                <AnimateOnScroll key={item.title} delay={i * 100}>
                  <div className="rounded-2xl border border-gray-200 p-6 h-full">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll>
              <p className="mt-8 text-gray-500 leading-relaxed max-w-3xl">
                <span className="font-semibold text-gray-900">Where this stands:</span> we’re actively pursuing all three. No AI lab or charitable partner is in place yet, and we’ll name them here when they are.
              </p>
              <Link
                to="/sponsor-a-school"
                className="inline-flex items-center gap-2 mt-4 font-semibold text-mentra-blue hover:underline"
              >
                Sponsor a school
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </AnimateOnScroll>
          </div>
        </section>

        {/* The founder */}
        <section className="w-full bg-gray-50 py-24" aria-labelledby="about-founder-heading">
          <div className="mx-auto max-w-screen-xl px-4">
            <div className="grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-center mb-16">
              <img
                src="/images/other/edward-kerr.jpg"
                alt="Edward Kerr, Founder of Mentra"
                width="400"
                height="400"
                loading="lazy"
                className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-xl mx-auto lg:mx-0"
              />
              <AnimateOnScroll>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-mentra-blue mb-3">The founder</div>
                <h2 id="about-founder-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
                  Why I’m building this
                </h2>
                <div className="text-lg text-gray-500 leading-relaxed space-y-4 max-w-2xl">
                  <p>
                    I’m Edward Kerr: technologist, father, and founder. As a dad to Grace, Hope, and Joy, I watched AI change everything about what it means to learn and succeed.
                  </p>
                  <p className="italic">
                    “The AI is training wheels, not a motor. Every feature is designed to transfer capability to the student, not create a crutch they can’t walk without.”
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-gray-200">
              <iframe
                src="https://www.youtube.com/embed/Q84vfTtvGMA"
                title="Why we built Mentra"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </PageTransition>
  );
}
