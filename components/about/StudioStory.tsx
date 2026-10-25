import * as React from "react"

/* ─── Data ───────────────────────────────────────────── */
interface StoryBlock {
  index: string
  heading: string
  body: React.ReactNode
}

const blocks: StoryBlock[] = [
  {
    index: "01",
    heading: "Cerita Dibalik Twilight Studio",
    body: (
      <>
        <p>
          Twilight Studio lahir dari satu pertanyaan sederhana: <em className="not-italic text-[#F9FAFB] font-medium">mengapa platform baca web novel harus jelek?</em>{" "}
          Berawal dari frustrasi terhadap UI yang berat, tidak konsisten, dan penuh iklan — kami mulai membangun sendiri.
        </p>
        <p>
          Dari sana, lingkup proyek melebar. Fiksi fantasi dark industrial yang selama ini hanya hidup di dokumen pribadi mulai mendapatkan rumahnya sendiri. Sistem web yang awalnya dibuat untuk satu cerita berkembang menjadi kerangka modular yang bisa melayani banyak proyek sekaligus.
        </p>
        <p>
          Hari ini, Twilight Studio adalah titik temu antara{" "}
          <span className="text-[#D4A373] font-medium">rekayasa perangkat lunak</span> dan{" "}
          <span className="text-[#D4A373] font-medium">penciptaan dunia fiksi</span> — dua disiplin yang, menurut kami, selalu berkaitan.
        </p>
      </>
    ),
  },
  {
    index: "02",
    heading: "Filosofi Karya",
    body: (
      <>
        <p>
          <span className="text-[#F9FAFB] font-semibold">Form Follows Function.</span>{" "}
          Setiap elemen visual yang ada di layar harus bisa mempertanggungjawabkan kehadirannya. Dekorasi tanpa tujuan adalah beban — bagi pengguna, bagi performa, bagi mata.
        </p>
        <p>
          Kami percaya pada desain estetika industrial berkelas bukan karena tren, melainkan karena kejernihan. Kontras tinggi, tipografi presisi, dan hierarki terstruktur menciptakan kejelasan yang langsung terbaca tanpa perlu panduan.
        </p>
        <p>
          Di sisi kode, standar kami ketat:{" "}
          <span className="text-[#D4A373] font-medium">tidak ada spaghetti</span>,{" "}
          <span className="text-[#D4A373] font-medium">tidak ada technical debt tersembunyi</span>, dan tidak ada komponen yang lahir tanpa tipe eksplisit. Struktur yang bersih adalah produk pertama yang selalu kami kirimkan.
        </p>
      </>
    ),
  },
]

/* ─── Main Export ────────────────────────────────────── */
export function StudioStory() {
  return (
    <section
      id="studio-story"
      aria-labelledby="story-heading"
      className="border-b border-[#1E222D] px-6 py-20 bg-[#090A0F]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-14">

        {/* Section label */}
        <span className="text-[0.62rem] font-mono font-bold tracking-[0.22em] uppercase text-[#D4A373]/70">
          Studio // Origin &amp; Philosophy
        </span>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {blocks.map(({ index, heading, body }) => (
            <article
              key={index}
              className="group relative flex flex-col gap-6 bg-[#090A0F] border border-[#1E222D] rounded-lg p-8 hover:border-[#D4A373]/30 transition-all duration-300 overflow-hidden"
            >
              {/* Corner accent glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 right-0 w-32 h-32 bg-[#D4A373]/[0.03] group-hover:bg-[#D4A373]/[0.08] blur-2xl rounded-full transition-all duration-500"
              />

              {/* Card header */}
              <div className="flex items-center justify-between">
                <h2
                  id={index === "01" ? "story-heading" : undefined}
                  className="text-lg font-bold tracking-tight text-[#F9FAFB]"
                >
                  {heading}
                </h2>
                <span className="text-[0.65rem] font-mono font-bold tracking-[0.2em] text-[#D4A373]/60">
                  {index}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-[#1E222D] via-[#D4A373]/20 to-[#1E222D]" aria-hidden="true" />

              {/* Body */}
              <div className="flex flex-col gap-4 text-sm text-[#9CA3AF] leading-relaxed">
                {body}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
