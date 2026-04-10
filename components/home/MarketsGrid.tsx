import Image from "next/image"
import { FadeIn } from "@/components/ui/FadeIn"
import { Map, Droplet, Building2, Mountain, Route } from "lucide-react"

const markets = [
  {
    title: "Rutas",
    icon: <Route size={32} strokeWidth={1.5} />,
    image: "https://images.unsplash.com/photo-1545652981-d21212dcda28?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Puentes",
    icon: <Map size={32} strokeWidth={1.5} />,
    image: "https://images.unsplash.com/photo-1528628045607-bb707be06979?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Urbanización",
    icon: <Building2 size={32} strokeWidth={1.5} />,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Hidráulica",
    icon: <Droplet size={32} strokeWidth={1.5} />,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Edificación",
    icon: <Building2 size={32} strokeWidth={1.5} />,
    image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Minería",
    icon: <Mountain size={32} strokeWidth={1.5} />,
    image: "https://images.unsplash.com/photo-1596409545667-160faab9f2d1?auto=format&fit=crop&w=600&q=80"
  }
]

export function MarketsGrid() {
  return (
    <section id="mercados" className="py-24 bg-[#1A1A1A]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <FadeIn delay={0} direction="up">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-[0.95] mb-2">
              Nuestros Mercados
            </h2>
          </FadeIn>
          <FadeIn delay={100} direction="none">
            <div className="w-16 h-[2px] bg-[#FFD100] mt-4" />
          </FadeIn>
        </div>

        {/* 2x3 Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-4 border border-[#1A1A1A]/20 bg-[#1A1A1A]/20">
          {markets.map((market, index) => (
            <FadeIn key={index} delay={index * 50} direction="up" className="h-full">
              <div className="group relative h-48 md:h-64 lg:h-80 w-full overflow-hidden bg-[#1A1A1A] cursor-pointer">
                {/* Background Image */}
                <Image
                  src={market.image}
                  alt={market.title}
                  fill
                  className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="text-[#FFD100] mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    {market.icon}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-white uppercase tracking-wider transform group-hover:-translate-y-2 transition-transform duration-300">
                    {market.title}
                  </h3>
                </div>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-[#FFD100] w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
