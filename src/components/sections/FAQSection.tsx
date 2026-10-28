import React, { useEffect, useRef, useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const faqSections = [
  {
    section: 'Getting Started',
    questions: [
      { question: "How do we begin using Mentra?", answer: "Schools start with a dedicated onboarding process — teacher training, curriculum integration, and a deployment plan that fits your calendar. It runs on any modern device with internet access, even on slower connections. Families join through an invite from their school once it's up and running." },
      { question: "How long does implementation take, and how are teachers trained?", answer: "Pilot onboarding is designed to take 2–3 weeks, with live sessions, video tutorials and ongoing support for teachers. We're working closely with early partner schools right now — talk to us about a plan that fits your calendar." },
    ],
  },
  {
    section: 'AI & Learning',
    questions: [
      { question: "How does Mentra's AI differ from other AI tools?", answer: "Mentra is designed to make itself less necessary. It uses Socratic methods — asking questions, not giving answers — and scaffolding that fades as students grow. The success metric is independence, not engagement." },
      { question: "Does the AI decide what happens to my child?", answer: "No. Fixed rules decide the reads teachers and parents see, like whether a child is becoming more independent and who needs a teacher, so the result is auditable and the same every time. Sprig's grade of each tutoring reply is one input to those rules, but it doesn't make the call. Teachers see every recommendation and approve, change or dismiss it, and their judgment is always final. Mentra works for the teacher, not around them." },
      { question: "What does Mentra do when it isn't sure?", answer: "It says so. When the evidence is thin, it tells you \"not enough evidence yet\" or \"this will fill in as they work\" instead of inventing a score. We've tested this against a brand-new student account with zero history: no defaults and no invented \"progressing\", just an honest \"not enough evidence yet.\"" },
      { question: "What if my child gets stuck or frustrated?", answer: "The AI detects struggle and responds with guided support — not answers. It breaks problems into steps and encourages persistence. And it has hard limits: 20 messages, 10 minutes, then a required reflection." },
      { question: "How do I know my child is actually learning?", answer: "Look for the help fading. Mentra tracks how much support your child needs over time and whether their independent attempts hold up as it steps back. Your child's teacher can share specific moments in your child's own words, and the Learner Passport records the milestones they reach." },
    ],
  },
  {
    section: 'Safety & Privacy',
    questions: [
      { question: "How do you protect student data?", answer: "By architecture, not policy. Fail-closed consent gating, append-only audit trails, Row-Level Security at the database layer, and automated policy gates that block any change violating those rules before it ships. Every access is logged. Data is never sold or used for ads." },
      { question: "What content filters are in place?", answer: "A multi-layer safety pipeline runs on every interaction: input validation, age-appropriate content filtering, output scanning for PII, and a feedback safety filter that prevents the AI from ever leaking answers." },
      { question: "Can parents monitor their child's AI conversations?", answer: "Parents see coaching frequency and progress — not raw conversation logs, which are the child's private learning space. You know how involved the AI is. Teachers have full visibility with override capability." },
      { question: "What happens if the AI provides incorrect information?", answer: "Districts have a one-click kill switch that disables all AI in under a second. It fails closed — AI stays off until explicitly re-enabled. Teachers can override any individual adaptation immediately." },
    ],
  },
  {
    section: 'Integrations & Architecture',
    questions: [
      { question: "How does Mentra fit with our existing SIS, SSO, and LMS?", answer: "Mentra sits as a layer on top of the systems your district already uses. It rosters from your SIS via OneRoster, single sign-on runs through Clever, ClassLink, Google or Microsoft, and it embeds inside Canvas, Schoology, Google Classroom or Blackboard via LTI 1.3 Advantage, with Deep Linking, NRPS roster sync and AGS grade passback. See the full architecture on our Platform page." },
      { question: "Can third-party tools read Mentra's cognition data?", answer: "Yes, under district control. Mentra exposes a versioned partner API with OAuth 2.0 + PKCE, scoped access (e.g. cognition.read), and per-district governance. Parent platforms, assessment vendors, and research partners can consume cognition metadata only with the permissions your district grants — every access is logged." },
    ],
  },
  {
    section: 'Cost & Value',
    questions: [
      { question: "How does Mentra pricing work?", answer: "Mentra uses a hybrid model: per-student licensing (volume-tiered, starting at $9–18/student/month depending on scale and commitment) plus an institutional platform fee that covers analytics, integrations, and administrative intelligence. Families access Mentra free through their school's plan." },
      { question: "What's the return on investment for schools?", answer: "That's what a pilot is for. Before it starts, we agree the measures with you: changes in how independently students reason, teacher-rated usefulness and time saved, family participation, pre and post measures on tasks you choose, and cost per active student. See the pilot plan on our Schools page." },
      { question: "What contract terms are available, and is there need-based pricing?", answer: "We offer month-to-month, 1-year and 3-year agreements, with discounts for longer commitments, designed around school budgeting cycles: pilot pricing in year one, full rollout in year two, expansion in year three. Qualifying institutions can also access adjusted pricing — contact our team to discuss." },
    ],
  },
];

const FAQSection = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIdx(i);
        },
        { threshold: 0, rootMargin: '-20% 0px -60% 0px' },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center">
          Frequently asked questions
        </h2>

        <div className="lg:grid lg:grid-cols-[12rem_1fr] lg:gap-12 max-w-5xl mx-auto">
          {/* Sticky section nav — desktop only; mobile relies on accordion */}
          <nav className="hidden lg:block sticky top-24 self-start" aria-label="FAQ sections">
            <ul className="space-y-1 border-l border-gray-200">
              {faqSections.map((section, i) => {
                const slug = slugify(section.section);
                const isActive = activeIdx === i;
                return (
                  <li key={section.section}>
                    <a
                      href={`#faq-${slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        sectionRefs.current[i]?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        });
                      }}
                      className={`block -ml-px pl-4 py-1.5 text-sm font-medium border-l-2 transition-colors duration-200 ${
                        isActive
                          ? 'text-mentra-blue border-mentra-blue'
                          : 'text-gray-500 hover:text-gray-900 border-transparent'
                      }`}
                    >
                      {section.section}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Accordion content */}
          <div className="space-y-10 max-w-3xl mx-auto w-full lg:mx-0 lg:max-w-none">
            {faqSections.map((section, i) => {
              const slug = slugify(section.section);
              return (
                <AnimateOnScroll key={section.section}>
                  <div
                    id={`faq-${slug}`}
                    ref={(el) => {
                      sectionRefs.current[i] = el;
                    }}
                    className="scroll-mt-24"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      {section.section}
                    </h3>
                    <Accordion type="single" collapsible className="w-full space-y-1.5">
                      {section.questions.map((faq, idx) => (
                        <AccordionItem key={idx} value={`faq-${section.section}-${idx}`} className="bg-white rounded-xl border border-gray-100">
                          <AccordionTrigger className="text-sm font-medium px-5 py-4 text-left text-gray-900 hover:bg-gray-100 rounded-t-xl focus:outline-none focus:ring-2 focus:ring-mentra-blue flex justify-between items-center">
                            <span>{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-5 pb-4 text-gray-500 text-sm">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
