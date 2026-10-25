import * as React from "react"
import { Check, Minus, HelpCircle } from "lucide-react"

interface ComparisonRow {
  name: string
  description?: string
  landingPage: string | boolean
  webApp: string | boolean
  webNovel: string | boolean
}

interface ComparisonCategory {
  category: string
  rows: ComparisonRow[]
}

const comparisonData: ComparisonCategory[] = [
  {
    category: "Arsitektur & Fondasi Teknis",
    rows: [
      {
        name: "Teknologi Utama",
        description: "Next.js 16 (App Router) + TypeScript",
        landingPage: "Next.js 16 + TS",
        webApp: "Next.js 16 + TS",
        webNovel: "Next.js 16 + TS",
      },
      {
        name: "Styling & Design System",
        description: "Tailwind CSS kustom tanpa template pihak ketiga",
        landingPage: true,
        webApp: true,
        webNovel: true,
      },
      {
        name: "Backend Database",
        description: "Penyimpanan data dinamis dan relasional",
        landingPage: "Static / Markdown",
        webApp: "PostgreSQL / Supabase",
        webNovel: "Supabase + Storage",
      },
      {
        name: "REST API & Webhooks",
        description: "Komunikasi data eksternal dan otomasi server",
        landingPage: false,
        webApp: true,
        webNovel: "API Baca & Sync",
      },
      {
        name: "Core Web Vitals (<40ms)",
        description: "Kecepatan muat halaman di bawah standar minimum",
        landingPage: true,
        webApp: true,
        webNovel: true,
      },
    ],
  },
  {
    category: "Fitur UI & Kapabilitas Halaman",
    rows: [
      {
        name: "Jumlah Halaman / View",
        landingPage: "1 – 3 Section View",
        webApp: "Multi-View Dashboard",
        webNovel: "Katalog + Reader Portal",
      },
      {
        name: "Desain Kustom Eksklusif",
        description: "Strict industrial visual craft tanpa template umum",
        landingPage: true,
        webApp: true,
        webNovel: true,
      },
      {
        name: "Native Dark Mode",
        description: "Mode gelap teroptimasi untuk kenyamanan mata",
        landingPage: true,
        webApp: true,
        webNovel: true,
      },
      {
        name: "Admin Control Panel",
        description: "Halaman khusus manajemen data dan konfigurasi",
        landingPage: false,
        webApp: true,
        webNovel: "CMS Bab & Konten",
      },
      {
        name: "User Authentication & Roles",
        description: "Sistem login, pendaftaran, dan izin akses",
        landingPage: false,
        webApp: true,
        webNovel: "Opsional Reader Account",
      },
      {
        name: "Reader Settings Control",
        description: "Pengaturan ukuran font, line height, dan chapter jumping",
        landingPage: false,
        webApp: false,
        webNovel: true,
      },
      {
        name: "Lore & Glossary System",
        description: "Database ensiklopedia karakter, lokasi, dan faksi",
        landingPage: false,
        webApp: false,
        webNovel: true,
      },
    ],
  },
  {
    category: "Integrasi, Deployment & Dukungan",
    rows: [
      {
        name: "Panel / Payment Integration",
        description: "Integrasi Pterodactyl, Paymenter, Midtrans, atau Stripe",
        landingPage: false,
        webApp: true,
        webNovel: "Trakteer / Saweria / Kustom",
      },
      {
        name: "SEO & Social OpenGraph",
        description: "Metadata presisi untuk indexing Google & preview media sosial",
        landingPage: true,
        webApp: true,
        webNovel: true,
      },
      {
        name: "Source Code Ownership",
        description: "Repositori git 100% milik kamu secara penuh",
        landingPage: "100% Milik Klien",
        webApp: "100% Milik Klien",
        webNovel: "100% Milik Klien",
      },
      {
        name: "Dukungan Deployment",
        description: "Setup cloud hosting hingga domain live aktif",
        landingPage: "Vercel / Cloudflare",
        webApp: "Vercel / VPS / Supabase",
        webNovel: "Vercel + Supabase",
      },
      {
        name: "Masa Garansi Bug Fix",
        description: "Perbaikan gratis jika ditemukan kendala teknis",
        landingPage: "14 Hari",
        webApp: "30 Hari",
        webNovel: "30 Hari",
      },
    ],
  },
]

function TableCell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#D4A373]/10 text-[#D4A373]">
        <Check className="w-4 h-4" />
      </span>
    ) : (
      <span className="inline-flex items-center justify-center w-6 h-6 text-[#4B5563]">
        <Minus className="w-4 h-4" />
      </span>
    )
  }

  return (
    <span className="text-xs font-mono font-medium text-[#F9FAFB] tracking-tight">
      {value}
    </span>
  )
}

export function FeatureComparison() {
  return (
    <section
      id="comparison"
      aria-labelledby="comparison-heading"
      className="px-6 py-24 bg-[#090A0F] border-b border-[#1E222D]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Section title */}
        <div className="flex flex-col gap-3 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]" />
            <span className="text-[0.62rem] font-mono font-bold tracking-[0.22em] uppercase text-[#D4A373]/80">
              02 // Specifications &amp; Matrix
            </span>
          </div>
          <h2
            id="comparison-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F9FAFB] leading-tight"
          >
            Tabel Perbandingan Fitur
          </h2>
          <p className="text-sm text-[#9CA3AF] leading-relaxed">
            Perbandingan komparatif antar paket layanan untuk membantu kamu menentukan arsitektur
            yang paling tepat.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="border border-[#262626] rounded-xl bg-[#090A0F] overflow-hidden shadow-2xl">
          {/* Scrollable container on mobile */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#262626] bg-[#12141C]">
                  <th className="py-5 px-6 text-xs font-bold font-mono tracking-wider uppercase text-[#9CA3AF] w-2/5">
                    Fitur &amp; Spesifikasi
                  </th>
                  <th className="py-5 px-6 text-xs font-bold font-mono tracking-wider uppercase text-[#F9FAFB] w-1/5 text-center">
                    Landing Page
                  </th>
                  <th className="py-5 px-6 text-xs font-bold font-mono tracking-wider uppercase text-[#D4A373] w-1/5 text-center bg-[#D4A373]/[0.04] border-x border-[#262626]">
                    Web App &amp; Dashboard
                    <span className="block text-[0.58rem] font-mono text-[#D4A373]/70 font-normal">
                      [ Recommended ]
                    </span>
                  </th>
                  <th className="py-5 px-6 text-xs font-bold font-mono tracking-wider uppercase text-[#F9FAFB] w-1/5 text-center">
                    Web Novel Portal
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonData.map((cat, catIdx) => (
                  <React.Fragment key={cat.category}>
                    {/* Category row separator */}
                    <tr className="border-t border-[#262626] bg-[#12141C]/60">
                      <td
                        colSpan={4}
                        className="py-3 px-6 text-[0.68rem] font-mono font-bold tracking-[0.16em] uppercase text-[#D4A373]"
                      >
                        // {cat.category}
                      </td>
                    </tr>

                    {/* Category rows */}
                    {cat.rows.map((row, rowIdx) => (
                      <tr
                        key={row.name}
                        className={`border-t border-[#262626] hover:bg-[#12141C]/40 transition-colors ${
                          rowIdx % 2 === 1 ? "bg-[#0B0D14]" : "bg-[#090A0F]"
                        }`}
                      >
                        {/* Feature column */}
                        <td className="py-4 px-6">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-sm font-semibold text-[#F9FAFB] tracking-tight">
                              {row.name}
                            </span>
                            {row.description && (
                              <span className="text-[0.7rem] text-[#6B7280] leading-snug">
                                {row.description}
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Package 1 */}
                        <td className="py-4 px-6 text-center">
                          <TableCell value={row.landingPage} />
                        </td>

                        {/* Package 2 (Featured) */}
                        <td className="py-4 px-6 text-center bg-[#D4A373]/[0.02] border-x border-[#262626]">
                          <TableCell value={row.webApp} />
                        </td>

                        {/* Package 3 */}
                        <td className="py-4 px-6 text-center">
                          <TableCell value={row.webNovel} />
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table footer note */}
          <div className="p-4 bg-[#12141C] border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.7rem] font-mono text-[#9CA3AF]">
            <span>
              // Butuh fitur khusus di luar tabel? Kami mendukung spesifikasi kustom penuh.
            </span>
            <a
              href="#order-form"
              className="text-[#D4A373] hover:underline font-bold tracking-wider uppercase text-[0.65rem]"
            >
              Konsultasi Kustom →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
