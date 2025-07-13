import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

export default function Press() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col items-center py-12 px-4 font-rounded">
        {/* Hero Section */}
        <section className="container mx-auto px-4 flex flex-col items-center gap-8 mb-20 text-center max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Press & Media</h1>
          <p className="text-xl text-gray-700 max-w-2xl mb-2">
            Mentra is pioneering AI-powered learning and emotional intelligence for the next generation. We welcome media inquiries and provide resources for journalists, partners, and the public.
          </p>
        </section>

        {/* About Section (from About page) */}
        <section className="container mx-auto px-4 mb-20 text-left max-w-4xl">
          <h2 className="text-2xl font-bold text-mentra-blue mb-4 tracking-tight">About Mentra</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li><b>Founder:</b> Edward Kerr—technologist, father, and founder. Mentra is my response to a world where AI is changing everything, including what it means to learn and succeed.</li>
            <li><b>Mission:</b> Build a future where every child can thrive—no matter how the world changes.</li>
            <li><b>Approach:</b> Connect students, parents, and teachers through empathy and technical precision.</li>
            <li><b>Platform:</b> AI-native, role-based, adaptive journaling, and learning environment that grows with students.</li>
            <li><b>Vision:</b> A learning system as intelligent, empathetic, and growth-focused as the humans it's meant to support.</li>
          </ul>
        </section>

        {/* Media Kit Section */}
        <section className="container mx-auto px-4 mb-20 max-w-4xl">
          <div className="bg-white/80 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-mentra-blue mb-4 tracking-tight">Media Kit</h2>
            <p className="text-gray-700 mb-6">Download our brand assets for use in press coverage. For additional requests, contact us at <a href="mailto:hello@mentra.ai" className="text-mentra-blue underline">hello@mentra.ai</a>.</p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8 mb-6">
              <a href="/lovable-uploads/f05d5e11-f8b1-4798-ba3d-a85133efccfd.png" download className="bg-mentra-blue text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-mentra-blue/90 transition">Download All Assets (ZIP)</a>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Logo */}
              <div className="flex flex-col items-center">
                <img src="/lovable-uploads/f05d5e11-f8b1-4798-ba3d-a85133efccfd.png" alt="Mentra Logo" className="h-20 mb-2" />
                <a href="/lovable-uploads/f05d5e11-f8b1-4798-ba3d-a85133efccfd.png" download className="text-mentra-blue underline text-sm">Download Logo (PNG)</a>
              </div>
              {/* Brand Icon (Logo with no words) */}
              <div className="flex flex-col items-center">
                <img src="/lovable-uploads/MENTRA_SPRIG_HEART.png" alt="Mentra Brand Icon" className="h-20 mb-2" />
                <a href="/lovable-uploads/MENTRA_SPRIG_HEART.png" download className="text-mentra-blue underline text-sm">Download Brand Icon (PNG)</a>
              </div>
              {/* Sprig Icon */}
              <div className="flex flex-col items-center">
                <img src="/lovable-uploads/060630a8-ed64-4d31-8e7b-c1c12d2b6e6e.png" alt="Sprig Icon" className="h-20 mb-2" />
                <a href="/lovable-uploads/060630a8-ed64-4d31-8e7b-c1c12d2b6e6e.png" download className="text-mentra-blue underline text-sm">Download Sprig Icon (PNG)</a>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Colors & Typography Section */}
        <section className="container mx-auto px-4 mb-20 max-w-4xl">
          <div className="bg-white/80 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-mentra-blue mb-4 tracking-tight">Brand Colors & Typography</h2>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Brand Colors</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm border border-gray-200 rounded-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 font-bold">Token Name</th>
                      <th className="px-4 py-2 font-bold">Hex Code</th>
                      <th className="px-4 py-2 font-bold">Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="px-4 py-2 font-semibold">Primary / Mentra Blue</td><td className="px-4 py-2 text-mentra-blue font-mono">#3A86FF</td><td className="px-4 py-2">Buttons, highlights, Sprig identity color</td></tr>
                    <tr><td className="px-4 py-2 font-semibold">Secondary / Growth Green</td><td className="px-4 py-2 text-growth-green font-mono">#06D6A0</td><td className="px-4 py-2">Positive actions, check-ins, Sprig leaves</td></tr>
                    <tr><td className="px-4 py-2 font-semibold">Accent / Curiosity Coral</td><td className="px-4 py-2 text-curiosity-coral font-mono">#FF6B6B</td><td className="px-4 py-2">Micro-wins, reflection triggers</td></tr>
                    <tr><td className="px-4 py-2 font-semibold">Background / Journal Sand</td><td className="px-4 py-2 bg-journal-sand font-mono">#FFF9F3</td><td className="px-4 py-2">Page backgrounds, gentle neutral</td></tr>
                    <tr><td className="px-4 py-2 font-semibold">Highlight / Grit Gold</td><td className="px-4 py-2 text-grit-gold font-mono">#FFD166</td><td className="px-4 py-2">Sprig milestones, achievement highlights</td></tr>
                    <tr><td className="px-4 py-2 font-semibold">Text / Charcoal</td><td className="px-4 py-2" style={{color:'#333333',fontFamily:'monospace'}}>#333333</td><td className="px-4 py-2">Primary text</td></tr>
                    <tr><td className="px-4 py-2 font-semibold">Text Light / Off-White</td><td className="px-4 py-2 bg-gray-100 font-mono">#FAFAFA</td><td className="px-4 py-2">Text on dark backgrounds</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">Accessibility: All color combinations must meet WCAG AA contrast ratios. Use lighter tints and darker variants for hover/focus states.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Typography System</h3>
              <p className="mb-2"><b>Primary Font:</b> DM Sans<br/><b>Display Option:</b> Poppins (use for student-facing materials)</p>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm border border-gray-200 rounded-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 font-bold">Text Style</th>
                      <th className="px-4 py-2 font-bold">Font</th>
                      <th className="px-4 py-2 font-bold">Size</th>
                      <th className="px-4 py-2 font-bold">Weight</th>
                      <th className="px-4 py-2 font-bold">Line Height</th>
                      <th className="px-4 py-2 font-bold">Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="px-4 py-2 font-semibold">H1</td><td className="px-4 py-2">DM Sans</td><td className="px-4 py-2">48px</td><td className="px-4 py-2">Bold</td><td className="px-4 py-2">120%</td><td className="px-4 py-2">Hero headlines</td></tr>
                    <tr><td className="px-4 py-2 font-semibold">H2</td><td className="px-4 py-2">DM Sans</td><td className="px-4 py-2">36px</td><td className="px-4 py-2">SemiBold</td><td className="px-4 py-2">120%</td><td className="px-4 py-2">Section headers</td></tr>
                    <tr><td className="px-4 py-2 font-semibold">Body Large</td><td className="px-4 py-2">DM Sans</td><td className="px-4 py-2">18px</td><td className="px-4 py-2">Regular</td><td className="px-4 py-2">140%</td><td className="px-4 py-2">Descriptive content</td></tr>
                    <tr><td className="px-4 py-2 font-semibold">Body</td><td className="px-4 py-2">DM Sans</td><td className="px-4 py-2">16px</td><td className="px-4 py-2">Regular</td><td className="px-4 py-2">140%</td><td className="px-4 py-2">Journaling, base UI</td></tr>
                    <tr><td className="px-4 py-2 font-semibold">Caption</td><td className="px-4 py-2">DM Sans</td><td className="px-4 py-2">12px</td><td className="px-4 py-2">Medium</td><td className="px-4 py-2">130%</td><td className="px-4 py-2">Tooltips, helper text</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">Use sentence case for UI elements and maintain sufficient padding around text blocks.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-4 mb-20 max-w-4xl">
          <div className="bg-white/80 rounded-2xl shadow-lg p-8 border-l-8 border-mentra-blue text-center">
            <h2 className="text-2xl font-bold text-mentra-blue mb-4 tracking-tight flex items-center justify-center gap-2">
              <svg className="w-7 h-7 text-mentra-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7.5M16 3v4M8 3v4m-3 4h16m-6 8h6m-3-3v6"/></svg>
              Media Inquiries
            </h2>
            <p className="text-gray-700 mb-2">For interviews, press requests, or more information, please contact:</p>
            <a href="mailto:hello@mentra.ai" className="text-lg text-mentra-blue underline font-semibold">hello@mentra.ai</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 