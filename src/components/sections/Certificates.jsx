import React, { useState, useEffect, useRef } from "react";
import { certificates } from "../../data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { Award, ExternalLink, X, CheckCircle2, QrCode, ChevronLeft, ChevronRight } from "lucide-react";
import { useSectionReveal } from "../../animations/sectionAnimations";
import { useCertModalAnimation, animateCertModalClose } from "../../animations/projectAnimations";

/* ─── Certificate Modal ───────────────────────────────────────────── */
function CertModal({ cert, onClose }) {
  const backdropRef = useRef(null);
  const dialogRef = useRef(null);

  useCertModalAnimation(backdropRef, dialogRef);

  const handleClose = () => {
    animateCertModalClose(backdropRef, dialogRef, onClose);
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") handleClose(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [handleClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={handleClose}
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
      />

      {/* Dialog */}
      <div ref={dialogRef} className="relative z-10 w-full max-w-lg bg-slate-900 border border-slate-700/70 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-cyan-500" />

        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-5 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-400">
                Official Credential
              </span>
              <h3 className="font-mono text-sm font-bold text-slate-100 leading-snug mt-0.5">
                {cert.title}
              </h3>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0 ml-3"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image Preview Box */}
        <div className="mx-6 mt-5 rounded-xl border border-slate-700/60 bg-slate-950/80 p-3 relative overflow-hidden group">
          {cert.image ? (
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-contain object-center rounded-lg"
              />
            </div>
          ) : (
            <div className="py-8 text-center">
              <QrCode className="w-12 h-12 text-slate-600 mx-auto mb-2" />
              <p className="text-xs text-slate-400">Certificate Image Preview</p>
            </div>
          )}
        </div>

        {/* Certificate Details */}
        <div className="px-6 mt-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
              {cert.badge}
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed italic">
            "{cert.description}"
          </p>

          <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between font-mono">
            <div>
              <p className="text-[9px] text-slate-500 uppercase tracking-wider">Issued by</p>
              <p className="text-xs font-semibold text-slate-200 mt-0.5">{cert.issuer}</p>
            </div>
            <span className="text-xs text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/50">
              {cert.date}
            </span>
          </div>
        </div>

        {/* Tags */}
        {cert.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 px-6 mt-3">
            {cert.tags.map((tag, i) => (
              <span
                key={i}
                className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-800 border border-slate-700/50 text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 mt-4 border-t border-slate-800 text-xs font-mono">
          <span className="text-slate-500"></span>
          {cert.credentialUrl && cert.credentialUrl !== "#" ? (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-colors"
            >
              Verify Credential <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <button
              onClick={handleClose}
              className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Single Certificate Card ─────────────────────────────────────── */
function CertCard({ cert, position, onClick }) {
  // position: "left" | "center" | "right"
  const isCenter = position === "center";

  // Position & transform offsets so side cards peek out prominently
  const rotateClass = position === "left"
    ? "-rotate-6 -translate-x-36 sm:-translate-x-44 scale-90"
    : position === "right"
      ? "rotate-6 translate-x-36 sm:translate-x-44 scale-90"
      : "rotate-0 scale-100 z-20";

  return (
    <div
      onClick={onClick}
      className={`
        absolute w-64 sm:w-72 cursor-pointer
        transition-all duration-300
        ${rotateClass}
        ${isCenter
          ? "z-20 hover:scale-[1.02] hover:-translate-y-1"
          : "z-10 opacity-60 hover:opacity-90"
        }
      `}
    >
      <div
        className={`
          relative rounded-2xl border bg-gradient-to-br from-slate-900 via-slate-950 to-[#0b1322] p-4 shadow-2xl overflow-hidden
          ${isCenter
            ? "border-slate-600/90 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            : "border-slate-800/80"
          }
        `}
      >
        {/* Top accent line */}
        {isCenter && (
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-500/70 to-transparent" />
        )}

        {/* Certificate Image Thumbnail */}
        {cert.image && (
          <div className="w-full aspect-[16/9] mb-3 overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}

        {/* Badge row */}
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest text-cyan-400 bg-cyan-950/70 border border-cyan-800/50 px-2 py-0.5 rounded-full">
            <CheckCircle2 className="w-2.5 h-2.5" />
            {cert.badge}
          </span>
          <span className="font-mono text-[10px] text-slate-500">{cert.date}</span>
        </div>

        {/* Title */}
        <h3 className="font-mono text-xs sm:text-sm font-bold text-slate-100 leading-snug line-clamp-2 mb-2">
          {cert.title}
        </h3>

        {/* Description */}
        <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2 mb-3">
          {cert.description}
        </p>

        {/* Issuer + CTA */}
        <div className="border-t border-slate-800/80 pt-2.5 flex items-center justify-between">
          <p className="font-mono text-[10px] text-slate-500 truncate max-w-[60%]">
            {cert.issuer}
          </p>
          <span className="font-mono text-[10px] text-cyan-400 flex items-center gap-0.5">
            View details <ExternalLink className="w-2.5 h-2.5" />
          </span>
        </div>
      </div>
    </div>
  );

}

/* ─── Certificates Section ────────────────────────────────────────── */
export function Certificates() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);

  const containerRef = useRef(null);
  useSectionReveal(containerRef, { stagger: 0.1 });

  const total = certificates.length;

  const prev = () => setActiveIdx((i) => (i - 1 + total) % total);
  const next = () => setActiveIdx((i) => (i + 1) % total);

  // Determine positions for visible cards
  const getPosition = (i) => {
    if (i === activeIdx) return "center";
    const leftIdx = (activeIdx - 1 + total) % total;
    const rightIdx = (activeIdx + 1) % total;
    if (i === leftIdx) return "left";
    if (i === rightIdx) return "right";
    return null; // hidden
  };

  return (
    <section id="certificates" className="py-[70px] border-t border-slate-800/80" ref={containerRef}>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10 reveal-heading reveal-line">
        <SectionHeader
          number="03"
          title="certificates"
          subtitle="Academic achievements, professional credentials, and technical training."
        />

        {/* Counter + Nav */}
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400 self-start sm:self-auto mt-1">
          <button
            onClick={prev}
            className="p-1.5 rounded-md border border-slate-700 hover:border-slate-500 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span>
            <span className="text-cyan-400 font-bold">{String(activeIdx + 1).padStart(2, "0")}</span>
            {" / "}
            {String(total).padStart(2, "0")}
          </span>
          <button
            onClick={next}
            className="p-1.5 rounded-md border border-slate-700 hover:border-slate-500 hover:text-white transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Card Stack */}
      <div className="relative flex items-center justify-center h-72 sm:h-80 select-none overflow-hidden sm:overflow-visible reveal-content">
        {certificates.map((cert, i) => {
          const pos = getPosition(i);
          if (!pos) return null;
          return (
            <CertCard
              key={cert.id}
              cert={cert}
              position={pos}
              onClick={() => {
                if (pos === "center") {
                  setSelectedCert(cert);
                } else {
                  setActiveIdx(i);
                }
              }}
            />
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {certificates.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`h-1 rounded-full transition-all duration-300 ${i === activeIdx
              ? "w-6 bg-cyan-400"
              : "w-1.5 bg-slate-700 hover:bg-slate-500"
              }`}
          />
        ))}
      </div>

      {/* Click hint */}
      <p className="text-center font-mono text-[11px] text-slate-600 mt-3">
        Click to view more!
      </p>

      {/* Modal */}
      {selectedCert && (
        <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </section>
  );
}

