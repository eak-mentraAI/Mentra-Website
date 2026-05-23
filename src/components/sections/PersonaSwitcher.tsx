import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { personas, colorBorderMap } from '@/data/personas';

const PersonaSwitcher = () => {
  const [activeId, setActiveId] = useState('students');
  const active = personas.find((p) => p.id === activeId)!;

  return (
    <section id="personas" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center text-balance">
          Humans in control at every level
        </h2>
        <p className="text-lg text-gray-500 mb-12 text-center max-w-2xl mx-auto">
          Every stakeholder sees what they need and controls what they should.
        </p>

        {/* Tab row */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {personas.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                activeId === p.id
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100 bg-white border border-gray-200'
              }`}
            >
              {p.tabLabel}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div key={activeId} className="animate-fade-in-up">
          {/* Headline */}
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-snug text-balance">
              {active.headline}
            </h3>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              {active.subtext}
            </p>
          </div>

          {/* Problem card */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className={`bg-gray-50 rounded-2xl p-6 sm:p-8 border-l-4 ${active.problemBorderColor}`}>
              {active.problemStatement}
            </div>
          </div>

          {/* Stats bar (institutions only) */}
          {active.stats && (
            <div className="max-w-4xl mx-auto mb-12">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {active.stats.map((s, i) => (
                  <AnimateOnScroll key={s.label} variant="scale-in" delay={i * 100}>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-mentra-blue mb-1">{s.value}</div>
                      <div className="text-xs text-gray-500">{s.label}</div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          )}

          {/* Blurb grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {active.blurbs.map((b, i) => (
                <AnimateOnScroll key={b.title} delay={i * 100}>
                  <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-200 group">
                    <div className="w-10 h-10 bg-mentra-blue/10 rounded-lg flex items-center justify-center mb-4">
                      <b.icon className="w-5 h-5 text-mentra-blue" />
                    </div>
                    <h4 className="text-base font-bold text-gray-900 mb-2">{b.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{b.text}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Persona-specific deep dive link */}
          {active.deepDive && (
            <AnimateOnScroll>
              <div className="max-w-4xl mx-auto mt-12">
                <Link
                  to={active.deepDive.href}
                  className="group block bg-gradient-to-br from-mentra-blue to-mentra-blue/85 rounded-2xl p-6 sm:p-8 text-left hover:shadow-xl hover:shadow-mentra-blue/20 transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center">
                      <Layers className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-1">
                        {active.deepDive.eyebrow}
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {active.deepDive.title}
                      </h4>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {active.deepDive.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-mentra-blue px-5 py-2.5 rounded-full font-semibold text-sm group-hover:gap-3 transition-all whitespace-nowrap self-start sm:self-auto">
                      {active.deepDive.ctaLabel}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </div>
    </section>
  );
};

export default PersonaSwitcher;
