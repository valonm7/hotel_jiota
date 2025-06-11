// Custom scripts for the hotel website

document.addEventListener('DOMContentLoaded', function() {
  // Add click event to calendar icon to navigate to availability page
  const dateElement = document.querySelector('.date-badge');
  if (dateElement) {
    dateElement.style.cursor = 'pointer';
    dateElement.addEventListener('click', function() {
      window.location.href = 'availability.html';
    });
  }

  // Apply custom styles to rooms section
  const roomsSection = document.querySelector('.rooms-section');
  if (roomsSection) {
    roomsSection.style.padding = '5rem 0';
    roomsSection.style.maxWidth = '100%';
  }

  // Make room cards bigger
  const roomsGrid = document.querySelector('.rooms-grid');
  if (roomsGrid) {
    roomsGrid.style.display = 'grid';
    roomsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(400px, 1fr))';
    roomsGrid.style.gap = '2.5rem';
    roomsGrid.style.padding = '0 2rem';
  }

  // Enhance room cards
  const roomCards = document.querySelectorAll('.room-card-image-style');
  roomCards.forEach(card => {
    card.style.width = '100%';
    card.style.padding = '25px';
    card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.08)';
    card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.08)';
    });
  });

  // Enhance room image carousels
  const roomImageCarousels = document.querySelectorAll('.room-image-carousel');
  roomImageCarousels.forEach(carousel => {
    carousel.style.height = '300px';
    carousel.style.marginBottom = '25px';
  });

  // Enhance room titles
  const roomTitles = document.querySelectorAll('.room-title-image-style');
  roomTitles.forEach(title => {
    title.style.fontSize = '1.8em';
    title.style.marginBottom = '15px';
  });

  // Enhance room descriptions
  const roomDescriptions = document.querySelectorAll('.room-description-image-style');
  roomDescriptions.forEach(desc => {
    desc.style.fontSize = '1.1em';
    desc.style.lineHeight = '1.6';
  });

  // Initialize all carousels
  const carousels = document.querySelectorAll('.room-image-carousel');
  
  carousels.forEach(carousel => {
    const images = carousel.querySelectorAll('img');
    const prevButton = carousel.querySelector('.arrow-button.prev');
    const nextButton = carousel.querySelector('.arrow-button.next');
    let currentIndex = 0;

    // Previous button click handler
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        images[currentIndex].style.opacity = '0';
        setTimeout(() => {
          images[currentIndex].style.display = 'none';
          currentIndex = (currentIndex - 1 + images.length) % images.length;
          images[currentIndex].style.display = 'block';
          setTimeout(() => {
            images[currentIndex].style.opacity = '1';
          }, 50);
        }, 300);
      });
    }

    // Next button click handler
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        images[currentIndex].style.opacity = '0';
        setTimeout(() => {
          images[currentIndex].style.display = 'none';
          currentIndex = (currentIndex + 1) % images.length;
          images[currentIndex].style.display = 'block';
          setTimeout(() => {
            images[currentIndex].style.opacity = '1';
          }, 50);
        }, 300);
      });
    }
  });

  // Mobile Navigation
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu li a');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (hamburger) {
        hamburger.classList.remove('active');
      }
      if (navMenu) {
        navMenu.classList.remove('active');
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (navMenu && hamburger) {
      const isClickInsideNav = navMenu.contains(event.target);
      const isClickOnHamburger = hamburger.contains(event.target);

      if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    }
  });
});