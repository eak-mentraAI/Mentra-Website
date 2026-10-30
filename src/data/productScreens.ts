// Cropped screens from the live Mentra app, shot on a fictional showcase class.
// Source frames: marketing/carousel/<date>/ in the app repo (see the showcase doc for
// which frames are cleared for marketing). Crops live in /public/images/product.
// Redesigned-UI crops come from two 2026-10-29 batches. Batch 1 gives parent Trust and Consent and student Home (real app
// copy only; its coaching text was test fixture, so its Brief, Recommendations, parent Home and Passport shots aren't used).
// Batch b gives the student, analytics, Independence Report, message and passport crops: every Sprig line is copied
// verbatim from the 2026-10-14 showcase transcripts (app-screenshots-2026-10-29-b/transcripts). Batch c (2026-10-30)
// gives the Brief, the investigation verdict and the Independence Report, and batch d the parent weekly-activity card:
// live captures on the showcase accounts.

/**
 * What the interaction on a screen feeds into the learner model. Every line must trace to code in the
 * app repo (signal extractors and the learner-intelligence-service); don't add claims you can't point to.
 */
export interface SignalTrail {
  kind: 'records' | 'reads';
  items: string[];
  goesTo: string;
}

export interface Screen {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Shown in the frame's title bar */
  label: string;
  signals?: SignalTrail;
  /** Real footage (an approved in-app video loop). Shown instead of the still; src is the poster. */
  video?: { src: string; mobileSrc?: string; poster: string; playbackRate?: number };
}

const qaSignals = (name: string): SignalTrail => ({
  kind: 'records',
  items: [
    "Sprig's grade of how well each reply shows the skill, which updates their mastery estimate for it",
    'Whether they reached the idea unaided',
    'Each hint Sprig offers, and, where the skill is mapped to the curriculum, whether they later succeed without it',
  ],
  goesTo: `${name}'s learner graph, which the teacher's Independence Report reads`,
});

const videoScreen = (
  file: string, label: string, alt: string, signals?: SignalTrail,
): Screen => ({
  src: `/images/product/${file}-poster.webp`,
  alt,
  width: 1280,
  height: 720,
  label,
  signals,
  video: { src: `/videos/${file}.mp4`, mobileSrc: `/videos/${file}-720.mp4`, poster: `/images/product/${file}-poster.webp` },
});

const withPlaybackRate = (playbackRate: number, s: Screen): Screen => ({ ...s, video: s.video && { ...s.video, playbackRate } });

const screen = (
  file: string, width: number, height: number, label: string, alt: string, signals?: SignalTrail,
): Screen => ({
  src: `/images/product/${file}.webp`,
  alt,
  width,
  height,
  label,
  signals,
});

export const screens = {
  // Motion loops from the 2026-10-27 publish set (marketing/carousel/publish-v2-2026-10-27 in the app repo):
  // eased camera, waits shortened, no text. Approved for the site by the owner.
  studentJordan: videoScreen(
    'student-jordan', 'Student · Q&A with Sprig',
    "Video: Jordan's conversation with Sprig about why plants need sunlight. Sprig hints that sunlight isn't just warming the plant and asks what it might be doing to help the plant make food. Jordan types: is it giving the plant energy to actually make the food? Sprig replies that's the key idea, and that sunlight gives the plant the energy it needs to make its own food.",
    qaSignals('Jordan'),
  ),
  // 0.8x: the conversation turns and the fix go by fast at full speed.
  studentCoding: withPlaybackRate(0.8, videoScreen(
    'student-coding', 'Student · Coding with Sprig',
    "Video: a coding session. The program prints 2 instead of 3 because len(waterings) counts the plants. Sprig asks what waterings is and what len counts on a dictionary. Jordan works out it's the whole dictionary, edits line 10 to len(waterings[\"window plant\"]), and runs it: Window plant days: 3.",
    {
      kind: 'records',
      items: [
        'Debugging persistence: attempts, time spent, and whether the bug gets resolved',
        'Whether the student reaches the fix unaided',
      ],
      goesTo: "The learner graph; independent attempts are read by the teacher's Independence Report",
    },
  )),
  // Played at 0.8x everywhere: the click and the jump to the turn are quick, and viewers should catch it in one loop.
  teacherTurnTrace: withPlaybackRate(0.8, videoScreen(
    'teacher-turn-trace', "Teacher · Independence Report",
    "Video: in the teacher's Independence Report, Jordan's recent turns are listed, each labelled on their own, with help, or repeated what Sprig said. The teacher clicks Open this turn on an Oct 25 turn labelled with help, and the conversation opens with that exact turn highlighted: Jordan asking if sunlight is giving the plant energy to actually make the food, and Sprig replying that's the key idea.",
    {
      kind: 'reads',
      items: [
        "Each of the student's turns, labelled: on their own, with help, or repeated what Sprig said",
        'Only turns done on their own count as independent work; help is weighed separately',
      ],
      goesTo: "The student's learner graph. The read itself waits until there's enough recent work",
    },
  )),
  teacherIndependence: screen(
    'teacher-independence', 1400, 480, 'Teacher · Independence Report',
    "The teacher's Cognitive Independence Report: 1 student needs a look and 5 don't have enough recent sessions yet to read. Leo is marked leaning on support, with independent first attempts falling across recent sessions, moderate confidence as of Oct 28, 2026, and a link to the supporting evidence. Jordan is marked not enough data yet, with a note to check back as more work comes in.",
    {
      kind: 'reads',
      items: [
        "Each of the student's turns, labelled: on their own, with help, or repeated what Sprig said",
        'Only turns done on their own count as independent work; help is weighed separately',
      ],
      goesTo: "The student's learner graph. The read itself waits until there's enough recent work",
    },
  ),
  studentAskSprig: screen(
    'student-ask-sprig', 1400, 406, 'Student · Ask Sprig',
    "Jordan asks Sprig to just tell him the answer to a sunlight question. Sprig says stuck is a real place to be, that it won't hand over the answer but can help him work through it, and asks what he's tried or thinks is going on. Jordan replies that plants need sunlight to grow, but he doesn't know why it matters.",
    qaSignals('Jordan'),
  ),
  studentSignalNoise: screen(
    'student-signal-noise', 1346, 987, 'Student · Signal & Noise',
    "Sprig's coaching after a student ranks three explanations of error-message design. Your Frame notes the student expected a tension between the user's and the designer's perspective but ranked on depth and evidence quality. What You Caught credits the specific, actionable mechanics in Option C and asks who each piece is written for. The Thread says this is the student's first evaluation, so there's no pattern yet. Your Next Edge suggests writing one sentence about each option before ranking next time.",
    {
      kind: 'records',
      items: [
        'How well their confidence matched their judgment',
        'Their reflection on the round',
        'Whether they weighed trade-offs, and how developed their reasoning was',
      ],
      goesTo: "The learner graph tracks calibration and reflection over time, and trade-offs and reasoning feed a decision-quality read. The game's own judgment profile updates too",
    },
  ),
  studentWhyChain: screen(
    'student-why-chain', 1400, 588, 'Student · Investigations',
    "An investigation of the claim that plants in shade grow larger, darker green leaves. At level 1 the student says the plant makes bigger leaves to catch more light, and Sprig asks what is actually happening that causes the change. At level 2 the student says the plant senses low light, makes more chlorophyll, and uses its energy differently. Sprig asks what has to happen first before the plant can put its energy into bigger leaves.",
    {
      kind: 'records',
      items: [
        'How deep the why-chain goes, level by level',
        'Whether the student notes more than one cause at a level',
        'The evidence they tag and the cause-and-effect map they build next',
      ],
      goesTo: "The saved investigation feeds the student's Cognitive Mirror and the teacher's class radar; the same signals also go to the learner graph",
    },
  ),
  studentPrompting: screen(
    'student-prompting', 1400, 716, 'Student · Prompt Engineering',
    "Sprig's feedback on a student's prompt asking an AI for example haikus. Score 42%. What worked: everyday topics and the 5-7-5 rule. To improve: the prompt asks for examples without including any, so Sprig suggests writing one haiku and putting it in the prompt.",
  ),
  studentExploration: screen(
    'student-exploration', 1400, 696, 'Student · Free Explore',
    "Free Explore on a carnival game: $3 to play for a 1-in-10 chance to win $20. Sprig explains expected value. The student asks whether playing 10 times guarantees a win. Sprig says it's not a guarantee: each turn is its own 1-in-10 chance, you'd expect to win about once on average, and some people win twice or not at all. It suggests a try-it with ten objects, one marked with an X.",
    {
      kind: 'records',
      items: [
        'How far the student explores beyond the opening idea',
        'The follow-up questions they choose to ask',
        'How engaged they stay through the session',
      ],
      goesTo: "The student's learner graph",
    },
  ),
  studentVerdict: screen(
    'student-verdict', 1400, 1200, "Student · Sprig's verdict on an investigation",
    "Sprig's verdict on Jordan's investigation into why plants near streetlights stay green longer in the fall, in four parts. Your Frame says his test pits the night-length mechanism against temperature as a real rival. Your Chain says each of his three levels moves the mechanism forward and that stopping at level 3 is honest. Your Board credits arrows labelled with real mechanisms and the sensory step as the leverage point. Your Next Edge notes his confidence moved from 65 to 55 and asks him to tighten his falsifier: what if lit trees changed three days later?",
    {
      kind: 'records',
      items: [
        'How deep the why-chain went',
        'Which evidence was tagged, and the cause-and-effect map drawn',
        "How the student's confidence moved, here from 65 to 55",
      ],
      goesTo: "The saved investigation feeds the student's Cognitive Mirror and the teacher's class radar; the same signals also go to the learner graph",
    },
  ),
  parentTrust: screen(
    'parent-trust', 1400, 631, 'Parent · Trust & Privacy',
    "A parent's Trust & Privacy page for their child Maya: consent active since Aug 14, 2026, and a toggle for each of six purposes, from running Mentra to product update emails. Each one says what it allows and what turning it off changes. Partner sharing and product emails are off.",
  ),
  teacherBrief: screen(
    'teacher-brief', 1400, 599, "Teacher · Today's Brief",
    "A teacher's Today's Brief: Good morning, Elena, across all your classes. Class signals in plain sentences: students at risk up this week, driven by hint reliance; class mastery needs support, mostly error correction; no shared stuck point yet; no students standing out this week; and 1 student needs a look because the scaffolding may be creating dependency, while 5 don't have enough recent sessions to read. What needs me today says nothing needs the teacher today.",
  ),
  teacherAnalytics: screen(
    'teacher-analytics', 1400, 921, 'Teacher · Investigation analytics',
    "Analytics for a Systems Thinking investigation, why do some streets flood after a storm: 4 of 9 students growing, 3 steady, 2 hitting a tough stretch and 1 just started, the class's biggest room to grow and a suggested next move, a class radar across five reasoning skills from 10 students and 31 sessions, and the levels where the class most often got stuck.",
    {
      kind: 'reads',
      items: [
        'Why-chain depth, axiom tagging and cause-and-effect maps from each investigation',
        'Prediction scores, and how well confidence matched the result',
      ],
      goesTo: 'Every student in the class, across all their sessions on this investigation',
    },
  ),
  teacherRecommendation: screen(
    'teacher-recommendation', 1400, 626, 'Teacher · Recommendations',
    "A recommendation for Jordan marked lower confidence, explaining why it matters, what it's based on, what success looks like and when it may be wrong, with Approve, Modify, Dismiss and Track outcome buttons. The page notes that nothing happens until the teacher approves.",
  ),
  parentOneQuestion: screen(
    'parent-one-question', 1400, 386, 'Parent · One question this week',
    "A two-minute suggestion for Jordan's parent: at dinner, ask what Jordan figured out this week, then just listen. It notes it's a general tip because no standout moments came up this week, and offers four feedback buttons.",
  ),
  teacherParentMessage: screen(
    'teacher-parent-message', 1400, 1056, 'Teacher · Messages with families',
    "Ms. Alvarez's message to Jordan's parent, Sam, about Jordan's sunlight conversation with Sprig. It quotes Jordan's own words and suggests asking what would happen to a plant kept in the dark. The parent's reply is below.",
  ),
  parentTeacherMessage: screen(
    'parent-teacher-message', 1400, 1105, 'Parent · Messages with the teacher',
    "The parent's view of the same thread: Ms. Alvarez's message about Jordan's sunlight conversation with Sprig, and the parent's reply saying they'll ask about the plant in the dark at dinner.",
  ),
  parentPassport: screen(
    'parent-passport', 1400, 307, 'Parent · Learner Passport',
    "Milestones on a child's Learner Passport, as the parent sees it: Reflection Beginner and Dream Planter reached, with Story Weaver at 4 of 10 journal entries and Goal Builder at 2 of 5 goals next.",
  ),
  parentConsent: screen(
    'parent-consent', 1400, 720, 'Parent · Consent & Privacy',
    "A parent's Consent & Privacy page. A note says the child can use Sprig only with the parent's OK, which they can give, review or withdraw at any time. Maya R, grade 6 and under 13, has active consent with History, Withdraw consent and Request Data Deletion buttons. Below, the parent can export the child's last 30 days of AI conversations, redacted for privacy, as JSON or for printing.",
  ),
  studentHome: screen(
    'student-home', 1400, 755, 'Student · Home',
    "A student's home page: Good afternoon, Maya, with 1 of 3 quests done. Her Sprig is at level 3, 110 XP from level 4. A card offers to continue yesterday's Ask Sprig question, why does ice float. Today's quests: ask Sprig a why-question (done, 15 XP), write one journal reflection, and explore an idea spark.",
  ),
} satisfies Record<string, Screen>;

/**
 * The teacher loop cropped and zoomed for phones (made from the 1920 master: the camera starts on the "with help" row,
 * then moves to Jordan's highlighted turn and stays there). The clip's own closing pull-back is cut, and the still
 * review screen is held 1.4x as long: 8.5 s, or about 10.6 s at the 0.8x playback rate.
 */
export const teacherTurnTraceZoom = {
  src: '/videos/teacher-turn-trace-zoom.mp4',
  poster: '/images/product/teacher-turn-trace-zoom-poster.webp',
  alt: "Video, zoomed in: in the teacher's Independence Report, an Oct 25 turn labelled with help. The teacher opens it, and the conversation shows Jordan's turn highlighted: is sunlight giving the plant energy to actually make the food?",
  width: 630,
  height: 788,
  playbackRate: 0.8,
};

export const SHOWCASE_DISCLOSURE =
  'Synthetic students and families, real Sprig responses: these examples show the real experience without exposing any child\'s data.';
