import * as React from "react"
import Link from "next/link"
import { ArrowUpRight, BookOpen, Gamepad2, Layers } from "lucide-react"

interface ProjectCard {
  id: string
  category: string
  categoryIcon: React.ElementType
  title: string
  subtitle: string
  description: string
  status: string
  statusActive: boolean
  ctaLabel: string
  ctaHref: string
  tags: string[]
}

const projects: ProjectCard[] = [
  {
    id: "tl-sparkle",
    category: "Web Novel / Serializing",
    categoryIcon: BookOpen,
    title: "TL Sparkle",
    subtitle: "Twilight Legacy",
    description:
      "A serialized dark-fantasy action novel set in a world where forgotten gods leave cursed remnants — and one scavenger keeps surviving by accident. Updated weekly.",
    status: "Ongoing",
    statusActive: true,
    ctaLabel: "Mulai Baca",
    ctaHref: "#tl-sparkle",
    tags: ["Fantasy", "Action", "Dark Fiction", "Serialized"],
  },
  {
    id: "aether-weeds",
    category: "Game & Interactive",
    categoryIcon: Gamepad2,
    title: "Aether Weeds",
    subtitle: "Interactive Project",
    description:
      "A browser-based interactive narrative and puzzle game. Explore a post-collapse ecosystem where digital flora has overrun the network grid.",
    status: "In Development",
    statusActive: false,
    ctaLabel: "Preview Demo",
    ctaHref: "#aether-weeds",
    tags: ["Game Dev", "Interactive", "Browser", "Narrative"],
  },
  {
    id: "digital-craft",
    category: "Design & Branding",
    categoryIcon: Layers,
    title: "Digital Craft & Branding",
    subtitle: "Visual Asset Collection",
    description:
      "A curated collection of vector assets, brand identities, iconography, and motion graphics created for studio clients and independent design experiments.",
    status: "Collection",
    statusActive: true,
    ctaLabel: "View Collection",
    ctaHref: "#digital-craft",
    tags: ["Branding", "Vector", "Motion", "Identity"],
  },
]

function StatusPill({ label, active }: { label: string; active: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-[0.62rem] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm border ${
      active
        ? "border-[#D4A373]/30 text-[#D4A373] bg-[#D4A373]/5"
        : "border-[#2A2E3D] text-[#9CA3AF] bg-[#12141C]"
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full ${active ? "bg-[#D4A373]" : "bg-[#6B7280]"}`} />
      {label}
    </span>
  )
}

function ProjectCardItem({ id, category, categoryIcon: Icon, title, subtitle, description, status, statusActive, ctaLabel, ctaHref, tags }: ProjectCard) {
  return (
    <article
      id={`project-${id}`}
      className="group relative flex flex-col justify-between gap-6 bg-[#090A0F] border border-[#1E222D] rounded-lg p-7 hover:border-[#D4A373]/30 transition-all duration-300"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#D4A373]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-8 h-8 rounded-sm bg-[#12141C] border border-[#2A2E3D] group-hover:border-[#D4A373]/30 transition-colors">
            <Icon className="w-3.5 h-3.5 text-[#D4A373]" />
          </span>
          <span className="text-[0.62rem] font-mono text-[#9CA3AF] tracking-wider uppercase">{category}</span>
        </div>
        <StatusPill label={status} active={statusActive} />
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-xl font-bold tracking-tight text-[#F9FAFB] leading-tight">{title}</h3>
        <p className="text-[0.65rem] font-mono text-[#9CA3AF]/60 tracking-wide">{subtitle}</p>
        <p className="mt-3 text-sm text-[#9CA3AF] leading-relaxed">{description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span key={tag} className="px-2.5 py-1 text-[0.62rem] font-mono font-medium tracking-wider uppercase text-[#6B7280] border border-[#2A2E3D] rounded-sm hover:text-[#D4A373] hover:border-[#D4A373]/30 transition-colors">
            {tag}
          </span>
        ))}
      </div>

      <Link href={ctaHref} className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4A373] hover:text-[#F9FAFB] transition-colors w-fit group/cta">
        {ctaLabel}
        <ArrowUpRight className="w-4 h-4 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
      </Link>
    </article>
  )
}

export function FeaturedProjects() {
  return (
    <section id="project" aria-labelledby="projects-heading" className="bg-[#090A0F] border-t border-[#1E222D] py-24 px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4A373]/[0.04] blur-[100px] rounded-full" />

      <div className="max-w-6xl mx-auto flex flex-col gap-14 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-[0.62rem] font-mono font-bold tracking-[0.22em] uppercase text-[#D4A373]/70">
              01 / Featured Projects
            </span>
            <h2 id="projects-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F9FAFB] leading-tight">
              Karya Pilihan
            </h2>
            <p className="text-sm text-[#9CA3AF] max-w-md leading-relaxed">
              Proyek unggulan studio — dari serialisasi fiksi hingga platform web interaktif.
            </p>
          </div>
          <Link href="#all-projects" className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[#9CA3AF] hover:text-[#D4A373] border border-[#2A2E3D] hover:border-[#D4A373]/40 rounded-md px-4 py-2.5 transition-all duration-200 w-fit shrink-0">
            All Projects <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => <ProjectCardItem key={p.id} {...p} />)}
        </div>
      </div>
    </section>
  )
}
