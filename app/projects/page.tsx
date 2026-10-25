import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectsView } from "@/components/projects/ProjectsView";

export const metadata: Metadata = {
  title: "Projects Archive — Twilight Studio",
  description:
    "Katalog karya internal Twilight Studio: serial fiksi Web Novel TL Sparkle, game strategi taktis Aether Weeds, rekayasa reader portal, dan sistem desain digital.",
  openGraph: {
    title: "Projects Archive — Twilight Studio",
    description:
      "Koleksi semesta fiksi, rekayasa perangkat lunak, dan arsitektur visual Twilight Studio.",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#090A0F] text-[#F9FAFB] flex flex-col selection:bg-[#F59E0B]/20 selection:text-[#F59E0B]">
      {/* Shared floating pill Navbar */}
      <Navbar />

      {/* Main Content with top padding to clear floating fixed header */}
      <div className="pt-24 flex-1">
        <ProjectsView />
      </div>

      {/* Shared Studio Footer */}
      <Footer />
    </main>
  );
}
