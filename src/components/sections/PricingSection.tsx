import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const basePlans = [
  {
    name: 'Mentra Access',
    price: 0,
    period: '',
    cta: 'Get Started',
    features: [
      'Free for eligible families',
      "Access your school's Mentra plan",
      'AI journaling & learning tools',
      'Private & secure data',
      'Mobile & web access',
    ],
    highlight: false,
    isFree: true,
  },
  {
    name: 'Standard',
    price: 14,
    period: '/ user per month',
    cta: 'Start Standard',
    features: [
      'Personal AI companion',
      'Journaling & goal tracking',
      'Parent dashboard',
      'Basic reports',
      'Email support',
    ],
    highlight: true,
    isFree: false,
  },
  {
    name: 'Plus',
    price: 22,
    period: '/ user per month',
    cta: 'Start Plus',
    features: [
      'All Standard features',
      'Advanced analytics',
      'Priority support',
      'Custom learning paths',
      'Family sharing (up to 4)',
    ],
    highlight: false,
    isFree: false,
  },
  {
    name: 'Institutional',
    price: null as number | null,
    period: '',
    cta: 'Contact Sales',
    features: [
      'Custom integrations',
      'Admin dashboard',
      'Bulk licensing',
      'Onboarding & training',
      'Account manager',
    ],
    highlight: false,
    isFree: false,
    isEnterprise: true,
  },
];

function getAnnualPrice(monthly: number) {
  if (!monthly) return 0;
  return Math.ceil(monthly * 12 * 0.84 / 12);
}

function getMonthlyPrice(monthly: number) {
  if (!monthly) return 0;
  return Math.ceil(monthly);
}

const PricingSection = () => {
  const [billing, setBilling] = useState<'annual' | 'monthly'>('annual');

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center text-balance">
            Choose your plan
          </h2>
          <p className="text-lg text-gray-500 mb-8 text-center max-w-2xl mx-auto">
            Every plan builds capability — not dependency. Full privacy, full control, at every tier.
          </p>
        </AnimateOnScroll>
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full border border-gray-200 bg-white shadow-sm overflow-hidden p-1">
            <button
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${billing === 'annual' ? 'bg-gray-900 text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
              onClick={() => setBilling('annual')}
            >
              Annual <span className="ml-1 text-xs font-normal opacity-80">(Save 16%)</span>
            </button>
            <button
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${billing === 'monthly' ? 'bg-gray-900 text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
              onClick={() => setBilling('monthly')}
            >
              Monthly
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
          {basePlans.map((plan, idx) => {
            let priceAmount = '';
            let priceLabel = '';
            if (plan.isFree) {
              priceAmount = 'Free';
            } else if (plan.isEnterprise) {
              priceAmount = "Let's talk";
            } else if (billing === 'annual') {
              priceAmount = `$${getAnnualPrice(plan.price!)}`;
              priceLabel = '/ user / month';
            } else {
              priceAmount = `$${getMonthlyPrice(plan.price!)}`;
              priceLabel = '/ user / month';
            }
            return (
              <AnimateOnScroll key={plan.name} delay={idx * 100}>
                <div
                  className={`flex flex-col rounded-2xl bg-white border ${plan.highlight ? 'shadow-xl ring-2 ring-mentra-blue relative border-mentra-blue/20' : 'shadow-sm hover:shadow-md border-gray-200'} p-6 transition-all duration-300 h-full`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-mentra-blue text-white text-xs font-semibold px-3 py-1 rounded-full shadow">Most Popular</span>
                  )}
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{plan.name}</h3>
                  <div className="mb-4">
                    <span className={`text-3xl font-extrabold ${plan.highlight ? 'text-mentra-blue' : 'text-gray-900'}`}>{priceAmount}</span>
                    {priceLabel && <span className="text-sm text-gray-400 ml-1">{priceLabel}</span>}
                  </div>
                  <button className={`w-full mb-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${plan.highlight ? 'bg-mentra-blue text-white hover:bg-mentra-blue/90' : 'border border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                    {plan.cta}
                  </button>
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-gray-500 text-sm">
                        <CheckCircle2 className={`w-4 h-4 min-w-4 min-h-4 mt-0.5 ${plan.highlight ? 'text-mentra-blue' : 'text-growth-green'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
        <p className="text-sm text-gray-400 text-center max-w-2xl mx-auto">
          All plans billed monthly or annually. Contact us for custom institutional solutions or educational discounts.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
