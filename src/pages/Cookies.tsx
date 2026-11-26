import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import LegalSection, { type LegalSectionItem } from '../components/shared/LegalSection';
import LegalTableOfContents from '../components/shared/LegalTableOfContents';
import '../App.css';
import { usePageTitle } from '@/lib/usePageTitle';

const cell = 'border border-gray-300 px-4 py-2 align-top';

const sections: LegalSectionItem[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <p className="text-gray-700">
        This cookie policy applies to the Mentra marketing website (mymentra.ai). It explains what this website stores in your browser, which outside services your browser contacts when you visit, and how you can control both. The short version: we don't use analytics, advertising or tracking cookies on this website.
      </p>
    ),
  },
  {
    id: 'what-are-cookies',
    title: '1. Cookies and Browser Storage',
    content: (
      <p className="text-gray-700">
        Cookies are small text files a website places in your browser. Browsers also offer "local storage" and "session storage", which let a website remember small pieces of information on your device. Nothing in local or session storage is sent to us; it stays in your browser until you or your browser clears it.
      </p>
    ),
  },
  {
    id: 'what-we-store',
    title: '2. What This Website Stores',
    content: (
      <>
        <p className="text-gray-700 mb-4">
          This website sets no cookies of its own. It keeps these items in your browser's storage, all of them to make the site work the way you left it:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className={`${cell} text-left`}>Name</th>
                <th className={`${cell} text-left`}>Purpose</th>
                <th className={`${cell} text-left`}>Kept until</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={cell}>mentra_consent</td>
                <td className={cell}>Remembers the choices you made in the cookie banner</td>
                <td className={cell}>You clear your browser storage</td>
              </tr>
              <tr>
                <td className={cell}>legal-collapse-*</td>
                <td className={cell}>Remembers which sections of our legal pages you expanded</td>
                <td className={cell}>You clear your browser storage</td>
              </tr>
              <tr>
                <td className={cell}>mentra_hero_hint_dismissed</td>
                <td className={cell}>Remembers that you dismissed a hint on the home page</td>
                <td className={cell}>You clear your browser storage</td>
              </tr>
              <tr>
                <td className={cell}>redirect (session storage)</td>
                <td className={cell}>Sends you to the right page when you open a link directly</td>
                <td className={cell}>You close the tab</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: 'third-parties',
    title: '3. Outside Services Your Browser Contacts',
    content: (
      <>
        <p className="text-gray-700 mb-4">
          Some parts of the website are delivered by other companies. When your browser loads them, that company receives your IP address and basic browser information, and handles it under its own privacy policy:
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
          <li><b>GitHub Pages (GitHub, Inc.)</b> hosts the website and serves every page.</li>
          <li><b>Google Fonts (Google LLC)</b> supplies the fonts on every page.</li>
          <li><b>YouTube (Google LLC)</b> plays the video on our About page. We use YouTube's privacy-enhanced mode, which doesn't set cookies until you play the video. Once you press play, YouTube's own cookies and storage apply.</li>
          <li><b>Formspree</b> receives the details you type into the "Schedule a call" form, only when you submit it.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'what-we-dont-use',
    title: '4. What We Don\'t Use',
    content: (
      <p className="text-gray-700">
        This website has no analytics, advertising, social-media tracking pixels, chat widgets or payment tools. The analytics and marketing options in the cookie banner are there so that, if we ever add a tool of that kind, it runs only for visitors who have allowed it. We would update this policy before adding one.
      </p>
    ),
  },
  {
    id: 'managing-cookies',
    title: '5. Managing Your Choices',
    content: (
      <>
        <p className="text-gray-700 mb-4">
          You can change your choices at any time with the "Cookie Settings" button in the bottom-right corner of the screen. You can also use your browser's settings to:
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>Clear the site's stored data</li>
          <li>Block cookies, or only third-party cookies</li>
          <li>Set preferences for specific websites</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Clearing storage resets your banner choice and the small preferences listed above. The website keeps working either way.
        </p>
      </>
    ),
  },
  {
    id: 'learning-platform',
    title: '6. The Mentra Learning Platform',
    content: (
      <p className="text-gray-700">
        This policy covers only the marketing website. The Mentra learning platform at app.mymentra.ai uses session cookies for sign-in and platform features, as described in its{' '}
        <a href="https://app.mymentra.ai/privacy" className="text-mentra-blue hover:underline">privacy policy</a>.
      </p>
    ),
  },
  {
    id: 'updates',
    title: '7. Updates to This Policy',
    content: (
      <p className="text-gray-700">
        We'll update this policy when the website changes what it stores or which services it uses, and change the "Last updated" date above.
      </p>
    ),
  },
  {
    id: 'contact',
    title: '8. Contact Us',
    content: (
      <>
        <p className="text-gray-700 mb-4">
          If you have questions about this Cookie Policy, please contact us:
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

export default function Cookies() {
  usePageTitle('Cookie Policy | Mentra');
  return (
    <PageTransition>
    <div className="min-h-screen font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col">
      <Header />
      <main className="min-h-screen flex flex-col items-center py-12 px-4 font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10">
        {/* Hero Section */}
        <section className="container mx-auto max-w-3xl px-4 flex flex-col items-center justify-center gap-4 mb-16 relative">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
          <p className="text-gray-600 mb-0 text-center">Last updated: November 26, 2026</p>
        </section>
        <section className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-6 rounded-xl border border-mentra-blue/20 bg-mentra-blue/5 px-4 py-3 text-sm text-gray-600">
            This cookie policy applies to our marketing website (mymentra.ai). For the Mentra learning platform, see its privacy policy at{' '}
            <a href="https://app.mymentra.ai/privacy" className="text-mentra-blue hover:underline font-medium">app.mymentra.ai/privacy</a>.
          </div>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 max-w-5xl mx-auto">
            <LegalTableOfContents sections={sections} />
            <div className="flex-1 min-w-0">
              <LegalSection sections={sections} storageKey="cookies" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </PageTransition>
  );
}
