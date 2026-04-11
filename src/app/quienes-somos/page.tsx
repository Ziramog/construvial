import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { constructMetadata } from "@/lib/metadata"
import { Stats } from "@/components/home/Stats"
import { ClientLogos } from "@/components/home/ClientLogos"
import { FadeIn } from "@/components/ui/FadeIn"
import { ArrowRight, Target, Eye, ShieldCheck } from "lucide-react"

export const metadata: Metadata = constructMetadata({
  title: "Quiénes Somos | Construvial S.A.",
  description: "Conocé nuestra historia, misión, valores y el equipo que hace posible 35 años de trayectoria construyendo infraestructura para Argentina.",
})

const timelineHitos = [
  { año: "1989", titulo: "Fundación en Río Tercero", descripcion: "Construvial S.A. nace con la visión de transformar la infraestructura en Córdoba." },
  { año: "1995", titulo: "Primera obra vial provincial", descripcion: "Ejecutamos nuestro primer proyecto de pavimentación para Vialidad Provincial." },
  { año: "2003", titulo: "Incorporación de equipos certificados", descripcion: "Inversión estratégica en flota propia de maquinaria vial y de transporte." },
  { año: "2010", titulo: "Obras para el sector energético", descripcion: "Primeros proyectos para empresas de petróleo y energía en la región." },
  { año: "2018", titulo: "Obras para INVAP y NASA", descripcion: "Participación en proyectos de alta complejidad para el sector aeroespacial." },
  { año: "2025", titulo: "500+ obras finalizadas", descripcion: "Presencia en 40 ciudades con más de 80 profesionales capacitados." },
]

export default function QuienesSomosPage() {
  return (
    <div className="bg-black text-white font-body">
      {/* Hero — Extreme Industrial Style */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Texture/Pattern */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        {/* Large Watermark */}
        <span className="absolute font-display text-[25vw] text-white/[0.02] leading-none select-none pointer-events-none font-bold tracking-tighter">
          EST. 1989
        </span>

        <div className="container mx-auto px-4 md:px-12 lg:px-20 text-center relative z-10">
          <FadeIn delay={0} direction="up">
            <span className="font-body text-[#FFD100] text-xs sm:text-sm tracking-[0.4em] uppercase mb-8 block font-bold">
              Trayectoria Sin Límites
            </span>
          </FadeIn>
          <FadeIn delay={100} direction="up">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white uppercase tracking-tighter mb-8 leading-[0.85] font-bold">
              35 años<br />
              <span className="text-[#FFD100]">construyendo</span><br />
              la Argentina
            </h1>
          </FadeIn>
          <FadeIn delay={600} direction="up">
            <div className="flex flex-col items-center">
              <div className="w-20 h-1 bg-[#FFD100] mb-8" />
              <p className="font-body text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed italic">
                De Río Tercero al país. Ingeniería de precisión, escala industrial y compromiso inquebrantable.
              </p>
            </div>
          </FadeIn>
        </div>
        
        {/* Bottom Fade out */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Historia — Storytelling with High-End Assets */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <FadeIn delay={0} direction="left">
                <span className="font-body text-[#FFD100] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 block">
                  Nuestro Legado
                </span>
              </FadeIn>
              <FadeIn delay={100} direction="up">
                <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-white uppercase leading-[0.9] mb-10 font-bold">
                  Décadas de <br /> <span className="text-[#FFD100]">Experiencia</span>
                </h2>
              </FadeIn>
              <div className="space-y-8 text-gray-300 font-body text-lg leading-relaxed">
                <FadeIn delay={200} direction="up">
                  <p>
                    <strong className="text-white text-xl">Construvial S.A.</strong> fue fundada hace más de 35 años en Río Tercero, Córdoba, con la visión de convertirse en el brazo ejecutor de la infraestructura más crítica del país.
                  </p>
                </FadeIn>
                <FadeIn delay={300} direction="up">
                  <p>
                    Desde entonces, hemos materializado más de <strong className="text-white">500 obras</strong> estratégicas, abarcando proyectos viales, civiles, industriales y electromecánicos de alta complejidad técnica.
                  </p>
                </FadeIn>
                <FadeIn delay={400} direction="up">
                  <p>
                    La solvencia técnica y nuestra capacidad operativa han consolidado alianzas estratégicas con clientes de la talla de <strong className="text-white">YPF, INVAP/NASA, Axion, Pan American Energy y Transener</strong>.
                  </p>
                </FadeIn>
              </div>
            </div>
            
            <FadeIn delay={500} direction="right">
              <div className="group relative aspect-[4/5] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-2 shadow-2xl transition-all duration-700 hover:border-[#FFD100]/50">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyv2K2dYfI-WtmeNE2iS8JZURvzaRREhmCPIJLtazQ6Oa8g3vcrnGIhO4C6e_tkS2fUmyvSMdaWH6Q9wJgahmzU7b5bT0OnKE8iBE5dN4CqXxFCeoHc7oBWMmCAbxydAMzoBCP51b5nsyEuvDbXXObeoGfQphxaiTjZSTGFpuXHKG2UTHbfvclLzVMHTXmXD-wRDhS8HE_3QzpShSrWQGdwAJUAMnI94ITSPoISKD-aR304gNO4TlgxsC0wV2LCzd-HlF3_zIZ"
                    alt="Historia Construvial - Obra a gran escala"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 brightness-75 group-hover:brightness-90"
                  />
                  {/* Cinematic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#FFD100] opacity-30 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline with Industrial Glow */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <FadeIn delay={0} direction="left">
            <span className="font-body text-[#FFD100] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 block">
              Trayectoria
            </span>
          </FadeIn>
          <FadeIn delay={100} direction="up">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-[0.9] mb-20 font-bold">
              Nuestros <span className="text-[#FFD100]">Hitos</span>
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Horizontal line with glow */}
            <div className="hidden lg:block absolute top-[2.1rem] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFD100]/20 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
              {timelineHitos.map((hito, idx) => (
                <FadeIn key={hito.año} delay={idx * 100} direction="up">
                  <div className="relative group">
                    {/* Dot on timeline */}
                    <div className="hidden lg:flex items-center gap-4 mb-6">
                      <div className="w-4 h-4 rounded-full bg-[#FFD100] relative z-10 ring-4 ring-black shadow-[0_0_15px_rgba(255,209,0,0.5)] group-hover:scale-125 transition-transform" />
                    </div>

                    <span className="font-display text-4xl text-[#FFD100] block mb-4 group-hover:translate-x-1 transition-transform">{hito.año}</span>
                    <h3 className="font-display text-lg text-white uppercase mb-3 leading-tight tracking-wide">{hito.titulo}</h3>
                    <p className="font-body text-gray-500 text-sm leading-relaxed">{hito.descripcion}</p>
                    
                    {/* Hover indicator */}
                    <div className="mt-4 w-0 h-[2px] bg-[#FFD100] group-hover:w-full transition-all duration-500" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats band Refined */}
      <div className="relative z-10 border-y border-white/10">
        <Stats />
      </div>

      {/* Misión / Visión / Valores — Glassmorphic Dark Cards */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Misión */}
            <FadeIn delay={100} direction="up">
              <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 p-10 lg:p-12 hover:border-[#FFD100]/50 transition-all group">
                <div className="bg-[#FFD100] text-black w-14 h-14 flex items-center justify-center mb-8 shadow-xl">
                  <Target size={30} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-3xl text-white uppercase mb-6 tracking-tight">Misión</h3>
                <p className="font-body text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                  Ejecutar obras de infraestructura con los más altos estándares de calidad, seguridad y responsabilidad ambiental, contribuyendo al desarrollo estructural del país.
                </p>
              </div>
            </FadeIn>

            {/* Visión */}
            <FadeIn delay={200} direction="up">
              <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 p-10 lg:p-12 hover:border-[#FFD100]/50 transition-all group">
                <div className="bg-[#FFD100] text-black w-14 h-14 flex items-center justify-center mb-8 shadow-xl">
                  <Eye size={30} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-3xl text-white uppercase mb-6 tracking-tight">Visión</h3>
                <p className="font-body text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                  Ser la constructora líder en Argentina, reconocida por la excelencia técnica en megaproyectos y por la innovación constante en logística pesada.
                </p>
              </div>
            </FadeIn>

            {/* Valores */}
            <FadeIn delay={300} direction="up">
              <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 p-10 lg:p-12 hover:border-[#FFD100]/50 transition-all group">
                <div className="bg-[#FFD100] text-black w-14 h-14 flex items-center justify-center mb-8 shadow-xl">
                  <ShieldCheck size={30} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-3xl text-white uppercase mb-6 tracking-tight">Valores</h3>
                <ul className="font-body text-gray-400 space-y-4 text-base lg:text-lg">
                  {[
                    "Compromiso con la Calidad Total",
                    "Seguridad Operacional Absoluta",
                    "Responsabilidad Ambiental",
                    "Innovación y Tecnología",
                    "Excelencia Estructural"
                  ].map((val) => (
                    <li key={val} className="flex items-center gap-4">
                      <span className="w-1.5 h-1.5 bg-[#FFD100]" />
                      {val}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Equipo — Human Capital with Industrial Backdrop */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn delay={300} direction="left">
              <div className="group relative aspect-[4/5] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-2 shadow-2xl order-2 lg:order-1 hover:border-[#FFD100]/50 transition-all">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAadCB83L-xrCKmnM9p2R9IGPmIbErSDKj1HU35D9nD5UJPw3Ch9TbJIKJrTQfTavk_EcFpLq9TT5UCFjzY2SuEEYTROUULZmhZF4rTcQP_h9RRAv8xEetY4KHiVsdAfveLx_xtLhuuVaBqQe4-MlbA-jIph4YQtuNHtM4fBRX6UUeNYUOUJGP0xg22EmQPCVGwANFXbQNkMmYfbVmmFpei23u3UiaAjo1dWihb996W0MwGCubRwMbgdp33Q9j5cUOpc3yhv716"
                    alt="Equipo Técnico de Construvial"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </FadeIn>

            <div className="order-1 lg:order-2">
              <FadeIn delay={0} direction="right">
                <span className="font-body text-[#FFD100] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 block">
                  Capital Humano
                </span>
              </FadeIn>
              <FadeIn delay={100} direction="up">
                <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-white uppercase leading-[0.9] mb-10 font-bold">
                  80 <span className="text-[#FFD100]">Especialistas</span>
                </h2>
              </FadeIn>
              <div className="space-y-6 text-gray-300 font-body text-lg leading-relaxed">
                <FadeIn delay={200} direction="up">
                  <p>
                    Contamos con una fuerza laboral compuesta por ingenieros, técnicos altamente especializados y operarios de maquinaria pesada.
                  </p>
                </FadeIn>
                <FadeIn delay={300} direction="up">
                  <p>
                    Nuestro equipo técnico lidera con precisión cada fase de obra, garantizando el cumplimiento de normativas ISO y protocolos internacionales de seguridad.
                  </p>
                </FadeIn>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-4 text-[#FFD100] font-body font-bold text-sm uppercase tracking-widest mt-6 group"
                >
                  Unirse al equipo
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos with Dark Theme Integration */}
      <div className="bg-black py-12 border-t border-white/5">
        <ClientLogos />
      </div>

      {/* Final CTA — Pure Industrial Power */}
      <section className="py-24 bg-black border-t border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 lg:px-20 text-center relative z-10">
          <FadeIn delay={0} direction="up">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-tighter mb-8 font-bold leading-none">
              Iniciemos <br /> <span className="text-[#FFD100]">tu Proyecto</span>
            </h2>
          </FadeIn>
          <FadeIn delay={200} direction="up">
            <p className="font-body text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Estamos listos para desplegar nuestra capacidad operativa y técnica al servicio de tu próximo desafío de infraestructura.
            </p>
          </FadeIn>
          <FadeIn delay={400} direction="up">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-4 bg-[#FFD100] text-black font-body font-bold py-6 px-12 text-sm tracking-[0.3em] uppercase hover:bg-white transition-all shadow-[0_0_30px_rgba(255,209,0,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] active:scale-95"
            >
              Contactar Dirección Técnica
              <ArrowRight size={22} />
            </Link>
          </FadeIn>
        </div>
        
        {/* Absolute Background Detail */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFD100]/5 blur-[150px] rounded-full pointer-events-none" />
      </section>
    </div>
  )
}
