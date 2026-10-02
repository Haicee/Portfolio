import React, { useRef } from "react";
import { navItems, personalInfo } from "../../data/portfolioData";
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from "../ui/SocialIcons";
import { Mail, ArrowUpRight, Download, Volume2, VolumeX } from "lucide-react";

import cvFile from "../../assets/resume/FULL STACK DEVELOPER- MARC PAUL SUALOG.pdf";
import { useSidebarEntrance } from "../../animations/sectionAnimations";

export function Sidebar({ activeSection, onNavClick, isMuted, toggleMute }) {
  const sidebarRef = useRef(null);
  useSidebarEntrance(sidebarRef);

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case "Github": return <GithubIcon className="w-4 h-4" />;
      case "LinkedIn": return <LinkedinIcon className="w-4 h-4" />;
      case "Facebook": return <FacebookIcon className="w-4 h-4" />;
      case "Instagram": return <InstagramIcon className="w-4 h-4" />;
      default: return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <aside ref={sidebarRef} className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col justify-between border-r border-slate-800/80 bg-[#0c101a]/95 backdrop-blur-xl px-7 py-8 lg:flex">
      {/* Top Header / Branding */}
      <div>
        <a
          href="#hero"
          onClick={onNavClick}
          className="group block font-jakarta text-lg font-bold tracking-tight text-slate-100 hover:text-cyan-400 transition-colors"
        >
          <span>{personalInfo.name}</span>
          <span className="text-cyan-400 font-normal ml-1">/&gt;</span>
        </a>

        <p className="mt-1 font-mono text-xs text-slate-400">
          {personalInfo.title}
        </p>

        {/* Live Availability Badge */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span>Available for work</span>
        </div>

        {/* Numbered Navigation Links */}
        <nav className="border-t border-slate-800/80 pt-6 mt-9 flex flex-col space-y-1.5 font-mono text-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={onNavClick}
                className={`group flex items-center justify-between py-2 px-3 rounded-lg transition-all duration-200 ${isActive
                  ? "bg-cyan-500/10 text-cyan-300 font-semibold border-l-2 border-cyan-400"
                  : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50"
                  }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`text-[10px] ${isActive ? "text-cyan-400" : "text-slate-500 group-hover:text-slate-300"}`}>
                    {item.number}
                  </span>
                  <span className="capitalize">{item.label}</span>
                </div>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                )}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Sound Toggle Button */}
      <a
        type="button"
        onClick={toggleMute}
        className="mt-auto sound-toggle pb-5 pl-1 flex items-center gap-2 rounded-md font-mono text-xs text-slate-400 hover:text-cyan-400 transition-all duration-200 cursor-pointer"
        aria-label={isMuted ? "Turn sound on" : "Turn sound off"}
        title={isMuted ? "Turn sound on" : "Turn sound off"}
      >
        {isMuted ? (
          <>
            <VolumeX className="w-3.5 h-3.5 text-slate-400 transition-colors" />
          </>
        ) : (
          <>
            <Volume2 className="w-3.5 h-3.5 text-cyan-400 transition-colors" />
          </>
        )}
      </a>

      {/* Bottom Footer Info & Social Quick-Links */}
      <div className="border-t border-slate-800/80 pt-6">
        <p className="font-mono text-[11px] text-slate-500">
          Get in touch directly
        </p>
        <a
          href={`mailto:${personalInfo.email}`}
          className="mt-1.5 flex items-center gap-2 font-mono text-xs text-slate-300 hover:text-cyan-400 transition-colors"
        >
          <Mail className="w-3.5 h-3.5 text-cyan-400" />
          <span className="truncate">{personalInfo.email}</span>
        </a>

        <a
          href={cvFile}
          download
          className="mt-2 flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <Download className="w-3.5 h-3.5 text-cyan-400" />
          <span>Resume</span>

        </a>

        {/* Social Icons Row */}
        <div className="mt-5 flex items-center gap-2">
          {personalInfo.socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
            >
              {getSocialIcon(social.icon)}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
