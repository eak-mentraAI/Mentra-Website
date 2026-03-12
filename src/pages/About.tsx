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
    description: 'Teachers override any AI decision. Parents gate all data. Districts kill-switch instantly. We built the architecture so that no one has to trust a black box.',
  },
  {
    title: 'Trust is earned by architecture, not promises',
    description: 'Fail-closed consent. Append-only audit trails. 57 automated policy gates. Every claim we make is demonstrable by inspecting the system — not by reading a policy document.',
  },
];

const roadmapPhases = [
  {
    phase: 'Now',
    label: 'Building the Foundation',
    icon: Sparkles,
    items: [
      'Socratic AI tutoring that guides thinking, never gives answers',
      'Real-time struggle detection with scaffolding that fades',
      'Teacher intelligence hub with full override on every AI decision',
      'Parent dashboard — signal, not noise — with consent controls on everything',
      'COPPA/FERPA compliance built into the architecture, not bolted on',
    ],
  },
  {
    phase: 'Next',
    label: 'Beyond the Screen',
    icon: Package,
    items: [
      'Physical engineering kits shipped to schools — hands-on challenges with in-app assignments students complete',
      'Maker projects that connect digital learning to real-world building',
      'Collaborative classroom experiences where AI supports the group, not just the individual',
      'Teacher-designed assignment templates shared across the Mentra community',
    ],
  },
  {
    phase: 'Soon',
    label: 'Measuring What Actually Matters',
    icon: BarChart3,
    items: [
      'New ways to measure human growth — not just grades, but resilience, curiosity, and how students approach problems they\'ve never seen',
      'Learner Passport that travels with the student and tells the real story of who they are',
      'Growth trajectories that show rate of independence, not just test scores',
      'Parent-facing insights that answer "is my child becoming a better thinker?" — not just "did they pass?"',
    ],
  },
  {
    phase: 'Ahead',
    label: 'Meeting Students Where They Are',
    icon: Smartphone,
    items: [
      'Native mobile experiences for learning on the go',
      'Offline-capable modes for schools with limited connectivity',
      'Accessibility-first design for every type of learner',
      'Multilingual support so language is never a barrier to growth',
    ],
  },
  {
    phase: 'Vision',
    label: 'A New Standard for Learning',
    icon: Globe,
    items: [
      'Open learner data standards so students own their growth story',
      'District-wide analytics that measure what matters — independence, critical thinking, self-awareness',
      'AI literacy curriculum embedded in every experience',
      'A generation of students who know how to learn, not just how to be taught',
    ],
  },
];

export default function About() {
  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-white flex flex-col items-center font-rounded">

        {/* Founder Story */}
        <section className="container mx-auto px-4 pt-24 pb-24">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <img
              src="/images/other/edward-kerr.jpg"
              alt="Edward Kerr, Founder of Mentra"
              className="w-52 h-52 md:w-64 md:h-64 object-cover rounded-2xl flex-shrink-0"
            />
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
                Why we built Mentra
              </h1>
              <p className="text-xl text-gray-600 mb-3 leading-relaxed">
                I'm Edward Kerr — technologist, father, and founder. As a dad to Grace, Hope, and Joy, I watched AI change everything about what it means to learn and succeed.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Most ed-tech responded by giving kids more AI. We asked a different question: what if AI's job was to make itself unnecessary? What if every interaction made the student stronger, not more dependent?
              </p>
            </div>
          </div>
        </section>

        {/* What We Believe */}
        <section className="w-full bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-4xl mx-auto text-center mb-16">
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
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
                  Where we're going
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Mentra today is the foundation. What comes next pushes learning beyond the screen, beyond grades, and beyond what traditional ed-tech has attempted.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Timeline */}
            <div className="max-w-3xl mx-auto">
              <div className="relative pl-10 md:pl-14">
                {/* Vertical line */}
                <div className="absolute left-[15px] md:left-[23px] top-0 w-0.5 h-full bg-gray-200 rounded-full" />

                <div className="space-y-8">
                  {roadmapPhases.map((phase, i) => (
                    <AnimateOnScroll key={phase.phase} delay={i * 80}>
                      <div className="relative">
                        {/* Node */}
                        <div className="absolute -left-10 md:-left-14 top-1 w-[31px] h-[31px] rounded-full bg-mentra-blue/10 flex items-center justify-center">
                          <phase.icon className="w-4 h-4 text-mentra-blue" />
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
            <div className="max-w-3xl mx-auto text-center">
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
