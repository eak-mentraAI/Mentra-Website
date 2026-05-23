import React from 'react';

interface SprigOrbProps {
  children: React.ReactNode;
  className?: string;
  /** Size of the orb relative to the Sprig. "lg" gives more breathing room. */
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: '-m-1 blur-md',
  md: '-m-2 blur-lg',
  lg: '-m-2 blur-xl',
};

/**
 * Soft Blue->Green radial gradient halo behind a Sprig appearance. Gives the
 * raster PNGs a consistent brand presence without changing the artwork.
 *
 * Uses explicit stop positions so the halo reaches full transparency well
 * inside the bounding box (~60%), which combined with a smaller blur and
 * tighter extension keeps the glow visibly close to the figure rather than
 * bleeding to container edges.
 */
const SprigOrb = ({ children, className = '', size = 'lg' }: SprigOrbProps) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <div
        aria-hidden="true"
        className={`absolute inset-0 rounded-full ${sizeMap[size]}`}
        style={{
          background:
            'radial-gradient(circle at center, rgba(58,134,255,0.14) 0%, rgba(6,214,160,0.04) 35%, transparent 62%)',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

export default SprigOrb;
