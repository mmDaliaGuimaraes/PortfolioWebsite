
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation classes on scroll
// ParticlesJS configuration
particlesJS("particles-js", {
    particles: {
        number: { value: 55 },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0 },
            polygon: { nb_sides: 5 }
        },
        opacity: { value: 0.4, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 130,
            color: "#ffd700",
            opacity: 0.3,
            width: 1
        },
        move: { enable: true, speed: 2 }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            grab: { distance: 150, line_linked: { opacity: 0.6 } },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

// Back to top button functionality
window.onscroll = function() {
    document.getElementById("topBtn").style.display =
        (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? "block" : "none";
};

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1
});

document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Magic cursor effect
const cursor = document.createElement('div');
cursor.classList.add('magic-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
    
    // Create sparkle effect
    if (Math.random() < 0.1) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 800);
    }
});

// Enhanced floating effect for mascot
const mascot = document.querySelector('.floating');
if (mascot) {
    mascot.addEventListener('mouseover', () => {
        mascot.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    mascot.addEventListener('mouseout', () => {
        mascot.style.transform = 'scale(1) rotate(0deg)';
    });
}
