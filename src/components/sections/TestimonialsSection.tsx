import React, { useState, useEffect, useCallback } from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  color: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "My students now reflect on their learning journey instead of just completing assignments. The shift in how they talk about their own thinking has been remarkable.",
    author: "Sarah Chen",
    role: "5th Grade Teacher",
    color: "curiosity-coral",
    avatar: "/images/logos/mentra-logo-alt.png",
  },
  {
    quote: "I can see my child's emotional growth alongside their academic progress.",
    author: "Michael Rodriguez",
    role: "Parent of 8-year-old",
    color: "growth-green",
    avatar: "/images/sprig/sprig-wave.png",
  },
  {
    quote: "I learned to ask better questions and think through problems step by step.",
    author: "Emma, Age 10",
    role: "Student",
    color: "grit-gold",
    avatar: "/images/sprig/sprig-thinking.png",
  },
  {
    quote: "Students develop metacognitive skills that transfer to all subjects.",
    author: "Dr. Amanda Foster",
    role: "School Principal",
    color: "mentra-blue",
    avatar: "/images/sprig/sprig-hero.png",
  },
];

const colorTextMap: Record<string, string> = {
  'curiosity-coral': 'text-curiosity-coral',
  'growth-green': 'text-growth-green',
  'grit-gold': 'text-grit-gold',
  'mentra-blue': 'text-mentra-blue',
  'wisdom-purple': 'text-wisdom-purple',
};

function TestimonialCard({ t, featured = false }: { t: Testimonial; featured?: boolean }) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ${featured ? 'p-8 sm:p-10' : 'p-6'} relative`}>
      {featured && (
        <span className="absolute -top-2 -left-1 text-8xl leading-none text-mentra-blue/10 font-serif pointer-events-none select-none" aria-hidden="true">"</span>
      )}
      <blockquote className={`${featured ? 'text-xl lg:text-2xl' : 'text-base'} text-gray-800 leading-relaxed mb-6 font-medium relative z-10`}>
        "{t.quote}"
      </blockquote>
      <div className="flex items-center gap-3">
        <img
          src={t.avatar}
          alt=""
          width="48"
          height="48"
          className={`${featured ? 'w-12 h-12' : 'w-10 h-10'} object-contain rounded-full`}
          loading="lazy"
        />
        <div>
          <p className={`${featured ? 'text-base' : 'text-sm'} font-bold text-gray-900`}>{t.author}</p>
          <p className={`${featured ? 'text-sm' : 'text-xs'} font-medium ${colorTextMap[t.color] || 'text-mentra-blue'}`}>{t.role}</p>
        </div>
      </div>
    </div>
  );
}

const TestimonialsSection = () => {
  const [mobileIndex, setMobileIndex] = useState(0);

  const nextMobile = useCallback(() => {
    setMobileIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  // Auto-rotate on mobile only — no interval on desktop since all cards are visible
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    if (mq.matches) return;
    const timer = setInterval(nextMobile, 6000);
    return () => clearInterval(timer);
  }, [nextMobile]);

  return (
    <section
      className="py-20 bg-gradient-to-br from-journal-sand/50 to-wisdom-purple/10"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance"
            >
              Why Mentra <span className="text-mentra-blue">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from the families, educators, and students who have experienced the transformative power of learning with Sprig.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Desktop: featured + 2 supporting */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <AnimateOnScroll className="lg:col-span-3 flex" variant="fade-in-left">
            <TestimonialCard t={testimonials[0]} featured />
          </AnimateOnScroll>
          <div className="lg:col-span-2 flex flex-col gap-6">
            <AnimateOnScroll variant="fade-in-right" delay={100} className="flex-1 flex">
              <TestimonialCard t={testimonials[1]} />
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-in-right" delay={200} className="flex-1 flex">
              <TestimonialCard t={testimonials[2]} />
            </AnimateOnScroll>
          </div>
        </div>

        {/* Additional card below on desktop */}
        <div className="hidden lg:block max-w-6xl mx-auto mt-6">
          <AnimateOnScroll delay={300}>
            <div className="max-w-md mx-auto">
              <TestimonialCard t={testimonials[3]} />
            </div>
          </AnimateOnScroll>
        </div>

        {/* Tablet: 2-column grid */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.slice(0, 4).map((t, i) => (
            <AnimateOnScroll key={t.author} delay={i * 100}>
              <TestimonialCard t={t} featured={i === 0} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Mobile: single card with dots */}
        <div className="md:hidden max-w-lg mx-auto">
          <AnimateOnScroll variant="scale-in">
            <TestimonialCard t={testimonials[mobileIndex]} featured />
          </AnimateOnScroll>
          <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setMobileIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2 ${
                  idx === mobileIndex ? 'bg-mentra-blue' : 'bg-gray-300'
                }`}
                role="tab"
                aria-selected={idx === mobileIndex}
                aria-label={`Go to testimonial ${idx + 1} of ${testimonials.length}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
