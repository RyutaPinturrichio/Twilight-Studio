"use client";

import * as React from "react";
import { useMemo, useState } from "react";
import { ProjectHero } from "./ProjectHero";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectFilter, type ProjectCategory } from "./ProjectFilter";
import { ProjectCard, type ProjectItem } from "./ProjectCard";
import { ProjectRoadmap } from "./ProjectRoadmap";
import { ProjectCTA } from "./ProjectCTA";

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "tl-sparkle",
    title: "TL Sparkle: Twilight Legacy",
    category: "WEB NOVELS",
    categoryLabel: "Web Novel // Dark Fantasy",
    status: "SERIALIZING // AKTIF",
    isLive: true,
    highlight: "148 Bab Terbit",
    synopsis:
      "Serial fantasi kelam tentang eksploitasi jalur ley sakral sebagai bahan bakar industri kekaisaran. Dilengkapi sistem terminologi mendalam, evolusi sihir 3-tahap, dan reader mode bebas distraksi.",
    specs: ["Next.js App Router", "Typography-First", "ISR Architecture"],
    ctaLabel: "Mulai Baca",
    ctaHref: "/#chapters",
  },
  {
    id: "aether-weeds",
    title: "Aether Weeds: Tactical Resonator",
    category: "INTERACTIVE / GAMES",
    categoryLabel: "Interactive // Game Engine",
    status: "IN DEVELOPMENT",
    isLive: false,
    highlight: "Pre-Alpha Playtest",
    synopsis:
      "Game petualangan strategi taktis bertema resonansi eterik. Pemain merekayasa konduit energi dan susunan relik kuno untuk menstabilkan anomali kataklisma di zona reruntuhan perbatasan.",
    specs: ["WebGPU Engine", "Procedural Leylines", "Rust Core"],
    ctaLabel: "Dossier Teknis",
    ctaHref: "#",
  },
  {
    id: "digital-craft-branding",
    title: "Digital Craft & Visual System",
    category: "SYSTEMS & BRANDING",
    categoryLabel: "Design System // Visual Assets",
    status: "ARCHIVE // ONGOING",
    isLive: true,
    highlight: "Figma Tokens v1.1",
    synopsis:
      "Arsip identitas visual Twilight Studio. Mengusung estetika industrial monokromatik dengan aksen sunset orange hangat (#D4A373, #F59E0B), tipografi arsitektural, dan aset grafis presisi tinggi.",
    specs: ["Tailwind CSS", "Design Tokens", "High-Contrast"],
    ctaLabel: "Eksplorasi Aset",
    ctaHref: "#",
  },
  {
    id: "aether-os-reader",
    title: "AetherOS Reader Terminal",
    category: "WEB NOVELS",
    categoryLabel: "Reader Client // Web App",
    status: "STABLE RELEASE",
    isLive: true,
    highlight: "Distraction-Free Mode",
    synopsis:
      "Antarmuka baca novel ultra-cepat dengan kontrol ukuran font, spasi baris adaptif, switch kontras tinggi, dan persistensi progres membaca otomatis di sisi klien.",
    specs: ["Offline Cache", "Fluid Typography", "WCAG AAA"],
    ctaLabel: "Buka Reader",
    ctaHref: "/#chapters",
  },
  {
    id: "thaumaturgy-codex",
    title: "Thaumaturgy Codex Database",
    category: "INTERACTIVE / GAMES",
    categoryLabel: "Lore Repository // 3D Graph",
    status: "BETA RELEASE",
    isLive: true,
    highlight: "Interactive Tree",
    synopsis:
      "Database interaktif visualisasi pohon cabang elemen sihir dari Tahap 1 hingga Dominasi Mutlak, dilengkapi simulator kalkulator blueprint skill dan katalog konsekuensi sihir.",
    specs: ["Canvas Graph", "Modular Schema", "Fast Search"],
    ctaLabel: "Akses Codex",
    ctaHref: "/#terminology",
  },
  {
    id: "resonance-soundscapes",
    title: "Resonance Soundscapes OST",
    category: "SYSTEMS & BRANDING",
    categoryLabel: "Audio // Ambient Generator",
    status: "EXPERIMENTAL",
    isLive: false,
    highlight: "Procedural Audio",
    synopsis:
      "Modul audio atmosferik pengiring membaca novel. Menghasilkan dengungan frekuensi rendah eterik dan lanskap suara dark ambient secara prosedural untuk meningkatkan imersi naratif.",
    specs: ["Web Audio API", "Looped Ambience", "Dynamic Volume"],
    ctaLabel: "Dengar Preview",
    ctaHref: "#",
  },
];

export function ProjectsView() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("ALL");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "ALL") return PROJECTS_DATA;
    return PROJECTS_DATA.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const counts = useMemo(() => {
    return {
      ALL: PROJECTS_DATA.length,
      "WEB NOVELS": PROJECTS_DATA.filter((p) => p.category === "WEB NOVELS").length,
      "INTERACTIVE / GAMES": PROJECTS_DATA.filter(
        (p) => p.category === "INTERACTIVE / GAMES"
      ).length,
      "SYSTEMS & BRANDING": PROJECTS_DATA.filter(
        (p) => p.category === "SYSTEMS & BRANDING"
      ).length,
    };
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero with Sunset Orange Ambient Glow */}
      <ProjectHero />

      {/* 2. Flagship Project Spotlight Card (TL Sparkle) */}
      <FeaturedProject />

      {/* 3. Catalog Grid Section with Filter Tabs */}
      <section aria-labelledby="catalog-heading" className="border-b border-[#1E222D] px-6 py-20 sm:py-28 bg-[#090A0F]">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {/* Header & Subtitle */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex flex-col gap-3">
              <span className="text-[0.65rem] font-mono font-bold tracking-[0.22em] uppercase text-[#D4A373]">
                Full Directory // Archive Index
              </span>
              <h2 id="catalog-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F9FAFB]">
                Katalog Lengkap{" "}
                <span className="bg-gradient-to-r from-[#F9FAFB] to-[#D4A373] bg-clip-text text-transparent">
                  Karya &amp; Modul
                </span>
              </h2>
            </div>
            <p className="text-sm text-[#9CA3AF] max-w-sm leading-relaxed">
              Pilih kategori di bawah untuk memfilter ekosistem proyek fiksi, game interaktif, dan arsitektur visual.
            </p>
          </div>

          {/* Filter Tabs */}
          <ProjectFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            counts={counts}
          />

          {/* 3-Column Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Release Timeline / Roadmap */}
      <ProjectRoadmap />

      {/* 5. Call To Action / Collaboration Callout */}
      <ProjectCTA />
    </div>
  );
}
