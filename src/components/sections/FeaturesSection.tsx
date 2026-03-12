import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { BookOpen, Heart, Brain, Star, Users, Wrench, Target, Map, Compass } from 'lucide-react';
import type { CarouselApi } from '@/components/ui/carousel';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const colorGradientMap: Record<string, string> = {
  'mentra-blue': 'from-mentra-blue to-mentra-blue/50',
  'curiosity-coral': 'from-curiosity-coral to-curiosity-coral/50',
  'growth-green': 'from-growth-green to-growth-green/50',
  'grit-gold': 'from-grit-gold to-grit-gold/50',
  'wisdom-purple': 'from-wisdom-purple to-wisdom-purple/50',
};

const colorPattern = [
  { color: 'mentra-blue', bgColor: 'mentra-blue/10' },
  { color: 'curiosity-coral', bgColor: 'curiosity-coral/10' },
  { color: 'growth-green', bgColor: 'growth-green/10' },
  { color: 'grit-gold', bgColor: 'grit-gold/10' },
  { color: 'wisdom-purple', bgColor: 'wisdom-purple/10' },
];

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Interactive Journaling',
      description: 'Guided prompts that adapt to how you think and feel.',
    },
    {
      icon: Heart,
      title: 'Emotional Intelligence',
      description: 'AI feedback that helps you understand and process emotions.',
    },
    {
      icon: Brain,
      title: 'Personalized Learning Paths',
      description: 'Journeys that adjust to your pace and readiness.',
    },
    {
      icon: Star,
      title: 'Meaningful Milestones',
      description: 'Progress tracking for academic and emotional growth.',
    },
    {
      icon: Users,
      title: 'Adaptive Assignments',
      description: 'Tasks that match your learning style and push you forward.',
    },
    {
      icon: Wrench,
      title: 'Agent Workbench',
      description: 'Orchestrate AI agents and build future-ready skills.',
    },
    {
      icon: Target,
      title: 'Prompt Engineering Lab',
      description: 'Practice crafting prompts with real-time AI feedback.',
    },
    {
      icon: Map,
      title: 'Learner Passport',
      description: 'A portable record of your skills, growth, and learning trends.',
    },
    {
      icon: Compass,
      title: 'Safe Exploration Sandbox',
      description: 'Freely explore ideas in a guided, safe environment.',
    },
  ].map((feature, i) => ({
    ...feature,
    color: colorPattern[i % colorPattern.length].color,
    bgColor: colorPattern[i % colorPattern.length].bgColor,
  }));

  const [current, setCurrent] = useState(0);
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);

  // Sync current index with Embla carousel
  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section 
      id="features" 
      className="py-20 bg-white"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
        <div className="text-center mb-16">
          <h2
            id="features-heading"
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance"
          >
            How Sprig Helps You <span className="text-mentra-blue">Grow</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tools that make learning personal, meaningful, and future-ready.
          </p>
        </div>
        </AnimateOnScroll>

        <Carousel 
          className="w-full max-w-6xl mx-auto px-2 md:px-4" 
          setApi={setEmblaApi}
          aria-label="Features carousel"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {features.map((feature, index) => (
              <CarouselItem 
                key={feature.title}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 overflow-visible"
              >
                <Card
                  className={`group transition-all duration-300 border-0 bg-${feature.bgColor} cursor-pointer h-full
                    hover:shadow-2xl hover:-translate-y-1
                    xl:hover:shadow-3xl`}
                  tabIndex={0}
                  role="button"
                  aria-label={`Learn more about ${feature.title}`}
                >
                  <CardContent className="p-4 sm:p-8 text-center space-y-6 h-full flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className={`w-16 h-16 mx-auto bg-${feature.color}/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon 
                          className={`w-8 h-8 text-${feature.color}`} 
                          aria-hidden="true"
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Show gradient line only on hover (desktop) or selected (mobile) */}
                    <div
                      className={`mt-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${current === index ? 'md:opacity-0 opacity-100' : 'md:opacity-0 opacity-0'}`}
                    >
                      <div className={`w-full h-1 bg-gradient-to-r ${colorGradientMap[feature.color] || 'from-mentra-blue to-mentra-blue/50'} rounded-full`}></div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious 
            className="flex items-center justify-center w-12 h-12 text-2xl md:w-14 md:h-14 xl:w-16 xl:h-16 bg-white/80 hover:bg-white shadow-lg border border-gray-200 rounded-full absolute left-0 top-1/2 -translate-y-1/2 z-10 transition-all duration-200 focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2" 
            aria-label="Previous features"
          />
          <CarouselNext 
            className="flex items-center justify-center w-12 h-12 text-2xl md:w-14 md:h-14 xl:w-16 xl:h-16 bg-white/80 hover:bg-white shadow-lg border border-gray-200 rounded-full absolute right-0 top-1/2 -translate-y-1/2 z-10 transition-all duration-200 focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2" 
            aria-label="Next features"
          />
        </Carousel>

        {/* Dots indicator for mobile */}
        <div 
          className="flex justify-center mt-4 md:hidden"
          role="tablist"
          aria-label="Feature navigation"
        >
          {features.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              className={`mx-1 w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2 ${
                current === idx ? 'bg-mentra-blue' : 'bg-gray-300'
              }`}
              role="tab"
              aria-selected={current === idx}
              aria-label={`Go to feature ${idx + 1} of ${features.length}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
