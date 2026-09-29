import React from "react";
import { personalInfo } from "../../data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { Terminal, Layers, Sparkles, Smartphone } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-[70px] border-t border-slate-800/80">
      <SectionHeader
        number="01"
        title="about"
        subtitle="Background, technical philosophy, and what drives my work."
      />

      <div className="mt-8">
        <p className="text-base sm:text-lg sm:leading-loose leading-relaxed text-slate-300">
          {personalInfo.bio}
        </p>

        <p className="mt-6 text-base sm:text-lg sm:leading-loose leading-relaxed text-slate-400">
          I like making sure design and code work together well. Whether it's turning a Figma design into a clean React app or building a mobile app that works without internet, I focus on keeping code easy to update, managing state clearly, and making sure users have a smooth experience.
        </p>
      </div>
    </section>
  );
}
