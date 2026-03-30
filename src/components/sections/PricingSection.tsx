import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Users, Building2, Landmark, GraduationCap } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

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
      'Teacher AI Copilot (Mentes)',
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

const studentPricing = [
  { range: '1–500 students', monthly: '$18', annual: '$17', multiYear: '$16' },
  { range: '501–2,000', monthly: '$16', annual: '$15', multiYear: '$14' },
  { range: '2,001–5,000', monthly: '$15', annual: '$13', multiYear: '$12' },
  { range: '5,001–25,000', monthly: '$14', annual: '$12', multiYear: '$11' },
  { range: '25,000+', monthly: '$13', annual: '$10', multiYear: '$9' },
];

const platformFees = [
  { size: 'Small School', students: 'Under 1,000', fee: '$15K/year' },
  { size: 'Mid School', students: '1,000–5,000', fee: '$25K–$50K/year' },
  { size: 'District', students: '5,000–25,000', fee: '$75K–$150K/year' },
  { size: 'Large District / State', students: '25,000+', fee: '$200K–$500K/year' },
];

const addOns = [
  {
    name: 'Parent Intelligence Portal',
    description: 'Growth dashboards, emotional learning insights, and college readiness tracking for families.',
    price: '$5/month per family',
  },
  {
    name: 'Advanced AI Model Tier',
    description: 'Higher-accuracy models, extended context, and advanced tutoring for premium districts.',
    price: '+$1–3/student/month',
  },
  {
    name: 'SIS/LMS Integration',
    description: 'Seamless connection to your existing student information and learning management systems.',
    price: 'Starting at $10K',
  },
];

const PricingSection = () => {
  const [showDetails, setShowDetails] = useState(false);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
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
                  <a
                    href="#cta"
                    className={`w-full py-2.5 rounded-full font-semibold text-sm transition-all duration-200 text-center block ${tier.highlight ? 'bg-mentra-blue text-white hover:bg-mentra-blue/90' : 'border border-gray-200 text-gray-700 hover:bg-gray-50'}`}
                  >
                    Request a Quote
                  </a>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* View Detailed Pricing Button */}
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <button
              onClick={() => setShowDetails(true)}
              className="inline-flex items-center gap-2 text-mentra-blue font-semibold text-sm hover:underline transition-all"
            >
              View Detailed Pricing
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </AnimateOnScroll>

        {/* Pricing Detail Modal */}
        <Dialog open={showDetails} onOpenChange={setShowDetails}>
          <DialogContent className="sm:max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900">Detailed Pricing</DialogTitle>
              <DialogDescription className="text-gray-500">
                Per-student licensing, platform fees, and optional add-ons.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-10 mt-4">
              {/* Per-Student Pricing Table */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Per-Student Licensing</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Volume-tiered pricing with discounts for longer commitments. Families access Mentra free through their school's plan.
                </p>
                <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 bg-gray-50">
                        <th className="text-left py-3 px-5 font-semibold text-gray-700">Student Count</th>
                        <th className="text-center py-3 px-5 font-semibold text-gray-700">Month-to-Month</th>
                        <th className="text-center py-3 px-5 font-semibold text-gray-700">1-Year Contract</th>
                        <th className="text-center py-3 px-5 font-semibold text-mentra-blue">3-Year Contract</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentPricing.map((row, i) => (
                        <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                          <td className="py-3 px-5 font-medium text-gray-900">{row.range}</td>
                          <td className="py-3 px-5 text-center text-gray-600">{row.monthly}/mo</td>
                          <td className="py-3 px-5 text-center text-gray-600">{row.annual}/mo</td>
                          <td className="py-3 px-5 text-center font-semibold text-mentra-blue">{row.multiYear}/mo</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-400 mt-3">Per student, per month. Billed annually or as agreed in contract terms.</p>
              </div>

              {/* Platform Fee Table */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Institutional Platform Fee</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Covers analytics dashboards, longitudinal learner graphs, administrative AI insights, and integration infrastructure.
                </p>
                <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 bg-gray-50">
                        <th className="text-left py-3 px-5 font-semibold text-gray-700">Institution Size</th>
                        <th className="text-left py-3 px-5 font-semibold text-gray-700">Students</th>
                        <th className="text-left py-3 px-5 font-semibold text-gray-700">Annual Platform Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {platformFees.map((row, i) => (
                        <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                          <td className="py-3 px-5 font-medium text-gray-900">{row.size}</td>
                          <td className="py-3 px-5 text-gray-600">{row.students}</td>
                          <td className="py-3 px-5 text-gray-900 font-semibold">{row.fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Add-Ons */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Optional Add-Ons</h3>
                <p className="text-sm text-gray-500 mb-4">
                  High-value expansion modules available at any tier.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {addOns.map((addOn, i) => (
                    <div key={i} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{addOn.name}</h4>
                      <p className="text-xs text-gray-400 mb-3 leading-relaxed">{addOn.description}</p>
                      <span className="text-sm font-semibold text-mentra-blue">{addOn.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Contract note */}
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Aligned with how schools buy</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                Flexible contract terms designed around school budgeting cycles. Pilot pricing in year one, full rollout in year two, expansion in year three. Need-based pricing available for qualifying institutions.
              </p>
              <a
                href="mailto:sales@mentra.ai"
                className="inline-flex items-center gap-2 bg-mentra-blue text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-mentra-blue/90 transition-all shadow-md hover:shadow-lg"
              >
                Talk to Our Team
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PricingSection;
