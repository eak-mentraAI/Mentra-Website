import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

export default function Cookies() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 py-12 px-4 font-rounded">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">Cookie Policy</h1>
          <p className="text-gray-600 mb-8 text-center">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none text-left">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and personalizing content.
              </p>
              <p className="text-gray-700 mb-4">
                Cookies can be "session cookies" (which are deleted when you close your browser) or "persistent cookies" (which remain on your device for a set period of time).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">We use cookies for the following purposes:</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Essential Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions. The website cannot function properly without these cookies.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Performance Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's functionality and user experience.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Functional Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies enable enhanced functionality and personalization, such as remembering your preferences, login status, and language settings.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.4 Analytics Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies help us understand how our website is being used, which pages are most popular, and how users navigate through our site. This information helps us improve our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">3. Types of Cookies We Use</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 First-Party Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These are cookies that we set directly on our website. They include:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li><strong>Authentication cookies:</strong> Remember your login status</li>
                  <li><strong>Preference cookies:</strong> Store your language and display preferences</li>
                  <li><strong>Session cookies:</strong> Maintain your session while using our platform</li>
                  <li><strong>Security cookies:</strong> Help protect against fraud and unauthorized access</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Third-Party Cookies</h3>
                <p className="text-gray-700 mb-4">
                  These are cookies set by third-party services that we use to enhance our website functionality:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li><strong>Analytics services:</strong> Google Analytics, Mixpanel</li>
                  <li><strong>Payment processors:</strong> Stripe, PayPal</li>
                  <li><strong>Communication tools:</strong> Intercom, Zendesk</li>
                  <li><strong>Content delivery networks:</strong> Cloudflare, AWS</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">4. Specific Cookies We Use</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Cookie Name</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">mentra_session</td>
                      <td className="border border-gray-300 px-4 py-2">Maintains user session</td>
                      <td className="border border-gray-300 px-4 py-2">Session</td>
                      <td className="border border-gray-300 px-4 py-2">Essential</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">mentra_preferences</td>
                      <td className="border border-gray-300 px-4 py-2">Stores user preferences</td>
                      <td className="border border-gray-300 px-4 py-2">1 year</td>
                      <td className="border border-gray-300 px-4 py-2">Functional</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_ga</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics tracking</td>
                      <td className="border border-gray-300 px-4 py-2">2 years</td>
                      <td className="border border-gray-300 px-4 py-2">Analytics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_gid</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics session</td>
                      <td className="border border-gray-300 px-4 py-2">24 hours</td>
                      <td className="border border-gray-300 px-4 py-2">Analytics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">mentra_consent</td>
                      <td className="border border-gray-300 px-4 py-2">Remembers cookie consent</td>
                      <td className="border border-gray-300 px-4 py-2">1 year</td>
                      <td className="border border-gray-300 px-4 py-2">Essential</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">5. Your Cookie Choices</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Cookie Consent</h3>
              <p className="text-gray-700 mb-4">
                When you first visit our website, you'll see a cookie consent banner. You can choose which types of cookies you want to accept. You can change your preferences at any time through our cookie settings.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Browser Settings</h3>
              <p className="text-gray-700 mb-4">
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Block all cookies</li>
                <li>Block third-party cookies</li>
                <li>Delete existing cookies</li>
                <li>Set preferences for specific websites</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Opt-Out Options</h3>
              <p className="text-gray-700 mb-4">
                For analytics cookies, you can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on or by adjusting your cookie preferences in our settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">6. Impact of Disabling Cookies</h2>
              <p className="text-gray-700 mb-4">
                If you choose to disable cookies, some features of our website may not function properly:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>You may need to log in repeatedly</li>
                <li>Your preferences may not be saved</li>
                <li>Some personalized content may not be available</li>
                <li>Website performance may be affected</li>
                <li>Security features may be limited</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">7. Updates to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
              </p>
              <p className="text-gray-700 mb-4">
                Your continued use of our website after any changes constitutes acceptance of the updated Cookie Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">8. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@mentra.ai</p>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> San Francisco, CA</p>
                <p className="text-gray-700">
                  <strong>Data Protection Officer:</strong> Edward Kerr, Founder
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">9. Additional Resources</h2>
              <p className="text-gray-700 mb-4">
                For more information about cookies and how to manage them, you can visit:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li><a href="https://www.allaboutcookies.org" className="text-mentra-blue hover:underline">All About Cookies</a></li>
                <li><a href="https://www.youronlinechoices.com" className="text-mentra-blue hover:underline">Your Online Choices</a></li>
                <li><a href="https://www.networkadvertising.org" className="text-mentra-blue hover:underline">Network Advertising Initiative</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 