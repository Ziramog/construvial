import { defineConfig } from 'sanity'
import { schemas } from './schemas'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'tu_project_id'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Construvial S.A. Admin',
  schema: {
    types: schemas,
  },
})
