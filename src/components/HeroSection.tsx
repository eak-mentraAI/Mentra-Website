
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, X } from 'lucide-react';

const HeroSection = () => {
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);

  const personas = {
    students: {
      title: "For Students",
      description: "Learn to use AI better while refining timeless skills that make you a better human. Develop critical thinking, emotional intelligence, and self-awareness through guided reflection.",
      color: "growth-green"
    },
    parents: {
      title: "For Parents", 
      description: "Get meaningful insights about your child's emotional and academic growth without notification fatigue. Stay connected to their learning journey in a thoughtful way.",
      color: "grit-gold"
    },
    educators: {
      title: "For Educators",
      description: "Receive insights into students' individual needs along with an AI companion that helps reinforce the lessons you craft. Enhance your teaching with personalized student understanding.",
      color: "curiosity-coral"
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-curiosity-coral/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-grit-gold/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-growth-green/10 rounded-full blur-lg"></div>
      </div>

      {/* Interactive Persona Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <button 
          onClick={() => setSelectedPersona('students')}
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-growth-green rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 pointer-events-auto group cursor-pointer border-4 border-white/20 hover:border-white/40"
          aria-label="Learn about benefits for students"
        >
          <div className="w-full h-full bg-growth-green rounded-full animate-pulse group-hover:animate-none opacity-80 group-hover:opacity-100"></div>
        </button>
        
        <button 
          onClick={() => setSelectedPersona('parents')}
          className="absolute bottom-1/3 left-1/6 w-14 h-14 bg-grit-gold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 pointer-events-auto group cursor-pointer border-4 border-white/20 hover:border-white/40"
          aria-label="Learn about benefits for parents"
        >
          <div className="w-full h-full bg-grit-gold rounded-full animate-pulse group-hover:animate-none opacity-80 group-hover:opacity-100"></div>
        </button>
        
        <button 
          onClick={() => setSelectedPersona('educators')}
          className="absolute top-1/4 left-1/3 w-12 h-12 bg-curiosity-coral rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 pointer-events-auto group cursor-pointer border-4 border-white/20 hover:border-white/40"
          aria-label="Learn about benefits for educators"
        >
          <div className="w-full h-full bg-curiosity-coral rounded-full animate-pulse group-hover:animate-none opacity-80 group-hover:opacity-100"></div>
        </button>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Where Students{' '}
                <span className="text-mentra-blue relative">
                  Grow
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-mentra-blue to-growth-green rounded-full"></div>
                </span>{' '}
                with AI
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Meet Sprig, your AI learning companion. Together, we'll unlock your potential through personalized journaling, guided discovery, and emotional growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-mentra-blue hover:bg-mentra-blue/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:animate-glow group"
              >
                Meet Sprig
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-mentra-blue text-mentra-blue hover:bg-mentra-blue hover:text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 group"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-growth-green rounded-full"></div>
                <span>Safe & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-grit-gold rounded-full"></div>
                <span>Educator Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-curiosity-coral rounded-full"></div>
                <span>Transformative</span>
              </div>
            </div>
          </div>

          {/* Right Content - Sprig Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Sprig Character */}
              <img 
                src="/lovable-uploads/060630a8-ed64-4d31-8e7b-c1c12d2b6e6e.png" 
                alt="Sprig with lightbulb idea" 
                className="w-80 h-80 lg:w-96 lg:h-96 animate-float drop-shadow-2xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 animate-bounce-gentle">
                <div className="w-6 h-6 bg-grit-gold rounded-full opacity-80"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 animate-bounce-gentle" style={{animationDelay: '1s'}}>
                <div className="w-4 h-4 bg-curiosity-coral rounded-full opacity-60"></div>
              </div>
              <div className="absolute top-1/4 -left-8 animate-bounce-gentle" style={{animationDelay: '2s'}}>
                <div className="w-3 h-3 bg-growth-green rounded-full opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Persona Modal */}
      {selectedPersona && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 relative animate-scale-in">
            <button 
              onClick={() => setSelectedPersona(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 bg-${personas[selectedPersona as keyof typeof personas].color} rounded-full`}></div>
                <h3 className="text-xl font-bold text-gray-900">
                  {personas[selectedPersona as keyof typeof personas].title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {personas[selectedPersona as keyof typeof personas].description}
              </p>
              <Button 
                onClick={() => setSelectedPersona(null)}
                className="w-full bg-mentra-blue hover:bg-mentra-blue/90 text-white"
              >
                Got it!
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-mentra-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-mentra-blue rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
