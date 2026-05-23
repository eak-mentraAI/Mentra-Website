import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { useScheduleCall } from '@/contexts/ScheduleCallContext';
import HeroHelperHint from '@/components/HeroHelperHint';

const HeroSection = () => {
  const { open: openScheduleCall } = useScheduleCall();

  const scrollToDemo = () => {
    document.getElementById('see-it')?.scrollIntoView({ behavior: 'smooth' });
  };

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

            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="bg-mentra-blue hover:bg-mentra-blue/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 shadow-lg hover:shadow-xl group focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2"
                  aria-label="Book a walkthrough with the Mentra team"
                  onClick={openScheduleCall}
                >
                  Book a walkthrough
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 group focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2"
                  aria-label="Watch the 90-second product demo"
                  onClick={scrollToDemo}
                >
                  <PlayCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                  See it in 90 seconds
                </Button>
              </div>
              <HeroHelperHint />
            </div>
          </div>

          {/* Right Content — Sprig */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/sprig/happy-sprig.png"
              alt="Sprig, your AI learning companion"
              width="400"
              height="400"
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 drop-shadow-2xl animate-breathe motion-reduce:animate-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
