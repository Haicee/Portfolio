import React, { useState, useRef } from "react";
import { projects } from "../../data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { ExternalLink, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { GithubIcon } from "../ui/SocialIcons";
import { useSectionReveal } from "../../animations/sectionAnimations";
import { useProjectExpand } from "../../animations/projectAnimations";

/* ─── Project Card Component ────────────────────────────────────────── */
function ProjectCard({ project, isExpanded, onToggle, formattedNum, renderTechStack }) {
  const detailRef = useRef(null);
  useProjectExpand(detailRef, isExpanded);

  return (
    <div
      className={`reveal-item group rounded-2xl border transition-all duration-300 flex flex-col justify-between p-6 bg-slate-900/70 backdrop-blur-md ${isExpanded
        ? "border-cyan-500/70 shadow-[0_10px_30px_rgba(6,182,212,0.15)] bg-slate-900/95"
        : "border-slate-800/80 hover:border-cyan-500/40 hover:shadow-[0_8px_25px_rgba(6,182,212,0.08)] hover:-translate-y-2"
        }`}
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
        <h3 className="font-mono text-lg sm:text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-cyan-400/90 mt-1 mb-3">
          {project.badge || project.role}
        </p>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          {project.description}
        </p>

        {/* Expandable Details Section */}
        <div ref={detailRef} style={{ display: "none" }}>
          <div className="mt-5 pt-4 border-t border-slate-800/90 space-y-3">
            <div className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider font-semibold">
              // KEY IMPLEMENTATIONS:
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">•</span>
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Card Controls & Clean Tools Layout */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
        {/* Left: View Details Dropdown Button */}
        <button
          onClick={onToggle}
          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700/80 border border-slate-700/60 font-mono text-[11px] font-medium text-slate-200 hover:text-white transition-colors shrink-0"
        >
          <span>{isExpanded ? "LESS" : "DETAILS"}</span>
          {isExpanded ? <ChevronUp className="w-3 h-3 text-cyan-400" /> : <ChevronDown className="w-3 h-3 text-slate-400" />}
        </button>

        {/* Center: Tools with +N badge */}
        {renderTechStack(project.tools)}

        {/* Right: GitHub Repo Link */}
        <a
          href={project.github || "https://github.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-cyan-950/40 border border-slate-800 hover:border-cyan-500/40 font-mono text-xs text-slate-300 hover:text-cyan-300 transition-all shrink-0"
        >
          <GithubIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" />
          <span>GITHUB</span>
          <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-cyan-400" />
        </a>
      </div>
    </div>
  );
}

export function Projects({ onViewAll }) {
  const [expandedId, setExpandedId] = useState(null);
  const containerRef = useRef(null);
  useSectionReveal(containerRef, { stagger: 0.1 });

  // Display top featured projects in main view
  const featuredProjects = projects.slice(0, 4);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Helper to render capped tech stack with +N badge
  const renderTechStack = (tools) => {
    const maxVisible = 2; // Show max 2 tools to ensure clean single-line fit on all screen sizes
    const visibleTools = tools.slice(0, maxVisible);
    const hiddenCount = tools.length - maxVisible;

    return (
      <div className="flex items-center gap-1.5 shrink min-w-0">
        {visibleTools.map((tool, tIdx) => (
          <span
            key={tIdx}
            className="font-mono text-[10px] whitespace-nowrap px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-400 group-hover:border-slate-700 transition-colors truncate max-w-[90px] sm:max-w-none"
          >
            {tool}
          </span>
        ))}
        {hiddenCount > 0 && (
          <span className="font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-950/90 border border-slate-800 shrink-0">
            +{hiddenCount}
          </span>
        )}
      </div>
    );
  };

  return (
    <section id="experience" className="py-[70px] border-t border-slate-800/80" ref={containerRef}>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 mb-8 reveal-heading reveal-line">
        <SectionHeader
          number="04"
          title="experience & projects"
          subtitle="Featured client systems, mobile applications, and interactive web software."
        />

        {/* View All Button */}
        <button
          onClick={onViewAll}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold transition-all self-start sm:self-auto group shrink-0"
        >
          <span>MORE DETAILS ({projects.length})</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Grid of Clean Reference Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map((project, idx) => {
          const isExpanded = expandedId === project.id;
          const formattedNum = String(idx + 1).padStart(2, "0");

          return (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={isExpanded}
              onToggle={() => toggleExpand(project.id)}
              formattedNum={formattedNum}
              renderTechStack={renderTechStack}
            />
          );
        })}
      </div>

      {/* Bottom CTA to view all projects */}
      <div className="mt-10 text-center reveal-content">
        <button
          onClick={onViewAll}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-400 font-mono text-xs font-bold transition-all shadow-lg group"
        >
          <span>Explore All Projects</span>
          <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
