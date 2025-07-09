
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Users, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-mentra-blue via-mentra-blue/90 to-growth-green/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-grit-gold/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-curiosity-coral/20 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="mb-12">
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/cedb8c52-6559-4531-87f6-39ad0937d397.png" 
                alt="Sprig ready to help" 
                className="w-24 h-24 object-contain animate-float"
              />
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Start Your{' '}
              <span className="text-grit-gold">Growth Journey</span>?
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Join thousands of students, parents, and educators who are transforming learning with Sprig. Your personalized AI companion is waiting to help you grow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-white text-mentra-blue hover:bg-white/90 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 shadow-2xl hover:shadow-3xl group"
              >
                Start Exploring
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-mentra-blue px-8 py-4 rounded-full font-bold text-lg transition-all duration-200"
              >
                Schedule Demo
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg">Safe & Secure</h3>
              <p className="text-white/80 text-center">COPPA compliant with enterprise-grade security</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg">Educator Approved</h3>
              <p className="text-white/80 text-center">Developed with child psychologists and teachers</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg">Transformative</h3>
              <p className="text-white/80 text-center">Proven results in emotional and academic growth</p>
            </div>
          </div>

          {/* Final Message */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-white/90 text-lg leading-relaxed">
              "Every child deserves a learning experience that nurtures their whole self—mind, heart, and spirit. 
              With Sprig, that experience is just one click away."
            </p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <img 
                src="/lovable-uploads/13ee0557-7701-4480-8818-ad3335de97fd.png" 
                alt="Sprig" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-white font-medium">— Sprig & the Mentra Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
