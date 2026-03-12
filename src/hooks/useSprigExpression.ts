import { useState, useEffect } from 'react';

type SprigExpression = 'wave' | 'thinking' | 'happy';

const expressionImageMap: Record<SprigExpression, string> = {
  wave: '/images/sprig/happy-sprig.png',
  thinking: '/images/sprig/nerd.png',
  happy: '/images/sprig/superfan.png',
};

export default function useSprigExpression(): { expression: SprigExpression; src: string } {
  const [expression, setExpression] = useState<SprigExpression>('wave');

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const heroEl = document.getElementById('hero-heading');
    const ctaEl = document.querySelector('[data-sprig-cta]');

    if (!heroEl && !ctaEl) return;

    const observers: IntersectionObserver[] = [];

    let heroVisible = true;
    let ctaVisible = false;

    const update = () => {
      if (ctaVisible) setExpression('happy');
      else if (!heroVisible) setExpression('thinking');
      else setExpression('wave');
    };

    if (heroEl) {
      const obs = new IntersectionObserver(
        ([entry]) => { heroVisible = entry.isIntersecting; update(); },
        { threshold: 0.3 },
      );
      obs.observe(heroEl);
      observers.push(obs);
    }

    if (ctaEl) {
      const obs = new IntersectionObserver(
        ([entry]) => { ctaVisible = entry.isIntersecting; update(); },
        { threshold: 0.2 },
      );
      obs.observe(ctaEl);
      observers.push(obs);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return { expression, src: expressionImageMap[expression] };
}
