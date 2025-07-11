import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { BookOpen, Heart, Brain, Star, Users, Wrench, Target, Map, Compass } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Interactive Journaling',
      description: 'Express thoughts and feelings through guided prompts that adapt to your emotional state and learning journey.',
      color: 'mentra-blue',
      bgColor: 'mentra-blue/10'
    },
    {
      icon: Heart,
      title: 'Emotional Insights',
      description: 'Develop emotional intelligence with AI-powered feedback that helps you understand and process your feelings.',
      color: 'curiosity-coral',
      bgColor: 'curiosity-coral/10'
    },
    {
      icon: Brain,
      title: 'Guided Learning',
      description: 'Personalized learning paths that adjust to your pace, interests, and emotional readiness for new concepts.',
      color: 'growth-green',
      bgColor: 'growth-green/10'
    },
    {
      icon: Star,
      title: 'Growth Tracking',
      description: 'Celebrate your progress with meaningful milestones that recognize both academic and emotional development.',
      color: 'grit-gold',
      bgColor: 'grit-gold/10'
    },
    {
      icon: Users,
      title: 'AI-Guided Assignments',
      description: 'Teacher-issued and AI-guided assignments that adapt to your learning style while maintaining pedagogical rigor.',
      color: 'mentra-blue',
      bgColor: 'mentra-blue/10'
    },
    {
      icon: Wrench,
      title: 'Agent Workbench',
      description: 'Learn to orchestrate AI agents to accomplish complex tasks, building comfort with next-generation knowledge work.',
      color: 'growth-green',
      bgColor: 'growth-green/10'
    },
    {
      icon: Target,
      title: 'Prompt Engineering Lab',
      description: 'Practice with AI challenges and receive personalized scoring and feedback to improve your prompt crafting skills.',
      color: 'curiosity-coral',
      bgColor: 'curiosity-coral/10'
    },
    {
      icon: Map,
      title: 'Learner Passport',
      description: 'A comprehensive graph of your learning trends that can be exported as a personal AI assistant when you graduate.',
      color: 'grit-gold',
      bgColor: 'grit-gold/10'
    },
    {
      icon: Compass,
      title: 'Open Exploration',
      description: 'Safely explore ideas and concepts in a pedagogically grounded sandbox environment designed for discovery.',
      color: 'mentra-blue',
      bgColor: 'mentra-blue/10'
    }
  ];

  const [current, setCurrent] = useState(0);
  const [emblaApi, setEmblaApi] = useState<any>(null);

  // Sync current index with Embla carousel
  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <section 
      id="features" 
      className="py-20 bg-white"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            id="features-heading"
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            How{' '}
            <span className="text-mentra-blue">Sprig</span>{' '}
            Helps You Grow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the features that make learning with Mentra a transformative experience for students, parents, and educators.
          </p>
        </div>

        <Carousel 
          className="w-full max-w-6xl mx-auto" 
          setApi={setEmblaApi}
          aria-label="Features carousel"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {features.map((feature, index) => (
              <CarouselItem 
                key={feature.title} 
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Card 
                  className={`group transition-all duration-300 border-0 bg-${feature.bgColor} cursor-pointer h-full 
                    hover:shadow-2xl hover:scale-105 hover:z-10 
                    xl:hover:shadow-3xl xl:hover:scale-110 focus-within:ring-2 focus-within:ring-mentra-blue focus-within:ring-offset-2`}
                  tabIndex={0}
                  role="button"
                  aria-label={`Learn more about ${feature.title}`}
                >
                  <CardContent className="p-4 sm:p-8 text-center space-y-6 h-full flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className={`w-16 h-16 mx-auto bg-${feature.color}/20 rounded-2xl flex items-center justify-center`}>
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

                    {/* Hover Effect */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`w-full h-1 bg-gradient-to-r from-${feature.color} to-${feature.color}/50 rounded-full`}></div>
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
