import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const SprigActionSection = () => {
  const sprigStories = [
    {
      image: "/lovable-uploads/060630a8-ed64-4d31-8e7b-c1c12d2b6e6e.png",
      title: "Eureka Moments",
      description: "When understanding clicks, Sprig celebrates your breakthrough with encouraging insights and next-step guidance.",
      bgColor: "grit-gold/10",
      accentColor: "grit-gold"
    },
    {
      image: "/lovable-uploads/cedb8c52-6559-4531-87f6-39ad0937d397.png",
      title: "Achievement Unlocked",
      description: "Every milestone matters. Sprig helps you recognize progress and builds confidence for bigger challenges ahead.",
      bgColor: "curiosity-coral/10",
      accentColor: "curiosity-coral"
    },
    {
      image: "/lovable-uploads/ee369d68-1572-409b-ba14-676fe8d3ca36.png",
      title: "Thoughtful Reflection",
      description: "Dive deep into learning through guided journaling that connects emotions with academic growth.",
      bgColor: "mentra-blue/10",
      accentColor: "mentra-blue"
    },
    {
      image: "/lovable-uploads/MENTRA_SPRIG_HEART.png",
      title: "Gentle Encouragement",
      description: "On challenging days, Sprig provides emotional support and adaptive learning strategies.",
      bgColor: "growth-green/10",
      accentColor: "growth-green"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [emblaApi, setEmblaApi] = useState<any>(null);

  const accentGradientMap: Record<string, string> = {
    'mentra-blue': 'from-mentra-blue to-mentra-blue/50',
    'curiosity-coral': 'from-curiosity-coral to-curiosity-coral/50',
    'growth-green': 'from-growth-green to-growth-green/50',
    'grit-gold': 'from-grit-gold to-grit-gold/50',
  };

  // Sync current index with Embla carousel
  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sprig in <span className="text-mentra-blue">Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how Sprig adapts to different learning moments, providing personalized support for every step of your educational journey.
          </p>
        </div>

        <Carousel 
          className="w-full max-w-6xl mx-auto px-2 md:px-4" 
          setApi={setEmblaApi}
          aria-label="Sprig in Action carousel"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {sprigStories.map((story, index) => (
              <CarouselItem 
                key={story.title}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2 xl:basis-1/4 overflow-visible"
              >
                <Card
                  className={`group transition-all duration-300 border-0 bg-${story.bgColor} cursor-pointer h-full hover:shadow-2xl xl:hover:shadow-3xl focus-within:ring-2 focus-within:ring-mentra-blue focus-within:ring-offset-2`}
                  tabIndex={0}
                  role="button"
                  aria-label={`See more about ${story.title}`}
                >
                  <CardContent className="p-4 sm:p-8 text-center space-y-6 h-full flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className={`w-24 h-24 mx-auto bg-${story.accentColor}/20 rounded-2xl flex items-center justify-center`}>
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">
                          {story.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {story.description}
                        </p>
                      </div>
                    </div>
                    {/* Always show gradient line for all cards */}
                    <div className="mt-6">
                      <div className={`w-full h-1 bg-gradient-to-r ${accentGradientMap[story.accentColor] || 'from-mentra-blue to-mentra-blue/50'} rounded-full`}></div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious 
            className="flex items-center justify-center w-12 h-12 text-2xl md:w-14 md:h-14 xl:w-16 xl:h-16 bg-white/80 hover:bg-white shadow-lg border border-gray-200 rounded-full absolute left-0 top-1/2 -translate-y-1/2 z-10 transition-all duration-200 focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2" 
            aria-label="Previous Sprig story"
          />
          <CarouselNext 
            className="flex items-center justify-center w-12 h-12 text-2xl md:w-14 md:h-14 xl:w-16 xl:h-16 bg-white/80 hover:bg-white shadow-lg border border-gray-200 rounded-full absolute right-0 top-1/2 -translate-y-1/2 z-10 transition-all duration-200 focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2" 
            aria-label="Next Sprig story"
          />
        </Carousel>

        {/* Dots indicator for mobile */}
        <div 
          className="flex justify-center mt-4 md:hidden"
          role="tablist"
          aria-label="Sprig in Action navigation"
        >
          {sprigStories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              className={`mx-1 w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2 ${
                current === idx ? 'bg-mentra-blue' : 'bg-gray-300'
              }`}
              role="tab"
              aria-selected={current === idx}
              aria-label={`Go to Sprig story ${idx + 1} of ${sprigStories.length}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SprigActionSection;
