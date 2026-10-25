import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ServicesContainer } from "@/components/services/ServicesContainer"

export const metadata: Metadata = {
  title: "Services & Pricing — Twilight Studio",
  description:
    "Etalase jasa pembuatan website profesional dari Twilight Studio. Solusi koding bersih, cepat, dan kustom tanpa template berlebihan untuk brand, web app, dan portal baca.",
  openGraph: {
    title: "Services & Pricing — Twilight Studio",
    description:
      "Solusi koding bersih, cepat, dan kustom tanpa template berlebihan. Custom landing page, web app & dashboard, hingga web novel reader portal.",
    type: "website",
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#090A0F] text-[#F9FAFB] flex flex-col">
      {/* Floating Pill Shared Navbar */}
      <Navbar />

      {/* Main Content with top padding to clear floating fixed header */}
      <div className="pt-24 flex-1">
        <ServicesContainer />
      </div>

      {/* Shared Footer */}
      <Footer />
    </main>
  )
}
