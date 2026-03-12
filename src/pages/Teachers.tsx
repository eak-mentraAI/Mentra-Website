import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Eye, Clock, BarChart3, Brain, Shield, Sparkles, FileText } from 'lucide-react';

const blurbs = [
  {
    icon: Eye,
    title: 'Know Who Needs You First',
    text: 'The Intelligence Hub ranks students by who needs attention right now — based on engagement trends, struggle signals, and confidence shifts. Each comes with a recommended action.',
    color: 'mentra-blue',
  },
  {
    icon: Clock,
    title: 'A Weekly Digest That Saves Time',
    text: 'Every Monday: who needs attention, who had breakthroughs, class-wide patterns, and what changed. Four sections, severity-coded, two minutes to read.',
    color: 'curiosity-coral',
  },
  {
    icon: BarChart3,
    title: 'Watch Assignments Unfold Live',
    text: 'See completion progress, help requests, idle students, and struggle patterns in real time. Push scaffolding, pause for discussion, or share exemplars — all without leaving the screen.',
    color: 'growth-green',
  },
  {
    icon: Brain,
    title: 'See What They Think They Know',
    text: 'A living concept map shows where mastery is strong, fragile, or forming misconceptions. Class-wide alerts tell you when multiple students share the same confusion.',
    color: 'grit-gold',
  },
  {
    icon: Shield,
    title: 'AI Under Your Control',
    text: 'Every AI adaptation is visible with a clear explanation. Disagree? Override it. Your professional judgment always wins. There is no black box.',
    color: 'wisdom-purple',
  },
  {
    icon: Sparkles,
    title: 'Spot the Quiet Ones',
    text: 'Detects isolation patterns, collaboration gaps, and engagement decline. You see learning patterns, not clinical labels — and act before students disconnect.',
    color: 'curiosity-coral',
  },
  {
    icon: FileText,
    title: 'Grading That Doesn\'t Eat Your Evenings',
    text: 'AI-assisted rubric scoring generates draft feedback. You review, edit, approve. Spend time on meaningful conversations, not writing the same margin note for the 20th time.',
    color: 'growth-green',
  },
];

export default function Teachers() {
  return (
    <div className="min-h-screen font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hook */}
        <section className="container mx-auto max-w-4xl px-4 pt-16 sm:pt-24 pb-12 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            See every student clearly.<br />
            <span className="text-mentra-blue">Reach them before they fall behind.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            You have 30 kids and one set of eyes. Mentra gives you a second set — one that watches learning patterns across every student, every assignment, and every interaction, and surfaces exactly who needs you and why.
          </p>
        </section>

        {/* Problem */}
        <section className="container mx-auto max-w-3xl px-4 pb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-mentra-blue">
            <p className="text-gray-700 leading-relaxed">
              You know something is off with a student days before the data confirms it — but by then, you've lost the moment. The "data-driven" tools show dashboards full of numbers but nothing you can act on. <strong className="text-gray-900">Mentra puts actionable intelligence in your hands — not more dashboards to stare at.</strong>
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

        {/* Trust Bar */}
        <section className="container mx-auto max-w-3xl px-4 pb-16">
          <div className="bg-journal-sand/50 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Data You Can Trust</h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
              Every metric uses qualitative bands (Emerging, Developing, Proficient, Mastered) — never raw scores. Emotional data is shown only as trends, never labeled. Every access is FERPA-audited automatically.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto max-w-xl px-4 pb-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Ready to see your <span className="text-mentra-blue">classroom clearly</span>?
            </h2>
            <p className="text-gray-600 mb-6">Schedule a call with our team.</p>
            <form action="https://formspree.io/f/meokybnp" method="POST" className="space-y-3">
              <input type="text" name="name" required placeholder="Name" className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-mentra-blue focus:border-mentra-blue text-base" aria-label="Name" />
              <input type="email" name="email" required placeholder="Email" className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-mentra-blue focus:border-mentra-blue text-base" aria-label="Email" />
              <input type="hidden" name="context" value="Sent from the teachers page" />
              <button type="submit" className="w-full bg-mentra-blue text-white font-semibold py-3 rounded-full hover:bg-mentra-blue/90 transition text-base">Schedule Call</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
