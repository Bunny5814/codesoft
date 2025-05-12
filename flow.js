// taskmaster-animations.js
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const pages = document.querySelectorAll('.page');
    const tick = document.querySelector('.logo-circle i');
    const navLinks = document.querySelectorAll('[data-page]');
    
    // Initialize the app with welcome page
    activatePage('welcome-page');
    
    // Add click handlers for navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            animateTransition(targetPage);
        });
    });
    
    // Page activation with animation
    function activatePage(pageId) {
        // Reset all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        // Activate the requested page
        const activePage = document.getElementById(pageId);
        if (activePage) {
            activePage.classList.add('active');
        }
    }
    
    // Animated page transition
    function animateTransition(newPageId) {
        // 1. Animate tick out
        tick.style.animation = 'tickDisappear 0.4s forwards';
        
        // 2. After first animation completes, switch pages and animate tick in
        setTimeout(() => {
            // Change page
            activatePage(newPageId);
            
            // Reset animation
            tick.style.animation = 'none';
            void tick.offsetWidth; // Trigger reflow
            
            // Animate tick in
            tick.style.animation = 'tickAppear 0.6s forwards';
        }, 400);
    }
    
    // For the "Get Started" button if it exists
    const getStartedBtn = document.querySelector('.get-started-btn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function(e) {
            e.preventDefault();
            animateTransition('main-page'); // Change to your actual target page ID
        });
    }
    
    // For the login link if it exists
    const loginLink = document.querySelector('.login-link');
    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            animateTransition('login-page'); // Change to your actual login page ID
        });
    }
});