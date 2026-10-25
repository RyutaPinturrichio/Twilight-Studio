import { HeroSection }       from "@/components/blocks/hero-section-6"
import { FeaturedProjects }  from "@/components/landing/FeaturedProjects"
import { ServicesOverview }  from "@/components/landing/ServicesOverview"
import { WhyChooseUs }       from "@/components/landing/WhyChooseUs"
import { Testimonials }      from "@/components/landing/Testimonials"
import { Footer }            from "@/components/layout/Footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#090A0F] text-[#F9FAFB]">
      <HeroSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <ServicesOverview />
      <Testimonials />
      <Footer />
    </main>
  )
}
