import React from 'react';
import HairlineDivider from './HairlineDivider';

interface PulledQuoteProps {
  children: React.ReactNode;
  attribution?: string;
  className?: string;
}

const PulledQuote = ({ children, attribution, className = '' }: PulledQuoteProps) => {
  return (
    <figure className={`max-w-3xl mx-auto text-center space-y-6 ${className}`}>
      <HairlineDivider width="sm" />
      <blockquote className="font-editorial italic text-2xl sm:text-3xl lg:text-4xl text-gray-800 leading-snug tracking-tight">
        {children}
      </blockquote>
      {attribution ? (
        <figcaption className="text-sm uppercase tracking-[0.18em] text-gray-400">
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
};

export default PulledQuote;
