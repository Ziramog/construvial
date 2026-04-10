import type { Metadata } from "next"
import Image from "next/image"
import { constructMetadata } from "@/lib/metadata"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Stats } from "@/components/home/Stats"
import { ClientLogos } from "@/components/home/ClientLogos"

export const metadata: Metadata = constructMetadata({
  title: "Quiénes Somos | Construvial S.A.",
  description: "Conocé nuestra historia, misión, valores y el equipo que hace posible 35 años de trayectoria construyendo infraestructura para Argentina.",
})

export default function QuienesSomosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="https://picsum.photos/1920/800?random=10"
            alt="Equipo Construvial"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-dark/80 -z-10" />
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">
            Quiénes <span className="text-accent">Somos</span>
          </h1>
          <p className="font-body text-xl text-gray-200 max-w-2xl mx-auto">
            35 años construyendo el futuro de Argentina
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader title="Nuestra Historia" subtitle="Décadas de experiencia y compromiso" />
              <div className="space-y-4 text-text font-body leading-relaxed">
                <p>
                  <strong className="text-primary">Construvial S.A.</strong> fue fundada hace más de 35 años en Río Tercero, Córdoba, con la visión de convertirse en una empresa líder en el sector de la construcción y la infraestructura.
                </p>
                <p>
                  Desde entonces, hemos ejecutado más de <strong className="text-primary">500 obras</strong> en todo el país, abarcando proyectos viales, civiles, industriales y electromecánicos para el sector público y privado.
                </p>
                <p>
                  Nuestro compromiso con la calidad, la seguridad y la innovación nos ha permitido ganar la confianza de clientes como <strong className="text-primary">YPF, INVAP/NASA, Axion, Pan American Energy, Bunge, AGD, Transener y Ansaldo</strong>, entre otros.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://picsum.photos/800/600?random=11"
                alt="Historia Construvial"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Misión */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-1 bg-accent mb-6" />
              <h3 className="font-display text-2xl font-bold text-primary mb-4">Misión</h3>
              <p className="font-body text-muted leading-relaxed">
                Ejecutar obras de infraestructura con los más altos estándares de calidad, seguridad y responsabilidad ambiental, contribuyendo al desarrollo de las comunidades donde operamos.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-1 bg-accent mb-6" />
              <h3 className="font-display text-2xl font-bold text-primary mb-4">Visión</h3>
              <p className="font-body text-muted leading-relaxed">
                Ser la empresa constructora de referencia en Argentina, reconocida por la excelencia en la ejecución de proyectos viales, civiles e industriales, y por el desarrollo de soluciones innovadoras.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-1 bg-accent mb-6" />
              <h3 className="font-display text-2xl font-bold text-primary mb-4">Valores</h3>
              <ul className="font-body text-muted space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Compromiso con la calidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Seguridad ante todo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Responsabilidad ambiental</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Innovación constante</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Trabajo en equipo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Equipo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="https://picsum.photos/800/600?random=12"
                alt="Equipo Construvial"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeader title="Nuestro Equipo" subtitle="Profesionales capacitados y comprometidos" />
              <div className="space-y-4 text-text font-body leading-relaxed">
                <p>
                  Contamos con un equipo de más de <strong className="text-primary">80 profesionales</strong> altamente capacitados, incluyendo ingenieros, técnicos, operarios y personal administrativo.
                </p>
                <p>
                  Nuestro departamento técnico y gerencial se encarga de la planificación, ejecución y control de cada proyecto, asegurando el cumplimiento de plazos, presupuestos y estándares de calidad.
                </p>
                <p>
                  Invertimos constantemente en la formación y desarrollo de nuestro talento humano, incorporando nuevas tecnologías y metodologías de trabajo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />
    </>
  )
}
