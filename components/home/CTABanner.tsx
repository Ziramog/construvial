'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#141414] relative overflow-hidden">
      {/* Accent top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#facc15]" />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 right-16 w-64 h-64 border border-white rounded-full" />
        <div className="absolute -bottom-16 left-8 w-96 h-96 border border-white rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[#FFD100] text-sm font-bold tracking-widest uppercase mb-4 font-body">
            ¿Tenés un proyecto?
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white uppercase leading-tight mb-6">
            Hablemos.
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto font-body leading-relaxed">
            35 años de experiencia respaldan cada presupuesto. Respondemos en menos de 24 horas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="flex items-center gap-3 bg-[#facc15] hover:bg-white text-[#0a0a0a] font-body font-bold text-sm uppercase tracking-widest px-10 py-5 transition-all shadow-xl hover:-translate-y-1 group"
            >
              Solicitar presupuesto
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <a
              href="tel:+543571421350"
              className="flex items-center gap-3 border-2 border-white/20 hover:border-[#FFD100] text-white/80 hover:text-[#FFD100] font-body font-medium text-sm uppercase tracking-widest px-10 py-5 transition-all"
            >
              <Phone size={16} />
              03571 421350
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
