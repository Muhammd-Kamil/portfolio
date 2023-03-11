// import {defineConfig} from 'sanity'
// import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
// import {defineConfig} from 'sanity/lib/exports'

// export default defineConfig({
export default {
  name: 'default',
  title: 'portfolio',

  projectId: '333n9e5u',
  dataset: 'production',

  // plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
}
