import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeader({ title, subtitle, className, centered = false, light = false }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 flex flex-col gap-3", centered && "items-center text-center", className)}>
      <h2 className={cn(
        "font-display text-4xl md:text-5xl font-bold uppercase tracking-wide",
        light ? "text-white" : "text-primary"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "max-w-2xl text-lg font-body",
          light ? "text-gray-300" : "text-muted"
        )}>
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1 w-20 rounded-full mt-2",
        light ? "bg-accent" : "bg-primary"
      )} />
    </div>
  )
}
