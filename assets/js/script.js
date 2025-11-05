// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);
    if (!isClickInsideNav && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// Elementlarga animatsiya qo'shish
document.addEventListener('DOMContentLoaded', function() {
    // Hero rasmga float animatsiya
    const heroImg = document.querySelector('.hero-img img');
    if (heroImg) {
        heroImg.classList.add('float');
    }
    
    // Hero rasm atrofidagi kichik aylanachalar
    const heroContainer = document.querySelector('.hero-img');
    if (heroContainer) {
        // 3 ta kichik aylanacha yaratish
        for (let i = 1; i <= 3; i++) {
            const dot = document.createElement('div');
            dot.classList.add(`dot${i}`);
            dot.style.top = '50%';
            dot.style.left = '50%';
            heroContainer.appendChild(dot);
        }
        
        // Hover effektlari
        heroContainer.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });
        
        heroContainer.addEventListener('mouseleave', function() {
            this.classList.remove('hovered');
        });
    }
    
    // Barcha sektsiyalarga pastdan chiqish animatsiyasi
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Barcha sektsiyalarga bir xil pastdan chiqish animatsiyasi
                entry.target.classList.add('slide-in-up-fast');
                entry.target.style.animationDelay = `${index * 0.1}s`;
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Statistikalar uchun animatsiya
    const stats = document.querySelectorAll('.stat');
    stats.forEach((stat, index) => {
        stat.style.animationDelay = `${index * 0.05 + 0.2}s`;
        stat.classList.add('slide-in-up-fast');
    });
    
    // Ko'nikmalar uchun animatsiya
    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill, index) => {
        skill.style.animationDelay = `${index * 0.05 + 0.1}s`;
        skill.classList.add('slide-in-up-fast');
    });
    
    // Social linklarga hover effekti
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.classList.add('bounce');
        });
        
        link.addEventListener('animationend', function() {
            this.classList.remove('bounce');
        });
    });
    
    // Project cardlarga animatsiya
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1 + 0.2}s`;
        card.classList.add('slide-in-up-fast');
    });
    
    // Contact form elementlari uchun
    const formElements = document.querySelectorAll('.form-group, .btn');
    formElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.05 + 0.3}s`;
        element.classList.add('slide-in-up-fast');
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Forma elementlarini olish
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Animatsiya qo'shish
        contactForm.classList.add('pulse');
        
        // Ma'lumotlarni konsolga chiqarish
        console.log('Form submitted:', { name, email, message });
        
        // Xabar berish
        alert('Thank you for your message! I will get back to you soon.');
        
        // Animatsiyani o'chirish
        setTimeout(() => {
            contactForm.classList.remove('pulse');
        }, 2000);
        
        // Formani tozalash
        contactForm.reset();
    });
}

// Skill progress bar animatsiyasi
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Progress barlarga animatsiya
                document.querySelectorAll('.progress-bar').forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 1000);
                });
                
                // Observerni o'chirish
                skillObserver.unobserve(skillsSection);
            }
        });
    }, { threshold: 0.1 });
    
    skillObserver.observe(skillsSection);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar linklar uchun active state
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Qo'shimcha animatsiya uchun CSS dinamik yaratish
const style = document.createElement('style');
style.innerHTML = `
    .pulse-ring {
        position: absolute;
        top: 50%;
        left: 50%;
        border: 2px solid rgba(244, 114, 182, 0.25);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: pulseRing 3s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
    }
    
    .pulse-ring:nth-child(1) {
        width: 320px;
        height: 320px;
        animation-delay: 0s;
    }
    
    .pulse-ring:nth-child(2) {
        width: 340px;
        height: 340px;
        animation-delay: 1s;
    }
    
    .pulse-ring:nth-child(3) {
        width: 360px;
        height: 360px;
        animation-delay: 2s;
    }
`;
document.head.appendChild(style);
