import React, { useState } from 'react';

type Stage = {
  label: string;
  relationship: string;
  studentWork: string;
  sprigText: string;
};

const stages: Stage[] = [
  {
    label: 'Week 1',
    relationship: 'Sprig leads. You\'re learning the moves.',
    studentWork: '1/3 + 1/4 = ?',
    sprigText:
      "Different bottom numbers — that's the tricky kind. Let's slow down together. What does the bottom number tell you about how big each piece is?",
  },
  {
    label: 'Week 4',
    relationship: 'You lead. Sprig coaches the edges.',
    studentWork:
      '1/3 + 1/4  →  need common denominator  →  3 × 4 = 12  →  4/12 + 3/12 = 7/12',
    sprigText:
      "Nice work — you named the strategy and ran it cleanly. Quick stretch question: is multiplying the denominators always the fastest way to find a common one? Try 1/4 + 1/6 and see what you notice.",
  },
  {
    label: 'Week 12',
    relationship: 'You own it. Sprig stays in your corner.',
    studentWork:
      '1/3 + 1/4 = 7/12.  Checked: 0.333 + 0.25 ≈ 0.583 = 7/12.  ✓',
    sprigText:
      "I love that decimal check — that's how mathematicians build trust in their own answers. You've been leaning into verification lately, and it shows. How's it feeling? Ready for harder territory, or want to keep building this muscle?",
  },
];

const FadingDemo = () => {
  const [position, setPosition] = useState(0); // 0–100, continuous

  const stageIdx = position < 34 ? 0 : position < 67 ? 1 : 2;
  const stage = stages[stageIdx];

  // Continuous bar values that update smoothly during drag
  const aiScaffolding = Math.max(12, Math.round(100 - position * 0.88));
  const studentCapability = Math.max(12, Math.round(position * 0.88 + 12));

  const snapTo = (idx: number) => setPosition(idx === 0 ? 0 : idx === 1 ? 50 : 100);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
      <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
        Support that fades as students grow
      </h3>
      <p className="text-sm text-gray-400 text-center mb-8 max-w-md mx-auto">
        Drag forward. Sprig's role evolves from teacher to peer — the scaffolding fades, the care doesn't.
      </p>

      {/* Continuous slider */}
      <div className="mb-6">
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={position}
          onChange={(e) => setPosition(parseInt(e.target.value, 10))}
          aria-label="Time elapsed from Week 1 to Week 12"
          aria-valuetext={`${stage.label}: ${stage.relationship}`}
          className="w-full accent-mentra-blue cursor-pointer h-2"
        />
        <div className="flex justify-between mt-3">
          {stages.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onClick={() => snapTo(i)}
              className={`text-xs font-semibold uppercase tracking-[0.14em] transition-colors px-1 ${
                i === stageIdx ? 'text-mentra-blue' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Continuous capability bars — update smoothly with drag */}
      <div className="mb-8 space-y-3">
        <div>
          <div className="flex justify-between text-xs text-gray-500 mb-1.5">
            <span>AI scaffolding</span>
            <span className="font-mono text-gray-400 tabular-nums">{aiScaffolding}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-mentra-blue rounded-full"
              style={{ width: `${aiScaffolding}%`, transition: 'width 120ms linear' }}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs text-gray-500 mb-1.5">
            <span>Student capability</span>
            <span className="font-mono text-gray-400 tabular-nums">{studentCapability}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-growth-green rounded-full"
              style={{ width: `${studentCapability}%`, transition: 'width 120ms linear' }}
            />
          </div>
        </div>
      </div>

      {/* Conversation snapshot — student work first, Sprig responds.
          Re-mounted on stage change so children fade in cleanly. */}
      <div className="space-y-5 min-h-[260px]" key={stageIdx}>
        {/* Student work (always shown first — student initiates) */}
        <div className="ml-10 sm:ml-12 animate-fade-in-up">
          <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 mb-1.5 text-right">
            Student work
          </p>
          <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tr-md p-4">
            <p className="text-gray-700 text-sm leading-relaxed font-mono">
              {stage.studentWork}
            </p>
          </div>
        </div>

        {/* Sprig responds — always warm, calibrated in depth */}
        <div className="flex items-start gap-3 animate-fade-in-up">
          <img
            src="/images/sprig/nerd.png"
            alt=""
            width="32"
            height="32"
            className="w-8 h-8 object-contain mt-1 flex-shrink-0"
            aria-hidden="true"
          />
          <div className="flex-1 min-w-0">
            <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 mb-1.5">
              Sprig
            </p>
            <div className="bg-mentra-blue/5 border border-mentra-blue/10 rounded-2xl rounded-tl-md p-4">
              <p className="text-gray-800 text-sm leading-relaxed">
                {stage.sprigText}
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-xs uppercase tracking-[0.18em] text-gray-400 mt-8">
        {stage.relationship}
      </p>
    </div>
  );
};

export default FadingDemo;
