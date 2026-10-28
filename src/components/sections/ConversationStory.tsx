import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarDays, MousePointerClick } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductVideo from '@/components/ui/ProductVideo';
import { useScheduleCall } from '@/contexts/ScheduleCallContext';
import { screens, SHOWCASE_DISCLOSURE } from '@/data/productScreens';
import { cn } from '@/lib/utils';

// Jordan's conversation, quoted from the full transcript of conv_20261025232607_09774c6b
// (marketing/carousel/2026-10-14/tours/s5-student-turn/attempt-16/transcript.md in the app repo).
// Sprig lines are live production output; Jordan is a simulated student. Pills quote the policy's recorded
// method for that turn. Keep the claim scope of the 2026-10-27 production notes: nothing here says Jordan
// learned it or got there on his own. The evaluator read his turns as partial, and the teacher's report
// labels his photosynthesis turn (turn 7, the last one here) "repeated what Sprig said"; that turn is the one
// the teacher video opens.
type Turn = { who: 'student' | 'sprig'; text: string; pill?: string; reportLabel?: string };

const turns: Turn[] = [
  { who: 'student', text: 'hey can you just tell me the answer to why plants need sunlight, its for my worksheet' },
  {
    who: 'sprig',
    text: "That's a worksheet question, so I'm not going to hand you the answer — but I can help you get there fast. Here's where I'll start: what do you think the sunlight is actually doing for the plant?",
    pill: 'Sprig asks what he thinks',
  },
  { who: 'student', text: 'ugh fine... idk like maybe it keeps them warm or something?' },
  {
    who: 'sprig',
    text: "Warmth is a reasonable first guess — sunlight does give off heat — but plants can grow in pretty cold places as long as they get light, so warmth isn't the main thing. Here's a nudge: what do you think a plant produces that keeps it alive?",
  },
  { who: 'student', text: 'oh um... food? like they make their own food somehow?' },
  {
    who: 'sprig',
    text: "Right — plants do make their own food. So now connect those two things: if sunlight isn't just warming the plant, what might it be doing to help the plant make that food?",
    pill: 'A targeted hint',
  },
  { who: 'student', text: 'oh wait is it like... giving the plant energy to actually make the food?' },
  {
    who: 'sprig',
    text: "Yes — that's the key idea right there. So for your worksheet: sunlight gives the plant the energy it needs to make its own food. That's the answer, in your own words already.",
  },
  { who: 'student', text: 'oh ok so i can just write "sunlight gives the plant energy to make its own food"? that actually makes sense lol' },
  { who: 'sprig', text: "That works for the worksheet. There's actually a name for that whole process — do you know what it's called?" },
  { who: 'student', text: 'oh is it like photosynthesis or something??' },
  {
    who: 'sprig',
    text: "That's it — photosynthesis is exactly the word. So now you've got the full picture: plants use sunlight as energy to run photosynthesis, which is how they make their food.",
  },
  {
    who: 'student',
    text: "ok so like plants use sunlight to make food through photosynthesis, got it, that's actually pretty cool ngl",
    reportLabel: 'repeated what Sprig said',
  },
];

type Beat = { eyebrow: string; title: string; text: string; shown: number; labelled?: boolean; video?: boolean };

// Each beat is one stop of the scroll. `shown` is how many turns of the conversation are on screen.
const beats: Beat[] = [
  { eyebrow: 'A real conversation', title: "Jordan wants the answer. Sprig won't hand it over.", text: 'It asks what Jordan thinks the sunlight is doing for the plant.', shown: 2 },
  { eyebrow: 'A first guess', title: 'A wrong guess gets a nudge.', text: 'Sprig says why warmth isn’t the main thing, and asks a narrower question.', shown: 4 },
  { eyebrow: 'A targeted hint', title: 'The question gets narrower.', text: 'Sprig connects the two ideas Jordan already has, and leaves the last step to him.', shown: 6 },
  { eyebrow: 'The idea', title: 'Jordan puts it in his own words.', text: 'Sunlight is the energy a plant uses to make its own food.', shown: 8 },
  { eyebrow: 'Then a name for it', title: 'Sprig asks what the process is called.', text: 'Jordan guesses photosynthesis, and Sprig sums up the whole picture.', shown: 12 },
  {
    eyebrow: 'Then the teacher sees it',
    title: 'Whose thinking was it?',
    text: "Jordan's last turn repeats what Sprig just said. His teacher's report labels it that way, and doesn't count it as independent work.",
    shown: 13,
    labelled: true,
  },
  {
    eyebrow: 'One click to check',
    title: 'The teacher opens the exact turn.',
    text: 'Every label links to the turn behind it, so the teacher can see the evidence for themselves.',
    shown: 13,
    labelled: true,
    video: true,
  },
];

const CTA_BEAT = beats.length;

const Bubble = ({ turn, labelled }: { turn: Turn; labelled: boolean }) => (
  <div className={cn('flex flex-col gap-1.5', turn.who === 'student' ? 'items-end' : 'items-start')}>
    <div
      className={cn(
        'max-w-[88%] rounded-2xl border px-4 py-3 text-sm sm:text-[15px] leading-relaxed text-gray-800 transition-shadow duration-500',
        turn.who === 'student' ? 'bg-mentra-blue/[0.07] border-mentra-blue/15 rounded-br-md' : 'bg-growth-green/[0.09] border-growth-green/25 rounded-bl-md',
        labelled && turn.reportLabel && 'ring-2 ring-amber-400 ring-offset-2',
      )}
    >
      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-gray-500 mb-1">
        {turn.who === 'student' ? 'Jordan' : 'Sprig'}
      </span>
      {turn.text}
    </div>
    {turn.pill && (
      <span className="rounded-full bg-gray-900 px-2.5 py-1 text-xs font-semibold text-white">{turn.pill}</span>
    )}
    {labelled && turn.reportLabel && (
      <motion.span
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 22, delay: 0.15 }}
        className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-900"
      >
        Teacher&rsquo;s report: {turn.reportLabel}
      </motion.span>
    )}
  </div>
);

const ChatWindow = ({ shown, animate, labelled }: { shown: number; animate: boolean; labelled: boolean }) => (
  <div className="flex h-full min-h-0 flex-col rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-900/5 overflow-hidden">
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100 bg-gray-50 shrink-0">
      <span className="flex gap-1.5" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
      </span>
      <span className="text-xs font-medium text-gray-500 truncate">Student · Q&amp;A with Sprig</span>
    </div>
    <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-2 text-xs text-gray-500 shrink-0">
      <span className="rounded-md bg-amber-100 px-1.5 py-0.5 font-semibold text-amber-800">Worksheet</span>
      <span className="truncate">Why do plants need sunlight?</span>
    </div>
    {/* Bottom-anchored like a real chat: new turns push older ones up and out of view. */}
    <div className="flex min-h-0 flex-1 flex-col justify-end gap-3 overflow-hidden p-4 sm:p-5">
      {/* No exit animations, for the same reason as the narration: fast scrolls must never leave stale turns. */}
      {turns.slice(0, shown).map((turn, i) => (
        <motion.div
          key={i}
          layout={animate ? 'position' : false}
          initial={animate ? { opacity: 0, y: 16 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: animate && turn.who === 'sprig' && i === shown - 1 ? 0.35 : 0 }}
        >
          <Bubble turn={turn} labelled={labelled} />
        </motion.div>
      ))}
    </div>
  </div>
);

const CtaPanel = ({ onBook }: { onBook: () => void }) => (
  <div className="flex flex-col items-start gap-6">
    <h3 className="text-3xl sm:text-5xl font-bold leading-[1.08] tracking-tight text-white text-balance max-w-2xl">
      See the whole loop on a walkthrough.
    </h3>
    <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
      From a student&rsquo;s first question to the label on the teacher&rsquo;s report, with time for your questions.
    </p>
    <div className="flex flex-col sm:flex-row gap-3">
      <Button
        size="lg"
        className="bg-mentra-blue hover:bg-mentra-blue/90 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label="Book a walkthrough with the Mentra team"
        onClick={onBook}
      >
        <CalendarDays className="mr-2 h-5 w-5" aria-hidden="true" />
        Book a walkthrough
      </Button>
      <Button
        asChild
        size="lg"
        variant="outline"
        className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 py-4 rounded-full font-medium text-lg"
      >
        <Link to="/teachers">See Mentra for teachers</Link>
      </Button>
    </div>
    <p className="text-xs text-gray-400 leading-relaxed max-w-xl">{SHOWCASE_DISCLOSURE}</p>
  </div>
);

/** Static version for reduced motion: the whole story, readable top to bottom, no pinning. */
const StaticStory = ({ onBook }: { onBook: () => void }) => (
  <div className="container mx-auto px-4 py-24 grid gap-12 lg:grid-cols-2 lg:items-start">
    <div className="space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mentra-blue">A real conversation</p>
      <h2 id="conversation-story-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
        Jordan wants the answer. Sprig won&rsquo;t hand it over.
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        It asks what the sunlight is doing for the plant, nudges past a first guess about warmth, and lets Jordan reach
        the idea: sunlight is the energy a plant uses to make its own food.
      </p>
    </div>
    <div className="h-[40rem]"><ChatWindow shown={turns.length} animate={false} labelled /></div>
    <div className="space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mentra-blue">Then the teacher sees it</p>
      <p className="text-lg text-gray-600 leading-relaxed">{beats[CTA_BEAT - 2].text} {beats[CTA_BEAT - 1].text}</p>
    </div>
    <ProductVideo {...screens.teacherTurnTrace.video!} alt={screens.teacherTurnTrace.alt} width={1280} height={720} />
    <div className="lg:col-span-2 rounded-3xl bg-gray-900 p-8 sm:p-12"><CtaPanel onBook={onBook} /></div>
  </div>
);

/**
 * The homepage story as one pinned, scroll-driven scene: Jordan's conversation builds turn by turn, the teacher's
 * view follows, and the scene ends on the booking ask. Reduced-motion visitors get StaticStory instead.
 */
const ConversationStory = () => {
  const { open: openScheduleCall } = useScheduleCall();
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [beat, setBeat] = useState(0);

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] });
  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const next = Math.min(CTA_BEAT, Math.floor(p * (CTA_BEAT + 1)));
    setBeat((prev) => (prev === next ? prev : next));
  });

  if (reduceMotion) {
    return (
      <section id="the-story" className="bg-gray-50 scroll-mt-16" aria-labelledby="conversation-story-heading">
        <StaticStory onBook={openScheduleCall} />
      </section>
    );
  }

  const shownBeat = Math.min(beat, CTA_BEAT - 1);
  const current = beats[shownBeat];
  const showVideo = !!current.video;
  const showCta = beat >= CTA_BEAT;

  // Jump straight past the pinned scene; a smooth scroll would play every beat on the way.
  const skipStory = () => {
    const next = trackRef.current?.parentElement?.nextElementSibling as HTMLElement | null;
    if (next) window.scrollTo({ top: next.getBoundingClientRect().top + window.scrollY - 64, behavior: 'instant' as ScrollBehavior });
  };

  return (
    <section id="the-story" className="relative bg-gray-50" aria-labelledby="conversation-story-heading">
      {/* Scroll track: its height sets how long the scene stays pinned (~55vh of scroll per beat). */}
      <div ref={trackRef} style={{ height: `${(CTA_BEAT + 1) * 55 + 30}vh` }}>
        <div className="sticky top-16 h-[calc(100svh-4rem)] overflow-hidden">
          {/* Bottom padding on phones keeps the chat clear of the fixed Cookie Settings pill */}
          <div className="container mx-auto h-full px-4 pt-5 pb-16 sm:py-10 grid grid-rows-[auto_minmax(0,1fr)] gap-5 lg:grid-rows-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12 lg:items-center">
            {/* Narration */}
            <div className="relative">
              <h2 id="conversation-story-heading" className="sr-only">
                Jordan asks Sprig for the answer, and his teacher sees whose thinking it was
              </h2>
              {/* Keyed remount, no exit animation: a fast scroll can skip several beats, and queued exits would
                  leave stale narration on screen. */}
                <motion.div
                  key={shownBeat}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                  className="space-y-2 sm:space-y-4"
                  aria-live="polite"
                >
                  <p className="flex items-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-mentra-blue">
                    {current.eyebrow}
                    {/* Phones get a step count in place of the desktop rail */}
                    <span className="lg:hidden normal-case tracking-normal font-medium text-gray-500">
                      {shownBeat + 1} of {beats.length}
                    </span>
                  </p>
                  <p className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.08] tracking-tight text-balance">
                    {current.title}
                  </p>
                  {current.text && (
                    <p className="text-sm sm:text-lg text-gray-600 leading-relaxed max-w-xl">{current.text}</p>
                  )}
                </motion.div>
              {/* Progress rail: one tick per beat, so the visitor knows the scene ends. */}
              <div className="mt-3 lg:mt-10 flex items-center gap-4">
                <div className="hidden lg:flex gap-1.5" aria-hidden="true">
                  {beats.map((_, i) => (
                    <span key={i} className={cn('h-1 w-8 rounded-full transition-colors duration-300', i <= beat ? 'bg-mentra-blue' : 'bg-gray-200')} />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={skipStory}
                  className="text-xs sm:text-sm font-medium text-gray-500 underline-offset-4 hover:text-gray-900 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-mentra-blue rounded"
                >
                  Skip the story
                </button>
              </div>
            </div>

            {/* Stage: the chat, then the teacher's view */}
            <div className="relative h-full min-h-0 lg:h-[min(72vh,40rem)]">
              <motion.div
                className="absolute inset-0"
                animate={{ opacity: showVideo ? 0 : 1, scale: showVideo ? 0.96 : 1 }}
                transition={{ duration: 0.45 }}
                aria-hidden={showVideo}
              >
                <ChatWindow shown={current.shown} animate labelled={!!current.labelled} />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex flex-col justify-center gap-3"
                initial={false}
                animate={{ opacity: showVideo ? 1 : 0, y: showVideo ? 0 : 30 }}
                transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                aria-hidden={!showVideo}
                style={{ pointerEvents: showVideo ? 'auto' : 'none' }}
              >
                <ProductVideo {...screens.teacherTurnTrace.video!} alt={screens.teacherTurnTrace.alt} width={1280} height={720} />
                <p className="flex items-center gap-2 text-sm text-gray-500">
                  <MousePointerClick className="h-4 w-4 text-mentra-blue" aria-hidden="true" />
                  Jordan&rsquo;s teacher opens the turn labelled &ldquo;repeated what Sprig said&rdquo;.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Final beat: the booking ask wipes in over the scene. */}
          <motion.div
            className="absolute inset-0 bg-gray-900 flex items-center"
            initial={false}
            animate={{ clipPath: showCta ? 'circle(150% at 85% 85%)' : 'circle(0% at 85% 85%)' }}
            transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
            aria-hidden={!showCta}
            // Keep the hidden CTA out of the tab order until it wipes in
            {...(showCta ? {} : { inert: '' })}
            style={{ pointerEvents: showCta ? 'auto' : 'none' }}
          >
            <div className="container mx-auto px-4">
              <CtaPanel onBook={openScheduleCall} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConversationStory;
