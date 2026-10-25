import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import type { ProjectCategory } from "./ProjectFilter";

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  status: string;
  isLive?: boolean;
  synopsis: string;
  specs: string[];
  ctaLabel: string;
  ctaHref: string;
  highlight?: string;
}

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col justify-between rounded-xl border border-[#1E222D] bg-[#0D0F17] p-7 transition-all duration-300 hover:border-[#D4A373]/60 hover:bg-[#12141C] hover:shadow-[0_4px_25px_rgba(212,163,115,0.08)]">
      {/* Top orange gradient accent on hover */}
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header Card: Category & Status */}
      <div>
        <div className="flex items-center justify-between border-b border-[#1E222D] pb-3 mb-5">
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#D4A373]">
            {project.categoryLabel}
          </span>
          <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#9CA3AF]">
            {project.isLive ? (
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            ) : (
              <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B] shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
            )}
            <span>{project.status}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-[#F9FAFB] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-150">
          {project.title}
        </h3>

        {/* Highlight badge if any */}
        {project.highlight && (
          <div className="mt-2.5">
            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#F59E0B]/10 border border-[#F59E0B]/25 text-[#F59E0B]">
              {project.highlight}
            </span>
          </div>
        )}

        {/* Synopsis */}
        <p className="mt-3.5 text-sm leading-relaxed text-[#9CA3AF]">
          {project.synopsis}
        </p>
      </div>

      {/* Footer Card: Technical Specs & Action */}
      <div className="mt-8 pt-5 border-t border-[#1E222D]">
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.specs.map((spec) => (
            <span
              key={spec}
              className="rounded border border-[#1E222D] bg-[#090A0F] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#6B7280] group-hover:border-[#2A2E3D] group-hover:text-[#9CA3AF] transition-colors"
            >
              {spec}
            </span>
          ))}
        </div>

        <a
          href={project.ctaHref}
          className="inline-flex w-full items-center justify-between rounded-lg border border-[#2A2E3D] bg-[#090A0F] px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-[#F9FAFB] transition-all duration-200 hover:border-[#D4A373] hover:bg-gradient-to-r hover:from-[#D4A373] hover:via-[#F59E0B] hover:to-[#EA580C] hover:text-[#090A0F] hover:font-bold hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]"
        >
          <span>{project.ctaLabel}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}
