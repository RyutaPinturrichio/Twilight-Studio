import * as React from "react";
import { ArrowRight, Mail, Terminal } from "lucide-react";

export function ProjectCTA() {
  return (
    <section aria-labelledby="cta-heading" className="px-6 py-20 sm:py-28 bg-[#090A0F] relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-[#F59E0B]/[0.08] to-transparent blur-[120px] rounded-full"
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="relative rounded-2xl border border-[#2A2E3D] bg-gradient-to-b from-[#12141C] to-[#0D0F17] p-8 sm:p-14 overflow-hidden">
          {/* Top orange gradient border highlight */}
          <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-2xl">
              <div className="inline-flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span className="text-[0.65rem] font-mono font-bold tracking-[0.22em] uppercase text-[#D4A373]">
                  Transmission Open // Collaborate
                </span>
              </div>
              <h2 id="cta-heading" className="text-3xl sm:text-4xl font-extrabold text-[#F9FAFB] tracking-tight">
                Punya Gagasan Proyek atau Ingin{" "}
                <span className="bg-gradient-to-r from-[#F9FAFB] via-[#F59E0B] to-[#D4A373] bg-clip-text text-transparent">
                  Membangun Bersama?
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                Dari pembuatan web application kustom, reader portal berkecepatan tinggi, hingga rekayasa identitas visual presisi. 
                Kami menyambut eksplorasi dan kemitraan kreatif.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 shrink-0">
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 bg-gradient-to-r from-[#D4A373] via-[#F59E0B] to-[#EA580C] text-[#090A0F] font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all duration-200"
              >
                <span>Lihat Jasa &amp; Paket</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 border border-[#2A2E3D] bg-[#090A0F] text-[#F9FAFB] font-mono text-xs uppercase tracking-wider hover:border-[#D4A373] hover:text-[#D4A373] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Hubungi Studio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
