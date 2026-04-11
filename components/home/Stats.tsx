'use client'

import { FadeIn } from "@/components/ui/FadeIn"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { STATS } from "@/lib/constants"


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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-4">
          {STATS.map((stat, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <div className="flex flex-col items-center text-center">
                <div className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#1A1A1A] leading-none flex items-baseline">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />

                </div>
                <p className="font-body text-[#4a3f00] text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] mt-2 sm:mt-3 leading-relaxed font-medium">
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
