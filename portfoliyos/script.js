// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',   // Animation starts from bottom
    distance: '50px',   // Distance the element starts from
    duration: 1000,     // Animation duration in milliseconds
    delay: 200,         // Delay before the animation starts
    easing: 'cubic-bezier(0.5, 0, 0, 1)', // Easing function
    reset: true         // Resets on reveal to ensure the animation occurs every time the element is revealed
});

// Add ScrollReveal animations
sr.reveal('.project-section', {
    interval: 200,      // Interval between elements (if multiple elements are selected)
    scale: 0.9          // Scale animation for a smoother appearance
});

sr.reveal('.services', {
    interval: 200,
    scale: 0.9
});

sr.reveal('.course-section', {
    interval: 200,
    scale: 0.9
});

sr.reveal('.contactMeSection', {
    interval: 200,
    scale: 0.9
});

// Smooth scroll functionality for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Toggle sidebar function
function showSidebar() {
    const sidebar = document.querySelector('.nav-items');
    if (sidebar.style.opacity === '1') {
        sidebar.style.opacity = '0';
        setTimeout(() => {
            sidebar.style.display = 'none';
        }, 300); // Match this timeout with the CSS transition duration
    } else {
        sidebar.style.display = 'flex';
        setTimeout(() => {
            sidebar.style.opacity = '1';
        }, 10); // Allow a slight delay for the display change to take effect
    }
}
