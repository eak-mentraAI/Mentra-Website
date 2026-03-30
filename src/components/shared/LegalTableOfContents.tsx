import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface TOCSection {
  id: string;
  title: string;
}

interface LegalTableOfContentsProps {
  sections: TOCSection[];
}

export default function LegalTableOfContents({ sections }: LegalTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Expand the accordion item if it's collapsed
      const trigger = el.querySelector('[data-state="closed"]');
      if (trigger instanceof HTMLElement) trigger.click();
    }
    setMobileOpen(false);
  };

  const linkClasses = (id: string) =>
    `block text-sm py-1.5 px-3 rounded-lg transition-colors duration-150 cursor-pointer ${
      activeId === id
        ? 'bg-mentra-blue/10 text-mentra-blue font-semibold'
        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
    }`;

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <nav className="hidden lg:block sticky top-24 self-start w-56 shrink-0">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
          On this page
        </p>
        <ul className="space-y-0.5">
          {sections.map((s) => (
            <li key={s.id}>
              <button onClick={() => handleClick(s.id)} className={linkClasses(s.id)}>
                {s.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile: collapsible top bar */}
      <div className="lg:hidden sticky top-16 z-30 bg-white/90 backdrop-blur-sm border-b border-gray-100 -mx-4 px-4 py-2">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-between w-full text-sm font-semibold text-gray-700 py-1"
        >
          <span>Jump to section</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileOpen ? 'rotate-180' : ''}`} />
        </button>
        {mobileOpen && (
          <ul className="mt-2 pb-2 space-y-0.5">
            {sections.map((s) => (
              <li key={s.id}>
                <button onClick={() => handleClick(s.id)} className={linkClasses(s.id)}>
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
