"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function ObrasSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section ref={ref} className="relative min-h-[85vh] overflow-hidden">
      {/* Full-width video background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="absolute inset-0"
      >
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          src="/media/obras/desktop/obra.mov"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

      {/* Content */}
      <div className="relative z-10 min-h-[85vh] flex items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left — Text with dramatic side slide */}
          <motion.div
            initial={{ opacity: 0, x: -120, rotate: -2 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ type: "spring", stiffness: 80, damping: 14, mass: 0.9, delay: 0.2 }}
            className="flex flex-col items-start lg:col-span-1"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              className="h-1 bg-[#facc15] mb-6"
            />
            <p className="font-body text-[#facc15] text-xs tracking-[0.3em] uppercase mb-4 font-bold">
              Obras ejecutadas
            </p>
            <h2 className="font-display text-white uppercase leading-none mb-6"
                style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}>
              Obras que<br/>
              <span className="text-[#facc15]">hablan por sí solas</span>
            </h2>
            <p className="font-body text-white/70 text-[17px] leading-relaxed mb-10 max-w-lg">
              Planificación precisa, ejecución eficiente y control total en cada etapa. Más de 500 obras entregadas a tiempo, cumpliendo plazos y superando los estándares del sector.
            </p>
            <a href="/obras"
               className="inline-flex items-center gap-3 text-white font-body text-sm tracking-widest uppercase hover:text-[#facc15] transition-colors duration-300 group">
              <span className="border-b border-white/30 group-hover:border-[#facc15] pb-1 transition-colors">Ver proyectos</span>
              <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>

          {/* Right — empty for video to show through */}
          <div className="hidden lg:block lg:col-span-1" />
        </div>
      </div>
    </section>
  )
}
