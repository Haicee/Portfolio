import React, { useState } from "react";
import { projects } from "../../data/portfolioData";
import { PhoneFrame } from "../ui/PhoneFrame";
import { BrowserFrame } from "../ui/BrowserFrame";
import { LightboxModal } from "../ui/LightboxModal";
import { ExternalLink, ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { GithubIcon } from "../ui/SocialIcons";

export function AllProjectsPage({ onBack }) {
  const [filter, setFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalData, setActiveModalData] = useState(null);

  const categories = ["ALL", "WEB", "MOBILE"];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "ALL" || project.category === filter || project.type === filter.toLowerCase();
    const matchesSearch = searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="py-8 max-w-4xl mx-auto">
      {/* Top Header matching cyan palette */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>

          <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 mb-2">
            <span>05 // MORE PROJECTS</span>
            <span>•</span>
            <span className="text-slate-500 uppercase">A Few More Things I've Built</span>
          </div>
          <h1 className="font-mono text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
            Experience &<br />Projects
          </h1>
        </div>

        {/* Right Search & Filter Pills */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="font-mono text-xs bg-slate-900/90 border border-slate-800 rounded-full px-4 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors w-full sm:w-48"
          />

          <div className="flex items-center gap-1 bg-slate-900/90 border border-slate-800 p-1 rounded-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-mono text-[11px] px-3.5 py-1 rounded-full transition-all ${filter === cat
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Single Column Layout (1 card per row) */}
      <div className="flex flex-col gap-6">
        {filteredProjects.map((project, idx) => {
          const formattedNum = String(idx + 1).padStart(2, "0");

          return (
            <div
              key={project.id}
              className="group rounded-2xl border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 bg-slate-900/70 backdrop-blur-md hover:shadow-[0_10px_30px_rgba(6,182,212,0.12)] hover:-translate-y-2"
            >
              <div>
                {/* Number & Year Header */}
                <div className="flex items-center justify-between font-mono text-xs text-slate-500 mb-3">
                  <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                    <span className="text-slate-600">[{formattedNum}]</span> {project.category || project.type.toUpperCase()}
                  </span>
                  <span className="text-slate-500 group-hover:text-slate-400 transition-colors">{project.year || "2024"}</span>
                </div>

                {/* Title & Subtitle */}
                <h2 className="font-mono text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors leading-snug">
                  {project.title}
                </h2>
                <p className="font-mono text-xs text-cyan-400/90 mt-1 mb-3">
                  {project.badge || project.role}
                </p>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Detailed Highlights & Interactive Mockup Screens */}
                <div className="mt-5 pt-4 border-t border-slate-800/90 space-y-4">
                  <div className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider font-semibold">
                    // Key Features & Scope:
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Interactive Screen Viewports inside AllProjectsPage */}
                  {project.screens?.length > 0 && (
                    <div className="mt-5 p-4 rounded-xl ">

                      {project.deviceType === "phone" ? (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 justify-items-center">
                          {project.screens.map((screen, sIdx) => (
                            <PhoneFrame
                              key={sIdx}
                              screen={screen}
                              image={screen.image}
                              onClick={() => setActiveModalData({
                                title: `${project.title} — ${screen.label}`,
                                description: `Screen showcase for ${screen.label} in ${project.title}. Built with ${project.tools.join(", ")}.`,
                                tags: project.tools,
                                image: screen.image
                              })}
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-wrap justify-center gap-3">
                          {project.screens.map((screen, sIdx) => (
                            <div
                              key={sIdx}
                              className="w-full sm:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-0.5rem)]"
                            >
                              <BrowserFrame
                                screen={screen}
                                image={screen.image}
                                onClick={() =>
                                  setActiveModalData({
                                    title: `${project.title} — ${screen.label}`,
                                    description: `Desktop viewport view for ${screen.label}. Implemented with ${project.tools.join(", ")}.`,
                                    tags: project.tools,
                                    image: screen.image
                                  })
                                }
                              />
                            </div>
                          ))}
                        </div>

                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Card Controls & Tech Stack */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-[10px] text-slate-500 mr-1">Stack:</span>
                  {project.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[10px] sm:text-xs px-2.5 py-0.5 rounded-md bg-slate-950/90 border border-slate-800 text-slate-300 group-hover:border-slate-700 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Right: GitHub Repo Link */}
                <a
                  href={project.github || "https://github.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-950 hover:bg-cyan-950/50 border border-slate-800 hover:border-cyan-500/50 font-mono text-xs text-slate-300 hover:text-cyan-300 transition-all ml-auto"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" />
                  <span>View</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-cyan-400" />
                </a>
              </div>
            </div>
          );
        })}
      </div>


    </div>
  );
}
