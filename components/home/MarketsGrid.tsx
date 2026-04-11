import Image from "next/image"
import { FadeIn } from "@/components/ui/FadeIn"
import { Map, Droplet, Building2, Mountain, Route } from "lucide-react"

const markets = [
  {
    title: "Rutas",
    icon: <Route size={32} strokeWidth={1.5} />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMnav9jC0c-czLlAYGmRnYLvopF5asbUkitRykIEu06iowPMzNLpKr9cVmYTT6fqkOVtozzz5bWraHoFQtb4ycqk2izAm1Dx536WoHtFURjjvZwSww3_Yf5_OPjpk3cEMwjE9ks38RND3ugwbBCgOkeCCA8jM1XICAWhI-oSD7Z3TqdI7jKxqgh_JWNWojmwgCT2Ke2it32atSMR7M5MV7kvXAceNLyAUCBLEpZ48OQYl-y8c0Ghwd6a8PeYnM_M--CmAPT_b4vuk"
  },
  {
    title: "Puentes",
    icon: <Map size={32} strokeWidth={1.5} />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxQ1Huj0VlweX4TFPwxQtWH3zebBBb3WKB2kK-oWi2aQY6Q-sevxYYyL570_NZQJexH7xdKsYix6u9q3V0nv80cCgPWzAayMQbONh_AyYBwlhelh9WjLz8G__jY54arlsWYl-DygrVaH0sK_u74CwHr0s7BiGF6tADiFg2c-rI0cKRg0sqcJAvgMsRk9CVyhbUyJoNzXS3rqSRZbFObGxqxeLHyRQG3wHNgvGyCRhjT3B1qJUFu9Y7QUObpriU-LOd6LXyAkettPk"
  },
  {
    title: "Urbanización",
    icon: <Building2 size={32} strokeWidth={1.5} />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxhvIUsjDariJk5MdBZfehs5lEKCIWE22lTqqHr1v1OatlDXxJLHCeiSFC8qoScqp604hNjW3O-FezYIskqtSzSaMUjtxFyoNhMlMX0J8cWoV5KbRGA08QLHCYsdojdQZTtuln71BxZ7tUyNXo8W0LGfP8rkjSO8I9_edL1IL4Ph10V9BDjpSq9QZ0xi5K5cWRN-jUwtIBIqm1yrSCwTl39LLFFBXyHPGNKd4WZtv26NvcMV0syH_WBLTgkGzHfBhVrCg_UwDGOmE"
  },
  {
    title: "Hidráulica",
    icon: <Droplet size={32} strokeWidth={1.5} />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgWvPFJswD2Sf4yRO17d-KN9OIazjeC-8qsaWJyjpXoUjtPhbeRCoY64ugYMN_ijXgAJLrMTmbhYwm6aggEO6RHwyJx318LfnthRQ2_aRqBNn-lWCfK9KABhPHbGY2bnZZf9ytSeV7YGW9Zo4EJR3aY4uLI2YdHSEBR5y8w8jrwiWxdyM1eDD8FbZK-zXHEZq0IZwrz2LCXz4WgfkkcBXXePbnBnfflzIUkdWR36vweaaKaNxkXM6bUxk4TGBL0QOVXvL0owDNYBA"
  },
  {
    title: "Edificación",
    icon: <Building2 size={32} strokeWidth={1.5} />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCR3YEr6jR-l59clo9v3HZNgtUMcrv1qtUO4p3Hob8mluT_2KL31XDG8Ym7UN0OBlc0ZOnxdYwq51tUP84XNk0W2ms-yLc-7x4JShpKdrRUYl7mKHemHk6SK6Cab04O4M3ifSdIiEsWdkijYdew7QTIoOky1qcvkyGMlKqW3qct5fku3klIMHXGrZA8xZoRKjsGZj4B_Oz-ZRfENVJR6GQd_JMDseylt1qCIyqkDisWDKOdyyesR8UIJy7yfyCif0qVqx-3jxy-Rgo"
  },
  {
    title: "Minería",
    icon: <Mountain size={32} strokeWidth={1.5} />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4h9GgdLFoaEEskY_sCwlO1KVERVDu3F5oY8SmsZ0XMw2Xv752HqZBl_cgmHW1goaebHchq7Mn6btUjdgIrgkxmlV19wrNSH5Rt736tpmQiDV2Vbrhl06D512mVDcrS2UlsfOT99SnC8h3JAs_3YxNrO15KwF-sUxsDrdZQxIb_Q9FSKX4juoTH_IfBLMue0MCBxhNs-6tQDvxNswN-R1yL81JrNsArNkfu3n9L194LQNU11UdDvYe32JXzG59o1PbBe8EwlP0F88"
  }
]

export function MarketsGrid() {
  return (
    <section id="mercados" className="py-24 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <div className="mb-16">
          <FadeIn delay={0} direction="up">
             <span className="font-body text-[#FFD100] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 block">
              Diversificación Técnica
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-white uppercase leading-[0.9] mb-2">
              Nuestros <br /> <span className="text-[#FFD100]">Mercados</span>
            </h2>
            <div className="w-20 h-[3px] bg-[#FFD100] mt-8" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <div className="group relative h-96 w-full overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl transition-all duration-500 hover:border-[#FFD100]/50">
                {/* Background Image */}
                <Image
                  src={market.image}
                  alt={market.title}
                  fill
                  className="object-cover opacity-50 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-80 group-hover:grayscale-0"
                />

                {/* Industrial Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="bg-[#FFD100] text-black w-14 h-14 flex items-center justify-center p-3 shadow-2xl">
                        {market.icon}
                    </div>
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl text-white uppercase tracking-tight transform group-hover:-translate-y-2 transition-transform duration-300">
                    {market.title}
                  </h3>
                  
                  {/* Decorative line visible only on hover */}
                  <div className="h-[2px] w-0 bg-[#FFD100] mt-4 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
