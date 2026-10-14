import React, { useState } from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ProductScreen from '@/components/ui/ProductScreen';
import { screens, SHOWCASE_DISCLOSURE, type Screen } from '@/data/productScreens';

type Step = {
  eyebrow: string;
  title: string;
  text: string;
  screen: Screen;
};

// Real Sprig output from the 2026-10-13/14 shoots (simulated students that reply to Sprig) plus the 2026-10-12 verdict.
// Full transcripts reviewed, not just the cropped turns: marketing/carousel/<date>/transcripts in the app repo.
const steps: Step[] = [
  {
    eyebrow: 'Asking for the answer',
    title: '"Can you just tell me the answer?"',
    text: "Jordan asks Sprig for the answer. Sprig says no, asks what Jordan thinks is going on, then offers one foothold: plants make their own food. From there Jordan works out that sunlight is the energy for making glucose, and what happens to a plant without it.",
    screen: screens.studentJordan,
  },
  {
    eyebrow: 'Signal & Noise',
    title: 'Coaching on how they judged, not what they picked.',
    text: "In the Signal & Noise game, students rank sources and explain why. Sprig coaches how they judged: what they caught, the lens they drifted from, and one concrete habit for next time. On a first evaluation, it says there's no pattern to call out yet.",
    screen: screens.studentSignalNoise,
  },
  {
    eyebrow: 'Coding',
    title: 'Points at the bug, not the fix.',
    text: "A student's program prints 2 when they watered the plant three times. Sprig confirms the part that works, points at len(waterings) and asks what it's actually counting. The student works out it's counting plants, not days, and goes to fix it themselves.",
    screen: screens.studentCoding,
  },
  {
    eyebrow: 'AI literacy',
    title: 'Teaches students to prompt well.',
    text: "The challenge: write a prompt with two or three example haikus. A student asks the AI for examples instead of including any. Sprig scores it 42%, names exactly that miss, and suggests writing one haiku and putting it in the prompt.",
    screen: screens.studentPrompting,
  },
  {
    eyebrow: 'Investigations',
    title: 'Pushes on the vaguest part.',
    text: "Investigating why shade plants grow bigger, darker leaves, a student builds a chain of whys. Sprig skips the praise and asks about the fuzziest phrase, \"using its energy different\": what has to happen first?",
    screen: screens.studentWhyChain,
  },
];

const ProductStory = () => {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section id="see-it-in-action" className="py-24 bg-white scroll-mt-20" aria-labelledby="product-story-heading">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mentra-blue mb-3">
              See it in the product
            </p>
            <h2
              id="product-story-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance"
            >
              How Sprig teaches, across Mentra
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Tutoring, games, coding, AI literacy and investigations. Real screens, cropped but not edited, and what they record.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="max-w-5xl mx-auto">
          {/* Steps */}
          <div
            className="flex lg:grid lg:grid-cols-5 gap-2 overflow-x-auto [scrollbar-width:none] -mx-4 px-4 lg:mx-0 lg:px-0 pb-2 lg:pb-0 mb-6"
            role="tablist"
            aria-label="Sprig exchanges"
          >
            {steps.map((s, i) => {
              const selected = i === active;
              return (
                <button
                  key={s.eyebrow}
                  type="button"
                  role="tab"
                  id={`story-tab-${i}`}
                  aria-selected={selected}
                  aria-controls="story-panel"
                  onClick={() => setActive(i)}
                  className={`flex-shrink-0 w-60 lg:w-auto text-left rounded-2xl p-4 border transition-colors duration-200 ${
                    selected
                      ? 'bg-mentra-blue/5 border-mentra-blue/30'
                      : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <span className={`block text-xs font-semibold uppercase tracking-[0.14em] mb-1.5 ${selected ? 'text-mentra-blue' : 'text-gray-400'}`}>
                    {String(i + 1).padStart(2, '0')} · {s.eyebrow}
                  </span>
                  <span className="block text-sm font-bold text-gray-900 leading-snug">{s.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active step: what to notice, then the screen at a readable size */}
          <div id="story-panel" role="tabpanel" aria-labelledby={`story-tab-${active}`}>
            <div key={active} className="animate-fade-in-up">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mb-6">{step.text}</p>
              <ProductScreen screen={step.screen} />
            </div>
          </div>
        </div>

        <p className="max-w-3xl mx-auto text-center text-xs text-gray-400 mt-10 leading-relaxed">
          {SHOWCASE_DISCLOSURE}
        </p>
      </div>
    </section>
  );
};

export default ProductStory;
