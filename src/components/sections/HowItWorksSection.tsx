import React from 'react';
import { BookOpen, Sparkles, FileText, Users, BarChart3 } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ScrollTimeline from '@/components/sections/ScrollTimeline';

const flywheel = [
  {
    number: 1,
    icon: BookOpen,
    title: "Reflective Engagement",
    color: "mentra-blue",
    description: "Students reflect on learning and emotions through guided prompts that build self-awareness.",
  },
  {
    number: 2,
    icon: FileText,
    title: "AI Summarization",
    color: "curiosity-coral",
    description: "AI distills input into growth insights — surfacing what's working and where support is needed.",
  },
  {
    number: 3,
    icon: Sparkles,
    title: "Insight Delivery",
    color: "growth-green",
    description: "Students, teachers, and parents each get clear, actionable updates — not data dumps.",
  },
  {
    number: 4,
    icon: Users,
    title: "Responsive Support",
    color: "grit-gold",
    description: "Scaffolding adapts in real time. Interventions are suggested before students fall behind.",
  },
  {
    number: 5,
    icon: BarChart3,
    title: "Student Growth",
    color: "wisdom-purple",
    description: "Each loop strengthens understanding, metacognition, and intrinsic motivation.",
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
              The Mentra Flywheel of <span className="bg-gradient-to-r from-mentra-blue to-wisdom-purple bg-clip-text text-transparent">Growth</span>
            </h3>
          </AnimateOnScroll>
          <ScrollTimeline steps={flywheel} />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
