import React from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ScreenTabs, { type ScreenTab } from '@/components/ui/ScreenTabs';
import { screens } from '@/data/productScreens';

// Real Sprig output (simulated students that reply to Sprig). Tabs 1 and 3 are 2026-10-27 motion loops; the rest are stills.
// Full transcripts reviewed, not just the cropped turns: marketing/carousel/<date>/transcripts in the app repo.
const steps: ScreenTab[] = [
  {
    eyebrow: 'Asking for the answer',
    title: 'The thinking stays with the student.',
    text: "Jordan asks Sprig for the answer. Sprig won't hand it over. It asks what the sunlight is doing for the plant, nudges past a first guess about warmth, and lets Jordan reach the idea: sunlight is the energy a plant uses to make its own food.",
    screen: screens.studentJordan,
  },
  {
    eyebrow: 'Signal & Noise',
    title: 'Judgment is a skill. Sprig coaches it.',
    text: 'Students rank sources and defend the ranking. Sprig\'s feedback is about how they judged, not what they picked: what they caught, the lens they drifted from, and one habit to try next time.',
    screen: screens.studentSignalNoise,
  },
  {
    eyebrow: 'Coding',
    title: 'Debugging by thinking, not by copying a fix.',
    text: 'The program prints 2 when it should print 3. Sprig asks what the code is really counting. Jordan works out it\'s counting plants, not days, then fixes the line and runs it.',
    screen: screens.studentCoding,
  },
  {
    eyebrow: 'AI literacy',
    title: 'Learning to use AI well, not lean on it.',
    text: 'Students practice writing prompts, and Sprig grades the craft. This one asked the AI for examples instead of giving any. Sprig names the miss and the fix to try: write one haiku and put it in the prompt.',
    screen: screens.studentPrompting,
  },
  {
    eyebrow: 'Exploration',
    title: 'Curiosity that ends in a test, not a fact.',
    text: 'A carnival game sparks a question: does playing 10 times guarantee a win? Sprig explains why each turn is a fresh 1-in-10 chance, then gives the student a way to see it for themselves with ten objects and an X.',
    screen: screens.studentExploration,
  },
  {
    eyebrow: 'Investigations',
    title: "Reasoning that goes one 'why' deeper.",
    text: 'A student explains why shade plants grow bigger, darker leaves. Instead of praise, Sprig asks about the vaguest step, "using its energy different": what has to happen first?',
    screen: screens.studentWhyChain,
  },
];

const ProductStory = () => (
  <section id="see-it-in-action" className="py-24 bg-gray-50 scroll-mt-20" aria-labelledby="product-story-heading">
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
            Six places students work in Mentra. In each one, Sprig hands the thinking back to the student. Real screens and footage from the live app; the videos skip the waits.
          </p>
        </div>
      </AnimateOnScroll>

      <ScreenTabs tabs={steps} label="Sprig across Mentra" />


    </div>
  </section>
);

export default ProductStory;
