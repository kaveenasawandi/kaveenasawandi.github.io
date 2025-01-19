// Smooth scrolling for all links with the class 'scroll-link'
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Get the target section's ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Scroll to the target element smoothly
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
