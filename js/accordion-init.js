/**
 * Accordion Initializer
 * Sets up accordion functionality for both static and dynamically loaded content
 */

function initializeAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header')

  accordionHeaders.forEach(header => {
    // Remove any existing listeners by cloning and replacing
    const newHeader = header.cloneNode(true)
    header.parentNode.replaceChild(newHeader, header)

    // Add click event
    newHeader.addEventListener('click', function() {
      const accordionItem = this.parentElement

      // Toggle active class
      accordionItem.classList.toggle('active')

      // Optional: Close other accordion items
      const otherItems = document.querySelectorAll('.accordion-item')
      otherItems.forEach(item => {
        if (item !== accordionItem) {
          item.classList.remove('active')
        }
      })
    })
  })

  console.log('✅ Accordion initialized')
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeAccordions)

// Make function available globally for dynamic content
window.initializeAccordions = initializeAccordions
