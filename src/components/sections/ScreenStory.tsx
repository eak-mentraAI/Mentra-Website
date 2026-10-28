import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import ProductVideo from '@/components/ui/ProductVideo';
import ScreenTabs, { type ScreenTab } from '@/components/ui/ScreenTabs';
import { cn } from '@/lib/utils';

interface ScreenStoryProps {
  beats: ScreenTab[];
  /** Accessible name for the scene, e.g. "Mentra for teachers: real screens" */
  label: string;
  /** Shown under the scene, e.g. the showcase disclosure */
  note?: string;
}

/** The real screen for one beat: the approved video loop when there is one, else the still in a light frame. */
const Media = ({ beat }: { beat: ScreenTab }) => {
  const { screen } = beat;
  if (screen.video) {
    return (
      <ProductVideo
        src={screen.video.src}
        mobileSrc={screen.video.mobileSrc}
        poster={screen.video.poster}
        alt={screen.alt}
        width={screen.width}
        height={screen.height}
      />
    );
  }
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-900/5 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100 bg-gray-50">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        </span>
        <span className="text-xs font-medium text-gray-500 truncate">{screen.label}</span>
      </div>
      {/* Links to the full-size crop so it stays readable on phones, as ProductScreen does */}
      <a href={screen.src} target="_blank" rel="noopener noreferrer" className="block cursor-zoom-in">
        <img src={screen.src} alt={screen.alt} width={screen.width} height={screen.height} decoding="async" className="block w-full h-auto" />
      </a>
    </div>
  );
};

/**
 * The audience pages' screens as one pinned, scroll-driven scene, the same mechanics as the homepage's
 * ConversationStory: narration on the left, the real screen on the right, one beat per scroll stop.
 * Reduced-motion visitors get the tab viewer instead.
 */
const ScreenStory = ({ beats, label, note }: ScreenStoryProps) => {
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [beat, setBeat] = useState(0);

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] });
  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const next = Math.min(beats.length - 1, Math.floor(p * beats.length));
    setBeat((prev) => (prev === next ? prev : next));
  });

  if (reduceMotion) {
    return (
      <section className="py-24 bg-gray-50" aria-label={label}>
        <div className="container mx-auto px-4">
          <ScreenTabs tabs={beats} label={label} signals="reads" />
          {note && <p className="text-xs text-gray-500 text-center leading-relaxed max-w-3xl mx-auto mt-10">{note}</p>}
        </div>
      </section>
    );
  }

  const current = beats[beat];
  const skip = () => {
    const next = trackRef.current?.parentElement?.nextElementSibling as HTMLElement | null;
    if (next) window.scrollTo({ top: next.getBoundingClientRect().top + window.scrollY - 64, behavior: 'instant' as ScrollBehavior });
  };

  return (
    <section className="relative bg-gray-50" aria-label={label}>
      {/* ~55vh of scroll per beat, like the homepage story */}
      <div ref={trackRef} style={{ height: `${beats.length * 55 + 45}vh` }}>
        <div className="sticky top-16 h-[calc(100svh-4rem)] overflow-hidden">
          <div className="container mx-auto h-full px-4 pt-5 pb-16 sm:py-10 grid grid-rows-[auto_minmax(0,1fr)] gap-5 lg:grid-rows-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-12 lg:items-center">
            <div>
              {/* Keyed remount, no exit animation, so fast scrolls never leave stale narration */}
              <motion.div
                key={beat}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                className="space-y-2 sm:space-y-4"
                aria-live="polite"
              >
                <p className="flex items-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-mentra-blue">
                  {current.eyebrow}
                  <span className="lg:hidden normal-case tracking-normal font-medium text-gray-500">
                    {beat + 1} of {beats.length}
                  </span>
                </p>
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-[1.1] tracking-tight text-balance">{current.title}</h2>
                <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">{current.text}</p>
              </motion.div>
              <div className="mt-3 lg:mt-10 flex items-center gap-4">
                <div className="hidden lg:flex gap-1.5" aria-hidden="true">
                  {beats.map((_, i) => (
                    <span key={i} className={cn('h-1 w-8 rounded-full transition-colors duration-300', i <= beat ? 'bg-mentra-blue' : 'bg-gray-200')} />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={skip}
                  className="text-xs sm:text-sm font-medium text-gray-500 underline-offset-4 hover:text-gray-900 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-mentra-blue rounded"
                >
                  Skip ahead
                </button>
              </div>
            </div>

            {/* Only the active beat's media is mounted, so only one video loop ever plays */}
            <div className="relative min-h-0 flex items-start lg:items-center">
              <motion.div
                key={beat}
                className="w-full max-h-full"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <Media beat={current} />
              </motion.div>
            </div>
          </div>
          {note && (
            <p className="absolute inset-x-0 bottom-3 hidden sm:block text-center text-xs text-gray-500 px-4">{note}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ScreenStory;
