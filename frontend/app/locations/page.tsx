import { getLocations } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.client'
import Image from 'next/image'

// Enable ISR - revalidate every 60 seconds
export const revalidate = 60

export const metadata = {
  title: 'Locations | Sarpino\'s Pizza Singapore',
  description: 'Find Sarpino\'s Pizza locations in Singapore. Delivery and takeaway available across East, North East, and Central Areas.',
}

const regionNames: Record<string, string> = {
  'east-north-east': 'East, North East',
  'central': 'Central Areas',
  'west': 'West',
  'north': 'North',
}

export default async function LocationsPage() {
  const locations = await getLocations()

  // Group locations by region
  const groupedLocations = locations?.reduce((acc: any, location: any) => {
    const region = location.region || 'other'
    if (!acc[region]) {
      acc[region] = []
    }
    acc[region].push(location)
    return acc
  }, {})

  return (
    <div>
      {/* Hero Section */}
      <section className="locations-hero"></section>

      {/* Locations Content */}
      <section className="locations-content">
        <h1 className="locations-title">Locations</h1>

        {/* Locations Container */}
        <div className="locations-container">
          {groupedLocations && Object.keys(groupedLocations).length > 0 ? (
            Object.entries(groupedLocations).map(([region, locs]: [string, any]) => (
              <div key={region} className="location-section">
                <h2 className="section-title-header">
                  {regionNames[region] || region}
                </h2>
                <div className="section-body">
                  {locs.map((location: any) => (
                    <div key={location._id} className="location-item">
                      <div className="location-name">{location.name}</div>
                      <div className="location-address-row">
                        <div className="location-address">{location.address}</div>
                        {location.mapIcon && (
                          <a
                            href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="map-icon-link"
                          >
                            <Image
                              src={urlFor(location.mapIcon).width(320).url()}
                              alt="View on map"
                              width={160}
                              height={120}
                              className="map-icon"
                            />
                          </a>
                        )}
                      </div>
                      {location.operatingHours && (
                        <div className="operating-hours">{location.operatingHours}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', color: '#666' }}>Loading locations...</p>
          )}
        </div>
      </section>
    </div>
  )
}
