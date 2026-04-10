import { client } from '../sanity.client'
import { groq } from 'next-sanity'

// Get all obras
export const obrasQuery = groq`*[_type == "obra"] | order(anio desc) {
  _id,
  titulo,
  slug,
  cliente,
  categoria,
  descripcion,
  ubicacion,
  anio,
  destacada,
  "imagenPrincipal": imagenPrincipal.asset->url,
  "galeria": galeria[].asset->url
}`

// Get obra by slug
export const obraBySlugQuery = groq`*[_type == "obra" && slug.current == $slug][0] {
  _id,
  titulo,
  slug,
  cliente,
  categoria,
  descripcion,
  ubicacion,
  anio,
  destacada,
  "imagenPrincipal": imagenPrincipal.asset->url,
  "galeria": galeria[].asset->url
}`

// Get featured obras
export const featuredObrasQuery = groq`*[_type == "obra" && destacada == true] | order(anio desc)[0...4] {
  _id,
  titulo,
  slug,
  cliente,
  categoria,
  "imagenPrincipal": imagenPrincipal.asset->url
}`

// Get obras by category
export const obrasByCategoryQuery = groq`*[_type == "obra" && categoria == $categoria] | order(anio desc) {
  _id,
  titulo,
  slug,
  cliente,
  categoria,
  "imagenPrincipal": imagenPrincipal.asset->url
}`

export async function getAllObras() {
  return client.fetch(obrasQuery)
}

export async function getObraBySlug(slug: string) {
  return client.fetch(obraBySlugQuery, { slug })
}

export async function getFeaturedObras() {
  return client.fetch(featuredObrasQuery)
}

export async function getObrasByCategory(categoria: string) {
  return client.fetch(obrasByCategoryQuery, { categoria })
}
