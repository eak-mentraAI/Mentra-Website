import React from 'react';
import { cn } from '@/lib/utils';

export interface ProductScreenProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Small label in the frame's title bar, e.g. "Student · Q&A with Sprig" */
  label: string;
  caption?: React.ReactNode;
  className?: string;
}

/**
 * A cropped, readable screenshot from the live Mentra app, in a light window frame.
 * Crops live in /public/images/product and come from marketing/carousel in the app repo.
 */
const ProductScreen = ({ src, alt, width, height, label, caption, className }: ProductScreenProps) => (
  <figure className={cn('w-full', className)}>
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-900/5 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100 bg-gray-50">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        </span>
        <span className="text-xs font-medium text-gray-500 truncate">{label}</span>
      </div>
      {/* Links to the full-size crop so it stays readable on phones */}
      <a href={src} target="_blank" rel="noopener noreferrer" className="block cursor-zoom-in">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
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

export const SHOWCASE_DISCLOSURE =
  'Real Mentra screens from a fictional showcase class. Student messages were scripted; every Sprig reply was generated live by the product. No real child appears.';

export default ProductScreen;
