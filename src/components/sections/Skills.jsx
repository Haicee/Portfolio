import React, { useState, useRef } from "react";
import { skillGroups } from "../../data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { useSectionReveal } from "../../animations/sectionAnimations";

const LEVEL_STYLES = {
  Advanced: "bg-cyan-500/10 text-cyan-400 border-cyan-500/25",
  Intermediate: "bg-indigo-500/10 text-indigo-400 border-indigo-500/25",
  Beginner: "bg-slate-700/40 text-slate-400 border-slate-600/30",
};

const LEVEL_SHORT = {
  Advanced: "Adv",
  Intermediate: "Mid",
  Beginner: "Jr",
};

export function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");
  const containerRef = useRef(null);
  useSectionReveal(containerRef, { stagger: 0.1 });

  const filterLabels = ["All", ...skillGroups.map((g) => g.label)];

  const visibleGroups =
    activeFilter === "All"
      ? skillGroups
      : skillGroups.filter((g) => g.label === activeFilter);

  return (
    <section id="skills" className="py-[70px] border-t border-slate-800/80" ref={containerRef}>
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10 reveal-heading reveal-line">
        <SectionHeader
          number="02"
          title="Tech Stack"
          subtitle="Every language, framework, and tool I rely on to turn concepts into production-ready software."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 font-mono text-[11px] sm:justify-end">
          {filterLabels.map((label) => (
            <button
              key={label}
              onClick={() => setActiveFilter(label)}
              className={`px-2.5 py-1 rounded-md border transition-all duration-200 ${activeFilter === label
                ? "bg-cyan-500 border-cyan-500 text-slate-950 font-bold"
                : "bg-transparent border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200"
                }`}
            >
              {label.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Category Rows */}
      <div className="flex flex-col gap-3">
        {visibleGroups.map((group, i) => (
          <div
            key={group.id}
            className="reveal-item relative flex flex-col sm:flex-row sm:items-start gap-5 rounded-xl border border-slate-800/70 bg-slate-900/30 px-6 py-5 overflow-hidden transition-all duration-300 hover:border-slate-700/80 hover:bg-slate-900/50 hover:-translate-y-1"
          >
            {/* Left — Category Info */}
            <div className="sm:w-52 shrink-0">
              <h3 className="font-mono text-sm font-bold text-slate-100 uppercase tracking-widest">
                {group.label}
              </h3>
              <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                {group.description}
              </p>
            </div>

            {/* Divider (desktop) */}
            <div className="hidden sm:block w-px self-stretch bg-slate-800/80" />

            {/* Right — Skill Tags */}
            <div className="flex flex-wrap gap-2 items-start flex-1">
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-700/60 bg-slate-800/60 px-3 py-1.5 transition-all duration-200 hover:border-slate-500 hover:bg-slate-800"
                >
                  <span className="font-mono text-sm font-medium text-slate-200">
                    {skill.name}
                  </span>
                </span>
              ))}
            </div>

            {/* Numbered Watermark */}
            <span className="absolute right-5 bottom-1 font-mono text-6xl font-black text-slate-800/25 select-none pointer-events-none leading-none">
              0{i + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

