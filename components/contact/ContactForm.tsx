"use client"

import { useState, FormEvent } from "react"
import { motion } from "framer-motion"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/Button"

type FormStatus = "idle" | "loading" | "success" | "error"

interface FormData {
  nombre: string
  email: string
  telefono: string
  tipoConsulta: string
  mensaje: string
}

interface FormErrors {
  nombre?: string
  email?: string
  telefono?: string
  tipoConsulta?: string
  mensaje?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    tipoConsulta: "",
    mensaje: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>("idle")

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    if (formData.telefono && !/^[0-9\s\-+()]+$/.test(formData.telefono)) {
      newErrors.telefono = "Teléfono inválido"
    }

    if (!formData.tipoConsulta) {
      newErrors.tipoConsulta = "Seleccioná un tipo de consulta"
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido"
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validate()) return

    setStatus("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ nombre: "", email: "", telefono: "", tipoConsulta: "", mensaje: "" })
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 5000)
      }
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
      >
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
        <h3 className="font-display text-xl font-bold text-green-800 mb-2">¡Mensaje enviado!</h3>
        <p className="text-green-700">Gracias por contactarnos. Te responderemos a la brevedad.</p>
      </motion.div>
    )
  }

  if (status === "error") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-red-50 border border-red-200 rounded-lg p-6 text-center"
      >
        <XCircle className="w-12 h-12 text-red-600 mx-auto mb-3" />
        <h3 className="font-display text-xl font-bold text-red-800 mb-2">Error al enviar</h3>
        <p className="text-red-700">Hubo un problema al enviar el mensaje. Por favor intentá de nuevo.</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nombre */}
      <div>
        <label htmlFor="nombre" className="block font-body font-medium text-text mb-2">
          Nombre completo <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border font-body transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent ${
            errors.nombre ? "border-red-500 bg-red-50" : "border-gray-200 bg-white"
          }`}
          placeholder="Tu nombre"
        />
        {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-body font-medium text-text mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border font-body transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent ${
            errors.email ? "border-red-500 bg-red-50" : "border-gray-200 bg-white"
          }`}
          placeholder="tu@email.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Teléfono */}
      <div>
        <label htmlFor="telefono" className="block font-body font-medium text-text mb-2">
          Teléfono
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border font-body transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent ${
            errors.telefono ? "border-red-500 bg-red-50" : "border-gray-200 bg-white"
          }`}
          placeholder="03571 123456"
        />
        {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
      </div>

      {/* Tipo de consulta */}
      <div>
        <label htmlFor="tipoConsulta" className="block font-body font-medium text-text mb-2">
          Tipo de consulta <span className="text-red-500">*</span>
        </label>
        <select
          id="tipoConsulta"
          name="tipoConsulta"
          value={formData.tipoConsulta}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border font-body transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white ${
            errors.tipoConsulta ? "border-red-500 bg-red-50" : "border-gray-200 bg-white"
          }`}
        >
          <option value="">Seleccioná una opción</option>
          <option value="obra">Consulta sobre obras</option>
          <option value="alquiler">Alquiler de equipos</option>
          <option value="presupuesto">Pedido de presupuesto</option>
          <option value="otro">Otro</option>
        </select>
        {errors.tipoConsulta && <p className="text-red-500 text-sm mt-1">{errors.tipoConsulta}</p>}
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="mensaje" className="block font-body font-medium text-text mb-2">
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border font-body transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none ${
            errors.mensaje ? "border-red-500 bg-red-50" : "border-gray-200 bg-white"
          }`}
          placeholder="Contanos en qué podemos ayudarte..."
        />
        {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full font-bold text-lg"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar mensaje"
        )}
      </Button>
    </form>
  )
}
