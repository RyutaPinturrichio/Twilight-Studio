import * as React from "react"
import { Terminal } from "lucide-react"

export function AboutHero() {
  return (
    <section
      aria-labelledby="about-title"
      className="border-b border-[#1E222D] px-6 py-20 sm:py-28 relative overflow-hidden"
    >
      {/* Background ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#D4A373]/[0.05] blur-[120px] rounded-full"
      />

      <div className="max-w-6xl mx-auto flex flex-col gap-8 relative">
        {/* System tag */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[#2A2E3D] bg-[#12141C]/60 w-fit">
          <Terminal className="w-3.5 h-3.5 text-[#D4A373]" />
          <span className="text-[0.62rem] font-mono font-bold tracking-[0.22em] uppercase text-[#9CA3AF]">
            System Archive // About the Studio
          </span>
        </div>

        {/* Title */}
        <div className="flex flex-col gap-5 max-w-4xl">
          <h1
            id="about-title"
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.035em] leading-[1.04] text-[#F9FAFB]"
          >
            Crafting Worlds &amp;{" "}
            <span className="bg-gradient-to-r from-[#F9FAFB] to-[#D4A373] bg-clip-text text-transparent">
              Digital Systems.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl leading-relaxed">
            Studio kreatif independen yang menggabungkan fiksi imersif — seperti{" "}
            <span className="text-[#D4A373] font-medium">TL Sparkle</span> — dengan rekayasa
            web modern yang presisi, bersih, dan berorientasi pada performa.
          </p>
        </div>

        {/* Horizontal rule with index */}
        <div className="flex items-center gap-4 pt-2">
          <div className="h-px flex-1 bg-gradient-to-r from-[#1E222D] via-[#D4A373]/30 to-[#1E222D]" aria-hidden="true" />
          <span className="text-[0.62rem] font-mono text-[#D4A373]/70 tracking-widest">
            EST. 2024
          </span>
        </div>
      </div>
    </section>
  )
}
