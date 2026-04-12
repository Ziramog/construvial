import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemas } from './schemas'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'tu_project_id'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Construvial S.A. Admin',
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
})
