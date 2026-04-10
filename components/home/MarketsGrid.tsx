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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 lg:gap-4 border border-[#1A1A1A]/20 bg-[#1A1A1A]/20">
          {markets.map((market, index) => (
            <FadeIn key={index} delay={index * 50} direction="up" className="h-full">
              <div className="group relative h-40 sm:h-48 md:h-56 lg:h-80 w-full overflow-hidden bg-[#1A1A1A] cursor-pointer">
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
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                  <div className="text-[#FFD100] mb-2 md:mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                    {market.icon}
                  </div>
                  <h3 className="font-display text-lg md:text-xl lg:text-2xl text-white uppercase tracking-wider transform group-hover:-translate-y-2 transition-transform duration-300">
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
