// 1. Terminal Intro Sequence
document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal-intro');
    const terminalText = document.getElementById('terminal-text');
    const commands = [
        "Initializing core systems...",
        "Loading Mechatronics modules...",
        "Fetching AI neural networks...",
        "Accessing Global Intelligence Dashboard...",
        "Welcome, Yash."
    ];

    let lineIndex = 0;
    let charIndex = 0;

    function typeLine() {
        if (lineIndex < commands.length) {
            if (charIndex < commands[lineIndex].length) {
                terminalText.innerHTML += commands[lineIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeLine, 30);
            } else {
                terminalText.innerHTML += "<br>";
                lineIndex++;
                charIndex = 0;
                setTimeout(typeLine, 300);
            }
        } else {
            setTimeout(() => {
                terminal.style.transition = "opacity 0.5s ease";
                terminal.style.opacity = "0";
                setTimeout(() => terminal.remove(), 500);
                initTypewriter(); // Start Hero typing after terminal
            }, 800);
        }
    }

    typeLine();
});

// 2. Hero Typewriter Effect
function initTypewriter() {
    const roles = ["Mechatronics Engineer", "Python Developer", "AI Enthusiast", "Web Developer"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    (function type() {
        if (count === roles.length) {
            count = 0;
        }
        currentText = roles[count];
        letter = currentText.slice(0, ++index);

        document.getElementById('typing-text').textContent = letter;

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // Pause at end of word
        } else {
            setTimeout(type, 100);
        }
    })();
}

// 3. Custom Cursor with Trailer
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Add slight delay/lag to outline for fluid feel
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Add hover effect to clickable elements
const clickables = document.querySelectorAll('a, button, .project-card');
clickables.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
});

// 4. 3D Tilt Effect for Cards
const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// 5. Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

// 6. Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const html = document.documentElement;

function toggleTheme() {
    html.classList.toggle('dark');
    const icon = html.classList.contains('dark') ? 'fa-sun' : 'fa-moon';
    themeToggle.innerHTML = `<i class="fas ${icon}"></i>`;
    themeToggleMobile.innerHTML = `<i class="fas ${icon}"></i>`;
}

themeToggle.addEventListener('click', toggleTheme);
themeToggleMobile.addEventListener('click', toggleTheme);

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });
});

// 7. Konami Code Easter Egg
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            document.getElementById('easter-egg').classList.remove('hidden');
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});