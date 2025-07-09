
import React from 'react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-journal-sand/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                What is{' '}
                <span className="text-mentra-blue">Mentra</span>?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Mentra is an AI-powered educational platform that transforms learning through personalized journaling and emotional intelligence. With Sprig as your guide, discover a new way to grow, reflect, and thrive.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-mentra-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-mentra-blue rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Learning Journey</h3>
                  <p className="text-gray-600">Every student is unique. Sprig adapts to your learning style, pace, and emotional needs.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-growth-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-growth-green rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Emotional Intelligence</h3>
                  <p className="text-gray-600">Learn to understand and express your emotions through guided reflection and journaling.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-grit-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-grit-gold rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Safe & Trusted</h3>
                  <p className="text-gray-600">A secure environment where students can explore their thoughts and feelings with confidence.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Sprig Interaction Demo */}
          <div className="relative">
            <Card className="p-8 bg-white shadow-2xl rounded-3xl border-0">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <img 
                    src="/lovable-uploads/13ee0557-7701-4480-8818-ad3335de97fd.png" 
                    alt="Sprig mascot" 
                    className="w-16 h-16 animate-bounce-gentle"
                  />
                  <div className="bg-mentra-blue/10 rounded-2xl p-4 flex-1">
                    <p className="text-mentra-blue font-medium">
                      "How are you feeling about today's lesson? Let's reflect together!"
                    </p>
                  </div>
                </div>

                <div className="bg-journal-sand rounded-2xl p-4 ml-12">
                  <p className="text-gray-700 italic">
                    "I'm excited about learning fractions, but I'm also a bit nervous about the quiz tomorrow..."
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <img 
                    src="/lovable-uploads/cedb8c52-6559-4531-87f6-39ad0937d397.png" 
                    alt="Sprig with star" 
                    className="w-16 h-16 animate-float"
                  />
                  <div className="bg-growth-green/10 rounded-2xl p-4 flex-1">
                    <p className="text-growth-green font-medium">
                      "That's perfectly normal! Let's break down what makes you excited and create a plan for the quiz."
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-curiosity-coral/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-grit-gold/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
