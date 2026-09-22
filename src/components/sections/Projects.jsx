import React, { useState } from "react";
import { projects } from "../../data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { PhoneFrame } from "../ui/PhoneFrame";
import { BrowserFrame } from "../ui/BrowserFrame";
import { LightboxModal } from "../ui/LightboxModal";
import { Smartphone, Monitor, CheckCircle, ExternalLink, Code2, Sparkles } from "lucide-react";

export function Projects() {
  const [filter, setFilter] = useState("all");
  const [activeModalData, setActiveModalData] = useState(null);

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <section id="experience" className="py-14 border-t border-slate-800/80">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
        <SectionHeader 
          number="04" 
          title="experience & projects" 
          subtitle="Featured client systems, mobile applications, and interactive web software."
        />

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 font-mono text-xs bg-slate-900/80 p-1 rounded-xl border border-slate-800 self-start sm:self-auto mb-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              filter === "all" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
            }`}
          >
            All ({projects.length})
          </button>
          <button
            onClick={() => setFilter("mobile")}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              filter === "mobile" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile</span>
          </button>
          <button
            onClick={() => setFilter("web")}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              filter === "web" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Web</span>
          </button>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group relative rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-[#0c111d] p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:border-slate-700"
          >
            {/* Top Meta Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-0.5 rounded-full">
                  Project {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  {project.role}
                </span>
              </div>

              <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                {project.badge}
              </span>
            </div>

            {/* Mockups Display Area matching Figma layout */}
            <div className="my-6 py-4 px-2 sm:px-4 rounded-2xl bg-slate-950/60 border border-slate-800/60 overflow-hidden">
              {project.deviceType === "phone" ? (
                /* 4-Phone Grid for Mobile Apps */
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center items-center py-2">
                  {project.screens.map((screen, sIdx) => (
                    <PhoneFrame
                      key={sIdx}
                      screen={screen}
                      onClick={() => setActiveModalData({
                        title: `${project.title} — ${screen.label}`,
                        description: `Screen showcase for ${screen.label} in ${project.title}. Built with ${project.tools.join(", ")}.`,
                        tags: project.tools
                      })}
                    />
                  ))}
                </div>
              ) : (
                /* Multi-Window Grid for Desktop Web Applications */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch py-2">
                  {project.screens.map((screen, sIdx) => (
                    <BrowserFrame
                      key={sIdx}
                      screen={screen}
                      onClick={() => setActiveModalData({
                        title: `${project.title} — ${screen.label}`,
                        description: `Desktop viewport view for ${screen.label}. Implemented with ${project.tools.join(", ")}.`,
                        tags: project.tools
                      })}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="mt-6">
              <h3 className="font-mono text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-400">
                {project.description}
              </p>

              {/* Bullet Highlights */}
              <div className="mt-4 space-y-1.5">
                {project.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-slate-500 mr-2">Tools:</span>
                {project.tools.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Screen Lightbox */}
      <LightboxModal
        isOpen={!!activeModalData}
        onClose={() => setActiveModalData(null)}
        title={activeModalData?.title}
        details={activeModalData}
      />
    </section>
  );
}
