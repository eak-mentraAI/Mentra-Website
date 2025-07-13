import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

export default function Privacy() {
  return (
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
            <img src="/spy.png" alt="Spy Icon" className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain drop-shadow-2xl" />
          </div>
        </section>
        <section className="container mx-auto px-4">
          <div className="prose prose-lg max-w-none text-left">
            <section className="mb-8">
              <p className="text-gray-700 mb-4">
                At Mentra, we <span className="text-mentra-blue">protect</span> your privacy because we believe learning should be safe and secure. This policy explains how we handle your information to provide personalized learning experiences while keeping your data safe.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">Information We <span className="text-mentra-blue">Collect</span></h2>
              <p className="text-gray-700 mb-4">We collect information to provide better learning experiences:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li><strong>Account information:</strong> Name, email, educational institution</li>
                <li><strong>Learning data:</strong> Journal entries, progress, performance</li>
                <li><strong>Usage patterns:</strong> How you interact with our platform</li>
                <li><strong>Device information:</strong> Browser type, IP address for security</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Our AI processes your learning content to provide personalized insights and recommendations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">How We <span className="text-mentra-blue">Use</span> Your Information</h2>
              <p className="text-gray-700 mb-4">Your information helps us:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Create personalized learning experiences</li>
                <li>Generate AI-powered insights and recommendations</li>
                <li>Improve our platform and develop new features</li>
                <li>Keep your account secure and prevent fraud</li>
                <li>Communicate important updates about your learning</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">Information <span className="text-mentra-blue">Sharing</span></h2>
              <p className="text-gray-700 mb-4">
                We don't sell your personal information. We may share data in these situations:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li><strong>With your consent:</strong> Sharing progress with educators or parents</li>
                <li><strong>Service providers:</strong> Trusted partners who help us operate securely</li>
                <li><strong>Legal requirements:</strong> When required by law or to protect safety</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">Keeping Your Data <span className="text-mentra-blue">Secure</span></h2>
              <p className="text-gray-700 mb-4">
                We protect your information with industry-standard security measures:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Encryption of all data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Strict access controls and authentication</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">Your <span className="text-mentra-blue">Rights</span></h2>
              <p className="text-gray-700 mb-4">You control your data. You can:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Access and download your personal information</li>
                <li>Correct or update inaccurate data</li>
                <li>Request deletion of your account and data</li>
                <li>Transfer your data to another service</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">Protecting <span className="text-mentra-blue">Children</span></h2>
              <p className="text-gray-700 mb-4">
                We're committed to protecting young learners. For students under 13, we comply with COPPA and require parental consent before collecting personal information. Parents can review, delete, or refuse further collection of their child's data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">Global <span className="text-mentra-blue">Standards</span></h2>
              <p className="text-gray-700 mb-4">
                Your information may be processed in different countries. We ensure appropriate safeguards are in place to protect your data according to this policy and applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">Policy <span className="text-mentra-blue">Updates</span></h2>
              <p className="text-gray-700 mb-4">
                We may update this policy occasionally. We'll notify you of significant changes by posting updates here and updating the "Last updated" date. Continued use means you accept the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">Questions? <span className="text-mentra-blue">Contact</span> Us</h2>
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
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 