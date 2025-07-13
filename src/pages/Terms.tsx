import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

export default function Terms() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 py-12 px-4 font-rounded">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">Terms of Service</h1>
          <p className="text-gray-600 mb-8 text-center">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none text-left">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Mentra's AI-powered learning platform ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-700 mb-4">
                These Terms of Service ("Terms") govern your use of our website and services operated by Mentra ("Company," "we," "us," or "our").
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">2. Description of Service</h2>
              <p className="text-gray-700 mb-4">
                Mentra provides an AI-powered learning platform designed to support students, educators, and parents in the educational process. Our services include:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>AI-powered journaling and learning tools</li>
                <li>Personalized learning experiences and insights</li>
                <li>Educational content and resources</li>
                <li>Communication tools for students, parents, and educators</li>
                <li>Progress tracking and analytics</li>
                <li>Mobile and web access to learning materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">3. User Accounts and Registration</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Account Creation</h3>
              <p className="text-gray-700 mb-4">
                To access certain features of our Service, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Account Security</h3>
              <p className="text-gray-700 mb-4">
                You are responsible for safeguarding the password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Age Requirements</h3>
              <p className="text-gray-700 mb-4">
                Users under 13 years of age must have parental consent to use our Service. Users between 13 and 18 years of age must have parental consent if required by applicable law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">4. Acceptable Use Policy</h2>
              <p className="text-gray-700 mb-4">You agree not to use the Service to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Upload or transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Use the Service for commercial purposes without authorization</li>
                <li>Share account credentials with others</li>
                <li>Use automated systems to access the Service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">5. Content and Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Our Content</h3>
              <p className="text-gray-700 mb-4">
                The Service and its original content, features, and functionality are owned by Mentra and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 User Content</h3>
              <p className="text-gray-700 mb-4">
                You retain ownership of content you submit to the Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content for the purpose of providing and improving our Service.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 AI-Generated Content</h3>
              <p className="text-gray-700 mb-4">
                Our platform uses AI to generate insights and recommendations based on your content. You retain rights to your original content, while AI-generated insights are provided for educational purposes and may be used to improve our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">6. Privacy and Data Protection</h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your data, but no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">7. Service Availability and Modifications</h2>
              <p className="text-gray-700 mb-4">
                We strive to provide reliable service but do not guarantee uninterrupted access. We may modify, suspend, or discontinue the Service at any time with or without notice.
              </p>
              <p className="text-gray-700 mb-4">
                We reserve the right to update these Terms at any time. Continued use of the Service after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">8. Disclaimers and Limitations</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">8.1 Service Disclaimer</h3>
              <p className="text-gray-700 mb-4">
                The Service is provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">8.2 Educational Disclaimer</h3>
              <p className="text-gray-700 mb-4">
                While our platform supports learning, we do not guarantee specific educational outcomes. Academic success depends on many factors beyond our control.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">8.3 Limitation of Liability</h3>
              <p className="text-gray-700 mb-4">
                In no event shall Mentra be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">9. Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to defend, indemnify, and hold harmless Mentra and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">10. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including breach of these Terms.
              </p>
              <p className="text-gray-700 mb-4">
                Upon termination, your right to use the Service will cease immediately. Provisions of these Terms which by their nature should survive termination shall survive.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">11. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-700 mb-4">
                Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration in San Francisco, California, in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">12. Severability</h2>
              <p className="text-gray-700 mb-4">
                If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent under law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">13. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@mentra.ai</p>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> San Francisco, CA</p>
                <p className="text-gray-700">
                  <strong>Legal Contact:</strong> Edward Kerr, Founder
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