import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BookOpen, ShieldCheck, Users, Eye, Lock, FileText, BarChart3, Settings2, Sparkles, Star, Heart, UserCheck, UserX, Trash2, Mail } from 'lucide-react';

const tabData = [
  {
    label: 'Student Data Privacy',
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Student Data Privacy</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-mentra-blue/10 rounded-xl p-4 shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-mentra-blue/20 rounded-2xl flex items-center justify-center mb-2">
              <Eye className="w-8 h-8 text-mentra-blue" />
            </div>
            <span className="text-gray-900 font-bold mb-2">Learning Progress</span>
            <span className="text-gray-900 text-sm text-center">We collect only essential learning data to provide personalized tutoring: progress, performance, and engagement.</span>
          </div>
          <div className="bg-curiosity-coral/10 rounded-xl p-4 shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-curiosity-coral/20 rounded-2xl flex items-center justify-center mb-2">
              <FileText className="w-8 h-8 text-curiosity-coral" />
            </div>
            <span className="text-gray-900 font-bold mb-2">Student Interactions</span>
            <span className="text-gray-900 text-sm text-center">Student responses and interactions with AI are used to personalize support and track growth.</span>
          </div>
          <div className="bg-growth-green/10 rounded-xl p-4 shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-growth-green/20 rounded-2xl flex items-center justify-center mb-2">
              <BarChart3 className="w-8 h-8 text-growth-green" />
            </div>
            <span className="text-gray-900 font-bold mb-2">Engagement Patterns</span>
            <span className="text-gray-900 text-sm text-center">We monitor time spent on activities and identify areas of difficulty or strength.</span>
          </div>
          <div className="bg-grit-gold/10 rounded-xl p-4 shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-grit-gold/20 rounded-2xl flex items-center justify-center mb-2">
              <Lock className="w-8 h-8 text-grit-gold" />
            </div>
            <span className="text-gray-900 font-bold mb-2">Data Security</span>
            <span className="text-gray-900 text-sm text-center">All data is encrypted, securely stored, and never shared with third parties for marketing purposes.</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'FERPA & COPPA Compliance',
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">FERPA & COPPA Compliance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          <div className="bg-mentra-blue/10 rounded-xl p-4 shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-mentra-blue/20 rounded-2xl flex items-center justify-center mb-2">
              <ShieldCheck className="w-8 h-8 text-mentra-blue" />
            </div>
            <span className="text-gray-900 font-bold mb-2">FERPA Compliant</span>
            <span className="text-gray-900 text-sm text-center">Educational records are protected according to federal privacy law requirements.</span>
          </div>
          <div className="bg-curiosity-coral/10 rounded-xl p-4 shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-curiosity-coral/20 rounded-2xl flex items-center justify-center mb-2">
              <UserCheck className="w-8 h-8 text-curiosity-coral" />
            </div>
            <span className="text-gray-900 font-bold mb-2">COPPA Compliant</span>
            <span className="text-gray-900 text-sm text-center">Children's online privacy is protected with appropriate consent mechanisms.</span>
          </div>
          <div className="bg-growth-green/10 rounded-xl p-4 shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-growth-green/20 rounded-2xl flex items-center justify-center mb-2">
              <Star className="w-8 h-8 text-growth-green" />
            </div>
            <span className="text-gray-900 font-bold mb-2">SOC 2 Type II</span>
            <span className="text-gray-900 text-sm text-center">Independently verified security and availability controls.</span>
          </div>
          <div className="bg-grit-gold/10 rounded-xl p-4 shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-grit-gold/20 rounded-2xl flex items-center justify-center mb-2">
              <Heart className="w-8 h-8 text-grit-gold" />
            </div>
            <span className="text-gray-900 font-bold mb-2">GDPR Ready</span>
            <span className="text-gray-900 text-sm text-center">Comprehensive data protection and user rights compliance.</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Transparency in AI Operations',
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Transparency in AI Operations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-mentra-blue/10 rounded-xl p-4 shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-mentra-blue/20 rounded-2xl flex items-center justify-center mb-2">
              <Sparkles className="w-8 h-8 text-mentra-blue" />
            </div>
            <span className="text-gray-900 font-bold mb-2">Socratic Methodology</span>
            <span className="text-gray-900 text-sm text-center">Uses Socratic methodology to guide learning through questions.</span>
          </div>
          <div className="bg-curiosity-coral/10 rounded-xl p-4 shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-curiosity-coral/20 rounded-2xl flex items-center justify-center mb-2">
              <FileText className="w-8 h-8 text-curiosity-coral" />
            </div>
            <span className="text-gray-900 font-bold mb-2">Detailed Logs</span>
            <span className="text-gray-900 text-sm text-center">Provides detailed logs of all interactions.</span>
          </div>
          <div className="bg-growth-green/10 rounded-xl p-4 shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-growth-green/20 rounded-2xl flex items-center justify-center mb-2">
              <Users className="w-8 h-8 text-growth-green" />
            </div>
            <span className="text-gray-900 font-bold mb-2">Human Oversight</span>
            <span className="text-gray-900 text-sm text-center">Maintains human oversight with teacher intervention capabilities.</span>
          </div>
          <div className="bg-grit-gold/10 rounded-xl p-4 shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-grit-gold/20 rounded-2xl flex items-center justify-center mb-2">
              <BookOpen className="w-8 h-8 text-grit-gold" />
            </div>
            <span className="text-gray-900 font-bold mb-2">Curriculum Standards</span>
            <span className="text-gray-900 text-sm text-center">Follows curriculum standards and educational best practices.</span>
          </div>
          <div className="bg-mentra-blue/10 rounded-xl p-4 shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-mentra-blue/20 rounded-2xl flex items-center justify-center mb-2">
              <Star className="w-8 h-8 text-mentra-blue" />
            </div>
            <span className="text-gray-900 font-bold mb-2">Continuous Improvement</span>
            <span className="text-gray-900 text-sm text-center">Continuously learns and improves while protecting student privacy.</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Parental Control & Oversight',
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Parental Control & Oversight</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-mentra-blue/10 rounded-xl p-4 shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-mentra-blue/20 rounded-2xl flex items-center justify-center mb-2">
              <UserCheck className="w-8 h-8 text-mentra-blue" />
            </div>
            <span className="text-gray-900 font-bold mb-2">Opt-in/Opt-out</span>
            <span className="text-gray-900 text-sm text-center">Opt-in/opt-out capabilities for AI tutoring features.</span>
          </div>
          <div className="bg-curiosity-coral/10 rounded-xl p-4 shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-curiosity-coral/20 rounded-2xl flex items-center justify-center mb-2">
              <BarChart3 className="w-8 h-8 text-curiosity-coral" />
            </div>
            <span className="text-gray-900 font-bold mb-2">Progress Reports</span>
            <span className="text-gray-900 text-sm text-center">Access to detailed progress reports and interaction logs.</span>
          </div>
          <div className="bg-growth-green/10 rounded-xl p-4 shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-growth-green/20 rounded-2xl flex items-center justify-center mb-2">
              <Mail className="w-8 h-8 text-growth-green" />
            </div>
            <span className="text-gray-900 font-bold mb-2">Communication</span>
            <span className="text-gray-900 text-sm text-center">Regular communication updates about learning activities.</span>
          </div>
          <div className="bg-grit-gold/10 rounded-xl p-4 shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-grit-gold/20 rounded-2xl flex items-center justify-center mb-2">
              <Trash2 className="w-8 h-8 text-grit-gold" />
            </div>
            <span className="text-gray-900 font-bold mb-2">Data Review & Delete</span>
            <span className="text-gray-900 text-sm text-center">Ability to review and delete collected data.</span>
          </div>
          <div className="bg-mentra-blue/10 rounded-xl p-4 shadow flex flex-col items-center">
            <div className="w-16 h-16 bg-mentra-blue/20 rounded-2xl flex items-center justify-center mb-2">
              <Users className="w-8 h-8 text-mentra-blue" />
            </div>
            <span className="text-gray-900 font-bold mb-2">Direct Contact</span>
            <span className="text-gray-900 text-sm text-center">Direct contact with teachers and support staff.</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Parents() {
  const [selectedTab, setSelectedTab] = useState(tabData[0].label);
  return (
    <div className="min-h-screen font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col">
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col items-center py-12 px-4 font-rounded">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          For <span className="text-mentra-blue">Parents</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 text-center max-w-2xl">
          Understanding how Mentra protects your child's privacy while providing effective AI tutoring support.
        </p>
        <section className="container mx-auto px-4 mb-10 sm:mb-12">
          {/* Mobile Dropdown Selector */}
          <select
            className="block w-full rounded-lg border-none p-4 mb-6 sm:hidden bg-gray-100 text-gray-900 font-bold text-lg focus:ring-2 focus:ring-gray-900 focus:outline-none shadow min-h-[56px]"
            value={selectedTab}
            onChange={e => setSelectedTab(e.target.value)}
            aria-label="Select section"
          >
            {tabData.map(tab => (
              <option key={tab.label} value={tab.label} className="font-bold text-mentra-blue bg-white text-lg">
                {tab.label}
              </option>
            ))}
          </select>
          {/* Desktop Tabs */}
          <Tabs defaultValue={selectedTab} value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="hidden sm:flex w-full bg-blue-50 rounded-lg p-1 gap-1">
              {tabData.map(tab => (
                <TabsTrigger
                  key={tab.label}
                  value={tab.label}
                  className="flex-1 min-w-0 px-3 py-2 text-sm font-medium rounded-md border border-blue-100 transition-colors bg-white text-mentra-blue data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-blue-600 data-[state=active]:shadow focus:outline-none focus:ring-2 focus:ring-mentra-blue"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabData.map(tab => (
              <TabsContent key={tab.label} value={tab.label} className="">
                {selectedTab === tab.label && tab.content}
              </TabsContent>
            ))}
          </Tabs>
        </section>
        {/* CTA and Contact Form - moved inside main */}
        <section className="container mx-auto px-4 bg-white/90 rounded-2xl shadow-xl p-4 sm:p-8 flex flex-col items-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-2">Have questions about <span className="text-mentra-blue">student privacy</span> or want to talk to our team?</h2>
          <p className="text-gray-700 mb-4 sm:mb-6 text-center">Schedule a call with our team today.</p>
          <form id="parents-contact-form" action="https://formspree.io/f/meokybnp" method="POST" className="w-full space-y-3 sm:space-y-4">
            <input type="text" name="name" required placeholder="Name" className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-mentra-blue focus:border-mentra-blue text-base" aria-label="Name" />
            <input type="email" name="email" required placeholder="Email" className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-mentra-blue focus:border-mentra-blue text-base" aria-label="Email" />
            <input type="tel" name="phone" required placeholder="Phone Number" className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-mentra-blue focus:border-mentra-blue text-base" aria-label="Phone Number" />
            <textarea id="parents-notes" name="notes" placeholder="Additional Notes (optional)" className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-mentra-blue focus:border-mentra-blue min-h-[80px] text-base" aria-label="Additional Notes" />
            <input type="hidden" name="context" value="Sent from the parents page" />
            <button type="submit" className="w-full bg-mentra-blue text-white font-semibold py-2 rounded hover:bg-mentra-blue/90 transition text-base">Schedule Call</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
} 