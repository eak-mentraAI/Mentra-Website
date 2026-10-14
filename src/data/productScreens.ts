// Cropped screens from the live Mentra app, shot on a fictional showcase class.
// Source frames: marketing/carousel/<date>/ in the app repo (see the showcase doc for
// which frames are cleared for marketing). Crops live in /public/images/product.

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
  studentJordan: screen(
    'student-jordan', 1400, 562, 'Student · Q&A with Sprig',
    "Jordan asks Sprig to just tell them the answer to a sunlight question. Sprig says it won't hand over the answer and asks what Jordan has tried or thinks is going on. Jordan guesses plants need sunlight to grow but doesn't know why.",
    qaSignals('Jordan'),
  ),
  studentZoe: screen(
    'student-zoe', 1400, 698, 'Student · Q&A with Sprig',
    "Zoe answers 15 for x in 3/5 = x/20. Sprig says not quite, keeps Zoe's method of multiplying the top by 4, and asks what 3 times 4 is. Zoe answers 12, Sprig confirms x = 12 and gives a new problem to try: 2 is to 7 as x is to 35.",
    qaSignals('Zoe'),
  ),
  studentPriya: screen(
    'student-priya', 1400, 688, 'Student · Q&A with Sprig',
    "Sprig asks Priya whether 3/4 = x/6 has a clean whole-number scale factor. Priya says 4 to 6 isn't a clean multiplier, so they'd cross multiply and get x = 4.5. Sprig names the decision rule Priya worked out: scale factor when the multiplier is obvious, cross-multiply when it isn't.",
    qaSignals('Priya'),
  ),
  studentSignalNoise: screen(
    'student-signal-noise', 1300, 1273, 'Student · Signal & Noise',
    "Sprig's coaching after a student ranks three explanations of error-message design, choosing Option C first. Your Frame notes the student set out with an audience lens but ranked on depth and evidence. What You Caught credits the specific details used from Option C and asks who each piece is written for. The Thread says this is the student's first evaluation, so there's no pattern yet. Your Next Edge suggests a sentence to write about each option before ranking next time.",
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
  studentCoding: screen(
    'student-coding', 1400, 742, 'Student · Coding with Sprig',
    "A student's Python program records watering days in a dictionary but prints len(waterings), which counts the two plants instead of the window plant's three watering days. The student asks why it prints 2. Sprig says the water function works, points to len(waterings) and asks what waterings is and what len counts on a dictionary. The student works out that len counts the keys, and Sprig sends them to look at what's inside waterings[\"window plant\"].",
    {
      kind: 'records',
      items: [
        'Debugging persistence: attempts, time spent, and whether the bug gets resolved',
        'Whether the student reaches the fix unaided',
      ],
      goesTo: "The learner graph; independent attempts are read by the teacher's Independence Report",
    },
  ),
  studentWhyChain: screen(
    'student-why-chain', 1400, 431, 'Student · Investigations',
    "An investigation of the claim that plants in shade grow larger, darker green leaves. The student's why-chain has two levels: the plant needs bigger leaves to catch light, then it senses low light, makes more chlorophyll, and uses its energy differently. Sprig asks what has to happen first before the plant can put its energy into bigger leaves.",
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
    'student-prompting', 1400, 647, 'Student · Prompt Engineering',
    "Sprig's feedback on a student's prompt for the Haiku Teacher challenge, which asks for a prompt that includes 2 to 3 example haikus. Score 42%. It credits the everyday topics and the 5-7-5 rule, then points out the prompt asks the AI for examples without including any, and suggests writing one haiku and putting it in the prompt.",
  ),
  studentVerdict: screen(
    'student-verdict', 1400, 991, "Student · Sprig's verdict on an investigation",
    "Sprig's verdict on Jordan's investigation, in four parts: Your Frame, Your Chain, Your Board and Your Next Edge. Each part refers to specific things Jordan wrote.",
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
    'parent-trust', 1400, 479, 'Parent · Trust & Privacy',
    "A parent's Trust & Privacy page: an active consent record listing five purposes, with partner sharing and anonymized product use turned off, and a toggle for each purpose explaining what turning it off does.",
  ),
  parentConsent: screen(
    'parent-consent', 1400, 667, 'Parent · Consent & Privacy',
    "A parent's Consent & Privacy page: Jordan's active consent with History, Revoke and Request Data Deletion buttons, and a panel to export Jordan's AI conversation history.",
  ),
  teacherBrief: screen(
    'teacher-brief', 1400, 517, "Teacher · Today's Brief",
    "A teacher's Today's Brief: class signals written as plain sentences, and one recommendation that says there isn't enough evidence yet, so it will keep watching instead of guessing.",
  ),
  teacherAnalytics: screen(
    'teacher-analytics', 1400, 782, 'Teacher · Investigation analytics',
    "Analytics for one investigation: 4 of 6 students growing, the class's biggest room to grow and a suggested next move, a class radar across five reasoning skills from 6 students and 23 sessions, and the levels where the class most often got stuck.",
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
    'parent-one-question', 1400, 354, 'Parent · One question this week',
    "A two-minute suggestion for Jordan's parent: at dinner, ask what Jordan figured out this week, then just listen. It notes it's a general tip because no standout moments came up this week, and offers four feedback buttons.",
  ),
  teacherSignalLanding: screen(
    'teacher-signal-landing', 1400, 416, 'Teacher · Independence Report',
    "One student's row in the teacher's Independence Report, as of Oct 14, 2026, with supporting evidence open. It reads 'Independent work falling' with moderate confidence. Help intensity and hint reliance don't have enough recent signal yet, transfer across contexts isn't demonstrated, and the suggested next step is to watch the trend instead of guessing.",
    {
      kind: 'reads',
      items: [
        "Independent-attempt scores from each of the student's Q&A replies",
        "Help intensity and hint reliance, once there's enough data",
        'Whether a skill has carried across two different contexts',
      ],
      goesTo: "The student's learner graph, over a 14-day window",
    },
  ),
  teacherParentMessage: screen(
    'teacher-parent-message', 1400, 978, 'Teacher · Messages with families',
    "Ms. Alvarez's message to Jordan's parent about Jordan's sunlight conversation with Sprig, quoting Jordan's own words from it and suggesting a question to ask at home, with the parent's reply.",
  ),
  parentTeacherMessage: screen(
    'parent-teacher-message', 1400, 1033, 'Parent · Messages with the teacher',
    "The parent's view of the same thread: the teacher's message about Jordan's sunlight conversation with Sprig, and the parent's reply saying they'll ask about the plant in the dark at dinner.",
  ),
  parentPassport: screen(
    'parent-passport', 1400, 283, 'Parent · Learner Passport',
    "Milestones on a child's Learner Passport, as the parent sees it: Reflection Beginner and Dream Planter reached, with Story Weaver at 4 of 10 journal entries and Goal Builder at 2 of 5 goals next.",
  ),
} satisfies Record<string, Screen>;

export const SHOWCASE_DISCLOSURE =
  'Synthetic students and families, real Sprig responses: these examples show the real experience without exposing any child\'s data.';
