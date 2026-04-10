export const equipoSchema = {
  name: 'equipo',
  title: 'Equipos',
  type: 'document',
  fields: [
    { name: 'nombre', title: 'Nombre del Equipo', type: 'string' },
    { name: 'tipo', title: 'Tipo', type: 'string',
      options: { list: ['Vial', 'Transporte', 'Carretón', 'Logística'] }
    },
    { name: 'descripcion', title: 'Descripción', type: 'text' },
    { name: 'especificaciones', title: 'Especificaciones técnicas', type: 'text' },
    { name: 'disponibleParaAlquiler', title: 'Disponible para alquiler', type: 'boolean' },
    { name: 'imagen', title: 'Imagen', type: 'image', options: { hotspot: true } },
  ]
}
