import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { BookOpen, Heart, Star, Sparkles, Shield, FileText, Users, BarChart3, Trophy, Settings2, ShieldCheck } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';

const demoFeatures = [
  {
    icon: Trophy,
    color: "mentra-blue",
    bgColor: "mentra-blue/10",
    title: "Motivating Dashboards",
    description: "Motivates students by challenging them and celebrating their accomplishments.",
  },
  {
    icon: Heart,
    color: "mentra-blue",
    bgColor: "mentra-blue/10",
    title: "Emotional Growth",
    description: "Personalized journaling for emotional growth.",
  },
  {
    icon: Settings2,
    color: "mentra-blue",
    bgColor: "mentra-blue/10",
    title: "AI Skills Mastery",
    description: "Grow new AI-specific skills like agent orchestration and prompt engineering.",
  },
  {
    icon: Sparkles,
    color: "mentra-blue",
    bgColor: "mentra-blue/10",
    title: "AI Feedback",
    description: "AI trained in pedagogical frameworks to foster true growth.",
  },
  {
    icon: ShieldCheck,
    color: "mentra-blue",
    bgColor: "mentra-blue/10",
    title: "Curated Learning",
    description: "A safe and innovative architecture that supports individualized learning for each student.",
  },
  {
    icon: Users,
    color: "mentra-blue",
    bgColor: "mentra-blue/10",
    title: "Educational Insights",
    description: "Curated experiences for educators and parents to deliver improved outcomes and support their children/students.",
  },
];

const flywheel = [
  {
    icon: BookOpen,
    title: "Reflective Engagement",
    color: "mentra-blue",
    bgColor: "mentra-blue/10",
    description: "Students actively reflect on their learning, emotions, and progress through guided prompts and journaling."
  },
  {
    icon: FileText,
    title: "AI Summarization",
    color: "curiosity-coral",
    bgColor: "curiosity-coral/10",
    description: "Mentra's AI distills student input into meaningful summaries, highlighting key insights and growth areas."
  },
  {
    icon: Sparkles,
    title: "Insight Delivery",
    color: "growth-green",
    bgColor: "growth-green/10",
    description: "Personalized insights and feedback are delivered to help students understand themselves and their learning journey."
  },
  {
    icon: Users,
    title: "Responsive Support",
    color: "grit-gold",
    bgColor: "grit-gold/10",
    description: "AI, parents, and educators provide timely support and encouragement tailored to each student's needs."
  },
  {
    icon: BarChart3,
    title: "Student Growth",
    color: "mentra-blue",
    bgColor: "mentra-blue/10",
    description: "Students experience measurable growth, building confidence and skills for future challenges."
  },
];

export default function HowItWorks() {
  const [current, setCurrent] = useState(0);
  const [emblaApi, setEmblaApi] = useState<any>(null);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <div className="min-h-screen font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center py-12 px-4">
        <section className="container mx-auto px-4 flex flex-col items-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
            See Mentra <span className="text-mentra-blue">in Action</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
            Watch how students thrive with Mentra's AI-powered, human-centered learning experience.
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

          {/* What You'll See in the Demo */}
          <div className="mb-12 w-full container mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
              What <span className="text-mentra-blue">You'll See</span> in the Demo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {demoFeatures.map((feature) => (
                <div className="flex flex-col items-center text-center" key={feature.title}>
                  <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-${feature.bgColor} mb-4`}>
                    <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                  </div>
                  <div className="font-bold text-lg text-gray-900 mb-2">{feature.title}</div>
                  <div className="text-gray-600 text-sm">{feature.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* The Mentra Flywheel of Growth */}
          <section className="container mx-auto px-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
              The Mentra Flywheel of <span className="text-mentra-blue">Growth</span>
            </h2>
            <Carousel className="w-full max-w-6xl mx-auto" setApi={setEmblaApi} aria-label="Flywheel carousel" opts={{ loop: true }}>
              <CarouselContent className="-ml-2 md:-ml-4">
                {flywheel.map((step, index) => (
                  <CarouselItem
                    key={step.title}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <Card
                      className={`group transition-all duration-300 border-0 bg-${step.bgColor} h-full shadow-lg xl:hover:shadow-3xl focus-within:ring-2 focus-within:ring-mentra-blue focus-within:ring-offset-2`}
                    >
                      <CardContent className="p-4 sm:p-8 text-center space-y-6 h-full flex flex-col justify-between">
                        <div className="space-y-6">
                          <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center bg-${step.color}/20`}>
                            <span className={`w-12 h-12 flex items-center justify-center rounded-full bg-${step.color} text-white text-2xl font-bold shadow-lg`} aria-label={`Step ${index + 1}`}>{index + 1}</span>
                          </div>
                          <div className="space-y-3">
                            <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
            {/* Dots indicator for mobile */}
            <div className="flex justify-center mt-4 md:hidden" role="tablist" aria-label="Flywheel navigation">
              {flywheel.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => emblaApi?.scrollTo(idx)}
                  className={`mx-1 w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2 ${
                    current === idx ? 'bg-mentra-blue' : 'bg-gray-300'
                  }`}
                  role="tab"
                  aria-selected={current === idx}
                  aria-label={`Go to flywheel step ${idx + 1} of ${flywheel.length}`}
                />
              ))}
            </div>
          </section>

          <blockquote className="italic text-center text-mentra-blue mb-8 max-w-2xl mx-auto">
            "Mentra helps me understand myself and learn in a way that feels fun and real."<br />
            <span className="text-sm text-gray-500">— 7th Grade Student</span>
          </blockquote>
          <div className="flex justify-center">
            <Button size="lg" className="bg-mentra-blue text-white px-8 py-4 rounded-full font-bold shadow hover:bg-mentra-blue/90 transition" asChild>
              <a href="/signup">Start Your Journey</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 