import React from 'react';
import Header from '../components/Header';
import '../App.css';

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-journal-sand via-white to-wisdom-purple/10 flex flex-col items-center py-12 px-4 font-rounded">
        {/* Hero Section */}
        <section className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 mb-20">
          <img
            src="/edward-kerr.jpg"
            alt="Edward Kerr, Founder of Mentra"
            className="w-64 h-64 object-cover rounded-2xl shadow-xl border-4 border-white"
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

        {/* Vision & Origin Story */}
        <section className="container mx-auto px-4 mb-16 text-left">
          <h2 className="text-2xl font-bold text-mentra-blue mb-4 tracking-tight">Mentra Strategic Vision</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            As a technologist developing AI solutions, I see a future where productivity shifts increasingly from humans to AI. This transition threatens the foundation of the long-standing social contract: go to school, get good grades, get a good job. That promise feels fragile in the world my daughters—Grace, Hope, and Joy—are inheriting.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            As a father, I fear we're on the brink of raising a "lost generation" of children who couldn't adapt in time—not because they lacked talent, but because we failed to evolve the system fast enough. My response to this is Mentra—a product that ensures students can still succeed even as society redefines success. Whether society continues to prize grades or pivots toward deeper human skills, Mentra supports both: helping students earn good grades through meaningful effort and scaffolding, while also nurturing the kind of growth that transcends test scores.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <b>Mentra exists to amplify the human journey</b>—using AI to deepen reflection, resilience, and individualized support—without replacing the teacher or undermining the student's agency.
          </p>
        </section>

        {/* Problem Space */}
        <section className="container mx-auto px-4 mb-16 text-left">
          <h2 className="text-2xl font-bold text-mentra-blue mb-4 tracking-tight">The Problem We're Solving</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Students today are using AI to secure outcomes—a completed essay, a finished assignment—but are missing the true value of learning: <b>critical thinking, media literacy, self-regulation, and creative synthesis</b>. Meanwhile, teachers are under-resourced and stuck in outdated systems, while parents are too often disconnected from their child's learning journey.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In addition, parents are overwhelmed. Many of today's tools to keep parents connected inundate them with notifications about trivial items that don't add value beyond the in-person interactions they already have with their children. Instead of enhancing their understanding, these tools often add to the mental noise.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <b>There are no organic incentives to prioritize the process over the product.</b> Everyone is chasing grades, not growth. The education system still rewards completion and correctness, even as AI makes both increasingly effortless. We risk raising a generation that meets all the traditional requirements but misses the actual development needed to thrive in a post-AI world. Mentra isn't about disrupting those systems for the sake of it—it's about preserving their spirit while evolving their function.
          </p>
        </section>

        {/* Trends + Opportunity */}
        <section className="container mx-auto px-4 mb-16 text-left">
          <h2 className="text-2xl font-bold text-mentra-blue mb-4 tracking-tight">Why This Moment Matters</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            AI is advancing faster than any prior technology—and it is rapidly taking over both intellectual and physical labor domains. Students are coasting through school with generative tools. Teachers are overwhelmed. The education system is struggling to adapt.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Meanwhile, productivity is no longer human-bound. AI agents are outperforming entry-level knowledge workers. Robotics is catching up in physical domains. The very definition of "value" in the economy is changing. <b>This creates a generational opportunity:</b>
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
            <li>Build AI-native learning tools that shape emotionally intelligent, adaptable young people—not just task-completers.</li>
            <li>Help students succeed in traditional metrics, but also prepare them for what comes next.</li>
          </ul>
        </section>

        {/* Timing + Urgency */}
        <section className="container mx-auto px-4 mb-16 text-left">
          <h2 className="text-2xl font-bold text-mentra-blue mb-4 tracking-tight">Why Now</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            If we don't act now, we'll lose a generation of learners to misaligned incentives and technological shortcuts. These students will follow the path we laid out for them, only to discover the promise is gone. That creates disillusionment, systemic distrust, and eventually—social instability.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <b>Education is not just a personal pursuit.</b> It is a pillar of democracy, innovation, and opportunity. If we lose this moment, we risk unraveling more than individual futures. We risk the infrastructure of modern society.
          </p>
        </section>

        {/* Unique Insight + Advantage */}
        <section className="container mx-auto px-4 mb-16 text-left">
          <h2 className="text-2xl font-bold text-mentra-blue mb-4 tracking-tight">Why We're Different</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We are not another edtech company. We are:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
            <li><b>Concerned parents</b> who feel the urgency firsthand</li>
            <li><b>Technologists</b> who understand the architecture of the future</li>
            <li><b>Educators and people leaders</b> who see the classroom not as a commodity, but as a community</li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We know how to connect the key personas—students, parents, teachers—and guide them through this AI transition with empathy and technical precision.
          </p>
        </section>

        {/* Product + Business Trajectory */}
        <section className="container mx-auto px-4 mb-16 text-left">
          <h2 className="text-2xl font-bold text-mentra-blue mb-4 tracking-tight">Our Roadmap</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We are building an AI-native platform that:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
            <li>Connects educators, students (K–12), and parents into a shared, role-based learning environment</li>
            <li>Uses adaptive journaling and assignment-linked prompts to extract meaning from the learning journey</li>
            <li>Grows with students as they grow, learning from their inputs and becoming more tailored over time</li>
            <li>Preserves privacy and builds trust while giving teachers visibility and parents confidence</li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed">
            From kindergarten to the workforce, students won't just learn with Mentra—they'll grow up with it. In early years, Mentra may guide students visually or via voice, adapting to literacy levels. As students mature, the structure of journaling and support evolves, becoming more complex, reflective, and student-led.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            And one day, that growth companion—the student's personal learning AI—can graduate with them. It becomes a lifelong agent of reflection, planning, and self-direction. Becoming things like personal assistants, professional assistants, or higher education companions.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Whether grades remain central or society reorients its measures of success, Mentra ensures students don't miss out. If grades still matter, students earn them the right way—by engaging in real learning. If the system shifts, Mentra is there to support that transition too.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <b>That's our vision:</b> A learning system as intelligent, empathetic, and growth-focused as the humans it's meant to support.
          </p>
        </section>

        {/* Personal Note */}
        <section className="container mx-auto px-4 mb-12 text-left">
          <p className="italic text-gray-600 mb-2">Thank you for joining us on this journey.</p>
          <p className="font-bold text-gray-900">Edward Kerr<br/>Founder, Mentra</p>
        </section>
      </main>
    </>
  );
} 