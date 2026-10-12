import React from 'react';
import { Brain, ShieldCheck, UserCheck, Scale } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ProductScreen from '@/components/ui/ProductScreen';
import { screens, type Screen } from '@/data/productScreens';

const commitments = [
  {
    icon: Brain,
    title: 'Thinking comes first',
    text: 'Ask Sprig for the answer and it asks what you already know. It coaches students through their own reasoning instead of doing the work for them.',
  },
  {
    icon: ShieldCheck,
    title: 'Parents hold the controls',
    text: "Consent is listed purpose by purpose, and each toggle says what turning it off changes. Parents can revoke consent, request deletion, or export their child's AI conversations.",
  },
  {
    icon: UserCheck,
    title: 'Teachers stay in charge',
    text: 'Mentra suggests and teachers decide. Recommendations wait for a teacher to approve, modify or dismiss them, and an administrator can switch all AI off.',
  },
  {
    icon: Scale,
    title: "We don't pretend to know more than we do",
    text: 'When there isn\'t enough evidence, Mentra says "not yet" instead of inventing a conclusion about a child.',
  },
];

interface TrustSectionProps {
  /** Which real screen to show under the commitments */
  screen?: Screen;
  caption?: string;
  className?: string;
}

const TrustSection = ({
  screen = screens.parentConsent,
  caption = 'What a parent sees: active consent, its history, one-click revoke, data deletion, and an export of every AI conversation.',
  className = 'bg-gray-50',
}: TrustSectionProps) => (
  <section id="trust" className={`py-24 ${className}`} aria-labelledby="trust-heading">
    <div className="container mx-auto px-4">
      <AnimateOnScroll>
        <h2
          id="trust-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center text-balance max-w-4xl mx-auto"
        >
          Built for growing minds. Designed for the adults who protect them.
        </h2>
      </AnimateOnScroll>

      <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
        {commitments.map((c, i) => (
          <AnimateOnScroll key={c.title} delay={i * 100}>
            <div className="bg-white rounded-2xl p-6 h-full border border-gray-100">
              <div className="w-10 h-10 bg-mentra-blue/10 rounded-lg flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-mentra-blue" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{c.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{c.text}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll>
        <div className="max-w-5xl mx-auto">
          <ProductScreen screen={screen} caption={caption} />
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default TrustSection;
