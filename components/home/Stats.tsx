import { FadeIn } from "@/components/ui/FadeIn"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"

const stats = [
  { value: 35, suffix: "+", label: "Años de\nExperiencia" },
  { value: 500, suffix: "+", label: "Obras\nRealizadas" },
  { value: 5, suffix: "", label: "Provincias\ncon Presencia" },
  { value: 40, suffix: "+", label: "Ciudades\nAlcanzadas" },
]

export function Stats() {
  return (
    <section id="stats" className="bg-[#FFD100] py-8 sm:py-10 md:py-14 relative overflow-hidden">
      {/* Subtle diagonal pattern */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 20px,
          currentColor 20px,
          currentColor 21px
        )`
      }} />

      <div className="container mx-auto px-4 sm:px-6 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <div className="flex flex-col items-center text-center">
                <div className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#1A1A1A] leading-none flex items-baseline">
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix && (
                    <span className="text-[#6e5900] text-3xl sm:text-4xl md:text-5xl ml-1">{stat.suffix}</span>
                  )}
                </div>
                <p className="font-body text-[#4a3f00] text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] mt-2 sm:mt-3 leading-relaxed whitespace-pre-line font-medium">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
