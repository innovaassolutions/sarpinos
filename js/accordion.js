/**
 * Accordion JavaScript
 * Handles expand/collapse functionality for location regions
 */

document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const accordionItem = this.parentElement;
      const accordionContent = accordionItem.querySelector('.accordion-content');
      const isActive = accordionItem.classList.contains('active');

      // Close all other accordion items
      document.querySelectorAll('.accordion-item').forEach(item => {
        if (item !== accordionItem) {
          item.classList.remove('active');
        }
      });

      // Toggle current accordion item
      if (isActive) {
        accordionItem.classList.remove('active');
      } else {
        accordionItem.classList.add('active');
      }
    });
  });

  // Optional: Open first accordion by default
  const firstAccordion = document.querySelector('.accordion-item');
  if (firstAccordion) {
    firstAccordion.classList.add('active');
  }
});
