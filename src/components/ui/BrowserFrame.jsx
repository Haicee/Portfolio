import React from "react";
import { 
  LayoutDashboard, Users, CheckCircle2, Table, Sliders,
  KeyRound, BarChart3, FileText, Search, History,
  Lock, Award, QrCode, FileCheck, FileBadge,
  Gamepad2, Map, Play, HelpCircle, Terminal,
  Laptop, Box, Cpu
} from "lucide-react";

export function BrowserFrame({ screen, image, onClick }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "LayoutDashboard": return <LayoutDashboard className="w-5 h-5 text-blue-400" />;
      case "Users": return <Users className="w-5 h-5 text-indigo-400" />;
      case "CheckCircle2": return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case "Table": return <Table className="w-5 h-5 text-cyan-400" />;
      case "Sliders": return <Sliders className="w-5 h-5 text-purple-400" />;
      case "KeyRound": return <KeyRound className="w-5 h-5 text-cyan-400" />;
      case "BarChart3": return <BarChart3 className="w-5 h-5 text-amber-400" />;
      case "FileText": return <FileText className="w-5 h-5 text-blue-400" />;
      case "Search": return <Search className="w-5 h-5 text-teal-400" />;
      case "History": return <History className="w-5 h-5 text-rose-400" />;
      case "Lock": return <Lock className="w-5 h-5 text-blue-400" />;
      case "Award": return <Award className="w-5 h-5 text-amber-400" />;
      case "QrCode": return <QrCode className="w-5 h-5 text-cyan-400" />;
      case "FileCheck": return <FileCheck className="w-5 h-5 text-emerald-400" />;
      case "FileBadge": return <FileBadge className="w-5 h-5 text-purple-400" />;
      case "Gamepad2": return <Gamepad2 className="w-5 h-5 text-emerald-400" />;
      case "Map": return <Map className="w-5 h-5 text-emerald-400" />;
      case "Play": return <Play className="w-5 h-5 text-emerald-400" />;
      case "HelpCircle": return <HelpCircle className="w-5 h-5 text-emerald-400" />;
      case "Terminal": return <Terminal className="w-5 h-5 text-slate-300" />;
      case "Laptop": return <Laptop className="w-5 h-5 text-cyan-400" />;
      case "Box": return <Box className="w-5 h-5 text-purple-400" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-cyan-400" />;
      default: return <LayoutDashboard className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div 
      onClick={onClick}
      className="group relative rounded-xl overflow-hidden border border-slate-700/60 bg-slate-900 shadow-xl hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
    >
      {/* Top Window Bar */}
      <div className="h-7 bg-slate-800/90 px-3 flex items-center justify-between border-b border-slate-700/60 shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
        </div>
        <div className="px-2 py-0.5 rounded bg-slate-900/60 border border-slate-700/50 text-[9px] font-mono text-slate-400 max-w-[140px] truncate">
          https://{screen?.label?.toLowerCase().replace(/[^a-z0-9]/g, "-") || "portal"}.app
        </div>
        <div className="w-4"></div>
      </div>

      {/* Screen Viewport */}
      {image ? (
        <div className="aspect-[16/10] overflow-hidden">
          <img src={image} alt={screen?.label || "Window view"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      ) : (
        <div className="aspect-[16/10] p-3.5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                {getIcon(screen?.icon)}
              </div>
              <span className="text-xs font-semibold text-slate-200">
                {screen?.label}
              </span>
            </div>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
              Live
            </span>
          </div>

          {/* Graphical Mockup Elements */}
          <div className="my-auto space-y-2">
            <div className="flex gap-2">
              <div className="h-6 flex-1 rounded bg-slate-800/70 border border-slate-700/40"></div>
              <div className="h-6 w-1/3 rounded bg-slate-800/70 border border-slate-700/40"></div>
            </div>
            <div className="space-y-1.5 pt-1">
              <div className="h-2 w-full rounded bg-slate-800/60"></div>
              <div className="h-2 w-4/5 rounded bg-slate-800/40"></div>
              <div className="h-2 w-2/3 rounded bg-slate-800/30"></div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[9px] font-mono text-slate-500">
            <span>200 OK</span>
            <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">inspect ↗</span>
          </div>
        </div>
      )}
    </div>
  );
}
