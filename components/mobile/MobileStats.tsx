'use client'

import dynamic from 'next/dynamic'
import { FadeIn } from "@/components/ui/FadeIn"
import { STATS } from "@/lib/constants"

const AnimatedCounter = dynamic(
  () => import('@/components/ui/AnimatedCounter').then(mod => mod.AnimatedCounter),
  {
    ssr: false,
    loading: () => <span>0</span>,
  }
)

export function MobileStats() {
  return (
    <section className="bg-[#FFD100] py-12 px-5 relative overflow-hidden">
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

      <div className="relative z-10">
        {/* Heading */}
        <FadeIn>
          <div className="text-center mb-8">
            <h2 className="font-display text-[#0a0a0a] uppercase leading-tight tracking-wide"
                style={{ fontSize: '26px' }}>
              Resultados que respaldan<br/>nuestro trabajo
            </h2>
          </div>
        </FadeIn>

        {/* 2x2 Grid - last item centered */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
          {STATS.map((stat, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <div className="flex flex-col items-center text-center">
                {/* Large numbers */}
                <div className="font-display text-[48px] leading-none text-[#0a0a0a] flex items-baseline">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                {/* Clear label */}
                <p className="font-body text-[#4a3f00] text-[13px] uppercase tracking-[0.12em] mt-3 font-semibold leading-snug">
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
