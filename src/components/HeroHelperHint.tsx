import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const STORAGE_KEY = 'mentra_hero_hint_dismissed';
const APPEAR_AFTER_MS = 3000;
const AUTO_HIDE_AFTER_MS = 11000;

/**
 * Small inactivity-triggered hint near the hero CTA. Teaches once, then
 * steps back — embodying the "scaffolding that fades" brand thesis.
 */
const HeroHelperHint = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
      setDismissed(true);
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDismissed(true);
      return;
    }
    if (window.scrollY > 20) {
      setDismissed(true);
      return;
    }

    const dismiss = () => {
      setVisible(false);
      setDismissed(true);
      try {
        localStorage.setItem(STORAGE_KEY, 'true');
      } catch {
        /* ignore storage errors (private mode, quota, etc.) */
      }
    };

    const showTimer = window.setTimeout(() => setVisible(true), APPEAR_AFTER_MS);
    const autoHideTimer = window.setTimeout(dismiss, AUTO_HIDE_AFTER_MS);

    const handleScroll = () => {
      if (window.scrollY > 20) dismiss();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(showTimer);
      clearTimeout(autoHideTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-mentra-blue/80">
        Curious how it fades? Keep scrolling
        <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
      </span>
    </div>
  );
};

export default HeroHelperHint;
