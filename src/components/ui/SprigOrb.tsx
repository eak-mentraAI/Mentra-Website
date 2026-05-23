import React from 'react';

interface SprigOrbProps {
  children: React.ReactNode;
  className?: string;
  /** Size of the orb relative to the Sprig. "lg" gives more breathing room. */
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: '-m-2 blur-lg',
  md: '-m-3 blur-xl',
  lg: '-m-4 blur-2xl',
};

/**
 * Soft Blue->Green radial gradient halo behind a Sprig appearance. Gives the
 * raster PNGs a consistent brand presence without changing the artwork.
 * Uses a true radial gradient so the glow falls off from the figure itself
 * rather than filling a blurred bounding box — keeps the halo contained.
 */
const SprigOrb = ({ children, className = '', size = 'lg' }: SprigOrbProps) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <div
        aria-hidden="true"
        className={`absolute inset-0 rounded-full bg-gradient-radial from-mentra-blue/25 via-growth-green/8 to-transparent ${sizeMap[size]}`}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

export default SprigOrb;
