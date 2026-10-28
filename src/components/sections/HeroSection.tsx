import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CalendarDays, PlayCircle, GraduationCap, Heart, School } from 'lucide-react';
import { useScheduleCall } from '@/contexts/ScheduleCallContext';
import HeroHelperHint from '@/components/HeroHelperHint';
import SprigOrb from '@/components/ui/SprigOrb';

// Audience pages. Tint classes are written out in full so Tailwind keeps them.
const audienceLinks = [
  { to: '/teachers', label: 'Teachers', icon: GraduationCap, tint: 'bg-mentra-blue/10 text-mentra-blue' },
  { to: '/parents', label: 'Families', icon: Heart, tint: 'bg-curiosity-coral/10 text-curiosity-coral' },
  { to: '/schools', label: 'Schools', icon: School, tint: 'bg-wisdom-purple/10 text-wisdom-purple' },
];

const HeroSection = () => {
  const { open: openScheduleCall } = useScheduleCall();

  const scrollToStory = () => {
    document.getElementById('the-story')?.scrollIntoView({ behavior: 'smooth' });
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
                Mentra is built to coach students through their own reasoning rather than hand over answers, shows teachers how each student thinks, and gives families one thing to try at home.
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
                  <CalendarDays className="mr-2 h-5 w-5" aria-hidden="true" />
                  Book a walkthrough
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 group focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2"
                  aria-label="Watch Sprig in action: jump to Jordan's conversation"
                  onClick={scrollToStory}
                >
                  <PlayCircle className="mr-2 h-5 w-5 text-mentra-blue group-hover:scale-110 transition-transform" aria-hidden="true" />
                  Watch Sprig in action
                </Button>
              </div>
              <nav aria-label="Mentra for you" className="flex flex-col items-center lg:items-start gap-2.5 pt-2">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Built for</span>
                <ul className="flex flex-nowrap justify-center lg:justify-start gap-1 sm:gap-2">
                  {audienceLinks.map(({ to, label, icon: Icon, tint }) => (
                    <li key={to}>
                      <Link
                        to={to}
                        className="inline-flex items-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-full border border-gray-200 bg-white pl-1 pr-2.5 sm:pl-1.5 sm:pr-4 py-1 sm:py-1.5 text-[13px] sm:text-sm font-semibold text-gray-700 shadow-sm hover:border-mentra-blue/40 hover:text-gray-900 hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-mentra-blue focus-visible:ring-offset-2"
                      >
                        <span className={`flex h-5 w-5 sm:h-7 sm:w-7 items-center justify-center rounded-full ${tint}`}>
                          <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                        </span>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <HeroHelperHint />
            </div>
          </div>

          {/* Right Content — Sprig */}
          <div className="flex justify-center lg:justify-end">
            <SprigOrb size="lg">
              <img
                src="/images/sprig/sprig-trio-896.webp"
                srcSet="/images/sprig/sprig-trio-480.webp 480w, /images/sprig/sprig-trio-896.webp 896w"
                sizes="(min-width: 1280px) 448px, (min-width: 1024px) 384px, (min-width: 640px) 288px, 224px"
                alt="Sprig with peers — your AI learning companions"
                width="400"
                height="400"
                className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] drop-shadow-2xl animate-breathe motion-reduce:animate-none"
              />
            </SprigOrb>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
