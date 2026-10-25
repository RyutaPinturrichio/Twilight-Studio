import type { Metadata } from "next"
import { AboutHero }   from "@/components/about/AboutHero"
import { StudioStory } from "@/components/about/StudioStory"
import { TeamGrid }    from "@/components/about/TeamGrid"
import { StatusBar }   from "@/components/about/StatusBar"
import { Navbar }      from "@/components/layout/Navbar"
import { Footer }      from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "About — Twilight Studio",
  description:
    "Cerita, filosofi, dan tim di balik Twilight Studio — studio kreatif independen yang menggabungkan rekayasa web modern dengan fiksi imersif.",
  openGraph: {
    title: "About — Twilight Studio",
    description: "Studio kreatif independen yang menggabungkan fiksi imersif dengan rekayasa web modern.",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#090A0F] text-[#F9FAFB]">
      {/* Shared floating pill Navbar */}
      <Navbar />

      {/* Push content below fixed navbar */}
      <div className="pt-28">
        <AboutHero />
        <StudioStory />
        <TeamGrid />
        <StatusBar />
        <Footer />
      </div>
    </main>
  )
}
