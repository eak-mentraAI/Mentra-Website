import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CircleDot, LayoutDashboard, ShieldAlert, Target, KeyRound, FolderOutput, HeartHandshake, Fingerprint } from 'lucide-react';

const blurbs = [
  {
    icon: CircleDot,
    title: 'Quiet When Fine. Unmissable When Not.',
    text: 'One status light: green means engaged and safe, yellow means a pattern shifted, red means something needs you now. No gamification spam, no daily digests. Everything else is there when you choose to look.',
    color: 'growth-green',
  },
  {
    icon: LayoutDashboard,
    title: 'When You Look, You See Everything',
    text: 'Assignments completed, skills growing, effort invested. Plain language bands — On Track, Excelling, Needs Practice — not data jargon. Subject-by-subject highlights on your terms.',
    color: 'mentra-blue',
  },
  {
    icon: ShieldAlert,
    title: 'Safety Monitoring That Earns Trust',
    text: 'Session time, engagement patterns, and content scans run continuously. But it only reaches you when the signal is real — declining engagement, unusual patterns, or critical flags. Silence means things are fine.',
    color: 'curiosity-coral',
  },
  {
    icon: Target,
    title: 'See Their Goals and Coaching',
    text: 'View your child\'s personal growth goals, progress toward each one, and how much coaching support they\'ve received. Conversations at home can build on what\'s happening at school.',
    color: 'grit-gold',
  },
  {
    icon: KeyRound,
    title: 'Your Consent Controls Everything',
    text: 'You approve what\'s collected, what\'s visible, and what can be shared. Consent expires automatically with renewal reminders. Revoke anytime — data deleted, no exceptions.',
    color: 'wisdom-purple',
  },
  {
    icon: FolderOutput,
    title: 'Take Their Learning Record Anywhere',
    text: 'Export a portable learning profile — strengths, growth trajectory, learning preferences — not just grades. You choose what PII to include. Encrypted and redacted by default.',
    color: 'mentra-blue',
  },
  {
    icon: HeartHandshake,
    title: 'Emotional Data Stays Protected',
    text: 'Emotional signals personalize learning but are never shown as raw scores or clinical labels. You see trends like "strong engagement with interactive content" — never "frustration score: 0.73."',
    color: 'curiosity-coral',
  },
  {
    icon: Fingerprint,
    title: 'Building a Learner Identity',
    text: 'Your child is setting goals, noticing when they\'re stuck, building emotional vocabulary, and discovering how they think. Over time, Mentra synthesizes this into a narrative of growth that belongs to them.',
    color: 'grit-gold',
  },
];

export default function Parents() {
  return (
    <div className="min-h-screen font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hook */}
        <section className="container mx-auto max-w-4xl px-4 pt-16 sm:pt-24 pb-12 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            We'll only tap you on the shoulder<br />
            <span className="text-mentra-blue">when it actually matters.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Most education apps bury you in notifications until you learn to ignore all of it. Mentra takes the opposite approach: a quiet, clear window into your child's learning that respects your attention — and earns it back when something genuinely needs you.
          </p>
        </section>

        {/* Problem */}
        <section className="container mx-auto max-w-3xl px-4 pb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-grit-gold">
            <p className="text-gray-700 leading-relaxed">
              You download the school app, get excited for a week, then start muting the notifications. Points earned, badges unlocked, daily summaries — an avalanche of "engagement" that trains you to stop looking. Then your child actually struggles and you miss it. <strong className="text-gray-900">Mentra is designed to be quiet when things are fine and unmissable when they're not.</strong>
            </p>
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
            <h2 className="text-xl font-bold text-gray-900 mb-3">Built for Your Trust</h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
              COPPA-compliant from the ground up. Every data access is logged in an append-only audit trail. Emotional data is never exposed as raw scores. Your consent is required before any data sharing. You can request full deletion at any time.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto max-w-xl px-4 pb-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Want to see the <span className="text-mentra-blue">parent dashboard</span>?
            </h2>
            <p className="text-gray-600 mb-6">Talk to our team.</p>
            <form action="https://formspree.io/f/meokybnp" method="POST" className="space-y-3">
              <input type="text" name="name" required placeholder="Name" className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-mentra-blue focus:border-mentra-blue text-base" aria-label="Name" />
              <input type="email" name="email" required placeholder="Email" className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-mentra-blue focus:border-mentra-blue text-base" aria-label="Email" />
              <input type="hidden" name="context" value="Sent from the parents page" />
              <button type="submit" className="w-full bg-mentra-blue text-white font-semibold py-3 rounded-full hover:bg-mentra-blue/90 transition text-base">Schedule Call</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
