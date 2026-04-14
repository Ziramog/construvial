'use client'

import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { STATS } from "@/lib/constants"

const AnimatedCounter = dynamic(
  () => import('@/components/ui/AnimatedCounter').then(mod => mod.AnimatedCounter),
  {
    ssr: false,
    loading: () => <span>0</span>,
  }
)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 80, rotate: 4 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
      mass: 0.8,
    },
  },
}

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="stats" className="bg-[#FFD100] py-12 sm:py-16 md:py-20 relative overflow-hidden">
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
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 14, duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="font-display text-[#0a0a0a] uppercase leading-none tracking-wide"
              style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
            Resultados que respaldan nuestro trabajo
          </h2>
        </motion.div>

        {/* Stats grid with staggered spring reveal */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-4"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={index === 4 ? "hidden sm:flex sm:flex-col sm:items-center sm:text-center" : "flex flex-col items-center text-center"}
            >
              <div className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0a0a0a] leading-none flex items-baseline">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="font-body text-[#4a3f00] text-[15px] sm:text-[18px] uppercase tracking-[0.1em] sm:tracking-[0.15em] mt-2 sm:mt-3 leading-relaxed font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
