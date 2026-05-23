import React from 'react';
import { BookOpen, Sparkles, FileText, Users, BarChart3, Shield, Eye, Zap } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ScrollTimeline from '@/components/sections/ScrollTimeline';
import PulledQuote from '@/components/ui/PulledQuote';
import FadingDemo from '@/components/sections/FadingDemo';

const beliefs = [
  {
    icon: Zap,
    title: 'AI That Fades',
    description: 'Scaffolding reduces as mastery increases. The metric is how much less a student needs the AI compared to last month.',
  },
  {
    icon: Eye,
    title: 'Humans in Control',
    description: 'Teachers override any AI decision. Parents gate all data. Districts kill-switch instantly. No black boxes.',
  },
  {
    icon: Shield,
    title: 'Trust by Architecture',
    description: 'Fail-closed consent, append-only audit trails, 57 automated policy gates. Every claim is provable.',
  },
];

const flywheel = [
  {
    number: 1,
    icon: BookOpen,
    image: "/images/sprig/flywheel-01-reflect.png",
    title: "Students Reflect",
    color: "mentra-blue",
    description: "Guided prompts build self-awareness — students learn to recognize what they know and where they're stuck.",
  },
  {
    number: 2,
    icon: FileText,
    image: "/images/sprig/flywheel-02-patterns.png",
    title: "AI Surfaces Patterns",
    color: "mentra-blue",
    description: "The system identifies what's working and what needs support — then delivers insights to the humans who decide what to do.",
  },
  {
    number: 3,
    icon: Sparkles,
    image: "/images/sprig/flywheel-03-act.png",
    title: "Humans Act",
    color: "mentra-blue",
    description: "Teachers intervene with full context. Parents see signal, not noise. Students get support matched to the moment.",
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
    description: "Each cycle builds capability the student owns — not engagement with a tool they depend on.",
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
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative aspect-[3/1] w-full rounded-2xl overflow-hidden">
              <img
                src="/images/scenes/scaffolding-fades.png"
                alt="A student grows more independent as Sprig steps back. The visible scaffolding — ladders, guide rails, helping hands — fades from left to right."
                width="1774"
                height="887"
                className="w-full h-full object-cover object-[center_55%]"
                loading="lazy"
              />
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {beliefs.map((b, i) => (
            <AnimateOnScroll key={b.title} delay={i * 100}>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-mentra-blue/10 rounded-xl flex items-center justify-center mx-auto">
                  <b.icon className="w-6 h-6 text-mentra-blue" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Interactive fading demo */}
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto mb-20">
            <FadingDemo />
          </div>
        </AnimateOnScroll>

        {/* Video */}
        <AnimateOnScroll>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center text-balance">
            See it in action
          </h3>
        </AnimateOnScroll>
        <div id="see-it" className="aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-gray-200 mb-16 scroll-mt-24">
          <iframe
            src="https://www.youtube.com/embed/Q84vfTtvGMA"
            title="Mentra Demo"
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
