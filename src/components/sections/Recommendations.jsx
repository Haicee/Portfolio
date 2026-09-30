import React, { useRef } from "react";
import { recommendations } from "../../data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { Quote } from "lucide-react";
import { useSectionReveal } from "../../animations/sectionAnimations";

export function Recommendations() {
  const containerRef = useRef(null);
  useSectionReveal(containerRef, { stagger: 0.1 });

  if (!recommendations || recommendations.length === 0) return null;

  return (
    <section id="recommendations" className="py-[70px] border-t border-slate-800/80" ref={containerRef}>
      <div className="reveal-heading reveal-line">
        <SectionHeader
          number="05"
          title="recommendations"
          subtitle="Here’s what founders, teammates, and mentors say about working with me."
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 mt-10">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="reveal-item group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 hover:bg-slate-800/50 hover:border-slate-700 transition-all duration-300"
          >
            {/* Quote Icon */}
            <Quote className="w-8 h-8 text-slate-700 group-hover:text-cyan-500/40 transition-colors mb-6" />

            {/* Testimonial Text */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 italic">
              {rec.quote}
            </p>

            {/* Author Profile */}
            <div className="flex items-center gap-4 border-t border-slate-800 pt-5 mt-auto">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-cyan-400 font-mono tracking-wider">
                {rec.initials}
              </div>
              <div>
                <h4 className="font-semibold text-slate-200 text-sm">{rec.name}</h4>
                <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">
                  {rec.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
