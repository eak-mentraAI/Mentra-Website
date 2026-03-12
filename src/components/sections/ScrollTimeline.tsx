import React, { useRef, useState, useEffect } from 'react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

interface ScrollTimelineProps {
  steps: Step[];
}

const colorBgMap: Record<string, string> = {
  'mentra-blue': 'bg-mentra-blue',
  'curiosity-coral': 'bg-curiosity-coral',
  'growth-green': 'bg-growth-green',
  'grit-gold': 'bg-grit-gold',
  'wisdom-purple': 'bg-wisdom-purple',
};

const colorTextMap: Record<string, string> = {
  'mentra-blue': 'text-mentra-blue',
  'curiosity-coral': 'text-curiosity-coral',
  'growth-green': 'text-growth-green',
  'grit-gold': 'text-grit-gold',
  'wisdom-purple': 'text-wisdom-purple',
};

const colorBgLightMap: Record<string, string> = {
  'mentra-blue': 'bg-mentra-blue/10',
  'curiosity-coral': 'bg-curiosity-coral/10',
  'growth-green': 'bg-growth-green/10',
  'grit-gold': 'bg-grit-gold/10',
  'wisdom-purple': 'bg-wisdom-purple/10',
};

export default function ScrollTimeline({ steps }: ScrollTimelineProps) {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(i);
        },
        { threshold: 0.5, rootMargin: '-10% 0px -40% 0px' },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const progressPercent = steps.length > 1 ? (activeStep / (steps.length - 1)) * 100 : 0;

  return (
    <>
      {/* Desktop: sticky sidebar + scrollable content */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {/* Left: sticky timeline nav */}
        <nav className="lg:col-span-2 sticky top-24 self-start" aria-label="Flywheel steps">
          <div className="relative pl-8">
            {/* Background track */}
            <div className="absolute left-[15px] top-0 w-0.5 h-full bg-gray-200 rounded-full" />
            {/* Progress fill */}
            <div
              className="absolute left-[15px] top-0 w-0.5 bg-mentra-blue rounded-full transition-all duration-500"
              style={{ height: `${progressPercent}%` }}
            />

            <div className="space-y-10">
              {steps.map((step, i) => (
                <button
                  key={step.number}
                  onClick={() => {
                    stepRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="flex items-center gap-4 text-left w-full group"
                  aria-current={i === activeStep ? 'step' : undefined}
                >
                  {/* Node */}
                  <div
                    className={`absolute left-0 w-[31px] h-[31px] rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      i <= activeStep
                        ? `${colorBgMap[step.color]} border-transparent text-white`
                        : 'bg-white border-gray-300 text-gray-400'
                    }`}
                  >
                    {step.number}
                  </div>
                  {/* Label */}
                  <span
                    className={`transition-all duration-300 font-semibold text-base ${
                      i === activeStep ? 'text-gray-900' : 'text-gray-400'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Right: scrollable step content */}
        <div className="lg:col-span-3 space-y-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => { stepRefs.current[i] = el; }}
              className={`min-h-[20vh] flex items-center transition-all duration-500 ${
                prefersReducedMotion
                  ? 'opacity-100'
                  : i === activeStep
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-30 translate-y-4'
              }`}
            >
              <div className={`${colorBgLightMap[step.color]} rounded-2xl p-8 w-full`}>
                <div className={`w-14 h-14 ${colorBgMap[step.color]}/20 rounded-xl flex items-center justify-center mb-5`}>
                  <step.icon className={`w-7 h-7 ${colorTextMap[step.color]}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / Tablet: inline vertical timeline */}
      <div className="lg:hidden max-w-2xl mx-auto">
        <div className="relative pl-10">
          {/* Track line */}
          <div className="absolute left-[15px] top-0 w-0.5 h-full bg-gray-200 rounded-full" />
          <div
            className="absolute left-[15px] top-0 w-0.5 bg-mentra-blue rounded-full transition-all duration-500"
            style={{ height: `${progressPercent}%` }}
          />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => {
                  // Mobile refs share the same array; only set if not already set by desktop
                  if (!stepRefs.current[i]) stepRefs.current[i] = el;
                }}
                className="relative"
              >
                {/* Node */}
                <div
                  className={`absolute -left-10 top-1 w-[31px] h-[31px] rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    i <= activeStep
                      ? `${colorBgMap[step.color]} border-transparent text-white`
                      : 'bg-white border-gray-300 text-gray-400'
                  }`}
                >
                  {step.number}
                </div>
                {/* Content */}
                <div className={`${colorBgLightMap[step.color]} rounded-2xl p-6`}>
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className={`w-6 h-6 ${colorTextMap[step.color]}`} />
                    <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
