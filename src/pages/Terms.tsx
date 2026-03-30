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
        Welcome to Mentra! These terms govern your use of the Mentra marketing website (mymentra.ai). By accessing or browsing this website, you agree to these terms. For terms governing the Mentra learning platform, please visit{' '}
        <a href="https://app.mymentra.ai/terms" className="text-mentra-blue hover:underline">app.mymentra.ai/terms</a>.
      </p>
    ),
  },
  {
    id: 'responsible-use',
    title: 'Acceptable Use',
    content: (
      <>
        <p className="text-gray-700 mb-4">When using this website, please don't:</p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>Use automated tools or bots to scrape or access the website</li>
          <li>Upload or transmit harmful, abusive, or inappropriate content</li>
          <li>Attempt to gain unauthorized access to our systems or infrastructure</li>
          <li>Interfere with or disrupt the website's functionality</li>
          <li>Copy or redistribute website content without permission</li>
        </ul>
      </>
    ),
  },
  {
    id: 'content-ownership',
    title: 'Content and Ownership',
    content: (
      <p className="text-gray-700">
        All content on this website — including text, graphics, logos, images, and software — is the property of Mentra or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from our website content without prior written permission.
      </p>
    ),
  },
  {
    id: 'privacy',
    title: 'Your Privacy',
    content: (
      <p className="text-gray-700">
        Your use of this website is also governed by our{' '}
        <a href="/privacy" className="text-mentra-blue hover:underline">Privacy Policy</a>, which describes how we collect and use information when you visit mymentra.ai.
      </p>
    ),
  },
  {
    id: 'service-availability',
    title: 'Website Availability',
    content: (
      <p className="text-gray-700">
        We strive to keep our website accessible, but we do not guarantee uninterrupted availability. We may update, modify, or temporarily take down the website for maintenance at any time without notice.
      </p>
    ),
  },
  {
    id: 'limitations',
    title: 'Important Limitations',
    content: (
      <p className="text-gray-700">
        This website and its content are provided "as is" without warranties of any kind. Mentra is not liable for any indirect, incidental, or consequential damages arising from your use of or inability to access this website.
      </p>
    ),
  },
  {
    id: 'legal-matters',
    title: 'Legal Matters',
    content: (
      <p className="text-gray-700">
        These terms are governed by Texas law. Any disputes will be resolved through arbitration in Texas. If any part of these terms is invalid, the rest remains enforceable.
      </p>
    ),
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    content: (
      <>
        <p className="text-gray-700 mb-4">
          We're here to help! Reach out with any questions about these terms:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@mentra.ai</p>
          <p className="text-gray-700 mb-2"><strong>Address:</strong> San Francisco, CA</p>
          <p className="text-gray-700">
            <strong>Legal Contact:</strong> Edward Kerr, Founder
          </p>
        </div>
      </>
    ),
  },
];

export default function Terms() {
  return (
    <PageTransition>
    <div className="min-h-screen font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col">
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col items-center py-12 px-4 font-rounded">
        {/* Hero Section */}
        <section className="container mx-auto max-w-7xl px-4 flex flex-col items-center justify-center gap-4 mb-16 relative">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">Terms of Use</h1>
          <p className="text-gray-600 mb-0 text-center">Last updated: {new Date().toLocaleDateString()}</p>
        </section>
        <section className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-6 rounded-xl border border-mentra-blue/20 bg-mentra-blue/5 px-4 py-3 text-sm text-gray-600">
            These terms of use apply to our marketing website (mymentra.ai). For product terms governing the Mentra learning platform, please visit{' '}
            <a href="https://app.mymentra.ai/terms" className="text-mentra-blue hover:underline font-medium">app.mymentra.ai/terms</a>.
          </div>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 max-w-5xl mx-auto">
            <LegalTableOfContents sections={sections} />
            <div className="flex-1 min-w-0">
              <LegalSection sections={sections} storageKey="terms" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </PageTransition>
  );
}
