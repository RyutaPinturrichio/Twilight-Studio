"use client"

import * as React from "react"
import Link from "next/link"
import { Layers, Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/* ─── Types ─────────────────────────────────────────── */
export interface NavItem {
  label: string
  href: string
}

export const defaultNavItems: NavItem[] = [
  { label: "Home",     href: "/"         },
  { label: "About",    href: "/about"    },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact",  href: "/#contact" },
]

/* ─── Props ──────────────────────────────────────────── */
export interface NavbarProps {
  navItems?: NavItem[]
}

/* ─── Component ──────────────────────────────────────── */
export function Navbar({ navItems = defaultNavItems }: NavbarProps) {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4">
      <nav
        className={cn(
          "w-full max-w-4xl border rounded-full px-5 py-2.5 flex items-center justify-between transition-all duration-500",
          scrolled
            ? "border-[#D4A373]/20 backdrop-blur-xl bg-[#090A0F]/95 shadow-[0_8px_40px_rgba(0,0,0,0.7)]"
            : "border-[#2A2E3D]   backdrop-blur-md  bg-[#12141C]/80 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
        )}
        aria-label="Main navigation"
      >
        {/* ── Logo ─────────────────────────── */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Twilight Studio — home">
          <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#D4A373]/10 border border-[#D4A373]/30 group-hover:bg-[#D4A373]/20 transition-colors">
            <Layers className="w-3.5 h-3.5 text-[#D4A373]" />
          </span>
          <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[#F9FAFB] group-hover:text-[#D4A373] transition-colors">
            Twilight Studio
          </span>
        </Link>

        {/* ── Desktop links ─────────────────── */}
        <div className="hidden md:flex items-center gap-7" role="menubar">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              role="menuitem"
              className="text-[0.7rem] font-semibold tracking-[0.08em] uppercase text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#D4A373] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* ── Desktop CTA ───────────────────── */}
        <div className="hidden md:flex items-center">
          <Button
            asChild
            size="sm"
            className="bg-[#F3F4F6] text-[#090A0F] hover:bg-[#D4A373] hover:text-[#090A0F] text-[0.7rem] font-bold tracking-wide rounded-full px-5 h-8 transition-all duration-300 shadow-md"
          >
            <Link href="/#contact">
              Get Started
              <ChevronRight className="w-3 h-3 ml-1" />
            </Link>
          </Button>
        </div>

        {/* ── Mobile toggle ─────────────────── */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden text-[#9CA3AF] hover:text-[#F9FAFB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A373] rounded-full p-1 transition-colors"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* ── Mobile dropdown ──────────────────── */}
      {mobileOpen && (
        <div
          className="absolute top-[4.5rem] inset-x-4 bg-[#12141C] border border-[#2A2E3D] rounded-2xl p-6 flex flex-col gap-3 shadow-2xl md:hidden"
          role="menu"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              role="menuitem"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors py-1 border-b border-[#1E222D] last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            size="sm"
            className="bg-[#F3F4F6] text-[#090A0F] hover:bg-[#D4A373] text-xs font-bold rounded-lg w-full mt-2 h-10"
          >
            <Link href="/#contact" onClick={() => setMobileOpen(false)}>
              Get Started →
            </Link>
          </Button>
        </div>
      )}
    </header>
  )
}
