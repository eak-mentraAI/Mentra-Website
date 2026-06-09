import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import PageTransition from '../components/layout/PageTransition';
import { Heart, GraduationCap, Users, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

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

/* Story details — safe to edit freely. Copy below reads naturally whether or
 * not a specific school is named yet. Leave schoolName as '' to keep it
 * generic until the partnership is public. */
const CAMPAIGN = {
  schoolName: '',                 // e.g. 'Lincoln Middle School'
  location: 'an area of need',    // e.g. 'rural Mississippi'
  term: 'a full school year',
};

const isLive = Boolean(GIVEBUTTER_ACCOUNT && GIVEBUTTER_WIDGET_ID);
const schoolLabel = CAMPAIGN.schoolName || 'a school in an area of need';

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
    // and re-adding the script on remount/return causes duplicate registration.
  }, []);

  if (!isLive) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center">
        <Heart className="w-8 h-8 text-growth-green mx-auto mb-4" aria-hidden="true" />
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

const fundsImpact = [
  {
    icon: GraduationCap,
    title: 'A full year of Mentra, free',
    description: `Every student at ${schoolLabel} gets ${CAMPAIGN.term} of Socratic AI tutoring, struggle detection, and growth tracking — at no cost to the school or families.`,
  },
  {
    icon: Users,
    title: 'Teachers, fully equipped',
    description: 'The teacher intelligence hub, override controls, and assignment tools — so educators lead with AI, not around it.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe by architecture',
    description: 'COPPA/FERPA-compliant, parent-gated data, and fail-closed consent come standard. Funding never compromises safety.',
  },
];

export default function SponsorASchool() {
  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-white flex flex-col items-center font-rounded">

        {/* Hero */}
        <section className="relative overflow-hidden w-full" aria-labelledby="sponsor-hero-heading">
          <div className="mx-auto max-w-screen-xl px-4 py-24 sm:py-32 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-growth-green">
                <Heart className="w-4 h-4" aria-hidden="true" />
                Sponsor a school
              </div>
              <h1
                id="sponsor-hero-heading"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight text-balance"
              >
                Education should be free and equal for those in need
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
                We're raising the cost of {CAMPAIGN.term} of Mentra for {schoolLabel} in{' '}
                {CAMPAIGN.location} — so every student there gets an AI mentor that builds
                independent thinkers, regardless of what their family can afford.
              </p>
            </div>
          </div>
        </section>

        {/* Campaign: story + live widget */}
        <section className="w-full bg-gray-50 py-24" aria-labelledby="campaign-heading">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
              {/* Story */}
              <AnimateOnScroll>
                <div className="space-y-6">
                  <h2 id="campaign-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance">
                    Why this school, why now
                  </h2>
                  <p className="text-lg text-gray-500 leading-relaxed">
                    The students who stand to gain the most from a thoughtful AI mentor are
                    too often the ones least able to access one. We want to change that — one
                    school at a time, starting here.
                  </p>
                  <p className="text-lg text-gray-500 leading-relaxed">
                    Your gift doesn't buy a subscription. It removes a barrier: it gives an
                    entire school {CAMPAIGN.term} of Mentra at no cost, so the question stops
                    being "can we afford this?" and starts being "what can these students do?"
                  </p>
                  <div className="pt-2">
                    <a
                      href="/about"
                      className="inline-flex items-center gap-2 text-mentra-blue font-semibold hover:gap-3 transition-all"
                    >
                      Read what we believe
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Live widget */}
              <AnimateOnScroll delay={100}>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <GivebutterWidget />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* What your gift funds */}
        <section className="w-full py-24 bg-white" aria-labelledby="impact-heading">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 id="impact-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
                  What your gift funds
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Every dollar goes toward putting the full Mentra platform in students' hands —
                  with nothing held back.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {fundsImpact.map((item, i) => (
                <AnimateOnScroll key={item.title} delay={i * 100}>
                  <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 h-full">
                    <div className="w-10 h-10 bg-growth-green/10 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-growth-green" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Belief sign-off */}
        <section className="w-full bg-gray-50 py-20" aria-labelledby="belief-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <AnimateOnScroll>
                <Sparkles className="w-8 h-8 text-growth-green mx-auto mb-6" aria-hidden="true" />
                <h2 id="belief-heading" className="sr-only">Our belief</h2>
                <p className="text-xl sm:text-2xl text-gray-700 italic mb-4 leading-relaxed max-w-3xl mx-auto">
                  "The students who could gain the most from a great teacher shouldn't lose out
                  because of a zip code. If we believe AI can help kids think for themselves, then
                  the kids who need it most should be the first to have it — not the last."
                </p>
                <p className="font-bold text-gray-900">The Mentra team</p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </PageTransition>
  );
}
