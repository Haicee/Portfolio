import React from "react";
import { personalInfo } from "../../data/portfolioData";
import { Mail, ArrowDown, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon, TwitterIcon } from "../ui/SocialIcons";

export function Hero({ onOpenContact }) {
  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case "Github": return <GithubIcon className="w-4 h-4" />;
      case "Linkedin": return <LinkedinIcon className="w-4 h-4" />;
      case "Facebook": return <FacebookIcon className="w-4 h-4" />;
      case "Twitter": return <TwitterIcon className="w-4 h-4" />;
      default: return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <section id="hero" className="relative pt-6 pb-16 sm:py-16">
      {/* Hero Card Container matching Figma */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-900/90 via-[#0e1422] to-slate-950 p-6 sm:p-10 shadow-2xl">
        
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl"></div>

        <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Intro Info */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tech Monospace Greeting */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs text-cyan-300">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full-Stack & Mobile Developer</span>
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            <p className="mt-2 font-mono text-base font-semibold text-slate-300">
              {personalInfo.title}
            </p>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400 max-w-lg">
              {personalInfo.tagline}
            </p>

            {/* Social Icons Row */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {personalInfo.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/80 px-3.5 py-2 font-mono text-xs text-slate-300 shadow-sm transition-all hover:border-cyan-400 hover:bg-slate-700 hover:text-white hover:-translate-y-0.5"
                >
                  {getSocialIcon(social.icon)}
                  <span>{social.label}</span>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 px-5 py-2.5 font-mono text-xs font-bold text-slate-950 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/60 hover:bg-slate-800 px-5 py-2.5 font-mono text-xs font-semibold text-slate-200 transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Cutout Picture with Glowing Frame */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group">
              {/* Backlight Glow Aura */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-500/30 to-purple-600/30 blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Portrait Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border border-slate-700/80 bg-gradient-to-b from-slate-800 to-slate-950 shadow-2xl flex items-center justify-center p-2">
                {/* Fallback stylized avatar / profile silhouette with developer emblem */}
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-cyan-950/40 flex flex-col items-center justify-center text-center p-4">
                  <div className="relative">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 p-0.5 shadow-xl">
                      <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
                        <span className="font-mono text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 to-indigo-300">
                          MS
                        </span>
                      </div>
                    </div>
                    <span className="absolute bottom-0 right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-950"></span>
                  </div>
                  
                  <span className="mt-4 font-mono text-sm font-bold text-slate-200">
                    {personalInfo.name}
                  </span>
                  <span className="font-mono text-[11px] text-cyan-400">
                    Ready to Build
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
