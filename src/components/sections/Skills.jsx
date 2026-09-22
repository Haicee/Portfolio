import React, { useState } from "react";
import { skills } from "../../data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { 
  Code2, Smartphone, Database, Palette, 
  Terminal, Globe, Cpu, Wrench
} from "lucide-react";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Frontend", "Mobile", "Backend", "Language", "Design", "Tooling"];

  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(s => s.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const getTechColor = (name) => {
    switch (name.toLowerCase()) {
      case "react": return "text-cyan-400 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10";
      case "flutter": return "text-sky-400 group-hover:border-sky-400/50 group-hover:bg-sky-500/10";
      case "laravel": return "text-red-500 group-hover:border-red-500/50 group-hover:bg-red-500/10";
      case "tailwind css": return "text-teal-400 group-hover:border-teal-400/50 group-hover:bg-teal-500/10";
      case "html5": return "text-orange-500 group-hover:border-orange-500/50 group-hover:bg-orange-500/10";
      case "css3": return "text-blue-400 group-hover:border-blue-400/50 group-hover:bg-blue-500/10";
      case "javascript": return "text-yellow-400 group-hover:border-yellow-400/50 group-hover:bg-yellow-500/10";
      case "firebase": return "text-amber-500 group-hover:border-amber-500/50 group-hover:bg-amber-500/10";
      case "python": return "text-emerald-400 group-hover:border-emerald-400/50 group-hover:bg-emerald-500/10";
      case "figma": return "text-purple-400 group-hover:border-purple-400/50 group-hover:bg-purple-500/10";
      case "android studio": return "text-green-400 group-hover:border-green-400/50 group-hover:bg-green-500/10";
      case "git & github": return "text-rose-400 group-hover:border-rose-400/50 group-hover:bg-rose-500/10";
      default: return "text-slate-300 group-hover:border-slate-500 group-hover:bg-slate-800";
    }
  };

  const getTechIcon = (name) => {
    switch (name.toLowerCase()) {
      case "react": return <Globe className="w-6 h-6" />;
      case "flutter": return <Smartphone className="w-6 h-6" />;
      case "laravel": return <Database className="w-6 h-6" />;
      case "tailwind css": return <Palette className="w-6 h-6" />;
      case "html5": return <Code2 className="w-6 h-6" />;
      case "css3": return <Palette className="w-6 h-6" />;
      case "javascript": return <Terminal className="w-6 h-6" />;
      case "firebase": return <Database className="w-6 h-6" />;
      case "python": return <Cpu className="w-6 h-6" />;
      case "figma": return <Palette className="w-6 h-6" />;
      case "android studio": return <Smartphone className="w-6 h-6" />;
      case "git & github": return <Wrench className="w-6 h-6" />;
      default: return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="skills" className="py-14 border-t border-slate-800/80">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
        <SectionHeader 
          number="02" 
          title="my skills" 
          subtitle="Core technologies, frameworks, and developer tools in my tech stack."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 font-mono text-[11px] mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-md transition-all ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-slate-950 font-bold"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid matching Figma square card styling */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredSkills.map((skill, index) => {
          const colorStyles = getTechColor(skill.name);
          return (
            <div
              key={index}
              className={`group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 shadow-lg ${colorStyles}`}
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 transition-transform">
                {getTechIcon(skill.name)}
              </div>

              {/* Title & Details */}
              <h3 className="font-mono text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                {skill.name}
              </h3>

              <div className="mt-2 flex items-center gap-1.5">
                <span className="font-mono text-[10px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700/50">
                  {skill.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
