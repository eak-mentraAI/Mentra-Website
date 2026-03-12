import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
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

          {/* Right Content — Conversation demo (the product) */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-8 bg-white shadow-2xl rounded-3xl border border-gray-100 max-w-md w-full">
              <div className="space-y-5">
                {/* Sprig asks */}
                <div className="flex items-start gap-3">
                  <img
                    src="/images/sprig/nerd.png"
                    alt="Sprig"
                    width="40"
                    height="40"
                    className="w-10 h-10 object-contain mt-1"
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
                  />
                  <div className="bg-growth-green/5 border border-growth-green/10 rounded-2xl rounded-tl-md p-4 flex-1">
                    <p className="text-gray-800 text-sm leading-relaxed">
                      Great — you know exactly where you're stuck. Why do you think the "bottom numbers" need to match?
                    </p>
                  </div>
                </div>

                {/* Fading indicator */}
                <div className="pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                        <span>AI support this month</span>
                        <span className="text-growth-green font-medium">Decreasing</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-mentra-blue to-growth-green"
                          style={{ width: '35%' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
