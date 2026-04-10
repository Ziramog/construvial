import { createClient } from 'next-sanity'
import { projectId, dataset } from './sanity.config'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-04-09',
  useCdn: false,
})
