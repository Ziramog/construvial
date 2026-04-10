import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { constructMetadata } from "@/lib/metadata"
import { Stats } from "@/components/home/Stats"
import { ClientLogos } from "@/components/home/ClientLogos"
import { FadeIn } from "@/components/ui/FadeIn"

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
    <>
      {/* Hero — with watermark years */}
      <section className="relative h-[60vh] min-h-[460px] flex items-center justify-center overflow-hidden bg-[#0A1628]">
        <span className="absolute font-display text-[18vw] text-white/[0.03] leading-none select-none pointer-events-none">
          1989
        </span>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <FadeIn delay={0} direction="left">
            <p className="font-body text-[#E8720C] text-sm tracking-[0.3em] uppercase mb-6">
              Nuestra historia
            </p>
          </FadeIn>
          <FadeIn delay={100} direction="up">
            <h1 className="font-display text-6xl md:text-8xl text-white uppercase tracking-wider mb-4 leading-[0.9]">
              35 años<br />
              <span className="text-[#E8720C]">construyendo</span><br />
              la Argentina
            </h1>
          </FadeIn>
          <FadeIn delay={600} direction="up">
            <p className="font-body text-gray-400 text-lg max-w-2xl mx-auto mt-8">
              De Río Tercero al país. Tierra, acero y compromiso.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Historia — storytelling */}
      <section className="py-24 bg-[#0D1B2A]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <FadeIn delay={0} direction="left">
                <p className="font-body text-[#E8720C] text-sm tracking-[0.3em] uppercase mb-4">
                  Nuestra Historia
                </p>
              </FadeIn>
              <FadeIn delay={100} direction="up">
                <h2 className="font-display text-4xl md:text-5xl text-white uppercase leading-[0.95] mb-8">
                  Décadas de<br />experiencia
                </h2>
              </FadeIn>
              <div className="space-y-5 text-gray-400 font-body leading-relaxed">
                <FadeIn delay={200} direction="up">
                  <p>
                    <strong className="text-white">Construvial S.A.</strong> fue fundada hace más de 35 años en Río Tercero, Córdoba, con la visión de convertirse en una empresa líder en el sector de la construcción y la infraestructura.
                  </p>
                </FadeIn>
                <FadeIn delay={300} direction="up">
                  <p>
                    Desde entonces, hemos ejecutado más de <strong className="text-white">500 obras</strong> en todo el país, abarcando proyectos viales, civiles, industriales y electromecánicos para el sector público y privado.
                  </p>
                </FadeIn>
                <FadeIn delay={400} direction="up">
                  <p>
                    Nuestro compromiso con la calidad, la seguridad y la innovación nos ha permitido ganar la confianza de clientes como <strong className="text-white">YPF, INVAP/NASA, Axion, Pan American Energy, Bunge, AGD, Transener y Ansaldo</strong>, entre otros.
                  </p>
                </FadeIn>
              </div>
            </div>
            <FadeIn delay={300} direction="up">
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                <Image
                  src="https://picsum.photos/800/600?random=11"
                  alt="Historia Construvial"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0A1628]/20" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#080F1E] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn delay={0} direction="left">
            <p className="font-body text-[#E8720C] text-sm tracking-[0.3em] uppercase mb-4">
              Trayectoria
            </p>
          </FadeIn>
          <FadeIn delay={100} direction="up">
            <h2 className="font-display text-4xl md:text-5xl text-white uppercase leading-[0.95] mb-16">
              Nuestros hitos
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Horizontal line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-[2px] bg-white/10" />

            <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-4">
              {timelineHitos.map((hito, idx) => (
                <FadeIn key={hito.año} delay={idx * 100} direction="up">
                  <div className="relative">
                    {/* Dot on timeline */}
                    <div className="hidden lg:flex items-center gap-4 mb-6">
                      <div className="w-4 h-4 rounded-full bg-[#E8720C] relative z-10 ring-4 ring-[#080F1E]" />
                      <span className="font-display text-3xl text-[#E8720C]">{hito.año}</span>
                    </div>

                    {/* Mobile: year inline */}
                    <span className="lg:hidden font-display text-3xl text-[#E8720C] block mb-2">{hito.año}</span>

                    <h3 className="font-display text-lg text-white uppercase mb-2">{hito.titulo}</h3>
                    <p className="font-body text-gray-500 text-sm leading-relaxed">{hito.descripcion}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <Stats />

      {/* Misión / Visión / Valores — quote-style layout */}
      <section className="py-24 bg-[#0A1628]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Misión */}
            <FadeIn delay={100} direction="up">
              <div className="relative">
                <div className="w-12 h-[2px] bg-[#E8720C] mb-8" />
                <h3 className="font-display text-4xl text-white uppercase mb-6">Misión</h3>
                <p className="font-body text-gray-400 text-lg leading-relaxed">
                  Ejecutar obras de infraestructura con los más altos estándares de calidad, seguridad y responsabilidad ambiental, contribuyendo al desarrollo de las comunidades donde operamos.
                </p>
              </div>
            </FadeIn>

            {/* Visión */}
            <FadeIn delay={200} direction="up">
              <div className="relative">
                <div className="w-12 h-[2px] bg-[#E8720C] mb-8" />
                <h3 className="font-display text-4xl text-white uppercase mb-6">Visión</h3>
                <p className="font-body text-gray-400 text-lg leading-relaxed">
                  Ser la empresa constructora de referencia en Argentina, reconocida por la excelencia en la ejecución de proyectos viales, civiles e industriales, y por el desarrollo de soluciones innovadoras.
                </p>
              </div>
            </FadeIn>

            {/* Valores */}
            <FadeIn delay={300} direction="up">
              <div className="relative">
                <div className="w-12 h-[2px] bg-[#E8720C] mb-8" />
                <h3 className="font-display text-4xl text-white uppercase mb-6">Valores</h3>
                <ul className="font-body text-gray-400 space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E8720C] mt-1">→</span>
                    Compromiso con la calidad
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E8720C] mt-1">→</span>
                    Seguridad ante todo
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E8720C] mt-1">→</span>
                    Responsabilidad ambiental
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E8720C] mt-1">→</span>
                    Innovación constante
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E8720C] mt-1">→</span>
                    Trabajo en equipo
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-24 bg-[#0D1B2A]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn delay={300} direction="up">
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden order-2 lg:order-1">
                <Image
                  src="https://picsum.photos/800/600?random=12"
                  alt="Equipo Construvial"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0A1628]/20" />
              </div>
            </FadeIn>

            <div className="order-1 lg:order-2">
              <FadeIn delay={0} direction="left">
                <p className="font-body text-[#E8720C] text-sm tracking-[0.3em] uppercase mb-4">
                  Nuestro Equipo
                </p>
              </FadeIn>
              <FadeIn delay={100} direction="up">
                <h2 className="font-display text-4xl md:text-5xl text-white uppercase leading-[0.95] mb-8">
                  80 profesionales
                </h2>
              </FadeIn>
              <div className="space-y-5 text-gray-400 font-body leading-relaxed">
                <FadeIn delay={200} direction="up">
                  <p>
                    Contamos con un equipo de más de <strong className="text-white">80 profesionales</strong> altamente capacitados, incluyendo ingenieros, técnicos, operarios y personal administrativo.
                  </p>
                </FadeIn>
                <FadeIn delay={300} direction="up">
                  <p>
                    Nuestro departamento técnico y gerencial se encarga de la planificación, ejecución y control de cada proyecto, asegurando el cumplimiento de plazos, presupuestos y estándares de calidad.
                  </p>
                </FadeIn>
                <FadeIn delay={400} direction="up">
                  <p>
                    Invertimos constantemente en la formación y desarrollo de nuestro talento humano, incorporando nuevas tecnologías y metodologías de trabajo.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* CTA */}
      <section className="py-20 bg-[#0A1628] border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn delay={0} direction="up">
            <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wide mb-4">
              ¿Querés saber más?
            </h2>
          </FadeIn>
          <FadeIn delay={200} direction="up">
            <p className="font-body text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Contactanos y te contamos cómo podemos ayudarte con tu próximo proyecto.
            </p>
          </FadeIn>
          <FadeIn delay={400} direction="up">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 bg-[#E8720C] text-white font-body font-semibold px-8 py-4 hover:bg-orange-600 transition-colors duration-200 group"
            >
              Contactanos
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
