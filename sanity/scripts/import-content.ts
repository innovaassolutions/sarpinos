import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'o728fifb',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_TOKEN, // We'll set this up
  apiVersion: '2024-01-01',
})

async function importContent() {
  console.log('🚀 Starting content import...\n')

  try {
    // 1. Import Site Settings
    console.log('📝 Importing Site Settings...')
    await client.createOrReplace({
      _id: 'siteSettings',
      _type: 'siteSettings',
      siteName: "Sarpino's Pizza Singapore",
      phoneNumber: '6636-3636',
      orderLink: 'https://sarpinos.revelup.online/',
      socialMedia: {
        instagram: 'https://www.instagram.com/SarpinosPizzaSg/',
        facebook: 'https://www.facebook.com/SarpinosPizzaSg/',
        youtube: 'https://www.youtube.com/channel/UCQs5wEWNi1xYB6fKaAUAxyA/featured',
      },
      halalCertified: true,
    })
    console.log('✅ Site Settings imported\n')

    // 2. Import Hero Content
    console.log('📝 Importing Hero Content...')
    await client.createOrReplace({
      _id: 'heroContent',
      _type: 'heroContent',
      title: 'Fresh. Authentic. Delicious.',
      subtitle: 'Real Italian pizza made with honest ingredients',
      ctaText: 'Order Now',
      ctaLink: 'https://sarpinos.revelup.online/',
    })
    console.log('✅ Hero Content imported\n')

    // 3. Import Features
    console.log('📝 Importing Features...')
    const features = [
      {
        _type: 'feature',
        title: 'Fresh Dough Daily',
        description: 'Hand-kneaded fresh every day in Italian tradition',
        order: 1,
        active: true,
      },
      {
        _type: 'feature',
        title: 'Authentic Recipes',
        description: 'Traditional Italian recipes passed down through generations',
        order: 2,
        active: true,
      },
      {
        _type: 'feature',
        title: 'Premium Ingredients',
        description: 'Only the finest, authentic Italian ingredients',
        order: 3,
        active: true,
      },
      {
        _type: 'feature',
        title: 'Halal Certified',
        description: 'All our products are halal certified',
        order: 4,
        active: true,
      },
    ]

    for (const feature of features) {
      await client.create(feature)
    }
    console.log('✅ Features imported\n')

    // 4. Import Locations
    console.log('📝 Importing Locations...')
    const locations = [
      {
        _type: 'location',
        name: "Sarpino's Pizza Tampines",
        address: 'Safra Tampines Clubhouse 1A Tampines Street 92 Singapore 528882',
        region: 'east-north-east',
        operatingHours: 'Open 10am - 10pm daily',
        order: 1,
        active: true,
      },
      {
        _type: 'location',
        name: "Sarpino's Pizza Eunos",
        address: '1A Eunos Crescent #01-2477 Singapore 401001',
        region: 'east-north-east',
        operatingHours: 'Open 10am - 10pm daily',
        order: 2,
        active: true,
      },
      {
        _type: 'location',
        name: 'Shell @ DUNEARN',
        address: '314 Dunearn Rd, Singapore 299551',
        region: 'central',
        operatingHours: 'Open 10am - 10pm daily',
        order: 1,
        active: true,
      },
    ]

    for (const location of locations) {
      await client.create(location)
    }
    console.log('✅ Locations imported\n')

    // 5. Import Promotions
    console.log('📝 Importing Promotions...')
    const promotions = [
      {
        _type: 'promotion',
        title: '50% OFF Pizza',
        altText: '50% OFF Pizza Built on Flavour',
        link: 'https://sarpinos.revelup.online/',
        size: 'large',
        order: 1,
        active: true,
      },
      {
        _type: 'promotion',
        title: 'Me-Time Deal',
        altText: 'Me-Time Pizza Deal from $5.50',
        link: 'https://sarpinos.revelup.online/',
        size: 'medium',
        order: 2,
        active: true,
      },
      {
        _type: 'promotion',
        title: 'Real Pizza',
        altText: 'Real Pizza Real Flavour No Gimmicks',
        link: 'https://sarpinos.revelup.online/',
        size: 'medium',
        order: 3,
        active: true,
      },
      {
        _type: 'promotion',
        title: 'Whole Lot of Heart',
        altText: 'Pizza Made with a Whole Lot of Heart',
        link: 'https://sarpinos.revelup.online/',
        size: 'large',
        order: 4,
        active: true,
      },
    ]

    for (const promotion of promotions) {
      await client.create(promotion)
    }
    console.log('✅ Promotions imported\n')

    console.log('🎉 Content import completed successfully!')
    console.log('\nNote: Promotion images need to be uploaded manually through the Sanity Studio.')
    console.log('Hero background image also needs to be uploaded manually.')
  } catch (error) {
    console.error('❌ Error importing content:', error)
    process.exit(1)
  }
}

importContent()
