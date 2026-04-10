import { client } from '../sanity.client'
import { groq } from 'next-sanity'

// Get all equipos
export const equiposQuery = groq`*[_type == "equipo"] | order(nombre asc) {
  _id,
  nombre,
  tipo,
  descripcion,
  especificaciones,
  disponibleParaAlquiler,
  "imagen": imagen.asset->url
}`

// Get equipo by slug/id
export const equipoByIdQuery = groq`*[_type == "equipo" && _id == $id][0] {
  _id,
  nombre,
  tipo,
  descripcion,
  especificaciones,
  disponibleParaAlquiler,
  "imagen": imagen.asset->url
}`

// Get equipos available for rent
export const availableEquiposQuery = groq`*[_type == "equipo" && disponibleParaAlquiler == true] | order(nombre asc) {
  _id,
  nombre,
  tipo,
  descripcion,
  "imagen": imagen.asset->url
}`

export async function getAllEquipos() {
  return client.fetch(equiposQuery)
}

export async function getEquipoById(id: string) {
  return client.fetch(equipoByIdQuery, { id })
}

export async function getAvailableEquipos() {
  return client.fetch(availableEquiposQuery)
}
