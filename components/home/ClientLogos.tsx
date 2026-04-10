"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { CLIENTES } from "@/lib/constants"

export function ClientLogos() {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Empresas que confían en nosotros"
          subtitle="Trabajamos con las principales empresas del sector energético, industrial y gubernamental de Argentina."
          centered
        />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {CLIENTES.map((cliente, idx) => (
            <motion.div
              key={cliente}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.03, duration: 0.3 }}
              className="group bg-white rounded-lg p-4 flex items-center justify-center h-24 border border-gray-100 hover:border-accent/30 transition-all duration-300 hover:shadow-md"
            >
              <div className="grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100">
                <span className="font-display text-lg font-bold text-primary group-hover:text-accent transition-colors">
                  {cliente}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
