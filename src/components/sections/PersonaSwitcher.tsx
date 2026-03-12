import React, { useState } from 'react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { personas, colorBorderMap } from '@/data/personas';

const PersonaSwitcher = () => {
  const [activeId, setActiveId] = useState('students');
  const active = personas.find((p) => p.id === activeId)!;

  return (
    <section id="personas" className="py-16 bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center text-balance">
          Humans in <span className="bg-gradient-to-r from-mentra-blue to-growth-green bg-clip-text text-transparent">Control</span> at Every Level
        </h2>

        {/* Tab row */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {personas.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                activeId === p.id
                  ? 'bg-mentra-blue text-white shadow-lg shadow-mentra-blue/25'
                  : 'text-gray-700 hover:bg-gray-100 bg-white border border-gray-200'
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
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {active.subtext}
            </p>
          </div>

          {/* Problem card */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className={`bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 ${active.problemBorderColor}`}>
              {active.problemStatement}
            </div>
          </div>

          {/* Stats bar (institutions only) */}
          {active.stats && (
            <div className="max-w-4xl mx-auto mb-12">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {active.stats.map((s, i) => (
                  <AnimateOnScroll key={s.label} variant="scale-in" delay={i * 100}>
                    <div className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-lg hover:scale-105 transition-all duration-300">
                      <div className="text-3xl font-bold text-mentra-blue mb-1">{s.value}</div>
                      <div className="text-xs text-gray-600">{s.label}</div>
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
                  <div className={`bg-white rounded-2xl shadow-sm p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-transparent ${colorBorderMap[b.color] || ''} group`}>
                    <div className={`w-12 h-12 bg-${b.color}/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <b.icon className={`w-6 h-6 text-${b.color}`} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{b.text}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonaSwitcher;
