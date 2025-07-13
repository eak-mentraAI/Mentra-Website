import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

export default function Terms() {
  return (
    <div className="min-h-screen font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col">
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col items-center py-12 px-4 font-rounded">
        {/* Hero Section */}
        <section className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-center gap-8 mb-16 relative">
          <div className="flex-1 min-w-0 flex flex-col items-center md:items-center justify-center text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600 mb-0 text-center">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="flex-shrink-0 flex items-center justify-center mt-6 md:mt-0">
            <img src="/judge.png" alt="Judge Icon" className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain drop-shadow-2xl" />
          </div>
        </section>
        <section className="container mx-auto px-4">
          <div className="prose prose-lg max-w-none text-left">
            <section className="mb-8">
              <p className="text-gray-700 mb-4">
                Welcome to Mentra! These terms help us <span className="text-mentra-blue">protect</span> your learning experience while ensuring our platform remains safe and effective for everyone. By using Mentra, you agree to these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">What Mentra <span className="text-mentra-blue">Provides</span></h2>
              <p className="text-gray-700 mb-4">
                Mentra is an AI-powered learning platform that supports students, educators, and parents through:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Personalized AI learning experiences</li>
                <li>Educational content and progress tracking</li>
                <li>Communication tools for learning communities</li>
                <li>Mobile and web access to learning materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">Your Account <span className="text-mentra-blue">Security</span></h2>
              <p className="text-gray-700 mb-4">
                You're responsible for keeping your account secure. Please provide accurate information and notify us immediately of any unauthorized access. Users under 13 need parental consent, and users 13-18 may need consent depending on local laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">How to <span className="text-mentra-blue">Use</span> Mentra Responsibly</h2>
              <p className="text-gray-700 mb-4">Please don't:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Share your account with others</li>
                <li>Upload harmful or inappropriate content</li>
                <li>Try to access our systems without permission</li>
                <li>Use automated tools to access our platform</li>
                <li>Use Mentra for commercial purposes without our permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">Content and <span className="text-mentra-blue">Ownership</span></h2>
              <p className="text-gray-700 mb-4">
                You own your content. We own our platform. When you share content with us, you give us permission to use it to provide and improve our services. Our AI generates insights based on your content to help your learning journey.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">Your <span className="text-mentra-blue">Privacy</span> Matters</h2>
              <p className="text-gray-700 mb-4">
                We protect your data as outlined in our Privacy Policy. While we implement strong security measures, no internet transmission is 100% secure. We're committed to keeping your information safe.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">Service <span className="text-mentra-blue">Availability</span></h2>
              <p className="text-gray-700 mb-4">
                We work hard to keep Mentra running smoothly, but we can't guarantee uninterrupted access. We may update our services or these terms occasionally. Continued use means you accept any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">Important <span className="text-mentra-blue">Limitations</span></h2>
              <p className="text-gray-700 mb-4">
                Mentra is provided "as is" without warranties. While we support learning, we can't guarantee specific educational outcomes—success depends on many factors. We're not liable for indirect damages from using our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">Account <span className="text-mentra-blue">Termination</span></h2>
              <p className="text-gray-700 mb-4">
                We may suspend or terminate accounts that violate these terms. Upon termination, your access ends immediately, but certain terms survive to protect both parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">Legal <span className="text-mentra-blue">Matters</span></h2>
              <p className="text-gray-700 mb-4">
                These terms are governed by California law. Any disputes will be resolved through arbitration in San Francisco. If any part of these terms is invalid, the rest remains enforceable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-mentra-blue mb-4">Questions? <span className="text-mentra-blue">Contact</span> Us</h2>
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
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 