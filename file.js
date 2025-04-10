// Animacionet për scroll dhe parallax efekt
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;

    // Efekti Parallax për hero
    hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
});
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

