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
  trustSection: {
    title: string;
    text: string;
  } | null;
  cta: {
    type: 'button' | 'form';
    heading: React.ReactNode;
    subtext: string;
    buttonLabel: string;
    formContext?: string;
    fields?: { name: string; placeholder: string; type: string; required: boolean }[];
  };
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
    subtext: "Most ed-tech feels like a textbook pasted into a screen. Mentra watches how you think, adapts to your pace, and meets you exactly where you are — not where a curriculum guide says you should be.",
    problemStatement: React.createElement('p', { className: 'text-gray-700 leading-relaxed' },
      "You've been handed the same lesson as every other kid in the room. When you're stuck, you get a hint that doesn't help. When you're flying, nobody notices. ",
      React.createElement('strong', { className: 'text-gray-900' }, 'Mentra changes that. Every experience adapts to you. Not your class. Not your grade level. You.')
    ),
    problemBorderColor: 'border-grit-gold',
    blurbs: [
      { icon: ExploreSparks, title: 'Explore What Makes You Curious', text: 'Every day, Mentra gives you "Sparks" — interesting questions chosen from what you\'ve been curious about. Follow one down the rabbit hole. No grade attached, no right answer — just discovery.', color: 'grit-gold' },
      { icon: AdaptiveTutor, title: 'A Tutor That Gets Your Pace', text: 'Mentra doesn\'t hand you answers. It asks you questions back and adjusts how hard it pushes. Crushing it? Questions get harder. Stuck? It slows down and meets you where you are.', color: 'mentra-blue' },
      { icon: StuckDetection, title: 'Real Help When You\'re Stuck', text: 'If you\'ve been staring at a problem or retrying without progress, Mentra steps in — a gentle nudge, a new way to think about it, or a full coaching session. Help that\'s designed for this problem, at this moment, for how you learn.', color: 'curiosity-coral' },
      { icon: CodeBuild, title: 'Code, Build, and Create', text: 'Write real code, run it, debug it — with an AI mentor beside you. Learn to plan, break down, build, and review like a real developer. Not just syntax — systematic thinking.', color: 'growth-green' },
      { icon: LearnerPassport, title: 'More Than a Number', text: 'Mentra tracks how you solve problems, where your confidence is building, what thinking comes naturally, and where you\'re stretching. Over time, it builds a Learner Passport — a picture of who you are as a learner.', color: 'wisdom-purple' },
      { icon: XPSprigs, title: 'Earn XP, Unlock Sprigs', text: 'Every meaningful action earns XP — exploring topics, reflecting in your journal, coaching yourself through hard problems. Level up, unlock collectible Sprigs, and see where you stand. Effort and growth rewarded, not just right answers.', color: 'grit-gold' },
      { icon: ReflectJournal, title: 'Reflect and Watch Yourself Grow', text: 'Journaling, mood check-ins, and goal-setting built in. Notice your own patterns — when you work best, what throws you off, where you\'re improving. Set goals that actually stick.', color: 'mentra-blue' },
    ],
    trustSection: {
      title: "This Isn't About Getting Through School",
      text: "You're becoming someone who knows how to think through hard problems, direct your own learning, and understand how your mind works. That's not something a GPA captures. But it's what actually matters.",
    },
    cta: {
      type: 'button',
      heading: React.createElement('span', null, 'Start Your Journey'),
      subtext: '',
      buttonLabel: 'Start Your Journey',
    },
  },
  {
    id: 'teachers',
    tabLabel: 'Teachers',
    headline: React.createElement('span', null,
      'See every student clearly.',
      React.createElement('br'),
      React.createElement('span', { className: 'bg-gradient-to-r from-mentra-blue to-growth-green bg-clip-text text-transparent' }, 'Reach them before they fall behind.')
    ),
    subtext: "You have 30 kids and one set of eyes. Mentra gives you a second set — one that watches learning patterns across every student, every assignment, and every interaction, and surfaces exactly who needs you and why.",
    problemStatement: React.createElement('p', { className: 'text-gray-700 leading-relaxed' },
      "You know something is off with a student days before the data confirms it — but by then, you've lost the moment. The \"data-driven\" tools show dashboards full of numbers but nothing you can act on. ",
      React.createElement('strong', { className: 'text-gray-900' }, "Mentra puts actionable intelligence in your hands — not more dashboards to stare at.")
    ),
    problemBorderColor: 'border-mentra-blue',
    blurbs: [
      { icon: IntelligenceHub, title: 'Know Who Needs You First', text: 'The Intelligence Hub ranks students by who needs attention right now — based on engagement trends, struggle signals, and confidence shifts. Each comes with a recommended action.', color: 'mentra-blue' },
      { icon: WeeklyDigest, title: 'A Weekly Digest That Saves Time', text: 'Every Monday: who needs attention, who had breakthroughs, class-wide patterns, and what changed. Four sections, severity-coded, two minutes to read.', color: 'curiosity-coral' },
      { icon: LiveDashboard, title: 'Watch Assignments Unfold Live', text: 'See completion progress, help requests, idle students, and struggle patterns in real time. Push scaffolding, pause for discussion, or share exemplars — all without leaving the screen.', color: 'growth-green' },
      { icon: ConceptMap, title: 'See What They Think They Know', text: 'A living concept map shows where mastery is strong, fragile, or forming misconceptions. Class-wide alerts tell you when multiple students share the same confusion.', color: 'grit-gold' },
      { icon: AIControl, title: 'AI Under Your Control', text: 'Every AI adaptation is visible with a clear explanation. Disagree? Override it. Your professional judgment always wins. There is no black box.', color: 'wisdom-purple' },
      { icon: SpotQuietOnes, title: 'Spot the Quiet Ones', text: 'Detects isolation patterns, collaboration gaps, and engagement decline. You see learning patterns, not clinical labels — and act before students disconnect.', color: 'curiosity-coral' },
      { icon: SmartGrading, title: "Grading That Doesn't Eat Your Evenings", text: 'AI-assisted rubric scoring generates draft feedback. You review, edit, approve. Spend time on meaningful conversations, not writing the same margin note for the 20th time.', color: 'growth-green' },
    ],
    trustSection: {
      title: 'Data You Can Trust',
      text: 'Every metric uses qualitative bands (Emerging, Developing, Proficient, Mastered) — never raw scores. Emotional data is shown only as trends, never labeled. Every access is FERPA-audited automatically.',
    },
    cta: {
      type: 'form',
      heading: React.createElement('span', null,
        'Ready to see your ',
        React.createElement('span', { className: 'text-mentra-blue' }, 'classroom clearly'),
        '?'
      ),
      subtext: 'Schedule a call with our team.',
      buttonLabel: 'Schedule Call',
      formContext: 'Sent from the teachers page',
      fields: [
        { name: 'name', placeholder: 'Name', type: 'text', required: true },
        { name: 'email', placeholder: 'Email', type: 'email', required: true },
      ],
    },
  },
  {
    id: 'parents',
    tabLabel: 'Parents',
    headline: React.createElement('span', null,
      "We'll only tap you on the shoulder",
      React.createElement('br'),
      React.createElement('span', { className: 'bg-gradient-to-r from-grit-gold to-curiosity-coral bg-clip-text text-transparent' }, 'when it actually matters.')
    ),
    subtext: "Most education apps bury you in notifications until you learn to ignore all of it. Mentra takes the opposite approach: a quiet, clear window into your child's learning that respects your attention — and earns it back when something genuinely needs you.",
    problemStatement: React.createElement('p', { className: 'text-gray-700 leading-relaxed' },
      "You download the school app, get excited for a week, then start muting the notifications. Points earned, badges unlocked, daily summaries — an avalanche of \"engagement\" that trains you to stop looking. Then your child actually struggles and you miss it. ",
      React.createElement('strong', { className: 'text-gray-900' }, "Mentra is designed to be quiet when things are fine and unmissable when they're not.")
    ),
    problemBorderColor: 'border-grit-gold',
    blurbs: [
      { icon: StatusLight, title: 'Quiet When Fine. Unmissable When Not.', text: 'One status light: green means engaged and safe, yellow means a pattern shifted, red means something needs you now. No gamification spam, no daily digests. Everything else is there when you choose to look.', color: 'growth-green' },
      { icon: FullDashboard, title: 'When You Look, You See Everything', text: 'Assignments completed, skills growing, effort invested. Plain language bands — On Track, Excelling, Needs Practice — not data jargon. Subject-by-subject highlights on your terms.', color: 'mentra-blue' },
      { icon: SafetyMonitor, title: 'Safety Monitoring That Earns Trust', text: 'Session time, engagement patterns, and content scans run continuously. But it only reaches you when the signal is real — declining engagement, unusual patterns, or critical flags. Silence means things are fine.', color: 'curiosity-coral' },
      { icon: GrowthGoals, title: 'See Their Goals and Coaching', text: "View your child's personal growth goals, progress toward each one, and how much coaching support they've received. Conversations at home can build on what's happening at school.", color: 'grit-gold' },
      { icon: ConsentControls, title: 'Your Consent Controls Everything', text: "You approve what's collected, what's visible, and what can be shared. Consent expires automatically with renewal reminders. Revoke anytime — data deleted, no exceptions.", color: 'wisdom-purple' },
      { icon: DataPortability, title: 'Take Their Learning Record Anywhere', text: 'Export a portable learning profile — strengths, growth trajectory, learning preferences — not just grades. You choose what PII to include. Encrypted and redacted by default.', color: 'mentra-blue' },
      { icon: EmotionalData, title: 'Emotional Data Stays Protected', text: 'Emotional signals personalize learning but are never shown as raw scores or clinical labels. You see trends like "strong engagement with interactive content" — never "frustration score: 0.73."', color: 'curiosity-coral' },
      { icon: LearnerIdentity, title: 'Building a Learner Identity', text: "Your child is setting goals, noticing when they're stuck, building emotional vocabulary, and discovering how they think. Over time, Mentra synthesizes this into a narrative of growth that belongs to them.", color: 'grit-gold' },
    ],
    trustSection: {
      title: 'Built for Your Trust',
      text: "COPPA-compliant from the ground up. Every data access is logged in an append-only audit trail. Emotional data is never exposed as raw scores. Your consent is required before any data sharing. You can request full deletion at any time.",
    },
    cta: {
      type: 'form',
      heading: React.createElement('span', null,
        'Want to see the ',
        React.createElement('span', { className: 'text-mentra-blue' }, 'parent dashboard'),
        '?'
      ),
      subtext: 'Talk to our team.',
      buttonLabel: 'Schedule Call',
      formContext: 'Sent from the parents page',
      fields: [
        { name: 'name', placeholder: 'Name', type: 'text', required: true },
        { name: 'email', placeholder: 'Email', type: 'email', required: true },
      ],
    },
  },
  {
    id: 'institutions',
    tabLabel: 'Districts',
    headline: React.createElement('span', null,
      'AI-powered learning your compliance team',
      React.createElement('br'),
      React.createElement('span', { className: 'bg-gradient-to-r from-mentra-blue to-wisdom-purple bg-clip-text text-transparent' }, 'will actually approve.')
    ),
    subtext: "Every district wants personalized learning. Most platforms make you choose between innovation and compliance. Mentra was built so you never have to.",
    problemStatement: React.createElement('p', { className: 'text-gray-700 leading-relaxed' },
      "You've seen the demos. The AI tutors, the adaptive platforms. But when your data governance team looks under the hood, it falls apart: unclear data practices, no real FERPA controls, PII everywhere, and an AI nobody can explain at a school board meeting. ",
      React.createElement('strong', { className: 'text-gray-900' }, 'Mentra was architected for exactly this.')
    ),
    problemBorderColor: 'border-mentra-blue',
    blurbs: [
      { icon: ComplianceShield, title: 'COPPA & FERPA Built In, Not Bolted On', text: 'Every data access is FERPA-audited automatically. Every student under 13 requires verified parental consent. PII is auto-redacted from exports. 57 automated policy gates run continuously.', color: 'mentra-blue' },
      { icon: RosterIntegration, title: 'Plug Into Your Roster Systems in Days', text: 'Clever, ClassLink, Canvas, Schoology, Google Classroom, OneRoster — out of the box. Teachers see real class rosters on day one. Enrollment changes sync automatically.', color: 'growth-green' },
      { icon: KillSwitch, title: 'One Kill Switch for All AI', text: 'One toggle disables all AI generation instantly. Redis-backed for sub-second response. Fails closed: if the switch system is unavailable, AI stays off until an admin re-enables it.', color: 'curiosity-coral' },
      { icon: Explainability, title: 'Every AI Decision Is Explainable', text: 'When Mentra adapts content, the teacher sees exactly what changed and why. Teachers can override any adaptation with a reason and expiration date. No black box.', color: 'grit-gold' },
      { icon: SecureExport, title: 'Graduation-Ready Data Portability', text: '20 data domains — academic mastery, cognitive patterns, growth trajectory. Encrypted (AES-256-GCM), PII-redacted, consent-verified. Three export modes for transitions, portability, and compliance holds.', color: 'wisdom-purple' },
      { icon: ITObservability, title: 'Real Observability for IT', text: 'Health aggregation across 16 services. AI performance metrics. Export pipeline monitoring. FERPA audit logs. Admin-only endpoints with role-based access. Your IT team sees everything.', color: 'mentra-blue' },
      { icon: TenantIsolation, title: 'Tenant Isolation That Passes Pen Testing', text: 'Row-Level Security at the database layer. Signed JWTs with 5-minute expiry. RBAC enforcement with configurable levels. Cross-district data leaks are architecturally impossible.', color: 'curiosity-coral' },
    ],
    trustSection: null,
    cta: {
      type: 'form',
      heading: React.createElement('span', null,
        'Ready to see the ',
        React.createElement('span', { className: 'text-mentra-blue' }, 'full governance toolkit'),
        '?'
      ),
      subtext: 'Talk to our implementation team.',
      buttonLabel: 'Request Demo',
      formContext: 'Sent from the institutions page',
      fields: [
        { name: 'name', placeholder: 'Name', type: 'text', required: true },
        { name: 'email', placeholder: 'Work Email', type: 'email', required: true },
        { name: 'organization', placeholder: 'District / Organization', type: 'text', required: false },
      ],
    },
    stats: [
      { value: '57', label: 'Automated policy gates' },
      { value: '16', label: 'Independently monitored services' },
      { value: '20', label: 'Export data domains' },
      { value: '<1s', label: 'AI kill switch response' },
    ],
  },
];
