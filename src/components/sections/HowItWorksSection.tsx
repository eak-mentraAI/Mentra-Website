import React from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ProductScreen from '@/components/ui/ProductScreen';
import { screens } from '@/data/productScreens';

// Every step here must trace to app code (signal extractors, learner-intelligence-service, CoachingPolicy).
const steps = [
  {
    image: '/images/sprig/flywheel-01-reflect.png',
    title: 'A reply becomes signals',
    description: 'Did they try it unaided? How deep did the reasoning go? Which hints did they need, and how did their confidence move?',
  },
  {
    image: '/images/sprig/flywheel-02-patterns.png',
    title: 'Signals build a learner graph',
    description: "Each signal lands in that student's learner graph, with its full history.",
  },
  {
    image: '/images/sprig/flywheel-03-act.png',
    title: 'Rules decide what adults see',
    description: 'Fixed rules, not a chatbot, turn the graph into the reads teachers and parents see.',
  },
  {
    image: '/images/sprig/flywheel-04-adapts.png',
    title: 'People act',
    description: 'Teachers approve, change or dismiss each recommendation. Families get one thing to try at home.',
  },
  {
    image: '/images/sprig/flywheel-05-independence.png',
    title: 'Sprig steps back',
    description: 'Once a student shows a skill, Sprig asks a harder open question instead of offering another hint.',
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 bg-gray-50 scroll-mt-20" aria-labelledby="how-it-works-heading">
    <div className="container mx-auto px-4">
      <AnimateOnScroll>
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mentra-blue mb-3">How Mentra works</p>
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance"
          >
            From one reply to the long-term picture
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Most ed-tech adds dependency. Mentra is built so the help fades: every reply teaches Mentra something, and the
            adults in a child&rsquo;s life decide what to do with it.
          </p>
        </div>
      </AnimateOnScroll>

      {/* The pipeline, as one strip */}
      <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-16">
        {steps.map((step, i) => (
          <AnimateOnScroll key={step.title} delay={i * 80}>
            <li className="relative h-full bg-white rounded-2xl border border-gray-100 p-5">
              <img
                src={step.image}
                alt=""
                aria-hidden="true"
                width="56"
                height="56"
                loading="lazy"
                className="w-14 h-14 object-contain mb-3"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mentra-blue mb-1">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </li>
          </AnimateOnScroll>
        ))}
      </ol>

      {/* The proof: one real reply, traced to the teacher's report (2026-10-14 signal-landing frame) */}
      <AnimateOnScroll>
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-balance">One reply, traced to the teacher</h3>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mb-6">
            A student answered Sprig in their own words: &ldquo;it&rsquo;s the energy source&hellip; it powers the whole thing
            so the plant can make food.&rdquo; The reply was scored as an independent attempt, stored, and minutes later it was
            the newest evidence behind that student&rsquo;s row in the teacher&rsquo;s Independence Report. One good reply
            doesn&rsquo;t flip the read: the report weighs all recent work, and says &ldquo;not enough data yet&rdquo; where it
            can&rsquo;t tell.
          </p>
          <ProductScreen screen={screens.teacherSignalLanding} />
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default HowItWorksSection;
