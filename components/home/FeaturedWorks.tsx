import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/ui/FadeIn"

const mockWorks = [
  { title: "Pavimentación RP N° 6", category: "Obras Viales", client: "Vialidad Provincial", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1200&q=80" },
  { title: "Nave Industrial Bunge", category: "Obras Industriales", client: "Bunge Argentina", image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80" },
  { title: "Acueducto Norte", category: "Hidráulica", client: "Municipio Río Tercero", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" },
]

export function FeaturedWorks() {
  return (
    <section className="py-24 bg-[#0A1628]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="mb-16">
          <FadeIn delay={0} direction="left">
            <p className="font-body text-[#FFD100] text-sm tracking-[0.3em] uppercase mb-4">
              Portfolio
            </p>
          </FadeIn>
          <FadeIn delay={100} direction="up">
            <h2 className="font-display text-5xl md:text-6xl text-white uppercase leading-[0.95]">
              500 obras.<br />Estas son algunas.
            </h2>
          </FadeIn>
          <FadeIn delay={400} direction="none">
            <div className="w-16 h-[2px] bg-[#FFD100] mt-6" />
          </FadeIn>
        </div>

        {/* Asymmetric magazine grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.6fr] gap-4">
          {/* Featured work — large */}
          <FadeIn delay={200} direction="up">
            <div className="relative group overflow-hidden aspect-[4/3]">
              <Image
                src={mockWorks[0].image}
                alt={mockWorks[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Gradient overlay only at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Category badge */}
              <span className="absolute top-6 left-6 bg-[#FFD100] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5">
                {mockWorks[0].category}
              </span>
              {/* Info at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-4xl text-white uppercase leading-tight mb-2">
                  {mockWorks[0].title}
                </h3>
                <p className="font-body text-gray-300 text-sm">{mockWorks[0].client}</p>
              </div>
            </div>
          </FadeIn>

          {/* Stacked smaller works */}
          <div className="flex flex-col gap-4">
            {mockWorks.slice(1).map((work, idx) => (
              <FadeIn key={idx} delay={400 + idx * 150} direction="up">
                <div className="relative group overflow-hidden aspect-[16/10]">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 bg-[#FFD100] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1">
                    {work.category}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl text-white uppercase leading-tight mb-1">
                      {work.title}
                    </h3>
                    <p className="font-body text-gray-300 text-xs">{work.client}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CTA — text link with animated underline */}
        <FadeIn delay={800} direction="up">
          <div className="mt-16">
            <Link
              href="/obras"
              className="link-underline inline-flex items-center gap-3 text-white font-body text-lg hover:text-[#FFD100] transition-colors duration-200 group"
            >
              Ver todas las obras
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
