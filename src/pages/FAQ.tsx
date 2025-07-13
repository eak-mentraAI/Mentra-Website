import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const faqSections = [
  {
    section: 'Getting Started',
    questions: [
      {
        question: "How do we <span className='text-mentra-blue'>begin</span> using Mentra?",
        answer: "Getting started is simple! For families, you can sign up directly on our website. For schools, we provide a dedicated onboarding process including teacher training, student setup, and curriculum integration support. Our team guides you through every step."
      },
      {
        question: "What <span className='text-mentra-blue'>training</span> do teachers receive?",
        answer: "Teachers receive comprehensive onboarding including live training sessions, video tutorials, and ongoing support. We cover everything from basic platform use to advanced features like customizing AI responses and monitoring student progress."
      },
      {
        question: "How long does <span className='text-mentra-blue'>implementation</span> take?",
        answer: "Most schools are up and running within 2-3 weeks. We handle the technical setup, teacher training, and student onboarding. Families can start using Mentra immediately after signing up."
      },
      {
        question: "What <span className='text-mentra-blue'>devices</span> and internet do we need?",
        answer: "Mentra works on any modern device with internet access. We recommend a stable connection for the best experience, but the platform is designed to work even with slower connections."
      }
    ]
  },
  {
    section: 'AI & Learning',
    questions: [
      {
        question: "How does Mentra's AI <span className='text-mentra-blue'>differ</span> from other AI tools?",
        answer: "Mentra uses evidence-based, Socratic methods—our AI asks questions rather than giving direct answers. This promotes critical thinking, deeper understanding, and helps students become orchestrators of AI rather than just consumers."
      },
      {
        question: "Will this <span className='text-mentra-blue'>replace</span> my child's teacher?",
        answer: "Absolutely not. Mentra enhances human teaching by providing personalized support and practice. Teachers remain in control, set learning goals, review progress, and intervene when needed. Our AI is a tool that amplifies human expertise."
      },
      {
        question: "What if my child gets <span className='text-mentra-blue'>stuck</span> or frustrated?",
        answer: "Our AI is designed to recognize when students are struggling and adapt its approach. It provides scaffolding, breaks problems into smaller steps, and encourages persistence. Teachers and parents can also step in at any time."
      },
      {
        question: "How do I know my child is actually <span className='text-mentra-blue'>learning</span>?",
        answer: "Mentra provides detailed progress tracking, learning insights, and the Learner Passport—a comprehensive record of skills and achievements. You can see exactly what your child is working on and how they're growing."
      }
    ]
  },
  {
    section: 'Safety & Privacy',
    questions: [
      {
        question: "How do you <span className='text-mentra-blue'>protect</span> student data?",
        answer: "We use industry-leading encryption, strict access controls, and comply with FERPA, COPPA, and other privacy regulations. Student data is never sold or used for advertising. Parents and educators maintain full control over data sharing."
      },
      {
        question: "What <span className='text-mentra-blue'>content</span> filters are in place?",
        answer: "Mentra uses advanced content filtering and moderation to ensure all interactions are age-appropriate and educational. Our AI is trained on educational content and designed to maintain a safe learning environment."
      },
      {
        question: "Can parents <span className='text-mentra-blue'>monitor</span> their child's AI conversations?",
        answer: "Yes, parents can access transcripts of their child's AI interactions, review progress reports, and receive regular updates about their child's learning journey. Full transparency is a core principle."
      },
      {
        question: "What happens if the AI provides <span className='text-mentra-blue'>incorrect</span> information?",
        answer: "While our AI is trained on accurate educational content, we encourage students and educators to report any issues. Our team continuously monitors and improves the system based on feedback."
      }
    ]
  },
  {
    section: 'Cost & Value',
    questions: [
      {
        question: "How much does Mentra <span className='text-mentra-blue'>cost</span>?",
        answer: "We offer flexible pricing for families and schools. Family plans start at $15/month, and school pricing is based on student count with volume discounts. Contact us for a custom quote tailored to your needs."
      },
      {
        question: "What's the <span className='text-mentra-blue'>return</span> on investment for schools?",
        answer: "Schools see improved student engagement, reduced teacher workload on routine tasks, better differentiated instruction, and measurable learning gains. We provide detailed analytics to track impact and ROI."
      },
      {
        question: "Are there <span className='text-mentra-blue'>hidden</span> fees or long-term contracts?",
        answer: "No hidden fees. Families can cancel anytime, and schools can choose flexible terms. We believe in transparent pricing and want you to see value before committing long-term."
      },
      {
        question: "Do you offer <span className='text-mentra-blue'>financial</span> assistance?",
        answer: "Yes, we offer need-based discounts and work with schools to ensure access for all students. Contact us to discuss options for your situation."
      }
    ]
  },
  {
    section: 'Integration & Use',
    questions: [
      {
        question: "How does Mentra <span className='text-mentra-blue'>integrate</span> with existing curriculum?",
        answer: "Mentra adapts to your existing curriculum and learning objectives. Teachers can customize AI responses, set specific learning goals, and align activities with current lesson plans. It enhances rather than replaces your current approach."
      },
      {
        question: "Can students use Mentra for <span className='text-mentra-blue'>homework</span> help?",
        answer: "Absolutely! Mentra is perfect for homework support, providing explanations, practice problems, and encouraging independent problem-solving. It's available 24/7 for when students need help outside of school hours."
      },
      {
        question: "How much time should students <span className='text-mentra-blue'>spend</span> on Mentra?",
        answer: "We recommend 15-30 minutes per session, 3-5 times per week. The platform is designed for focused, effective learning rather than long sessions. Teachers and parents can set appropriate time limits."
      },
      {
        question: "What <span className='text-mentra-blue'>subjects</span> does Mentra cover?",
        answer: "Mentra currently focuses on core academic skills like critical thinking, problem-solving, and literacy. We're expanding to include more subjects based on educator and student feedback."
      }
    ]
  },
  {
    section: 'Support & Success',
    questions: [
      {
        question: "How do I get <span className='text-mentra-blue'>technical</span> support?",
        answer: "We offer multiple support channels: email support, phone support, live chat, and a comprehensive help center. Our team typically responds within 2-4 hours during business hours."
      },
      {
        question: "What if we're not seeing the expected <span className='text-mentra-blue'>results</span>?",
        answer: "We work closely with you to ensure success. If you're not seeing the expected outcomes, our team will analyze usage patterns, provide additional training, and adjust the approach to better meet your needs."
      },
      {
        question: "Can we <span className='text-mentra-blue'>customize</span> Mentra for our specific needs?",
        answer: "Yes, we offer customization options for schools including branded interfaces, custom learning paths, and integration with existing systems. Contact us to discuss your specific requirements."
      },
      {
        question: "What <span className='text-mentra-blue'>success</span> stories can you share?",
        answer: "We have numerous success stories from schools and families. Students show improved critical thinking, increased engagement, and better problem-solving skills. Contact us to hear specific examples relevant to your situation."
      }
    ]
  }
];

const sectionHeaderHtml = section => {
  if (section === 'Getting Started') return 'Getting <span class="text-mentra-blue">Started</span>';
  if (section === 'AI & Learning') return 'AI & <span class="text-mentra-blue">Learning</span>';
  if (section === 'Safety & Privacy') return 'Safety & <span class="text-mentra-blue">Privacy</span>';
  if (section === 'Cost & Value') return 'Cost & <span class="text-mentra-blue">Value</span>';
  if (section === 'Integration & Use') return 'Integration & <span class="text-mentra-blue">Use</span>';
  if (section === 'Support & Success') return 'Support & <span class="text-mentra-blue">Success</span>';
  return section;
};

const FAQ = () => {
  return (
    <div className="min-h-screen font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col">
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col items-center py-12 px-4 font-rounded">
        {/* Hero Section */}
        <section className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-center gap-8 mb-16 relative">
          <div className="flex-1 min-w-0 flex flex-col items-center md:items-center justify-center text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-700 mb-0 text-center max-w-3xl mx-auto">
              Common questions from educators, parents, and students about AI-powered learning. We're here to help you understand how Mentra can support your learning journey.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center justify-center mt-6 md:mt-0">
            <img src="/question.png" alt="FAQ Icon" className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain drop-shadow-2xl" />
          </div>
        </section>
        <section className="container mx-auto px-4">
          <div className="space-y-12 mb-12">
            {faqSections.map((section, sIdx) => (
              <div key={section.section} className="mb-8">
                <h2
                  className="text-2xl font-bold text-mentra-blue mb-6 tracking-tight"
                  dangerouslySetInnerHTML={{ __html: sectionHeaderHtml(section.section) }}
                />
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {section.questions.map((faq, idx) => (
                    <AccordionItem key={idx} value={`faq-${sIdx}-${idx}`} className="bg-white/90 rounded-xl shadow border border-gray-200">
                      <AccordionTrigger className="text-lg font-medium px-6 py-4 text-left text-gray-900 hover:bg-blue-50 rounded-t-xl focus:outline-none focus:ring-2 focus:ring-mentra-blue flex justify-between items-center">
                        <span dangerouslySetInnerHTML={{ __html: faq.question }} />
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ; 