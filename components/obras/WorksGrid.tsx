"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { WorkCard } from "./WorkCard"
import { WorkFilters } from "./WorkFilters"

interface Work {
  slug: string
  title: string
  category: string
  client: string
  image: string
}

interface WorksGridProps {
  works: Work[]
  className?: string
}

const categories = [
  { value: "all", label: "Todas" },
  { value: "viales", label: "Viales" },
  { value: "civiles", label: "Civiles" },
  { value: "industriales", label: "Industriales" },
  { value: "electromecanica", label: "Electromecánicas" },
  { value: "suelos", label: "Movimiento de Suelos" },
]

export function WorksGrid({ works, className }: WorksGridProps) {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredWorks = activeCategory === "all"
    ? works
    : works.filter(work => work.category === activeCategory)

  return (
    <div className={className}>
      <WorkFilters
        categories={categories}
        activeCategory={activeCategory}
        onFilterChange={setActiveCategory}
        className="mb-8"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredWorks.map((work) => (
            <WorkCard
              key={work.slug}
              {...work}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredWorks.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted text-lg">No se encontraron obras en esta categoría.</p>
        </div>
      )}
    </div>
  )
}
