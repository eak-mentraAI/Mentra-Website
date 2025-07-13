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
          {/* Main CTA Content - Enhanced copy */}
          <div className="mb-12">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Learn <span>With Purpose</span>?
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-6 leading-relaxed">
              Join thousands of students who are mastering AI while strengthening the human skills that matter most. 
              Your learning companion is waiting to help you think deeper, grow stronger, and explore further.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed">
              This is AI designed for growth, not shortcuts—for empowerment, not replacement.
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-center mb-12 mt-8">
              <Button 
                size="lg" 
                className="bg-white text-mentra-blue hover:bg-white/90 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 shadow-2xl hover:shadow-3xl group"
              >
                Begin Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Trust Indicators - Enhanced copy */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg">Privacy-First & Safe</h3>
              <p className="text-white/80 text-center">COPPA compliant with enterprise-grade security. Your data stays yours, always.</p>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg">Educator Designed</h3>
              <p className="text-white/80 text-center">Built by teachers, child psychologists, and learning scientists who understand how students really grow.</p>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg">Human-Centered</h3>
              <p className="text-white/80 text-center">AI that strengthens human skills—critical thinking, empathy, and ethical reasoning.</p>
            </div>
          </div>

          {/* Final Message - Enhanced */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-white/90 text-lg leading-relaxed mb-4">
              "Every student deserves learning that honors their humanity while preparing them for an AI-powered world. 
              That's not just our mission—it's our promise."
            </p>
            <div className="flex items-center justify-center gap-3">
              <img 
                src="/lovable-uploads/13ee0557-7701-4480-8818-ad3335de97fd.png" 
                alt="Sprig" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-white font-medium">— The Mentra Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
