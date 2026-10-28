import React from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

// Every step here must trace to app code (signal extractors, learner-intelligence-service, CoachingPolicy).
const steps = [
  {
    image: '/images/sprig/flywheel-01-reflect-192.webp',
    title: 'A reply becomes signals',
    description: 'Did they try it unaided? How deep did the reasoning go? Which hints did they need, and how did their confidence move?',
  },
  {
    image: '/images/sprig/flywheel-02-patterns-192.webp',
    title: 'Signals build a learner graph',
    description: "Each signal lands in that student's learner graph, with its full history.",
  },
  {
    image: '/images/sprig/flywheel-03-act-192.webp',
    title: 'Rules decide what adults see',
    description: 'Fixed rules, not a chatbot, turn the graph into the reads teachers and parents see.',
  },
  {
    image: '/images/sprig/flywheel-04-adapts-192.webp',
    title: 'People act',
    description: 'Teachers approve, change or dismiss each recommendation. Families get one thing to try at home.',
  },
  {
    image: '/images/sprig/flywheel-05-independence-192.webp',
    title: 'Sprig steps back',
    description: 'Once a student shows a skill, Sprig asks a harder open question instead of offering another hint.',
  },
];

// Same heading-left, rows-right layout as the pilot and trust sections.
const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 bg-gray-50 scroll-mt-20" aria-labelledby="how-it-works-heading">
    <div className="container mx-auto px-4">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="space-y-5 lg:sticky lg:top-28">
            <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
              From one reply to the long-term picture
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              What you just read is designed to happen in every conversation. Each reply teaches Mentra something, the
              help fades as the student shows a skill, and the adults in a child&rsquo;s life decide what to do with it.
            </p>
            {/* Colour comes from Sprig's own art rather than new UI colours */}
            <img
              src="/images/scenes/scaffolding-fades-1200.webp"
              alt="Three panels: a student sits stuck beside a ladder with Sprig; then walks with Sprig as the ladder fades; then walks on alone while Sprig waves."
              width={1200}
              height={600}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </AnimateOnScroll>

        <ol className="divide-y divide-gray-200 border-y border-gray-200">
          {steps.map((step, i) => (
            <li key={step.title}>
              <AnimateOnScroll delay={i * 60}>
                <div className="grid grid-cols-[5rem_minmax(0,1fr)] items-center gap-5 py-5">
                  <img src={step.image} alt="" aria-hidden="true" width="80" height="80" loading="lazy" className="w-20 h-20 object-contain" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-base text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
