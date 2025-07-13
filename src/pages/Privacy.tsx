import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 py-12 px-4 font-rounded">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>
          <p className="text-gray-600 mb-8 text-center">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none text-left">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Mentra ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered learning platform and related services.
              </p>
              <p className="text-gray-700 mb-4">
                By using Mentra, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 mb-4">We may collect the following personal information:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Educational institution affiliation</li>
                <li>Student grade level and academic information</li>
                <li>Parent/guardian information for minor students</li>
                <li>Account credentials and profile information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Usage Data</h3>
              <p className="text-gray-700 mb-4">We automatically collect certain information when you use our platform:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage patterns and interaction data</li>
                <li>Journal entries and learning content (with appropriate consent)</li>
                <li>Performance and progress data</li>
                <li>Communication preferences and settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 AI-Generated Content</h3>
              <p className="text-gray-700 mb-4">
                Our platform uses AI to process and analyze learning content, journal entries, and educational materials. This data is used to provide personalized learning experiences and insights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Provide and maintain our learning platform</li>
                <li>Personalize learning experiences and content</li>
                <li>Generate AI-powered insights and recommendations</li>
                <li>Communicate with users about their accounts and services</li>
                <li>Improve our platform and develop new features</li>
                <li>Ensure platform security and prevent fraud</li>
                <li>Comply with legal obligations and educational requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Educational Institutions</h3>
              <p className="text-gray-700 mb-4">
                With your consent or as required by your educational institution, we may share relevant information with teachers, administrators, and educational partners.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Service Providers</h3>
              <p className="text-gray-700 mb-4">
                We may share information with trusted third-party service providers who assist us in operating our platform, such as cloud storage providers and analytics services.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Legal Requirements</h3>
              <p className="text-gray-700 mb-4">
                We may disclose information if required by law, court order, or government regulation, or to protect our rights, property, or safety.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">5. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">6. Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Consent:</strong> Withdraw consent for data processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">7. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our platform is designed for educational use and may be used by students under 13 years of age. We comply with the Children's Online Privacy Protection Act (COPPA) and obtain appropriate consent from parents or guardians before collecting personal information from children under 13.
              </p>
              <p className="text-gray-700 mb-4">
                Parents and guardians have the right to review, delete, and refuse further collection of their child's personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">8. International Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              <p className="text-gray-700 mb-4">
                Your continued use of our platform after any changes constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">10. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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
        </div>
      </main>
      <Footer />
    </>
  );
} 