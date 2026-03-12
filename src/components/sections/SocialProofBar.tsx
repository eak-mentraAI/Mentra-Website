import React from 'react';
import { ShieldCheck, GraduationCap, Lock, Heart } from 'lucide-react';

const trustItems = [
  { icon: ShieldCheck, text: 'COPPA & FERPA Compliant', color: 'text-mentra-blue' },
  { icon: GraduationCap, text: 'Built for K-12', color: 'text-growth-green' },
  { icon: Lock, text: 'SOC 2 Type II Ready', color: 'text-wisdom-purple' },
  { icon: Heart, text: 'Student-Centered Design', color: 'text-curiosity-coral' },
];

const SocialProofBar = () => {
  return (
    <section className="bg-white/60 backdrop-blur-sm border-y border-gray-100 py-4 sm:py-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center justify-center gap-2 sm:gap-2.5">
              <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color} flex-shrink-0`} aria-hidden="true" />
              <span className="text-gray-500 text-xs sm:text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
