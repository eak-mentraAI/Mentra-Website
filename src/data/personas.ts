import React from 'react';
import { ExploreSparks, AdaptiveTutor, StuckDetection, CodeBuild, LearnerPassport, XPSprigs, ReflectJournal, BoundedSession } from '@/components/icons/students';
import { IntelligenceHub, WeeklyDigest, LiveDashboard, ConceptMap, AIControl, SpotQuietOnes, SmartGrading, FadingTrend } from '@/components/icons/teachers';
import { StatusLight, FullDashboard, SafetyMonitor, GrowthGoals, ConsentControls, DataPortability, EmotionalData, LearnerIdentity, IndependenceTrajectory } from '@/components/icons/parents';
import { ComplianceShield, RosterIntegration, KillSwitch, Explainability, SecureExport, ITObservability, TenantIsolation, AltitudeView } from '@/components/icons/institutions';

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
  blurbs: Blurb[];
  stats?: Stat[];
}

export const personas: Persona[] = [
  {
    id: 'students',
    blurbs: [
      { icon: ExploreSparks, title: 'Explore What Makes Them Curious', text: 'Daily prompts tailored to their interests: rabbit holes worth going down. No grades, just discovery that builds genuine curiosity.', color: 'grit-gold' },
      { icon: AdaptiveTutor, title: 'A Tutor That Steps Back', text: 'Questions get harder as your child grows, and support fades as they show a skill. The goal is for them not to need it.', color: 'mentra-blue' },
      { icon: BoundedSession, title: 'A Tutor That Knows When to Stop', text: "Every Sprig session has a hard cap: 20 messages, 10 minutes, and a reflection before the session can close. Not because we're rationing AI, but because reflection is where learning consolidates.", color: 'wisdom-purple' },
      { icon: StuckDetection, title: 'Help That Builds Their Thinking', text: "Notices when your child is stuck and guides their thinking rather than handing them the answer.", color: 'curiosity-coral' },
      { icon: CodeBuild, title: 'Code, Build, and Create', text: 'Your child writes real code with Sprig as a mentor that teaches systematic thinking, then lets them fly solo.', color: 'growth-green' },
      { icon: LearnerPassport, title: 'More Than a Number', text: "A Learner Passport that records the work your child has done, from journal entries and goals to the milestones they've reached, and grows as more of their activity is counted.", color: 'wisdom-purple' },
      { icon: XPSprigs, title: 'XP for Effort, Not Just Answers', text: 'Your child earns experience points for effort and growth, not just right answers, and their Sprig grows as they do.', color: 'grit-gold' },
      { icon: ReflectJournal, title: 'Reflection They Own', text: 'Journaling, mood check-ins and goal-setting that teach your child to notice their own patterns: a skill they keep.', color: 'mentra-blue' },
    ],
  },
  {
    id: 'teachers',
    blurbs: [
      { icon: IntelligenceHub, title: 'Know Who Needs You First', text: 'See which students need help now, who\'s coasting, and where to focus your energy — before the day starts.', color: 'mentra-blue' },
      { icon: FadingTrend, title: 'The Trend That Matters Most', text: "For every student, you see an 8-week sparkline of how much AI help they've needed — and whether that line is going down. Mentra's job is to make itself less necessary. This is how you watch it happen.", color: 'growth-green' },
      { icon: WeeklyDigest, title: 'A Brief, Not a Spreadsheet', text: 'Every Monday: who to celebrate, who to reach, and what patterns are emerging across your class — plus an honest "still getting to know this student" when the evidence is thin, never a fabricated extreme.', color: 'curiosity-coral' },
      { icon: LiveDashboard, title: 'Intervene in the Moment', text: 'Real-time struggle detection during assignments. Push scaffolding to the right student at the right time.', color: 'growth-green' },
      { icon: ConceptMap, title: 'Living Concept Maps', text: 'See where mastery is strong, fragile, or forming misconceptions — patterns you couldn\'t spot across 30 students alone.', color: 'grit-gold' },
      { icon: AIControl, title: 'Every AI Decision Shows Its Work', text: 'Every adaptation Mentra makes for a student comes with a one-sentence rationale you can read in three seconds: "Reduced scaffolding — hint reliance dropped to 0.18 over the last week." Disagree? One click overrides it. Every override is logged with your name and reason and survives forever in the audit trail.', color: 'wisdom-purple' },
      { icon: SpotQuietOnes, title: 'Spot the Quiet Ones', text: 'Detects isolation and disengagement before students disappear. The students most at risk are the ones who go silent.', color: 'curiosity-coral' },
      { icon: SmartGrading, title: 'Smart Grading, Human Judgment', text: 'AI drafts rubric-aligned feedback. You review, edit, and add the human insight that actually changes learning.', color: 'growth-green' },
    ],
  },
  {
    id: 'parents',
    blurbs: [
      { icon: StatusLight, title: 'One Status. Three Colors. The Right One.', text: "Green means your child's need for AI help is fading — independence is growing. Yellow means it's steady. Red means it's rising and a teacher should know. Tap the badge for the why and the trend.", color: 'growth-green' },
      { icon: FullDashboard, title: 'Plain Language, Not Data Dumps', text: 'A calm, plain-language story of how your child is learning to think — not spreadsheets. And when it\'s early, an honest "this will fill in as they work" instead of a meaningless number.', color: 'mentra-blue' },
      { icon: SafetyMonitor, title: 'Safety You Can Trust', text: 'Alerts only when the signal is real. Because the app hasn\'t cried wolf, you pay attention when it speaks.', color: 'curiosity-coral' },
      { icon: GrowthGoals, title: 'See the Coaching, Not Just the Grades', text: "See how many AI coaching sessions your child has — so you know exactly how involved the AI is and can build on it at home.", color: 'grit-gold' },
      { icon: IndependenceTrajectory, title: 'See Independence Grow, Week by Week', text: "Your child's \"independence trajectory\" shows how much less they're needing AI help compared to last month. Not screen time. Not sessions. Not anything you'd already see on a phone bill. The shape of their thinking, getting more their own.", color: 'mentra-blue' },
      { icon: ConsentControls, title: 'Revoke Consent and Mentra Forgets — Instantly', text: "Every parent request hits a live consent check against your current settings. No JWT cache, no \"wait for next login.\" Revoke at 3:02 PM and the 3:02-PM-and-one-second request is denied. This is a database-layer guarantee, not a policy promise.", color: 'wisdom-purple' },
      { icon: DataPortability, title: 'Portable Learning Record', text: 'When your child changes schools, their new teachers don\'t start from zero. Encrypted, consent-verified, parent-controlled.', color: 'mentra-blue' },
      { icon: EmotionalData, title: 'Protected Emotional Data', text: 'Trends like "strong engagement" — never raw scores that could label your child. Deep personalization without psychological profiling.', color: 'curiosity-coral' },
      { icon: LearnerIdentity, title: 'Independence, Not Dependency', text: "The AI is training wheels. Scaffolding fades as your child grows. The success metric is how much less they need it.", color: 'grit-gold' },
    ],
  },
  {
    id: 'institutions',
    blurbs: [
      { icon: AltitudeView, title: 'An Altitude View, Never Surveillance', text: 'See where understanding is genuinely established versus still emerging, equity across cohorts, and an engine-decided queue of where to focus — always at the aggregate, never surveilling an individual child.', color: 'mentra-blue' },
      { icon: ComplianceShield, title: 'Compliance by Architecture', text: 'Dozens of automated policy gates run on every code change, enforcing security, AI safety, and tenant isolation. Audit evidence is generated from real system state — not self-reported assertions.', color: 'mentra-blue' },
      { icon: RosterIntegration, title: 'Roster Integration in Days', text: 'Clever, ClassLink, Canvas, Schoology, Google Classroom, OneRoster. Configure once, monitor through a single panel.', color: 'growth-green' },
      { icon: KillSwitch, title: 'AI Kill Switch', text: 'One toggle disables all AI in under a second. Fails closed — if anything breaks, AI stays off until you say otherwise.', color: 'curiosity-coral' },
      { icon: Explainability, title: 'No Black Boxes', text: 'Every AI adaptation is visible with a rationale. Teachers override anything. You can explain it at a board meeting.', color: 'grit-gold' },
      { icon: SecureExport, title: 'Provable Data Portability', text: 'Up to 26 data domains in a full archive export. AES-256-GCM encrypted, PII-redacted, consent-verified. Every step auditable.', color: 'wisdom-purple' },
      { icon: ITObservability, title: 'IT Observability', text: '16-service health monitoring, AI safety metrics, and FERPA audit logs. Proactive, not reactive.', color: 'mentra-blue' },
      { icon: TenantIsolation, title: 'Tenant Isolation Enforced at the Database Layer', text: 'Every Mentra database query runs with a tenant context set by the JWT and verified by Postgres Row-Level Security policies. A bug in application code can\'t leak data across tenants — the database itself refuses to return it. (A small number of legacy tables are mid-migration to add district-level scoping on top of tenant-level; tracked publicly in our security backlog.)', color: 'curiosity-coral' },
    ],
    stats: [
      { value: 'Dozens', label: 'Automated policy gates' },
      { value: '16', label: 'Independently monitored services' },
      { value: '26', label: 'Data domains in a full archive' },
      { value: '<1s', label: 'AI kill switch response' },
    ],
  },
];
