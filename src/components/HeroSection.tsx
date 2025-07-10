
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, X } from 'lucide-react';

const HeroSection = () => {
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);

  const personas = {
    students: {
      title: "For Students",
      description: "Learn to work with AI while strengthening the timeless skills that make you uniquely human—critical thinking, creativity, resilience, and ethical reasoning. Mentra helps you explore ideas, reflect deeply, and build real-world problem-solving abilities.",
      color: "growth-green"
    },
    parents: {
      title: "For Parents", 
      description: "Get meaningful insights about your child's learning journey without the overwhelm. Mentra provides thoughtful visibility into both academic progress and character development—helping you support their growth with confidence and peace of mind.",
      color: "grit-gold"
    },
    educators: {
      title: "For Educators",
      description: "Empower your teaching with AI that reinforces your pedagogy, not replaces it. Get actionable insights into each student's needs and a co-pilot that helps you differentiate instruction while keeping human connection at the center.",
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

      {/* Interactive Persona Dots - Made more pronounced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <button 
          onClick={() => setSelectedPersona('students')}
          className="absolute top-1/3 right-1/4 w-20 h-20 bg-growth-green rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-125 pointer-events-auto group cursor-pointer border-4 border-white/40 hover:border-white/60"
          aria-label="Learn about benefits for students"
        >
          <div className="w-full h-full bg-growth-green rounded-full group-hover:animate-none opacity-90 group-hover:opacity-100 flex items-center justify-center">
            <span className="text-white font-bold text-xs">Students</span>
          </div>
        </button>
        
        <button 
          onClick={() => setSelectedPersona('parents')}
          className="absolute bottom-1/3 left-1/6 w-18 h-18 bg-grit-gold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-125 pointer-events-auto group cursor-pointer border-4 border-white/40 hover:border-white/60"
          aria-label="Learn about benefits for parents"
          style={{animationDelay: '1s'}}
        >
          <div className="w-full h-full bg-grit-gold rounded-full group-hover:animate-none opacity-90 group-hover:opacity-100 flex items-center justify-center">
            <span className="text-white font-bold text-xs">Parents</span>
          </div>
        </button>
        
        <button 
          onClick={() => setSelectedPersona('educators')}
          className="absolute top-1/4 left-1/3 w-16 h-16 bg-curiosity-coral rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-125 pointer-events-auto group cursor-pointer border-4 border-white/40 hover:border-white/60"
          aria-label="Learn about benefits for educators"
          style={{animationDelay: '2s'}}
        >
          <div className="w-full h-full bg-curiosity-coral rounded-full group-hover:animate-none opacity-90 group-hover:opacity-100 flex items-center justify-center">
            <span className="text-white font-bold text-xs">Teachers</span>
          </div>
        </button>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Enhanced copy */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Where Students{' '}
                <span className="text-mentra-blue relative">
                  Thrive
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-mentra-blue to-growth-green rounded-full"></div>
                </span>{' '}
                with AI
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Meet Sprig, your AI learning companion designed by educators, built for students, and trusted by parents. 
                Together, we'll strengthen the timeless skills that make you uniquely human while mastering AI as a powerful learning tool.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                This isn't just another AI tool—it's pedagogically grounded, emotionally intelligent, and designed to empower rather than replace human thinking.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-mentra-blue hover:bg-mentra-blue/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:animate-glow group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-mentra-blue text-mentra-blue hover:bg-mentra-blue hover:text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 group"
              >
                <Play className="mr-2 h-5 w-5" />
                See How It Works
              </Button>
            </div>

            {/* Trust Indicators - Enhanced */}
            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-growth-green rounded-full"></div>
                <span className="font-medium">Privacy-First & Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-grit-gold rounded-full"></div>
                <span className="font-medium">Educator Designed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-curiosity-coral rounded-full"></div>
                <span className="font-medium">Human-Centered</span>
              </div>
            </div>
          </div>

          {/* Right Content - Sprig Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Sprig Character */}
              <img 
                src="/lovable-uploads/060630a8-ed64-4d31-8e7b-c1c12d2b6e6e.png" 
                alt="Sprig, your AI learning companion" 
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

      {/* Persona Modal - Enhanced */}
      {selectedPersona && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 relative animate-scale-in shadow-2xl">
            <button 
              onClick={() => setSelectedPersona(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 bg-${personas[selectedPersona as keyof typeof personas].color} rounded-full flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {personas[selectedPersona as keyof typeof personas].title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {personas[selectedPersona as keyof typeof personas].description}
              </p>
              <Button 
                onClick={() => setSelectedPersona(null)}
                className="w-full bg-mentra-blue hover:bg-mentra-blue/90 text-white py-3 text-lg"
              >
                Learn More About Mentra
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Indicator - Enhanced for touch */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-mentra-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-mentra-blue rounded-full mt-2 animate-bounce"></div>
          </div>
          <span className="text-xs text-gray-500 font-medium">Discover More</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
