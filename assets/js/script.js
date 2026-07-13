// ===================== MENU MOBILE =====================
const nav = document.querySelector('nav');

const menuToggle = document.createElement('button');
menuToggle.innerHTML = '☰';
menuToggle.classList.add('menu-toggle');

document.querySelector('.nav').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// ===================== SMOOTH SCROLL =====================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }

        // Fermer menu mobile après clic
        nav.classList.remove('active');
    });
});

// ===================== ANIMATION AU SCROLL =====================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll('.section, .card, .project-card, .hero-text')
    .forEach(el => observer.observe(el));

// ===================== HEADER SCROLL EFFECT =====================
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===================== COMPTEUR (OPTIONNEL) =====================
// Tu peux l'utiliser pour afficher des chiffres animés (expérience, projets, etc.)

const counters = document.querySelectorAll('[data-count]');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-count');
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});