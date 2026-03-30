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
        At Mentra, we <span className="text-mentra-blue">protect</span> your privacy. This policy explains how we handle your information when you visit and browse the Mentra marketing website (mymentra.ai), and how we keep your data safe.
      </p>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: (
      <>
        <p className="text-gray-700 mb-4">When you visit our website, we may collect the following information:</p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li><strong>Device information:</strong> Browser type, operating system, screen resolution</li>
          <li><strong>Usage data:</strong> Pages visited, time on site, referring URLs</li>
          <li><strong>Network data:</strong> IP address and approximate location</li>
          <li><strong>Cookie data:</strong> As described in our Cookie Policy</li>
          <li><strong>Contact information:</strong> Name and email, if you submit a form on our site</li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    content: (
      <>
        <p className="text-gray-700 mb-4">We use the information we collect to:</p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>Improve website performance and user experience</li>
          <li>Analyze site traffic and usage patterns</li>
          <li>Ensure website security and prevent abuse</li>
          <li>Send marketing communications (with your consent)</li>
          <li>Respond to inquiries submitted through the website</li>
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
          <li><strong>Service providers:</strong> Hosting, analytics, and security partners who help us operate the website</li>
          <li><strong>Legal requirements:</strong> When required by law or to protect safety</li>
          <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
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
          <li>Request access to personal information we hold about you</li>
          <li>Correct inaccurate information</li>
          <li>Opt out of marketing communications</li>
          <li>Withdraw consent for data processing</li>
          <li>Request information about how your data is used</li>
        </ul>
      </>
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
        <section className="container mx-auto max-w-7xl px-4 flex flex-col items-center justify-center gap-4 mb-16 relative">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600 mb-0 text-center">Last updated: {new Date().toLocaleDateString()}</p>
        </section>
        <section className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-6 rounded-xl border border-mentra-blue/20 bg-mentra-blue/5 px-4 py-3 text-sm text-gray-600">
            This privacy policy applies to our marketing website (mymentra.ai). For the privacy policy governing the Mentra learning platform, please visit{' '}
            <a href="https://app.mymentra.ai/privacy" className="text-mentra-blue hover:underline font-medium">app.mymentra.ai/privacy</a>.
          </div>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 max-w-5xl mx-auto">
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
