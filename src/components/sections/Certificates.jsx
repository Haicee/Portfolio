import React, { useState } from "react";
import { certificates } from "../../data/portfolioData";
import { SectionHeader } from "../ui/SectionHeader";
import { LightboxModal } from "../ui/LightboxModal";
import { Award, QrCode, ExternalLink, CheckCircle2, ZoomIn } from "lucide-react";

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const portraitCert = certificates.find((c) => c.orientation === "portrait");
  const landscapeCerts = certificates.filter((c) => c.orientation === "landscape");

  return (
    <section id="certificates" className="py-14 border-t border-slate-800/80">
      <SectionHeader 
        number="03" 
        title="my certificates" 
        subtitle="Formal academic achievements, professional workshops, and technical credentials."
      />

      {/* Asymmetric Grid matching Figma */}
      <div className="grid gap-6 md:grid-cols-12 items-stretch">
        
        {/* Left Column: 1 Tall Portrait Certificate */}
        {portraitCert && (
          <div 
            onClick={() => setSelectedCert(portraitCert)}
            className="group relative md:col-span-6 lg:col-span-5 rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 flex flex-col justify-between shadow-xl hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  {portraitCert.badge}
                </span>
                <span className="font-mono text-xs text-slate-500">{portraitCert.date}</span>
              </div>

              {/* Graphical Portrait Certificate Preview */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0e1628] p-5 flex flex-col justify-between shadow-inner">
                {/* Decorative Guilloche / Border */}
                <div className="absolute inset-2 rounded-lg border border-cyan-500/20 pointer-events-none"></div>

                <div className="text-center pt-2">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-2 text-cyan-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">
                    OFFICIAL CERTIFICATION
                  </span>
                  <h4 className="font-mono text-xs sm:text-sm font-bold text-slate-100 mt-1 leading-snug">
                    {portraitCert.title}
                  </h4>
                </div>

                <div className="my-auto text-center px-2">
                  <p className="text-[11px] text-slate-400 italic">
                    "{portraitCert.description}"
                  </p>
                </div>

                {/* Bottom Seal & QR Code */}
                <div className="flex items-center justify-between border-t border-slate-800 pt-3 px-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full border border-amber-500/50 bg-amber-500/10 flex items-center justify-center text-amber-400">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="text-left font-mono text-[8px] text-slate-400 leading-tight">
                      <div>VERIFIED</div>
                      <div className="text-slate-500">SEAL</div>
                    </div>
                  </div>

                  <div className="p-1 rounded bg-white text-slate-950 flex items-center justify-center">
                    <QrCode className="w-6 h-6" />
                  </div>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 font-mono text-xs text-cyan-300">
                  <ZoomIn className="w-4 h-4" />
                  <span>Click to Inspect Full View</span>
                </div>
              </div>

              <h3 className="mt-4 font-mono text-sm font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                {portraitCert.title}
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                {portraitCert.issuer}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-slate-500">Orientation: Portrait</span>
              <span className="text-cyan-400 group-hover:underline flex items-center gap-1">
                View Credential <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </div>
        )}

        {/* Right Column: 2 Landscape Certificates Stacked */}
        <div className="md:col-span-6 lg:col-span-7 flex flex-col gap-6 justify-between">
          {landscapeCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group relative rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/90 to-slate-950 p-6 shadow-xl hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    {cert.badge}
                  </span>
                  <span className="font-mono text-xs text-slate-500">{cert.date}</span>
                </div>

                {/* Landscape Visual Card */}
                <div className="relative aspect-[16/8] w-full rounded-xl overflow-hidden border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-[#10192e] p-4 flex flex-col justify-between shadow-inner">
                  <div className="absolute inset-2 rounded-lg border border-slate-700/30 pointer-events-none"></div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                        <Award className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-slate-300">
                        {cert.issuer}
                      </span>
                    </div>
                    <QrCode className="w-5 h-5 text-slate-400" />
                  </div>

                  <div className="my-auto px-1">
                    <h4 className="font-mono text-xs sm:text-sm font-bold text-slate-100">
                      {cert.title}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 line-clamp-2 mt-1">
                      {cert.description}
                    </p>
                  </div>

                  {/* Tags Row */}
                  <div className="flex flex-wrap gap-1.5 border-t border-slate-800/80 pt-2">
                    {cert.tags.map((tag, idx) => (
                      <span key={idx} className="font-mono text-[8.5px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 font-mono text-xs text-cyan-300">
                    <ZoomIn className="w-4 h-4" />
                    <span>Click to Inspect Full View</span>
                  </div>
                </div>

                <h3 className="mt-4 font-mono text-sm font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-slate-500">{cert.issuer}</span>
                <span className="text-cyan-400 group-hover:underline flex items-center gap-1">
                  View Credential <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Full View Inspection */}
      <LightboxModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title}
        details={selectedCert}
        credentialUrl={selectedCert?.credentialUrl}
      />
    </section>
  );
}
