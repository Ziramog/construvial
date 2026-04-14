import type { Metadata } from "next"
import { Hero } from "@/components/home/Hero"
import { Stats } from "@/components/home/Stats"
import { ClientMarquee } from "@/components/home/ClientMarquee"
import { CompanyBand } from "@/components/home/CompanyBand"
import { ServicesCards } from "@/components/home/ServicesCards"
import { EquiposCarousel } from "@/components/home/EquiposCarousel"
import { ObrasSection } from "@/components/home/ObrasSection"
import { CTAFinal } from "@/components/home/CTAFinal"
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
      <ServicesCards />
      <EquiposCarousel />
      <ObrasSection />
      <CompanyBand />
      <ClientMarquee />
      <CTAFinal />
    </>
  )
}
