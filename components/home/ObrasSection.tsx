"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function ObrasSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] py-32 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left — Text with dramatic side slide */}
        <motion.div
          initial={{ opacity: 0, x: -120, rotate: -2 }}
          animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 14, mass: 0.9, delay: 0.1 }}
          className="flex flex-col items-start"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
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
          <p className="font-body text-white/60 text-[17px] leading-relaxed mb-10 max-w-lg">
            Planificación precisa, ejecución eficiente y control total en cada etapa. Más de 500 obras entregadas a tiempo, cumpliendo plazos y superando los estándares del sector.
          </p>
          <a href="/obras"
             className="inline-flex items-center gap-3 text-white font-body text-sm tracking-widest uppercase hover:text-[#facc15] transition-colors duration-300 group">
            <span className="border-b border-white/30 group-hover:border-[#facc15] pb-1 transition-colors">Ver proyectos</span>
            <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

        {/* Right — Video with dramatic upward slide */}
        <motion.div
          initial={{ opacity: 0, y: 120, scale: 0.85, rotate: 1 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1, rotate: 0 } : {}}
          transition={{ type: "spring", stiffness: 70, damping: 13, mass: 0.8, delay: 0.2 }}
          className="relative w-full aspect-[16/10] overflow-hidden rounded-sm"
        >
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src="/media/obras/desktop/obra.mov"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </motion.div>

      </div>
    </section>
  )
}
