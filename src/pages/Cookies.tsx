import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

export default function Cookies() {
  return (
    <div className="min-h-screen font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col">
      <Header />
      <main className="min-h-screen flex flex-col items-center py-12 px-4 font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10">
        {/* Hero Section */}
        <section className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-center gap-8 mb-16 relative">
          <div className="flex-1 min-w-0 flex flex-col items-center md:items-center justify-center text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-gray-600 mb-0 text-center">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="flex-shrink-0 flex items-center justify-center mt-6 md:mt-0">
            <img src="/images/other/cookies.png" alt="Cookies Icon" className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain drop-shadow-2xl" />
          </div>
        </section>
        <section className="container mx-auto px-4">
          <div className="prose prose-lg max-w-none text-left">
            <section className="mb-8">
              <p className="text-gray-700 mb-4">
                At Mentra, we use cookies to make your experience smoother, safer, and more personal. Cookies help us remember your preferences, keep you secure, and improve our site. This policy explains what cookies are, how we use them, and how you can control your choices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files placed on your device when you visit our website. They help us remember your preferences, analyze usage, and personalize content. Cookies can be "session cookies" (deleted when you close your browser) or "persistent cookies" (which remain for a set period).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">We use cookies for these purposes:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li><b>Essential:</b> Enable core site features like navigation, security, and forms.</li>
                <li><b>Performance:</b> Help us understand how you use Mentra so we can improve.</li>
                <li><b>Functional:</b> Remember your preferences and settings.</li>
                <li><b>Analytics:</b> Show us which pages are most popular and how users navigate.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">3. Types of Cookies We Use</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 First-Party Cookies</h3>
                <p className="text-gray-700 mb-4">
                  Set directly by Mentra, these include:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li><strong>Authentication:</strong> Remember your login status</li>
                  <li><strong>Preference:</strong> Store your language and display preferences</li>
                  <li><strong>Session:</strong> Maintain your session while using our platform</li>
                  <li><strong>Security:</strong> Help protect against fraud and unauthorized access</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Third-Party Cookies</h3>
                <p className="text-gray-700 mb-4">
                  Set by third-party services to enhance Mentra's functionality:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                  <li><strong>Analytics:</strong> Google Analytics, Mixpanel</li>
                  <li><strong>Payments:</strong> Stripe, PayPal</li>
                  <li><strong>Communication:</strong> Intercom, Zendesk</li>
                  <li><strong>Content delivery:</strong> Cloudflare, AWS</li>
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
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">5. Control Your Cookies</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Cookie Consent</h3>
              <p className="text-gray-700 mb-4">
                When you first visit Mentra, you'll see a cookie consent banner. You can choose which types of cookies you want to accept, and change your preferences at any time through our cookie settings.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Browser Settings</h3>
              <p className="text-gray-700 mb-4">
                You can also control cookies through your browser. Most browsers let you:
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
                If you disable cookies, some features of Mentra may not work as expected:
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
                Your continued use of Mentra after any changes constitutes acceptance of the updated Cookie Policy.
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
        </section>
      </main>
      <Footer />
    </div>
  );
} 