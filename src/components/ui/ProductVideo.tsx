import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export interface ProductVideoProps {
  src: string;
  /** Lighter encode served below 768px (720w, ~0.25 MB). Falls back to src. */
  mobileSrc?: string;
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
  /** Loops only: below 1 slows the clip so a viewer can take it in on one pass */
  playbackRate?: number;
  className?: string;
}

/**
 * Real Mentra footage. The poster always renders first, so the page costs nothing until a clip is needed.
 * Muted loops autoplay inline while in view, on phones too (with the lighter mobileSrc encode). Visitors with
 * reduced motion or Save-Data get the poster alone. Clips have no audio track.
 */
const ProductVideo = ({ src, mobileSrc, poster, alt, width, height, mode = 'loop', playbackRate = 1, className }: ProductVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [motionOk, setMotionOk] = useState(false);
  const [loopSrc, setLoopSrc] = useState(src);

  useEffect(() => {
    if (mode !== 'loop') return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const narrow = window.matchMedia('(max-width: 767px)').matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
    setLoopSrc(narrow && mobileSrc ? mobileSrc : src);
    setMotionOk(!reduced && !saveData);
  }, [mode, src, mobileSrc]);

  // Play only while at least a quarter of the clip is on screen.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || mode !== 'loop' || !motionOk) return;
    // iOS only allows inline autoplay for muted video, and React doesn't always write the muted attribute.
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('muted', '');
    // defaultPlaybackRate survives the source loading; playbackRate covers a clip that's already loaded.
    video.defaultPlaybackRate = playbackRate;
    video.playbackRate = playbackRate;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [mode, motionOk, playbackRate]);

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
      src={loopSrc}
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
