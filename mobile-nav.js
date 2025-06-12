// Self-executing function to inject this script into the page
(function() {
    // Create a script element for this code
    const script = document.createElement('script');
    script.textContent = `
    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeMenu = document.getElementById('closeMenu');
        const body = document.body;
        const mobileDateBadge = document.querySelector('.mobile-date-badge');

        // Create overlay element
        const overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);

        // Initialize date in mobile menu
        const mobileDateElement = mobileMenu.querySelector('#current-date');
        if (mobileDateElement) {
            const today = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = today.toLocaleDateString('en-US', options);
            mobileDateElement.textContent = formattedDate;
        }

        // Function to open menu
        function openMenu() {
            mobileMenu.classList.add('active');
            body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
            hamburger.classList.toggle('active');
            mobileDateBadge.classList.toggle('active');
            body.classList.toggle('menu-open');
        }

        // Function to close menu
        function closeMenuHandler() {
            mobileMenu.classList.remove('active');
            body.style.overflow = ''; // Restore scrolling
            hamburger.classList.remove('active');
            mobileDateBadge.classList.remove('active');
            body.classList.remove('menu-open');
        }

        // Event listeners
        hamburger.addEventListener('click', openMenu);
        closeMenu.addEventListener('click', closeMenuHandler);

        // Close menu when clicking outside
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                closeMenuHandler();
            }
        });

        // Close menu when pressing Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMenuHandler();
            }
        });

        // Close menu when clicking on a menu link
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', closeMenuHandler);
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
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
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
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

    // Function to open menu
    function openMenu() {
        mobileMenu.classList.add('active');
        body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        hamburger.classList.toggle('active');
        mobileDateBadge.classList.toggle('active');
        body.classList.toggle('menu-open');
    }

    // Function to close menu
    function closeMenuHandler() {
        mobileMenu.classList.remove('active');
        body.style.overflow = ''; // Restore scrolling
        hamburger.classList.remove('active');
        mobileDateBadge.classList.remove('active');
        body.classList.remove('menu-open');
    }

    // Event listeners
    hamburger.addEventListener('click', openMenu);
    closeMenu.addEventListener('click', closeMenuHandler);

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            closeMenuHandler();
        }
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenuHandler();
        }
    });

    // Close menu when clicking on a menu link
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenuHandler);
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileDateBadge.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
});
