export const obraSchema = {
  name: 'obra',
  title: 'Obras',
  type: 'document',
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
    { name: 'imagenPrincipal', title: 'Imagen Principal', type: 'image', options: { hotspot: true } },
    { name: 'galeria', title: 'Galería', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
  ],
  preview: { select: { title: 'titulo', subtitle: 'cliente', media: 'imagenPrincipal' } }
}
