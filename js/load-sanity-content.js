import {
  getSiteSettings,
  getHeroContent,
  getPromotions,
  getFeatures,
  urlFor
} from './sanity-client.js'

// Load Hero Content
async function loadHeroContent() {
  try {
    const hero = await getHeroContent()

    if (!hero) return

    // Update hero title
    const heroTitle = document.querySelector('.hero-title')
    if (heroTitle) heroTitle.textContent = hero.title

    // Update hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle')
    if (heroSubtitle) heroSubtitle.textContent = hero.subtitle

    // Update hero button text and link
    const heroCta = document.querySelector('.hero-content .btn-primary')
    if (heroCta) {
      heroCta.textContent = hero.ctaText
      heroCta.href = hero.ctaLink
    }

    // Update hero background image
    if (hero.backgroundImage) {
      const heroSection = document.querySelector('.hero')
      const imageUrl = urlFor(hero.backgroundImage).width(1920).url()
      heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${imageUrl}')`
    }

    console.log('✅ Hero content loaded from Sanity')
  } catch (error) {
    console.error('Error loading hero content:', error)
  }
}

// Load Promotions
async function loadPromotions() {
  try {
    const promotions = await getPromotions()

    if (!promotions || promotions.length === 0) return

    const promoGrid = document.querySelector('.promo-grid')
    if (!promoGrid) return

    // Clear existing promotions
    promoGrid.innerHTML = ''

    // Render promotions
    promotions.forEach(promo => {
      const promoCard = document.createElement('a')
      promoCard.href = promo.link
      promoCard.className = `promo-card promo-${promo.size}`

      if (promo.image) {
        const img = document.createElement('img')
        img.src = urlFor(promo.image).width(800).url()
        img.alt = promo.altText
        img.className = 'promo-image'
        promoCard.appendChild(img)
      }

      promoGrid.appendChild(promoCard)
    })

    console.log('✅ Promotions loaded from Sanity')
  } catch (error) {
    console.error('Error loading promotions:', error)
  }
}

// Load Features
async function loadFeatures() {
  try {
    const features = await getFeatures()

    if (!features || features.length === 0) return

    const featuresGrid = document.querySelector('.features-grid')
    if (!featuresGrid) return

    // Clear existing features
    featuresGrid.innerHTML = ''

    // Render features
    features.forEach(feature => {
      const featureCard = document.createElement('div')
      featureCard.className = 'feature-card'

      const title = document.createElement('h3')
      title.className = 'text-basil-green'
      title.textContent = feature.title

      const description = document.createElement('p')
      description.textContent = feature.description

      featureCard.appendChild(title)
      featureCard.appendChild(description)

      featuresGrid.appendChild(featureCard)
    })

    console.log('✅ Features loaded from Sanity')
  } catch (error) {
    console.error('Error loading features:', error)
  }
}

// Load Site Settings (Logo, etc.)
async function loadSiteSettings() {
  try {
    const settings = await getSiteSettings()

    if (!settings) return

    // Wait for components to load before updating logo
    const updateLogo = () => {
      const logoImages = document.querySelectorAll('.logo-image')
      if (settings.logo && logoImages.length > 0) {
        const logoUrl = urlFor(settings.logo).width(400).url()
        logoImages.forEach(img => {
          img.src = logoUrl
        })
      }
    }

    // Check if components are already loaded
    const logoImages = document.querySelectorAll('.logo-image')
    if (logoImages.length > 0) {
      updateLogo()
    } else {
      // Wait for components to load
      window.addEventListener('componentsLoaded', updateLogo, { once: true })
    }

    console.log('✅ Site settings loaded from Sanity')
  } catch (error) {
    console.error('Error loading site settings:', error)
  }
}

// Initialize all content
async function initSanityContent() {
  console.log('🚀 Loading content from Sanity...')

  await Promise.all([
    loadSiteSettings(),
    loadHeroContent(),
    loadPromotions(),
    loadFeatures()
  ])

  console.log('✨ All Sanity content loaded')
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSanityContent)
} else {
  initSanityContent()
}
