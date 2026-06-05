import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { project } from './schemaTypes/index'
// schema: { types: [project] }

export default defineConfig({
  name: 'default',
  title: 'JoaquinPersonal',

  projectId: '12zoe036',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
