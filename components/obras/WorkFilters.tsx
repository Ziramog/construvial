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
    <div className={cn("flex flex-wrap gap-0 border-b border-white/10", className)}>
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onFilterChange(category.value)}
          className={cn(
            "font-body text-sm font-medium px-5 py-3 relative transition-colors duration-200",
            activeCategory === category.value
              ? "text-[#FFD100]"
              : "text-gray-500 hover:text-white"
          )}
        >
          {category.label}
          {/* Animated underline */}
          {activeCategory === category.value && (
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FFD100]" />
          )}
        </button>
      ))}
    </div>
  )
}
