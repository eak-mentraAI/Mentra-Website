import React from 'react';
import { cn } from '@/lib/utils';

/**
 * The hero's blue-to-green gradient text, for one key phrase in a section heading. A brand moment: use it
 * sparingly, at most once per heading. box-decoration-break keeps the gradient on every row when the phrase wraps.
 */
const BrandGradient = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span
    className={cn(
      'bg-gradient-to-r from-mentra-blue to-growth-green bg-clip-text text-transparent [box-decoration-break:clone] [-webkit-box-decoration-break:clone]',
      className,
    )}
  >
    {children}
  </span>
);

export default BrandGradient;
