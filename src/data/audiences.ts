import { screens, type Screen } from '@/data/productScreens';

export interface ProofPoint {
  title: string;
  text: string;
  screen: Screen;
}

export interface PilotRow {
  question: string;
  evidence: string;
}

export interface Audience {
  id: 'teachers' | 'parents' | 'schools';
  path: string;
  /** Matches a persona id in personas.ts; its blurbs fill the "more" grid */
  personaId: string;
  docTitle: string;
  eyebrow: string;
  title: string;
  intro: string;
  proof: ProofPoint[];
  pilot?: PilotRow[];
  moreTitle: string;
  /** Optional pointer to a deeper page, e.g. the Platform page for IT */
  more?: { text: string; href: string; label: string };
}

export const audiences: Audience[] = [
  {
    id: 'teachers',
    path: '/teachers',
    personaId: 'teachers',
    docTitle: 'Mentra for Teachers',
    eyebrow: 'Mentra for teachers',
    title: 'See how your students think, not just what they answered.',
    intro:
      "Mentra shows where each student's reasoning is growing, where it stalls, and what you might try next. You stay the one making the decisions.",
    proof: [
      {
        title: 'Start the day knowing what needs you',
        text: "Today's Brief turns class signals into plain sentences. When the evidence is thin, it says so and keeps watching instead of guessing.",
        screen: screens.teacherBrief,
      },
      {
        title: 'See where the class gets stuck',
        text: "For each investigation: how many students are growing, which reasoning skill has the most room to grow, the level where most sessions stall, and a next move for the whole class.",
        screen: screens.teacherAnalytics,
      },
      {
        title: 'Every read shows its evidence',
        text: "A student's reply to Sprig is scored as an independent attempt and, the same day, becomes evidence behind their row in the Independence Report. One good reply doesn't flip the read, and where there isn't enough data the report says so.",
        screen: screens.teacherSignalLanding,
      },
      {
        title: 'Nothing happens until you approve it',
        text: "Every recommendation shows what it's based on, what success looks like and when it may be wrong. You approve, modify or dismiss it, and when the evidence is thin it says so.",
        screen: screens.teacherRecommendation,
      },
      {
        title: 'Share growth with families in one message',
        text: "Tell a parent what happened in their child's own words, and one thing to ask at home. Their reply comes back to you.",
        screen: screens.teacherParentMessage,
      },
    ],
    moreTitle: 'More for teachers',
  },
  {
    id: 'parents',
    path: '/parents',
    personaId: 'parents',
    docTitle: 'Mentra for Families',
    eyebrow: 'Mentra for families',
    title: 'What if AI helped your child think, instead of thinking for them?',
    intro:
      "Mentra is a learning companion designed not to do your child's homework. It coaches them through their own reasoning, tells you what's changing in plain words, and leaves you in control of their data.",
    proof: [
      {
        title: 'What your child sees',
        text: "Ask Sprig which way to solve a problem and it asks how your child would do it first, so they work the idea out instead of being told it.",
        screen: screens.studentPriya,
      },
      {
        title: 'A story from the teacher, not just a grade',
        text: "Your child's teacher can share what happened in a conversation with Sprig, in your child's own words, with one thing to ask at dinner.",
        screen: screens.parentTeacherMessage,
      },
      {
        title: 'One small thing to try at home',
        text: 'Each week you get one two-minute idea, not a report card. Tap a button to tell Mentra whether it landed.',
        screen: screens.parentOneQuestion,
      },
      {
        title: "A record of what your child has done",
        text: "The Learner Passport shows milestones your child has reached and what's next. It's honest about its limits: not every activity is counted there yet.",
        screen: screens.parentPassport,
      },
      {
        title: 'Every permission, in plain words',
        text: 'See exactly what you agreed to, purpose by purpose. Each toggle tells you what turning it off changes, and your choice takes effect right away.',
        screen: screens.parentTrust,
      },
    ],
    moreTitle: 'More for families',
  },
  {
    id: 'schools',
    path: '/schools',
    personaId: 'institutions',
    docTitle: 'Mentra for Schools and Districts',
    eyebrow: 'Mentra for schools and districts',
    title: 'Judge us on learning, not logins.',
    intro:
      "Mentra shows how students reason, where a class gets stuck and what to try next, and it says plainly when there isn't enough evidence yet. A pilot then measures whether it's worth the cost.",
    proof: [
      {
        title: 'What a class can reason through, on one screen',
        text: 'How many students are growing, where the class stalls and what to assign next. Each section links to the evidence behind it.',
        screen: screens.teacherAnalytics,
      },
      {
        title: 'Evidence of reasoning, not time-on-app',
        text: "Feedback is written about each student's actual reasoning: what held up, what didn't, and the next thing to test.",
        screen: screens.studentVerdict,
      },
      {
        title: 'Honest about what it doesn\'t know yet',
        text: "Each student's read is built from their recent work and shows its evidence. Where there isn't enough data, it says so instead of producing a number your board can't trust.",
        screen: screens.teacherSignalLanding,
      },
    ],
    pilot: [
      { question: 'Are students reasoning more independently?', evidence: 'Changes in reasoning quality and how often students ask for help' },
      { question: 'Does it help teachers?', evidence: 'Teacher-rated usefulness, and the time it takes to act on an insight' },
      { question: 'Are families more engaged?', evidence: 'Participation in, and usefulness of, the at-home prompts' },
      { question: 'Does it improve learning?', evidence: 'Pre and post measures on instructional tasks you choose' },
      { question: 'Is the cost justified?', evidence: 'Cost per active student, teacher time, and the measured outcomes above' },
    ],
    moreTitle: 'Governance and controls',
    more: {
      text: 'For IT and curriculum teams: architecture, rostering, SSO and data portability.',
      href: '/platform',
      label: 'Explore the platform',
    },
  },
];

export const getAudience = (id: Audience['id']) => audiences.find((a) => a.id === id)!;
