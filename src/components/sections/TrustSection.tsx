import React from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import BrandGradient from '@/components/ui/BrandGradient';

const commitments = [
  {
    title: 'Thinking comes first',
    text: 'Sprig is designed to ask how a student is thinking before it helps, and to hand the next step back to them rather than do the work.',
  },
  {
    title: 'Parents hold the controls',
    text: "Consent is listed purpose by purpose, and each toggle says what turning it off changes. Parents can revoke consent, request deletion, or, for specific reasons such as safety, request an export of their child's AI conversations.",
  },
  {
    title: 'Teachers stay in charge',
    text: 'Mentra suggests and teachers decide. Recommendations wait for a teacher to approve, modify or dismiss them, and an administrator can switch all AI off.',
  },
  {
    title: "We don't pretend to know more than we do",
    text: 'When there isn\'t enough evidence, Mentra says "not yet" instead of inventing a conclusion about a child.',
  },
];

interface TrustSectionProps {
  className?: string;
}

// Same heading-left, rows-right layout as How it works and the pilot section. Used on the homepage and the
// audience pages.
const TrustSection = ({ className = 'bg-gray-50' }: TrustSectionProps) => (
  <section id="trust" className={`py-24 ${className}`} aria-labelledby="trust-heading">
    <div className="container mx-auto px-4">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="lg:sticky lg:top-28 space-y-8">
            <h2 id="trust-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
              Built for growing minds. Designed for <BrandGradient>the adults who protect them</BrandGradient>.
            </h2>
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
          </div>
        </AnimateOnScroll>

        <ul className="divide-y divide-gray-200 border-y border-gray-200">
          {commitments.map((c, i) => (
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
      </div>
    </div>
  </section>
);

export default TrustSection;
