import React, { useRef } from "react";
import { personalInfo } from "../../data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { Terminal, Layers, Sparkles, Smartphone } from "lucide-react";
import { useSectionReveal } from "../../animations/sectionAnimations";

export function About() {
  const containerRef = useRef(null);
  useSectionReveal(containerRef);

  return (
    <section id="about" className="py-[70px] border-t border-slate-800/80" ref={containerRef}>
      <div className="reveal-heading reveal-line">
        <SectionHeader
          number="01"
          title="about"
          subtitle="Curious about what's possible. Dedicated to making it real."
        />
      </div>

      <div className="mt-8 reveal-content">
        <p className="text-base sm:text-lg sm:leading-loose leading-relaxed text-slate-300">
          {personalInfo.bio}
        </p>

        <p className="mt-6 text-base sm:text-lg sm:leading-loose leading-relaxed text-slate-400">
          I like making sure design and code work together well. My goal is to keep learning, keep building, and create things that people actually find useful.
        </p>
      </div>
    </section>
  );
}
