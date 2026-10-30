import React, { useState } from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { cn } from '@/lib/utils';

// The four AI-help levels are the real assignment settings (AdvancedSettingsCard.tsx in the app repo: No AI Help,
// Hints Only, Guided Support, Full AI Assistance). "The report records" follows independent_attempt_emitter.py: an
// attempt only counts as unaided when no help was active. Only the Hints only reply is a real Sprig line (Jordan's
// conversation, the same transcript as ConversationStory); the other replies are illustrative and labelled so.
// Even at full assistance Sprig works a similar case rather than giving the answer ("Never solve theirs").
type Level = {
  name: string;
  sprig: string;
  sprigAlt: string;
  reply?: string;
  off?: boolean;
  records: 'On their own' | 'With help';
  real: boolean;
};

const levels: Level[] = [
  {
    name: 'No AI help',
    sprig: '/images/sprig/sprig-resting-600.webp',
    sprigAlt: 'Sprig asleep on a cushion',
    off: true,
    records: 'On their own',
    real: false,
  },
  {
    name: 'Hints only',
    sprig: '/images/sprig/sprig-wondering-600.webp',
    sprigAlt: 'Sprig thinking, with a question mark',
    reply:
      'Warmth is a reasonable first guess — sunlight does give off heat — but plants can grow in pretty cold places as long as they get light, so warmth isn’t the main thing. Here’s a nudge: what do you think a plant produces that keeps it alive?',
    records: 'With help',
    real: true,
  },
  {
    name: 'Guided support',
    sprig: '/images/sprig/sprig-idea-600.webp',
    sprigAlt: 'Sprig pointing up at a light bulb',
    reply:
      'Let’s build it in two steps. First, what does a plant make for itself to stay alive? Then we’ll connect that to the sunlight.',
    records: 'With help',
    real: false,
  },
  {
    name: 'Full assistance',
    sprig: '/images/sprig/sprig-glasses-600.webp',
    sprigAlt: 'Sprig in glasses with a notebook',
    reply:
      'Here’s a similar case: a solar panel turns sunlight into energy a house can use. Now try your plant question. What might sunlight be giving the plant?',
    records: 'With help',
    real: false,
  },
];

const HelpLevelDemo = () => {
  const [index, setIndex] = useState(1);
  const level = levels[index];

  return (
    <section id="help-levels" className="py-24 bg-white scroll-mt-20" aria-labelledby="help-levels-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <AnimateOnScroll>
            <div className="max-w-3xl space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mentra-blue">Try it</p>
              <h2 id="help-levels-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
                You decide how much help Sprig gives
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Teachers set the AI help for each assignment. Slide it and watch how Sprig answers Jordan’s guess, and
                what the teacher’s report records.
              </p>
            </div>
          </AnimateOnScroll>

          {/* The one interactive moment on the page gets its own panel; slider and chat share one width */}
          <div className="grid gap-8 rounded-[2rem] border border-gray-200 bg-gray-50 p-5 sm:p-8 lg:grid-cols-[minmax(0,36rem)_minmax(0,1fr)] lg:items-center lg:gap-12 lg:p-12">
            <div className="min-w-0 space-y-6">
              <div>
                <label htmlFor="help-level" className="sr-only">AI help level</label>
                {/* Inset by half a column so each stop sits under its label */}
                <div className="px-[12.5%]">
                <input
                  id="help-level"
                  type="range"
                  min={0}
                  max={levels.length - 1}
                  step={1}
                  value={index}
                  aria-valuetext={level.name}
                  onChange={(e) => setIndex(Number(e.target.value))}
                  className="w-full accent-mentra-blue cursor-pointer"
                />
                </div>
                <div className="mt-2 grid grid-cols-4 text-center">
                  {levels.map((l, i) => (
                    <button
                      key={l.name}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-pressed={i === index}
                      className={cn(
                        'text-xs sm:text-sm font-semibold py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-mentra-blue',
                        i === index ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600',
                      )}
                    >
                      {l.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3" aria-live="polite">
                <p className="rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-base leading-relaxed text-gray-900">
                  <span className="font-semibold">Jordan:</span> idk like maybe it keeps them warm or something?
                </p>
                {level.off ? (
                  <p className="rounded-2xl border border-dashed border-gray-300 bg-white/60 px-5 py-3.5 text-base leading-relaxed text-gray-500">
                    Sprig is off for this assignment. Jordan works it out on his own.
                  </p>
                ) : (
                  <p className="rounded-2xl bg-mentra-blue/[0.08] px-5 py-3.5 text-base leading-relaxed text-gray-900">
                    <span className="font-semibold">Sprig:</span> {level.reply}
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-600">
                  <span>The report records:</span>
                  <span
                    className={cn(
                      'rounded-full px-3 py-1 text-xs font-semibold',
                      level.records === 'On their own' ? 'bg-emerald-50 text-emerald-800' : 'bg-blue-50 text-blue-800',
                    )}
                  >
                    {level.records}
                  </span>
                  <span className="sm:ml-3">{level.off ? 'Example:' : 'Sprig’s reply:'}</span>
                  <span
                    className={cn(
                      'rounded-full px-3 py-1 text-xs font-semibold',
                      level.real ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-800',
                    )}
                  >
                    {level.real ? 'Real Sprig line' : 'Illustrative'}
                  </span>
                </div>
              </div>
            </div>

            <div className="order-first flex justify-center lg:order-none">
              <img
                key={level.sprig}
                src={level.sprig}
                alt={level.sprigAlt}
                width={300}
                height={300}
                loading="lazy"
                decoding="async"
                className="h-36 w-36 object-contain motion-safe:animate-fade-in-up sm:h-48 sm:w-48 lg:h-64 lg:w-64"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpLevelDemo;
