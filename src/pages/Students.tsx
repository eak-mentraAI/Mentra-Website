import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Sparkles, Brain, LifeBuoy, Code, BarChart3, Trophy, BookOpen } from 'lucide-react';

const blurbs = [
  {
    icon: Sparkles,
    title: 'Explore What Makes You Curious',
    text: 'Every day, Mentra gives you "Sparks" — interesting questions chosen from what you\'ve been curious about. Follow one down the rabbit hole. No grade attached, no right answer — just discovery.',
    color: 'grit-gold',
  },
  {
    icon: Brain,
    title: 'A Tutor That Gets Your Pace',
    text: 'Mentra doesn\'t hand you answers. It asks you questions back and adjusts how hard it pushes. Crushing it? Questions get harder. Stuck? It slows down and meets you where you are.',
    color: 'mentra-blue',
  },
  {
    icon: LifeBuoy,
    title: 'Real Help When You\'re Stuck',
    text: 'If you\'ve been staring at a problem or retrying without progress, Mentra steps in — a gentle nudge, a new way to think about it, or a full coaching session. Help that\'s designed for this problem, at this moment, for how you learn.',
    color: 'curiosity-coral',
  },
  {
    icon: Code,
    title: 'Code, Build, and Create',
    text: 'Write real code, run it, debug it — with an AI mentor beside you. Learn to plan, break down, build, and review like a real developer. Not just syntax — systematic thinking.',
    color: 'growth-green',
  },
  {
    icon: BarChart3,
    title: 'More Than a Number',
    text: 'Mentra tracks how you solve problems, where your confidence is building, what thinking comes naturally, and where you\'re stretching. Over time, it builds a Learner Passport — a picture of who you are as a learner.',
    color: 'wisdom-purple',
  },
  {
    icon: Trophy,
    title: 'Earn XP, Unlock Sprigs',
    text: 'Every meaningful action earns XP — exploring topics, reflecting in your journal, coaching yourself through hard problems. Level up, unlock collectible Sprigs, and see where you stand. Effort and growth rewarded, not just right answers.',
    color: 'grit-gold',
  },
  {
    icon: BookOpen,
    title: 'Reflect and Watch Yourself Grow',
    text: 'Journaling, mood check-ins, and goal-setting built in. Notice your own patterns — when you work best, what throws you off, where you\'re improving. Set goals that actually stick.',
    color: 'mentra-blue',
  },
];

export default function Students() {
  return (
    <div className="min-h-screen font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hook */}
        <section className="container mx-auto max-w-4xl px-4 pt-16 sm:pt-24 pb-12 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Learning that actually <span className="text-mentra-blue">gets you</span>.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Most ed-tech feels like a textbook pasted into a screen. Mentra watches how you think, adapts to your pace, and meets you exactly where you are — not where a curriculum guide says you should be.
          </p>
        </section>

        {/* Problem */}
        <section className="container mx-auto max-w-3xl px-4 pb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-grit-gold">
            <p className="text-gray-700 leading-relaxed">
              You've been handed the same lesson as every other kid in the room. When you're stuck, you get a hint that doesn't help. When you're flying, nobody notices. <strong className="text-gray-900">Mentra changes that. Every experience adapts to you. Not your class. Not your grade level. You.</strong>
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

        {/* Bigger Picture */}
        <section className="container mx-auto max-w-3xl px-4 pb-16">
          <div className="bg-mentra-blue/5 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">This Isn't About Getting Through School</h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
              You're becoming someone who knows how to think through hard problems, direct your own learning, and understand how your mind works. That's not something a GPA captures. But it's what actually matters.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto max-w-xl px-4 pb-20 text-center">
          <Button
            size="lg"
            className="bg-mentra-blue hover:bg-mentra-blue/90 text-white px-8 py-4 rounded-full font-medium text-lg shadow-xl hover:shadow-2xl"
            asChild
          >
            <Link to="/pricing">Start Your Journey</Link>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
