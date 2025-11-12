import { getAboutPage } from '@/lib/sanity.queries'
import { PortableText } from '@portabletext/react'

// Enable ISR - revalidate every 60 seconds
export const revalidate = 60

export const metadata = {
  title: 'About Us | Sarpino\'s Pizza Singapore',
  description: 'Learn about Sarpino\'s Pizza story - from Victoria, BC to Singapore. Authentic Italian pizza made with honest ingredients since 2001.',
}

export default async function AboutPage() {
  const aboutData = await getAboutPage()

  return (
    <div>
      {/* Hero Section */}
      <section className="story-hero">
      </section>

      {/* Story Content */}
      <section className="story-content">
        <h1 className="story-title">
          {aboutData?.pageTitle || 'Our Story'}
        </h1>

        {/* Introduction */}
        {aboutData?.introduction && (
          <p className="story-text">
            {aboutData.introduction}
          </p>
        )}

        {/* Our Story Blocks */}
        {aboutData?.ourStory && (
          <div>
            <PortableText
              value={aboutData.ourStory}
              components={{
                block: {
                  normal: ({children}) => <p className="story-text">{children}</p>,
                },
              }}
            />
          </div>
        )}

        {/* Values Section */}
        {aboutData?.values && aboutData.values.length > 0 && (
          <div style={{ marginTop: '4rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '3rem',
              color: '#008345'
            }}>
              Our Values
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2rem'
            }} className="md:grid-cols-3">
              {aboutData.values.map((value: any, index: number) => (
                <div
                  key={value._key || index}
                  style={{
                    backgroundColor: '#F5F5F5',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    marginBottom: '0.75rem',
                    color: '#008345'
                  }}>
                    {value.valueTitle}
                  </h3>
                  <p style={{ color: '#333' }}>{value.valueDescription}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
