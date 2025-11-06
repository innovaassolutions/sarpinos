import {
  getLocations,
  groupLocationsByRegion,
  regionNames
} from './sanity-client.js'

// Load Locations
async function loadLocations() {
  try {
    const locations = await getLocations()

    if (!locations || locations.length === 0) return

    const accordion = document.querySelector('.accordion')
    if (!accordion) return

    // Clear existing locations
    accordion.innerHTML = ''

    // Group locations by region
    const groupedLocations = groupLocationsByRegion(locations)

    // Render each region
    Object.entries(groupedLocations).forEach(([region, regionLocations]) => {
      const accordionItem = document.createElement('div')
      accordionItem.className = 'accordion-item'

      // Header
      const header = document.createElement('div')
      header.className = 'accordion-header'

      const title = document.createElement('h2')
      title.className = 'accordion-title'
      title.textContent = regionNames[region] || region

      const icon = document.createElement('div')
      icon.className = 'accordion-icon'
      icon.textContent = '+'

      header.appendChild(title)
      header.appendChild(icon)

      // Content
      const content = document.createElement('div')
      content.className = 'accordion-content'

      const body = document.createElement('div')
      body.className = 'accordion-body'

      // Add locations
      regionLocations.forEach(location => {
        const locationItem = document.createElement('div')
        locationItem.className = 'location-item'

        const name = document.createElement('div')
        name.className = 'location-name'
        name.textContent = location.name

        const address = document.createElement('div')
        address.className = 'location-address'
        address.textContent = location.address

        const hours = document.createElement('div')
        hours.className = 'operating-hours'
        hours.textContent = location.operatingHours

        locationItem.appendChild(name)
        locationItem.appendChild(address)
        locationItem.appendChild(hours)

        if (location.phone) {
          const phone = document.createElement('div')
          phone.className = 'location-phone'
          phone.textContent = location.phone
          locationItem.appendChild(phone)
        }

        body.appendChild(locationItem)
      })

      content.appendChild(body)

      accordionItem.appendChild(header)
      accordionItem.appendChild(content)

      accordion.appendChild(accordionItem)
    })

    // Re-initialize accordion functionality
    if (window.initializeAccordions) {
      window.initializeAccordions()
    }

    console.log('✅ Locations loaded from Sanity')
  } catch (error) {
    console.error('Error loading locations:', error)
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadLocations)
} else {
  loadLocations()
}
