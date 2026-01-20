// gets the current year for the footer
const yearSpan = document.getElementById('year');
yearSpan.innerHTML = new Date().getFullYear();

// hamburger menu functionality
const hamburger = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');
const navLinks = navMenu.querySelectorAll('a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});