/**
 * Navigation JavaScript
 * Handles mobile menu toggle and active page highlighting
 */

(function() {
  'use strict';

  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Mobile menu elements
    const menuToggle = document.querySelector('.menu-toggle');
    const navMobile = document.querySelector('.nav-mobile');
    const navOverlay = document.querySelector('.nav-overlay');
    const body = document.body;

    if (!menuToggle || !navMobile || !navOverlay) {
      console.error('Navigation elements not found');
      return;
    }

    // Toggle mobile menu
    function toggleMenu() {
      menuToggle.classList.toggle('active');
      navMobile.classList.toggle('active');
      navOverlay.classList.toggle('active');
      body.style.overflow = navMobile.classList.contains('active') ? 'hidden' : '';
    }

    // Menu toggle button click
    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when overlay is clicked
    navOverlay.addEventListener('click', toggleMenu);

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
    setActivePage();

    // Header scroll effect
    addScrollEffect();
  }

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

  function addScrollEffect() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', function() {
      const currentScroll = window.scrollY;

      if (currentScroll > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
      }
    });
  }
})();
