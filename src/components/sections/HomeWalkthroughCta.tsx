import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScheduleCall } from '@/contexts/ScheduleCallContext';

/**
 * The homepage's booking ask, after the reader has seen the whole loop: Jordan's story, the help-level slider, and what
 * the teacher sees. It used to be the last beat of the pinned ConversationStory; it keeps that scene's circular wipe,
 * now played once when the band scrolls into view.
 */
const HomeWalkthroughCta = () => {
  const { open: openScheduleCall } = useScheduleCall();
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const shown = reduceMotion || inView;

  return (
    <section ref={ref} id="walkthrough" className="bg-white py-10 sm:py-14 scroll-mt-16" aria-labelledby="walkthrough-heading">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto rounded-[2rem] bg-gray-900 px-6 py-12 sm:px-12 sm:py-16"
          initial={reduceMotion ? false : { clipPath: 'circle(0% at 85% 85%)' }}
          animate={{ clipPath: shown ? 'circle(150% at 85% 85%)' : 'circle(0% at 85% 85%)' }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
        >
          <div className="flex flex-col items-start gap-6">
            <h2
              id="walkthrough-heading"
              className="text-3xl sm:text-5xl font-bold leading-[1.08] tracking-tight text-white text-balance max-w-2xl"
            >
              See the whole loop on a walkthrough.
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
              From a student&rsquo;s first question to the label on the teacher&rsquo;s report, with time for your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-mentra-blue hover:bg-mentra-blue/90 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Book a walkthrough with the Mentra team"
                onClick={openScheduleCall}
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeWalkthroughCta;
