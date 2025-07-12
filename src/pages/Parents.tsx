import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const tabData = [
  {
    label: 'Student Data Privacy',
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Student Data Privacy</h2>
        <div className="bg-white/80 rounded-xl p-4 shadow flex flex-col items-start">
          <span className="text-gray-700 text-base">We collect only essential learning data to provide personalized tutoring.</span>
        </div>
      </div>
    ),
  },
  {
    label: 'FERPA & COPPA Compliance',
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">FERPA & COPPA Compliance</h2>
        <div className="bg-white/80 rounded-xl p-4 shadow flex flex-col items-start">
          <span className="text-gray-700 text-base">Educational records are protected according to federal privacy law requirements.</span>
        </div>
      </div>
    ),
  },
  {
    label: 'Transparency in AI Operations',
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Transparency in AI Operations</h2>
        <div className="bg-white/80 rounded-xl p-4 shadow flex flex-col items-start">
          <span className="text-gray-700 text-base">Our AI tutoring system operates transparently and maintains human oversight.</span>
        </div>
      </div>
    ),
  },
  {
    label: 'Parental Control & Oversight',
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Parental Control & Oversight</h2>
        <div className="bg-white/80 rounded-xl p-4 shadow flex flex-col items-start">
          <span className="text-gray-700 text-base">You maintain control over your child's AI tutoring experience.</span>
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
      <main className="flex-1 flex flex-col items-center py-8 px-2 sm:py-12 sm:px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          For <span className="text-mentra-blue">Parents</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 text-center max-w-2xl">
          Understanding how Mentra protects your child's privacy while providing effective AI tutoring support.
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
            <TabsList className="hidden sm:flex overflow-x-auto whitespace-nowrap bg-blue-50 rounded-lg p-1 scrollbar-hide">
              {tabData.map(tab => (
                <TabsTrigger
                  key={tab.label}
                  value={tab.label}
                  className="mx-1 min-w-[150px] px-5 py-2 text-sm font-semibold rounded-full border border-blue-200 transition-colors bg-white text-mentra-blue data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-blue-600 data-[state=active]:shadow focus:outline-none focus:ring-2 focus:ring-mentra-blue"
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
      </main>
      <Footer />
    </div>
  );
} 