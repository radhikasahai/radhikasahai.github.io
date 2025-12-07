// Minimal JavaScript for portfolio site
// Smooth scrolling is handled by CSS, but we can add enhancements here if needed

(function() {
    'use strict';
    
    // Smooth scroll for anchor links (enhancement, CSS already handles basic smooth scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Add any future interactivity here
    
})();
