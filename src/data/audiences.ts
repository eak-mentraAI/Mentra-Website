import type React from 'react';
import { screens } from '@/data/productScreens';
import type { ScreenTab } from '@/components/ui/ScreenTabs';
import { ExploreSparks, AdaptiveTutor, StuckDetection, CodeBuild, LearnerPassport, XPSprigs, ReflectJournal, BoundedSession } from '@/components/icons/students';
import { IntelligenceHub, WeeklyDigest, AIControl, SmartGrading, FadingTrend } from '@/components/icons/teachers';
import { StatusLight, FullDashboard, SafetyMonitor, GrowthGoals, ConsentControls, DataPortability, EmotionalData, LearnerIdentity, IndependenceTrajectory } from '@/components/icons/parents';
import { ComplianceShield, RosterIntegration, KillSwitch, Explainability, SecureExport, ITObservability, TenantIsolation, AltitudeView } from '@/components/icons/institutions';

export interface PilotRow {
  question: string;
  evidence: string;
}

export interface FeatureItem {
  icon: React.FC<{ className?: string }>;
  /** Sentence case */
  title: string;
  text: string;
}

/** A grid of feature cards. Every claim must trace to something the homepage, Platform, About or FAQ already shows. */
export interface FeatureGroup {
  id: string;
  /** Sentence case */
  title: string;
  items: FeatureItem[];
}

/** The on-model Sprig illustration beside the hero copy. Use a sized webp and its real pixel size. */
export interface HeroArt {
  src: string;
  width: number;
  height: number;
}

export interface Audience {
  id: 'teachers' | 'parents' | 'schools';
  path: string;
  docTitle: string;
  eyebrow: string;
  title: string;
  intro: string;
  hero: HeroArt;
  /** The audience's problem in their own terms, shown under the hero. Keep claims to what the research supports. */
  problem?: { heading: string; paragraphs: string[] };
  /** Homepage link: a one-line pitch */
  cardLine: string;
  /** Shown in a tab viewer. Keep one "honest about what we don't know" line per page, not one per tab. */
  proof: ScreenTab[];
  /** The full pilot plan. Only /schools sets it: PricingSection and About link there as "See the full pilot plan". */
  pilot?: PilotRow[];
  /** Persona whose stat tiles appear on the page, if any */
  statsPersonaId?: string;
  /** Show the shared "Built for growing minds" trust block. Off where the page already makes those points. */
  showTrust?: boolean;
  features: FeatureGroup[];
  /** Optional pointer to a deeper page, e.g. the Platform page for IT */
  more?: { text: string; href: string; label: string };
}

export const audiences: Audience[] = [
  {
    id: 'teachers',
    path: '/teachers',
    docTitle: 'Mentra for Teachers',
    eyebrow: 'Mentra for teachers',
    title: 'When the finished work stops telling you much, see the working.',
    intro:
      "Assign the work with Sprig and see what each student tried, where they needed help and what they managed on their own. Built first for high school classrooms. You stay the one making the decisions.",
    hero: { src: '/images/sprig/sprig-teacher-600.webp', width: 600, height: 600 },
    problem: {
      heading: 'Finding out who did the thinking is costing you hours',
      paragraphs: [
        'When homework could have come from a chatbot, the checking falls to you: more grading, more class time spent proving what students can do, and less time for teaching. And by the end of it you still may not know which students need you most.',
        'In Mentra the work happens with Sprig, and every turn is labelled: on their own, with help, or repeating what Sprig said. Today’s Brief lists what needs you today. It isn’t a cheating detector. It’s a record to teach from, of what a student did in Mentra and only that.',
      ],
    },
    cardLine: 'See what each student did with help and what they did alone. You make every call.',
    proof: [
      {
        eyebrow: "Today's Brief",
        title: 'Start the day knowing what needs you',
        text: "Today's Brief turns class signals into plain sentences and lists what needs you today, with links to dig deeper.",
        screen: screens.teacherBrief,
      },
      {
        eyebrow: 'Class analytics',
        title: 'See where the class gets stuck',
        text: 'For each investigation: how many students are growing, which reasoning skill has the most room to grow, the level where most sessions stall, and a next move for the whole class.',
        screen: screens.teacherAnalytics,
      },
      {
        eyebrow: 'Evidence',
        title: 'Every turn the report looked at is one click away',
        text: "Open a student's recent turns and each one is labelled: on their own, with help, or repeated what Sprig said. One click opens the exact turn in the conversation.",
        screen: screens.teacherTurnTrace,
      },
      {
        eyebrow: 'Recommendations',
        title: 'Nothing happens until you approve it',
        text: "Every recommendation shows what it's based on, what success looks like and when it may be wrong. You approve, modify or dismiss it.",
        screen: screens.teacherRecommendation,
      },
      {
        eyebrow: 'Families',
        title: 'Share growth in one message',
        text: "Tell a parent what happened in their child's own words, and one thing to ask at home. Their reply comes back to you.",
        screen: screens.teacherParentMessage,
      },
    ],
    features: [
      {
        id: 'teachers',
        title: 'More for teachers',
        items: [
          {
            icon: IntelligenceHub,
            title: 'Know who needs you first',
            text: "Today's Brief turns your class's work into plain sentences and lists what needs you today, with a link to the work behind each line.",
          },
          {
            icon: SmartGrading,
            title: 'You decide how much help',
            text: 'Set how much Sprig helps on each assignment. Choose No AI Help to see what a student can do alone: those results count as unaided work.',
          },
          {
            icon: FadingTrend,
            title: 'Watch the help fade',
            text: 'See how much help each student needs over time, and whether their independent attempts hold up as Sprig steps back.',
          },
          {
            icon: WeeklyDigest,
            title: '“Not enough data yet”, not a guess',
            text: "Until a student has done enough recent work, the Independence Report says so. When there is enough, it shows how confident it is and the turns behind it.",
          },
          {
            icon: AIControl,
            title: 'Nothing changes until you approve it',
            text: "Every recommendation says what it's based on and when it may be wrong. You approve, modify or dismiss it, and your judgment is final.",
          },
          {
            icon: KillSwitch,
            title: 'AI can be switched off',
            text: 'A school administrator can switch all AI off. If something breaks, it fails closed: AI stays off until someone turns it back on.',
          },
        ],
      },
    ],
  },
  {
    id: 'parents',
    path: '/parents',
    docTitle: 'Mentra for Families',
    eyebrow: 'Mentra for families',
    title: 'What if AI helped your child think, instead of thinking for them?',
    intro:
      "Mentra is a learning companion designed not to do your child's homework. It coaches them through their own reasoning, tells you what's changing in plain words, and leaves you in control of their data.",
    hero: { src: '/images/sprig/sprig-idea-600.webp', width: 600, height: 600 },
    problem: {
      heading: 'Finished homework doesn’t tell you who did the thinking',
      paragraphs: [
        'A chatbot can finish most homework in seconds. From the kitchen table, a completed worksheet looks the same whether your child worked it out or had it written for them, and a grade can’t tell you which.',
        'In Mentra, Sprig answers with questions, so the hard part stays with your child, and it helps less as they show they can do it. Their teacher sees what they did on their own and what they did with help, and can share a moment of it with you in your child’s own words.',
      ],
    },
    cardLine: 'A companion that coaches instead of answering, plain-language updates, and every permission in your hands.',
    proof: [
      {
        eyebrow: 'What your child sees',
        title: "Won't just hand over the answer",
        text: "When your child asks Sprig for the answer, it asks what they've tried and what they think is going on. Then it works through it with them, one hint at a time.",
        screen: screens.studentAskSprig,
      },
      {
        eyebrow: 'Their home screen',
        title: 'A Sprig that grows with them',
        text: 'Your child earns XP for asking why, writing a reflection or exploring an idea, not for right answers. Their Sprig levels up as they go, and they pick up where they left off.',
        screen: screens.studentHome,
      },
      {
        eyebrow: 'From the teacher',
        title: 'A story, not just a grade',
        text: "Your child's teacher can share what happened in a conversation with Sprig, in your child's own words, with one thing to ask at dinner.",
        screen: screens.parentTeacherMessage,
      },
      {
        eyebrow: 'At home',
        title: 'One small thing to try',
        text: 'Each week you get one two-minute idea, not a report card. Tap a button to tell Mentra whether it landed.',
        screen: screens.parentOneQuestion,
      },
      {
        eyebrow: 'Learner Passport',
        title: 'A record of what your child has done',
        text: "The Learner Passport shows milestones your child has reached and what's next. It's honest about its limits: not every activity is counted there yet.",
        screen: screens.parentPassport,
      },
      {
        eyebrow: 'Permissions',
        title: 'Every permission, in plain words',
        text: 'See exactly what you agreed to, purpose by purpose. Each toggle tells you what turning it off changes, and your choice takes effect right away.',
        screen: screens.parentTrust,
      },
    ],
    showTrust: true,
    features: [
      {
        id: 'students',
        title: 'What your child does in Mentra',
        items: [
          { icon: ExploreSparks, title: 'Explore what makes them curious', text: 'Daily prompts tailored to their interests: rabbit holes worth going down. No grades, just discovery that builds genuine curiosity.' },
          { icon: AdaptiveTutor, title: 'A tutor that steps back', text: 'Questions get harder as your child grows, and support fades as they show a skill. The goal is for them not to need it.' },
          { icon: BoundedSession, title: 'A tutor that knows when to stop', text: "Every Sprig session has a hard cap: 20 messages, 10 minutes, and a reflection before the session can close. Not because we're rationing AI, but because reflection is where learning consolidates." },
          { icon: StuckDetection, title: 'Help that builds their thinking', text: 'Notices when your child is stuck and guides their thinking rather than handing them the answer.' },
          { icon: CodeBuild, title: 'Code, build and create', text: 'Your child writes real code with Sprig as a mentor that teaches systematic thinking, then lets them fly solo.' },
          { icon: LearnerPassport, title: 'More than a number', text: "A Learner Passport that records the work your child has done, from journal entries and goals to the milestones they've reached, and grows as more of their activity is counted." },
          { icon: XPSprigs, title: 'XP for effort, not just answers', text: 'Your child earns experience points for effort and growth, not just right answers, and their Sprig grows as they do.' },
          { icon: ReflectJournal, title: 'Reflection they own', text: 'Journaling, mood check-ins and goal-setting that teach your child to notice their own patterns: a skill they keep.' },
        ],
      },
      {
        id: 'parents',
        title: 'More for families',
        items: [
          { icon: StatusLight, title: 'One status, three colors', text: "Green means your child's need for AI help is fading — independence is growing. Yellow means it's steady. Red means it's rising and a teacher should know. Tap the badge for the why and the trend." },
          { icon: FullDashboard, title: 'Plain language, not data dumps', text: 'A calm, plain-language story of how your child is learning to think — not spreadsheets. And when it\'s early, an honest "this will fill in as they work" instead of a meaningless number.' },
          { icon: SafetyMonitor, title: 'Safety you can trust', text: "Alerts only when the signal is real. Because the app hasn't cried wolf, you pay attention when it speaks." },
          { icon: GrowthGoals, title: 'See the coaching, not just the grades', text: 'See how many AI coaching sessions your child has — so you know exactly how involved the AI is and can build on it at home.' },
          { icon: IndependenceTrajectory, title: 'See independence grow, week by week', text: "Your child's \"independence trajectory\" shows how much less they're needing AI help compared to last month. Not screen time. Not sessions. Not anything you'd already see on a phone bill. The shape of their thinking, getting more their own." },
          { icon: ConsentControls, title: 'Revoke consent and Mentra forgets, instantly', text: "Every parent request hits a live consent check against your current settings. No JWT cache, no \"wait for next login.\" Revoke at 3:02 PM and the 3:02-PM-and-one-second request is denied. This is a database-layer guarantee, not a policy promise." },
          { icon: DataPortability, title: 'Portable learning record', text: "When your child changes schools, their new teachers don't start from zero. Encrypted, consent-verified, parent-controlled." },
          { icon: EmotionalData, title: 'Protected emotional data', text: 'Trends like "strong engagement" — never raw scores that could label your child. Deep personalization without psychological profiling.' },
          { icon: LearnerIdentity, title: 'Independence, not dependency', text: 'The AI is training wheels. Scaffolding fades as your child grows. The success metric is how much less they need it.' },
        ],
      },
    ],
  },
  {
    id: 'schools',
    path: '/schools',
    docTitle: 'Mentra for Schools and Districts',
    eyebrow: 'Mentra for schools and districts',
    title: 'Judge us on learning, not logins.',
    intro:
      'Mentra shows how students reason, where a class gets stuck and what to try next. A pilot then measures whether it is worth the cost, against measures you agree up front, including a check of unaided work that Sprig takes no part in.',
    hero: { src: '/images/sprig/sprig-glasses-600.webp', width: 600, height: 600 },
    problem: {
      heading: 'Whatever you adopt, you’ll be asked what it did for learning',
      paragraphs: [
        'Grades on unsupervised work no longer show who did the thinking, so they can’t show whether an AI tool is helping. Detectors that flag honest students are a liability, not evidence. Meanwhile budgets are tight, families are asking about screens, and some large districts have paused student-facing AI altogether. Your board will want an answer it can check.',
        'Mentra is a narrow answer to a specific problem. Students work with Sprig on assignments the teacher sets, and the teacher sees what was done with help and what was done alone. We don’t claim it is proven to improve learning; no Socratic AI tutor can say that yet. That is what the pilot is for.',
      ],
    },
    cardLine: 'Evidence of reasoning, a pilot measured your way, and governance your board can inspect.',
    proof: [
      {
        eyebrow: 'Class analytics',
        title: 'What a class can reason through, on one screen',
        text: 'How many students are growing, where the class stalls and what to assign next. Each section links to the evidence behind it.',
        screen: screens.teacherAnalytics,
      },
      {
        eyebrow: 'Reasoning feedback',
        title: 'Evidence of reasoning, not time-on-app',
        text: "Feedback is written about each student's actual reasoning: what held up, what didn't, and the next thing to test.",
        screen: screens.studentVerdict,
      },
      {
        eyebrow: 'Evidence',
        title: "Honest about what it doesn't know yet",
        text: "Until there's enough recent work, a student's read says so instead of producing a number your board can't trust. When there is enough, the read comes with a confidence level and the evidence behind it.",
        screen: screens.teacherIndependence,
      },
      {
        eyebrow: 'Family consent',
        title: 'Parents hold the keys',
        text: "A child under 13 uses Sprig only with a parent's OK. Parents can review or withdraw consent, request deletion, and download their child's recent AI conversations.",
        screen: screens.parentConsent,
      },
    ],
    pilot: [
      { question: 'Are students doing the reasoning?', evidence: 'The share of students who write a real reasoning step, not a one-word reply, in most sessions, including the lowest-performing students' },
      { question: 'Is the help fading?', evidence: 'How much help each student needs per problem over time, and whether their independent attempts hold up' },
      { question: 'Can students do it without help?', evidence: 'A later No AI Help check that Sprig neither assists with nor writes' },
      { question: 'Does it help teachers?', evidence: 'Whether teachers open the brief and change something the next day, teacher-rated usefulness, and the time it takes to act' },
      { question: 'Are families more engaged?', evidence: 'Participation in, and usefulness of, the at-home prompts' },
      { question: 'Does it improve learning?', evidence: 'Pre and post measures on instructional tasks you choose' },
      { question: 'Is the cost justified?', evidence: 'Cost per active student, teacher time, and the measured outcomes above' },
    ],
    statsPersonaId: 'institutions',
    features: [
      {
        id: 'institutions',
        title: 'Governance and controls',
        items: [
          { icon: AltitudeView, title: 'An altitude view, never surveillance', text: 'See where understanding is genuinely established versus still emerging, equity across cohorts, and an engine-decided queue of where to focus — always at the aggregate, never surveilling an individual child.' },
          { icon: ComplianceShield, title: 'Compliance by architecture', text: 'Dozens of automated policy gates run on every code change, enforcing security, AI safety, and tenant isolation. Audit evidence is generated from real system state — not self-reported assertions.' },
          { icon: RosterIntegration, title: 'Roster integration in days', text: 'Clever, ClassLink, Canvas, Schoology, Google Classroom, OneRoster. Configure once, monitor through a single panel.' },
          { icon: KillSwitch, title: 'AI kill switch', text: 'One toggle disables all AI in under a second. Fails closed — if anything breaks, AI stays off until you say otherwise.' },
          { icon: Explainability, title: 'No black boxes', text: 'Every AI adaptation is visible with a rationale. Teachers override anything. You can explain it at a board meeting.' },
          { icon: SecureExport, title: 'Provable data portability', text: 'Up to 26 data domains in a full archive export. AES-256-GCM encrypted, PII-redacted, consent-verified. Every step auditable.' },
          { icon: ITObservability, title: 'IT observability', text: '16-service health monitoring, AI safety metrics, and FERPA audit logs. Proactive, not reactive.' },
          { icon: TenantIsolation, title: 'Tenant isolation enforced at the database layer', text: "Every Mentra database query runs with a tenant context set by the JWT and verified by Postgres Row-Level Security policies. A bug in application code can't leak data across tenants — the database itself refuses to return it. (A small number of legacy tables are mid-migration to add district-level scoping on top of tenant-level; tracked publicly in our security backlog.)" },
        ],
      },
    ],
    more: {
      text: 'For IT and curriculum teams: architecture, rostering, SSO and data portability.',
      href: '/platform',
      label: 'Explore the platform',
    },
  },
];

export const getAudience = (id: Audience['id']) => audiences.find((a) => a.id === id)!;
