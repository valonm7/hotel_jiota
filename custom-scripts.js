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
});