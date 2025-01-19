document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.theme-toggle');
    toggleButton.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        document.body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
    });
    document.body.setAttribute('data-theme', 'light'); // Default theme
});
