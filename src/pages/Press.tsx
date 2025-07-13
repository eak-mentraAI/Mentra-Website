import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

export default function Press() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col items-center py-12 px-4 font-rounded">
        {/* Hero Section */}
        <section className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-center gap-8 mb-16 relative">
          {/* Left: Header and intro */}
          <div className="flex-1 min-w-0 flex flex-col items-center md:items-center justify-center text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-mentra-blue">For</span> the Media
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mb-2">
              Mentra is pioneering AI-powered learning and emotional intelligence for the next generation. Below you'll find fast facts, our media kit, and direct contact for press inquiries.
            </p>
          </div>
          {/* Right: Large Sprig Icon */}
          <div className="flex-shrink-0 flex items-center justify-center mt-6 md:mt-0">
            <img src="/press.png" alt="Sprig Press Icon" className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain drop-shadow-2xl" />
          </div>
        </section>

        {/* Fast Facts Section */}
        <section className="container mx-auto max-w-7xl px-4 mb-12 text-left">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Mentra Fast <span className="text-mentra-blue">Facts</span>
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 leading-relaxed space-y-2 max-w-3xl">
            <li><b>Founded:</b> 2023 by Edward Kerr (technologist, educator, parent)</li>
            <li><b>Mission:</b> Empower every child to thrive in an AI-powered world</li>
            <li><b>What We Do:</b> AI-native journaling and learning platform for students, parents, and educators</li>
            <li><b>Approach:</b> Evidence-based, human-centered, privacy-first, and pedagogically aligned</li>
            <li><b>Contact:</b> <a href="mailto:hello@mentra.ai" className="text-mentra-blue underline">hello@mentra.ai</a></li>
          </ul>
        </section>

        {/* Media Kit Section */}
        <section className="container mx-auto max-w-7xl px-4 mb-12 text-left">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            <span className="text-mentra-blue">Download</span> Our Media Kit
          </h2>
          <p className="text-gray-700 mb-4 max-w-3xl">
            Download our brand assets for press coverage. To download all assets, <a href="/lovable-uploads/f05d5e11-f8b1-4798-ba3d-a85133efccfd.png" download className="text-mentra-blue underline">click here</a> or select the one you need below. For additional requests, email <a href="mailto:hello@mentra.ai" className="text-mentra-blue underline">hello@mentra.ai</a>.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mt-4 items-start">
            {/* Main Logo */}
            <div className="flex flex-col items-center">
              <img src="/lovable-uploads/f05d5e11-f8b1-4798-ba3d-a85133efccfd.png" alt="Mentra Logo" className="h-20 mb-2" />
              <a href="/lovable-uploads/f05d5e11-f8b1-4798-ba3d-a85133efccfd.png" download className="text-mentra-blue underline text-sm">Download Logo (PNG)</a>
            </div>
            {/* Brand Icon (Logo with no words) */}
            <div className="flex flex-col items-center">
              <img src="/logo_no_words.png" alt="Mentra Brand Icon" className="h-20 mb-2" />
              <a href="/logo_no_words.png" download className="text-mentra-blue underline text-sm">Download Brand Icon (PNG)</a>
            </div>
            {/* Sprig Icon */}
            <div className="flex flex-col items-center">
              <img src="/lovable-uploads/060630a8-ed64-4d31-8e7b-c1c12d2b6e6e.png" alt="Sprig Icon" className="h-20 mb-2" />
              <a href="/lovable-uploads/060630a8-ed64-4d31-8e7b-c1c12d2b6e6e.png" download className="text-mentra-blue underline text-sm">Download Sprig Icon (PNG)</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto max-w-7xl px-4 mb-12 text-left">
          <div className="bg-white/80 rounded-2xl shadow-lg p-8 border-l-8 border-mentra-blue">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              <span className="text-mentra-blue">Contact</span> for Media Inquiries
            </h2>
            <p className="text-gray-700 mb-2">For interviews, press requests, or more information, contact:</p>
            <a href="mailto:hello@mentra.ai" className="text-lg text-mentra-blue underline font-semibold">hello@mentra.ai</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 