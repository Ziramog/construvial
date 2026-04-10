import { STATS } from "@/lib/constants"
import { FadeIn } from "@/components/ui/FadeIn"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"

export function Stats() {
  return (
    <section className="bg-[#080F1E] border-y border-[#E8720C]/30 py-16 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 lg:gap-x-16">
          {STATS.map((stat, index) => (
            <FadeIn key={index} delay={index * 80} direction="up">
              <div className="flex flex-col items-center text-center">
                <div className="font-display text-6xl md:text-7xl text-white leading-none flex items-baseline">
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix && (
                    <span className="text-[#E8720C] text-5xl md:text-6xl ml-1">{stat.suffix}</span>
                  )}
                </div>
                <p className="font-body text-gray-500 text-xs uppercase tracking-[0.2em] mt-3 leading-relaxed whitespace-pre-line">
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
