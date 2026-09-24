document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('section, .projects-card, .experience-card, .language-card, .contact-info, header');

    revealElements.forEach((element) => {
        element.classList.add('reveal');
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: '0px 0px -20px 0px'
        }
    );

    revealElements.forEach((element) => observer.observe(element));

    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.innerHTML = new Date().getFullYear();
    }
});