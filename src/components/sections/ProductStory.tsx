import React from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ScreenTabs, { type ScreenTab } from '@/components/ui/ScreenTabs';
import { screens, SHOWCASE_DISCLOSURE } from '@/data/productScreens';

// Real Sprig output from the 2026-10-13/14 shoots (simulated students that reply to Sprig) plus the 2026-10-12 verdict.
// Full transcripts reviewed, not just the cropped turns: marketing/carousel/<date>/transcripts in the app repo.
const steps: ScreenTab[] = [
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
    eyebrow: 'Exploration',
    title: 'Answers the question the student actually asked.',
    text: "Exploring whether a carnival game is a good deal, a student asks if playing 10 times guarantees a win. Sprig says no, explains why each turn is its own 1-in-10 chance, and suggests a hands-on way to see it.",
    screen: screens.studentExploration,
  },
  {
    eyebrow: 'Investigations',
    title: 'Pushes on the vaguest part.',
    text: "Investigating why shade plants grow bigger, darker leaves, a student builds a chain of whys. Sprig skips the praise and asks about the fuzziest phrase, \"using its energy different\": what has to happen first?",
    screen: screens.studentWhyChain,
  },
];

const ProductStory = () => (
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
            Tutoring, games, coding, AI literacy, exploration and investigations. Real screens, cropped but not edited, and what they record.
          </p>
        </div>
      </AnimateOnScroll>

      <ScreenTabs tabs={steps} label="Sprig across Mentra" />

      <p className="max-w-3xl mx-auto text-center text-xs text-gray-400 mt-10 leading-relaxed">
        {SHOWCASE_DISCLOSURE}
      </p>
    </div>
  </section>
);

export default ProductStory;
