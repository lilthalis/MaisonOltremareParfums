document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    const parallaxFrames = document.querySelectorAll('.parallax-frame img');
    const revealElements = document.querySelectorAll('.reveal');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const updateChrome = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 80);

        if (!prefersReducedMotion && hero && window.scrollY < window.innerHeight) {
            hero.style.backgroundPositionY = `${window.scrollY * 0.28}px`;
        }

        if (!prefersReducedMotion) {
            parallaxFrames.forEach((image) => {
                const frame = image.parentElement.getBoundingClientRect();
                const offset = (frame.top - window.innerHeight / 2) * -0.018;
                image.style.transform = `translateY(${offset}px) scale(1.04)`;
            });
        }
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16, rootMargin: '0px 0px -60px 0px' });

    revealElements.forEach((element) => revealObserver.observe(element));
    updateChrome();
    window.addEventListener('scroll', updateChrome, { passive: true });
});
