import React, { useRef } from "react";
import { personalInfo } from "../../data/portfolioData";
import { Heart } from "lucide-react";
import { useFooterReveal } from "../../animations/sectionAnimations";

export function Footer() {
  const footerRef = useRef(null);
  useFooterReveal(footerRef);

  return (
    <footer ref={footerRef} className="border-t border-slate-800/80 pt-10 text-center">
      {/* Neon Cyan Accent Line */}
      <div className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <div className="flex flex-col items-center justify-center space-y-2 font-mono text-xs text-slate-500">
        <p className="text-[10px] text-slate-700 pt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
