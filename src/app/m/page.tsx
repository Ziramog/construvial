import type { Metadata } from "next"
import { MobileHero } from "@/components/mobile/MobileHero"
import { MobileCompanyBand } from "@/components/mobile/MobileCompanyBand"
import { MobileStats } from "@/components/mobile/MobileStats"
import { MobileServices } from "@/components/mobile/MobileServices"
import { MobileEquipment } from "@/components/mobile/MobileEquipment"
import { MobileObras } from "@/components/mobile/MobileObras"
import { MobileClientMarquee } from "@/components/mobile/MobileClientMarquee"
import { MobileCTAFinal } from "@/components/mobile/MobileCTAFinal"
import { MobileHeader } from "@/components/mobile/MobileHeader"
import { constructMetadata } from "@/lib/metadata"

export const metadata: Metadata = constructMetadata({
  title: "Construvial S.A. | Empresa Constructora Vial y Civil | Córdoba, Argentina",
  description: "35 años ejecutando obras viales, civiles, metálicas y electromecánicas. 500 obras finalizadas. Alquiler de equipos. Río Tercero, Córdoba.",
})

export default function MobileHomePage() {
  return (
    <>
      <MobileHeader />
      <MobileHero />
      <MobileCompanyBand />
      <MobileStats />
      <MobileServices />
      <MobileEquipment />
      <MobileObras />
      <MobileClientMarquee />
      <MobileCTAFinal />
    </>
  )
}
