import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'o728fifb',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: true, // Set to false if you need real-time updates
  perspective: 'published', // Default to published documents
})

// Client for draft mode - fetches draft content
export const draftClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'o728fifb',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false, // Don't use CDN for draft content
  perspective: 'previewDrafts', // Fetch draft documents
  token: process.env.SANITY_API_READ_TOKEN, // Optional: for private drafts
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Helper to get the right client based on draft mode
export function getClient(isDraftMode: boolean = false) {
  return isDraftMode ? draftClient : client
}
