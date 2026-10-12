import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import ProductScreen from '@/components/ui/ProductScreen';
import { Button } from '@/components/ui/button';
import TrustSection from '@/components/sections/TrustSection';
import { useScheduleCall } from '@/contexts/ScheduleCallContext';
import { getAudience, type Audience } from '@/data/audiences';
import { personas } from '@/data/personas';
import { SHOWCASE_DISCLOSURE } from '@/data/productScreens';

/** One template for /teachers, /parents and /schools. Copy lives in src/data/audiences.ts. */
const AudiencePage = ({ audienceId }: { audienceId: Audience['id'] }) => {
  const audience = getAudience(audienceId);
  const persona = personas.find((p) => p.id === audience.personaId);
  const { open: openScheduleCall } = useScheduleCall();

  useEffect(() => {
    const previous = document.title;
    document.title = `${audience.docTitle} | Mentra`;
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
                  <Link to="/#see-it-in-action">See a student's week</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Proof: real screens, each with what to notice */}
          <section className="pb-24" aria-label="Real product screens">
            <div className="container mx-auto max-w-5xl px-4 space-y-20">
              {audience.proof.map((p, i) => (
                <AnimateOnScroll key={p.title}>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400 mb-2">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-balance">{p.title}</h2>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mb-6">{p.text}</p>
                    <ProductScreen screen={p.screen} />
                  </div>
                </AnimateOnScroll>
              ))}
              <p className="text-xs text-gray-400 text-center leading-relaxed max-w-3xl mx-auto">
                {SHOWCASE_DISCLOSURE}
              </p>
            </div>
          </section>

          {/* Pilot plan (schools) */}
          {audience.pilot && (
            <section className="py-24 bg-white border-t border-gray-100" aria-labelledby="pilot-heading">
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

          <TrustSection />

          {/* Everything else for this audience */}
          {persona && (
            <section className="py-24 bg-white" aria-labelledby="more-heading">
              <div className="container mx-auto max-w-5xl px-4">
                <h2 id="more-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center text-balance">
                  {audience.moreTitle}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {persona.blurbs.map((b, i) => (
                    <AnimateOnScroll key={b.title} delay={(i % 3) * 100}>
                      <div className="bg-gray-50 rounded-2xl p-6 h-full">
                        <div className="w-10 h-10 bg-mentra-blue/10 rounded-lg flex items-center justify-center mb-4">
                          <b.icon className="w-5 h-5 text-mentra-blue" />
                        </div>
                        <h3 className="text-base font-bold text-gray-900 mb-2">{b.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{b.text}</p>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
                {audience.more && (
                  <div className="mt-12 text-center">
                    <p className="text-gray-500 mb-4">{audience.more.text}</p>
                    <Link
                      to={audience.more.href}
                      className="inline-flex items-center gap-2 text-mentra-blue font-semibold hover:gap-3 transition-all"
                    >
                      {audience.more.label}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                )}
              </div>
            </section>
          )}
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default AudiencePage;
