"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function EquiposCarousel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section ref={ref} className="relative bg-white py-32 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left — Video with slide-up reveal */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.92 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative w-full aspect-[16/10] overflow-hidden rounded-sm"
        >
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src="/media/equipos/desktop/Loader_filling_truck_202604130031.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Right — Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-start"
        >
          <div className="w-16 h-1 bg-[#facc15] mb-6" />
          <p className="font-body text-[#0a0a0a]/50 text-xs tracking-[0.3em] uppercase mb-4 font-bold">
            40+ equipos propios, listos para operar
          </p>
          <h2 className="font-display text-[#0a0a0a] uppercase leading-none mb-8"
              style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}>
            Equipos<br/>
            <span className="text-[#facc15]">listos para operar</span>
          </h2>
          <p className="font-body text-[#0a0a0a]/60 text-[17px] leading-relaxed mb-10 max-w-lg">
            Maquinaria propia certificada — motoniveladoras, excavadoras, compactadores y cargadoras. Sin dependencia de terceros, sin retrasos por disponibilidad. Tu obra avanza cuando lo necesita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/equipos"
               className="inline-flex items-center justify-center gap-2 bg-[#0a0a0a] text-white
                          font-body font-semibold text-sm tracking-widest uppercase
                          px-8 py-4 hover:bg-[#facc15] hover:text-[#0a0a0a] transition-colors">
              Ver catálogo →
            </a>
            <a href="https://wa.link/ocm4yr"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2 border border-[#0a0a0a]/30 text-[#0a0a0a]
                          font-body text-sm tracking-widest uppercase
                          px-8 py-4 hover:border-[#0a0a0a] transition-colors">
              Consultar disponibilidad
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
