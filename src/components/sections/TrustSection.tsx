import React from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import BrandGradient from '@/components/ui/BrandGradient';
import ProductScreen from '@/components/ui/ProductScreen';
import { screens } from '@/data/productScreens';

interface Commitment {
  title: string;
  text: string;
}

const thinkingFirst: Commitment = {
  title: 'Thinking comes first',
  text: 'Sprig is designed to ask how a student is thinking before it helps, and to hand the next step back to them rather than do the work.',
};

const parentsControl: Commitment = {
  title: 'Parents hold the controls',
  text: "Consent is listed purpose by purpose, and each toggle says what turning it off changes. Parents can revoke consent, request deletion, or, for specific reasons such as safety, request an export of their child's AI conversations.",
};

const teachersInCharge: Commitment = {
  title: 'Teachers stay in charge',
  text: 'Mentra suggests and teachers decide. Recommendations wait for a teacher to approve, modify or dismiss them, and an administrator can switch all AI off.',
};

const notYet: Commitment = {
  title: "We don't pretend to know more than we do",
  text: 'When there isn\'t enough evidence, Mentra says "not yet" instead of inventing a conclusion about a child.',
};

interface TrustSectionProps {
  className?: string;
  /**
   * Show the parent consent screen with the "Parents hold the controls" point (default, homepage). Pass false for a
   * compact, text-only version with the Sprig illustration, where the page already shows enough product.
   */
  showScreen?: boolean;
}

const CommitmentRows = ({ items }: { items: Commitment[] }) => (
  <ul className="divide-y divide-gray-200 border-y border-gray-200">
    {items.map((c, i) => (
      <li key={c.title}>
        <AnimateOnScroll delay={i * 60}>
          <div className="py-6">
            <h3 className="text-lg font-bold text-gray-900 mb-1">{c.title}</h3>
            <p className="text-base text-gray-700 leading-relaxed">{c.text}</p>
          </div>
        </AnimateOnScroll>
      </li>
    ))}
  </ul>
);

// Same heading-left, rows-right layout as How it works and the pilot section. Used on the homepage and the
// audience pages.
const TrustSection = ({ className = 'bg-gray-50', showScreen = true }: TrustSectionProps) => (
  <section id="trust" className={`py-16 sm:py-20 ${className}`} aria-labelledby="trust-heading">
    <div className="container mx-auto px-4">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="lg:sticky lg:top-28 space-y-8">
            <h2 id="trust-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
              Built for growing minds. Designed for <BrandGradient>the adults who protect them</BrandGradient>.
            </h2>
            {!showScreen && (
              <img
                src="/images/sprig/trust-shelter-480.webp"
                alt=""
                aria-hidden="true"
                width={240}
                height={240}
                loading="lazy"
                decoding="async"
                className="hidden sm:block w-52 h-52 lg:w-60 lg:h-60 object-contain"
              />
            )}
          </div>
        </AnimateOnScroll>

        <CommitmentRows
          items={showScreen ? [thinkingFirst, teachersInCharge, notYet] : [thinkingFirst, parentsControl, teachersInCharge, notYet]}
        />
      </div>

      {showScreen && (
        // The parent point sits beside the real screen it describes, so the screen stays legible without dominating the page
        <div className="max-w-6xl mx-auto mt-12 lg:mt-16">
          <AnimateOnScroll>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{parentsControl.title}</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                A child under 13 can use Sprig only with a parent&rsquo;s OK, which they can give, review or withdraw
                at any time. Consent is listed purpose by purpose, and each toggle says what turning it off changes.
                Parents can also request deletion or, for specific reasons such as safety, an export of their
                child&rsquo;s AI conversations.
              </p>
            </div>
            <ProductScreen
              screen={screens.parentConsent}
              caption="A parent's Consent & Privacy page in Mentra, shown on a fictional showcase family."
            />
            </div>
          </AnimateOnScroll>
        </div>
      )}
    </div>
  </section>
);

export default TrustSection;
