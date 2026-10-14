import React, { useId, useState } from 'react';
import ProductScreen from '@/components/ui/ProductScreen';
import type { Screen } from '@/data/productScreens';

export interface ScreenTab {
  /** Short label above the title, e.g. "Coding" */
  eyebrow: string;
  title: string;
  /** What to notice in the screen */
  text: string;
  screen: Screen;
}

interface ScreenTabsProps {
  tabs: ScreenTab[];
  label: string;
  /** Which signal panels to show: all of them, only "What this reads" (teacher views), or none */
  signals?: 'all' | 'reads' | 'none';
}

const gridCols: Record<number, string> = {
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
};

/** A row of tabs over one real product screen at a readable size. Used by the homepage story and the audience pages. */
const ScreenTabs = ({ tabs, label, signals = 'all' }: ScreenTabsProps) => {
  const [active, setActive] = useState(0);
  const id = useId();
  const tab = tabs[active];
  const showSignals = signals === 'all' || (signals === 'reads' && tab.screen.signals?.kind === 'reads');

  return (
    <div className="max-w-5xl mx-auto">
      <div
        className={`flex lg:grid ${gridCols[tabs.length] ?? 'lg:grid-cols-4'} gap-2 overflow-x-auto [scrollbar-width:none] -mx-4 px-4 lg:mx-0 lg:px-0 pb-2 lg:pb-0 mb-6`}
        role="tablist"
        aria-label={label}
      >
        {tabs.map((t, i) => {
          const selected = i === active;
          return (
            <button
              key={t.title}
              type="button"
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${id}-panel`}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 w-60 lg:w-auto text-left rounded-2xl p-4 border transition-colors duration-200 ${
                selected ? 'bg-mentra-blue/5 border-mentra-blue/30' : 'bg-white border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span className={`block text-xs font-semibold uppercase tracking-[0.14em] mb-1.5 ${selected ? 'text-mentra-blue' : 'text-gray-400'}`}>
                {String(i + 1).padStart(2, '0')} · {t.eyebrow}
              </span>
              <span className="block text-sm font-bold text-gray-900 leading-snug">{t.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active tab: what to notice, then the screen */}
      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`}>
        <div key={active} className="animate-fade-in-up">
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mb-6">{tab.text}</p>
          <ProductScreen screen={showSignals ? tab.screen : { ...tab.screen, signals: undefined }} />
        </div>
      </div>
    </div>
  );
};

export default ScreenTabs;
