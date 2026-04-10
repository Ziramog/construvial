export const postSchema = {
  name: 'post',
  title: 'Blog / Noticias',
  type: 'document',
  fields: [
    { name: 'titulo', title: 'Título', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'titulo' } },
    { name: 'resumen', title: 'Resumen', type: 'text' },
    { name: 'contenido', title: 'Contenido', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'imagenPortada', title: 'Imagen de portada', type: 'image', options: { hotspot: true } },
    { name: 'fechaPublicacion', title: 'Fecha de publicación', type: 'date' },
    { name: 'categoria', title: 'Categoría', type: 'string',
      options: { list: ['Obras', 'Equipos', 'Sector', 'Empresa'] }
    },
  ]
}
