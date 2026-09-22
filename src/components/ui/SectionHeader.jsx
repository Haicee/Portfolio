import React from "react";

export function SectionHeader({ number, title, subtitle }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-800/40 px-2.5 py-0.5 rounded-full">
          {number}
        </span>
        <span className="h-px w-6 bg-slate-800"></span>
        <h2 className="font-mono text-sm sm:text-base font-bold tracking-widest text-slate-100 uppercase">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-2 text-sm text-slate-400 font-sans max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
