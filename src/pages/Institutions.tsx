import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ShieldCheck, Plug, Power, Eye, FileText, Activity, Lock } from 'lucide-react';

const blurbs = [
  {
    icon: ShieldCheck,
    title: 'COPPA & FERPA Built In, Not Bolted On',
    text: 'Every data access is FERPA-audited automatically. Every student under 13 requires verified parental consent. PII is auto-redacted from exports. 57 automated policy gates run continuously.',
    color: 'mentra-blue',
  },
  {
    icon: Plug,
    title: 'Plug Into Your Roster Systems in Days',
    text: 'Clever, ClassLink, Canvas, Schoology, Google Classroom, OneRoster — out of the box. Teachers see real class rosters on day one. Enrollment changes sync automatically.',
    color: 'growth-green',
  },
  {
    icon: Power,
    title: 'One Kill Switch for All AI',
    text: 'One toggle disables all AI generation instantly. Redis-backed for sub-second response. Fails closed: if the switch system is unavailable, AI stays off until an admin re-enables it.',
    color: 'curiosity-coral',
  },
  {
    icon: Eye,
    title: 'Every AI Decision Is Explainable',
    text: 'When Mentra adapts content, the teacher sees exactly what changed and why. Teachers can override any adaptation with a reason and expiration date. No black box.',
    color: 'grit-gold',
  },
  {
    icon: FileText,
    title: 'Graduation-Ready Data Portability',
    text: '20 data domains — academic mastery, cognitive patterns, growth trajectory. Encrypted (AES-256-GCM), PII-redacted, consent-verified. Three export modes for transitions, portability, and compliance holds.',
    color: 'wisdom-purple',
  },
  {
    icon: Activity,
    title: 'Real Observability for IT',
    text: 'Health aggregation across 16 services. AI performance metrics. Export pipeline monitoring. FERPA audit logs. Admin-only endpoints with role-based access. Your IT team sees everything.',
    color: 'mentra-blue',
  },
  {
    icon: Lock,
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
    <div className="min-h-screen font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hook */}
        <section className="container mx-auto max-w-4xl px-4 pt-16 sm:pt-24 pb-12 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI-powered learning your compliance team<br />
            <span className="text-mentra-blue">will actually approve.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every district wants personalized learning. Most platforms make you choose between innovation and compliance. Mentra was built so you never have to.
          </p>
        </section>

        {/* Problem */}
        <section className="container mx-auto max-w-3xl px-4 pb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-mentra-blue">
            <p className="text-gray-700 leading-relaxed">
              You've seen the demos. The AI tutors, the adaptive platforms. But when your data governance team looks under the hood, it falls apart: unclear data practices, no real FERPA controls, PII everywhere, and an AI nobody can explain at a school board meeting. <strong className="text-gray-900">Mentra was architected for exactly this.</strong>
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="container mx-auto max-w-4xl px-4 pb-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-xl shadow-md p-4 text-center">
                <div className="text-3xl font-bold text-mentra-blue mb-1">{s.value}</div>
                <div className="text-xs text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Blurbs */}
        <section className="container mx-auto max-w-6xl px-4 pb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blurbs.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 bg-${b.color}/10 rounded-xl flex items-center justify-center mb-4`}>
                  <b.icon className={`w-6 h-6 text-${b.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Footer */}
        <section className="container mx-auto max-w-3xl px-4 pb-16">
          <div className="bg-journal-sand/50 rounded-2xl p-6 sm:p-8 text-center">
            <p className="text-gray-700 text-sm leading-relaxed italic">
              "Mentra builds durable learner intelligence — not just assignment completion. It's a human development platform that happens to have the strongest compliance architecture in K-12 ed-tech."
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto max-w-xl px-4 pb-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Ready to see the <span className="text-mentra-blue">full governance toolkit</span>?
            </h2>
            <p className="text-gray-600 mb-6">Talk to our implementation team.</p>
            <form action="https://formspree.io/f/meokybnp" method="POST" className="space-y-3">
              <input type="text" name="name" required placeholder="Name" className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-mentra-blue focus:border-mentra-blue text-base" aria-label="Name" />
              <input type="email" name="email" required placeholder="Work Email" className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-mentra-blue focus:border-mentra-blue text-base" aria-label="Work Email" />
              <input type="text" name="organization" placeholder="District / Organization" className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-mentra-blue focus:border-mentra-blue text-base" aria-label="District or Organization" />
              <input type="hidden" name="context" value="Sent from the institutions page" />
              <button type="submit" className="w-full bg-mentra-blue text-white font-semibold py-3 rounded-full hover:bg-mentra-blue/90 transition text-base">Request Demo</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
