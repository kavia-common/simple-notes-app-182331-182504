(function () {
  'use strict';

  // PUBLIC_INTERFACE
  function initHomeScreenInteractions() {
    /** Initialize interactions for Home Screen 125-171 (search/info/fab). */
    const searchBtn = document.querySelector('.btn-125-189');
    const infoBtn = document.querySelector('.btn-125-187');
    const fab = document.querySelector('.ellipse-125-191');

    const announce = (msg) => {
      // Simple, accessible announcement via console; can be replaced with toast
      console.log(`[HomeScreen] ${msg}`);
    };

    if (searchBtn) {
      searchBtn.addEventListener('click', () => announce('Search clicked'));
    }
    if (infoBtn) {
      infoBtn.addEventListener('click', () => announce('Info clicked'));
    }
    if (fab) {
      fab.addEventListener('click', () => announce('Add new note'));
      fab.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          announce('Add new note');
        }
      });
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHomeScreenInteractions);
  } else {
    initHomeScreenInteractions();
  }

  // Expose for testing if needed
  // PUBLIC_INTERFACE
  window.initHomeScreenInteractions = initHomeScreenInteractions;
})();
