import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Mentra has transformed how my daughter approaches learning. She's more confident, emotionally aware, and excited about school.",
      author: "Sarah Chen",
      role: "Parent",
      color: "curiosity-coral",
      avatar: "/lovable-uploads/69642821-e647-4bdf-b739-25771a5f9674.png"
    },
    {
      quote: "As an educator, I've seen remarkable growth in emotional intelligence among students using Mentra. Sprig makes complex concepts accessible.",
      author: "Michael Rodriguez",
      role: "Elementary Teacher",
      color: "growth-green",
      avatar: "/lovable-uploads/13ee0557-7701-4480-8818-ad3335de97fd.png"
    },
    {
      quote: "The journaling feature helped me understand my feelings better. Now I know why some subjects feel harder and how to work through challenges.",
      author: "Emma, Age 10",
      role: "Student",
      color: "grit-gold",
      avatar: "/lovable-uploads/cedb8c52-6559-4531-87f6-39ad0937d397.png"
    },
    {
      quote: "Mentra provides the emotional support framework that modern education needs. It's not just about academic growth—it's about human development.",
      author: "Dr. Amanda Foster",
      role: "Child Psychologist",
      color: "mentra-blue",
      avatar: "/lovable-uploads/060630a8-ed64-4d31-8e7b-c1c12d2b6e6e.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      prevTestimonial();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      nextTestimonial();
    }
  };

  return (
    <section 
      className="py-20 bg-gradient-to-br from-journal-sand/50 to-wisdom-purple/10"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            id="testimonials-heading"
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Why{' '}
            <span className="text-mentra-blue">Mentra</span>{' '}
            Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from the families, educators, and students who have experienced the transformative power of learning with Sprig.
          </p>
        </div>

        <div 
          className="max-w-4xl mx-auto relative"
          role="region"
          aria-label="Testimonials carousel"
          aria-live="polite"
          aria-atomic="true"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <Card className="bg-white border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-8">
                <img 
                  src={testimonials[currentTestimonial].avatar}
                  alt={`${testimonials[currentTestimonial].author}, ${testimonials[currentTestimonial].role}`}
                  className="w-20 h-20 object-contain rounded-full"
                />
              </div>
              
              <blockquote 
                className="text-2xl lg:text-3xl text-gray-800 leading-relaxed mb-8 font-medium"
                aria-label={`Testimonial from ${testimonials[currentTestimonial].author}`}
              >
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="space-y-2">
                <p className="text-xl font-bold text-gray-900">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className={`text-${testimonials[currentTestimonial].color} font-medium`}>
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-2 border-mentra-blue text-mentra-blue hover:bg-mentra-blue hover:text-white focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-2 border-mentra-blue text-mentra-blue hover:bg-mentra-blue hover:text-white focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </div>

          {/* Indicators */}
          <div 
            className="flex justify-center gap-2 mt-6"
            role="tablist"
            aria-label="Testimonial navigation"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2 ${
                  index === currentTestimonial ? 'bg-mentra-blue' : 'bg-gray-300'
                }`}
                role="tab"
                aria-selected={index === currentTestimonial}
                aria-label={`Go to testimonial ${index + 1} of ${testimonials.length}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
