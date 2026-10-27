import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export interface ProductVideoProps {
  src: string;
  poster: string;
  /** Describes what the clip shows, for screen readers and as the poster's alt text */
  alt: string;
  width: number;
  height: number;
  /**
   * 'loop': muted, autoplays only while in view (site loops, no text).
   * 'player': click to play with controls (the promo).
   */
  mode?: 'loop' | 'player';
  className?: string;
}

/**
 * Real Mentra footage. The poster always renders first, so the page costs nothing until a clip is needed.
 * Loops only autoplay on wider screens, when the visitor allows motion and isn't on Save-Data; phones and
 * reduced-motion get the poster alone. Clips are muted and have no audio track.
 */
const ProductVideo = ({ src, poster, alt, width, height, mode = 'loop', className }: ProductVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [motionOk, setMotionOk] = useState(false);

  useEffect(() => {
    if (mode !== 'loop') return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wide = window.matchMedia('(min-width: 768px)').matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
    setMotionOk(!reduced && wide && !saveData);
  }, [mode]);

  // Play only while at least a quarter of the clip is on screen.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || mode !== 'loop' || !motionOk) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [mode, motionOk]);

  const frame = cn('block w-full h-auto rounded-2xl shadow-lg shadow-gray-900/5 bg-gray-50', className);

  if (mode === 'player') {
    return (
      <video
        className={frame}
        src={src}
        poster={poster}
        width={width}
        height={height}
        controls
        muted
        playsInline
        preload="none"
        aria-label={alt}
      />
    );
  }

  if (!motionOk) {
    return <img className={frame} src={poster} alt={alt} width={width} height={height} loading="lazy" decoding="async" />;
  }

  return (
    <video
      ref={videoRef}
      className={frame}
      src={src}
      poster={poster}
      width={width}
      height={height}
      muted
      loop
      playsInline
      preload="none"
      aria-label={alt}
    />
  );
};

export default ProductVideo;
