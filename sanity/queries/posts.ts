import { client } from '../sanity.client'
import { groq } from 'next-sanity'

// Get all posts
export const postsQuery = groq`*[_type == "post"] | order(fechaPublicacion desc) {
  _id,
  titulo,
  slug,
  resumen,
  contenido,
  "imagenPortada": imagenPortada.asset->url,
  fechaPublicacion,
  categoria
}`

// Get post by slug
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  titulo,
  slug,
  resumen,
  contenido,
  "imagenPortada": imagenPortada.asset->url,
  fechaPublicacion,
  categoria
}`

// Get latest posts
export const latestPostsQuery = groq`*[_type == "post"] | order(fechaPublicacion desc)[0...6] {
  _id,
  titulo,
  slug,
  resumen,
  "imagenPortada": imagenPortada.asset->url,
  fechaPublicacion,
  categoria
}`

export async function getAllPosts() {
  return client.fetch(postsQuery)
}

export async function getPostBySlug(slug: string) {
  return client.fetch(postBySlugQuery, { slug })
}

export async function getLatestPosts() {
  return client.fetch(latestPostsQuery)
}
