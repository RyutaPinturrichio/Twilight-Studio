import * as React from "react"
import { Check, ArrowRight, Sparkles, Globe, LayoutDashboard, BookMarked, Clock } from "lucide-react"

export interface ServicePackageItem {
  id: string
  name: string
  tagline: string
  price: string
  priceSuffix: string
  timeline: string
  description: string
  badge?: string
  featured?: boolean
  features: string[]
  icon: React.ElementType
}

export const servicePackages: ServicePackageItem[] = [
  {
    id: "landing-page",
    name: "Custom Landing Page",
    tagline: "Portfolio & Brand Identity",
    price: "Rp 1.750.000",
    priceSuffix: "mulai dari",
    timeline: "3 – 5 Hari Kerja",
    description:
      "Halaman landing bersih yang dioptimalkan untuk kecepatan kilat, konversi tinggi, dan identitas merek yang tajam. Sangat cocok untuk portofolio kreatif dan produk digital.",
    icon: Globe,
    features: [
      "Next.js 16 App Router & TypeScript murni",
      "Tailwind CSS custom industrial design system",
      "1 – 3 Sections kustom tanpa template generic",
      "Lighthouse 95+ Core Web Vitals optimized",
      "Mobile-First & Ultra Responsive layout",
      "SEO Metadata, Sitemap & OpenGraph tags",
      "Free Deployment langsung ke Vercel",
      "Garansi bug fixing 14 hari paska deploy",
    ],
  },
  {
    id: "web-app",
    name: "Web App & Dashboard",
    tagline: "Custom Web Development & API Integration",
    price: "Rp 4.850.000",
    priceSuffix: "mulai dari",
    timeline: "7 – 14 Hari Kerja",
    description:
      "Aplikasi web fungsional penuh dengan backend database, admin control panel, manajemen autentikasi user/role, serta integrasi REST API atau billing portal.",
    badge: "RECOMMENDED // CORE SOLUTION",
    featured: true,
    icon: LayoutDashboard,
    features: [
      "Full-Stack Next.js + PostgreSQL / Supabase",
      "Custom Admin Dashboard & Analitik Panel",
      "Secure Auth (Role-based: Admin & Client)",
      "RESTful API Endpoints & Webhook handling",
      "Pterodactyl / Paymenter / Payment Gateway ready",
      "Database schema & data backup configuration",
      "CI/CD Pipeline & Cloud Architecture guide",
      "Garansi bug fixing 30 hari paska rilis",
    ],
  },
  {
    id: "web-novel",
    name: "Web Novel / Reader Portal",
    tagline: "Custom Reading Platform & Lore System",
    price: "Rp 3.250.000",
    priceSuffix: "mulai dari",
    timeline: "5 – 10 Hari Kerja",
    description:
      "Platform baca digital kustom ala TL Sparkle dengan tampilan editorial minimalis, dark mode penuh, navigasi chapter intuitif, dan database lore terstruktur.",
    icon: BookMarked,
    features: [
      "Custom Chapter Reader UI dengan setting font & spacing",
      "Native Dark Mode & layout baca zero-distraction",
      "Lore, Glossary, dan Character Encyclopedia system",
      "Chapter Navigation & Auto-Bookmark State",
      "Komentar per chapter & sistem pembaca aktif",
      "SEO-Friendly per-chapter indexation URL",
      "Supabase Cloud Storage untuk aset cover & art",
      "Garansi bug fixing 30 hari paska peluncuran",
    ],
  },
]

interface PricingPackagesProps {
  onSelectPackage: (packageId: string) => void
  selectedPackage?: string
}

export function PricingPackages({ onSelectPackage, selectedPackage }: PricingPackagesProps) {
  return (
    <section
      id="packages"
      aria-labelledby="packages-heading"
      className="px-6 py-24 bg-[#090A0F] border-b border-[#1E222D] relative overflow-hidden"
    >
      {/* Background warm ambient accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 w-[650px] h-[350px] bg-[#D4A373]/[0.03] blur-[130px] rounded-full"
      />

      <div className="max-w-6xl mx-auto flex flex-col gap-14 relative">
        {/* Section title header */}
        <div className="flex flex-col gap-3 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]" />
            <span className="text-[0.62rem] font-mono font-bold tracking-[0.22em] uppercase text-[#D4A373]/80">
              01 // Pricing Packages
            </span>
          </div>
          <h2
            id="packages-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F9FAFB] leading-tight"
          >
            Pilihan Paket Layanan
          </h2>
          <p className="text-sm text-[#9CA3AF] leading-relaxed">
            Transparansi penuh tanpa biaya tersembunyi. Pilih paket yang sesuai dengan kebutuhan skala
            proyek kamu saat ini.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {servicePackages.map((pkg) => {
            const Icon = pkg.icon
            const isSelected = selectedPackage === pkg.id
            const isFeatured = pkg.featured

            return (
              <article
                key={pkg.id}
                id={`card-${pkg.id}`}
                className={`relative flex flex-col justify-between rounded-xl border p-8 transition-all duration-300 overflow-hidden ${
                  isFeatured
                    ? "bg-gradient-to-br from-[#1A1208] via-[#120E06] to-[#090A0F] border-[#D4A373]/50 shadow-[0_0_50px_rgba(212,163,115,0.09)]"
                    : "bg-[#090A0F] border-[#1E222D] hover:border-[#D4A373]/30"
                } ${isSelected ? "ring-2 ring-[#D4A373] border-[#D4A373]" : ""}`}
              >
                {/* Featured top gradient line */}
                {isFeatured && (
                  <div
                    className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4A373] to-transparent"
                    aria-hidden="true"
                  />
                )}

                {/* Top header row */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span
                      className={`flex items-center justify-center w-11 h-11 rounded-lg border ${
                        isFeatured
                          ? "bg-[#D4A373]/15 border-[#D4A373]/40 text-[#D4A373]"
                          : "bg-[#12141C] border-[#2A2E3D] text-[#9CA3AF]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </span>

                    {pkg.badge ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.62rem] font-mono font-bold tracking-wider uppercase bg-[#D4A373]/10 border border-[#D4A373]/30 text-[#D4A373]">
                        <Sparkles className="w-3 h-3" />
                        {pkg.badge}
                      </span>
                    ) : (
                      <span className="text-[0.62rem] font-mono font-bold tracking-widest uppercase text-[#6B7280]">
                        STANDARD TIER
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold tracking-tight text-[#F9FAFB] leading-snug">
                    {pkg.name}
                  </h3>
                  <p
                    className={`text-xs font-mono tracking-wide mt-1 ${
                      isFeatured ? "text-[#D4A373]/80" : "text-[#6B7280]"
                    }`}
                  >
                    {pkg.tagline}
                  </p>

                  {/* Price box */}
                  <div className="mt-6 pt-5 pb-5 border-y border-[#1E222D]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F9FAFB]">
                        {pkg.price}
                      </span>
                      <span className="text-[0.65rem] font-mono uppercase tracking-wider text-[#9CA3AF]">
                        / {pkg.priceSuffix}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-2 text-[0.7rem] font-mono text-[#6B7280]">
                      <Clock className="w-3.5 h-3.5 text-[#D4A373]/70" />
                      Estimasi: <span className="text-[#9CA3AF]">{pkg.timeline}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-sm text-[#9CA3AF] leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Checklist features */}
                  <div className="mt-6 pt-4 border-t border-[#1E222D]/60 flex flex-col gap-3">
                    <span className="text-[0.65rem] font-mono uppercase tracking-wider text-[#6B7280]">
                      Termasuk dalam paket:
                    </span>
                    <ul className="flex flex-col gap-2.5">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs text-[#9CA3AF]">
                          <Check
                            className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                              isFeatured ? "text-[#D4A373]" : "text-[#6B7280]"
                            }`}
                          />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectPackage(pkg.id)}
                    className={`w-full inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-md transition-all duration-300 ${
                      isFeatured
                        ? "bg-[#D4A373] text-[#090A0F] hover:bg-[#E8B887] shadow-lg shadow-[#D4A373]/10"
                        : "bg-[#12141C] text-[#F9FAFB] border border-[#2A2E3D] hover:border-[#D4A373]/50 hover:bg-[#1A1D26]"
                    } ${isSelected ? "ring-2 ring-offset-2 ring-offset-[#090A0F] ring-[#D4A373]" : ""}`}
                  >
                    {isSelected ? "Paket Terpilih ✓" : "Pilih Paket"}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
