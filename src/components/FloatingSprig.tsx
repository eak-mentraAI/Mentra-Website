import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

/**
 * Sprig follows the visitor down the page, shrinking and quieting as they scroll —
 * the brand thesis ("scaffolding that fades") made visible.
 */
const FloatingSprig = () => {
  const { scrollYProgress } = useScroll();
  const [src, setSrc] = useState('/images/sprig/nerd.png');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Hidden over the hero, visible through the body, fading toward the end.
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.18, 0.7, 0.95],
    [0, 0, 0.85, 0.55, 0.25],
  );
  const scale = useTransform(
    scrollYProgress,
    [0.15, 0.3, 0.7, 1],
    [0.55, 0.65, 0.45, 0.3],
  );

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v < 0.18) return;
    if (v < 0.55) {
      setSrc((prev) => (prev !== '/images/sprig/nerd.png' ? '/images/sprig/nerd.png' : prev));
    } else if (v < 0.85) {
      setSrc((prev) => (prev !== '/images/sprig/explorer.png' ? '/images/sprig/explorer.png' : prev));
    } else {
      setSrc((prev) => (prev !== '/images/sprig/sleepy.png' ? '/images/sprig/sleepy.png' : prev));
    }
  });

  if (reducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="hidden md:block pointer-events-none fixed bottom-6 right-6 z-40"
      style={{ opacity, scale, transformOrigin: 'bottom right' }}
    >
      <img
        src={src}
        alt=""
        width="160"
        height="160"
        className="w-40 h-40 drop-shadow-xl transition-[filter] duration-500"
      />
    </motion.div>
  );
};

export default FloatingSprig;
