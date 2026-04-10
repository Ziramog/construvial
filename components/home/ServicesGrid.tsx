"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn } from "@/components/ui/FadeIn"
import { SERVICIOS } from "@/lib/constants"
import { ArrowRight } from "lucide-react"

// Adding specific images for the services to match the industrial theme
const serviceImages = [
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80", // Civil
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80", // Suelos
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80", // Equipos
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1200&q=80", // Logistica
  "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1200&q=80", // Tecnico
]

export function ServicesGrid() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="servicios" className="py-24 bg-[#F6F6F6] text-[#2d2f2f]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <FadeIn delay={0} direction="up">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] uppercase leading-[0.95] mb-2">
              Soluciones Integrales
            </h2>
          </FadeIn>
          <FadeIn delay={100} direction="none">
            <div className="w-16 h-[2px] bg-[#FFD100] mt-4" />
          </FadeIn>
        </div>

        {/* Desktop Tab System */}
        <div className="hidden lg:block relative min-h-[600px]">
          {/* Tabs */}
          <div className="flex border-b border-[#e7e8e8] mb-8">
            {SERVICIOS.map((servicio, index) => (
              <button
                key={servicio.slug}
                onClick={() => setActiveTab(index)}
                className={`relative flex-1 py-6 px-4 text-left font-display text-xl uppercase tracking-wider transition-colors duration-200 ${
                  activeTab === index ? "text-[#1A1A1A]" : "text-[#5a5c5c] hover:text-[#1A1A1A]"
                }`}
              >
                {servicio.titulo}
                {/* Active Indicator Line */}
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-[#FFD100]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="relative bg-white overflow-hidden" style={{ minHeight: '500px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 h-full"
              >
                <div className="relative h-[500px] w-full">
                  <Image
                    src={serviceImages[activeTab] || serviceImages[0]}
                    alt={SERVICIOS[activeTab].titulo}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-12 lg:p-16 flex flex-col justify-center bg-[#dbdddd]/20">
                  <h3 className="font-display text-4xl uppercase mb-6 text-[#1A1A1A]">
                    {SERVICIOS[activeTab].titulo}
                  </h3>
                  <p className="font-body text-[#5a5c5c] text-lg leading-relaxed mb-8">
                    {SERVICIOS[activeTab].descripcion}
                  </p>
                  
                  <ul className="mb-10 grid grid-cols-2 gap-y-3 gap-x-6">
                    {SERVICIOS[activeTab].items.slice(0, 6).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-body text-sm text-[#2d2f2f]">
                        <span className="w-1.5 h-1.5 bg-[#FFD100] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link
                      href={`/servicios/${SERVICIOS[activeTab].slug}`}
                      className="inline-flex items-center gap-3 text-[#1A1A1A] font-body font-bold text-sm uppercase hover:text-[#FFD100] transition-colors duration-200 group"
                    >
                      Ver más detalles
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Accordion System */}
        <div className="lg:hidden flex flex-col gap-4">
          {SERVICIOS.map((servicio, index) => {
            const isActive = activeTab === index
            
            return (
              <div key={servicio.slug} className="bg-white">
                <button
                  onClick={() => setActiveTab(isActive ? -1 : index)}
                  className={`w-full text-left py-5 px-6 font-display text-xl uppercase tracking-wider flex justify-between items-center transition-colors border-l-4 ${
                    isActive ? "border-[#FFD100] bg-[#dbdddd]/20 text-[#1A1A1A]" : "border-transparent text-[#5a5c5c] hover:bg-gray-50"
                  }`}
                >
                  {servicio.titulo}
                  <span className={`text-2xl transition-transform duration-300 ${isActive ? "rotate-45 text-[#FFD100]" : "text-gray-300"}`}>
                    +
                  </span>
                </button>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={serviceImages[index] || serviceImages[0]}
                          alt={servicio.titulo}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 bg-[#dbdddd]/10">
                        <p className="font-body text-[#5a5c5c] text-base leading-relaxed mb-6">
                          {servicio.descripcion}
                        </p>
                        <Link
                          href={`/servicios/${servicio.slug}`}
                          className="inline-flex items-center gap-2 text-[#1A1A1A] font-body font-bold text-sm uppercase hover:text-[#FFD100] transition-colors"
                        >
                          Ver detalles
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
