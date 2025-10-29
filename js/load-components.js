/**
 * Load Navigation and Footer Components
 * This script loads shared HTML components to avoid duplication across pages
 */

(function() {
  'use strict';

  // Load navigation component
  function loadNavigation() {
    fetch('components/nav.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load navigation');
        }
        return response.text();
      })
      .then(html => {
        const navContainer = document.getElementById('nav-container');
        if (navContainer) {
          navContainer.innerHTML = html;
          // Re-initialize navigation JavaScript after loading
          initializeNavigation();
        }
      })
      .catch(error => {
        console.error('Error loading navigation:', error);
      });
  }

  // Load footer component
  function loadFooter() {
    fetch('components/footer.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load footer');
        }
        return response.text();
      })
      .then(html => {
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
          footerContainer.innerHTML = html;
        }
      })
      .catch(error => {
        console.error('Error loading footer:', error);
      });
  }

  // Initialize navigation functionality (mobile menu toggle)
  function initializeNavigation() {
    // This function will be called after nav is loaded
    // The navigation.js will handle the menu toggle
    // We just need to ensure it's triggered after the DOM is ready
    if (typeof window.initNavigation === 'function') {
      window.initNavigation();
    }
  }

  // Load components when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      loadNavigation();
      loadFooter();
    });
  } else {
    // DOM already loaded
    loadNavigation();
    loadFooter();
  }
})();
