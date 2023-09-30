// JavaScript File for Landing Page

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save the user's preference in local storage
    const isDarkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkModeEnabled);
}

// Check for user's dark mode preference in local storage
const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';

// Apply dark mode if user's preference is enabled
if (isDarkModeEnabled) {
    document.body.classList.add('dark-mode');
}
