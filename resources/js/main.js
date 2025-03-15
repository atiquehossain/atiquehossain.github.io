// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function toggleTheme() {
    document.documentElement.setAttribute('data-theme', 
        document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
    localStorage.setItem('theme', document.documentElement.getAttribute('data-theme'));
}

// Set initial theme
const savedTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', savedTheme);

themeToggle?.addEventListener('click', toggleTheme);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .skill-card, .project-card, .timeline-item').forEach(el => {
    observer.observe(el);
});

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('show');
});

// Form Validation
const contactForm = document.getElementById('contact-form');

contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Here you would typically send the form data to a server
    // For now, we'll just log it
    console.log({ name, email, message });
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Typing Animation for Hero Section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const roles = ['Mobile Development Specialist', 'Flutter Developer', 'Android Developer'];
    let currentRole = 0;
    
    function updateRole() {
        typeWriter(heroSubtitle, roles[currentRole]);
        currentRole = (currentRole + 1) % roles.length;
    }
    
    updateRole();
    setInterval(updateRole, 4000);
}

// Scroll Progress Bar
const addScrollProgress = () => {
    const progress = document.createElement('div');
    progress.className = 'scroll-progress';
    document.body.appendChild(progress);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progress.style.transform = `scaleX(${scrolled / 100})`;
    });
};

addScrollProgress();

// Parallax Effect
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.skill-card, .project-card');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;

        const angleX = (mouseY - cardY) / 30;
        const angleY = (mouseX - cardX) / -30;

        card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
});

// Enhanced Theme Toggle
const updateThemeIcon = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    themeToggle.innerHTML = isDark ? 
        '<i class="fas fa-sun"></i>' : 
        '<i class="fas fa-moon"></i>';
};

themeToggle?.addEventListener('click', () => {
    toggleTheme();
    updateThemeIcon();
});

updateThemeIcon();

// Floating Animation
document.querySelectorAll('.skill-card, .project-card').forEach((element, index) => {
    element.classList.add('float-animation');
    element.style.animationDelay = `${index * 0.2}s`;
});

// Enhanced Mobile Menu
const toggleMobileMenu = () => {
    const menu = document.getElementById('mobile-menu');
    menu?.classList.toggle('show');
    
    if (mobileMenuButton) {
        mobileMenuButton.innerHTML = menu?.classList.contains('show') ?
            '<i class="fas fa-times"></i>' :
            '<i class="fas fa-bars"></i>';
    }
};

mobileMenuButton?.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('mobile-menu-button');
    
    if (menu?.classList.contains('show') && 
        !menu.contains(e.target) && 
        !button?.contains(e.target)) {
        toggleMobileMenu();
    }
});

// Typing Animation Enhancement
const phrases = [
    'Mobile Development Specialist',
    'Flutter Developer',
    'Android Developer',
    'UI/UX Enthusiast'
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeNextChar() {
    const element = document.querySelector('.hero-subtitle');
    if (!element) return;

    const currentPhrase = phrases[currentPhraseIndex];
    const text = isDeleting
        ? currentPhrase.substring(0, currentCharIndex - 1)
        : currentPhrase.substring(0, currentCharIndex + 1);

    element.textContent = text;

    if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 50;
        setTimeout(typeNextChar, 1500);
        return;
    }

    if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingSpeed = 100;
        setTimeout(typeNextChar, 500);
        return;
    }

    currentCharIndex = isDeleting ? currentCharIndex - 1 : currentCharIndex + 1;
    setTimeout(typeNextChar, typingSpeed);
}

typeNextChar();

// Smooth reveal animation for timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.5 });

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = 'all 0.5s ease';
    timelineObserver.observe(item);
});

// Project card hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
}); 