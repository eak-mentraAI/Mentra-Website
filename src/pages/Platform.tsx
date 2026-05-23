import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import PageTransition from '@/components/layout/PageTransition';
import { useScheduleCall } from '@/contexts/ScheduleCallContext';
import { Button } from '@/components/ui/button';
import {
  Database,
  Users,
  BookOpen,
  Brain,
  Plug,
  ArrowDown,
  ArrowRight,
  Shield,
  CheckCircle2,
  XCircle,
  Layers,
} from 'lucide-react';

type VendorChip = {
  name: string;
  logo?: string;
};

type StackLayerProps = {
  step: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  vendors: VendorChip[];
  role: string;
  protocol?: string;
  isMentra?: boolean;
  highlight?: string;
};

const LOGO_BASE = '/images/logos/partners';

const stackLayers: StackLayerProps[] = [
  {
    step: '01',
    title: 'District Source of Truth',
    icon: Database,
    vendors: [
      { name: 'PowerSchool', logo: `${LOGO_BASE}/powerschool.svg` },
      { name: 'Infinite Campus', logo: `${LOGO_BASE}/infinite-campus.png` },
      { name: 'Skyward', logo: `${LOGO_BASE}/skyward.png` },
      { name: 'Aeries', logo: `${LOGO_BASE}/aeries.png` },
    ],
    role: 'Student Information Systems store enrollments, schedules, and demographics — the district\'s authoritative roster.',
    protocol: 'OneRoster / nightly sync',
  },
  {
    step: '02',
    title: 'Identity + Access Layer',
    icon: Users,
    vendors: [
      { name: 'Clever', logo: `${LOGO_BASE}/clever.png` },
      { name: 'ClassLink', logo: `${LOGO_BASE}/classlink.webp` },
      { name: 'Google Workspace', logo: `${LOGO_BASE}/google-workspace.svg` },
      { name: 'Microsoft 365', logo: `${LOGO_BASE}/microsoft-365.png` },
    ],
    role: 'SSO and rostering services provision accounts, manage classroom membership, and broker single sign-on across tools.',
    protocol: 'OIDC / SSO',
  },
  {
    step: '03',
    title: 'Learning Management System',
    icon: BookOpen,
    vendors: [
      { name: 'Canvas', logo: `${LOGO_BASE}/canvas.svg` },
      { name: 'Schoology', logo: `${LOGO_BASE}/schoology.webp` },
      { name: 'Google Classroom', logo: `${LOGO_BASE}/google-classroom.png` },
      { name: 'Blackboard', logo: `${LOGO_BASE}/blackboard.png` },
    ],
    role: 'The LMS owns assignments, grading, teacher workflows, and course organization — the classroom hub.',
    protocol: 'LTI 1.3 Advantage',
  },
  {
    step: '04',
    title: 'Mentra — The Cognition Layer',
    icon: Brain,
    vendors: [],
    role: 'Mentra captures HOW students think while they learn — calibration confidence, scaffold reliance, productive struggle, reasoning quality — and turns it into actionable signal for teachers and partner systems.',
    protocol: 'OAuth2 / Partner API',
    isMentra: true,
    highlight: 'The Moat',
  },
  {
    step: '05',
    title: 'Partner Ecosystem',
    icon: Plug,
    vendors: [
      { name: 'Parent Platforms' },
      { name: 'NWEA MAP', logo: `${LOGO_BASE}/nwea-map.webp` },
      { name: 'Renaissance STAR', logo: `${LOGO_BASE}/renaissance-star.png` },
      { name: 'Research / Analytics' },
      { name: 'District MIS' },
    ],
    role: 'External systems consume Mentra\'s cognition metadata under scoped, district-governed API permissions to power dashboards, interventions, and longitudinal research.',
  },
];

const mentraInternals = [
  {
    title: 'Student Learning Experience',
    description: 'Students work naturally inside modules — Guided QA, Writing & Reflection, Coding, Investigations, Assignments, Prompt Labs.',
    badge: null,
  },
  {
    title: 'Cognition Substrate',
    description: 'Captures the signals no other tool measures: calibration confidence, scaffold reliance, productive struggle, reasoning quality, intervention responsiveness, evidence usage, cognitive persistence.',
    badge: 'The Moat',
  },
  {
    title: 'LTI 1.3 Advantage Platform',
    description: 'Deep Linking, OIDC Launch, NRPS roster sync, AGS grade passback — with cognitive comments attached to grades returned to the LMS.',
    badge: null,
  },
  {
    title: 'Partner API + OAuth2 Layer',
    description: 'Versioned JSON schema contracts, scoped access, OAuth2 + PKCE, district-safe governance and permissions — so cognition data flows safely to the systems that need it.',
    badge: null,
  },
];

const traditionalMetrics = [
  'What students completed',
  'Whether answers were correct',
  'Assignment scores',
];

const mentraMetrics = [
  'How students reasoned through a problem',
  'How much support they needed — and whether it faded',
  'How they responded to intervention',
  'How confidently and accurately they think',
  'How learning behaviors evolve over time',
];

const standards = [
  { name: 'OneRoster', description: 'Nightly roster sync from the SIS' },
  { name: 'LTI 1.3 Advantage', description: 'Deep Linking, OIDC, NRPS roster, AGS grade passback' },
  { name: 'Rostering & SSO', description: 'Clever, ClassLink, Google, Microsoft' },
  { name: 'OAuth 2.0 + PKCE', description: 'Scoped partner API access' },
];

const StackLayer: React.FC<{ layer: StackLayerProps; index: number; isLast: boolean }> = ({
  layer,
  isLast,
}) => {
  const Icon = layer.icon;
  const baseCard =
    'relative rounded-2xl border p-6 sm:p-8 transition-all duration-300';
  const mentraCard =
    'bg-mentra-blue text-white border-mentra-blue shadow-xl ring-4 ring-mentra-blue/20 scale-100 sm:scale-[1.02]';
  const normalCard =
    'bg-white border-gray-200 hover:border-mentra-blue/40 hover:shadow-md';

  return (
    <div className="relative">
      <div className={`${baseCard} ${layer.isMentra ? mentraCard : normalCard}`}>
        <div className="flex items-start gap-4 sm:gap-6">
          <div
            className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center ${
              layer.isMentra ? 'bg-white/15' : 'bg-mentra-blue/10'
            }`}
          >
            <Icon
              className={`w-6 h-6 sm:w-7 sm:h-7 ${
                layer.isMentra ? 'text-white' : 'text-mentra-blue'
              }`}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span
                className={`text-xs font-mono tracking-wider ${
                  layer.isMentra ? 'text-white/70' : 'text-gray-400'
                }`}
              >
                LAYER {layer.step}
              </span>
              {layer.highlight && (
                <span className="text-xs font-bold uppercase tracking-wider bg-white text-mentra-blue px-2.5 py-0.5 rounded-full">
                  {layer.highlight}
                </span>
              )}
            </div>
            <h3
              className={`text-xl sm:text-2xl font-bold mb-3 ${
                layer.isMentra ? 'text-white' : 'text-gray-900'
              }`}
            >
              {layer.title}
            </h3>
            <p
              className={`text-sm sm:text-base leading-relaxed mb-4 ${
                layer.isMentra ? 'text-white/90' : 'text-gray-500'
              }`}
            >
              {layer.role}
            </p>
            {layer.vendors.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center">
              {layer.vendors.map((v) => {
                if (v.logo && !layer.isMentra) {
                  return (
                    <div
                      key={v.name}
                      className="w-32 h-14 sm:w-36 sm:h-16 p-2 rounded-lg bg-white border border-gray-200 flex items-center justify-center"
                      title={v.name}
                    >
                      <img
                        src={v.logo}
                        alt={v.name}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  );
                }
                return (
                  <span
                    key={v.name}
                    className={`text-xs sm:text-sm min-h-14 sm:min-h-16 px-3 sm:px-4 py-2 rounded-lg font-medium inline-flex items-center text-center ${
                      layer.isMentra
                        ? 'bg-white/15 text-white border border-white/20'
                        : 'bg-gray-50 text-gray-700 border border-gray-200'
                    }`}
                  >
                    {v.name}
                  </span>
                );
              })}
            </div>
            )}
          </div>
        </div>
      </div>

      {!isLast && (
        <div className="flex flex-col items-center py-3" aria-hidden="true">
          <div className="flex flex-col items-center gap-1">
            <ArrowDown className="w-5 h-5 text-gray-300" />
            {layer.protocol && (
              <span className="text-[11px] sm:text-xs font-mono text-gray-400 tracking-wide">
                {layer.protocol}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const Platform = () => {
  const { open: openScheduleCall } = useScheduleCall();

  return (
    <PageTransition>
      <div className="min-h-screen font-rounded bg-white">
        <Header />

        {/* HERO */}
        <section className="relative pt-16 pb-20 sm:pt-20 sm:pb-24 bg-gradient-to-b from-mentra-blue/5 via-white to-white overflow-hidden">
          <div
            className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none"
            aria-hidden="true"
          />
          <div className="container mx-auto px-4 relative">
            <AnimateOnScroll>
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-mentra-blue/10 text-mentra-blue text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                  <Layers className="w-4 h-4" />
                  PLATFORM ARCHITECTURE
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance leading-tight">
                  The Cognition Infrastructure Layer for K–12
                </h1>
                <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
                  Mentra sits downstream of the LMS as a learning tool, and upstream of partners
                  as a cognition platform — capturing how students think and making that signal
                  available, safely, to the systems districts already use.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    onClick={openScheduleCall}
                    className="bg-mentra-blue hover:bg-mentra-blue/90 text-white px-7 py-6 rounded-full font-medium text-base shadow-sm hover:shadow-md"
                  >
                    Talk to our integrations team
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <a
                    href="#stack"
                    className="inline-flex items-center justify-center bg-white border border-gray-200 hover:border-mentra-blue/40 text-gray-900 px-7 py-3 rounded-full font-medium text-base transition-colors"
                  >
                    See the stack
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* STACK DIAGRAM */}
        <section id="stack" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-14">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
                  Mentra in the K–12 ecosystem
                </h2>
                <p className="text-lg text-gray-500">
                  Five layers, one direction of flow. Mentra sits where capability gets built —
                  and where new signal becomes available to everything downstream.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="max-w-4xl mx-auto">
              {stackLayers.map((layer, i) => (
                <AnimateOnScroll key={layer.title} delay={i * 60}>
                  <StackLayer
                    layer={layer}
                    index={i}
                    isLast={i === stackLayers.length - 1}
                  />
                </AnimateOnScroll>
              ))}
            </div>

          </div>
        </section>

        {/* WHAT'S INSIDE MENTRA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-14">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
                  What's inside Mentra
                </h2>
                <p className="text-lg text-gray-500">
                  Four interlocking layers — a learning surface, the cognition substrate that
                  makes it valuable, and the integration rails that move signal in and out.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-6xl mx-auto">
              {mentraInternals.map((item, i) => (
                <AnimateOnScroll key={item.title} delay={i * 80}>
                  <div className="h-full bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-mentra-blue/40 hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                      {item.badge && (
                        <span className="text-xs font-bold uppercase tracking-wider bg-mentra-blue text-white px-2.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* TRADITIONAL VS MENTRA */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-14">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
                  What Mentra measures
                </h2>
                <p className="text-lg text-gray-500">
                  Existing tools measure outcomes. Mentra measures the cognition behind them.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-5 sm:gap-6 max-w-6xl mx-auto">
              <AnimateOnScroll>
                <div className="h-full bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <XCircle className="w-5 h-5 text-gray-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      Traditional tools measure
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {traditionalMetrics.map((m) => (
                      <li key={m} className="flex items-start gap-3 text-gray-600 text-sm sm:text-base">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <div className="h-full bg-white border-2 border-mentra-blue/30 rounded-2xl p-6 sm:p-8 shadow-md relative">
                  <div className="absolute -top-3 left-6 bg-mentra-blue text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Mentra
                  </div>
                  <div className="flex items-center gap-3 mb-5 mt-2">
                    <div className="w-10 h-10 bg-mentra-blue/10 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-mentra-blue" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      Mentra measures
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {mentraMetrics.map((m) => (
                      <li key={m} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                        <CheckCircle2 className="mt-1 w-4 h-4 text-mentra-blue flex-shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* STANDARDS & INTEGRATIONS */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center mb-14">
                <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                  <Shield className="w-4 h-4" />
                  STANDARDS-BASED
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
                  Built on standards your district already uses
                </h2>
                <p className="text-lg text-gray-500">
                  No proprietary connectors. No custom integration tax. Mentra speaks the
                  protocols your SIS, SSO, and LMS already speak.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto">
              {standards.map((s, i) => (
                <AnimateOnScroll key={s.name} delay={i * 50}>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 sm:p-6 hover:border-mentra-blue/40 transition-colors">
                    <div className="font-mono text-sm sm:text-base font-bold text-gray-900 mb-1.5">
                      {s.name}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">{s.description}</div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Platform;
