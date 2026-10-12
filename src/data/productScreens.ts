// Cropped screens from the live Mentra app, shot on a fictional showcase class.
// Source frames: marketing/carousel/<date>/ in the app repo (see the showcase doc for
// which frames are cleared for marketing). Crops live in /public/images/product.

export interface Screen {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Shown in the frame's title bar */
  label: string;
}

const screen = (file: string, width: number, height: number, label: string, alt: string): Screen => ({
  src: `/images/product/${file}.webp`,
  alt,
  width,
  height,
  label,
});

export const screens = {
  studentNoah: screen(
    'student-noah', 1400, 703, 'Student · Q&A with Sprig',
    'Noah says he got x = 6 but cannot explain it. Sprig asks how he got 6 before helping. Noah says he cross multiplied, and Sprig gives him a sentence frame with blanks to fill in himself.',
  ),
  studentLeo: screen(
    'student-leo', 1400, 684, 'Student · Q&A with Sprig',
    'Leo asks whether wolves leaving a forest would be good for the deer. Sprig asks what would happen to the deer over the next few years. Leo says they would eat all the plants, and Sprig asks what happens to the deer when the food runs out.',
  ),
  studentVerdict: screen(
    'student-verdict', 1400, 991, "Student · Sprig's verdict on an investigation",
    "Sprig's verdict on Jordan's investigation, in four parts: Your Frame, Your Chain, Your Board and Your Next Edge. Each part refers to specific things Jordan wrote.",
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
  teacherIndependence: screen(
    'teacher-independence', 1400, 717, 'Teacher · Independence Report',
    'The Cognitive Independence Report: without enough recent work, it says it is waiting for real work instead of guessing, and shows a preview of sample reads, each clearly labelled SAMPLE.',
  ),
  teacherAnalytics: screen(
    'teacher-analytics', 1400, 782, 'Teacher · Investigation analytics',
    "Analytics for one investigation: 4 of 6 students growing, the class's biggest room to grow and a suggested next move, a class radar across five reasoning skills from 6 students and 23 sessions, and the levels where the class most often got stuck.",
  ),
  teacherRecommendation: screen(
    'teacher-recommendation', 1400, 626, 'Teacher · Recommendations',
    "A recommendation for Jordan marked lower confidence, explaining why it matters, what it's based on, what success looks like and when it may be wrong, with Approve, Modify, Dismiss and Track outcome buttons. The page notes that nothing happens until the teacher approves.",
  ),
  parentOneQuestion: screen(
    'parent-one-question', 1400, 354, 'Parent · One question this week',
    "A two-minute suggestion for Jordan's parent: at dinner, ask what Jordan figured out this week, then just listen. It notes it's a general tip because no standout moments came up this week, and offers four feedback buttons.",
  ),
} satisfies Record<string, Screen>;

export const SHOWCASE_DISCLOSURE =
  'Real Mentra screens from a fictional showcase class. Student messages were written in advance; every Sprig reply was generated live by the product. No real child appears.';
