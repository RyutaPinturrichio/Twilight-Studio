import * as React from "react"
import { Layers, Terminal, Sparkles, ShieldCheck, Zap, Code2 } from "lucide-react"

export function ServicesHeader() {
  return (
    <section
      aria-labelledby="services-catalog-title"
      className="relative px-6 pt-16 pb-20 border-b border-[#1E222D] overflow-hidden"
    >
      {/* Ambient background glow - warm sunset orange */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#D4A373]/[0.06] blur-[140px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-40 w-[400px] h-[350px] bg-[#D4A373]/[0.03] blur-[100px] rounded-full"
      />

      <div className="max-w-6xl mx-auto flex flex-col gap-8 relative">
        {/* System badge */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[#2A2E3D] bg-[#12141C]/80 w-fit">
          <Terminal className="w-3.5 h-3.5 text-[#D4A373]" />
          <span className="text-[0.62rem] font-mono font-bold tracking-[0.22em] uppercase text-[#9CA3AF]">
            System Services // Catalog Archive
          </span>
        </div>

        {/* Title & description */}
        <div className="flex flex-col gap-6 max-w-4xl">
          <h1
            id="services-catalog-title"
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.035em] leading-[1.05] text-[#F9FAFB]"
          >
            Professional Web{" "}
            <span className="bg-gradient-to-r from-[#F9FAFB] via-[#E5E7EB] to-[#D4A373] bg-clip-text text-transparent">
              Development Services.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl leading-relaxed">
            Solusi koding bersih, cepat, dan kustom tanpa template berlebihan untuk brand,
            portofolio, atau portal digital kamu. Dibangun di atas fondasi teknologi modern
            dengan standar performa dan kejelasan arsitektur tertinggi.
          </p>
        </div>

        {/* Feature badges row */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#1E222D] bg-[#12141C] text-[0.68rem] font-mono text-[#9CA3AF]">
            <Code2 className="w-3.5 h-3.5 text-[#D4A373]" />
            100% Clean Custom Code
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#1E222D] bg-[#12141C] text-[0.68rem] font-mono text-[#9CA3AF]">
            <Zap className="w-3.5 h-3.5 text-[#D4A373]" />
            Core Web Vitals &lt; 40ms
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#1E222D] bg-[#12141C] text-[0.68rem] font-mono text-[#9CA3AF]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4A373]" />
            Strict Anti-Slop Guarantee
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#1E222D] bg-[#12141C] text-[0.68rem] font-mono text-[#9CA3AF]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
            Full Source Code Ownership
          </span>
        </div>

        {/* Horizontal rule with subtle orange center fade */}
        <div className="flex items-center gap-4 pt-4">
          <div
            className="h-px flex-1 bg-gradient-to-r from-[#1E222D] via-[#D4A373]/30 to-[#1E222D]"
            aria-hidden="true"
          />
          <span className="text-[0.62rem] font-mono text-[#D4A373]/70 tracking-widest uppercase">
            Pricing &amp; Specifications
          </span>
        </div>
      </div>
    </section>
  )
}
