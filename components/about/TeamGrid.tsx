import * as React from "react"

/* ─── Types ─────────────────────────────────────────── */
export interface TeamMember {
  initials: string
  name: string
  alias?: string
  role: string
  bio: string
  skills: string[]
}

/* ─── Data ───────────────────────────────────────────── */
const team: TeamMember[] = [
  {
    initials: "VX",
    name: "Valerian Xoss",
    alias: "vx.dev",
    role: "Lead Architect & Developer",
    bio: "Bertanggung jawab atas seluruh infrastruktur teknis Twilight Studio — dari arsitektur Next.js hingga pipeline deployment. Membangun sistem yang bisa hidup sendiri tanpa birokrasi berlebih.",
    skills: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "DevOps"],
  },
  {
    initials: "AR",
    name: "Aryn Revael",
    alias: "lore.architect",
    role: "Lore Writer & Narrative Designer",
    bio: "Penulis di balik universe TL Sparkle. Merancang sistem lore, worldbuilding, dan continuity cerita yang konsisten. Percaya bahwa setiap detail dunia fiksi harus bisa dipertanggungjawabkan secara internal.",
    skills: ["Narrative Design", "World Building", "Dark Fantasy", "Lore Systems", "Serialized Fiction"],
  },
  {
    initials: "KM",
    name: "Kessler Maren",
    alias: "null.design",
    role: "UI Designer & Visual Architect",
    bio: "Bertanggung jawab atas sistem desain visual studio — tipografi, grid, komponen, dan seluruh token desain. Teguh pada prinsip anti-slop: setiap elemen harus bisa mempertanggungjawabkan kehadirannya.",
    skills: ["UI/UX", "Design Systems", "Figma", "Motion", "Industrial Aesthetics"],
  },
]

/* ─── Avatar ─────────────────────────────────────────── */
function Avatar({ initials }: { initials: string }) {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center w-14 h-14 rounded-md bg-[#12141C] border border-[#D4A373]/30 shrink-0 group-hover:border-[#D4A373]/60 transition-colors"
    >
      <span className="text-lg font-bold font-mono tracking-widest text-[#D4A373]">
        {initials}
      </span>
    </div>
  )
}

/* ─── Skill Badge ────────────────────────────────────── */
function SkillBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 text-[0.62rem] font-mono font-semibold tracking-wider uppercase text-[#6B7280] border border-[#1E222D] rounded-sm hover:text-[#D4A373] hover:border-[#D4A373]/30 transition-colors">
      {label}
    </span>
  )
}

/* ─── Member Card ────────────────────────────────────── */
function MemberCard({ initials, name, alias, role, bio, skills }: TeamMember) {
  return (
    <article className="group relative flex flex-col gap-6 bg-[#090A0F] border border-[#1E222D] rounded-lg p-7 hover:border-[#D4A373]/30 transition-all duration-300 overflow-hidden">
      {/* Corner subtle glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-28 h-28 bg-[#D4A373]/[0.02] group-hover:bg-[#D4A373]/[0.06] blur-xl rounded-full transition-all duration-500"
      />

      {/* Header row */}
      <div className="flex items-start gap-4">
        <Avatar initials={initials} />
        <div className="flex flex-col gap-1 min-w-0">
          <h3 className="text-base font-bold tracking-tight text-[#F9FAFB] leading-tight">
            {name}
          </h3>
          {alias && (
            <p className="text-[0.65rem] font-mono text-[#D4A373]/70 tracking-wider">
              @{alias}
            </p>
          )}
          <p className="text-xs font-semibold text-[#9CA3AF] mt-0.5">
            {role}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-[#1E222D] via-[#D4A373]/20 to-[#1E222D]" aria-hidden="true" />

      {/* Bio */}
      <p className="text-sm text-[#9CA3AF] leading-relaxed">{bio}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {skills.map((skill) => (
          <SkillBadge key={skill} label={skill} />
        ))}
      </div>
    </article>
  )
}

/* ─── Main Export ────────────────────────────────────── */
export function TeamGrid() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="border-b border-[#1E222D] px-6 py-20 bg-[#090A0F]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-14">

        {/* Section header */}
        <div className="flex flex-col gap-3">
          <span className="text-[0.62rem] font-mono font-bold tracking-[0.22em] uppercase text-[#D4A373]/70">
            Studio // Core Team
          </span>
          <h2
            id="team-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F9FAFB] leading-tight"
          >
            Orang-Orang di Baliknya
          </h2>
          <p className="text-sm text-[#9CA3AF] max-w-lg leading-relaxed">
            Tim kecil yang bergerak cepat. Setiap anggota memegang tanggung jawab penuh atas bidangnya.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}
