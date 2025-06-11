// This script automatically loads the mobile-nav.js file
(function() {
    // Check if the script has already been loaded
    if (window.mobileNavLoaded) {
        return;
    }
    
    // Mark the script as loaded
    window.mobileNavLoaded = true;
    
    // Create a script element
    const script = document.createElement('script');
    script.src = 'mobile-nav.js';
    script.async = true;
    
    // Append the script to the document
    document.body.appendChild(script);
    
    // Log a message to the console
    console.log('Mobile navigation script loaded');
})();