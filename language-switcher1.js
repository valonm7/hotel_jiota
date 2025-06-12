// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the current language from localStorage or default to 'en'
    let currentLang = localStorage.getItem('language') || 'en';
    
    // Update the flag display based on current language
    updateFlagDisplay(currentLang);
    
    // Add click event listener to the language switcher
    const langSwitcher = document.querySelector('.lang-switcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', function() {
            // Toggle between 'en' and 'sq'
            currentLang = currentLang === 'en' ? 'sq' : 'en';
            
            // Save the new language preference
            localStorage.setItem('language', currentLang);
            
            // Get the current page path
            const currentPath = window.location.pathname;
            const currentPage = currentPath.split('/').pop();
            
            // Determine the new page path based on the language
            let newPage;
            if (currentLang === 'sq') {
                // Convert English page to Albanian
                newPage = currentPage.replace('.html', '-sq.html');
            } else {
                // Convert Albanian page to English
                newPage = currentPage.replace('-sq.html', '.html');
            }
            
            // Redirect to the new page
            window.location.href = newPage;
        });
    }
});

function updateFlagDisplay(lang) {
    const langSwitcher = document.querySelector('.lang-switcher');
    if (langSwitcher) {
        if (lang === 'en') {
            langSwitcher.innerHTML = '<img src="img/en-flag.png" alt="English" class="flag-icon">';
        } else {
            langSwitcher.innerHTML = '<img src="img/sq-flag.png" alt="Albanian" class="flag-icon">';
        }
    }
} 