// Script to populate the About Us page in Sanity with existing content
// Run this once: npm run sanity exec scripts/populate-about-page.js --with-user-token

import {getCliClient} from 'sanity/cli'

const client = getCliClient()

const aboutPageContent = {
  _id: 'aboutPage',
  _type: 'aboutPage',
  pageTitle: 'Our Story',
  introduction: "Sarpino's founder Gerry Koutougos established his first full service restaurant in Victoria, BC Canada. After years of providing authentic Italian and Mediterranean dishes through a number of successful full service restaurants, Gerry saw the opportunity to provide consumers around the world with these fresh authentic Italian dishes through take-out and delivery restaurants.",
  ourStory: [
    {
      _key: 'story1',
      _type: 'block',
      style: 'normal',
      children: [
        {
          _key: 'span1',
          _type: 'span',
          text: "Sarpino's Singapore opened in 2001 and is now the 3rd largest pizza restaurant group in Singapore and strives to be the best, not the biggest. Worldwide HQ has recently moved to Singapore, so expect nothing but the best as we make improvements to the system."
        }
      ]
    },
    {
      _key: 'story2',
      _type: 'block',
      style: 'normal',
      children: [
        {
          _key: 'span2',
          _type: 'span',
          text: "Sarpino's offers the highest-quality gourmet pizzas, succulent chicken wings, a variety of salads, cheese bread, garlic bread and beverages. Sarpino's pizzas are made from authentic, fine ingredients and our dough is hand kneaded freshly each day in Italian tradition in every location to ensure that you have the best pizza experience you have ever had."
        }
      ]
    },
    {
      _key: 'story3',
      _type: 'block',
      style: 'normal',
      children: [
        {
          _key: 'span3',
          _type: 'span',
          text: "It is through our superior quality fresh ingredients, authentic recipes and handmade fresh dough that we guarantee our customers variety and a true traditional Italian experience while still providing fantastic value. This is our promise to you and why Sarpino's Pizzeria has grown to over 250 locations worldwide."
        }
      ]
    },
    {
      _key: 'story4',
      _type: 'block',
      style: 'normal',
      children: [
        {
          _key: 'span4',
          _type: 'span',
          text: "Whether you are working late at the office, or busy driving the kids around to their sports practices, you should always have a choice of a variety of fresh, healthy and authentic dishes delivered right to your home or office. Sarpino's was created in response to the consumers' demand for greater freshness, quality, authenticity and most of all, a variety in their fast food alternatives. We offer you an alternative to the typical, heavily processed fast food. It is through our fresh ingredients, daily in-store hand made dough, freshly made pizza sauce, all with authentic recipes that we guarantee variety from our home to yours."
        }
      ]
    }
  ],
  values: [
    {
      _key: 'value1',
      _type: 'object',
      valueTitle: 'Fresh Ingredients',
      valueDescription: 'We use only the highest-quality, authentic Italian ingredients in everything we make.'
    },
    {
      _key: 'value2',
      _type: 'object',
      valueTitle: 'Handmade Daily',
      valueDescription: 'Our dough is hand-kneaded fresh every day in traditional Italian style.'
    },
    {
      _key: 'value3',
      _type: 'object',
      valueTitle: 'Authentic Recipes',
      valueDescription: 'Every recipe follows traditional Italian methods passed down through generations.'
    }
  ]
}

// Create or update the About page
client
  .createOrReplace(aboutPageContent)
  .then((res) => {
    console.log('✅ About Us page content created successfully!')
    console.log('Document ID:', res._id)
  })
  .catch((err) => {
    console.error('❌ Error creating About Us content:', err.message)
  })
