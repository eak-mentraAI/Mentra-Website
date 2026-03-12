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
    quote: "Three months in, my students need less scaffolding than they did at the start. They're catching their own mistakes before the AI even flags them. That's the shift — they're becoming better learners, not better AI users.",
    author: "Sarah Chen",
    role: "5th Grade Teacher",
    color: "curiosity-coral",
    avatar: "/images/sprig/fem-teacher.png",
  },
  {
    quote: "I finally stopped muting the school app. Mentra only pings me when something actually matters — and when it does, I know exactly what to do. My attention isn't wasted, so I actually trust it.",
    author: "Michael Rodriguez",
    role: "Parent of 8-year-old",
    color: "growth-green",
    avatar: "/images/sprig/superfan.png",
  },
  {
    quote: "When I get stuck now, I don't just guess. I ask myself what I actually know and what's confusing me. Sprig taught me how to do that — and now I do it even without Sprig.",
    author: "Emma, Age 10",
    role: "Student",
    color: "grit-gold",
    avatar: "/images/sprig/football.png",
  },
  {
    quote: "We evaluated a dozen AI platforms. Mentra was the only one where every claim was provable — not promised in a contract, but demonstrable in the architecture. Our governance team approved it on the first review.",
    author: "Dr. Amanda Foster",
    role: "School Principal",
    color: "mentra-blue",
    avatar: "/images/sprig/spy.png",
  },
];

const colorTextMap: Record<string, string> = {
  'curiosity-coral': 'text-curiosity-coral',
  'growth-green': 'text-growth-green',
  'grit-gold': 'text-grit-gold',
  'mentra-blue': 'text-mentra-blue',
  'wisdom-purple': 'text-wisdom-purple',
};

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-8 relative h-full flex flex-col">
      <span className="absolute -top-2 -left-1 text-6xl leading-none text-mentra-blue/10 font-serif pointer-events-none select-none" aria-hidden="true">"</span>
      <blockquote className="text-base lg:text-lg text-gray-800 leading-relaxed mb-6 font-medium relative z-10 flex-1">
        "{t.quote}"
      </blockquote>
      <div className="flex items-center gap-3">
        <img
          src={t.avatar}
          alt=""
          width="48"
          height="48"
          className="w-10 h-10 object-contain rounded-full"
          loading="lazy"
        />
        <div>
          <p className="text-sm font-bold text-gray-900">{t.author}</p>
          <p className={`text-xs font-medium ${colorTextMap[t.color] || 'text-mentra-blue'}`}>{t.role}</p>
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

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
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
          <div className="text-center mb-12">
            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance"
            >
              What <span className="bg-gradient-to-r from-mentra-blue to-growth-green bg-clip-text text-transparent">Independence</span> Looks Like
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Desktop & Tablet: uniform 2x2 grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.author} delay={i * 100}>
              <TestimonialCard t={t} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Mobile: single card with dots */}
        <div className="md:hidden max-w-lg mx-auto">
          <AnimateOnScroll variant="scale-in">
            <TestimonialCard t={testimonials[mobileIndex]} />
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
