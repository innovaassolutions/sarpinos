import { client } from './sanity.client'

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

export async function getAboutPage() {
  return client.fetch(`
    *[_type == "aboutPage" && _id == "aboutPage"][0] {
      _id,
      pageTitle,
      introduction,
      ourStory,
      values
    }
  `)
}
