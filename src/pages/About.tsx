import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import PageTransition from '../components/layout/PageTransition';
import { ArrowRight, Package, BarChart3, Smartphone, Globe, Sparkles } from 'lucide-react';

const beliefs = [
  {
    title: 'AI should make itself less necessary',
    description: 'Every feature we build is measured by one question: does the student need us less than they did last month? Scaffolding fades. Coaching has hard limits. Independence is the product.',
  },
  {
    title: 'Humans stay in control at every level',
    description: 'Teachers override any AI decision. Parents gate all data. Admins kill-switch all AI in under a second — fails closed. We built the architecture so that no one has to trust a black box.',
  },
  {
    title: 'Honesty is built into the architecture',
    description: 'Fail-closed consent. Append-only audit trails. Automated policy gates on every commit. And a system built to refuse to lie — it says "we don\'t know yet" instead of inventing a score, and never mistakes a child parroting an answer for genuine mastery. Every claim is demonstrable by inspecting the system, not reading a policy document.',
  },
];

const roadmapPhases = [
  {
    phase: 'Now',
    label: 'The Learner Intelligence Layer',
    icon: Sparkles,
    items: [
      'Honest measurement: 26 signal types and a deterministic insight engine that refuses to score a child parroting an answer as mastery — it says "we don\'t know yet" instead',
      'An independence-quality signal that tells real thinking apart from mimicry',
      'Socratic AI tutoring that guides thinking, never gives answers, with scaffolding that fades',
      'Teacher intelligence hub with full override on every AI decision',
      'Parent insights — signal, not noise — with consent controls on everything',
      'COPPA/FERPA compliance built into the architecture, not bolted on',
    ],
  },
  {
    phase: 'Next',
    label: 'Beyond the Screen',
    icon: Package,
    items: [
      'Physical engineering kits and maker projects that connect digital learning to real-world building — in development with partners',
      'Hands-on challenges with in-app assignments students complete',
      'Collaborative classroom experiences where AI supports the group, not just the individual',
      'Teacher-designed assignment templates shared across the Mentra community',
    ],
  },
  {
    phase: 'Soon',
    label: 'A Portrait of Every Learner',
    icon: BarChart3,
    items: [
      'A portable cognitive credential students own — an open standard the field adopts, not a Mentra export',
      'The first honest metric for rate of independence — the number the whole sector starts measuring against',
      'AI that supports a group, not just one learner at a time',
      'Community templates that let teachers build on each other\'s work',
    ],
  },
  {
    phase: 'Ahead',
    label: 'Learning That Follows the Child',
    icon: Smartphone,
    items: [
      'Ambient learning intelligence — capture how a child thinks wherever they work, online or off',
      'Cognition that transfers across language — measure thinking itself, independent of the language it\'s expressed in',
      'Accessible by design for every kind of learner, no retrofit required',
    ],
  },
  {
    phase: 'Vision',
    label: 'A New Standard for Learning',
    icon: Globe,
    items: [
      'Open learner-data standards so students own their growth story',
      'Proof that a district is graduating thinkers, not test-passers — an outcome no incumbent can claim',
      'AI literacy embedded in every experience',
      'A generation of students who know how to learn, not just how to be taught',
    ],
  },
];

export default function About() {
  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-white flex flex-col items-center font-rounded">

        {/* Founder Story — hero mirrors home page structure */}
        <section className="relative overflow-hidden" aria-labelledby="about-hero-heading">
          <div className="mx-auto max-w-screen-xl px-4 py-24 sm:py-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: founder photo */}
              <div className="flex justify-center lg:justify-start">
                <img
                  src="/images/other/edward-kerr.jpg"
                  alt="Edward Kerr, Founder of Mentra"
                  width="400"
                  height="400"
                  className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] object-cover rounded-2xl shadow-xl"
                />
              </div>
              {/* Right: text */}
              <div className="text-center lg:text-left space-y-8">
                <div className="space-y-6">
                  <div className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-mentra-blue">
                    A founder's note
                  </div>
                  <h1
                    id="about-hero-heading"
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight text-balance"
                  >
                    Why we built Mentra
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    I'm Edward Kerr — technologist, father, and founder. As a dad to Grace, Hope, and Joy, I watched AI change everything about what it means to learn and succeed.
                  </p>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Most ed-tech responded by giving kids more AI. We asked a different question: what if AI's job was to make itself unnecessary? What if every interaction made the student stronger, not more dependent?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Believe */}
        <section className="w-full bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
                  Three beliefs that shape everything we build
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  These aren't marketing lines. They're architectural decisions. Every feature, every policy gate, every design choice traces back to one of these.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {beliefs.map((belief, i) => (
                <AnimateOnScroll key={belief.title} delay={i * 100}>
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 h-full">
                    <div className="w-10 h-10 bg-mentra-blue/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-mentra-blue font-bold text-sm">{i + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{belief.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{belief.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="w-full py-24 bg-white">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
                  Where we're going
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  The Learner Intelligence Layer is built and measured today — verified in simulation and honesty-gated before it ever reaches a real student. What comes next isn't a checklist of features that ship and are done; it's the harder, generational work of setting the standards and metrics the whole field can measure against.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Timeline */}
            <div className="max-w-5xl mx-auto">
              <div className="relative pl-10 md:pl-14">
                {/* Vertical line — centered on the nodes (which stay anchored to the
                    container's left edge), so it stays aligned at every breakpoint */}
                <div className="absolute left-[15px] top-0 w-0.5 h-full bg-gray-200 rounded-full" />

                <div className="space-y-8">
                  {roadmapPhases.map((phase, i) => (
                    <AnimateOnScroll key={phase.phase} delay={i * 80}>
                      <div className="relative">
                        {/* Node — solid white underlay so the timeline line
                            doesn't show through the semi-transparent tint */}
                        <div className="absolute -left-10 md:-left-14 top-1 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                          <span className="absolute inset-0 rounded-full bg-mentra-blue/10" aria-hidden="true" />
                          <phase.icon className="w-4 h-4 text-mentra-blue relative" />
                        </div>

                        {/* Content */}
                        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-mentra-blue bg-mentra-blue/10 px-2.5 py-1 rounded-full">
                              {phase.phase}
                            </span>
                            <h3 className="text-lg font-bold text-gray-900">{phase.label}</h3>
                          </div>
                          <ul className="space-y-2">
                            {phase.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-2.5 text-gray-500 text-sm leading-relaxed">
                                <ArrowRight className="w-3.5 h-3.5 text-mentra-blue flex-shrink-0 mt-1" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sign-off */}
        <section className="w-full bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <AnimateOnScroll>
                <p className="text-lg text-gray-500 italic mb-4 leading-relaxed">
                  "The AI is training wheels, not a motor. Every feature is designed to transfer capability to the student — not create a crutch they can't walk without."
                </p>
                <p className="font-bold text-gray-900">Edward Kerr</p>
                <p className="text-sm text-gray-400">Founder, Mentra</p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </PageTransition>
  );
}
