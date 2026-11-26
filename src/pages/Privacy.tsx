import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import LegalSection, { type LegalSectionItem } from '../components/shared/LegalSection';
import LegalTableOfContents from '../components/shared/LegalTableOfContents';
import '../App.css';
import { usePageTitle } from '@/lib/usePageTitle';

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
        <p className="text-gray-700 mb-4">This website collects very little:</p>
        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
          <li><strong>What you send us:</strong> If you use the "Schedule a call" form, we receive your name, email address, phone number if you give one, how you prefer to be contacted, and which page you sent the form from.</li>
          <li><strong>What your browser sends to the services that deliver the site:</strong> Our hosting provider and the font and video services listed below receive your IP address and basic browser information when your browser loads them. We don't receive or keep those records ourselves.</li>
          <li><strong>What stays on your device:</strong> A few small settings, such as your cookie choices, are kept in your browser's storage, as described in our Cookie Policy.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          We don't run analytics or advertising tools on this website, and we don't build profiles of visitors.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    content: (
      <>
        <p className="text-gray-700 mb-4">We use the information you send us to:</p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>Respond to your enquiry and arrange the call you asked for</li>
          <li>Follow up about Mentra, if you asked us to</li>
          <li>Keep the website and form secure and prevent abuse</li>
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
          We don't sell your personal information. These service providers help us run the website:
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
          <li><strong>GitHub Pages (GitHub, Inc.):</strong> hosts the website</li>
          <li><strong>Formspree:</strong> receives and delivers "Schedule a call" form submissions</li>
          <li><strong>Google Fonts (Google LLC):</strong> supplies the website's fonts</li>
          <li><strong>YouTube (Google LLC):</strong> plays the video on our About page, in privacy-enhanced mode</li>
        </ul>
        <p className="text-gray-700 mt-4 mb-4">We may also share information:</p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
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
          We protect the information you send us:
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>The form sends your details to Formspree over an encrypted HTTPS connection</li>
          <li>Form submissions are available only to the Mentra team members who respond to them</li>
          <li>We keep enquiries only as long as we need them to respond and follow up</li>
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
          <li>Ask us to stop contacting you</li>
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
        Our service providers are based in the United States and may process information there or in other countries where they operate. We choose providers that protect information in line with this policy and applicable law.
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
          <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@mymentra.ai</p>
          <p className="text-gray-700 mb-2"><strong>Entity:</strong> Mentra AI, Inc., a Delaware corporation</p>
          <p className="text-gray-700">
            <strong>Data Protection Officer:</strong> Edward Kerr, Founder
          </p>
        </div>
      </>
    ),
  },
];

export default function Privacy() {
  usePageTitle('Privacy Policy | Mentra');
  return (
    <PageTransition>
    <div className="min-h-screen font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col">
      <Header />
      <main className="min-h-screen flex flex-col items-center py-12 px-4 font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10">
        {/* Hero Section */}
        <section className="container mx-auto max-w-3xl px-4 flex flex-col items-center justify-center gap-4 mb-16 relative">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600 mb-0 text-center">Last updated: November 26, 2026</p>
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
