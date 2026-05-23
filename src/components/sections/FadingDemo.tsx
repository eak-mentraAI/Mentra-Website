import React, { useState } from 'react';

type Stage = {
  label: string;
  sublabel: string;
  aiText: string;
  aiOpacity: number;
  aiSize: string;
  studentText: string;
  studentOpacity: number;
  studentSize: string;
};

const stages: Stage[] = [
  {
    label: 'Week 1',
    sublabel: 'Heavy scaffolding',
    aiText:
      "I notice you're adding fractions with different denominators. Let's go step-by-step. First — what does 'denominator' mean to you? We'll find a common one together.",
    aiOpacity: 1,
    aiSize: 'text-base',
    studentText: '…the bottom number?',
    studentOpacity: 0.55,
    studentSize: 'text-sm',
  },
  {
    label: 'Week 4',
    sublabel: 'Lighter touch',
    aiText: 'Looking at 1/3 + 1/4 — what\'s your first move?',
    aiOpacity: 0.7,
    aiSize: 'text-sm',
    studentText:
      'I need a common denominator. 3 × 4 = 12. So 4/12 + 3/12 = 7/12. I think?',
    studentOpacity: 0.85,
    studentSize: 'text-base',
  },
  {
    label: 'Week 12',
    sublabel: 'Stepped back',
    aiText: '👍',
    aiOpacity: 0.35,
    aiSize: 'text-2xl',
    studentText:
      'Found 12 as the common denominator, converted both fractions, added the numerators, got 7/12. Already in lowest terms. Checked it.',
    studentOpacity: 1,
    studentSize: 'text-base',
  },
];

const FadingDemo = () => {
  const [stageIdx, setStageIdx] = useState(0);
  const stage = stages[stageIdx];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8">
      <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
        Support that fades as students grow
      </h3>
      <p className="text-sm text-gray-400 text-center mb-8">
        Drag to see how AI scaffolding shrinks while student capability grows.
      </p>

      {/* Slider */}
      <div className="mb-8">
        <input
          type="range"
          min={0}
          max={stages.length - 1}
          step={1}
          value={stageIdx}
          onChange={(e) => setStageIdx(parseInt(e.target.value, 10))}
          aria-label="Time elapsed from Week 1 to Week 12"
          aria-valuetext={`${stage.label}: ${stage.sublabel}`}
          className="w-full accent-mentra-blue cursor-pointer"
        />
        <div className="flex justify-between mt-3">
          {stages.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setStageIdx(i)}
              className={`text-xs font-semibold uppercase tracking-[0.14em] transition-colors px-1 ${
                i === stageIdx
                  ? 'text-mentra-blue'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* AI vs Student bubbles */}
      <div className="space-y-4 min-h-[210px]">
        {/* AI scaffold */}
        <div
          className="flex items-start gap-3 transition-opacity duration-500"
          style={{ opacity: stage.aiOpacity }}
        >
          <img
            src="/images/sprig/nerd.png"
            alt=""
            width="32"
            height="32"
            className="w-8 h-8 object-contain mt-1 flex-shrink-0"
            aria-hidden="true"
          />
          <div className="bg-mentra-blue/5 border border-mentra-blue/10 rounded-2xl rounded-tl-md p-4 flex-1">
            <p className={`text-gray-800 leading-relaxed transition-all duration-500 ${stage.aiSize}`}>
              {stage.aiText}
            </p>
          </div>
        </div>

        {/* Student response */}
        <div
          className="ml-11 transition-opacity duration-500"
          style={{ opacity: stage.studentOpacity }}
        >
          <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tr-md p-4">
            <p className={`text-gray-700 italic leading-relaxed transition-all duration-500 ${stage.studentSize}`}>
              {stage.studentText}
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-xs uppercase tracking-[0.18em] text-gray-400 mt-8">
        {stage.sublabel}
      </p>
    </div>
  );
};

export default FadingDemo;
