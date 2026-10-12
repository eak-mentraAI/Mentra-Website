import React from 'react';
import { cn } from '@/lib/utils';
import type { Screen } from '@/data/productScreens';

export interface ProductScreenProps {
  screen: Screen;
  caption?: React.ReactNode;
  className?: string;
}

/** A cropped, readable screenshot from the live Mentra app, in a light window frame. */
const ProductScreen = ({ screen, caption, className }: ProductScreenProps) => (
  <figure className={cn('w-full', className)}>
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-900/5 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100 bg-gray-50">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        </span>
        <span className="text-xs font-medium text-gray-500 truncate">{screen.label}</span>
      </div>
      {/* Links to the full-size crop so it stays readable on phones */}
      <a href={screen.src} target="_blank" rel="noopener noreferrer" className="block cursor-zoom-in">
        <img
          src={screen.src}
          alt={screen.alt}
          width={screen.width}
          height={screen.height}
          loading="lazy"
          decoding="async"
          className="block w-full h-auto"
        />
      </a>
    </div>
    {caption && (
      <figcaption className="mt-3 text-sm text-gray-500 leading-relaxed">{caption}</figcaption>
    )}
  </figure>
);

export default ProductScreen;
