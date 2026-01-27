import { defineCliConfig } from 'sanity/cli'

// TODO: Replace with your Sanity project credentials
export default defineCliConfig({
    api: {
        projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'YOUR_PROJECT_ID',
        dataset: process.env.SANITY_STUDIO_DATASET || 'production'
    },
    studioHost: 'your-studio-name' // TODO: Update for sanity deploy
})
