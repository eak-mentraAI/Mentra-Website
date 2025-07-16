import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Brain, Users, Star, Heart, Laptop2 } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col items-center py-12 px-4 font-rounded">
        {/* Hero Section */}
        <section className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 mb-20">
          <OptimizedImage
            src="/edward-kerr.jpg"
            alt="Edward Kerr, Founder of Mentra"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg border-4 border-journal-sand"
            sizes="(max-width: 768px) 16rem, 16rem"
          />
          <div className="flex-1 text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why We Built Mentra</h1>
            <p className="text-xl text-gray-700 mb-2">
              Hi, I'm Edward Kerr—technologist, father, and founder. Mentra is my response to a world where AI is changing everything, including what it means to learn and succeed.
            </p>
            <p className="text-lg text-gray-500">
              As a dad to Grace, Hope, and Joy, I want to build a future where every child can thrive—no matter how the world changes.
            </p>
          </div>
        </section>

        {/* Vision & Origin Story - For Parents & Educators */}
        <section className="container mx-auto px-4 mb-16 text-left">
          <h2 className="text-2xl font-bold text-mentra-blue mb-4 tracking-tight">A Vision for Growth—For Every Child</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <b>For parents and educators:</b> The world is changing fast. AI is rewriting what it means to succeed in school and life. Mentra was created to help your children and students not just keep up, but grow into thoughtful, resilient, and adaptable humans—no matter how the world changes.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We believe in amplifying the human journey—using AI to deepen reflection, resilience, and individualized support, while keeping teachers and families at the center of learning.
          </p>
        </section>

        {/* Problem Space - For All Personas */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-2xl font-bold text-mentra-blue mb-8 tracking-tight text-left">The Challenge We Solve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
            {/* Institutional Adaptation Card */}
            <Card className="bg-mentra-blue/10 border-0 shadow-xl min-h-[320px] flex flex-col">
              <CardHeader className="flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-mentra-blue/20 rounded-2xl flex items-center justify-center mb-2">
                  <Brain className="w-8 h-8 text-mentra-blue" />
                </div>
                <CardTitle className="text-center text-xl font-bold">Bridging the Adaptation Gap</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-700">
                Institutions can't keep pace with AI's rapid evolution—risking a lost generation. We map trends and release targeted features to help students, parents, and educators adapt and thrive.
              </CardContent>
            </Card>
            {/* Timeless Skills Card */}
            <Card className="bg-curiosity-coral/10 border-0 shadow-xl min-h-[320px] flex flex-col">
              <CardHeader className="flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-curiosity-coral/20 rounded-2xl flex items-center justify-center mb-2">
                  <Star className="w-8 h-8 text-curiosity-coral" />
                </div>
                <CardTitle className="text-center text-xl font-bold">Developing Timeless Skills</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-700">
                As AI reshapes the workforce, we focus on critical thinking, creative problem solving, self-regulation, and media literacy—skills that remain valuable no matter how technology changes.
              </CardContent>
            </Card>
            {/* Orchestrators & Understanding Card */}
            <Card className="bg-growth-green/10 border-0 shadow-xl min-h-[320px] flex flex-col">
              <CardHeader className="flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-growth-green/20 rounded-2xl flex items-center justify-center mb-2">
                  <Users className="w-8 h-8 text-growth-green" />
                </div>
                <CardTitle className="text-center text-xl font-bold">From Doers to Orchestrators</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-700">
                We help students become orchestrators of AI—designing workflows, not just completing tasks. Our AI is grounded in pedagogical approaches like Socratic scaffolding to ensure true understanding, not just output.
              </CardContent>
            </Card>
            {/* Motivation & Citizenship Card */}
            <Card className="bg-grit-gold/10 border-0 shadow-xl min-h-[320px] flex flex-col">
              <CardHeader className="flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-grit-gold/20 rounded-2xl flex items-center justify-center mb-2">
                  <Heart className="w-8 h-8 text-grit-gold" />
                </div>
                <CardTitle className="text-center text-xl font-bold">Fostering Intrinsic Motivation</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-700">
                As AI automates more work, we help students find purpose beyond grades—cultivating a renaissance mindset and responsible citizenship for a world where growth is self-driven.
              </CardContent>
            </Card>
            {/* Deep Learning & Reflection Card */}
            <Card className="bg-wisdom-purple/10 border-0 shadow-xl min-h-[320px] flex flex-col">
              <CardHeader className="flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-wisdom-purple/20 rounded-2xl flex items-center justify-center mb-2">
                  <Laptop2 className="w-8 h-8 text-wisdom-purple" />
                </div>
                <CardTitle className="text-center text-xl font-bold">Grounded, Reflective Learning</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-700">
                Our AI never just gives answers. We use evidence-based, Socratic methods to guide students toward understanding, reflection, and lifelong learning.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Trends + Opportunity - For Policy/Legal & Visionaries */}
        <section className="container mx-auto px-4 mb-16 text-left">
          <h2 className="text-2xl font-bold text-mentra-blue mb-4 tracking-tight">Why This Moment Matters</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            AI is transforming work, learning, and society. The definition of value is shifting from what you know to how you think, adapt, and connect. This is a generational opportunity to build tools that shape emotionally intelligent, adaptable young people—not just task-completers.
          </p>
        </section>

        {/* Why Now - For All */}
        <section className="container mx-auto px-4 mb-16 text-left">
          <h2 className="text-2xl font-bold text-mentra-blue mb-4 tracking-tight">Why Now?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            If we don't act, we risk raising a generation that meets all the requirements but misses the real development needed to thrive in a post-AI world. Education is a pillar of democracy, innovation, and opportunity. Mentra is here to help you protect and evolve that pillar.
          </p>
        </section>

        {/* Unique Insight + Advantage - For All Personas */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-2xl font-bold text-mentra-blue mb-8 tracking-tight text-left">Who We Are</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Parents Card */}
            <Card className="bg-mentra-blue/10 border-0 shadow-xl">
              <CardHeader className="flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-mentra-blue/20 rounded-2xl flex items-center justify-center mb-2">
                  <Users className="w-8 h-8 text-mentra-blue" />
                </div>
                <CardTitle className="text-center text-xl font-bold">Parents</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-700">
                We feel the urgency firsthand and want to empower the next generation to thrive.
              </CardContent>
            </Card>
            {/* Educators Card */}
            <Card className="bg-growth-green/10 border-0 shadow-xl">
              <CardHeader className="flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-growth-green/20 rounded-2xl flex items-center justify-center mb-2">
                  <Star className="w-8 h-8 text-growth-green" />
                </div>
                <CardTitle className="text-center text-xl font-bold">Educators</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-700">
                We see the classroom as a community and champion whole-child learning.
              </CardContent>
            </Card>
            {/* Technologists Card */}
            <Card className="bg-wisdom-purple/10 border-0 shadow-xl">
              <CardHeader className="flex flex-col items-center justify-center">
                <div className="w-14 h-14 bg-wisdom-purple/20 rounded-2xl flex items-center justify-center mb-2">
                  <Laptop2 className="w-8 h-8 text-wisdom-purple" />
                </div>
                <CardTitle className="text-center text-xl font-bold">Technologists</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-700">
                We design the architecture of the future—tools that serve humanity, not just efficiency.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Product + Business Trajectory - For All Personas */}
        <section className="container mx-auto px-4 mb-16 text-left">
          <h2 className="text-2xl font-bold text-mentra-blue mb-4 tracking-tight">Our Roadmap: Adapting for the Future, Together</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            AI is evolving at breakneck speed. Our roadmap isn't just a list of features—it's a living strategy, shaped by evidence, research, and the real needs of students, parents, and educators.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 ml-4 space-y-2">
            <li><b>Evidence-Based Foresight:</b> We continuously map AI trends and educational research to anticipate what's next—so you're always prepared, not left behind.</li>
            <li><b>Targeted Feature Releases:</b> Every new tool or experience we launch is designed to address a specific, emerging challenge—whether it's developing timeless skills, orchestrating AI agents, or fostering intrinsic motivation.</li>
            <li><b>Timeless Skills, Not Just Tech:</b> We prioritize features that help students build critical thinking, creative problem solving, self-regulation, and media literacy—skills that will matter no matter how AI evolves.</li>
            <li><b>Orchestrator Experiences:</b> We're introducing student experiences that go beyond 'doing'—helping learners design, direct, and orchestrate AI workflows for the real world.</li>
            <li><b>Pedagogical Integrity:</b> All our AI is grounded in proven educational methods, like Socratic scaffolding, to ensure students don't just get answers—they learn how to think, reflect, and grow.</li>
            <li><b>A Human-Centered Future:</b> As AI takes on more, we're committed to nurturing a generation motivated by curiosity, purpose, and responsible citizenship—not just grades or productivity.</li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our roadmap is your roadmap. As the world changes, we'll keep you, your students, and your family ahead of the curve—empowered, adaptable, and ready for whatever comes next.
          </p>
        </section>

        {/* Personal Note */}
        <section className="container mx-auto px-4 mb-12 text-left">
          <p className="italic text-gray-600 mb-2">Thank you for joining us on this journey.</p>
          <p className="font-bold text-gray-900">Edward Kerr<br/>Founder, Mentra</p>
        </section>
      </main>
      <Footer />
    </>
  );
} 