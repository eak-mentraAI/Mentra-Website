import React from 'react';
import { CheckCircle2, Users, Building2, Landmark, GraduationCap } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { useScheduleCall } from '@/contexts/ScheduleCallContext';

const tiers = [
  {
    name: 'Core',
    subtitle: 'AI Learning Assistance',
    description: 'Foundational AI companion that builds capability, not dependency.',
    icon: GraduationCap,
    features: [
      'Personal AI learning companion',
      'Socratic scaffolding that fades over time',
      'AI journaling & goal tracking',
      'Parent growth dashboard',
      'Privacy-first architecture',
      'Mobile & web access',
    ],
    highlight: false,
  },
  {
    name: 'Growth',
    subtitle: 'Longitudinal Insights',
    description: 'Track real learning over time — see capability build, not just grades.',
    icon: Users,
    features: [
      'Everything in Core',
      'Learner Passport with growth tracking',
      'Teacher AI Copilot',
      'Custom learning paths',
      'Engagement & progress analytics',
      'Family sharing (up to 4)',
    ],
    highlight: true,
  },
  {
    name: 'Intelligence',
    subtitle: 'Predictive Analytics',
    description: 'Early intervention signals, cohort analysis, and curriculum optimization.',
    icon: Building2,
    features: [
      'Everything in Growth',
      'Predictive learner analytics',
      'Cohort & curriculum insights',
      'Early intervention signals',
      'College & career readiness tracking',
      'Advanced AI model tier',
    ],
    highlight: false,
  },
  {
    name: 'Enterprise',
    subtitle: 'Institutional Optimization',
    description: 'Full platform deployment with dedicated support and custom integrations.',
    icon: Landmark,
    features: [
      'Everything in Intelligence',
      'District-wide admin dashboard',
      'SIS/LMS integration',
      'Private cloud deployment option',
      'Custom analytics & reporting',
      'Dedicated account manager',
    ],
    highlight: false,
  },
];

const PricingSection = () => {
  const { open: openScheduleCall } = useScheduleCall();

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
              Invest in learner intelligence
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-2">
              Pricing built for how schools actually buy — predictable, scalable, and anchored to outcomes that matter.
            </p>
            <p className="text-sm text-gray-400 max-w-xl mx-auto">
              Per-student licensing + institutional platform fee. Volume discounts for multi-year commitments.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <AnimateOnScroll key={tier.name} delay={idx * 100}>
                <div
                  className={`flex flex-col rounded-2xl bg-white border ${tier.highlight ? 'shadow-xl ring-2 ring-mentra-blue relative border-mentra-blue/20' : 'shadow-sm hover:shadow-md border-gray-200'} p-6 transition-all duration-300 h-full`}
                >
                  {tier.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-mentra-blue text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                      Most Popular
                    </span>
                  )}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${tier.highlight ? 'bg-mentra-blue/10' : 'bg-gray-100'}`}>
                    <Icon className={`w-5 h-5 ${tier.highlight ? 'text-mentra-blue' : 'text-gray-600'}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{tier.name}</h3>
                  <p className={`text-sm font-medium mb-2 ${tier.highlight ? 'text-mentra-blue' : 'text-gray-500'}`}>
                    {tier.subtitle}
                  </p>
                  <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                    {tier.description}
                  </p>
                  <ul className="space-y-3 flex-1 mb-5">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-gray-500 text-sm">
                        <CheckCircle2
                          className={`w-4 h-4 min-w-4 min-h-4 mt-0.5 ${tier.highlight ? 'text-mentra-blue' : 'text-growth-green'}`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={openScheduleCall}
                    className={`w-full py-2.5 rounded-full font-semibold text-sm transition-all duration-200 text-center block ${tier.highlight ? 'bg-mentra-blue text-white hover:bg-mentra-blue/90' : 'border border-gray-200 text-gray-700 hover:bg-gray-50'}`}
                  >
                    Request a quote
                  </button>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
