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
        <section className="container mx-auto px-4 flex flex-col items-center gap-8 mb-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Press & Media</h1>
          <p className="text-xl text-gray-700 max-w-2xl mb-2">
            Mentra is pioneering AI-powered learning and emotional intelligence for the next generation. We welcome media inquiries and provide resources for journalists, partners, and the public.
          </p>
        </section>

        {/* About Section (from About page) */}
        <section className="container mx-auto px-4 mb-16 text-left max-w-3xl">
          <h2 className="text-2xl font-bold text-mentra-blue mb-4 tracking-tight">About Mentra</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hi, I'm Edward Kerr—technologist, father, and founder. Mentra is my response to a world where AI is changing everything, including what it means to learn and succeed.
          </p>
          <p className="text-lg text-gray-500 mb-4">
            As a dad to Grace, Hope, and Joy, I want to build a future where every child can thrive—no matter how the world changes.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We know how to connect the key personas—students, parents, teachers—and guide them through this AI transition with empathy and technical precision.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We are building an AI-native platform that connects educators, students (K–12), and parents into a shared, role-based learning environment, uses adaptive journaling and assignment-linked prompts to extract meaning from the learning journey, and grows with students as they grow, learning from their inputs and becoming more tailored over time.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <b>That's our vision:</b> A learning system as intelligent, empathetic, and growth-focused as the humans it's meant to support.
          </p>
        </section>

        {/* Media Kit Section */}
        <section className="container mx-auto px-4 mb-16 max-w-3xl">
          <h2 className="text-2xl font-bold text-mentra-blue mb-4 tracking-tight">Media Kit</h2>
          <p className="text-gray-700 mb-6">Download our brand assets for use in press coverage. For additional requests, contact us at <a href="mailto:hello@mentra.ai" className="text-mentra-blue underline">hello@mentra.ai</a>.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Logo */}
            <div className="flex flex-col items-center">
              <img src="/lovable-uploads/f05d5e11-f8b1-4798-ba3d-a85133efccfd.png" alt="Mentra Logo" className="h-20 mb-2" />
              <a href="/lovable-uploads/f05d5e11-f8b1-4798-ba3d-a85133efccfd.png" download className="text-mentra-blue underline text-sm">Download Logo (PNG)</a>
            </div>
            {/* Wordmark Placeholder */}
            <div className="flex flex-col items-center">
              <img src="/lovable-uploads/MENTRA_SPRIG_HEART.png" alt="Mentra Wordmark" className="h-20 mb-2" />
              <a href="/lovable-uploads/MENTRA_SPRIG_HEART.png" download className="text-mentra-blue underline text-sm">Download Wordmark (PNG)</a>
            </div>
            {/* Sprig Icon Placeholder */}
            <div className="flex flex-col items-center">
              <img src="/lovable-uploads/060630a8-ed64-4d31-8e7b-c1c12d2b6e6e.png" alt="Sprig Icon" className="h-20 mb-2" />
              <a href="/lovable-uploads/060630a8-ed64-4d31-8e7b-c1c12d2b6e6e.png" download className="text-mentra-blue underline text-sm">Download Sprig Icon (PNG)</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-4 mb-16 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-mentra-blue mb-4 tracking-tight">Media Inquiries</h2>
          <p className="text-gray-700 mb-2">For interviews, press requests, or more information, please contact:</p>
          <a href="mailto:hello@mentra.ai" className="text-lg text-mentra-blue underline font-semibold">hello@mentra.ai</a>
        </section>
      </main>
      <Footer />
    </>
  );
} 