import React, { useRef } from "react";
import { personalInfo } from "../../data/portfolioData";
import { Mail, ArrowDown, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from "../ui/SocialIcons";
import profileImg from "../../assets/profile/profile.png";
import { useHeroAnimation } from "../../animations/heroAnimations";

export function Hero({ onOpenContact }) {
  const containerRef = useRef(null);
  useHeroAnimation(containerRef);

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case "Github": return <GithubIcon className="w-4 h-4" />;
      case "Linkedin": return <LinkedinIcon className="w-4 h-4" />;
      case "Facebook": return <FacebookIcon className="w-4 h-4" />;
      case "Instagram": return <InstagramIcon className="w-4 h-4" />;
      default: return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <section id="hero" className="relative pt-6 pb-16 sm:py-16" ref={containerRef}>
      {/* Hero Card Container matching Figma */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-900/90 via-[#0e1422] to-slate-950 p-6 sm:p-10 shadow-2xl">

        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl"></div>

        <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">

          {/* Left Column: Intro Info */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Tech Monospace Greeting */}
            <div className="hero-badge inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-jakarta text-xs text-cyan-300">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Need Help?</span>
            </div>

            <h1 className="hero-title mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            <p className="hero-subtitle mt-2 font-mono text-base font-semibold text-slate-300">
              {personalInfo.title}
            </p>

            <p className="hero-description mt-4 text-sm sm:text-base leading-relaxed text-slate-400 max-w-lg">
              {personalInfo.tagline}
            </p>

            {/* Social Icons Row */}
            <div className="hero-socials mt-8 flex flex-wrap items-center gap-3">
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
            <div className="hero-cta mt-8 flex flex-wrap items-center gap-4">
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

          {/* Right Column: Profile Picture (Fit directly into Hero card with softened opacity) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end -mb-6 sm:-mb-10 lg:-mb-10 mt-6 lg:mt-0">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] flex justify-center lg:justify-end items-end">
              {/* Soft Ambient Backlight Glow */}
              <div className="pointer-events-none absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 via-purple-600/15 to-transparent blur-2xl opacity-55"></div>

              <img
                src={profileImg}
                alt={personalInfo.name}
                className="hero-profile relative z-10 w-full max-h-[460px] sm:max-h-[500px] object-contain object-bottom opacity-75 hover:opacity-100 transition-opacity duration-300 drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
