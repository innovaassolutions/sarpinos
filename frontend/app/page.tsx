import { getHeroContent, getPromotions, getFeatures } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.client'
import Image from 'next/image'
import Link from 'next/link'

// Enable ISR - revalidate every 60 seconds
export const revalidate = 60

export default async function HomePage() {
  const [hero, promotions, features] = await Promise.all([
    getHeroContent(),
    getPromotions(),
    getFeatures(),
  ])

  return (
    <div style={{ marginTop: '100px' }}>
      {/* Hero Section */}
      <section
        className="relative min-h-[500px] min-[640px]:min-h-[600px] min-[1024px]:min-h-[700px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: hero?.backgroundImage
            ? `linear-gradient(135deg, rgba(74, 95, 139, 0.3) 0%, rgba(230, 57, 70, 0.3) 100%), url(${urlFor(hero.backgroundImage).width(1920).url()})`
            : 'linear-gradient(135deg, rgba(74, 95, 139, 0.3) 0%, rgba(230, 57, 70, 0.3) 100%), url(/images/Pizzariahero.jpg)',
          padding: '4rem 2rem'
        }}
      >
        <div className="text-center text-white max-w-[800px] mx-auto relative z-10">
          <h1 className="text-[2.5rem] min-[640px]:text-[3.5rem] min-[1024px]:text-[4.5rem] font-black mb-4 leading-tight" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)' }}>
            {hero?.title || 'Fresh. Authentic. Delicious.'}
          </h1>
          <p className="text-[1.25rem] min-[640px]:text-[1.5rem] mb-8" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)' }}>
            {hero?.subtitle || 'Real Italian pizza made with honest ingredients'}
          </p>
          <Link
            href={hero?.ctaLink || '/order'}
            className="btn btn-primary btn-large"
          >
            {hero?.ctaText || 'Order Now'}
          </Link>
        </div>
      </section>

      {/* Promotions Section */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 className="text-center font-bold text-[2.5rem] min-[640px]:text-[3rem]" style={{ color: '#006341', marginBottom: '3rem' }}>
            Special Offers
          </h2>
          <div className="grid grid-cols-1 min-[640px]:grid-cols-2 mt-12" style={{ gap: '2rem' }}>
            {promotions && promotions.length > 0 ? (
              promotions.map((promo: any, index: number) => (
                <Link
                  key={promo._id}
                  href={promo.link || '/order'}
                  className="promo-card"
                >
                  {promo.image && (
                    <Image
                      src={urlFor(promo.image).width(800).url()}
                      alt={promo.altText || promo.title}
                      width={800}
                      height={1000}
                      className="promo-image"
                      priority={index === 0}
                    />
                  )}
                </Link>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-600">
                No promotions available at the moment.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 className="text-center font-bold text-[2.5rem] min-[640px]:text-[3rem] text-tomato-red" style={{ color: '#E90000', marginBottom: '3rem' }}>
            Why Sarpino's?
          </h2>
          <div className="features-grid grid grid-cols-1 min-[640px]:grid-cols-2 min-[1024px]:grid-cols-4 mt-12" style={{ gap: '2rem' }}>
            {features && features.length > 0 ? (
              features.map((feature: any) => (
                <div
                  key={feature._id}
                  className="feature-card"
                >
                  <h3 className="text-[1.5rem] font-bold mb-4">
                    {feature.title}
                  </h3>
                  <p>{feature.description}</p>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-600">
                Loading features...
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
