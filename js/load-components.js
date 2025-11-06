/**
 * Load Navigation and Footer Components
 * This script loads shared HTML components to avoid duplication across pages
 */

(function() {
  'use strict';

  // Load navigation component
  function loadNavigation() {
    return fetch('components/nav.html')
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
          console.log('✅ Navigation loaded');
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
    return fetch('components/footer.html')
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
          console.log('✅ Footer loaded');
        }
      })
      .catch(error => {
        console.error('Error loading footer:', error);
      });
  }

  // Initialize navigation functionality (mobile menu toggle)
  function initializeNavigation() {
    // Wait a moment for the HTML to be fully inserted into DOM
    setTimeout(() => {
      if (typeof window.initNavigation === 'function') {
        window.initNavigation();
        console.log('✅ Navigation initialized');
      } else {
        console.warn('⚠️ window.initNavigation not found');
      }
    }, 50);
  }

  // Load all components and dispatch event when done
  async function loadAllComponents() {
    try {
      await Promise.all([loadNavigation(), loadFooter()]);
      console.log('✅ All components loaded');
      // Dispatch custom event to signal components are ready
      window.dispatchEvent(new Event('componentsLoaded'));
    } catch (error) {
      console.error('Error loading components:', error);
    }
  }

  // Load components when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllComponents);
  } else {
    // DOM already loaded
    loadAllComponents();
  }
})();
