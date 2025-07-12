import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BookOpen, FileText, Sparkles, Users, BarChart3, Star, Heart, Settings2, ShieldCheck, Eye } from 'lucide-react';

const tabData = [
  {
    label: 'Pedagogical Effectiveness',
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Socratic AI Enhances Teaching</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-white/80 rounded-xl p-4 shadow flex flex-col items-center">
            <Sparkles className="w-8 h-8 text-mentra-blue mb-2" />
            <span className="text-mentra-blue font-bold mb-2">Critical Thinking Development</span>
            <span className="text-gray-700 text-sm">AI guides students through questions rather than providing direct answers, fostering deeper understanding.</span>
          </div>
          <div className="bg-white/80 rounded-xl p-4 shadow flex flex-col items-center">
            <BookOpen className="w-8 h-8 text-mentra-blue mb-2" />
            <span className="text-mentra-blue font-bold mb-2">Personalized Learning Paths</span>
            <span className="text-gray-700 text-sm">Adapts to individual student needs while maintaining curriculum standards.</span>
          </div>
          <div className="bg-white/80 rounded-xl p-4 shadow flex flex-col items-center">
            <Heart className="w-8 h-8 text-mentra-blue mb-2" />
            <span className="text-mentra-blue font-bold mb-2">Enhanced Student Engagement</span>
            <span className="text-gray-700 text-sm">Interactive dialogues keep students actively participating in their learning journey.</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Professional Control',
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">You Remain in Control</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-white/80 rounded-xl p-4 shadow flex flex-col items-center">
            <Eye className="w-8 h-8 text-mentra-blue mb-2" />
            <span className="text-mentra-blue font-bold mb-2">Real-time Oversight</span>
            <span className="text-gray-700 text-sm">Monitor all student-AI interactions with detailed progress insights and intervention alerts.</span>
          </div>
          <div className="bg-white/80 rounded-xl p-4 shadow flex flex-col items-center">
            <Settings2 className="w-8 h-8 text-mentra-blue mb-2" />
            <span className="text-mentra-blue font-bold mb-2">Customizable Parameters</span>
            <span className="text-gray-700 text-sm">Set learning objectives, difficulty levels, and content boundaries to match your teaching goals.</span>
          </div>
          <div className="bg-white/80 rounded-xl p-4 shadow flex flex-col items-center">
            <Users className="w-8 h-8 text-mentra-blue mb-2" />
            <span className="text-mentra-blue font-bold mb-2">Seamless Intervention</span>
            <span className="text-gray-700 text-sm">Step into conversations at any time with full context and conversation history.</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Curriculum Integration',
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Seamless Curriculum Integration</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-white/80 rounded-xl p-4 shadow flex flex-col items-center">
            <BookOpen className="w-8 h-8 text-mentra-blue mb-2" />
            <span className="text-mentra-blue font-bold mb-2">Aligned Standards</span>
            <span className="text-gray-700 text-sm text-center">Aligns with state and national curriculum standards.</span>
          </div>
          <div className="bg-white/80 rounded-xl p-4 shadow flex flex-col items-center">
            <Settings2 className="w-8 h-8 text-mentra-blue mb-2" />
            <span className="text-mentra-blue font-bold mb-2">LMS Integration</span>
            <span className="text-gray-700 text-sm text-center">Integrates with popular LMS platforms.</span>
          </div>
          <div className="bg-white/80 rounded-xl p-4 shadow flex flex-col items-center">
            <Sparkles className="w-8 h-8 text-mentra-blue mb-2" />
            <span className="text-mentra-blue font-bold mb-2">Differentiated Instruction</span>
            <span className="text-gray-700 text-sm text-center">Supports differentiated instruction strategies.</span>
          </div>
          <div className="bg-white/80 rounded-xl p-4 shadow flex flex-col items-center">
            <BarChart3 className="w-8 h-8 text-mentra-blue mb-2" />
            <span className="text-mentra-blue font-bold mb-2">Assessment Data</span>
            <span className="text-gray-700 text-sm text-center">Provides detailed assessment data.</span>
          </div>
          <div className="bg-white/80 rounded-xl p-4 shadow flex flex-col items-center">
            <Users className="w-8 h-8 text-mentra-blue mb-2" />
            <span className="text-mentra-blue font-bold mb-2">Professional Resources</span>
            <span className="text-gray-700 text-sm text-center">Offers professional development resources.</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Example Interaction',
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">See Socratic AI in Action</h2>
        <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-4">
          <div className="flex items-start gap-3 justify-end ml-4">
            <div className="bg-gray-100 text-gray-700 rounded-lg px-4 py-2 max-w-[80vw] sm:max-w-lg italic text-right">
              "I'm not sure how to solve this. Should I just add the numbers together?"
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src="/lovable-uploads/060630a8-ed64-4d31-8e7b-c1c12d2b6e6e.png" alt="Sprig AI" className="w-8 h-8" />
            <div className="bg-red-100 text-red-700 rounded-lg px-4 py-2 max-w-[80vw] sm:max-w-lg">
              "That's a good question! Before we decide, what is the problem asking you to find?"
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end ml-4">
            <div className="bg-gray-100 text-gray-700 rounded-lg px-4 py-2 max-w-[80vw] sm:max-w-lg italic text-right">
              "It wants me to find the area of the rectangle."
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src="/lovable-uploads/060630a8-ed64-4d31-8e7b-c1c12d2b6e6e.png" alt="Sprig AI" className="w-8 h-8" />
            <div className="bg-blue-100 text-mentra-blue rounded-lg px-4 py-2 max-w-[80vw] sm:max-w-lg">
              "Exactly! What do you know about finding the area of a rectangle?"
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end ml-4">
            <div className="bg-gray-100 text-gray-700 rounded-lg px-4 py-2 max-w-[80vw] sm:max-w-lg italic text-right">
              "I think you multiply the sides, but I'm not sure why."
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src="/lovable-uploads/060630a8-ed64-4d31-8e7b-c1c12d2b6e6e.png" alt="Sprig AI" className="w-8 h-8" />
            <div className="bg-green-100 text-green-700 rounded-lg px-4 py-2 max-w-[80vw] sm:max-w-lg">
              "That's a great start! Next let's think through why multiplying the sides gives you the area—what does a side of a rectangle represent?"
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Educators() {
  const [selectedTab, setSelectedTab] = useState(tabData[0].label);
  return (
    <div className="min-h-screen font-rounded bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center py-8 px-2 sm:py-12 sm:px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          For <span className="text-mentra-blue">Educators</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 text-center max-w-2xl">
          Discover how Mentra enhances your teaching while maintaining professional control and pedagogical excellence.
        </p>
        <section className="w-full max-w-4xl mx-auto mb-10 sm:mb-12">
          {/* Mobile Dropdown Selector */}
          <select
            className="block w-full rounded-lg border-none p-4 mb-6 sm:hidden bg-blue-50 text-mentra-blue font-bold text-lg focus:ring-2 focus:ring-mentra-blue focus:outline-none shadow min-h-[56px]"
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
        {/* CTA and Contact Form */}
        <section className="w-full max-w-xl mx-auto bg-white/90 rounded-2xl shadow-xl p-4 sm:p-8 flex flex-col items-center mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-2">Are you ready to take the next step in <span className="text-mentra-blue">AI assisted learning</span>?</h2>
          <p className="text-gray-700 mb-4 sm:mb-6 text-center">Schedule a call with our team today.</p>
          <form action="https://formspree.io/f/meokybnp" method="POST" className="w-full space-y-3 sm:space-y-4">
            <input type="text" name="name" required placeholder="Name" className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-mentra-blue focus:border-mentra-blue text-base" aria-label="Name" />
            <input type="email" name="email" required placeholder="Email" className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-mentra-blue focus:border-mentra-blue text-base" aria-label="Email" />
            <input type="tel" name="phone" required placeholder="Phone Number" className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-mentra-blue focus:border-mentra-blue text-base" aria-label="Phone Number" />
            <textarea name="notes" placeholder="Additional Notes (optional)" className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-mentra-blue focus:border-mentra-blue min-h-[80px] text-base" aria-label="Additional Notes" />
            <input type="hidden" name="context" value="Sent from the educators page" />
            <button type="submit" className="w-full bg-mentra-blue text-white font-semibold py-2 rounded hover:bg-mentra-blue/90 transition text-base">Schedule Call</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
} 