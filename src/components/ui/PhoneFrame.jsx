import React from "react";
import { 
  PhoneCall, ShieldAlert, Activity, MapPin, 
  Sparkles, UserCheck, Trophy, CalendarCheck,
  Signal, Wifi, Battery
} from "lucide-react";

export function PhoneFrame({ screen, image, onClick }) {
  const getThemeStyles = (theme) => {
    switch (theme) {
      case "red":
        return {
          bg: "from-red-600 via-rose-700 to-red-900",
          accent: "bg-red-500",
          text: "text-white",
          subtext: "text-red-200"
        };
      case "emerald":
        return {
          bg: "from-emerald-600 via-teal-700 to-emerald-900",
          accent: "bg-emerald-500",
          text: "text-white",
          subtext: "text-emerald-200"
        };
      case "map":
        return {
          bg: "from-slate-800 via-blue-950 to-slate-900",
          accent: "bg-cyan-500",
          text: "text-white",
          subtext: "text-cyan-300"
        };
      default:
        return {
          bg: "from-slate-800 via-slate-900 to-slate-950",
          accent: "bg-slate-700",
          text: "text-white",
          subtext: "text-slate-400"
        };
    }
  };

  const themeStyles = getThemeStyles(screen?.theme || "slate");

  return (
    <div 
      onClick={onClick}
      className="group relative w-full aspect-[9/18.5] max-w-[190px] rounded-[1.75rem] p-1.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 shadow-xl border border-slate-700/50 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
    >
      {/* Inner Bezel */}
      <div className="relative w-full h-full rounded-[1.35rem] overflow-hidden bg-slate-950 border border-black/40 flex flex-col justify-between">
        
        {/* Dynamic Island / Notch */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-full z-30 flex items-center justify-end px-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80 animate-pulse"></div>
        </div>

        {/* Status Bar */}
        <div className="relative z-20 flex items-center justify-between px-3 pt-2 text-[8px] font-mono text-slate-300">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <Signal className="w-2.5 h-2.5" />
            <Wifi className="w-2.5 h-2.5" />
            <Battery className="w-3 h-3" />
          </div>
        </div>

        {/* Screen Content */}
        {image ? (
          <img src={image} alt={screen?.label || "App screen"} className="w-full h-full object-cover" />
        ) : (
          <div className={`w-full h-full flex flex-col justify-between p-3 bg-gradient-to-b ${themeStyles.bg}`}>
            
            {/* Top App Header */}
            <div className="mt-3 text-center">
              <span className="text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full bg-black/30 backdrop-blur-sm text-slate-200">
                {screen?.label || "Screen"}
              </span>
            </div>

            {/* Center Graphic / Icon Representation */}
            <div className="flex flex-col items-center justify-center my-auto text-center px-1">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                {screen?.icon === "ShieldAlert" && <ShieldAlert className="w-6 h-6 text-white" />}
                {screen?.icon === "PhoneCall" && <PhoneCall className="w-6 h-6 text-white animate-bounce" />}
                {screen?.icon === "Activity" && <Activity className="w-6 h-6 text-white" />}
                {screen?.icon === "MapPin" && <MapPin className="w-6 h-6 text-cyan-300" />}
                {screen?.icon === "Sparkles" && <Sparkles className="w-6 h-6 text-yellow-300" />}
                {screen?.icon === "UserCheck" && <UserCheck className="w-6 h-6 text-white" />}
                {screen?.icon === "Trophy" && <Trophy className="w-6 h-6 text-amber-300" />}
                {screen?.icon === "CalendarCheck" && <CalendarCheck className="w-6 h-6 text-white" />}
              </div>

              {screen?.theme === "map" && (
                <div className="w-full mt-3 p-1.5 rounded-lg bg-black/40 border border-cyan-500/30 text-[8px] font-mono text-cyan-300">
                  <div className="flex items-center justify-between">
                    <span>GPS Radius</span>
                    <span className="text-emerald-400">ACTIVE</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1 rounded mt-1 overflow-hidden">
                    <div className="bg-cyan-400 h-full w-3/4"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom App Dock / Nav bar */}
            <div className="w-full pt-2 border-t border-white/10 flex items-center justify-around text-white/70">
              <div className="w-6 h-1 rounded-full bg-white/40"></div>
            </div>
          </div>
        )}

        {/* Bottom Home Indicator Bar */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-14 h-1 bg-white/60 rounded-full z-30"></div>
      </div>
    </div>
  );
}
