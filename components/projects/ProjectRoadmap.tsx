import * as React from "react";
import { Calendar, CheckCircle2, Clock, Sparkles } from "lucide-react";

export function ProjectRoadmap() {
  const milestones = [
    {
      quarter: "Q4 2026 // ONGOING",
      title: "TL Sparkle: Arc V 'Hollow Pyre' Climax",
      status: "IN PROGRESS",
      statusColor: "text-[#F59E0B] border-[#F59E0B]/30 bg-[#F59E0B]/10",
      description:
        "Puncak konfrontasi di Menara Pusat. Rilis bab 149-160 dengan audio visual soundtrack ambient dan babak kataklisma thaumaturgis.",
      tag: "Web Novel Serial",
    },
    {
      quarter: "Q1 2027 // UPCOMING",
      title: "Aether Weeds: Tactical Pre-Alpha Playtest",
      status: "SCHEDULED",
      statusColor: "text-[#D4A373] border-[#D4A373]/30 bg-[#D4A373]/10",
      description:
        "Rilis versi demo teknis WebGPU untuk pengujian modul resonansi, routing leyline, dan kalkulasi destabilisasi energi eterik.",
      tag: "Interactive Game",
    },
    {
      quarter: "Q2 2027 // UPCOMING",
      title: "Thaumaturgy Codex 3D Mobile Client",
      status: "DESIGN PHASE",
      statusColor: "text-[#9CA3AF] border-[#2A2E3D] bg-[#1A1D26]",
      description:
        "Aplikasi direktori lore standalone dengan visualisasi pohon sihir 3D, kalkulator pembuatan skill, dan sinkronisasi bookmark offline.",
      tag: "Digital Tool",
    },
  ];

  return (
    <section aria-labelledby="roadmap-heading" className="border-b border-[#1E222D] px-6 py-16 sm:py-24 bg-[#06070A] relative">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span className="text-[0.65rem] font-mono font-bold tracking-[0.22em] uppercase text-[#D4A373]">
                Pipeline // Transmission Schedule
              </span>
            </div>
            <h2 id="roadmap-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F9FAFB]">
              Roadmap Pengembangan{" "}
              <span className="bg-gradient-to-r from-[#F9FAFB] to-[#D4A373] bg-clip-text text-transparent">
                Semesta Studio
              </span>
            </h2>
          </div>
          <p className="text-sm text-[#9CA3AF] max-w-md leading-relaxed font-mono text-xs">
            // Jadwal rilis kanonikal, iterasi engine, dan pembaruan arsitektural Twilight Studio periode 2026-2027.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milestones.map((item, idx) => (
            <div
              key={item.title}
              className="relative rounded-xl border border-[#1E222D] bg-[#090A0F] p-6 flex flex-col justify-between hover:border-[#D4A373]/40 transition-colors"
            >
              {/* Step indicator */}
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E222D]">
                  <span className="font-mono text-[10px] text-[#6B7280] uppercase tracking-wider">
                    {item.quarter}
                  </span>
                  <span className={`px-2 py-0.5 rounded font-mono text-[10px] uppercase tracking-wider border ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>

                <div className="font-mono text-xs text-[#D4A373] uppercase tracking-wider mb-2">
                  {item.tag}
                </div>

                <h3 className="text-lg font-bold text-[#F9FAFB] tracking-tight leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-[#9CA3AF] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E222D] flex items-center justify-between font-mono text-[11px] text-[#6B7280]">
                <span>PHASE {idx + 1} OF 3</span>
                <span className="text-[#D4A373]">EST. MILESTONE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
