import * as React from "react"
import Link from "next/link"
import { Check, ArrowRight, Globe, LayoutDashboard, BookMarked } from "lucide-react"

interface ServicePackage {
  id: string
  icon: React.ElementType
  index: string
  title: string
  tagline: string
  description: string
  features: string[]
  cta: string
  ctaHref: string
  highlighted: boolean
}

const services: ServicePackage[] = [
  {
    id: "landing-page",
    icon: Globe,
    index: "01",
    title: "Custom Landing Page",
    tagline: "Portfolio & Brand Identity",
    description:
      "Halaman landing bersih yang dioptimalkan untuk kecepatan, konversi, dan identitas merek yang tajam. Cocok untuk portofolio kreatif dan brand identity personal maupun bisnis.",
    features: ["Next.js App Router", "Tailwind CSS Design System", "Full SEO Optimization", "Responsive & Mobile-First", "Dark / Light Mode Support", "Deployment Ready (Vercel)"],
    cta: "Diskusikan Proyek",
    ctaHref: "#contact",
    highlighted: false,
  },
  {
    id: "web-app",
    icon: LayoutDashboard,
    index: "02",
    title: "Web App & Dashboard",
    tagline: "Custom Development & API Integration",
    description:
      "Platform web kustom dengan backend integration, dashboard admin, dan API connection. Termasuk Pterodactyl-style panel, billing system, dan sistem manajemen konten.",
    features: ["Full-Stack Next.js + TypeScript", "Supabase / PostgreSQL Backend", "REST & API Integration", "Admin Panel & Dashboard", "Auth & Role Management", "Pterodactyl / Paymenter Style"],
    cta: "Mulai Konsultasi",
    ctaHref: "#contact",
    highlighted: true,
  },
  {
    id: "web-novel",
    icon: BookMarked,
    index: "03",
    title: "Web Novel / Reader Portal",
    tagline: "Custom Reading Platform",
    description:
      "Platform baca kustom dengan tampilan editorial premium, dark mode penuh, chapter navigation, dan database lore terstruktur.",
    features: ["Custom Chapter Reader UI", "Dark Mode Native", "Lore & Glossary Database", "Comment & Bookmark System", "SEO-Optimized Chapter Pages", "Supabase Storage Integration"],
    cta: "Lihat Demo",
    ctaHref: "#tl-sparkle",
    highlighted: false,
  },
]

function ServiceCard({ id, icon: Icon, index, title, tagline, description, features, cta, ctaHref, highlighted }: ServicePackage) {
  return (
    <article
      id={`service-${id}`}
      className={`relative flex flex-col gap-7 rounded-lg border p-8 transition-all duration-300 overflow-hidden ${
        highlighted
          ? "bg-gradient-to-br from-[#1A1208] via-[#120E06] to-[#090A0F] border-[#D4A373]/50 shadow-[0_0_40px_rgba(212,163,115,0.08)]"
          : "bg-[#090A0F] border-[#1E222D] hover:border-[#D4A373]/30"
      }`}
    >
      {/* Highlighted top bar */}
      {highlighted && (
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4A373]/60 to-transparent" aria-hidden="true" />
      )}

      <div className="flex items-center justify-between">
        <span className={`text-[0.62rem] font-mono font-bold tracking-[0.2em] uppercase ${highlighted ? "text-[#D4A373]/70" : "text-[#6B7280]"}`}>
          {index}
        </span>
        <span className={`flex items-center justify-center w-9 h-9 rounded-sm border ${highlighted ? "bg-[#D4A373]/10 border-[#D4A373]/30" : "bg-[#12141C] border-[#2A2E3D]"}`}>
          <Icon className={`w-4 h-4 ${highlighted ? "text-[#D4A373]" : "text-[#9CA3AF]"}`} />
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-xl font-bold tracking-tight text-[#F9FAFB] leading-tight">{title}</h3>
        <p className={`text-xs font-mono tracking-wide ${highlighted ? "text-[#D4A373]/60" : "text-[#6B7280]"}`}>{tagline}</p>
        <p className="mt-2 text-sm text-[#9CA3AF] leading-relaxed">{description}</p>
      </div>

      <ul className="flex flex-col gap-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-[#9CA3AF]">
            <Check className={`w-3.5 h-3.5 shrink-0 ${highlighted ? "text-[#D4A373]" : "text-[#6B7280]"}`} />
            {f}
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={`mt-auto inline-flex items-center justify-center gap-2 text-sm font-bold px-6 py-3 rounded-sm transition-all duration-300 ${
          highlighted
            ? "bg-[#D4A373] text-[#090A0F] hover:bg-[#E8B887]"
            : "bg-[#F3F4F6] text-[#090A0F] hover:bg-[#D4A373]"
        }`}
      >
        {cta} <ArrowRight className="w-4 h-4" />
      </Link>
    </article>
  )
}

export function ServicesOverview() {
  return (
    <section id="pricing" aria-labelledby="services-heading" className="bg-[#090A0F] border-t border-[#1E222D] py-24 px-6 relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#D4A373]/[0.04] blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto flex flex-col gap-14 relative">
        <div className="flex flex-col gap-3 max-w-xl">
          <span className="text-[0.62rem] font-mono font-bold tracking-[0.22em] uppercase text-[#D4A373]/70">02 / Services</span>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F9FAFB] leading-tight">Layanan Studio</h2>
          <p className="text-sm text-[#9CA3AF] leading-relaxed">Tiga paket layanan yang dirancang dengan presisi — dari halaman statis hingga platform kompleks.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s) => <ServiceCard key={s.id} {...s} />)}
        </div>
      </div>
    </section>
  )
}
