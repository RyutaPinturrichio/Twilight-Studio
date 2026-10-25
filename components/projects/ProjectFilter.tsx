"use client";

import * as React from "react";

export type ProjectCategory = "ALL" | "WEB NOVELS" | "INTERACTIVE / GAMES" | "SYSTEMS & BRANDING";

interface ProjectFilterProps {
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  counts: Record<ProjectCategory, number>;
}

const CATEGORIES: ProjectCategory[] = [
  "ALL",
  "WEB NOVELS",
  "INTERACTIVE / GAMES",
  "SYSTEMS & BRANDING",
];

export function ProjectFilter({
  activeCategory,
  onSelectCategory,
  counts,
}: ProjectFilterProps) {
  return (
    <div className="mb-10 flex flex-wrap gap-2.5">
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(cat)}
            className={`inline-flex items-center gap-2.5 rounded-lg border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              isActive
                ? "border-[#F59E0B] bg-[#12141C] text-[#F9FAFB] shadow-[0_0_15px_rgba(245,158,11,0.2)] font-semibold"
                : "border-[#1E222D] bg-[#090A0F] text-[#9CA3AF] hover:border-[#D4A373]/50 hover:text-[#F9FAFB]"
            }`}
          >
            {isActive && (
              <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B] shadow-[0_0_6px_rgba(245,158,11,0.9)]" />
            )}
            <span>{cat}</span>
            <span
              className={`rounded px-1.5 py-0.5 text-[10px] font-mono ${
                isActive
                  ? "bg-[#D4A373]/20 text-[#D4A373] border border-[#D4A373]/30"
                  : "bg-[#1E222D] text-[#6B7280]"
              }`}
            >
              {counts[cat] ?? 0}
            </span>
          </button>
        );
      })}
    </div>
  );
}
