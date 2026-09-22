import React from "react";
import { Sidebar } from "./components/layout/Sidebar";
import { MobileHeader } from "./components/layout/MobileHeader";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Certificates } from "./components/sections/Certificates";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { useActiveSection } from "./hooks/useActiveSection";

function App() {
  const sectionIds = ["hero", "about", "skills", "certificates", "experience", "contact"];
  const activeSection = useActiveSection(sectionIds, 150);

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-200 selection:bg-cyan-500 selection:text-white">
      {/* Subtle Dot Grid Background */}
      <div className="fixed inset-0 pointer-events-none dot-grid opacity-30 z-0"></div>

      {/* Ambient Lighting Orbs */}
      <div className="fixed top-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="fixed bottom-1/4 left-1/3 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[160px] pointer-events-none z-0"></div>

      {/* Desktop Fixed Left Sidebar */}
      <Sidebar activeSection={activeSection} />

      {/* Mobile Top Header */}
      <MobileHeader activeSection={activeSection} />

      {/* Main Content Area */}
      <div className="relative z-10 lg:pl-64 transition-all">
        <main className="mx-auto max-w-5xl px-4 sm:px-8 md:px-12 lg:px-16 pt-2 pb-16">
          <Hero />
          <About />
          <Skills />
          <Certificates />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;