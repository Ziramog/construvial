export const obraSchema = {
  name: 'obra',
  title: 'Obras',
  type: 'document',
  fieldsets: [
    { name: 'mediaPrincipal', title: 'Media Principal (Portadas)', options: { collapsible: true, collapsed: false } }
  ],
  fields: [
    { name: 'titulo', title: 'Título', type: 'string', validation: (R: any) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'titulo' }, validation: (R: any) => R.required() },
    { name: 'cliente', title: 'Cliente', type: 'string' },
    {
      name: 'categoria', title: 'Categoría', type: 'string',
      options: { list: [
        { title: 'Obras Viales', value: 'viales' },
        { title: 'Obras Civiles', value: 'civiles' },
        { title: 'Obras Industriales', value: 'industriales' },
        { title: 'Electromecánica', value: 'electromecanica' },
        { title: 'Movimiento de Suelos', value: 'suelos' },
      ]}
    },
    { name: 'descripcion', title: 'Descripción', type: 'text' },
    { name: 'ubicacion', title: 'Ubicación', type: 'string' },
    { name: 'anio', title: 'Año', type: 'number' },
    { name: 'destacada', title: '¿Obra destacada?', type: 'boolean', description: 'Mostrar en la home' },
    
    // Responsive Media Fields
    { name: 'imagenDesktop', title: 'Imagen Desktop (Fallback/Secundaria)', type: 'image', fieldset: 'mediaPrincipal', options: { hotspot: true } },
    { name: 'imagenMobile', title: 'Imagen Mobile', type: 'image', fieldset: 'mediaPrincipal', options: { hotspot: true }, description: 'Opcional. Si no se sube, se adapta la Desktop.' },
    { name: 'videoDesktop', title: 'Video Desktop (.mp4)', type: 'file', fieldset: 'mediaPrincipal', options: { accept: 'video/mp4,video/webm' }, description: 'Opcional. Si se sube, en PC se verá el video en lugar de la imagen.' },
    { name: 'videoMobile', title: 'Video Mobile (.mp4)', type: 'file', fieldset: 'mediaPrincipal', options: { accept: 'video/mp4,video/webm' }, description: 'Opcional. Si se sube, en celulares se verá el video.' },

    { name: 'galeria', title: 'Galería', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
  ],
  preview: { select: { title: 'titulo', subtitle: 'cliente', media: 'imagenDesktop' } }
}
