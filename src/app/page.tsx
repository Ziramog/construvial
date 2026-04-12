import type { Metadata } from "next"
import { Hero } from "@/components/home/Hero"
import { Stats } from "@/components/home/Stats"
import { ClientMarquee } from "@/components/home/ClientMarquee"
import { ServicesGrid } from "@/components/home/ServicesGrid"
import { CTABanner } from "@/components/home/CTABanner"
import { CompanySection } from "@/components/home/CompanySection"
import { ContactSection } from "@/components/home/ContactSection"
import { constructMetadata } from "@/lib/metadata"

export const metadata: Metadata = constructMetadata({
  title: "Construvial S.A. | Empresa Constructora Vial y Civil | Córdoba, Argentina",
  description: "35 años ejecutando obras viales, civiles, metálicas y electromecánicas. 500 obras finalizadas. Alquiler de equipos. Río Tercero, Córdoba.",
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ClientMarquee />
      <ServicesGrid />
      <CTABanner />
      <CompanySection />
      <ContactSection />
    </>
  )
}
