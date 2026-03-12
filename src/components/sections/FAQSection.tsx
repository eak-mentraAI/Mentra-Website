import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';

const HighlightText = ({ text }: { text: string }) => {
  const parts = text.split(/(\{[^}]+\})/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('{') && part.endsWith('}')) {
          return <span key={i} className="text-mentra-blue">{part.slice(1, -1)}</span>;
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
};

const faqSections = [
  {
    section: 'Getting Started',
    highlight: 'Started',
    questions: [
      { question: "How do we {begin} using Mentra?", answer: "Families sign up directly. Schools get a dedicated onboarding process with teacher training and curriculum integration support." },
      { question: "What {training} do teachers receive?", answer: "Live sessions, video tutorials, and ongoing support — from basics to advanced features like customizing AI responses." },
      { question: "How long does {implementation} take?", answer: "Most schools are up and running within 2–3 weeks. Families can start immediately." },
      { question: "What {devices} and internet do we need?", answer: "Any modern device with internet access. Designed to work even on slower connections." },
    ],
  },
  {
    section: 'AI & Learning',
    highlight: 'Learning',
    questions: [
      { question: "How does Mentra's AI {differ} from other AI tools?", answer: "Mentra uses Socratic methods — asking questions rather than giving answers. Students become orchestrators of AI, not just consumers." },
      { question: "Will this {replace} my child's teacher?", answer: "No. Teachers remain in control. Mentra amplifies their expertise with personalized student support." },
      { question: "What if my child gets {stuck} or frustrated?", answer: "The AI adapts its approach — providing scaffolding, breaking problems into steps, and encouraging persistence." },
      { question: "How do I know my child is actually {learning}?", answer: "Detailed progress tracking and a Learner Passport show skills, achievements, and growth over time." },
    ],
  },
  {
    section: 'Safety & Privacy',
    highlight: 'Privacy',
    questions: [
      { question: "How do you {protect} student data?", answer: "Industry-leading encryption, FERPA/COPPA compliance, and strict access controls. Data is never sold or used for ads." },
      { question: "What {content} filters are in place?", answer: "Advanced filtering ensures all interactions are age-appropriate and educational." },
      { question: "Can parents {monitor} their child's AI conversations?", answer: "Yes — full access to transcripts, progress reports, and learning updates." },
      { question: "What happens if the AI provides {incorrect} information?", answer: "We encourage reporting issues. The system is continuously monitored and improved." },
    ],
  },
  {
    section: 'Cost & Value',
    highlight: 'Value',
    questions: [
      { question: "How much does Mentra {cost}?", answer: "Family plans start at $15/month. School pricing is based on student count with volume discounts." },
      { question: "What's the {return} on investment for schools?", answer: "Improved engagement, reduced teacher workload, better differentiation, and measurable learning gains." },
      { question: "Are there {hidden} fees or long-term contracts?", answer: "No hidden fees. Families cancel anytime. Schools get flexible terms." },
      { question: "Do you offer {financial} assistance?", answer: "Yes — need-based discounts for families and schools. Contact us to discuss." },
    ],
  },
  {
    section: 'Integration & Use',
    highlight: 'Use',
    questions: [
      { question: "How does Mentra {integrate} with existing curriculum?", answer: "Teachers customize AI responses and align activities with current lesson plans. It enhances, not replaces." },
      { question: "Can students use Mentra for {homework} help?", answer: "Yes — 24/7 support with explanations, practice problems, and independent problem-solving guidance." },
      { question: "How much time should students {spend} on Mentra?", answer: "15–30 minutes per session, 3–5 times per week. Teachers and parents can set limits." },
      { question: "What {subjects} does Mentra cover?", answer: "Core skills: critical thinking, problem-solving, and literacy. Expanding based on educator feedback." },
    ],
  },
  {
    section: 'Support & Success',
    highlight: 'Success',
    questions: [
      { question: "How do I get {technical} support?", answer: "Email, phone, live chat, and help center. Typical response within 2–4 hours." },
      { question: "What if we're not seeing the expected {results}?", answer: "Our team analyzes usage patterns and adjusts the approach to meet your needs." },
      { question: "Can we {customize} Mentra for our specific needs?", answer: "Yes — branded interfaces, custom learning paths, and system integrations available." },
      { question: "What {success} stories can you share?", answer: "Improved critical thinking, engagement, and problem-solving across schools and families. Contact us for details." },
    ],
  },
];

const SectionHeader = ({ section, highlight }: { section: string; highlight: string }) => {
  const parts = section.split(highlight);
  return (
    <>
      {parts[0]}<span className="text-mentra-blue">{highlight}</span>{parts[1] ?? ''}
    </>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
          Frequently Asked <span className="text-mentra-blue">Questions</span>
        </h2>

        <div className="space-y-12 mb-12 max-w-4xl mx-auto">
          {faqSections.map((section, sIdx) => (
            <AnimateOnScroll key={section.section}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-mentra-blue mb-6 tracking-tight">
                  <SectionHeader section={section.section} highlight={section.highlight} />
                </h3>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {section.questions.map((faq, idx) => (
                    <AccordionItem key={idx} value={`faq-${sIdx}-${idx}`} className="bg-white/90 rounded-xl shadow border border-gray-200">
                      <AccordionTrigger className="text-lg font-medium px-6 py-4 text-left text-gray-900 hover:bg-blue-50 rounded-t-xl focus:outline-none focus:ring-2 focus:ring-mentra-blue flex justify-between items-center">
                        <span><HighlightText text={faq.question} /></span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-gray-700 text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll variant="scale-in">
          <div className="w-full max-w-4xl mx-auto bg-white/80 rounded-xl shadow p-6 flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">Still Have Questions?</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:support@mentra.ai" className="bg-mentra-blue text-white px-6 py-2 rounded-lg font-medium shadow hover:bg-mentra-blue/90 transition text-center">
                Email Support
              </a>
              <a href="tel:+1234567890" className="bg-gray-800 text-white px-6 py-2 rounded-lg font-medium shadow hover:bg-gray-700 transition text-center">
                Call Us
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FAQSection;
