import React from 'react';

interface SprigOrbProps {
  children: React.ReactNode;
  className?: string;
  /** Size of the orb relative to the Sprig. "lg" gives more breathing room. */
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: '-m-4 blur-xl',
  md: '-m-8 blur-2xl',
  lg: '-m-12 blur-3xl',
};

/**
 * Soft Blue->Green radial gradient halo behind a Sprig appearance. Gives the
 * raster PNGs a consistent brand presence without changing the artwork.
 */
const SprigOrb = ({ children, className = '', size = 'lg' }: SprigOrbProps) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <div
        aria-hidden="true"
        className={`absolute inset-0 rounded-full bg-gradient-to-br from-mentra-blue/20 via-growth-green/12 to-transparent ${sizeMap[size]}`}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

export default SprigOrb;
