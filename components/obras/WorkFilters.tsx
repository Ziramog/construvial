"use client"

import { cn } from "@/lib/utils"

interface Category {
  value: string
  label: string
}

interface WorkFiltersProps {
  categories: Category[]
  activeCategory: string
  onFilterChange: (category: string) => void
  className?: string
}

export function WorkFilters({ categories, activeCategory, onFilterChange, className }: WorkFiltersProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onFilterChange(category.value)}
          className={cn(
            "px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 border",
            activeCategory === category.value
              ? "bg-accent text-white border-accent"
              : "bg-white text-muted border-gray-200 hover:border-accent/50 hover:text-accent"
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
