import React from 'react';
import { cn } from '@/lib/utils';

/**
 * The hero's blue-to-green gradient as an underline under one key phrase. A brand moment: use it sparingly,
 * at most once per section heading. box-decoration-break keeps the line under every row when the phrase wraps.
 */
const BrandUnderline = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span
    className={cn(
      'bg-gradient-to-r from-mentra-blue to-growth-green bg-no-repeat [background-size:100%_0.14em] [background-position:0_96%] pb-[0.04em] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]',
      className,
    )}
  >
    {children}
  </span>
);

export default BrandUnderline;
