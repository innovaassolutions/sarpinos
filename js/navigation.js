/**
 * Navigation JavaScript
 * Handles mobile menu toggle and active page highlighting
 */

// Initialize navigation - can be called when nav is dynamically loaded
function initNavigation() {
  // Mobile menu elements
  const menuToggle = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  const navOverlay = document.querySelector('.nav-overlay');
  const body = document.body;

  // Toggle mobile menu
  function toggleMenu() {
    menuToggle.classList.toggle('active');
    navMobile.classList.toggle('active');
    navOverlay.classList.toggle('active');
    body.style.overflow = navMobile.classList.contains('active') ? 'hidden' : '';
  }

  // Menu toggle button click
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  // Close menu when overlay is clicked
  if (navOverlay) {
    navOverlay.addEventListener('click', toggleMenu);
  }

  // Close menu when a nav link is clicked
  const navLinks = document.querySelectorAll('.nav-mobile .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navMobile.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  // Highlight active page in navigation
  function setActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const allNavLinks = document.querySelectorAll('.nav-link');

    allNavLinks.forEach(link => {
      const linkHref = link.getAttribute('href');

      // Check if link matches current page
      if (linkHref === currentPage ||
          (currentPage === '' && linkHref === 'index.html') ||
          (currentPage === 'index.html' && linkHref === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Set active page on load
  setActivePage();

  // Header scroll effect (optional - adds shadow on scroll)
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
  });
}

// Make initNavigation globally available
window.initNavigation = initNavigation;

// Auto-initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  // Small delay to ensure components are loaded first
  setTimeout(initNavigation, 100);
});
