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

// Real exchanges whose visible Sprig turns hold up on a semantic read (showcase frames Student 16 and 06b;
// full transcripts reviewed, not just the cropped turns).
const steps: Step[] = [
  {
    eyebrow: 'Think it through',
    title: 'A question instead of the answer.',
    text: "Leo asks whether losing the wolves would be good for the deer. Sprig asks what would happen over a few years instead. Leo works out that the deer would eat the plants, then run out of food themselves.",
    screen: screens.studentLeo,
  },
  {
    eyebrow: 'Reasoning feedback',
    title: 'Feedback on the reasoning, not a score.',
    text: "On a finished investigation, Sprig responds to what the student actually wrote. It credits them for lowering their confidence when a rival explanation held up, and points out the one weak spot in their test.",
    screen: screens.studentVerdict,
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
              How Sprig responds when a student asks for help
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Real exchanges from Mentra. Cropped, not edited.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="max-w-5xl mx-auto">
          {/* Steps */}
          <div
            className="flex lg:grid lg:grid-cols-2 gap-2 overflow-x-auto [scrollbar-width:none] -mx-4 px-4 lg:mx-0 lg:px-0 pb-2 lg:pb-0 mb-6"
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
