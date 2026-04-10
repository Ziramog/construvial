"use client"

import { useState } from "react"
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
        className="mb-12"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredWorks.map((work, index) => {
          const cycleIndex = index % 5
          const isLarge = cycleIndex === 0 || cycleIndex === 4

          return (
            <div
              key={work.slug}
              className={isLarge ? "md:col-span-2" : ""}
            >
              <WorkCard {...work} index={index} />
            </div>
          )
        })}
      </div>

      {filteredWorks.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg font-body">No se encontraron obras en esta categoría.</p>
        </div>
      )}
    </div>
  )
}
