import React, { useEffect, useRef } from "react";
import { X, ExternalLink } from "lucide-react";
import { useCertModalAnimation, animateCertModalClose } from "../../animations/projectAnimations";

export function LightboxModal({ isOpen, onClose, title, image, details, credentialUrl }) {
  const backdropRef = useRef(null);
  const dialogRef = useRef(null);
  
  useCertModalAnimation(backdropRef, dialogRef);

  const handleClose = () => {
    animateCertModalClose(backdropRef, dialogRef, onClose);
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        ref={backdropRef}
        onClick={handleClose}
        className="absolute inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
      ></div>

      {/* Modal Dialog */}
      <div ref={dialogRef} className="relative z-10 max-w-4xl w-full bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div>
            <h3 className="font-mono text-base font-bold text-slate-100">
              {title || "Credential Preview"}
            </h3>
            {details?.issuer && (
              <p className="text-xs text-slate-400 font-sans mt-0.5">
                {details.issuer} • {details.date}
              </p>
            )}
          </div>
          <button 
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Image Viewport */}
        <div className="p-6 overflow-y-auto flex flex-col items-center justify-center bg-slate-950/50">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="max-h-[60vh] w-auto object-contain rounded-xl shadow-lg border border-slate-800"
            />
          ) : (
            <div className="w-full min-h-[300px] flex flex-col items-center justify-center p-8 text-center rounded-xl border-2 border-dashed border-slate-800 bg-slate-900/40">
              <div className="p-4 rounded-2xl bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 mb-3 font-mono text-sm">
                [High-Resolution Credential Document]
              </div>
              <p className="text-sm text-slate-400 max-w-md">
                {details?.description || "Official verified certificate of achievement and professional qualification."}
              </p>
            </div>
          )}

          {/* Details / Actions */}
          {details?.tags && (
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {details.tags.map((tag, idx) => (
                <span key={idx} className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/60 text-slate-300">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-slate-800 bg-slate-900/90 text-xs font-mono">
          <span className="text-slate-500">Press ESC or click outside to dismiss</span>
          {credentialUrl && credentialUrl !== "#" ? (
            <a 
              href={credentialUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-colors"
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
