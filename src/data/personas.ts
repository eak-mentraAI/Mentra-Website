import React from 'react';
import { ExploreSparks, AdaptiveTutor, StuckDetection, CodeBuild, LearnerPassport, XPSprigs, ReflectJournal } from '@/components/icons/students';
import { IntelligenceHub, WeeklyDigest, LiveDashboard, ConceptMap, AIControl, SpotQuietOnes, SmartGrading } from '@/components/icons/teachers';
import { StatusLight, FullDashboard, SafetyMonitor, GrowthGoals, ConsentControls, DataPortability, EmotionalData, LearnerIdentity } from '@/components/icons/parents';
import { ComplianceShield, RosterIntegration, KillSwitch, Explainability, SecureExport, ITObservability, TenantIsolation } from '@/components/icons/institutions';

export const colorBorderMap: Record<string, string> = {
  'mentra-blue': 'hover:border-t-mentra-blue',
  'growth-green': 'hover:border-t-growth-green',
  'curiosity-coral': 'hover:border-t-curiosity-coral',
  'grit-gold': 'hover:border-t-grit-gold',
  'wisdom-purple': 'hover:border-t-wisdom-purple',
};

export interface Blurb {
  icon: React.FC<{ className?: string }>;
  title: string;
  text: string;
  color: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Persona {
  id: string;
  tabLabel: string;
  headline: React.ReactNode;
  subtext: string;
  problemStatement: React.ReactNode;
  problemBorderColor: string;
  blurbs: Blurb[];
  stats?: Stat[];
}

export const personas: Persona[] = [
  {
    id: 'students',
    tabLabel: 'Students',
    headline: React.createElement('span', null,
      'Learning that actually ',
      React.createElement('span', { className: 'bg-gradient-to-r from-mentra-blue to-wisdom-purple bg-clip-text text-transparent' }, 'gets you'),
      '.'
    ),
    subtext: "Mentra adapts to how you think — not where a curriculum says you should be.",
    problemStatement: React.createElement('p', { className: 'text-gray-700 leading-relaxed' },
      "Same lesson as everyone else. Hints that don't help. Nobody notices when you're flying. ",
      React.createElement('strong', { className: 'text-gray-900' }, 'Mentra changes that — every experience adapts to you.')
    ),
    problemBorderColor: 'border-grit-gold',
    blurbs: [
      { icon: ExploreSparks, title: 'Explore What Makes You Curious', text: 'Daily "Sparks" — questions based on your interests. No grades, no right answers — just discovery.', color: 'grit-gold' },
      { icon: AdaptiveTutor, title: 'A Tutor That Gets Your Pace', text: 'Questions get harder when you\'re crushing it. Slows down when you\'re stuck.', color: 'mentra-blue' },
      { icon: StuckDetection, title: 'Real Help When You\'re Stuck', text: 'Detects when you\'re stuck and steps in with the right nudge at the right moment.', color: 'curiosity-coral' },
      { icon: CodeBuild, title: 'Code, Build, and Create', text: 'Write real code with an AI mentor. Learn systematic thinking, not just syntax.', color: 'growth-green' },
      { icon: LearnerPassport, title: 'More Than a Number', text: 'A Learner Passport that captures how you think, grow, and solve problems.', color: 'wisdom-purple' },
      { icon: XPSprigs, title: 'Earn XP, Unlock Sprigs', text: 'Earn XP for effort and growth — not just right answers. Level up and collect Sprigs.', color: 'grit-gold' },
      { icon: ReflectJournal, title: 'Reflect and Grow', text: 'Built-in journaling, mood check-ins, and goal-setting to notice your own patterns.', color: 'mentra-blue' },
    ],
  },
  {
    id: 'teachers',
    tabLabel: 'Teachers',
    headline: React.createElement('span', null,
      'See every student clearly.',
      React.createElement('br'),
      React.createElement('span', { className: 'bg-gradient-to-r from-mentra-blue to-growth-green bg-clip-text text-transparent' }, 'Reach them before they fall behind.')
    ),
    subtext: "A second set of eyes across every student, assignment, and interaction.",
    problemStatement: React.createElement('p', { className: 'text-gray-700 leading-relaxed' },
      "You sense something's off before the data confirms it — but the tools only show dashboards full of numbers. ",
      React.createElement('strong', { className: 'text-gray-900' }, "Mentra puts actionable intelligence in your hands.")
    ),
    problemBorderColor: 'border-mentra-blue',
    blurbs: [
      { icon: IntelligenceHub, title: 'Know Who Needs You First', text: 'Students ranked by urgency with recommended actions based on engagement and confidence signals.', color: 'mentra-blue' },
      { icon: WeeklyDigest, title: 'Weekly Digest', text: 'Monday summary: who needs attention, breakthroughs, class-wide patterns. Two minutes to read.', color: 'curiosity-coral' },
      { icon: LiveDashboard, title: 'Live Assignment View', text: 'Real-time completion, help requests, and struggle patterns. Push scaffolding without leaving the screen.', color: 'growth-green' },
      { icon: ConceptMap, title: 'Living Concept Maps', text: 'See where mastery is strong, fragile, or forming misconceptions across the class.', color: 'grit-gold' },
      { icon: AIControl, title: 'AI Under Your Control', text: 'Every adaptation is visible and explainable. Override anything. No black box.', color: 'wisdom-purple' },
      { icon: SpotQuietOnes, title: 'Spot the Quiet Ones', text: 'Detects isolation patterns and engagement decline before students disconnect.', color: 'curiosity-coral' },
      { icon: SmartGrading, title: 'Smart Grading', text: 'AI-assisted rubric scoring with draft feedback. You review, edit, approve.', color: 'growth-green' },
    ],
  },
  {
    id: 'parents',
    tabLabel: 'Parents',
    headline: React.createElement('span', null,
      "We'll only tap you on the shoulder",
      React.createElement('br'),
      React.createElement('span', { className: 'bg-gradient-to-r from-grit-gold to-curiosity-coral bg-clip-text text-transparent' }, 'when it actually matters.')
    ),
    subtext: "Quiet when things are fine. Unmissable when they're not.",
    problemStatement: React.createElement('p', { className: 'text-gray-700 leading-relaxed' },
      "Most apps bury you in notifications until you tune out. Then your child struggles and you miss it. ",
      React.createElement('strong', { className: 'text-gray-900' }, "Mentra respects your attention — and earns it back when it counts.")
    ),
    problemBorderColor: 'border-grit-gold',
    blurbs: [
      { icon: StatusLight, title: 'Status Light', text: 'Green, yellow, or red. No spam — just signal when something needs you.', color: 'growth-green' },
      { icon: FullDashboard, title: 'Full Dashboard', text: 'Skills, effort, and progress in plain language — On Track, Excelling, Needs Practice.', color: 'mentra-blue' },
      { icon: SafetyMonitor, title: 'Safety Monitoring', text: 'Continuous engagement and content scans. Alerts only when the signal is real.', color: 'curiosity-coral' },
      { icon: GrowthGoals, title: 'Goals and Coaching', text: "See your child's goals, progress, and coaching support. Build on it at home.", color: 'grit-gold' },
      { icon: ConsentControls, title: 'Consent Controls', text: "You approve what's collected, visible, and shared. Revoke anytime.", color: 'wisdom-purple' },
      { icon: DataPortability, title: 'Portable Learning Record', text: 'Export a learning profile — strengths, trajectory, preferences. Encrypted by default.', color: 'mentra-blue' },
      { icon: EmotionalData, title: 'Protected Emotional Data', text: 'Trends like "strong engagement with interactive content" — never raw scores.', color: 'curiosity-coral' },
      { icon: LearnerIdentity, title: 'Learner Identity', text: "Over time, Mentra builds a narrative of your child's growth that belongs to them.", color: 'grit-gold' },
    ],
  },
  {
    id: 'institutions',
    tabLabel: 'Districts',
    headline: React.createElement('span', null,
      'AI-powered learning your compliance team',
      React.createElement('br'),
      React.createElement('span', { className: 'bg-gradient-to-r from-mentra-blue to-wisdom-purple bg-clip-text text-transparent' }, 'will actually approve.')
    ),
    subtext: "Innovation and compliance without the trade-off.",
    problemStatement: React.createElement('p', { className: 'text-gray-700 leading-relaxed' },
      "Great demos, but the governance team finds unclear data practices, no real FERPA controls, and AI nobody can explain at a board meeting. ",
      React.createElement('strong', { className: 'text-gray-900' }, 'Mentra was architected for exactly this.')
    ),
    problemBorderColor: 'border-mentra-blue',
    blurbs: [
      { icon: ComplianceShield, title: 'COPPA & FERPA Built In', text: 'Auto-audited access, verified parental consent, PII auto-redacted. 57 policy gates running continuously.', color: 'mentra-blue' },
      { icon: RosterIntegration, title: 'Roster Integration in Days', text: 'Clever, ClassLink, Canvas, Schoology, Google Classroom, OneRoster — out of the box.', color: 'growth-green' },
      { icon: KillSwitch, title: 'AI Kill Switch', text: 'One toggle disables all AI instantly. Sub-second response. Fails closed.', color: 'curiosity-coral' },
      { icon: Explainability, title: 'Full Explainability', text: 'Teachers see what changed and why. Override any adaptation with a reason.', color: 'grit-gold' },
      { icon: SecureExport, title: 'Data Portability', text: '20 export domains. AES-256-GCM encrypted, PII-redacted, consent-verified.', color: 'wisdom-purple' },
      { icon: ITObservability, title: 'IT Observability', text: '16-service health monitoring, AI metrics, FERPA audit logs. Role-based access.', color: 'mentra-blue' },
      { icon: TenantIsolation, title: 'Tenant Isolation', text: 'Row-Level Security, 5-min JWT expiry, RBAC. Cross-district leaks are architecturally impossible.', color: 'curiosity-coral' },
    ],
    stats: [
      { value: '57', label: 'Automated policy gates' },
      { value: '16', label: 'Independently monitored services' },
      { value: '20', label: 'Export data domains' },
      { value: '<1s', label: 'AI kill switch response' },
    ],
  },
];
