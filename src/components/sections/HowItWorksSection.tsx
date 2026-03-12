import React from 'react';
import { BookOpen, Sparkles, FileText, Users, BarChart3, Shield, Eye, Zap } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ScrollTimeline from '@/components/sections/ScrollTimeline';
import { Card } from '@/components/ui/card';

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
    title: "Students Reflect",
    color: "mentra-blue",
    description: "Guided prompts build self-awareness — students learn to recognize what they know and where they're stuck.",
  },
  {
    number: 2,
    icon: FileText,
    title: "AI Surfaces Patterns",
    color: "mentra-blue",
    description: "The system identifies what's working and what needs support — then delivers insights to the humans who decide what to do.",
  },
  {
    number: 3,
    icon: Sparkles,
    title: "Humans Act",
    color: "mentra-blue",
    description: "Teachers intervene with full context. Parents see signal, not noise. Students get support matched to the moment.",
  },
  {
    number: 4,
    icon: Users,
    title: "Scaffolding Adapts",
    color: "mentra-blue",
    description: "Support increases when students struggle and pulls back as they grow. The goal is always less help next time.",
  },
  {
    number: 5,
    icon: BarChart3,
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
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
              How Mentra works
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Most ed-tech adds dependency. Mentra builds capability — scaffolding that fades, support that steps back, and humans who stay in control.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
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

        {/* Fading visual + Chat demo side by side */}
        <AnimateOnScroll>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24">
            {/* Fading bars */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
                Support that fades as students grow
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Month 1', width: '85%', opacity: 1 },
                  { label: 'Month 2', width: '62%', opacity: 0.8 },
                  { label: 'Month 3', width: '40%', opacity: 0.6 },
                  { label: 'Month 4', width: '22%', opacity: 0.4 },
                  { label: 'Month 5', width: '10%', opacity: 0.25 },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-4">
                    <span className="text-sm text-gray-400 w-20 text-right font-medium">{row.label}</span>
                    <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-mentra-blue transition-all duration-700"
                        style={{ width: row.width, opacity: row.opacity }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-400 mt-6">
                AI scaffolding decreases as student capability increases
              </p>
            </div>

            {/* Conversation demo */}
            <Card className="p-8 bg-white rounded-2xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
                What this looks like in practice
              </h3>
              <div className="space-y-5">
                {/* Sprig asks */}
                <div className="flex items-start gap-3">
                  <img
                    src="/images/sprig/nerd.png"
                    alt="Sprig"
                    width="40"
                    height="40"
                    className="w-10 h-10 object-contain mt-1"
                    loading="lazy"
                  />
                  <div className="bg-mentra-blue/5 border border-mentra-blue/10 rounded-2xl rounded-tl-md p-4 flex-1">
                    <p className="text-gray-800 text-sm leading-relaxed">
                      I notice you're working on fractions. What's one thing that's clicking, and what feels tricky?
                    </p>
                  </div>
                </div>

                {/* Student responds */}
                <div className="ml-12">
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tr-md p-4">
                    <p className="text-gray-600 text-sm italic leading-relaxed">
                      I get adding them when the bottom numbers match, but not when they're different...
                    </p>
                  </div>
                </div>

                {/* Sprig guides (not answers) */}
                <div className="flex items-start gap-3">
                  <img
                    src="/images/sprig/explorer.png"
                    alt="Sprig"
                    width="40"
                    height="40"
                    className="w-10 h-10 object-contain mt-1"
                    loading="lazy"
                  />
                  <div className="bg-mentra-blue/5 border border-mentra-blue/10 rounded-2xl rounded-tl-md p-4 flex-1">
                    <p className="text-gray-800 text-sm leading-relaxed">
                      Great — you know exactly where you're stuck. Why do you think the "bottom numbers" need to match?
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </AnimateOnScroll>

        {/* Video */}
        <AnimateOnScroll>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center text-balance">
            See it in action
          </h3>
        </AnimateOnScroll>
        <div className="aspect-video w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-gray-200 mb-24">
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
