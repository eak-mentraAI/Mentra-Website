import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { BookOpen, Heart, Star, Sparkles, Shield, FileText, Users, BarChart3, Trophy, Settings2, ShieldCheck } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ScrollTimeline from '@/components/sections/ScrollTimeline';
import PageTransition from '@/components/layout/PageTransition';

const demoFeatures = [
  {
    icon: Trophy,
    color: "mentra-blue",
    bgColor: "mentra-blue/10",
    title: "Personalized Dashboards",
    description: "See how students track their progress with motivating challenges and celebrations.",
  },
  {
    icon: Heart,
    color: "curiosity-coral",
    bgColor: "curiosity-coral/10",
    title: "Emotional Intelligence",
    description: "Watch guided journaling that builds self-awareness and emotional growth.",
  },
  {
    icon: Settings2,
    color: "growth-green",
    bgColor: "growth-green/10",
    title: "AI Skills Development",
    description: "See students master agent orchestration and prompt engineering skills.",
  },
  {
    icon: Sparkles,
    color: "grit-gold",
    bgColor: "grit-gold/10",
    title: "Pedagogical AI",
    description: "Watch AI trained in educational frameworks guide deeper understanding.",
  },
  {
    icon: ShieldCheck,
    color: "wisdom-purple",
    bgColor: "wisdom-purple/10",
    title: "Safe Learning Environment",
    description: "See how our architecture supports individualized learning safely.",
  },
  {
    icon: Users,
    color: "mentra-blue",
    bgColor: "mentra-blue/10",
    title: "Educator Insights",
    description: "Watch how teachers and parents get meaningful insights to support growth.",
  },
];

const flywheel = [
  {
    number: 1,
    icon: BookOpen,
    title: "Reflective Engagement",
    color: "mentra-blue",
    description: "Students reflect on learning, emotions, and progress through guided prompts. Each interaction builds self-awareness and helps Mentra understand where they are in their learning journey.",
  },
  {
    number: 2,
    icon: FileText,
    title: "AI Summarization",
    color: "curiosity-coral",
    description: "AI distills student input into meaningful insights and growth areas. Patterns emerge across sessions — what's working, where struggle is productive, and where support is needed.",
  },
  {
    number: 3,
    icon: Sparkles,
    title: "Insight Delivery",
    color: "growth-green",
    description: "Personalized insights help students understand their learning journey. Teachers see classroom-wide patterns. Parents get clear, actionable updates — not data dumps.",
  },
  {
    number: 4,
    icon: Users,
    title: "Responsive Support",
    color: "grit-gold",
    description: "AI, parents, and educators provide timely, tailored support. Scaffolding adapts in real time. Interventions are suggested before students fall behind.",
  },
  {
    number: 5,
    icon: BarChart3,
    title: "Student Growth",
    color: "wisdom-purple",
    description: "Students build confidence and skills for future challenges. The cycle repeats — each loop strengthens understanding, metacognition, and intrinsic motivation.",
  },
];

export default function HowItWorks() {
  return (
    <PageTransition>
    <div className="min-h-screen font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center py-12 px-4">
        <section className="container mx-auto px-4 flex flex-col items-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center text-balance">
            See Mentra <span className="bg-gradient-to-r from-mentra-blue to-growth-green bg-clip-text text-transparent">Transform</span> Learning
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
            Watch how students thrive with AI-powered, human-centered learning that builds lasting growth.
          </p>
          <div className="aspect-video w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-gray-200 mb-8">
            <iframe
              src="https://www.youtube.com/embed/CWTHgahgStQ"
              title="Mentra Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-2xl"
            ></iframe>
          </div>

          {/* What You'll Discover */}
          <AnimateOnScroll>
            <div className="mb-12 w-full container mx-auto px-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center text-balance">
                What <span className="text-mentra-blue">You'll Discover</span> in the Demo
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {demoFeatures.map((feature, i) => (
                  <AnimateOnScroll key={feature.title} delay={i * 100}>
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-${feature.bgColor} mb-4`}>
                        <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                      </div>
                      <div className="font-bold text-lg text-gray-900 mb-2">{feature.title}</div>
                      <div className="text-gray-600 text-sm">{feature.description}</div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* The Mentra Flywheel of Growth — Scroll Timeline */}
          <section className="w-full container mx-auto px-4 mb-16">
            <AnimateOnScroll>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center text-balance">
                The Mentra Flywheel of <span className="bg-gradient-to-r from-mentra-blue to-wisdom-purple bg-clip-text text-transparent">Growth</span>
              </h2>
            </AnimateOnScroll>
            <ScrollTimeline steps={flywheel} />
          </section>

          <AnimateOnScroll>
            <blockquote className="italic text-center text-mentra-blue mb-8 max-w-2xl mx-auto">
              "Mentra helps me understand myself and learn in a way that feels fun and real."<br />
              <span className="text-sm text-gray-500">— 7th Grade Student</span>
            </blockquote>
            <div className="flex justify-center">
              <Button size="lg" className="bg-gradient-to-r from-mentra-blue to-mentra-blue/85 text-white px-8 py-4 rounded-full font-bold shadow hover:shadow-lg hover:shadow-mentra-blue/25 active:scale-[0.98] transition-all duration-200" asChild>
                <Link to="/pricing">Start Your Journey</Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </section>
      </main>
      <Footer />
    </div>
    </PageTransition>
  );
}
