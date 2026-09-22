import React from "react";
import { personalInfo } from "../../data/portfolioData";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800/80 pt-10 pb-16 text-center">
      {/* Neon Cyan Accent Line */}
      <div className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <div className="flex flex-col items-center justify-center space-y-2 font-mono text-xs text-slate-500">
        <p className="flex items-center gap-1.5 text-slate-400">
          Designed & Developed by{" "}
          <span className="font-semibold text-slate-200">{personalInfo.name}</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
        </p>
        <p className="text-[11px] text-slate-600">
          Built with React 19 • Tailwind CSS • Vite
        </p>
        <p className="text-[10px] text-slate-700 pt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
