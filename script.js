/* ==========================================================================
   MAISON OLTREMARE — EXPERIÊNCIA E REVEALS SUAVES (VANILLA JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mudança sutil na Navbar ao Rolar a Página
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Revelação de Elementos no Scroll (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Mantém visível após revelar (Comportamento de exposição)
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Surge quando 15% do elemento entra na tela
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // 3. Suave Parallax no Fundo Hero
    const heroBg = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        if (scrollPos < window.innerHeight) {
            heroBg.style.backgroundPositionY = `${scrollPos * 0.4}px`;
        }
    });
});