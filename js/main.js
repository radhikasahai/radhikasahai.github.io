// Portfolio site JavaScript
// Smooth scrolling and show/hide functionality

(function() {
    'use strict';
    
    // ========================================
    // CONFIGURATION - Change N and M here!
    // ========================================
    // N = Number of experiences to show initially (default: 1)
    const INITIAL_EXPERIENCES = 1;
    
    // M = Number of projects to show initially (default: 2)
    const INITIAL_PROJECTS = 1;
    // ========================================
    
    // Smooth scroll for anchor links
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
    
    // Show/Hide functionality for experiences and projects
    function initializeShowHide() {
        // Hide experience items beyond the initial count
        const experienceItems = document.querySelectorAll('.experience-item');
        experienceItems.forEach((item, index) => {
            if (index >= INITIAL_EXPERIENCES) {
                item.classList.add('experience-item-hidden');
            }
        });
        
        // Hide project items beyond the initial count
        const projectItems = document.querySelectorAll('.project-item');
        projectItems.forEach((item, index) => {
            if (index >= INITIAL_PROJECTS) {
                item.classList.add('project-item-hidden');
            }
        });
        
        // Set up toggle buttons
        setupToggleButtons();
    }
    
    function setupToggleButtons() {
        // Setup experience toggle button
        const experienceButton = document.querySelector('[data-target="experience"]');
        const experienceItems = document.querySelectorAll('.experience-item');
        
        if (experienceItems.length > INITIAL_EXPERIENCES && experienceButton) {
            experienceButton.addEventListener('click', function() {
                const isCurrentlyExpanded = experienceButton.classList.contains('expanded');
                
                // Get all items beyond the initial count
                const itemsToToggle = Array.from(experienceItems).slice(INITIAL_EXPERIENCES);
                
                if (isCurrentlyExpanded) {
                    // Hide items
                    itemsToToggle.forEach(item => {
                        item.classList.add('experience-item-hidden');
                    });
                    experienceButton.innerHTML = 'Show More <span class="arrow">▼</span>';
                    experienceButton.classList.remove('expanded');
                } else {
                    // Show items
                    itemsToToggle.forEach(item => {
                        item.classList.remove('experience-item-hidden');
                    });
                    experienceButton.innerHTML = 'Show Less <span class="arrow">▲</span>';
                    experienceButton.classList.add('expanded');
                }
            });
        } else if (experienceButton) {
            experienceButton.style.display = 'none';
        }
        
        // Setup projects toggle button
        const projectButton = document.querySelector('[data-target="projects"]');
        const projectItems = document.querySelectorAll('.project-item');
        
        if (projectItems.length > INITIAL_PROJECTS && projectButton) {
            projectButton.addEventListener('click', function() {
                const isCurrentlyExpanded = projectButton.classList.contains('expanded');
                
                // Get all items beyond the initial count
                const itemsToToggle = Array.from(projectItems).slice(INITIAL_PROJECTS);
                
                if (isCurrentlyExpanded) {
                    // Hide items
                    itemsToToggle.forEach(item => {
                        item.classList.add('project-item-hidden');
                    });
                    projectButton.innerHTML = 'Show More <span class="arrow">▼</span>';
                    projectButton.classList.remove('expanded');
                } else {
                    // Show items
                    itemsToToggle.forEach(item => {
                        item.classList.remove('project-item-hidden');
                    });
                    projectButton.innerHTML = 'Show Less <span class="arrow">▲</span>';
                    projectButton.classList.add('expanded');
                }
            });
        } else if (projectButton) {
            projectButton.style.display = 'none';
        }
    }
    
    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function() {
        initializeShowHide();
    });
    
})();
