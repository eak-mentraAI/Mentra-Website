import React from 'react';
import { Card } from '@/components/ui/card';
import OptimizedImage from './OptimizedImage';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-journal-sand/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Enhanced copy */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Mentra was founded to help every child <span className="text-mentra-blue">thrive</span> in an AI-powered world.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We believe in nurturing critical thinking, emotional intelligence, and lifelong learning—so students don't just keep up, they grow.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-mentra-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-mentra-blue rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Pedagogically Grounded</h3>
                  <p className="text-gray-600">From Socratic questioning to metacognition—every interaction is designed by educators who understand how real learning happens.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-growth-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-growth-green rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Human Skills First</h3>
                  <p className="text-gray-600">Strengthen critical thinking, emotional intelligence, and ethical reasoning—the skills that no AI can replace.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-grit-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-grit-gold rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Safe & Values-Driven</h3>
                  <p className="text-gray-600">Privacy-first design with built-in safety measures. Your data stays secure, your values stay central.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Sprig Interaction Demo */}
          <div className="relative">
            <Card className="p-8 bg-white shadow-2xl rounded-3xl border-0">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <OptimizedImage
                    src="/images/sprig/13ee0557-7701-4480-8818-ad3335de97fd.png"
                    alt="Sprig mascot"
                    className="w-16 h-16 object-contain animate-bounce-gentle"
                    sizes="4rem"
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
                  <OptimizedImage
                    src="/images/testimonials/cedb8c52-6559-4531-87f6-39ad0937d397.png"
                    alt="Sprig with star"
                    className="w-16 h-16 object-contain animate-float"
                    sizes="4rem"
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
