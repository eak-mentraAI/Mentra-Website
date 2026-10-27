import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProductVideo from '@/components/ui/ProductVideo';
import type { Screen } from '@/data/productScreens';

export interface ProductScreenProps {
  screen: Screen;
  caption?: React.ReactNode;
  className?: string;
}

/** A cropped, readable screenshot from the live Mentra app, in a light window frame. */
const ProductScreen = ({ screen, caption, className }: ProductScreenProps) => (
  <figure className={cn('w-full', className)}>
    {screen.video ? (
      // The clip carries its own browser frame, so no title bar here
      <ProductVideo
        src={screen.video.src}
        poster={screen.video.poster}
        alt={screen.alt}
        width={screen.width}
        height={screen.height}
      />
    ) : (
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
    )}
    {caption && (
      <figcaption className="mt-3 text-sm text-gray-500 leading-relaxed">{caption}</figcaption>
    )}
    {screen.signals && (
      <div className="mt-4 rounded-2xl border border-mentra-blue/15 bg-mentra-blue/[0.03] p-4 sm:p-5 grid gap-4 sm:grid-cols-[minmax(0,1.4fr)_auto_minmax(0,1fr)] sm:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mentra-blue mb-2">
            {screen.signals.kind === 'records' ? 'What this records' : 'What this reads'}
          </p>
          <ul className="space-y-1.5 text-sm text-gray-700 leading-snug list-disc pl-4 marker:text-mentra-blue/50">
            {screen.signals.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <ArrowRight className="hidden sm:block w-5 h-5 text-mentra-blue/50" aria-hidden="true" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400 mb-2">
            {screen.signals.kind === 'records' ? 'Where it goes' : 'From'}
          </p>
          <p className="text-sm text-gray-700 leading-snug">{screen.signals.goesTo}</p>
        </div>
      </div>
    )}
  </figure>
);

export default ProductScreen;
