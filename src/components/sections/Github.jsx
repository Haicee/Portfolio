import React, { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { SectionHeader } from "../ui/SectionHeader";

export function GithubSection() {
  const [blockSize, setBlockSize] = useState(12);

  useEffect(() => {
    const handleResize = () => {
      setBlockSize(window.innerWidth < 640 ? 9 : 12);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const explicitTheme = {
    light: [
      "#1e293b",
      "#0891b2",
      "#06b6d4",
      "#22d3ee",
      "#67e8f9",
    ],
    dark: [
      "#1e293b",
      "#0891b2",
      "#06b6d4",
      "#22d3ee",
      "#67e8f9",
    ],
  };

  return (
    <section
      id="github"
      className="py-[70px] border-t border-slate-800/80"
    >
      <SectionHeader
        number="06"
        title="github"
        subtitle="My open source contributions and coding activity."
      />

      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/90 via-[#0e1526] to-slate-950 p-6 sm:p-10 shadow-2xl mt-10">

        {/* Glow Backdrops */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center">

          {/* Header */}
          <div className="flex items-center gap-3 mb-8 w-full justify-between">

            <div className="flex items-center gap-2">

              {/* GitHub Logo */}
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-slate-400"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.07.78 2.16v3.19c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>

              <span className="font-mono text-sm text-slate-300">
                @Haicee
              </span>
            </div>

            <a
              href="https://github.com/Haicee"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] text-cyan-400 hover:text-cyan-300 uppercase tracking-widest transition-colors flex items-center gap-1.5"
            >
              View Profile ↗
            </a>
          </div>

          {/* GitHub Calendar */}
          <div className="w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            <div className="min-w-fit flex justify-center">
              <GitHubCalendar
                username="Haicee"
                blockSize={blockSize}
                blockMargin={5}
                colorScheme="dark"
                theme={explicitTheme}
                fontSize={12}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
