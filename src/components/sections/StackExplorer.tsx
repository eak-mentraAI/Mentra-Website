import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Database, Users, BookOpen, Brain, Plug, ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const LOGO_BASE = '/images/logos/partners';

type Vendor = { name: string; logo?: string };

type Layer = {
  id: string;
  tabLabel: string;
  shortLabel: string;
  step: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  fitLine: string;
  protocol?: string;
  vendors: Vendor[];
  isMentra?: boolean;
  badge?: string;
};

const layers: Layer[] = [
  {
    id: 'sis',
    tabLabel: 'SIS',
    shortLabel: 'SIS',
    step: '01',
    title: 'District Source of Truth',
    icon: Database,
    description:
      'Your Student Information System holds the authoritative roster — enrollments, schedules, demographics. Mentra rosters from it nightly via OneRoster, so accounts and classroom membership stay in sync without manual upload.',
    fitLine: 'Mentra reads from your SIS. We never become a second source of truth.',
    protocol: 'OneRoster',
    vendors: [
      { name: 'PowerSchool', logo: `${LOGO_BASE}/powerschool.svg` },
      { name: 'Infinite Campus' },
      { name: 'Skyward', logo: `${LOGO_BASE}/skyward.png` },
      { name: 'Aeries', logo: `${LOGO_BASE}/aeries.png` },
    ],
  },
  {
    id: 'identity',
    tabLabel: 'SSO',
    shortLabel: 'Identity',
    step: '02',
    title: 'Identity + Access Layer',
    icon: Users,
    description:
      'Students and teachers sign in once through the identity provider your district already uses. No new passwords, no separate Mentra account to manage — and roster updates flow through automatically.',
    fitLine: 'Single sign-on through Clever, ClassLink, Google, or Microsoft.',
    protocol: 'OIDC / SSO',
    vendors: [
      { name: 'Clever', logo: `${LOGO_BASE}/clever.png` },
      { name: 'ClassLink', logo: `${LOGO_BASE}/classlink.webp` },
      { name: 'Google Workspace', logo: `${LOGO_BASE}/google-workspace.svg` },
      { name: 'Microsoft 365' },
    ],
  },
  {
    id: 'lms',
    tabLabel: 'LMS',
    shortLabel: 'LMS',
    step: '03',
    title: 'Learning Management System',
    icon: BookOpen,
    description:
      'Teachers stay in the LMS they already run. Mentra launches inside Canvas, Schoology, Google Classroom, or Blackboard via LTI 1.3 Advantage — and grades plus cognitive comments pass back automatically.',
    fitLine: 'Embedded launch, roster sync, grade passback — no workflow change.',
    protocol: 'LTI 1.3 Advantage',
    vendors: [
      { name: 'Canvas', logo: `${LOGO_BASE}/canvas.svg` },
      { name: 'Schoology' },
      { name: 'Google Classroom', logo: `${LOGO_BASE}/google-classroom.png` },
      { name: 'Blackboard', logo: `${LOGO_BASE}/blackboard.png` },
    ],
  },
  {
    id: 'mentra',
    tabLabel: 'Mentra',
    shortLabel: 'Mentra',
    step: '04',
    title: 'The Cognition Layer',
    icon: Brain,
    description:
      'Mentra captures HOW students think while they learn — calibration confidence, scaffold reliance, productive struggle, reasoning quality, intervention responsiveness. This signal is the moat: nothing else in the K–12 stack measures it.',
    fitLine: 'A new layer in the stack — the cognition signal everything else can build on.',
    protocol: 'OAuth2 / Partner API',
    isMentra: true,
    badge: 'The Moat',
    vendors: [
      { name: 'Student Learning Experience' },
      { name: 'Cognition Substrate' },
      { name: 'LTI 1.3 Advantage Platform' },
      { name: 'Partner API + OAuth2' },
    ],
  },
  {
    id: 'partners',
    tabLabel: 'Partners',
    shortLabel: 'Partners',
    step: '05',
    title: 'Partner Ecosystem',
    icon: Plug,
    description:
      'Parent platforms, assessment vendors, and research partners can read Mentra\'s cognition metadata — under scoped, district-governed permissions. Cognition data flows safely into the systems your community already trusts.',
    fitLine: 'Your district controls who reads what. Every access is logged.',
    protocol: 'OAuth 2.0 + PKCE',
    vendors: [
      { name: 'Parent Platforms' },
      { name: 'NWEA MAP', logo: `${LOGO_BASE}/nwea-map.webp` },
      { name: 'Renaissance STAR', logo: `${LOGO_BASE}/renaissance-star.png` },
      { name: 'Research / Analytics' },
    ],
  },
];

const StackExplorer = () => {
  const [activeId, setActiveId] = useState('mentra');
  const active = layers.find((l) => l.id === activeId)!;
  const Icon = active.icon;

  return (
    <section id="platform-stack" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-mentra-blue/10 text-mentra-blue text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              FOR DISTRICTS & IT
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
              Mentra fits the stack you already run
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Tap a layer to see how Mentra integrates with the SIS, identity, and LMS systems your district has chosen.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Tab row */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12" role="tablist" aria-label="Stack layers">
          {layers.map((l) => {
            const isActive = activeId === l.id;
            return (
              <button
                key={l.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`stack-panel-${l.id}`}
                id={`stack-tab-${l.id}`}
                onClick={() => setActiveId(l.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 inline-flex items-center gap-2 ${
                  isActive
                    ? l.isMentra
                      ? 'bg-mentra-blue text-white shadow-lg'
                      : 'bg-gray-900 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100 bg-white border border-gray-200'
                }`}
              >
                <span className={`text-[10px] font-mono tracking-wider ${
                  isActive ? 'opacity-70' : 'text-gray-400'
                }`}>
                  {l.step}
                </span>
                {l.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div
          key={activeId}
          role="tabpanel"
          id={`stack-panel-${active.id}`}
          aria-labelledby={`stack-tab-${active.id}`}
          className="animate-fade-in-up max-w-4xl mx-auto"
        >
          <div
            className={`rounded-2xl border p-6 sm:p-8 lg:p-10 ${
              active.isMentra
                ? 'bg-mentra-blue text-white border-mentra-blue shadow-xl ring-4 ring-mentra-blue/20'
                : 'bg-white border-gray-200 shadow-sm'
            }`}
          >
            {/* Header row */}
            <div className="flex items-start gap-4 sm:gap-5 mb-5">
              <div
                className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center ${
                  active.isMentra ? 'bg-white/15' : 'bg-mentra-blue/10'
                }`}
              >
                <Icon
                  className={`w-6 h-6 sm:w-7 sm:h-7 ${
                    active.isMentra ? 'text-white' : 'text-mentra-blue'
                  }`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span
                    className={`text-xs font-mono tracking-wider ${
                      active.isMentra ? 'text-white/70' : 'text-gray-400'
                    }`}
                  >
                    LAYER {active.step}
                  </span>
                  {active.badge && (
                    <span className="text-xs font-bold uppercase tracking-wider bg-white text-mentra-blue px-2.5 py-0.5 rounded-full">
                      {active.badge}
                    </span>
                  )}
                </div>
                <h3
                  className={`text-xl sm:text-2xl lg:text-3xl font-bold ${
                    active.isMentra ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {active.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p
              className={`text-sm sm:text-base leading-relaxed mb-5 ${
                active.isMentra ? 'text-white/90' : 'text-gray-600'
              }`}
            >
              {active.description}
            </p>

            {/* Fit line */}
            <div
              className={`text-sm sm:text-base font-medium mb-6 pl-4 border-l-2 ${
                active.isMentra
                  ? 'text-white border-white/40'
                  : 'text-gray-900 border-mentra-blue'
              }`}
            >
              {active.fitLine}
            </div>

            {/* Vendors */}
            <div className="flex flex-wrap gap-2 items-center">
              {active.vendors.map((v) => {
                if (v.logo && !active.isMentra) {
                  return (
                    <div
                      key={v.name}
                      className="h-10 sm:h-11 px-3 sm:px-4 rounded-lg bg-white border border-gray-200 flex items-center justify-center"
                      title={v.name}
                    >
                      <img
                        src={v.logo}
                        alt={v.name}
                        className="max-h-6 sm:max-h-7 w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  );
                }
                return (
                  <span
                    key={v.name}
                    className={`text-xs sm:text-sm h-10 sm:h-11 px-3 sm:px-4 rounded-lg font-medium inline-flex items-center ${
                      active.isMentra
                        ? 'bg-white/15 text-white border border-white/20'
                        : 'bg-gray-50 text-gray-700 border border-gray-200'
                    }`}
                  >
                    {v.name}
                  </span>
                );
              })}
            </div>

            {/* Protocol footer */}
            {active.protocol && (
              <div
                className={`mt-6 pt-5 border-t flex items-center justify-between flex-wrap gap-3 ${
                  active.isMentra ? 'border-white/20' : 'border-gray-100'
                }`}
              >
                <span
                  className={`text-xs font-mono tracking-wide ${
                    active.isMentra ? 'text-white/70' : 'text-gray-400'
                  }`}
                >
                  {active.protocol}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* CTA to full Platform page */}
        <AnimateOnScroll>
          <div className="mt-10 text-center">
            <Link
              to="/platform"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-7 py-3 rounded-full font-medium text-sm shadow-sm hover:shadow-md transition-all"
            >
              Explore the full platform
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-gray-400 mt-3">
              Architecture, standards, and integration details for IT and curriculum teams.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default StackExplorer;
