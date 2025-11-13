import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'
import {PreviewAction} from './actions/PreviewAction'

export default defineConfig({
  name: 'default',
  title: 'Sarpino\'s Pizza - Content Manager',

  projectId: 'o728fifb',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('✏️ Edit Your Website')
          .items([
            // MAIN PAGES
            S.listItem()
              .title('📄 Main Pages')
              .child(
                S.list()
                  .title('Main Pages')
                  .items([
                    S.listItem()
                      .title('🏠 Homepage Banner')
                      .child(
                        S.document()
                          .schemaType('heroContent')
                          .documentId('heroContent')
                      ),
                    S.listItem()
                      .title('ℹ️ About Us Page')
                      .child(
                        S.document()
                          .schemaType('aboutPage')
                          .documentId('aboutPage')
                      ),
                  ])
              ),
            S.divider(),
            // CONTENT SECTIONS
            S.listItem()
              .title('🎯 Promotions & Offers')
              .schemaType('promotion')
              .child(S.documentTypeList('promotion').title('🎯 Current Promotions')),
            S.listItem()
              .title('📍 Restaurant Locations')
              .schemaType('location')
              .child(S.documentTypeList('location').title('📍 All Locations')),
            S.listItem()
              .title('⭐ Features & Highlights')
              .schemaType('feature')
              .child(S.documentTypeList('feature').title('⭐ Features')),
            S.divider(),
            // SETTINGS
            S.listItem()
              .title('⚙️ Website Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
          ]),
    }),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000',
        draftMode: {
          enable: '/api/draft',
        },
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    productionUrl: async (_prev, context) => {
      // Use your local dev server or production URL
      const baseUrl = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000'

      // Return the appropriate preview URL based on document type
      const {document} = context
      if (document._type === 'heroContent' || document._type === 'siteSettings') {
        return `${baseUrl}/`
      }
      if (document._type === 'location') {
        return `${baseUrl}/locations`
      }
      if (document._type === 'aboutPage') {
        return `${baseUrl}/about`
      }
      return `${baseUrl}/`
    },
    actions: (prev, _context) => {
      return [...prev, PreviewAction]
    },
  },
})
