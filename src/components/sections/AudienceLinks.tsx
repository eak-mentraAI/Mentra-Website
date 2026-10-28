import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { audiences, type Audience } from '@/data/audiences';

// One Sprig illustration per audience: the art carries the colour, not the UI.
const illustration: Record<Audience['id'], string> = {
  teachers: '/images/sprig/fem-teacher-256.webp',
  parents: '/images/sprig/MENTRA_SPRIG_GIVE-256.webp',
  schools: '/images/sprig/platform-hero-256.webp',
};

/** Homepage pointer to the three audience pages: one line each, the detail lives on the page. */
const AudienceLinks = () => (
  <section id="personas" className="py-24 bg-white scroll-mt-20" aria-labelledby="audience-links-heading">
    <div className="container mx-auto px-4">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="space-y-5">
            <h2 id="audience-links-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
              Humans in control at every level
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Each adult around a student sees what they need and controls what they should.
            </p>
          </div>
        </AnimateOnScroll>

        <ul className="divide-y divide-gray-200 border-y border-gray-200">
          {audiences.map((a, i) => (
            <li key={a.id}>
              <AnimateOnScroll delay={i * 60}>
                <Link
                  to={a.path}
                  className="group grid grid-cols-[4.5rem_minmax(0,1fr)_auto] sm:grid-cols-[6rem_minmax(0,1fr)_auto] items-center gap-4 sm:gap-6 py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-mentra-blue focus-visible:ring-offset-4 rounded-sm"
                >
                  <img
                    src={illustration[a.id]}
                    alt=""
                    aria-hidden="true"
                    width={96}
                    height={96}
                    loading="lazy"
                    decoding="async"
                    className="w-[4.5rem] h-[4.5rem] sm:w-24 sm:h-24 object-contain group-hover:scale-105 transition-transform duration-300 motion-reduce:transition-none"
                  />
                  <span>
                    <span className="block text-lg font-bold text-gray-900 group-hover:text-mentra-blue transition-colors">
                      {a.eyebrow}
                    </span>
                    <span className="block text-base text-gray-700 leading-relaxed mt-1">{a.cardLine}</span>
                  </span>
                  <ArrowRight
                    className="h-5 w-5 text-gray-400 group-hover:text-mentra-blue group-hover:translate-x-1 transition-[color,transform]"
                    aria-hidden="true"
                  />
                </Link>
              </AnimateOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AudienceLinks;
