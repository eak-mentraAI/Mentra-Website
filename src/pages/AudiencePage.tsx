import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ScreenStory from '@/components/sections/ScreenStory';
import { Button } from '@/components/ui/button';
import TrustSection from '@/components/sections/TrustSection';
import { useScheduleCall } from '@/contexts/ScheduleCallContext';
import { getAudience, type Audience } from '@/data/audiences';
import { personas } from '@/data/personas';
import { SHOWCASE_DISCLOSURE } from '@/data/productScreens';

/** One template for /teachers, /parents and /schools. Copy lives in src/data/audiences.ts. */
const AudiencePage = ({ audienceId }: { audienceId: Audience['id'] }) => {
  const audience = getAudience(audienceId);
  const stats = personas.find((p) => p.id === audience.statsPersonaId)?.stats;
  const { open: openScheduleCall } = useScheduleCall();

  useEffect(() => {
    const previous = document.title;
    document.title = audience.docTitle;
    return () => {
      document.title = previous;
    };
  }, [audience.docTitle]);

  return (
    <PageTransition>
      <div className="min-h-screen font-rounded bg-white flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <section className="bg-gradient-to-b from-mentra-blue/5 via-white to-white">
            <div className="container mx-auto max-w-4xl px-4 pt-32 sm:pt-40 pb-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-mentra-blue mb-4">
                {audience.eyebrow}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight text-balance mb-6">
                {audience.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
                {audience.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="bg-mentra-blue hover:bg-mentra-blue/90 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl group"
                  onClick={openScheduleCall}
                >
                  Book a walkthrough
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full font-medium text-lg"
                >
                  <Link to="/#the-story">See Sprig in action</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Proof: real screens as one pinned scroll scene, the same motion as the homepage story */}
          <ScreenStory beats={audience.proof} label={`${audience.eyebrow}: real screens`} note={SHOWCASE_DISCLOSURE} />

          {/* Pilot plan (schools) */}
          {audience.pilot && (
            <section className="py-24 bg-white" aria-labelledby="pilot-heading">
              <div className="container mx-auto max-w-4xl px-4">
                <AnimateOnScroll>
                  <h2 id="pilot-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center text-balance">
                    What a pilot would measure
                  </h2>
                  <p className="text-lg text-gray-500 text-center leading-relaxed max-w-2xl mx-auto mb-10">
                    We agree the questions and the measures with you before the pilot starts, so the result is yours to judge.
                  </p>
                  <div className="overflow-hidden rounded-2xl border border-gray-200">
                    <table className="w-full text-left text-sm sm:text-base">
                      <thead className="bg-gray-50 text-gray-500">
                        <tr>
                          <th scope="col" className="px-4 sm:px-6 py-3 font-semibold">Question</th>
                          <th scope="col" className="px-4 sm:px-6 py-3 font-semibold">How we'd measure it</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {audience.pilot.map((row) => (
                          <tr key={row.question} className="align-top">
                            <th scope="row" className="px-4 sm:px-6 py-4 font-semibold text-gray-900 w-2/5">{row.question}</th>
                            <td className="px-4 sm:px-6 py-4 text-gray-600 leading-relaxed">{row.evidence}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mt-6">
                    This is a proposed evaluation plan, not a claim of results. The screens on this page show how the
                    product behaves. They are not evidence of long-term learning gains or return on investment, and
                    that's what a pilot is for.
                  </p>
                </AnimateOnScroll>
              </div>
            </section>
          )}

          {/* Stat tiles (schools) */}
          {stats && (
            <section className="py-16 bg-gray-50" aria-label="At a glance">
              <div className="container mx-auto max-w-5xl px-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-mentra-blue mb-1">{s.value}</div>
                    <div className="text-xs text-gray-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <TrustSection className="bg-white" />

          {/* Feature cards for this audience */}
          {audience.features.map((group, gi) => {
            const blurbs = personas.find((p) => p.id === group.personaId)?.blurbs ?? [];
            const headingId = `features-${group.personaId}`;
            return (
              <section key={group.personaId} className={`py-20 ${gi % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`} aria-labelledby={headingId}>
                <div className="container mx-auto max-w-5xl px-4">
                  <h2 id={headingId} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center text-balance">
                    {group.title}
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blurbs.map((b, i) => (
                      <AnimateOnScroll key={b.title} delay={(i % 3) * 100}>
                        <div className={`rounded-2xl p-6 h-full ${gi % 2 === 0 ? 'bg-white border border-gray-100' : 'bg-gray-50'}`}>
                          <div className="w-10 h-10 bg-mentra-blue/10 rounded-lg flex items-center justify-center mb-4">
                            <b.icon className="w-5 h-5 text-mentra-blue" />
                          </div>
                          <h3 className="text-base font-bold text-gray-900 mb-2">{b.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{b.text}</p>
                        </div>
                      </AnimateOnScroll>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}

          {audience.more && (
            <section className={`pb-24 text-center ${audience.features.length % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
              <p className="text-gray-500 mb-4">{audience.more.text}</p>
              <Link
                to={audience.more.href}
                className="inline-flex items-center gap-2 text-mentra-blue font-semibold hover:gap-3 transition-all"
              >
                {audience.more.label}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </section>
          )}
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default AudiencePage;
