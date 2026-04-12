'use client'

import { motion } from 'framer-motion'
import { FadeIn } from "@/components/ui/FadeIn"
import { CLIENTES } from "@/lib/constants"

const featuredClients = ['YPF', 'INVAP', 'NASA', 'Bunge', 'Pan American Energy', 'Transener']

export function ClientLogos() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F4F1EC]">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="mb-10 sm:mb-12 md:mb-16 max-w-3xl">
          <FadeIn delay={0} direction="left">
            <p className="font-body text-[#FFD100] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 font-bold">
              Más de 35 años de confianza
            </p>
          </FadeIn>
          <FadeIn delay={100} direction="up">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] uppercase leading-[0.95] mb-4 sm:mb-6 font-bold">
              Empresas que confían en nosotros
            </h2>
          </FadeIn>
          <FadeIn delay={400} direction="none">
            <div className="w-16 h-[2px] bg-[#FFD100] mb-4 sm:mb-6" />
          </FadeIn>
          <FadeIn delay={200} direction="up">
            <p className="font-body text-[#1A1A1A]/50 text-sm sm:text-base lg:text-lg">
              <span className="text-[#1A1A1A] font-semibold">{featuredClients.join(' · ')}</span>
              {' '}y {CLIENTES.length - featuredClients.length} más.
            </p>
          </FadeIn>
        </div>

        {/* Client grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-px bg-[#1A1A1A]/10 border border-[#1A1A1A]/10 overflow-hidden">
          {CLIENTES.map((cliente, i) => (
            <motion.div
              key={cliente}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center justify-center bg-white px-4 py-6 hover:bg-[#FFD100]/5 transition-colors duration-200 group"
            >
              <span className="text-xs font-semibold text-[#1A1A1A]/40 group-hover:text-[#1A1A1A] text-center leading-tight transition-colors duration-200 uppercase tracking-wide font-body">
                {cliente}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-[#1A1A1A]/40 mt-6 font-body uppercase tracking-widest">
          Sector público y privado · Industria · Energía · Agro · Infraestructura
        </p>
      </div>
    </section>
  )
}
