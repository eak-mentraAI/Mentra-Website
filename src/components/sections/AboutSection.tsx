import React from 'react';
import { Card } from '@/components/ui/card';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-journal-sand/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Enhanced copy */}
          <AnimateOnScroll variant="fade-in-left">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
                The AI that's designed to make itself <span className="bg-gradient-to-r from-mentra-blue to-growth-green bg-clip-text text-transparent">less necessary</span> over time.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Most ed-tech adds dependency. Mentra builds capability — scaffolding that fades, support that steps back, and humans who stay in control at every level.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-mentra-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-mentra-blue rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI That Fades as Students Grow</h3>
                  <p className="text-gray-600">Scaffolding reduces as mastery increases. The success metric is how much less a student needs the AI compared to last month.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-growth-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-growth-green rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Teachers, Parents, and Students in Control</h3>
                  <p className="text-gray-600">Teachers override any AI decision. Parents gate all data. Districts kill-switch instantly. No black boxes, ever.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-grit-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-grit-gold rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Trust Built into the Architecture</h3>
                  <p className="text-gray-600">Fail-closed consent, append-only audit trails, and 57 automated policy gates. Every claim is provable — not promised.</p>
                </div>
              </div>
            </div>
          </div>
          </AnimateOnScroll>

          {/* Right Content - Sprig Interaction Demo */}
          <AnimateOnScroll variant="fade-in-right" delay={200}>
          <div className="relative">
            <Card className="p-8 bg-white shadow-2xl rounded-3xl border-0">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <img
                    src="/images/sprig/sprig-wave.png"
                    alt="Sprig mascot"
                    width="64"
                    height="64"
                    className="w-16 h-16 object-contain animate-bounce-gentle"
                    loading="lazy"
                  />
                  <div className="bg-mentra-blue/10 rounded-2xl p-4 flex-1">
                    <p className="text-mentra-blue font-medium">
                      "I notice you're working on fractions. What's one thing that's clicking for you, and what feels challenging?"
                    </p>
                  </div>
                </div>

                <div className="bg-journal-sand rounded-2xl p-4 ml-12">
                  <p className="text-gray-700 italic">
                    "I get how to add them when the bottom numbers are the same, but I'm confused when they're different..."
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src="/images/sprig/sprig-thinking.png"
                    alt="Sprig with star"
                    width="64"
                    height="64"
                    className="w-16 h-16 object-contain animate-float"
                    loading="lazy"
                  />
                  <div className="bg-growth-green/10 rounded-2xl p-4 flex-1">
                    <p className="text-growth-green font-medium">
                      "Great insight! You've identified exactly what you understand. Let's think about why those 'bottom numbers' matter..."
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-curiosity-coral/20 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-grit-gold/20 rounded-full"></div>
          </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
