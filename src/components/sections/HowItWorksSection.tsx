import React from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

// Every step here must trace to app code (signal extractors, learner-intelligence-service, CoachingPolicy).
const steps = [
  {
    image: '/images/sprig/flywheel-01-reflect-112.webp',
    title: 'A reply becomes signals',
    description: 'Did they try it unaided? How deep did the reasoning go? Which hints did they need, and how did their confidence move?',
  },
  {
    image: '/images/sprig/flywheel-02-patterns-112.webp',
    title: 'Signals build a learner graph',
    description: "Each signal lands in that student's learner graph, with its full history.",
  },
  {
    image: '/images/sprig/flywheel-03-act-112.webp',
    title: 'Rules decide what adults see',
    description: 'Fixed rules, not a chatbot, turn the graph into the reads teachers and parents see.',
  },
  {
    image: '/images/sprig/flywheel-04-adapts-112.webp',
    title: 'People act',
    description: 'Teachers approve, change or dismiss each recommendation. Families get one thing to try at home.',
  },
  {
    image: '/images/sprig/flywheel-05-independence-112.webp',
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
            What you just watched happens in every conversation. Each reply teaches Mentra something, the help fades as the
            student shows a skill, and the adults in a child&rsquo;s life decide what to do with it.
          </p>
        </div>
      </AnimateOnScroll>

      {/* The pipeline, as one strip */}
      <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
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

    </div>
  </section>
);

export default HowItWorksSection;
