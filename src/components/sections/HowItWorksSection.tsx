import React from 'react';
import { BookOpen, Sparkles, FileText, Users, BarChart3 } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ScrollTimeline from '@/components/sections/ScrollTimeline';
import PulledQuote from '@/components/ui/PulledQuote';

const flywheel = [
  {
    number: 1,
    icon: BookOpen,
    image: "/images/sprig/flywheel-01-reflect.png",
    title: "Students Work, Mentra Captures",
    color: "mentra-blue",
    description: "Every attempt, revision, and reflection becomes signal — the texture of how a student thinks, not just what they answered.",
  },
  {
    number: 2,
    icon: FileText,
    image: "/images/sprig/flywheel-02-patterns.png",
    title: "The Engine Decides",
    color: "mentra-blue",
    description: "Deterministic rules — not a guessing model — judge what's mastered, what's fragile, and who needs a teacher. Provable, auditable, the same every time.",
  },
  {
    number: 3,
    icon: Sparkles,
    image: "/images/sprig/flywheel-03-act.png",
    title: "AI Explains, Humans Act",
    color: "mentra-blue",
    description: "AI translates each decision into plain language. The teacher, parent, or student decides what to do — the machine never acts on a child unsupervised.",
  },
  {
    number: 4,
    icon: Users,
    image: "/images/sprig/flywheel-04-adapts.png",
    title: "Scaffolding Adapts",
    color: "mentra-blue",
    description: "Support increases when students struggle and pulls back as they grow. The goal is always less help next time.",
  },
  {
    number: 5,
    icon: BarChart3,
    image: "/images/sprig/flywheel-05-independence.png",
    title: "Independence Grows",
    color: "mentra-blue",
    description: "Each cycle captures richer signal, sharpens the map, and produces better insight — capability the student owns, not engagement with a tool they depend on.",
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
              The flywheel of independence
            </h3>
          </AnimateOnScroll>
          <ScrollTimeline steps={flywheel} />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
