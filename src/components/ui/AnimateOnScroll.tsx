import React, { useRef, useEffect, useState } from 'react';

type Variant = 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}

const variantClasses: Record<Variant, { hidden: string; visible: string }> = {
  'fade-in-up': {
    hidden: 'opacity-0 translate-y-5',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-in-left': {
    hidden: 'opacity-0 -translate-x-5',
    visible: 'opacity-100 translate-x-0',
  },
  'fade-in-right': {
    hidden: 'opacity-0 translate-x-5',
    visible: 'opacity-100 translate-x-0',
  },
  'scale-in': {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
};

export default function AnimateOnScroll({
  children,
  variant = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  once = true,
  className = '',
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once, prefersReducedMotion]);

  const { hidden, visible } = variantClasses[variant];

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out ${isVisible ? visible : hidden} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}
