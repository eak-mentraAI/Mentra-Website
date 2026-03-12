import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import useSprigExpression from '@/hooks/useSprigExpression';

const HeroSection = () => {
  const { src: sprigSrc } = useSprigExpression();

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-24 sm:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content — text dominant */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight text-balance"
              >
                AI That Teaches Students to{' '}
                <span className="bg-gradient-to-r from-mentra-blue to-growth-green bg-clip-text text-transparent">
                  Think Without It
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Support that adapts in real time and fades as students grow. Independence, not dependency.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-mentra-blue hover:bg-mentra-blue/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 shadow-lg hover:shadow-xl group focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2"
                aria-label="See pricing plans"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Right Content — Sprig */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={sprigSrc}
              alt="Sprig, your AI learning companion"
              width="400"
              height="400"
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 drop-shadow-2xl transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
