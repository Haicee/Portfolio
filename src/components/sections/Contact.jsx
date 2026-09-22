import React, { useState } from "react";
import { personalInfo } from "../../data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { Mail, Copy, Check, ExternalLink, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-14 border-t border-slate-800/80">
      <SectionHeader 
        number="05" 
        title="connect with me" 
        subtitle="Let's build something exceptional together. Open to full-stack, mobile, and consulting roles."
      />

      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/90 via-[#0e1526] to-slate-950 p-6 sm:p-10 shadow-2xl">
        
        {/* Glow backdrop */}
        <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"></div>

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs text-cyan-300 mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>Open for Work & Collaboration</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Have a project in mind or want to collaborate?
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            Whether you need a cross-platform Flutter application, a robust React & Laravel web system, or a technical consultation, my inbox is always open.
          </p>

          {/* Interactive Contact Buttons Grid matching Figma */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            
            {/* Direct Email Action Button */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center justify-between p-4 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-cyan-400 hover:bg-slate-800 transition-all shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-400">Email Me</div>
                  <div className="font-mono text-xs sm:text-sm font-bold text-slate-200 truncate max-w-[170px]">
                    {personalInfo.email}
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </a>

            {/* Quick Copy Email to Clipboard Button */}
            <button
              onClick={handleCopyEmail}
              className="group flex items-center justify-between p-4 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-cyan-400 hover:bg-slate-800 transition-all shadow-lg text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-400">Copy to Clipboard</div>
                  <div className="font-mono text-xs sm:text-sm font-bold text-slate-200">
                    {copied ? "Copied Successfully!" : "Click to Copy Email"}
                  </div>
                </div>
              </div>
              <span className="font-mono text-[10px] text-slate-500 group-hover:text-emerald-400 transition-colors">
                {copied ? "COPIED" : "COPY"}
              </span>
            </button>

            {/* LinkedIn Action */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-indigo-400 hover:bg-slate-800 transition-all shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-400">Professional Network</div>
                  <div className="font-mono text-xs sm:text-sm font-bold text-slate-200">
                    LinkedIn Profile
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
            </a>

            {/* GitHub Action */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-slate-400 hover:bg-slate-800 transition-all shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-700/30 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-400">Source Repositories</div>
                  <div className="font-mono text-xs sm:text-sm font-bold text-slate-200">
                    GitHub Profile
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
