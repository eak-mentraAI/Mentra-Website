import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Sprig follows the visitor down the page, quietly shifting expression as
 * scroll progresses — the brand thesis ("scaffolding that fades") made visible.
 */
const FloatingSprig = () => {
  const { scrollYProgress } = useScroll();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Container fades in once past the hero, holds through the page, fades out near the end.
  const containerOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.2, 0.85, 0.97],
    [0, 0, 0.9, 0.9, 0],
  );

  // Each expression's opacity peaks in its own zone; overlapping ramps create a cross-fade.
  const nerdOpacity = useTransform(
    scrollYProgress,
    [0.18, 0.25, 0.5, 0.6],
    [1, 1, 1, 0],
  );
  const explorerOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.75, 0.85],
    [0, 1, 1, 0],
  );
  const sleepyOpacity = useTransform(
    scrollYProgress,
    [0.75, 0.85, 1],
    [0, 1, 1],
  );

  if (reducedMotion) return null;

  const layers: Array<{ src: string; opacity: typeof nerdOpacity }> = [
    { src: '/images/sprig/nerd.png', opacity: nerdOpacity },
    { src: '/images/sprig/explorer.png', opacity: explorerOpacity },
    { src: '/images/sprig/sleepy.png', opacity: sleepyOpacity },
  ];

  return (
    <motion.div
      aria-hidden="true"
      className="hidden md:block pointer-events-none fixed bottom-6 left-6 z-40 w-24 h-24"
      style={{ opacity: containerOpacity }}
    >
      {layers.map((layer) => (
        <motion.img
          key={layer.src}
          src={layer.src}
          alt=""
          width="96"
          height="96"
          className="absolute inset-0 w-full h-full drop-shadow-xl"
          style={{ opacity: layer.opacity }}
        />
      ))}
    </motion.div>
  );
};

export default FloatingSprig;
