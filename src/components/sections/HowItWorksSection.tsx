import React from 'react';
import { BookOpen, Sparkles, FileText, Users, BarChart3 } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ScrollTimeline from '@/components/sections/ScrollTimeline';
import PulledQuote from '@/components/ui/PulledQuote';
import ProductScreen from '@/components/ui/ProductScreen';
import { screens, SHOWCASE_DISCLOSURE } from '@/data/productScreens';

const flywheel = [
  {
    number: 1,
    icon: BookOpen,
    image: "/images/sprig/flywheel-01-reflect.png",
    title: "A Reply Becomes Signals",
    color: "mentra-blue",
    description: "In tutoring, investigations, coding, the Signal & Noise game, open exploration and journaling, a student's work is recorded as typed signals: whether they tried it unaided, how deep their reasoning went, which hints they needed, how their confidence moved.",
  },
  {
    number: 2,
    icon: FileText,
    image: "/images/sprig/flywheel-02-patterns.png",
    title: "Signals Build a Learner Graph",
    color: "mentra-blue",
    description: "Each signal lands in that student's learner graph with its full history. Fixed rules, not a chatbot, read the graph to decide what adults see, and below an evidence floor the answer is \"not enough evidence yet.\"",
  },
  {
    number: 3,
    icon: Sparkles,
    image: "/images/sprig/flywheel-03-act.png",
    title: "AI Explains, Humans Act",
    color: "mentra-blue",
    description: "The read is written up in plain language for each adult. The teacher, parent or student decides what to do, and recommendations wait for a teacher's approval.",
  },
  {
    number: 4,
    icon: Users,
    image: "/images/sprig/flywheel-04-adapts.png",
    title: "Scaffolding Adapts",
    color: "mentra-blue",
    description: "Sprig checks the student's record before it replies. Once they've shown a skill, it pulls back: a harder open question instead of another hint. The goal is less help next time.",
  },
  {
    number: 5,
    icon: BarChart3,
    image: "/images/sprig/flywheel-05-independence.png",
    title: "Independence Grows",
    color: "mentra-blue",
    description: "Over weeks, Mentra looks for one trend: help fading while independent work holds up. That trend, not time on the app, is what it reports to teachers and parents, and until there's enough evidence it says so.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Beliefs row */}
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
              How Mentra works
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <PulledQuote className="mb-12">
            Most ed-tech adds dependency. Mentra builds capability — scaffolding that fades, support that steps back, and humans who stay in control.
          </PulledQuote>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="max-w-5xl mx-auto mb-20">
            <div className="relative aspect-[3/1] w-full">
              <img
                src="/images/scenes/scaffolding-fades.png"
                alt="A student grows more independent as Sprig steps back. The visible scaffolding — ladders, guide rails, helping hands — fades from left to right."
                width="1774"
                height="887"
                className="w-full h-full object-cover object-[center_60%]"
                style={{
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)',
                  WebkitMaskComposite: 'source-in',
                  maskImage:
                    'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)',
                  maskComposite: 'intersect',
                }}
                loading="lazy"
              />
            </div>
          </div>
        </AnimateOnScroll>



        {/* Video */}
        <AnimateOnScroll>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center text-balance">
            Why we built Mentra
          </h3>
        </AnimateOnScroll>
        <div id="see-it" className="aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-gray-200 mb-16 scroll-mt-24">
          <iframe
            src="https://www.youtube.com/embed/Q84vfTtvGMA"
            title="Why we built Mentra"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="w-full h-full rounded-2xl"
          ></iframe>
        </div>

        {/* Flywheel */}
        <div className="w-full">
          <AnimateOnScroll>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center text-balance">
              From one reply to the long-term picture
            </h3>
          </AnimateOnScroll>
          <ScrollTimeline steps={flywheel} />

          {/* One real reply, traced from Sprig to the teacher's report (2026-10-14 signal-landing frame) */}
          <AnimateOnScroll>
            <div className="max-w-5xl mx-auto mt-16">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-balance">One reply, traced to the teacher</h4>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mb-6">
                A student answered Sprig in their own words: &ldquo;it&rsquo;s the energy source&hellip; it powers the whole thing
                so the plant can make food.&rdquo; The reply was scored as an independent attempt, stored, and minutes later it was
                the newest evidence behind that student&rsquo;s row in the teacher&rsquo;s Independence Report. One good reply
                doesn&rsquo;t flip the read: the report weighs all recent work, and says &ldquo;not enough data yet&rdquo; where it
                can&rsquo;t tell.
              </p>
              <ProductScreen screen={screens.teacherSignalLanding} />
              <p className="text-xs text-gray-400 mt-4">{SHOWCASE_DISCLOSURE}</p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
