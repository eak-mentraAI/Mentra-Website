import { screens } from '@/data/productScreens';
import type { ScreenTab } from '@/components/ui/ScreenTabs';

export interface PilotRow {
  question: string;
  evidence: string;
}

/** A grid of feature cards, filled from a persona's blurbs in personas.ts */
export interface FeatureGroup {
  title: string;
  personaId: string;
}

export interface Audience {
  id: 'teachers' | 'parents' | 'schools';
  path: string;
  docTitle: string;
  eyebrow: string;
  title: string;
  intro: string;
  /** Homepage link: a one-line pitch */
  cardLine: string;
  /** Shown in a tab viewer. Keep one "honest about what we don't know" line per page, not one per tab. */
  proof: ScreenTab[];
  pilot?: PilotRow[];
  /** Persona whose stat tiles appear on the page, if any */
  statsPersonaId?: string;
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
    title: 'See how your students think, not just what they answered.',
    intro:
      "Mentra shows where each student's reasoning is growing, where it stalls, and what you might try next. You stay the one making the decisions.",
    cardLine: 'Know who needs you, where the class is stuck, and what to try next. You make every call.',
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
    features: [{ title: 'More for teachers', personaId: 'teachers' }],
  },
  {
    id: 'parents',
    path: '/parents',
    docTitle: 'Mentra for Families',
    eyebrow: 'Mentra for families',
    title: 'What if AI helped your child think, instead of thinking for them?',
    intro:
      "Mentra is a learning companion designed not to do your child's homework. It coaches them through their own reasoning, tells you what's changing in plain words, and leaves you in control of their data.",
    cardLine: 'A companion that coaches instead of answering, plain-language updates, and every permission in your hands.',
    proof: [
      {
        eyebrow: 'What your child sees',
        title: "Doesn't let a wrong answer slide",
        text: 'When your child gets it wrong, Sprig says "not quite", keeps what they got right, and has them check the step that slipped. Then it hands over a new problem to try alone.',
        screen: screens.studentZoe,
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
    features: [
      { title: 'What your child does in Mentra', personaId: 'students' },
      { title: 'More for families', personaId: 'parents' },
    ],
  },
  {
    id: 'schools',
    path: '/schools',
    docTitle: 'Mentra for Schools and Districts',
    eyebrow: 'Mentra for schools and districts',
    title: 'Judge us on learning, not logins.',
    intro:
      'Mentra shows how students reason, where a class gets stuck and what to try next. A pilot then measures whether it is worth the cost, against measures you agree up front.',
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
        text: "Until there's enough recent work, a student's read says so instead of producing a number your board can't trust. The turns it has seen are listed and labelled, and a turn where the student only repeated Sprig isn't counted as independent work.",
        screen: screens.teacherTurnTrace,
      },
      {
        eyebrow: 'Family consent',
        title: 'Parents hold the keys',
        text: "A child under 13 uses Sprig only with a parent's OK. Parents can review or withdraw consent, request deletion, and download their child's recent AI conversations.",
        screen: screens.parentConsent,
      },
    ],
    pilot: [
      { question: 'Are students reasoning more independently?', evidence: 'Changes in reasoning quality and how often students ask for help' },
      { question: 'Does it help teachers?', evidence: 'Teacher-rated usefulness, and the time it takes to act on an insight' },
      { question: 'Are families more engaged?', evidence: 'Participation in, and usefulness of, the at-home prompts' },
      { question: 'Does it improve learning?', evidence: 'Pre and post measures on instructional tasks you choose' },
      { question: 'Is the cost justified?', evidence: 'Cost per active student, teacher time, and the measured outcomes above' },
    ],
    statsPersonaId: 'institutions',
    features: [{ title: 'Governance and controls', personaId: 'institutions' }],
    more: {
      text: 'For IT and curriculum teams: architecture, rostering, SSO and data portability.',
      href: '/platform',
      label: 'Explore the platform',
    },
  },
];

export const getAudience = (id: Audience['id']) => audiences.find((a) => a.id === id)!;
