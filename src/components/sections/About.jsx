import React from "react";
import { personalInfo } from "../../data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { Terminal, Layers, Sparkles, Smartphone } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-14 border-t border-slate-800/80">
      <SectionHeader 
        number="01" 
        title="about" 
        subtitle="Background, technical philosophy, and what drives my work."
      />

      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
        <p className="text-base sm:text-lg leading-relaxed text-slate-300">
          {personalInfo.bio}
        </p>

        <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400">
          I enjoy bridging the gap between design and engineering. Whether it is translating a Figma interface into pixel-perfect React components or architecting an offline-capable mobile app in Flutter, I prioritize code maintainability, clean state management, and intuitive user experiences.
        </p>

        {/* Core Pillars / Value Proposition */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3 pt-6 border-t border-slate-800">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
                Mobile First
              </h3>
              <p className="mt-1 text-xs text-slate-400 leading-normal">
                Cross-platform Flutter apps with fluid 60fps animations and offline caching.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
                Full-Stack Systems
              </h3>
              <p className="mt-1 text-xs text-slate-400 leading-normal">
                From relational databases and REST APIs to reactive component frontends.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 shrink-0">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
                Production Ready
              </h3>
              <p className="mt-1 text-xs text-slate-400 leading-normal">
                Structured Git workflows, modular component hierarchies, and clean code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
