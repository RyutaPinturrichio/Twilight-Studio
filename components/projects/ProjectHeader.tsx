import * as React from "react";

export function ProjectHeader() {
  return (
    <header className="mb-12 border-b border-[#262626] pb-10">
      {/* Telemetry / System Metadata Tag */}
      <div className="mb-4 inline-flex items-center gap-2 border border-[#262626] bg-[#121212] px-3 py-1 font-mono text-xs uppercase tracking-widest text-[#a3a3a3]">
        <span className="h-1.5 w-1.5 bg-[#fafafa] animate-pulse" />
        <span>[ SYSTEM ARCHIVE // STUDIO PROJECTS ]</span>
      </div>

      {/* Main Title & Subtitle */}
      <h1 className="text-3xl font-bold tracking-tight text-[#fafafa] sm:text-5xl">
        Crafted Works &amp; Digital Universes
      </h1>
      <p className="mt-4 max-w-2xl text-base text-[#a3a3a3] leading-relaxed sm:text-lg">
        Kumpulan karya internal Twilight Studio mulai dari serial fiksi imersif hingga sistem rekayasa perangkat lunak.
      </p>
    </header>
  );
}
