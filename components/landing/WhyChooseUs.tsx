import * as React from "react"
import { Code2, BanIcon, Zap, MessageSquare } from "lucide-react"

interface Advantage {
  id: string
  icon: React.ElementType
  index: string
  title: string
  description: string
}

const advantages: Advantage[] = [
  {
    id: "clean-code",
    icon: Code2,
    index: "01",
    title: "Clean Code Architecture",
    description:
      "Dibangun di atas Next.js App Router dengan struktur modular yang ketat — setiap komponen punya tempat, setiap baris punya tujuan. Tidak ada spaghetti, tidak ada technical debt tersembunyi.",
  },
  {
    id: "anti-slop",
    icon: BanIcon,
    index: "02",
    title: "Anti-AI-Slop Design",
    description:
      "Desain industrial murni yang lahir dari keputusan sadar. Tidak ada elemen dekoratif berlebih, tidak ada neon glow, tidak ada gradien acak yang memperlambat performa.",
  },
  {
    id: "performance",
    icon: Zap,
    index: "03",
    title: "Lightning Fast Performance",
    description:
      "Setiap halaman dioptimalkan untuk Core Web Vitals — LCP, CLS, dan FID dijaga ketat. Static generation, lazy loading, dan asset optimization adalah standar minimum.",
  },
  {
    id: "collaboration",
    icon: MessageSquare,
    index: "04",
    title: "Direct Collaboration",
    description:
      "Tidak ada account manager perantara. Komunikasi langsung dengan pengembang yang mengerjakan proyekmu — revisi cepat, keputusan tepat, pemahaman mendalam.",
  },
]

function AdvantageItem({ icon: Icon, index, title, description }: Omit<Advantage, "id">) {
  return (
    <div className="group flex flex-col gap-5 bg-[#090A0F] border border-[#1E222D] rounded-lg p-7 hover:border-[#D4A373]/30 transition-all duration-300 relative overflow-hidden">
      {/* Hover ambient */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#D4A373]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />

      <div className="flex items-center justify-between">
        <span className="flex items-center justify-center w-10 h-10 rounded-sm bg-[#12141C] border border-[#2A2E3D] group-hover:border-[#D4A373]/30 transition-colors">
          <Icon className="w-4 h-4 text-[#D4A373]" />
        </span>
        <span className="text-[0.62rem] font-mono font-bold tracking-[0.2em] uppercase text-[#D4A373]/30 group-hover:text-[#D4A373]/60 transition-colors">
          {index}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-base font-bold tracking-tight text-[#F9FAFB] leading-snug">{title}</h3>
        <p className="text-sm text-[#9CA3AF] leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export function WhyChooseUs() {
  return (
    <section id="about" aria-labelledby="why-heading" className="bg-[#090A0F] border-t border-[#1E222D] py-24 px-6 relative overflow-hidden">
      {/* Center glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[200px] bg-[#D4A373]/[0.03] blur-[100px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-14 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="text-[0.62rem] font-mono font-bold tracking-[0.22em] uppercase text-[#D4A373]/70">03 / Studio Principles</span>
            <h2 id="why-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F9FAFB] leading-tight">
              Mengapa Twilight Studio?
            </h2>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              Empat prinsip yang membentuk setiap keputusan desain dan engineering di studio ini.
            </p>
          </div>
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-[#D4A373]/20 to-transparent max-w-[200px] mb-1" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {advantages.map((item) => (
            <AdvantageItem key={item.id} icon={item.icon} index={item.index} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
