import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import LegalSection, { type LegalSectionItem } from '../components/shared/LegalSection';
import LegalTableOfContents from '../components/shared/LegalTableOfContents';
import '../App.css';

const sections: LegalSectionItem[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <p className="text-gray-700">
        At Mentra, we <span className="text-mentra-blue">protect</span> your privacy because we believe learning should be safe and secure. This policy explains how we handle your information to provide personalized learning experiences while keeping your data safe.
      </p>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: (
      <>
        <p className="text-gray-700 mb-4">We collect information to provide better learning experiences:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><strong>Account information:</strong> Name, email, educational institution</li>
          <li><strong>Learning data:</strong> Journal entries, progress, performance</li>
          <li><strong>Usage patterns:</strong> How you interact with our platform</li>
          <li><strong>Device information:</strong> Browser type, IP address for security</li>
        </ul>
        <p className="text-gray-700">
          Our AI processes your learning content to provide personalized insights and recommendations.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    content: (
      <>
        <p className="text-gray-700 mb-4">Your information helps us:</p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>Create personalized learning experiences</li>
          <li>Generate AI-powered insights and recommendations</li>
          <li>Improve our platform and develop new features</li>
          <li>Keep your account secure and prevent fraud</li>
          <li>Communicate important updates about your learning</li>
        </ul>
      </>
    ),
  },
  {
    id: 'information-sharing',
    title: 'Information Sharing',
    content: (
      <>
        <p className="text-gray-700 mb-4">
          We don't sell your personal information. We may share data in these situations:
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li><strong>With your consent:</strong> Sharing progress with educators or parents</li>
          <li><strong>Service providers:</strong> Trusted partners who help us operate securely</li>
          <li><strong>Legal requirements:</strong> When required by law or to protect safety</li>
        </ul>
      </>
    ),
  },
  {
    id: 'data-security',
    title: 'Keeping Your Data Secure',
    content: (
      <>
        <p className="text-gray-700 mb-4">
          We protect your information with industry-standard security measures:
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>Encryption of all data in transit and at rest</li>
          <li>Regular security assessments and updates</li>
          <li>Strict access controls and authentication</li>
          <li>Employee training on data protection</li>
        </ul>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    content: (
      <>
        <p className="text-gray-700 mb-4">You control your data. You can:</p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>Access and download your personal information</li>
          <li>Correct or update inaccurate data</li>
          <li>Request deletion of your account and data</li>
          <li>Transfer your data to another service</li>
          <li>Opt out of marketing communications</li>
          <li>Withdraw consent for data processing</li>
        </ul>
      </>
    ),
  },
  {
    id: 'protecting-children',
    title: 'Protecting Children',
    content: (
      <p className="text-gray-700">
        We're committed to protecting young learners. For students under 13, we comply with COPPA and require parental consent before collecting personal information. Parents can review, delete, or refuse further collection of their child's data.
      </p>
    ),
  },
  {
    id: 'global-standards',
    title: 'Global Standards',
    content: (
      <p className="text-gray-700">
        Your information may be processed in different countries. We ensure appropriate safeguards are in place to protect your data according to this policy and applicable laws.
      </p>
    ),
  },
  {
    id: 'policy-updates',
    title: 'Policy Updates',
    content: (
      <p className="text-gray-700">
        We may update this policy occasionally. We'll notify you of significant changes by posting updates here and updating the "Last updated" date. Continued use means you accept the updated policy.
      </p>
    ),
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    content: (
      <>
        <p className="text-gray-700 mb-4">
          We're here to help with any privacy questions:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@mentra.ai</p>
          <p className="text-gray-700 mb-2"><strong>Address:</strong> San Francisco, CA</p>
          <p className="text-gray-700">
            <strong>Data Protection Officer:</strong> Edward Kerr, Founder
          </p>
        </div>
      </>
    ),
  },
];

export default function Privacy() {
  return (
    <PageTransition>
    <div className="min-h-screen font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col">
      <Header />
      <main className="min-h-screen flex flex-col items-center py-12 px-4 font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10">
        {/* Hero Section */}
        <section className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-center gap-8 mb-16 relative">
          <div className="flex-1 min-w-0 flex flex-col items-center md:items-center justify-center text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-0 text-center">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="flex-shrink-0 flex items-center justify-center mt-6 md:mt-0">
            <img src="/images/other/spy.png" alt="Spy Icon" className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain drop-shadow-2xl" />
          </div>
        </section>
        <section className="container mx-auto px-4">
          <div className="flex gap-10 max-w-5xl mx-auto">
            <LegalTableOfContents sections={sections} />
            <div className="flex-1 min-w-0">
              <LegalSection sections={sections} storageKey="privacy" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </PageTransition>
  );
}
