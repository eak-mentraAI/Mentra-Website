import React from 'react';

interface HairlineDividerProps {
  className?: string;
  width?: 'sm' | 'md' | 'lg';
}

const widthMap = {
  sm: 'w-16',
  md: 'w-24',
  lg: 'w-40',
};

const HairlineDivider = ({ className = '', width = 'md' }: HairlineDividerProps) => {
  return (
    <div
      role="presentation"
      className={`mx-auto h-px bg-gradient-to-r from-mentra-blue to-growth-green ${widthMap[width]} ${className}`}
    />
  );
};

export default HairlineDivider;
