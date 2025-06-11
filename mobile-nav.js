// Self-executing function to inject this script into the page
(function() {
    // Create a script element for this code
    const script = document.createElement('script');
    script.textContent = `
    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-menu li a');
        const body = document.body;
        const mobileDateBadge = document.querySelector('.mobile-date-badge');

        // Create overlay element
        const overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);

        // Update mobile date
        function updateMobileDate() {
            const mobileDateElement = document.getElementById('mobile-current-date');
            if (mobileDateElement) {
                const now = new Date();
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                mobileDateElement.textContent = now.toLocaleDateString('en-US', options);
            }
        }

        // Initial date update
        updateMobileDate();

        // Toggle mobile menu
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            overlay.classList.toggle('active');
            mobileDateBadge.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                overlay.classList.remove('active');
                mobileDateBadge.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });

        // Close mobile menu when clicking overlay
        overlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
            mobileDateBadge.classList.remove('active');
            body.classList.remove('menu-open');
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                overlay.classList.remove('active');
                mobileDateBadge.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    });
    `;

    // Append the script to the document
    document.head.appendChild(script);
})();

// Also add the original event listener for when this script is directly included
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu li a');
    const body = document.body;
    const mobileDateBadge = document.querySelector('.mobile-date-badge');

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    // Update mobile date
    function updateMobileDate() {
        const mobileDateElement = document.getElementById('mobile-current-date');
        if (mobileDateElement) {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            mobileDateElement.textContent = now.toLocaleDateString('en-US', options);
        }
    }

    // Initial date update
    updateMobileDate();

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        mobileDateBadge.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
            mobileDateBadge.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Close mobile menu when clicking overlay
    overlay.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        mobileDateBadge.classList.remove('active');
        body.classList.remove('menu-open');
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
            mobileDateBadge.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
});
