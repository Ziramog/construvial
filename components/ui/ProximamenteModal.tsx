"use client"

import { useState } from "react"

export function ProximamenteModal({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  if (!visible) return null
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div
        className="relative bg-[#111] border border-white/10 rounded-2xl px-8 py-10 text-center max-w-sm mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white/50 hover:text-white text-2xl leading-none"
        >
          ×
        </button>
        <p className="font-display text-white text-2xl tracking-[0.1em] uppercase mb-2">
          Próximamente...
        </p>
        <p className="font-body text-white/60 text-sm">
          Estamos preparando esta sección. Volvé pronto.
        </p>
      </div>
    </div>
  )
}

export function useProximamente() {
  const [show, setShow] = useState(false)
  return { show, setShow }
}
