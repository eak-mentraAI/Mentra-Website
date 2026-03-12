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
      'Learn to think for yourself — with help that ',
      React.createElement('span', { className: 'bg-gradient-to-r from-mentra-blue to-wisdom-purple bg-clip-text text-transparent' }, 'fades as you grow'),
      '.'
    ),
    subtext: "Mentra adapts to how you think, then steps back as you get stronger.",
    problemStatement: React.createElement('p', { className: 'text-gray-700 leading-relaxed' },
      "Same lesson as everyone else. Hints that don't help. AI that does the thinking for you. ",
      React.createElement('strong', { className: 'text-gray-900' }, 'Mentra is different — support that builds your ability, then gets out of the way.')
    ),
    problemBorderColor: 'border-grit-gold',
    blurbs: [
      { icon: ExploreSparks, title: 'Explore What Makes You Curious', text: 'Daily prompts tailored to your interests — rabbit holes worth going down. No grades, just discovery that builds genuine curiosity.', color: 'grit-gold' },
      { icon: AdaptiveTutor, title: 'A Tutor That Steps Back', text: 'Questions get harder as you grow. Scaffolding fades as mastery increases. The goal is you not needing it.', color: 'mentra-blue' },
      { icon: StuckDetection, title: 'Help That Builds Your Thinking', text: 'Detects when you\'re stuck and guides your thinking — never gives you the answer.', color: 'curiosity-coral' },
      { icon: CodeBuild, title: 'Code, Build, and Create', text: 'Write real code with an AI mentor that teaches systematic thinking — then lets you fly solo.', color: 'growth-green' },
      { icon: LearnerPassport, title: 'More Than a Number', text: 'A Learner Passport that captures how you think, grow, and solve problems — and follows you forward.', color: 'wisdom-purple' },
      { icon: XPSprigs, title: 'Earn XP, Grow Your Sprig', text: 'Earn experience points for effort and growth — not just right answers. Your Sprig grows as you do, rewarding the work you put in.', color: 'grit-gold' },
      { icon: ReflectJournal, title: 'Reflect and Own Your Growth', text: 'Journaling, mood check-ins, and goal-setting that teach you to notice your own patterns — a skill you keep.', color: 'mentra-blue' },
    ],
  },
  {
    id: 'teachers',
    tabLabel: 'Teachers',
    headline: React.createElement('span', null,
      'See everything. Control everything.',
      React.createElement('br'),
      React.createElement('span', { className: 'bg-gradient-to-r from-mentra-blue to-growth-green bg-clip-text text-transparent' }, 'The AI works for you.')
    ),
    subtext: "Intelligence that amplifies your judgment — never replaces it.",
    problemStatement: React.createElement('p', { className: 'text-gray-700 leading-relaxed' },
      "You sense something's off before the data confirms it — but the tools show dashboards, not decisions. And the AI is a black box you can't explain to parents. ",
      React.createElement('strong', { className: 'text-gray-900' }, "Mentra gives you full visibility and full override. Every AI decision is yours to keep or change.")
    ),
    problemBorderColor: 'border-mentra-blue',
    blurbs: [
      { icon: IntelligenceHub, title: 'Know Who Needs You First', text: 'See which students need help now, who\'s coasting, and where to focus your energy — before the day starts.', color: 'mentra-blue' },
      { icon: WeeklyDigest, title: 'Two-Minute Monday Briefing', text: 'A weekly snapshot: which students need attention, who had breakthroughs, and what patterns are emerging across your class.', color: 'curiosity-coral' },
      { icon: LiveDashboard, title: 'Intervene in the Moment', text: 'Real-time struggle detection during assignments. Push scaffolding to the right student at the right time.', color: 'growth-green' },
      { icon: ConceptMap, title: 'Living Concept Maps', text: 'See where mastery is strong, fragile, or forming misconceptions — patterns you couldn\'t spot across 30 students alone.', color: 'grit-gold' },
      { icon: AIControl, title: 'Override Anything', text: 'Every AI adaptation is visible with a rationale. Disagree? Override it with one click. Your professional judgment is always final.', color: 'wisdom-purple' },
      { icon: SpotQuietOnes, title: 'Spot the Quiet Ones', text: 'Detects isolation and disengagement before students disappear. The students most at risk are the ones who go silent.', color: 'curiosity-coral' },
      { icon: SmartGrading, title: 'Smart Grading, Human Judgment', text: 'AI drafts rubric-aligned feedback. You review, edit, and add the human insight that actually changes learning.', color: 'growth-green' },
    ],
  },
  {
    id: 'parents',
    tabLabel: 'Parents',
    headline: React.createElement('span', null,
      "Your attention is too valuable to waste.",
      React.createElement('br'),
      React.createElement('span', { className: 'bg-gradient-to-r from-grit-gold to-curiosity-coral bg-clip-text text-transparent' }, "We only speak up when it matters.")
    ),
    subtext: "Quiet when things are fine. Unmissable when they're not. You control everything.",
    problemStatement: React.createElement('p', { className: 'text-gray-700 leading-relaxed' },
      "Most apps bury you in notifications until you tune out. Then your child struggles and you miss it. And the AI? You can't see what it's doing or stop it if you disagree. ",
      React.createElement('strong', { className: 'text-gray-900' }, "Mentra earns your trust by respecting your attention — and giving you the controls, not just the dashboard.")
    ),
    problemBorderColor: 'border-grit-gold',
    blurbs: [
      { icon: StatusLight, title: 'One Glance, Not a Feed', text: 'Green, yellow, or red. If it\'s green, close the app. When it\'s not, you\'ll know exactly why.', color: 'growth-green' },
      { icon: FullDashboard, title: 'Plain Language, Not Data Dumps', text: 'Clear progress updates you can act on — not spreadsheets. You\'ll know exactly where your child stands without needing an education degree.', color: 'mentra-blue' },
      { icon: SafetyMonitor, title: 'Safety You Can Trust', text: 'Alerts only when the signal is real. Because the app hasn\'t cried wolf, you pay attention when it speaks.', color: 'curiosity-coral' },
      { icon: GrowthGoals, title: 'See the Coaching, Not Just the Grades', text: "See how many AI coaching sessions your child has — so you know exactly how involved the AI is and can build on it at home.", color: 'grit-gold' },
      { icon: ConsentControls, title: 'You Gate Everything', text: "Consent isn't a checkbox — it's a continuously enforced gate. You approve, revoke, and control. Nothing happens without you.", color: 'wisdom-purple' },
      { icon: DataPortability, title: 'Portable Learning Record', text: 'When your child changes schools, their new teachers don\'t start from zero. Encrypted, consent-verified, parent-controlled.', color: 'mentra-blue' },
      { icon: EmotionalData, title: 'Protected Emotional Data', text: 'Trends like "strong engagement" — never raw scores that could label your child. Deep personalization without psychological profiling.', color: 'curiosity-coral' },
      { icon: LearnerIdentity, title: 'Independence, Not Dependency', text: "The AI is training wheels. Scaffolding fades as your child grows. The success metric is how much less they need it.", color: 'grit-gold' },
    ],
  },
  {
    id: 'institutions',
    tabLabel: 'Districts',
    headline: React.createElement('span', null,
      'Every claim is provable.',
      React.createElement('br'),
      React.createElement('span', { className: 'bg-gradient-to-r from-mentra-blue to-wisdom-purple bg-clip-text text-transparent' }, 'Every control is real.')
    ),
    subtext: "Compliance built into the architecture — not promised in a contract.",
    problemStatement: React.createElement('p', { className: 'text-gray-700 leading-relaxed' },
      "Great demos, but the governance team finds self-reported compliance, no real FERPA controls, and AI nobody can explain at a board meeting. ",
      React.createElement('strong', { className: 'text-gray-900' }, 'Mentra was built for your toughest audit. Every claim is demonstrable by inspecting the system, not reading a policy document.')
    ),
    problemBorderColor: 'border-mentra-blue',
    blurbs: [
      { icon: ComplianceShield, title: 'Compliance by Architecture', text: '57 automated policy gates running continuously. Audit evidence is generated from real system state — not self-reported assertions.', color: 'mentra-blue' },
      { icon: RosterIntegration, title: 'Roster Integration in Days', text: 'Clever, ClassLink, Canvas, Schoology, Google Classroom, OneRoster. Configure once, monitor through a single panel.', color: 'growth-green' },
      { icon: KillSwitch, title: 'AI Kill Switch', text: 'One toggle disables all AI in under a second. Fails closed — if anything breaks, AI stays off until you say otherwise.', color: 'curiosity-coral' },
      { icon: Explainability, title: 'No Black Boxes', text: 'Every AI adaptation is visible with a rationale. Teachers override anything. You can explain it at a board meeting.', color: 'grit-gold' },
      { icon: SecureExport, title: 'Provable Data Portability', text: '20 export domains. AES-256-GCM encrypted, PII-redacted, consent-verified. Every step auditable.', color: 'wisdom-purple' },
      { icon: ITObservability, title: 'IT Observability', text: '16-service health monitoring, AI safety metrics, and FERPA audit logs. Proactive, not reactive.', color: 'mentra-blue' },
      { icon: TenantIsolation, title: 'Architectural Isolation', text: 'Row-Level Security at the database layer. Cross-district data leaks aren\'t just unlikely — they\'re structurally prevented.', color: 'curiosity-coral' },
    ],
    stats: [
      { value: '57', label: 'Automated policy gates' },
      { value: '16', label: 'Independently monitored services' },
      { value: '20', label: 'Export data domains' },
      { value: '<1s', label: 'AI kill switch response' },
    ],
  },
];
