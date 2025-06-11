// Dynamically load custom-scripts.js
(function() {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'custom-scripts.js';
    script.async = true;
    
    // Append the script to the document
    document.body.appendChild(script);
})();