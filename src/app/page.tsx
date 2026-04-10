import type { Metadata } from "next"
import { Hero } from "@/components/home/Hero"
import { Stats } from "@/components/home/Stats"
import { ServicesGrid } from "@/components/home/ServicesGrid"
import { FeaturedWorks } from "@/components/home/FeaturedWorks"
import { ClientLogos } from "@/components/home/ClientLogos"
import { CTABanner } from "@/components/home/CTABanner"
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
      <ServicesGrid />
      <FeaturedWorks />
      <ClientLogos />
      <CTABanner />
    </>
  )
}
