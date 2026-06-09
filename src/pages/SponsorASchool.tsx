import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import PageTransition from '@/components/layout/PageTransition';
import SprigOrb from '@/components/ui/SprigOrb';
import { Button } from '@/components/ui/button';
import {
  Heart,
  ArrowRight,
  Server,
  Cpu,
  Gift,
  Wrench,
  LifeBuoy,
  GraduationCap,
  ShieldCheck,
  Users,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
 * GIVEBUTTER CAMPAIGN CONFIG
 *
 * The live progress bar + donation form is the Givebutter widget. It updates
 * itself — no backend, no manual edits. To connect it:
 *
 *   1. Create the campaign in Givebutter for the school you're funding.
 *   2. Open the campaign → Share → Embed → "Widget".
 *   3. Givebutter gives you a snippet that looks like:
 *
 *        <script src="https://widgets.givebutter.com/latest.umd.cjs?acct=ABC123&p=other"></script>
 *        <givebutter-widget id="XyZ987"></givebutter-widget>
 *
 *   4. Copy the acct=... value into GIVEBUTTER_ACCOUNT and the widget id
 *      (the id="..." on <givebutter-widget>) into GIVEBUTTER_WIDGET_ID below.
 *
 * Until BOTH are filled in, the page shows a styled placeholder instead of
 * the live widget, so you can preview the layout safely.
 * ────────────────────────────────────────────────────────────────────────── */
const GIVEBUTTER_ACCOUNT = '';   // e.g. 'ABC123'
const GIVEBUTTER_WIDGET_ID = ''; // e.g. 'XyZ987'

/* Story details — safe to edit freely. We'll sponsor a Title I–eligible
 * school (a federal designation for schools serving a high share of
 * low-income families). Fill in schoolName once it's announced; the copy
 * reads naturally both before and after. */
const CAMPAIGN = {
  schoolName: '',                // e.g. 'Lincoln Middle School' — leave '' until announced
  term: 'a full school year',
};

const isLive = Boolean(GIVEBUTTER_ACCOUNT && GIVEBUTTER_WIDGET_ID);
// A noun phrase usable mid-sentence whether or not the school is named yet.
const schoolPhrase = CAMPAIGN.schoolName || 'the Title I school we choose';

/** Loads the Givebutter widget script once and renders the campaign widget.
 *  Falls back to a placeholder card until the campaign is connected. */
const GivebutterWidget = () => {
  useEffect(() => {
    if (!isLive) return;
    const src = `https://widgets.givebutter.com/latest.umd.cjs?acct=${GIVEBUTTER_ACCOUNT}&p=other`;
    if (document.querySelector(`script[src="${src}"]`)) return;
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
    // Intentionally left mounted: Givebutter registers a global custom element,
    // and re-adding the script on remount causes duplicate registration.
  }, []);

  if (!isLive) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center">
        <div className="w-12 h-12 bg-mentra-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Heart className="w-6 h-6 text-mentra-blue" aria-hidden="true" />
        </div>
        <p className="font-bold text-gray-900 mb-1">Live donation widget appears here</p>
        <p className="text-sm text-gray-500 leading-relaxed">
          Once the Givebutter campaign is connected, this becomes the donation
          form with a self-updating progress thermometer. See the setup notes at
          the top of <code className="text-xs bg-gray-200 px-1 py-0.5 rounded">SponsorASchool.tsx</code>.
        </p>
      </div>
    );
  }

  // Custom element rendered via createElement to avoid JSX intrinsic typing.
  return React.createElement('givebutter-widget', { id: GIVEBUTTER_WIDGET_ID });
};

const coverage = [
  {
    heading: 'Your gift covers the running costs',
    subhead: 'The part that genuinely costs money to keep on.',
    highlight: false,
    items: [
      { icon: Server, label: 'Cloud hosting & infrastructure', text: 'The servers that run Mentra for every student at the school, every day.' },
      { icon: Cpu, label: 'AI model & API usage', text: 'The real compute cost behind every tutoring session, reflection, and piece of feedback.' },
    ],
    footer: 'These are the only costs that scale with each student — so this is exactly where your dollars go.',
  },
  {
    heading: 'Mentra donates everything else',
    subhead: 'No part of this is a discounted sale. The product is given.',
    highlight: true,
    items: [
      { icon: Gift, label: 'The full platform & its IP', text: 'Years of product, research, and engineering — contributed at no cost.' },
      { icon: Wrench, label: 'Onboarding & teacher training', text: 'Setup, integration with the school\'s existing systems, and hands-on training labor.' },
      { icon: LifeBuoy, label: 'Support for the whole year', text: 'Ongoing help for teachers, families, and admins — included.' },
    ],
    footer: 'Because Mentra absorbs the product, people, and support, your donation isn\'t buying software — it\'s keeping the lights on for kids who couldn\'t otherwise reach it.',
  },
];

const unlocks = [
  {
    icon: GraduationCap,
    title: 'A mentor for every student',
    description: `Socratic tutoring that guides thinking instead of handing over answers — ${CAMPAIGN.term} of it, for every student at ${schoolPhrase}.`,
  },
  {
    icon: Users,
    title: 'Teachers in command',
    description: 'The teacher intelligence hub, full override on every AI decision, and tools that show how students actually think.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe by architecture',
    description: 'COPPA/FERPA compliance, parent-gated data, and fail-closed consent are built in — funding never trades away safety.',
  },
];

export default function SponsorASchool() {
  const scrollTo = (id: string) => () =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <PageTransition>
      <div className="min-h-screen font-rounded bg-white">
        <Header />

        {/* HERO */}
        <section
          className="relative bg-gradient-to-b from-mentra-blue/5 via-white to-white overflow-hidden"
          aria-labelledby="sponsor-hero-heading"
        >
          <div
            className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-screen-xl px-4 py-24 sm:py-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: text */}
              <div className="text-center lg:text-left space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-mentra-blue/10 text-mentra-blue text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full">
                    <Heart className="w-4 h-4" aria-hidden="true" />
                    Sponsor a school
                  </div>
                  <h1
                    id="sponsor-hero-heading"
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight text-balance"
                  >
                    A new divide is forming.{' '}
                    <span className="bg-gradient-to-r from-mentra-blue to-growth-green bg-clip-text text-transparent">
                      Help us close it.
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    We're funding {CAMPAIGN.term} of Mentra for a Title I school — one serving a
                    community that couldn't pay for it on its own. You cover the cost of running it;
                    Mentra donates the rest.
                  </p>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      size="lg"
                      onClick={scrollTo('give')}
                      className="bg-mentra-blue hover:bg-mentra-blue/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 shadow-lg hover:shadow-xl group focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2"
                      aria-label="Go to the donation form"
                    >
                      Become a sponsor
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={scrollTo('coverage')}
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2"
                      aria-label="See where your money goes"
                    >
                      Where your money goes
                    </Button>
                  </div>
                </div>
              </div>
              {/* Right: Sprig with heart */}
              <div className="flex justify-center lg:justify-end">
                <SprigOrb size="lg">
                  <img
                    src="/images/sprig/MENTRA_SPRIG_GIVE.webp"
                    alt="One Sprig handing a heart to a smaller Sprig — the gift of equal access to learning"
                    width="400"
                    height="400"
                    className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] drop-shadow-2xl animate-breathe motion-reduce:animate-none"
                  />
                </SprigOrb>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT'S AT STAKE */}
        <section className="py-24 bg-gray-50" aria-labelledby="stakes-heading">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 id="stakes-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
                  What's at stake
                </h2>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={80}>
              <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Well-resourced schools and families are already buying their kids AI tutors,
                  coaches, and writing partners. Under-resourced schools are getting device bans
                  and worksheets. The same technology that could level the field is, right now,
                  tilting it further.
                </p>
                <p>
                  If that holds, the gap stops being about who owns the newest laptop and becomes
                  something deeper — a divide in who gets to <span className="font-semibold text-gray-900">learn how to think</span>{' '}
                  with the tools of their era. That advantage compounds for a lifetime.
                </p>
                <p>
                  Mentra was built to be the exception: AI that makes itself less necessary, that
                  builds independent thinkers instead of dependent users. The students who need
                  that most should be the first to have it — not the last. Cost is the only thing
                  standing in the way. So we're removing it.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* WHERE YOUR MONEY GOES */}
        <section id="coverage" className="py-24 bg-white scroll-mt-20" aria-labelledby="coverage-heading">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-14">
                <h2 id="coverage-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
                  Where your money goes
                </h2>
                <p className="text-lg text-gray-500">
                  This isn't a discount or a free trial. Mentra gives the product away — your gift
                  covers only what it actually costs to run.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
              {coverage.map((col, i) => (
                <AnimateOnScroll key={col.heading} delay={i * 100}>
                  <div
                    className={`h-full rounded-2xl p-6 sm:p-8 ${
                      col.highlight
                        ? 'bg-white border-2 border-mentra-blue/30 shadow-md'
                        : 'bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{col.heading}</h3>
                    <p className="text-sm text-gray-500 mb-6">{col.subhead}</p>
                    <ul className="space-y-5">
                      {col.items.map((item) => (
                        <li key={item.label} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-mentra-blue/10 rounded-lg flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-mentra-blue" aria-hidden="true" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-sm sm:text-base">{item.label}</div>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-500 leading-relaxed mt-6 pt-6 border-t border-gray-200">
                      {col.footer}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT IT UNLOCKS */}
        <section className="py-24 bg-gray-50" aria-labelledby="unlocks-heading">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-14">
                <h2 id="unlocks-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
                  What the funding unlocks
                </h2>
                <p className="text-lg text-gray-500">
                  Not a stripped-down version. The full platform, in every student's hands.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
              {unlocks.map((item, i) => (
                <AnimateOnScroll key={item.title} delay={i * 100}>
                  <div className="h-full bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-mentra-blue/40 hover:shadow-md transition-all">
                    <div className="w-10 h-10 bg-mentra-blue/10 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-mentra-blue" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* GIVE — story + live widget */}
        <section id="give" className="py-24 bg-white scroll-mt-20" aria-labelledby="give-heading">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
              <AnimateOnScroll>
                <div className="space-y-6">
                  <h2 id="give-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
                    Sponsor the school
                  </h2>
                  <p className="text-lg text-gray-500 leading-relaxed">
                    We're partnering with a Title I&ndash;eligible school &mdash; a federal
                    designation for schools serving a high share of low-income families &mdash; and
                    we'll announce it here. Every dollar moves the goal closer to {CAMPAIGN.term} of
                    fully-funded Mentra for its students.
                  </p>
                  <p className="text-lg text-gray-500 leading-relaxed">
                    Give once or set up a recurring gift. You'll get a tax-deductible receipt, and
                    you can watch the progress bar fill in real time as the community rallies.
                  </p>
                  <a
                    href="/about"
                    className="inline-flex items-center gap-2 text-mentra-blue font-semibold hover:gap-3 transition-all"
                  >
                    Read what we believe
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <GivebutterWidget />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* BELIEF SIGN-OFF */}
        <section className="py-20 bg-gray-50" aria-labelledby="belief-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <AnimateOnScroll>
                <h2 id="belief-heading" className="sr-only">Our belief</h2>
                <p className="text-xl sm:text-2xl text-gray-700 italic mb-4 leading-relaxed max-w-3xl mx-auto">
                  "I don't want my kids growing up in a world where the best version of help is
                  reserved for the families who can afford it. If AI can teach a child to think,
                  that can't be a privilege — it has to be a starting line everyone shares."
                </p>
                <p className="font-bold text-gray-900">Edward Kerr</p>
                <p className="text-sm text-gray-400">Founder &amp; CEO, Mentra</p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
