
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Heart, Brain, Star } from 'lucide-react';

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
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How{' '}
            <span className="text-mentra-blue">Sprig</span>{' '}
            Helps You Grow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the features that make learning with Mentra a transformative experience for students, parents, and educators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className={`group hover:shadow-2xl transition-all duration-300 border-0 bg-${feature.bgColor} hover:scale-105 cursor-pointer`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 text-center space-y-6">
                <div className={`w-16 h-16 mx-auto bg-${feature.color}/20 rounded-2xl flex items-center justify-center group-hover:animate-bounce-gentle`}>
                  <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-full h-1 bg-gradient-to-r from-${feature.color} to-${feature.color}/50 rounded-full`}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-journal-sand rounded-full px-6 py-3">
            <img 
              src="/lovable-uploads/13ee0557-7701-4480-8818-ad3335de97fd.png" 
              alt="Sprig" 
              className="w-8 h-8 object-contain animate-bounce-gentle"
            />
            <span className="text-gray-700 font-medium">Ready to start your growth journey?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
