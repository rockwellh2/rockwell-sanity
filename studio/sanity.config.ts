import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { deskStructure } from './deskStructure'

// TODO: Replace with your Sanity project credentials
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'YOUR_PROJECT_ID'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
    name: 'default',
    title: 'My Website Studio', // TODO: Update with your project name

    projectId,
    dataset,

    plugins: [
        structureTool({
            structure: deskStructure,
        }),
        visionTool(),
    ],

    schema: {
        types: schemaTypes,
    },
})
