import * as React from "react";
import { ArrowUpRight, BookOpen, Sparkles, Activity, ShieldCheck } from "lucide-react";

export function FeaturedProject() {
  return (
    <section aria-labelledby="featured-project-heading" className="relative border-b border-[#1E222D] px-6 py-16 sm:py-24 bg-[#090A0F]">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Section Label */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
            <span className="text-[0.65rem] font-mono font-bold tracking-[0.22em] uppercase text-[#D4A373]">
              Flagship Universe // Primary Dossier
            </span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[11px] text-[#6B7280] uppercase tracking-widest">
            KODEX.0914 // VOLUME IV AKTIF
          </span>
        </div>

        {/* Featured Card Box */}
        <div className="relative rounded-xl border border-[#2A2E3D] bg-gradient-to-br from-[#12141C] via-[#0D0F17] to-[#090A0F] p-8 sm:p-12 overflow-hidden hover:border-[#D4A373]/50 transition-all duration-300">
          {/* Subtle Orange Accent Top Glow Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent opacity-80" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#D4A373]/15 border border-[#D4A373]/30 font-mono text-[11px] font-semibold text-[#D4A373] tracking-wider uppercase">
                  Web Novel Serial
                </span>
                <span className="px-2.5 py-1 rounded bg-[#1A1D26] border border-[#2A2E3D] font-mono text-[11px] text-[#9CA3AF] tracking-wider uppercase">
                  Dark Fantasy Architecture
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  RILIS AKTIF
                </span>
              </div>

              <div>
                <h2 id="featured-project-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F9FAFB]">
                  TL Sparkle: <span className="bg-gradient-to-r from-[#F9FAFB] to-[#D4A373] bg-clip-text text-transparent">Twilight Legacy</span>
                </h2>
                <p className="mt-4 text-base text-[#9CA3AF] leading-relaxed">
                  Di sebuah era saat garis ley sakral dikonversi paksa menjadi saluran bahan bakar industri eterik, 
                  seorang arsitek resonansi pembangkang membongkar thaumaturgi tirani kekaisaran batu demi batu. 
                  Dilengkapi arsitektur lore interaktif, katalog blueprint skill, dan sistem pohon sihir tiga tahap.
                </p>
              </div>

              {/* Quote snippet box */}
              <div className="rounded-md border border-[#2A2E3D] bg-[#090A0F]/80 p-4 border-l-2 border-l-[#F59E0B]">
                <p className="text-sm italic text-[#E2E8F0]">
                  “Api tidak membakar abu karena ia lapar; ia membakar karena perjanjian kuno itu lupa cara mendingin.”
                </p>
                <span className="block mt-2 font-mono text-[11px] text-[#D4A373]">
                  — Risalah Eter Mati // Bab 142
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="/#chapters"
                  className="inline-flex items-center gap-2 rounded-md px-6 py-3 bg-gradient-to-r from-[#D4A373] via-[#F59E0B] to-[#EA580C] text-[#090A0F] font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all duration-200"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Mulai Baca Bab Terbaru [148]</span>
                </a>
                <a
                  href="/#chapters"
                  className="inline-flex items-center gap-2 rounded-md px-5 py-3 border border-[#2A2E3D] bg-[#12141C] text-[#F9FAFB] font-mono text-xs uppercase tracking-wider hover:border-[#D4A373] hover:text-[#D4A373] transition-colors"
                >
                  <span>Jelajahi Indeks Ark</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Telemetry Column */}
            <div className="lg:col-span-5 flex flex-col gap-4 rounded-lg border border-[#2A2E3D] bg-[#090A0F] p-5">
              <div className="flex items-center justify-between border-b border-[#1E222D] pb-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[#F9FAFB]">
                    Osilasi Saluran Aeter
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#F59E0B]">[SINKRON: 99.4%]</span>
              </div>

              {/* Leyline Conduit Waveform SVG with Warm Orange Gradients */}
              <div className="w-full bg-[#0D0F17] border border-[#1E222D] rounded p-3 relative overflow-hidden">
                <svg className="w-full h-24 text-[#D4A373]" fill="none" preserveAspectRatio="none" viewBox="0 0 320 100">
                  <defs>
                    <linearGradient id="leylineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#D4A373" />
                      <stop offset="50%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#EA580C" />
                    </linearGradient>
                  </defs>
                  {/* Subtle Grid */}
                  <line stroke="#2A2E3D" strokeDasharray="2 2" x1="0" x2="320" y1="25" y2="25" />
                  <line stroke="#2A2E3D" strokeDasharray="2 2" x1="0" x2="320" y1="50" y2="50" />
                  <line stroke="#2A2E3D" strokeDasharray="2 2" x1="0" x2="320" y1="75" y2="75" />
                  {/* Waveform line */}
                  <path
                    d="M0,50 L40,50 L50,20 L65,85 L80,35 L95,65 L110,48 L140,50 L155,10 L170,90 L185,25 L200,75 L215,50 L260,50 L275,30 L290,70 L305,50 L320,50"
                    stroke="url(#leylineGradient)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <circle cx="50" cy="20" fill="#F59E0B" r="3" />
                  <circle cx="155" cy="10" fill="#EA580C" r="3" />
                  <circle cx="170" cy="90" fill="#D4A373" r="3" />
                  <circle cx="275" cy="30" fill="#F59E0B" r="3" />
                </svg>
                <div className="flex justify-between items-center pt-2 font-mono text-[10px] text-[#6B7280]">
                  <span>FREK: 142.8 THz</span>
                  <span className="text-[#D4A373]">PELURUHAN: 0.003% / HARI</span>
                </div>
              </div>

              {/* Telemetry rows */}
              <div className="flex flex-col gap-2 pt-2 text-xs font-mono">
                <div className="flex justify-between items-center py-1 border-b border-[#1E222D]">
                  <span className="text-[#6B7280]">STATUS ARSIP:</span>
                  <span className="text-[#F9FAFB] font-semibold">148 BAB TERBIT</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#1E222D]">
                  <span className="text-[#6B7280]">TOTAL ESTIMASI BACA:</span>
                  <span className="text-[#F59E0B]">~34.5 JAM (480K KATA)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#1E222D]">
                  <span className="text-[#6B7280]">PERINGKAT PEMBACA:</span>
                  <span className="text-[#F9FAFB]">9.84 / 10.0 (12.4K REVIEW)</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#6B7280]">AKSES KANONIKAL:</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> BEBAS HAMBATAN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
