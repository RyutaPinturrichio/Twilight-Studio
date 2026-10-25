import * as React from "react"
import { Quote } from "lucide-react"

interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  context: string
}

const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Landing page yang Twilight Studio kerjakan selesai tepat waktu dan jauh melampaui ekspektasi. Struktur kodenya bersih banget — saya bisa maintain sendiri tanpa pusing. Kecepatan muatnya juga luar biasa, Lighthouse score hampir perfect.",
    author: "Rivan Aldric",
    role: "Founder",
    context: "CreasiveHub Studio",
  },
  {
    id: "t2",
    quote:
      "TL Sparkle adalah salah satu web novel terbaik yang pernah saya baca dalam genre fantasy Indonesia. Worldbuilding-nya terasa organik, bukan dipaksakan. Setiap chapter meninggalkan sesuatu yang bikin saya balik lagi.",
    author: "Keira M.",
    role: "Reader / Reviewer",
    context: "TL Sparkle Community",
  },
  {
    id: "t3",
    quote:
      "Platform reader yang dibangun untuk serial kami terasa sangat berbeda dari WordPress biasa. Dark mode-nya native, navigasi chapter intuitif, dan sistem lore glossary-nya sangat membantu pembaca baru memahami universe kami.",
    author: "Denara Voss",
    role: "Head Writer",
    context: "Aether Collective",
  },
]

function TestimonialCard({ quote, author, role, context }: Omit<Testimonial, "id">) {
  return (
    <blockquote className="group flex flex-col gap-6 bg-[#090A0F] border border-[#1E222D] rounded-lg p-7 hover:border-[#D4A373]/30 transition-all duration-300 relative overflow-hidden">
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#D4A373]/[0.06] to-transparent pointer-events-none" aria-hidden="true" />

      <Quote className="w-5 h-5 text-[#D4A373]/40 group-hover:text-[#D4A373]/70 transition-colors shrink-0" />

      <p className="text-sm text-[#9CA3AF] leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="h-px bg-gradient-to-r from-[#D4A373]/20 to-transparent" aria-hidden="true" />

      <footer className="flex flex-col gap-0.5">
        <cite className="text-sm font-semibold text-[#F9FAFB] not-italic tracking-tight">{author}</cite>
        <p className="text-xs font-mono text-[#9CA3AF]/60 tracking-wide">{role} · {context}</p>
      </footer>
    </blockquote>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-[#090A0F] border-t border-[#1E222D] py-24 px-6 relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-[#D4A373]/[0.04] blur-[100px] rounded-full" />

      <div className="max-w-6xl mx-auto flex flex-col gap-14 relative">
        <div className="flex flex-col gap-3 max-w-xl">
          <span className="text-[0.62rem] font-mono font-bold tracking-[0.22em] uppercase text-[#D4A373]/70">04 / Testimonials</span>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F9FAFB] leading-tight">Kata Mereka</h2>
          <p className="text-sm text-[#9CA3AF] leading-relaxed">Ulasan dari klien, pembaca, dan kolaborator yang telah bekerja dengan kami.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} quote={t.quote} author={t.author} role={t.role} context={t.context} />
          ))}
        </div>
      </div>
    </section>
  )
}
