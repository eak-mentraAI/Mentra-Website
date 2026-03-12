import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import PageTransition from '@/components/layout/PageTransition';
import { ComplianceShield, RosterIntegration, KillSwitch, Explainability, SecureExport, ITObservability, TenantIsolation } from '@/components/icons/institutions';

const colorBorderMap: Record<string, string> = {
  'mentra-blue': 'hover:border-t-mentra-blue',
  'growth-green': 'hover:border-t-growth-green',
  'curiosity-coral': 'hover:border-t-curiosity-coral',
  'grit-gold': 'hover:border-t-grit-gold',
  'wisdom-purple': 'hover:border-t-wisdom-purple',
};

const blurbs = [
  {
    icon: ComplianceShield,
    title: 'COPPA & FERPA Built In, Not Bolted On',
    text: 'Every data access is FERPA-audited automatically. Every student under 13 requires verified parental consent. PII is auto-redacted from exports. 57 automated policy gates run continuously.',
    color: 'mentra-blue',
  },
  {
    icon: RosterIntegration,
    title: 'Plug Into Your Roster Systems in Days',
    text: 'Clever, ClassLink, Canvas, Schoology, Google Classroom, OneRoster — out of the box. Teachers see real class rosters on day one. Enrollment changes sync automatically.',
    color: 'growth-green',
  },
  {
    icon: KillSwitch,
    title: 'One Kill Switch for All AI',
    text: 'One toggle disables all AI generation instantly. Redis-backed for sub-second response. Fails closed: if the switch system is unavailable, AI stays off until an admin re-enables it.',
    color: 'curiosity-coral',
  },
  {
    icon: Explainability,
    title: 'Every AI Decision Is Explainable',
    text: 'When Mentra adapts content, the teacher sees exactly what changed and why. Teachers can override any adaptation with a reason and expiration date. No black box.',
    color: 'grit-gold',
  },
  {
    icon: SecureExport,
    title: 'Graduation-Ready Data Portability',
    text: '20 data domains — academic mastery, cognitive patterns, growth trajectory. Encrypted (AES-256-GCM), PII-redacted, consent-verified. Three export modes for transitions, portability, and compliance holds.',
    color: 'wisdom-purple',
  },
  {
    icon: ITObservability,
    title: 'Real Observability for IT',
    text: 'Health aggregation across 16 services. AI performance metrics. Export pipeline monitoring. FERPA audit logs. Admin-only endpoints with role-based access. Your IT team sees everything.',
    color: 'mentra-blue',
  },
  {
    icon: TenantIsolation,
    title: 'Tenant Isolation That Passes Pen Testing',
    text: 'Row-Level Security at the database layer. Signed JWTs with 5-minute expiry. RBAC enforcement with configurable levels. Cross-district data leaks are architecturally impossible.',
    color: 'curiosity-coral',
  },
];

const stats = [
  { value: '57', label: 'Automated policy gates' },
  { value: '16', label: 'Independently monitored services' },
  { value: '20', label: 'Export data domains' },
  { value: '<1s', label: 'AI kill switch response' },
];

export default function Institutions() {
  return (
    <PageTransition>
    <div className="min-h-screen font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hook */}
        <section className="container mx-auto max-w-4xl px-4 pt-16 sm:pt-24 pb-12 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-snug text-balance" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.06)' }}>
            AI-powered learning your compliance team<br />
            <span className="bg-gradient-to-r from-mentra-blue to-wisdom-purple bg-clip-text text-transparent">will actually approve.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every district wants personalized learning. Most platforms make you choose between innovation and compliance. Mentra was built so you never have to.
          </p>
        </section>

        {/* Problem */}
        <AnimateOnScroll>
        <section className="container mx-auto max-w-3xl px-4 pb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-mentra-blue">
            <p className="text-gray-700 leading-relaxed">
              You've seen the demos. The AI tutors, the adaptive platforms. But when your data governance team looks under the hood, it falls apart: unclear data practices, no real FERPA controls, PII everywhere, and an AI nobody can explain at a school board meeting. <strong className="text-gray-900">Mentra was architected for exactly this.</strong>
            </p>
          </div>
        </section>
        </AnimateOnScroll>

        {/* Stats Bar */}
        <section className="container mx-auto max-w-4xl px-4 pb-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <AnimateOnScroll key={s.label} variant="scale-in" delay={i * 100}>
              <div className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-mentra-blue mb-1">{s.value}</div>
                <div className="text-xs text-gray-600">{s.label}</div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* Blurbs */}
        <section className="container mx-auto max-w-6xl px-4 pb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blurbs.map((b, i) => (
              <AnimateOnScroll key={b.title} delay={i * 100}>
              <div className={`bg-white rounded-2xl shadow-sm p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-transparent ${colorBorderMap[b.color] || ''} group`}>
                <div className={`w-12 h-12 bg-${b.color}/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <b.icon className={`w-6 h-6 text-${b.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.text}</p>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* Trust Footer */}
        <AnimateOnScroll>
        <section className="container mx-auto max-w-3xl px-4 pb-16">
          <div className="bg-journal-sand/50 rounded-2xl p-6 sm:p-8 text-center">
            <p className="text-gray-700 text-sm leading-relaxed italic">
              "Mentra builds durable learner intelligence — not just assignment completion. It's a human development platform that happens to have the strongest compliance architecture in K-12 ed-tech."
            </p>
          </div>
        </section>
        </AnimateOnScroll>

        {/* CTA */}
        <AnimateOnScroll variant="scale-in">
        <section className="container mx-auto max-w-xl px-4 pb-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Ready to see the <span className="text-mentra-blue">full governance toolkit</span>?
            </h2>
            <p className="text-gray-600 mb-6">Talk to our implementation team.</p>
            <form action="https://formspree.io/f/meokybnp" method="POST" className="space-y-3">
              <input type="text" name="name" required placeholder="Name" className="w-full px-4 py-3 rounded-lg bg-journal-sand/30 border border-gray-200 focus:border-mentra-blue focus:ring-2 focus:ring-mentra-blue/20 focus:shadow-[0_0_0_4px_rgba(58,134,255,0.08)] focus:bg-white transition-all duration-200 text-base placeholder:text-gray-400" aria-label="Name" />
              <input type="email" name="email" required placeholder="Work Email" className="w-full px-4 py-3 rounded-lg bg-journal-sand/30 border border-gray-200 focus:border-mentra-blue focus:ring-2 focus:ring-mentra-blue/20 focus:shadow-[0_0_0_4px_rgba(58,134,255,0.08)] focus:bg-white transition-all duration-200 text-base placeholder:text-gray-400" aria-label="Work Email" />
              <input type="text" name="organization" placeholder="District / Organization" className="w-full px-4 py-3 rounded-lg bg-journal-sand/30 border border-gray-200 focus:border-mentra-blue focus:ring-2 focus:ring-mentra-blue/20 focus:shadow-[0_0_0_4px_rgba(58,134,255,0.08)] focus:bg-white transition-all duration-200 text-base placeholder:text-gray-400" aria-label="District or Organization" />
              <input type="hidden" name="context" value="Sent from the institutions page" />
              <button type="submit" className="w-full bg-gradient-to-r from-mentra-blue to-mentra-blue/85 text-white font-semibold py-3 rounded-full hover:from-mentra-blue/95 hover:to-mentra-blue/80 hover:shadow-lg hover:shadow-mentra-blue/25 active:scale-[0.98] transition-all duration-200 text-base">Request Demo</button>
            </form>
          </div>
        </section>
        </AnimateOnScroll>
      </main>
      <Footer />
    </div>
    </PageTransition>
  );
}
