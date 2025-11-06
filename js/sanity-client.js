import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Create Sanity client
export const client = createClient({
  projectId: 'o728fifb',
  dataset: 'production',
  useCdn: true, // Use CDN for faster response
  apiVersion: '2024-01-01',
})

// Helper function to build image URLs
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// Query functions
export async function getSiteSettings() {
  return client.fetch('*[_type == "siteSettings"][0]')
}

export async function getHeroContent() {
  return client.fetch('*[_type == "heroContent"][0]')
}

export async function getPromotions() {
  return client.fetch(`
    *[_type == "promotion" && active == true] | order(order asc) {
      _id,
      title,
      image,
      altText,
      link,
      size,
      order
    }
  `)
}

export async function getLocations() {
  return client.fetch(`
    *[_type == "location" && active == true] | order(region asc, order asc) {
      _id,
      name,
      address,
      region,
      operatingHours,
      phone,
      order
    }
  `)
}

export async function getFeatures() {
  return client.fetch(`
    *[_type == "feature" && active == true] | order(order asc) {
      _id,
      title,
      description,
      icon,
      order
    }
  `)
}

// Helper to group locations by region
export function groupLocationsByRegion(locations) {
  const grouped = {}

  locations.forEach(location => {
    const region = location.region
    if (!grouped[region]) {
      grouped[region] = []
    }
    grouped[region].push(location)
  })

  return grouped
}

// Region display names
export const regionNames = {
  'east-north-east': 'East, North East',
  'central': 'Central Areas',
  'west': 'West',
  'north': 'North'
}
