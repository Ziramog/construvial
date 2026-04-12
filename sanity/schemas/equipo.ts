export const equipoSchema = {
  name: 'equipo',
  title: 'Equipos',
  type: 'document',
  fieldsets: [
    { name: 'mediaPrincipal', title: 'Media Principal (Portadas)', options: { collapsible: true, collapsed: false } }
  ],
  fields: [
    { name: 'nombre', title: 'Nombre del Equipo', type: 'string' },
    { name: 'tipo', title: 'Tipo', type: 'string',
      options: { list: ['Vial', 'Transporte', 'Carretón', 'Logística'] }
    },
    { name: 'descripcion', title: 'Descripción', type: 'text' },
    { name: 'especificaciones', title: 'Especificaciones técnicas', type: 'text' },
    { name: 'disponibleParaAlquiler', title: 'Disponible para alquiler', type: 'boolean' },
    
    // Responsive Media Fields
    { name: 'imagenDesktop', title: 'Imagen Desktop (Fallback/Secundaria)', type: 'image', fieldset: 'mediaPrincipal', options: { hotspot: true } },
    { name: 'imagenMobile', title: 'Imagen Mobile', type: 'image', fieldset: 'mediaPrincipal', options: { hotspot: true }, description: 'Opcional. Si no se sube, se adapta la Desktop.' },
    { name: 'videoDesktop', title: 'Video Desktop (.mp4)', type: 'file', fieldset: 'mediaPrincipal', options: { accept: 'video/mp4,video/webm' }, description: 'Opcional. Si se sube, en PC se verá el video.' },
    { name: 'videoMobile', title: 'Video Mobile (.mp4)', type: 'file', fieldset: 'mediaPrincipal', options: { accept: 'video/mp4,video/webm' }, description: 'Opcional. Si se sube, en celulares se verá el video.' },
  ],
  preview: { select: { title: 'nombre', subtitle: 'tipo', media: 'imagenDesktop' } }
}
