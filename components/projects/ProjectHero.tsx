import * as React from "react";
import { Terminal, Layers, BookOpen, Sparkles, Cpu } from "lucide-react";

export function ProjectHero() {
  const telemetry = [
    { label: "Active Universes", value: "03 Worlds", icon: Layers },
    { label: "Chapters Published", value: "148 Chapters", icon: BookOpen },
    { label: "Interactive Engines", value: "02 Prototypes", icon: Cpu },
    { label: "Reader Retention", value: "98.4%", icon: Sparkles },
  ];

  return (
    <section aria-labelledby="projects-title" className="relative border-b border-[#1E222D] px-6 py-20 sm:py-28 overflow-hidden">
      {/* Background signature sunset orange ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[400px] bg-gradient-to-b from-[#F59E0B]/10 via-[#D4A373]/[0.06] to-transparent blur-[140px] rounded-full"
      />

      <div className="relative max-w-6xl mx-auto flex flex-col gap-10">
        {/* System Tag */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[#2A2E3D] bg-[#12141C]/80 backdrop-blur-sm w-fit">
          <Terminal className="w-3.5 h-3.5 text-[#D4A373]" />
          <span className="text-[0.65rem] font-mono font-bold tracking-[0.22em] uppercase text-[#D4A373]">
            System Archive // Studio Projects
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.9)] animate-pulse" />
        </div>

        {/* Title & Narrative */}
        <div className="flex flex-col gap-5 max-w-4xl">
          <h1
            id="projects-title"
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.035em] leading-[1.04] text-[#F9FAFB]"
          >
            Crafted Works &amp;{" "}
            <span className="bg-gradient-to-r from-[#F9FAFB] via-[#F59E0B] to-[#D4A373] bg-clip-text text-transparent">
              Digital Universes.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl leading-relaxed">
            Katalog karya dan rekayasa digital Twilight Studio. Menghubungkan fiksi fantasi gelap imersif, 
            sistem arsitektur web berperforma tinggi, serta eksplorasi mekanik game interaktif yang dibangun tanpa kompromi.
          </p>
        </div>

        {/* Studio Telemetry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#1E222D] border border-[#1E222D] rounded-lg overflow-hidden mt-2">
          {telemetry.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col gap-2 bg-[#090A0F] hover:bg-[#12141C] transition-colors px-5 py-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[0.62rem] font-mono tracking-wider uppercase text-[#6B7280]">
                  {label}
                </span>
                <Icon className="w-3.5 h-3.5 text-[#D4A373]/70" />
              </div>
              <span className="text-lg font-bold text-[#F9FAFB] tracking-tight">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
