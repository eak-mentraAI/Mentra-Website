import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

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

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-mentra-blue">Sprig</span>{' '}
            in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how Sprig adapts to different learning moments, providing personalized support for every step of your educational journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sprigStories.map((story, index) => (
            <Card 
              key={story.title}
              className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-${story.bgColor} hover:scale-105 cursor-pointer overflow-hidden`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative p-8 pb-4">
                  <div className="flex justify-center">
                    <img 
                      src={story.image}
                      alt={story.title}
                      className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                </div>

                {/* Content Section */}
                <div className="p-8 pt-4 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-current transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {story.description}
                  </p>
                  
                  {/* Progress Indicator */}
                  <div className="pt-4">
                    <div className={`w-full h-1 bg-gray-200 rounded-full overflow-hidden`}>
                      <div 
                        className={`h-full bg-${story.accentColor} rounded-full transition-all duration-1000 group-hover:w-full`}
                        style={{width: '30%'}}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SprigActionSection;
