import React, { useState, useRef, useEffect } from "react";
import { navItems, personalInfo } from "../../data/portfolioData";
import { Mail, Download, Menu, X } from "lucide-react";
import cvFile from "../../assets/resume/FULL STACK DEVELOPER- MARC PAUL SUALOG.pdf";
import { animateMobileMenuOpen, animateMobileMenuClose } from "../../animations/projectAnimations";

export function MobileHeader({ activeSection, onNavClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);

  const handleLinkClick = () => {
    animateMobileMenuClose(panelRef, () => {
      setIsOpen(false);
      if (onNavClick) onNavClick();
    });
  };

  const closeMenu = () => {
    animateMobileMenuClose(panelRef, () => setIsOpen(false));
  };

  useEffect(() => {
    if (isOpen) {
      animateMobileMenuOpen(panelRef);
    }
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-800/80 bg-[#0b0f17]/90 px-6 py-4 backdrop-blur-md lg:hidden">
        <a
          href="#hero"
          onClick={handleLinkClick}
          className="font-mono text-base font-bold text-slate-100"
        >
          <span>{personalInfo.name}</span>
          <span className="text-cyan-400 font-normal">/&gt;</span>
        </a>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available</span>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Slide-over Fullscreen Drawer */}
      {isOpen && (
        <div ref={panelRef} className="fixed inset-0 z-50 flex flex-col bg-[#0b0f17] px-6 py-6 lg:hidden opacity-0">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <span className="font-mono text-base font-bold text-slate-100">
              {personalInfo.name}
            </span>
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col space-y-4 font-mono text-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleLinkClick}
                className={`flex items-center justify-between py-2 text-base ${activeSection === item.id
                  ? "text-cyan-400 font-bold"
                  : "text-slate-300 hover:text-white"
                  }`}
              >
                <span>{item.number} — {item.label}</span>
                {activeSection === item.id && (
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                )}
              </a>
            ))}
          </nav>

          <div className="mt-auto border-t border-slate-800 pt-6">
            <p className="font-mono text-xs text-slate-500">Contact</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-2 flex items-center gap-2 font-mono text-sm text-cyan-400"
            >
              <Mail className="w-4 h-4" />
              <span>{personalInfo.email}</span>
            </a>
            <a
              href={cvFile}
              download
              className="mt-2 flex items-center gap-2 font-mono text-sm text-cyan-400"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
