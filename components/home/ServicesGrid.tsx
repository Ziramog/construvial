"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn } from "@/components/ui/FadeIn"
import { SERVICIOS } from "@/lib/constants"
import { ArrowRight } from "lucide-react"

// Consistent photorealistic images from Stitch
const serviceImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBJdRWbR-Z009wa3ZnaONmyARLMLdys6cpQYhQB4UN0H5ovl-IIjfAi9MCZwqLpg4CJ6h_-TcBmK49sZamrAIhsBXF4AZG0kw0yE14iy2bqruzywE9TSQbicPASb6JvXmutIGa9QDOuTYDALZXkW908IFKvkXp8OOPL2ZoYcAuP3uDKWlgqV4Mhrw6qtRg_yGECbR8Y8P8qxRv3AcB50B_vN1CLRoNw8pm0QS57LL4jc7qv471zqDLdCsLrCSnfgfkDHckoDkabE8k", // Civil
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAr6T8oxPuwgIRoxrC8UaB9Dh_iSq7-uBfULbl0LZzuiI0Qzza6aW10TGLAGlLTJvqYP4uVZOZPrrYTo1FR0gtqRCsdOpStAwnA46piHdZIZamZqM1_a8eHSZCxlo8nCWaaGkIh-Wb_JCVAURaDNRoSHpQQH6ISxmwZ4xd4mcnYvvvzIMm14IztXxLkciukVfeo32QTwjGCizj86vpDH7asgGmam_nV5xde_NUMPgwiK8_PDYYmZYT_xEcgx3YR2qEFBd4Wx2xy4Sg", // Suelos
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA0v08Plo2TxWLfV0OdOo8sa55BzwJyx7kzXXnHQJH26UV1jpGDAZosXyDPA9AOMd--2ew0TfOM1e-8jhkwTqrAb7zMxJBOfgcJ44k7oAD-LJrzKRj8OpCP3BF5ZxBn75zizhK1kK4dDfe3rJAvgvxYL4h7aB-SpMQD6RXA0F6585Y0p4IZMyBpo4KWs-cX__xyYsbGc6oN19v72w59lqOvKecHkN-H3ym0_icCaXDK-5sScGKS4IdIXLDPJDR2GFAXWB95YRSg2Ec", // Equipos
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCqh34DxzAtf9DxxJ74rTZ9w5UxwVSkL_3KLtXCg4tH3W9OE5JMMxjtIL9wubU8Xx30k7cPu1-aBjAuDV6PThyHmUNXbBuOuoZBWWU_DmWsaOgw8OfjHUqWM1JSGauqkxhYxk3DGc54TQjUaaRrx58qLF0ceyMFkUd7KLaUbKr3po5FVip1YvI8LEAGWGwoJQCMyCAyi3EPhFyEnR0JEXc28Vyk_kXaXuKIfkiVUPumno1OcW8ECfSldB-F4w0O-PyNfTZ-VtS9940", // Logistica
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAFWBOTBSbxjDo22-Ad2u2Db7Oj5sJSTBHUlG-enwUYD-IMX7piu9b-kE6W_M_XnuhuV5rQbTPdudUOvD-Dwes77ufPRo5nJBEA5mSOgeCizXUAR-rYNHoC2WYfy_Se463qZhllOfH19pdR9KD3jBonzkCrmVP5daP1fDE7w-fdmRh5L5nisf3L3MVZT4a4FjaYB0oOopT-nue32a2SgXScpvutbVyeeKfFDCLMAqG9OVRh8yryG_JZbpCwtlQeJdiB2MqE-PdJjbk", // Tecnico
]

export function ServicesGrid() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="servicios" className="py-24 bg-[#0B0B0B] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <div className="mb-16">
          <FadeIn delay={0} direction="up">
            <span className="font-body text-[#FFD100] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 block">
              Nuestras Capacidades
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-white uppercase leading-[0.9] mb-2">
              Soluciones <br /> <span className="text-[#FFD100]">Integrales</span>
            </h2>
            <div className="w-20 h-[3px] bg-[#FFD100] mt-8" />
          </FadeIn>
        </div>

        {/* Desktop Tab System */}
        <div className="hidden lg:block relative min-h-[600px]">
          {/* Tabs */}
          <div className="flex border-b border-white/10 mb-12">
            {SERVICIOS.map((servicio, index) => (
              <button
                key={servicio.slug}
                onClick={() => setActiveTab(index)}
                className={`relative flex-1 py-8 px-4 text-left font-display text-lg uppercase tracking-wider transition-all duration-300 ${
                  activeTab === index ? "text-white" : "text-white/40 hover:text-white/70"
                }`}
              >
                <span className="block text-[#FFD100] text-[10px] mb-2 opacity-50">0{index + 1}</span>
                {servicio.titulo}
                {/* Active Indicator Line */}
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTabIndicatorHome"
                    className="absolute bottom-[-1px] left-0 right-0 h-[4px] bg-[#FFD100]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl" style={{ minHeight: '550px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="grid grid-cols-5 h-full min-h-[550px]"
              >
                <div className="col-span-3 relative h-full w-full overflow-hidden group">
                  <Image
                    src={serviceImages[activeTab] || serviceImages[0]}
                    alt={SERVICIOS[activeTab].titulo}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                </div>
                
                <div className="col-span-2 p-12 lg:p-16 flex flex-col justify-center bg-black/40">
                  <h3 className="font-display text-4xl lg:text-5xl uppercase mb-8 text-white leading-tight">
                    {SERVICIOS[activeTab].titulo}
                  </h3>
                  <p className="font-body text-white/60 text-lg leading-relaxed mb-10">
                    {SERVICIOS[activeTab].descripcion}
                  </p>
                  
                  <ul className="mb-12 space-y-4">
                    {SERVICIOS[activeTab].items.slice(0, 4).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 font-body text-sm text-white/80">
                        <span className="w-1.5 h-1.5 bg-[#FFD100]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link
                      href={`/servicios/${SERVICIOS[activeTab].slug}`}
                      className="inline-flex items-center gap-3 text-[#FFD100] font-body font-bold text-sm uppercase hover:text-white transition-all group"
                    >
                      Explorar Servicio
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
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
              <div key={servicio.slug} className="bg-white/5 border border-white/10 overflow-hidden">
                <button
                  onClick={() => setActiveTab(isActive ? -1 : index)}
                  className={`w-full text-left py-6 px-8 font-display text-lg uppercase tracking-wider flex justify-between items-center transition-all ${
                    isActive ? "bg-white/10 text-[#FFD100]" : "text-white/60 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span className="text-[10px] text-white/30 font-body">0{index + 1}</span>
                    {servicio.titulo}
                  </span>
                  <span className={`text-2xl transition-transform duration-300 ${isActive ? "rotate-45 text-[#FFD100]" : "text-white/20"}`}>
                    +
                  </span>
                </button>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="relative h-64 w-full">
                        <Image
                          src={serviceImages[index] || serviceImages[0]}
                          alt={servicio.titulo}
                          fill
                          className="object-cover brightness-75"
                        />
                      </div>
                      <div className="p-8 bg-black/40">
                        <p className="font-body text-white/70 text-base leading-relaxed mb-8">
                          {servicio.descripcion}
                        </p>
                        <Link
                          href={`/servicios/${servicio.slug}`}
                          className="inline-flex items-center gap-2 text-[#FFD100] font-body font-bold text-sm uppercase hover:text-white transition-colors"
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
