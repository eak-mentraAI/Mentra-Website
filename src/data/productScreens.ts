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
  studentNoAnswers: screen(
    'student-no-answers', 1400, 703, 'Student · Q&A with Sprig',
    'Jordan asks Sprig for a worksheet answer about why plants need sunlight. Sprig replies "No worksheet answers from me — but I can get you there fast" and asks what Jordan already knows.',
  ),
  studentExperiment: screen(
    'student-experiment', 1400, 490, 'Student · Q&A with Sprig',
    'Jordan proposes testing two identical plants, one in a closet and one by a window. Sprig calls it a well-designed experiment and asks which single thing Jordan would measure each day, and why.',
  ),
  studentVerdict: screen(
    'student-verdict', 1400, 991, "Student · Sprig's verdict on an investigation",
    "Sprig's verdict on Jordan's investigation, in four parts: Your Frame, Your Chain, Your Board and Your Next Edge. Each part refers to specific things Jordan wrote.",
  ),
  studentZoe: screen(
    'student-zoe', 1400, 716, 'Student · Q&A with Sprig',
    'Zoe tells Sprig she does not know what to do. Sprig asks what 20 divided by 5 is. Zoe works out that x is 12, and Sprig names the idea she just used.',
  ),
  parentTeacherMessage: screen(
    'parent-teacher-message', 1400, 590, 'Parent · Messages with the teacher',
    "Teacher message to Jordan's parent: Jordan started out asking Sprig for worksheet answers, but by Thursday was proposing a two-plant experiment. The parent replies that Jordan wants to try it on the windowsill this weekend.",
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
  teacherParentMessage: screen(
    'teacher-parent-message', 1400, 524, 'Teacher · Messages with families',
    "Ms. Alvarez's message to Jordan's parent about the plant experiment, with a suggestion to ask at home what Jordan would measure, and the parent's reply.",
  ),
} satisfies Record<string, Screen>;

export const SHOWCASE_DISCLOSURE =
  'Real Mentra screens from a fictional showcase class. Student messages were scripted; every Sprig reply was generated live by the product. No real child appears.';
