export const postSchema = {
  name: 'post',
  title: 'Blog / Noticias',
  type: 'document',
  fieldsets: [
    { name: 'mediaPrincipal', title: 'Media Principal (Portadas)', options: { collapsible: true, collapsed: false } }
  ],
  fields: [
    { name: 'titulo', title: 'Título', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'titulo' } },
    { name: 'resumen', title: 'Resumen', type: 'text' },
    { name: 'contenido', title: 'Contenido', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    
    // Responsive Media Fields
    { name: 'imagenDesktop', title: 'Imagen Desktop (Fallback/Secundaria)', type: 'image', fieldset: 'mediaPrincipal', options: { hotspot: true } },
    { name: 'imagenMobile', title: 'Imagen Mobile', type: 'image', fieldset: 'mediaPrincipal', options: { hotspot: true }, description: 'Opcional. Si no se sube, se adapta la Desktop.' },
    { name: 'videoDesktop', title: 'Video Desktop (.mp4)', type: 'file', fieldset: 'mediaPrincipal', options: { accept: 'video/mp4,video/webm' }, description: 'Opcional. Si se sube, en PC se verá el video.' },
    { name: 'videoMobile', title: 'Video Mobile (.mp4)', type: 'file', fieldset: 'mediaPrincipal', options: { accept: 'video/mp4,video/webm' }, description: 'Opcional. Si se sube, en celulares se verá el video.' },

    { name: 'fechaPublicacion', title: 'Fecha de publicación', type: 'date' },
    { name: 'categoria', title: 'Categoría', type: 'string',
      options: { list: ['Obras', 'Equipos', 'Sector', 'Empresa'] }
    },
  ],
  preview: { select: { title: 'titulo', subtitle: 'fechaPublicacion', media: 'imagenDesktop' } }
}
