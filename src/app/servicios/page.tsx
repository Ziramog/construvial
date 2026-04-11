import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building, Truck, Map as Route, Settings as Blueprint, Compass as Excavator } from "lucide-react"
import { constructMetadata } from "@/lib/metadata"
import { SERVICIOS } from "@/lib/constants"
import { FadeIn } from "@/components/ui/FadeIn"

export const metadata: Metadata = constructMetadata({
  title: "Servicios | Construvial S.A.",
  description: "Descubrí nuestros 5 servicios principales: Ingeniería Civil, Movimiento de Suelos, Alquiler de Equipos, Logística y Departamento Técnico.",
})

const iconMap: Record<string, React.ReactNode> = {
  building: <Building size={32} strokeWidth={1.5} />,
  excavator: <Excavator size={32} strokeWidth={1.5} />,
  truck: <Truck size={32} strokeWidth={1.5} />,
  route: <Route size={32} strokeWidth={1.5} />,
  blueprint: <Blueprint size={32} strokeWidth={1.5} />,
}

const serviceImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBJdRWbR-Z009wa3ZnaONmyARLMLdys6cpQYhQB4UN0H5ovl-IIjfAi9MCZwqLpg4CJ6h_-TcBmK49sZamrAIhsBXF4AZG0kw0yE14iy2bqruzywE9TSQbicPASb6JvXmutIGa9QDOuTYDALZXkW908IFKvkXp8OOPL2ZoYcAuP3uDKWlgqV4Mhrw6qtRg_yGECbR8Y8P8qxRv3AcB50B_vN1CLRoNw8pm0QS57LL4jc7qv471zqDLdCsLrCSnfgfkDHckoDkabE8k", // Civil
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAr6T8oxPuwgIRoxrC8UaB9Dh_iSq7-uBfULbl0LZzuiI0Qzza6aW10TGLAGlLTJvqYP4uVZOZPrrYTo1FR0gtqRCsdOpStAwnA46piHdZIZamZqM1_a8eHSZCxlo8nCWaaGkIh-Wb_JCVAURaDNRoSHpQQH6ISxmwZ4xd4mcnYvvvzIMm14IztXxLkciukVfeo32QTwjGCizj86vpDH7asgGmam_nV5xde_NUMPgwiK8_PDYYmZYT_xEcgx3YR2qEFBd4Wx2xy4Sg", // Suelos
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA0v08Plo2TxWLfV0OdOo8sa55BzwJyx7kzXXnHQJH26UV1jpGDAZosXyDPA9AOMd--2ew0TfOM1e-8jhkwTqrAb7zMxJBOfgcJ44k7oAD-LJrzKRj8OpCP3BF5ZxBn75zizhK1kK4dDfe3rJAvgvxYL4h7aB-SpMQD6RXA0F6585Y0p4IZMyBpo4KWs-cX__xyYsbGc6oN19v72w59lqOvKecHkN-H3ym0_icCaXDK-5sScGKS4IdIXLDPJDR2GFAXWB95YRSg2Ec", // Equipos
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCqh34DxzAtf9DxxJ74rTZ9w5UxwVSkL_3KLtXCg4tH3W9OE5JMMxjtIL9wubU8Xx30k7cPu1-aBjAuDV6PThyHmUNXbBuOuoZBWWU_DmWsaOgw8OfjHUqWM1JSGauqkxhYxk3DGc54TQjUaaRrx58qLF0ceyMFkUd7KLaUbKr3po5FVip1YvI8LEAGWGwoJQCMyCAyi3EPhFyEnR0JEXc28Vyk_kXaXuKIfkiVUPumno1OcW8ECfSldB-F4w0O-PyNfTZ-VtS9940", // Logistica
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAFWBOTBSbxjDo22-Ad2u2Db7Oj5sJSTBHUlG-enwUYD-IMX7piu9b-kE6W_M_XnuhuV5rQbTPdudUOvD-Dwes77ufPRo5nJBEA5mSOgeCizXUAR-rYNHoC2WYfy_Se463qZhllOfH19pdR9KD3jBonzkCrmVP5daP1fDE7w-fdmRh5L5nisf3L3MVZT4a4FjaYB0oOopT-nue32a2SgXScpvutbVyeeKfFDCLMAqG9OVRh8yryG_JZbpCwtlQeJdiB2MqE-PdJjbk", // Tecnico
]

export default function ServiciosPage() {
  return (
    <div className="bg-[#0B0B0B]">
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKNSBjQcnwMcIqZR1Ke4TViNeq7DghYX4yxwGTCsU-slC-coPoIsJJ21ERi2PjnQ3a5DSo2oY1i_oXLzoscHx7Ny-2ezkqL6SPpoF4fLq7ceALG5hyBmIaf0_3QWjiDnM8MbldhCo7Q0gMPgqwQSWUCDhZWbffbLThJVyEV1roaMPKoQninIJ8sIa2Cyie400x1vSrI3OVNIEYGV-IOkurDB3xYxBX7KrRr6H7Mys_MdLFC-8l-7-IFVHVZSmF1BSV5zAF-0Vp-oQ"
            alt="Servicios Construvial"
            fill
            priority
            className="object-cover"
          />
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <FadeIn delay={0} direction="up">
            <span className="font-body text-[#FFD100] text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 block">
              Excelencia en Ingeniería
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-[0.9] mb-6">
              Nuestros <br /> <span className="text-[#FFD100]">Servicios</span>
            </h1>
            <p className="font-body text-xl text-gray-300 max-w-2xl leading-relaxed">
              Soluciones integrales de infraestructura respaldadas por 35 años de experiencia y equipamiento de vanguardia.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services List with Pure Industrial Style */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] via-[#050505] to-black">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="space-y-32">
            {SERVICIOS.map((servicio, index) => (
              <div
                key={servicio.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Content */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <FadeIn delay={200} direction={index % 2 === 1 ? "left" : "right"}>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="bg-[#FFD100] text-black w-14 h-14 flex items-center justify-center p-3 shadow-lg">
                        {iconMap[servicio.icon] || <Building size={32} />}
                      </div>
                      <div>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase leading-none">
                          {servicio.titulo}
                        </h2>
                        <div className="w-12 h-1 bg-[#FFD100] mt-3" />
                      </div>
                    </div>
                    
                    <p className="font-body text-lg text-white/70 mb-8 leading-relaxed">
                      {servicio.descripcion}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                      {servicio.items.map((item) => (
                        <div key={item} className="flex items-center gap-3 font-body text-white/80 group">
                          <span className="w-1.5 h-1.5 bg-[#FFD100] transition-transform group-hover:scale-150" />
                          <span className="text-sm tracking-wide">{item}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/servicios/${servicio.slug}`}
                      className="inline-flex items-center gap-3 font-body font-bold text-sm uppercase text-[#FFD100] hover:text-white transition-colors group"
                    >
                      Explorar detalles
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </FadeIn>
                </div>

                {/* Industrial Image Card with Glassmorphism */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <FadeIn delay={400} direction="up">
                    <div className="group relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          src={serviceImages[index]}
                          alt={servicio.titulo}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90"
                        />
                        {/* Dark Overlay for Text Readability/Aesthetic */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                        
                        {/* Interactive Corner Accent */}
                        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#FFD100]/50 group-hover:border-[#FFD100] transition-colors" />
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Technical Footer Banner */}
      <section className="py-24 border-t border-white/10 bg-black overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-12 lg:px-20 text-center relative z-10">
          <FadeIn delay={0} direction="up">
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6">
              ¿Listo para <span className="text-[#FFD100]">iniciar</span> tu proyecto?
            </h2>
            <p className="font-body text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Combinamos ingeniería de precisión con logística pesada para entregar resultados excepcionales en todo el país.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-4 bg-[#FFD100] text-black font-body font-bold py-5 px-10 text-sm tracking-widest uppercase hover:bg-white transition-all shadow-xl hover:-translate-y-1"
            >
              Solicitar Presupuesto Técnico
              <ArrowRight size={20} />
            </Link>
          </FadeIn>
        </div>
        
        {/* Abstract Background Detail */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FFD100]/5 blur-[120px] rounded-full" />
      </section>
    </div>
  )
}
