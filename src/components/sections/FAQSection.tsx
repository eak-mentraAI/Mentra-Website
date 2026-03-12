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
      { question: "How do we {begin} using Mentra?", answer: "Getting started is simple! For families, you can sign up directly on our website. For schools, we provide a dedicated onboarding process including teacher training, student setup, and curriculum integration support. Our team guides you through every step." },
      { question: "What {training} do teachers receive?", answer: "Teachers receive comprehensive onboarding including live training sessions, video tutorials, and ongoing support. We cover everything from basic platform use to advanced features like customizing AI responses and monitoring student progress." },
      { question: "How long does {implementation} take?", answer: "Most schools are up and running within 2-3 weeks. We handle the technical setup, teacher training, and student onboarding. Families can start using Mentra immediately after signing up." },
      { question: "What {devices} and internet do we need?", answer: "Mentra works on any modern device with internet access. We recommend a stable connection for the best experience, but the platform is designed to work even with slower connections." },
    ],
  },
  {
    section: 'AI & Learning',
    highlight: 'Learning',
    questions: [
      { question: "How does Mentra's AI {differ} from other AI tools?", answer: "Mentra uses evidence-based, Socratic methods—our AI asks questions rather than giving direct answers. This promotes critical thinking, deeper understanding, and helps students become orchestrators of AI rather than just consumers." },
      { question: "Will this {replace} my child's teacher?", answer: "Absolutely not. Mentra enhances human teaching by providing personalized support and practice. Teachers remain in control, set learning goals, review progress, and intervene when needed. Our AI is a tool that amplifies human expertise." },
      { question: "What if my child gets {stuck} or frustrated?", answer: "Our AI is designed to recognize when students are struggling and adapt its approach. It provides scaffolding, breaks problems into smaller steps, and encourages persistence. Teachers and parents can also step in at any time." },
      { question: "How do I know my child is actually {learning}?", answer: "Mentra provides detailed progress tracking, learning insights, and the Learner Passport—a comprehensive record of skills and achievements. You can see exactly what your child is working on and how they're growing." },
    ],
  },
  {
    section: 'Safety & Privacy',
    highlight: 'Privacy',
    questions: [
      { question: "How do you {protect} student data?", answer: "We use industry-leading encryption, strict access controls, and comply with FERPA, COPPA, and other privacy regulations. Student data is never sold or used for advertising. Parents and educators maintain full control over data sharing." },
      { question: "What {content} filters are in place?", answer: "Mentra uses advanced content filtering and moderation to ensure all interactions are age-appropriate and educational. Our AI is trained on educational content and designed to maintain a safe learning environment." },
      { question: "Can parents {monitor} their child's AI conversations?", answer: "Yes, parents can access transcripts of their child's AI interactions, review progress reports, and receive regular updates about their child's learning journey. Full transparency is a core principle." },
      { question: "What happens if the AI provides {incorrect} information?", answer: "While our AI is trained on accurate educational content, we encourage students and educators to report any issues. Our team continuously monitors and improves the system based on feedback." },
    ],
  },
  {
    section: 'Cost & Value',
    highlight: 'Value',
    questions: [
      { question: "How much does Mentra {cost}?", answer: "We offer flexible pricing for families and schools. Family plans start at $15/month, and school pricing is based on student count with volume discounts. Contact us for a custom quote tailored to your needs." },
      { question: "What's the {return} on investment for schools?", answer: "Schools see improved student engagement, reduced teacher workload on routine tasks, better differentiated instruction, and measurable learning gains. We provide detailed analytics to track impact and ROI." },
      { question: "Are there {hidden} fees or long-term contracts?", answer: "No hidden fees. Families can cancel anytime, and schools can choose flexible terms. We believe in transparent pricing and want you to see value before committing long-term." },
      { question: "Do you offer {financial} assistance?", answer: "Yes, we offer need-based discounts and work with schools to ensure access for all students. Contact us to discuss options for your situation." },
    ],
  },
  {
    section: 'Integration & Use',
    highlight: 'Use',
    questions: [
      { question: "How does Mentra {integrate} with existing curriculum?", answer: "Mentra adapts to your existing curriculum and learning objectives. Teachers can customize AI responses, set specific learning goals, and align activities with current lesson plans. It enhances rather than replaces your current approach." },
      { question: "Can students use Mentra for {homework} help?", answer: "Absolutely! Mentra is perfect for homework support, providing explanations, practice problems, and encouraging independent problem-solving. It's available 24/7 for when students need help outside of school hours." },
      { question: "How much time should students {spend} on Mentra?", answer: "We recommend 15-30 minutes per session, 3-5 times per week. The platform is designed for focused, effective learning rather than long sessions. Teachers and parents can set appropriate time limits." },
      { question: "What {subjects} does Mentra cover?", answer: "Mentra currently focuses on core academic skills like critical thinking, problem-solving, and literacy. We're expanding to include more subjects based on educator and student feedback." },
    ],
  },
  {
    section: 'Support & Success',
    highlight: 'Success',
    questions: [
      { question: "How do I get {technical} support?", answer: "We offer multiple support channels: email support, phone support, live chat, and a comprehensive help center. Our team typically responds within 2-4 hours during business hours." },
      { question: "What if we're not seeing the expected {results}?", answer: "We work closely with you to ensure success. If you're not seeing the expected outcomes, our team will analyze usage patterns, provide additional training, and adjust the approach to better meet your needs." },
      { question: "Can we {customize} Mentra for our specific needs?", answer: "Yes, we offer customization options for schools including branded interfaces, custom learning paths, and integration with existing systems. Contact us to discuss your specific requirements." },
      { question: "What {success} stories can you share?", answer: "We have numerous success stories from schools and families. Students show improved critical thinking, increased engagement, and better problem-solving skills. Contact us to hear specific examples relevant to your situation." },
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
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Common questions from educators, parents, and students about AI-powered learning.
        </p>

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
            <p className="text-gray-700 mb-4 text-center">We're here to help address any concerns about AI-powered learning.</p>
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
