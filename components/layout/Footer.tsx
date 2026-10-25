"use client"

import * as React from "react"
import Link from "next/link"
import { Layers } from "lucide-react"

/* ─── Data ───────────────────────────────────────────── */
const navColumns = [
  {
    heading: "Navigation",
    links: [
      { label: "Projects",    href: "/#project"  },
      { label: "Services",    href: "/services"  },
      { label: "About Us",    href: "/about"     },
      { label: "Contact",     href: "/#contact"  },
      { label: "Terminology", href: "#terminology"},
    ],
  },
  {
    heading: "Ecosystem",
    links: [
      { label: "TL Sparkle (Web Novel)",   href: "/#tl-sparkle"   },
      { label: "Aether Weeds (Game)",      href: "/#aether-weeds" },
      { label: "Digital Craft & Branding", href: "/#digital-craft"},
      { label: "Web Dev Services",         href: "/services"      },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy",   href: "#privacy" },
      { label: "Terms of Service", href: "#terms"   },
      { label: "Cookie Policy",    href: "#cookies" },
      { label: "Sitemap",          href: "#sitemap" },
    ],
  },
]

/* ─── Main Export ────────────────────────────────────── */
export function Footer() {
  const [year, setYear] = React.useState<number | null>(null)
  React.useEffect(() => { setYear(new Date().getFullYear()) }, [])

  return (
    <footer id="contact" aria-label="Site footer" className="bg-[#090A0F] border-t border-[#1E222D]">

      {/* Thin amber top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4A373]/40 to-transparent" aria-hidden="true" />

      {/* ── Upper ──────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand col */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2 w-fit group" aria-label="Twilight Studio — home">
            <span className="flex items-center justify-center w-7 h-7 rounded-sm bg-[#D4A373]/10 border border-[#D4A373]/30 group-hover:bg-[#D4A373]/20 transition-colors">
              <Layers className="w-3.5 h-3.5 text-[#D4A373]" />
            </span>
            <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[#F9FAFB] group-hover:text-[#D4A373] transition-colors">
              Twilight Studio
            </span>
          </Link>
          <p className="text-xs text-[#9CA3AF] leading-relaxed max-w-[220px]">
            Studio kreatif independen yang berfokus pada rekayasa web presisi, desain industri minimalis, dan proyek naratif digital.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-sm border border-[#2A2E3D] bg-[#12141C] w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] animate-pulse" aria-hidden="true" />
            <span className="text-[0.62rem] font-mono font-semibold tracking-wider text-[#9CA3AF]">
              All Systems Operational
            </span>
          </div>
        </div>

        {/* Link cols */}
        {navColumns.map((col) => (
          <div key={col.heading} className="flex flex-col gap-5">
            <h3 className="text-[0.62rem] font-mono font-bold tracking-[0.18em] uppercase text-[#D4A373]/60">
              {col.heading}
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Lower strip ──────────────────────────────────── */}
      <div className="border-t border-[#1E222D]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.62rem] font-mono text-[#6B7280] text-center sm:text-left">
            © {year ?? "2026"} Twilight Studio. Seluruh hak cipta dilindungi undang-undang.
          </p>
          <p className="text-[0.62rem] font-mono text-[#4B5563]">
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
