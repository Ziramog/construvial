"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ProximamenteModal, useProximamente } from "@/components/ui/ProximamenteModal"

export function CTAFinal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { show, setShow } = useProximamente()

  return (
    <section ref={ref} className="bg-[#facc15] py-24 px-6 border-t border-black/5">
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.85 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 70, damping: 13, mass: 0.7, duration: 0.8 }}
        className="max-w-4xl mx-auto text-center border border-black/10 p-12 lg:p-20 shadow-2xl bg-[#0a0a0a] relative overflow-hidden"
      >

        {/* Glow that pulses in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: [0, 0.15, 0.08], scale: [0.8, 1.2, 1] } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#facc15] blur-[100px] pointer-events-none"
        />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="font-display text-white uppercase leading-none mb-6 relative z-10"
          style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}
        >
          ¿TENÉS UN PROYECTO?
        </motion.h2>

        <div className="font-body text-[#facc15] text-lg sm:text-xl mb-12 tracking-wide font-medium relative z-10 mx-auto max-w-2xl">
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
             className="mb-8"
          >
            Hacelo realidad con quien ya entregó{" "}<br className="hidden sm:block" />
            500+ obras en 35 años.
          </motion.p>
          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
            className="text-white/90 text-base sm:text-lg text-left inline-flex flex-col space-y-3 mx-auto"
          >
            <li className="flex items-center gap-3">
              <span className="text-[#facc15] font-bold">✓</span> Presupuesto sin compromiso
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#facc15] font-bold">✓</span> Respuesta en menos de 24 hs
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#facc15] font-bold">✓</span> Sin intermediarios
            </li>
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center relative z-10"
        >
          <button
            onClick={() => setShow(true)}
            className="inline-flex items-center justify-center gap-2
                       bg-[#facc15] text-[#0a0a0a] font-body font-bold
                       text-sm tracking-widest uppercase px-10 py-5
                       hover:bg-white transition-colors duration-200 cursor-pointer">
            SOLICITAR PRESUPUESTO →
          </button>
        </motion.div>

      </motion.div>

      <ProximamenteModal visible={show} onClose={() => setShow(false)} />
    </section>
  )
}
