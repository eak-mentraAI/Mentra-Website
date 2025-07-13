import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';

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
    bg: 'bg-curiosity-coral/10',
    border: 'border-curiosity-coral/30',
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
    bg: 'bg-mentra-blue/5',
    border: 'border-mentra-blue/30',
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
    bg: 'bg-growth-green/10',
    border: 'border-growth-green/30',
    isFree: false,
  },
  {
    name: 'Institutional',
    price: null,
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
    bg: 'bg-wisdom-purple/10',
    border: 'border-wisdom-purple/30',
    isFree: false,
    isEnterprise: true,
  },
];

function getAnnualPrice(monthly) {
  if (!monthly) return 0;
  // 16% discount, rounded up to nearest dollar
  return Math.ceil(monthly * 12 * 0.84 / 12);
}

function getMonthlyPrice(monthly) {
  if (!monthly) return 0;
  // Round up to nearest dollar
  return Math.ceil(monthly);
}

const Pricing = () => {
  const [billing, setBilling] = useState<'annual' | 'monthly'>('annual');

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col items-center py-12 px-4 font-rounded">
        <section className="container mx-auto px-4 mb-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
            Choose Your <span className="text-mentra-blue">Growth</span> Path
          </h1>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Select the plan that fits your learning journey. All plans include secure AI-powered growth and support.
          </p>
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
              <button
                className={`px-6 py-2 font-semibold text-sm transition ${billing === 'annual' ? 'bg-mentra-blue text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setBilling('annual')}
              >
                Annual <span className="ml-1 text-xs font-normal">(Save 16%)</span>
              </button>
              <button
                className={`px-6 py-2 font-semibold text-sm transition ${billing === 'monthly' ? 'bg-mentra-blue text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setBilling('monthly')}
              >
                Monthly
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {basePlans.map((plan, idx) => {
              let displayPrice = plan.price;
              let priceLabel = '';
              if (plan.isFree) {
                displayPrice = 0;
                priceLabel = 'Free';
              } else if (plan.isEnterprise) {
                displayPrice = '';
                priceLabel = "Let's talk";
              } else if (billing === 'annual') {
                displayPrice = getAnnualPrice(plan.price);
                priceLabel = `$${displayPrice} / user / month`;
              } else {
                displayPrice = getMonthlyPrice(plan.price);
                priceLabel = `$${displayPrice} / user / month`;
              }
              return (
                <div
                  key={plan.name}
                  className={`flex flex-col rounded-2xl border ${plan.border} ${plan.bg} ${plan.highlight ? 'shadow-2xl ring-2 ring-mentra-blue z-10 scale-110' : 'shadow-lg'} p-6 relative`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-mentra-blue text-white text-xs font-semibold px-3 py-1 rounded-full shadow">Most Popular</span>
                  )}
                  <h2 className="text-xl font-bold text-gray-900 mb-1 text-center">{plan.name}</h2>
                  <div className="text-center mb-4">
                    <span className="text-3xl font-extrabold text-gray-900">{priceLabel}</span>
                  </div>
                  <button className={`w-full mb-4 py-2 rounded-lg font-semibold transition ${plan.highlight ? 'bg-mentra-blue text-white hover:bg-mentra-blue/90' : 'bg-gray-700 text-white hover:bg-gray-800'}`}>{plan.cta}</button>
                  <ul className="space-y-2 flex-1 mb-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700 text-sm text-left">
                        <CheckCircle2 className="w-4 h-4 min-w-4 min-h-4 text-mentra-blue" />
                        <span className="whitespace-nowrap overflow-hidden text-ellipsis">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <hr className="my-6 border-gray-200" />
          <p className="text-sm text-gray-500 text-center max-w-2xl mx-auto mb-4">
            All plans billed monthly or annually. Contact us for custom institutional solutions or educational discounts.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Pricing; 