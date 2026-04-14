"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function ServicesCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] py-32 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <div className="w-16 h-1 bg-[#facc15] mb-6" />
          <p className="font-body text-[#facc15] text-xs tracking-[0.3em] uppercase mb-4 font-bold">
            Servicios integrales
          </p>
          <h2 className="font-display text-white uppercase leading-none mb-8"
              style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}>
            Todo lo que<br/>
            <span className="text-[#facc15]">tu obra necesita</span>
          </h2>
          <p className="font-body text-white/60 text-[17px] leading-relaxed mb-10 max-w-lg">
            Ingeniería civil, movimiento de suelos, equipos certificados y logística especializada. Un solo responsable para toda tu obra: menos coordinar, más ejecutar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/servicios"
               className="inline-flex items-center justify-center gap-2 bg-[#facc15] text-[#0a0a0a]
                          font-body font-semibold text-sm tracking-widest uppercase
                          px-8 py-4 hover:bg-white transition-colors">
              Ver servicios →
            </a>
            <a href="https://wa.link/ocm4yr"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2 border border-white/30 text-white
                          font-body text-sm tracking-widest uppercase
                          px-8 py-4 hover:border-white transition-colors">
              Consultar proyecto
            </a>
          </div>
        </motion.div>

        {/* Right — Video with slide-up reveal */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.92 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative w-full aspect-[16/10] overflow-hidden rounded-sm"
        >
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src="/media/servicios/desktop/construvial.mov"
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
