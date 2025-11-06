import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {PreviewAction} from './actions/PreviewAction'

export default defineConfig({
  name: 'default',
  title: 'Sarpinos Pizza Singapore',

  projectId: 'o728fifb',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Site Settings (Singleton)
            S.listItem()
              .title('Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            // Hero Content (Singleton)
            S.listItem()
              .title('Hero Content')
              .child(
                S.document()
                  .schemaType('heroContent')
                  .documentId('heroContent')
              ),
            S.divider(),
            // Regular document lists
            S.listItem()
              .title('Promotions')
              .schemaType('promotion')
              .child(S.documentTypeList('promotion').title('Promotions')),
            S.listItem()
              .title('Locations')
              .schemaType('location')
              .child(S.documentTypeList('location').title('Locations')),
            S.listItem()
              .title('Features')
              .schemaType('feature')
              .child(S.documentTypeList('feature').title('Features')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    productionUrl: async (prev, context) => {
      // Use your local dev server or production URL
      const baseUrl = 'http://localhost:5173'

      // Return the appropriate preview URL based on document type
      const {document} = context
      if (document._type === 'heroContent' || document._type === 'siteSettings') {
        return `${baseUrl}/`
      }
      if (document._type === 'location') {
        return `${baseUrl}/locations.html`
      }
      return `${baseUrl}/`
    },
    actions: (prev, context) => {
      return [...prev, PreviewAction]
    },
  },
})
