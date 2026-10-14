import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { audiences } from '@/data/audiences';

/** Homepage pointer to the three audience pages. Each card previews one real screen; the detail lives on the page. */
const AudienceLinks = () => (
  <section id="personas" className="py-24 bg-white scroll-mt-20" aria-labelledby="audience-links-heading">
    <div className="container mx-auto px-4">
      <AnimateOnScroll>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            id="audience-links-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance"
          >
            Humans in control at every level
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Each adult around a student sees what they need and controls what they should.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {audiences.map((a, i) => (
          <AnimateOnScroll key={a.id} delay={i * 100}>
            <Link
              to={a.path}
              className="group flex flex-col h-full rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl hover:shadow-gray-900/5 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="h-44 overflow-hidden border-b border-gray-100 bg-gray-50">
                <img
                  src={a.preview.src}
                  alt=""
                  aria-hidden="true"
                  width={a.preview.width}
                  height={a.preview.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-left-top"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mentra-blue mb-2">{a.eyebrow}</p>
                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2">{a.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{a.cardLine}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-mentra-blue group-hover:gap-3 transition-all">
                  See {a.eyebrow}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceLinks;
