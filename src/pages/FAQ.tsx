import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const faqSections = [
  {
    section: 'Security',
    color: 'bg-blue-50',
    questions: [
      {
        question: "How is student data protected from cyber threats?",
        answer: "We employ industry-leading encryption, regular security audits, and strict access controls to protect all student data. Mentra is fully compliant with FERPA, COPPA, and other relevant privacy regulations."
      },
      {
        question: "Can parents access their child's AI tutoring conversations?",
        answer: "Yes, parents can request access to transcripts of their child's AI tutoring sessions to stay informed and involved in their learning journey."
      },
      {
        question: "Does Mentra sell or share student data?",
        answer: "No. Mentra does not sell or share student data with third parties. Data is only used to improve the learning experience and is never used for advertising."
      },
    ]
  },
  {
    section: 'Safety',
    color: 'bg-red-50',
    questions: [
      {
        question: "Is Mentra safe for young children?",
        answer: "Yes, Mentra is designed with child safety in mind, including content filters, privacy protections, and parental controls."
      },
      {
        question: "What happens if my child receives incorrect information from the AI?",
        answer: "Mentra's AI is trained to provide accurate, age-appropriate responses, but we encourage students and parents to report any issues. Our team regularly reviews interactions and updates the system to improve accuracy and safety."
      },
      {
        question: "How does Mentra prevent inappropriate content?",
        answer: "Mentra uses advanced content filtering and moderation tools to prevent inappropriate or harmful content from being shown to students."
      },
    ]
  },
  {
    section: 'Learner Passport',
    color: 'bg-green-50',
    questions: [
      {
        question: "What is a Learner Passport?",
        answer: "A Learner Passport is a secure, portable record of a student's learning progress, achievements, and skills developed with Mentra. It is controlled by the student and their guardians."
      },
      {
        question: "Can I transfer my child's Learner Passport to another school?",
        answer: "Yes, the Learner Passport is designed to be portable and can be shared with new schools or educators at your discretion."
      },
      {
        question: "Who can access the Learner Passport?",
        answer: "Only the student, their guardians, and authorized educators can access the Learner Passport."
      },
    ]
  },
  {
    section: 'Pedagogy',
    color: 'bg-yellow-50',
    questions: [
      {
        question: "How does Mentra ensure AI tutoring doesn't replace human teachers?",
        answer: "Mentra is designed to support and enhance the work of human teachers, not replace them. Our AI provides personalized guidance and practice, but all learning is overseen by educators who set goals, review progress, and intervene as needed."
      },
      {
        question: "How does Mentra handle students with different learning needs?",
        answer: "Mentra adapts to each student's pace and style, offering differentiated support and scaffolding. Educators can further personalize the experience based on individual needs."
      },
      {
        question: "What training do teachers receive for using Mentra?",
        answer: "Teachers receive comprehensive onboarding, ongoing professional development, and access to a resource library to ensure they can use Mentra effectively in their classrooms."
      },
      {
        question: "Can Mentra be used for homework help?",
        answer: "Absolutely! Mentra can assist students with homework, provide explanations, and encourage independent problem-solving."
      },
    ]
  },
  {
    section: 'General',
    color: 'bg-yellow-100',
    questions: [
      {
        question: "Does Mentra work on tablets and smartphones?",
        answer: "Yes, Mentra is fully responsive and works on all modern devices, including tablets and smartphones."
      },
      {
        question: "How do I get technical support?",
        answer: "You can reach our support team via the 'Email Support' or 'Call Us' buttons below, or visit our Help Center for self-service resources."
      },
      {
        question: "How much does Mentra cost?",
        answer: "Mentra offers flexible pricing for families and schools. Please contact us for a custom quote based on your needs."
      },
    ]
  },
];

const FAQ = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col items-center py-12 px-4">
        <section className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-500 mb-8 text-center">Common concerns from educators, parents, and students with detailed answers.</p>
          <div className="space-y-8 mb-12">
            {faqSections.map((section, sIdx) => (
              <div key={section.section}>
                <div className={`mb-4 px-6 py-3 rounded-xl font-bold text-black text-xl ${section.color}`}>{section.section}</div>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {section.questions.map((faq, idx) => (
                    <AccordionItem key={idx} value={`faq-${sIdx}-${idx}`} className="bg-white/90 rounded-xl shadow border border-gray-200">
                      <AccordionTrigger className="text-lg font-medium px-6 py-4 text-left text-gray-900 hover:bg-blue-50 rounded-t-xl focus:outline-none focus:ring-2 focus:ring-mentra-blue flex justify-between items-center">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-gray-700 text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
          <div className="w-full bg-white/80 rounded-xl shadow p-6 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2 text-gray-900 text-center">Still Have Questions?</h2>
            <p className="text-gray-700 mb-4 text-center">We're here to help address any concerns about AI tutoring in education.</p>
            <div className="flex gap-4">
              <a href="mailto:support@mymentra.ai" className="bg-mentra-blue text-white px-6 py-2 rounded-lg font-medium shadow hover:bg-mentra-blue/90 transition">Email Support</a>
              <a href="tel:1234567890" className="bg-gray-800 text-white px-6 py-2 rounded-lg font-medium shadow hover:bg-gray-700 transition">Call Us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FAQ; 