import React, { useState } from "react";
import { Sidebar } from "./components/layout/Sidebar";
import { MobileHeader } from "./components/layout/MobileHeader";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Certificates } from "./components/sections/Certificates";
import { Projects } from "./components/sections/Projects";
import { AllProjectsPage } from "./components/sections/AllProjectsPage";
import { Contact } from "./components/sections/Contact";
import { Recommendations } from "./components/sections/Recommendations";
import { GithubSection } from "./components/sections/Github";
import { useActiveSection } from "./hooks/useActiveSection";
import { InteractiveBackground } from "./components/ui/InteractiveBackground";
import { useSoundEffects } from "./utils/soundEffects";

const sectionIds = ["hero", "about", "skills", "certificates", "experience", "recommendations", "github", "contact"];

function App() {
  const [viewState, setViewState] = useState("main"); // "main" | "all-projects"
  const scrollActiveSection = useActiveSection(sectionIds, 150);
  const { handleMouseOver, handleMouseOut, handleClick, isMuted, toggleMute, } = useSoundEffects();


  // If in all-projects view, keep "experience" highlighted in navbar
  const activeSection = viewState === "all-projects" ? "experience" : scrollActiveSection;

  const handleViewAllProjects = () => {
    setViewState("all-projects");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToMain = () => {
    setViewState("main");
  };

  return (
    <div
      className="min-h-screen bg-[#0b0f17] text-slate-200 selection:bg-cyan-500 selection:text-white"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      {/* Interactive Canvas Background */}
      <InteractiveBackground />

      {/* Ambient Lighting Orbs */}
      <div className="fixed top-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="fixed bottom-1/4 left-1/3 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[160px] pointer-events-none z-0"></div>

      {/* Desktop Fixed Left Sidebar */}
      <Sidebar
        activeSection={activeSection}
        onNavClick={() => setViewState("main")}
        isMuted={isMuted}
        toggleMute={toggleMute}
      />

      {/* Mobile Top Header */}
      <MobileHeader
        activeSection={activeSection}
        onNavClick={() => setViewState("main")}
      />

      {/* Main Content Area */}
      <div className="relative z-10 lg:pl-64 transition-all">
        <main className="mx-auto max-w-5xl px-4 sm:px-8 md:px-12 lg:px-16 pt-2 pb-16">
          {viewState === "all-projects" ? (
            <div>
              <div className="pt-4 pb-2">
                <button
                  onClick={handleBackToMain}
                  className="font-mono text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                >
                  ← Back to main
                </button>
              </div>
              <AllProjectsPage onBack={handleBackToMain} />
              <Footer />
            </div>
          ) : (
            <>
              <Hero />
              <About />
              <Skills />
              <Certificates />
              <Projects onViewAll={handleViewAllProjects} />
              <Recommendations />
              <GithubSection />
              <Contact />
              <Footer />
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;