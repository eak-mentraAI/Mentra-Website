import React from 'react';
import { BookOpen, Sparkles, FileText, Users, BarChart3 } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ScrollTimeline from '@/components/sections/ScrollTimeline';

const flywheel = [
  {
    number: 1,
    icon: BookOpen,
    title: "Students Reflect",
    color: "mentra-blue",
    description: "Guided prompts build self-awareness — students learn to recognize what they know and where they're stuck.",
  },
  {
    number: 2,
    icon: FileText,
    title: "AI Surfaces Patterns",
    color: "curiosity-coral",
    description: "The system identifies what's working and what needs support — then delivers insights to the humans who decide what to do.",
  },
  {
    number: 3,
    icon: Sparkles,
    title: "Humans Act",
    color: "growth-green",
    description: "Teachers intervene with full context. Parents see signal, not noise. Students get support matched to the moment.",
  },
  {
    number: 4,
    icon: Users,
    title: "Scaffolding Adapts",
    color: "grit-gold",
    description: "Support increases when students struggle and pulls back as they grow. The goal is always less help next time.",
  },
  {
    number: 5,
    icon: BarChart3,
    title: "Independence Grows",
    color: "wisdom-purple",
    description: "Each cycle builds capability the student owns — not engagement with a tool they depend on.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center text-balance">
          See Mentra in <span className="bg-gradient-to-r from-mentra-blue to-growth-green bg-clip-text text-transparent">Action</span>
        </h2>
        <div className="aspect-video w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-gray-200 mb-16">
          <iframe
            src="https://www.youtube.com/embed/CWTHgahgStQ"
            title="Mentra Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="w-full h-full rounded-2xl"
          ></iframe>
        </div>

        {/* The Mentra Flywheel of Growth */}
        <div className="w-full container mx-auto px-4">
          <AnimateOnScroll>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center text-balance">
              The Mentra Flywheel of <span className="bg-gradient-to-r from-mentra-blue to-growth-green bg-clip-text text-transparent">Independence</span>
            </h3>
          </AnimateOnScroll>
          <ScrollTimeline steps={flywheel} />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
