"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Zap, Shield, Code2, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/Navbar"

/* ─── Types ─────────────────────────────────────────── */
export interface StatItem {
  value: string
  label: string
}

export interface HeroSectionProps {
  stats?: StatItem[]
  title?: string
  titleAccent?: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  ctaSecondaryText?: string
  ctaSecondaryHref?: string
}

/* ─── Data ───────────────────────────────────────────── */
const defaultStats: StatItem[] = [
  { value: "120+", label: "Projects Shipped"    },
  { value: "98%",  label: "Client Satisfaction" },
  { value: "8yr",  label: "Studio Experience"   },
  { value: "40ms", label: "Avg. Load Time"      },
]

const featureTags = [
  { icon: Zap,    label: "Performance-First" },
  { icon: Shield, label: "Enterprise-Grade"  },
  { icon: Code2,  label: "Clean Codebase"    },
  { icon: Globe,  label: "Global Deploy"     },
]

/* ─── Background decoration ─────────────────────────── */
function GridDecoration() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #F9FAFB 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Warm orange glow — top center */}
      <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#D4A373]/[0.07] blur-[120px]" />
      {/* Left accent */}
      <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-[#D4A373]/[0.04] blur-[90px]" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#090A0F] to-transparent" />
    </div>
  )
}

/* ─── Stats strip ────────────────────────────────────── */
function StatsStrip({ stats }: { stats: StatItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#D4A373]/10 border border-[#D4A373]/20 rounded-xl overflow-hidden w-full max-w-2xl">
      {stats.map(({ value, label }) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center gap-1 bg-[#090A0F] hover:bg-[#12141C] transition-colors px-6 py-5"
        >
          <span className="text-2xl font-extrabold tracking-tight text-[#D4A373]">{value}</span>
          <span className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-[#9CA3AF]">{label}</span>
        </div>
      ))}
    </div>
  )
}

/* ─── Feature tags ───────────────────────────────────── */
function FeatureTags() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {featureTags.map(({ icon: Icon, label }) => (
        <span
          key={label}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#2A2E3D] bg-[#12141C]/60 text-[0.68rem] font-semibold tracking-wide text-[#9CA3AF] hover:border-[#D4A373]/50 hover:text-[#F9FAFB] transition-colors cursor-default"
        >
          <Icon className="w-3 h-3 text-[#D4A373]" />
          {label}
        </span>
      ))}
    </div>
  )
}

/* ─── Main Export ────────────────────────────────────── */
export function HeroSection({
  stats            = defaultStats,
  title            = "Engineering Worlds",
  titleAccent      = "Digital Systems",
  subtitle         = "Twilight Studio membangun solusi web industrial dan portal fiksi imersif — antarmuka minimalis, performa tingkat tinggi, dan kode presisi",
  ctaText          = "Explore Work",
  ctaHref          = "#project",
  ctaSecondaryText = "Learn Architecture",
  ctaSecondaryHref = "/about",
}: HeroSectionProps) {

  return (
    <div id="home" className="relative min-h-screen bg-[#090A0F] text-[#F9FAFB] flex flex-col overflow-hidden">
      <GridDecoration />

      {/* Shared Navbar */}
      <Navbar />

      {/* ── Hero body ────────────────────────────────── */}
      <main
        id="hero-main"
        className="flex-1 flex flex-col items-center justify-center px-6 pt-36 pb-24 text-center"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4A373]/30 bg-[#D4A373]/5 text-[0.68rem] font-mono font-bold text-[#D4A373] tracking-[0.12em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] animate-pulse" />
            Indepedent Creative &amp; Tech Studio
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] font-extrabold tracking-[-0.035em] leading-[1.04] text-[#F9FAFB]">
            {title}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#D4A373]">{titleAccent}</span>
              <span aria-hidden="true" className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4A373]/60 via-[#D4A373]/20 to-transparent rounded-full" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl leading-[1.7]">{subtitle}</p>

          {/* Tags */}
          <FeatureTags />

          {/* CTA group */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Button
              id="cta-primary"
              asChild
              size="lg"
              className="bg-[#F3F4F6] text-[#090A0F] hover:bg-[#D4A373] hover:text-[#090A0F] font-bold text-sm px-8 h-12 rounded-lg gap-2 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-[#D4A373]/25 hover:shadow-xl"
            >
              <Link href={ctaHref}>
                {ctaText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <Button
              id="cta-secondary"
              asChild
              variant="outline"
              size="lg"
              className="border-[#2A2E3D] bg-[#12141C]/80 text-[#F9FAFB] hover:bg-[#1A1D26] hover:border-[#D4A373]/40 font-medium text-sm px-8 h-12 rounded-lg gap-2 transition-all duration-300 w-full sm:w-auto"
            >
              <Link href={ctaSecondaryHref}>
                {ctaSecondaryText}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <StatsStrip stats={stats} />
        </div>
      </main>
    </div>
  )
}
