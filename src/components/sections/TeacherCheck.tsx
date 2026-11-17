import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick } from 'lucide-react';
import { cn } from '@/lib/utils';

// Beat 8 of the homepage story: one student turn, its label in the teacher's report, and the teacher opening the
// exact exchange behind it. All wording is the app's own:
// - Row: src/components/teacher/independence-report/EvidenceList.tsx + copyEvidence.ts in the Mentra App repo
//   (activityLabel "Sprig conversation", independenceLabel "with help", the with_help note, "Open this turn").
// - Opened view: src/pages/teacher/TeacherConversationReview.tsx ("Student Conversation Review"; the linked message
//   gets aria-current and a mentra-blue ring).
// The date is the conversation's (conv_20261025...). Layout is simplified for the page; see the caption.
// Keep this to one turn. Don't add rules about how labels are scored or graded: the page only shows what a teacher can
// see and open.

const REPORT_ROW = {
  date: 'Oct 25, 2026',
  activity: 'Sprig conversation',
  label: 'with help',
  note: 'Shown for context — help on this turn is weighed separately, not as independent work.',
  link: 'Open this turn',
};

type Props = {
  /** 0 nothing, 1 the turn, 2 its row in the report, 3 "Open this turn" pressed, 4 the exchange is open */
  step: number;
  hint: string;
  turn: string;
  /** Phones: the turn card makes way for the opened exchange, which shows the same turn */
  compact?: boolean;
  /** Reduced motion and no-JS-timing contexts: everything at rest, no entrance motion */
  still?: boolean;
};

const enter = (still: boolean, delay = 0) =>
  still
    ? { initial: false as const }
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number], delay },
      };

const SprigAvatar = () => (
  <img
    src="/images/sprig/sprig-greet-80.webp"
    alt=""
    aria-hidden="true"
    width={32}
    height={32}
    decoding="async"
    className="h-7 w-7 sm:h-8 sm:w-8 shrink-0 object-contain"
  />
);

const TeacherCheck = ({ step, hint, turn, compact = false, still = false }: Props) => {
  const showTurn = step >= 1 && !(compact && step >= 4);
  // Phones: opening the turn moves to the review, as the app does, and the label rides along at the top of it.
  const showRow = step >= 2 && !(compact && step >= 4);
  const pressed = step >= 3;
  const showExchange = step >= 4;

  return (
    <div className={cn('flex w-full flex-col gap-3 sm:gap-4', compact && 'min-h-0')}>
      {showTurn && (
        <motion.figure {...enter(still)} className="m-0 flex flex-col items-end gap-1">
          <figcaption className="text-xs font-medium text-gray-500">Jordan&rsquo;s turn</figcaption>
          <p className="max-w-[92%] rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm sm:text-[15px] leading-relaxed text-gray-800 shadow-sm">
            {turn}
          </p>
        </motion.figure>
      )}

      {showRow && (
        <motion.div {...enter(still)} className="rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-900/5">
          <p className="border-b border-gray-100 px-4 py-2 text-xs font-semibold text-gray-500">
            Teacher&rsquo;s report &middot; Jordan &middot; Recent turns
          </p>
          <div className="space-y-1 px-4 py-3 text-[13px] sm:text-sm leading-snug text-gray-700">
            <p>
              <span>{REPORT_ROW.date}</span>
              {' · '}
              <span>{REPORT_ROW.activity}</span>
              {' · '}
              <span className="rounded bg-amber-100 px-1.5 py-0.5 font-semibold text-amber-900">{REPORT_ROW.label}</span>
            </p>
            <p className="text-gray-500">{REPORT_ROW.note}</p>
            <p
              className={cn(
                'inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 -ml-1.5 font-semibold text-mentra-blue underline underline-offset-4 transition-colors duration-300',
                pressed && 'bg-mentra-blue/10',
              )}
            >
              {REPORT_ROW.link}
              {pressed && !still && (
                <motion.span initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.25 }}>
                  <MousePointerClick className="h-4 w-4" aria-hidden="true" />
                </motion.span>
              )}
            </p>
          </div>
        </motion.div>
      )}

      {showExchange && (
        <motion.div
          {...enter(still)}
          className={cn(
            'rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-900/5',
            compact && 'flex min-h-0 flex-col overflow-hidden',
          )}
        >
          <p className="shrink-0 border-b border-gray-100 px-4 py-2 text-xs font-semibold text-gray-500">
            Student Conversation Review &middot; the exchange behind it
          </p>
          {compact && (
            <p className="shrink-0 border-b border-gray-100 px-4 py-2 text-[13px] text-gray-700">
              Opened from {REPORT_ROW.date} &middot; {REPORT_ROW.activity} &middot;{' '}
              <span className="rounded bg-amber-100 px-1.5 py-0.5 font-semibold text-amber-900">{REPORT_ROW.label}</span>
            </p>
          )}
          {/* Phones: if the screen is too short, the exchange is clipped from the top, like a chat scrolled to the linked
              message, so the outlined turn always shows. column-reverse around one child pins it to the bottom while
              keeping reading order; the panel still shrinks to its content on taller screens. */}
          <div className={cn(compact && 'relative flex min-h-0 flex-col-reverse overflow-hidden before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-6 before:bg-gradient-to-b before:from-white before:to-transparent')}>
          <div className="flex shrink-0 flex-col gap-3 p-3 sm:p-4">
            <div className="flex items-start gap-2">
              <SprigAvatar />
              <p className="max-w-[88%] rounded-2xl border border-blue-100 bg-blue-50 px-3.5 py-2.5 text-[13px] sm:text-sm leading-relaxed text-gray-800">
                <span className="mb-0.5 block text-xs font-medium text-gray-500">Sprig</span>
                {hint}
              </p>
            </div>
            <div className="flex justify-end">
              <p
                aria-current="true"
                className="max-w-[88%] rounded-2xl border border-gray-200 bg-white px-3.5 py-2.5 text-[13px] sm:text-sm leading-relaxed text-gray-800 ring-2 ring-mentra-blue ring-offset-2"
              >
                <span className="mb-0.5 block text-xs font-medium text-gray-500">Jordan</span>
                {turn}
              </p>
            </div>
          </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TeacherCheck;
