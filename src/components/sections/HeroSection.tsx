import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import useSprigExpression from '@/hooks/useSprigExpression';

const HeroSection = () => {
  const { src: sprigSrc } = useSprigExpression();

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Dot grid texture */}
      <div className="absolute inset-0 bg-dot-grid bg-dot-grid opacity-100 pointer-events-none" aria-hidden="true" />

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 left-10 w-32 h-32 bg-curiosity-coral/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-grit-gold/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-growth-green/10 rounded-full blur-lg"></div>
      </div>

      {/* Radial glow behind Sprig area */}
      <div className="hidden lg:block absolute right-[10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-mentra-blue/15 via-wisdom-purple/8 to-transparent rounded-full blur-3xl pointer-events-none z-0" aria-hidden="true" />

      <div className="mx-auto max-w-screen-xl px-4 py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-between">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-snug text-balance"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.06)' }}
              >
                AI That Teaches Students to <span className="bg-gradient-to-r from-mentra-blue to-growth-green bg-clip-text text-transparent">Think Without It</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Mentra builds independent thinkers — not AI-dependent ones. Support that adapts in real time and fades as students grow.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start mb-2">
              <Button
                size="lg"
                className="bg-mentra-blue hover:bg-mentra-blue/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:animate-glow group focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2"
                aria-label="Begin your learning journey with Mentra"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-mentra-blue text-mentra-blue hover:bg-mentra-blue hover:text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 group focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2"
                aria-label="Watch a demonstration of how Mentra works"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 h-5 w-5" aria-hidden="true" />
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right Content - Sprig Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Sprig Character */}
              <img
                src={sprigSrc}
                alt="Sprig, your AI learning companion - a friendly animated character"
                width="400"
                height="400"
                className="w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 xl:w-96 xl:h-96 animate-bounce-gentle drop-shadow-2xl relative z-10 transition-opacity duration-500"
              />

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 animate-bounce-gentle" aria-hidden="true">
                <div className="w-6 h-6 bg-grit-gold rounded-full opacity-80"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 animate-bounce-gentle" style={{animationDelay: '1s'}} aria-hidden="true">
                <div className="w-4 h-4 bg-curiosity-coral rounded-full opacity-60"></div>
              </div>
              <div className="absolute top-1/4 -left-8 animate-bounce-gentle" style={{animationDelay: '2s'}} aria-hidden="true">
                <div className="w-3 h-3 bg-growth-green rounded-full opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 sm:bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-mentra-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-mentra-blue rounded-full mt-2 animate-bounce"></div>
          </div>
          <span className="text-xs text-gray-500 font-medium">Discover More</span>
        </div>
      </div>

      {/* Animated background shape for desktop */}
      <div className="hidden lg:block absolute right-0 top-1/4 w-[500px] h-[500px] bg-gradient-to-br from-mentra-blue/10 via-grit-gold/10 to-growth-green/10 rounded-full blur-3xl animate-pulse-slow z-0" style={{ pointerEvents: 'none' }} aria-hidden="true" />
    </section>
  );
};

export default HeroSection;
