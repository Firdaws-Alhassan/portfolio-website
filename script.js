// Mobile Menu Toggle - Updated Version
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const body = document.body;

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    body.classList.toggle('no-scroll');
});

// Close menu when clicking on links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});

        // Project Filtering
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterBtns.forEach(btn => btn.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.dataset.filter;
                
                // Filter projects
                projectCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Animate skill bars on scroll
        const skillBars = document.querySelectorAll('.skill-progress');

        function animateSkills() {
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                if (isElementInViewport(bar)) {
                    bar.style.width = width;
                }
            });
        }

        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        window.addEventListener('scroll', animateSkills);
        window.addEventListener('load', animateSkills);

        // Testimonial Carousel (simplified for this demo)
        let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('.testimonial-card');

        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.style.display = i === index ? 'block' : 'none';
            });
        }

        // Auto-rotate testimonials
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);

        // Show first testimonial initially
        showTestimonial(0);

        // Back to Top Button
        const backToTop = document.getElementById('backToTop');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });

        // Form Submission
        const contactForm = document.getElementById('contactForm');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For this demo, we'll just show an alert
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });

        // Particle Effect
        const particlesContainer = document.getElementById('particles');

        function createParticle(x, y) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.opacity = Math.random();
            particle.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
            particle.style.animationDuration = `${Math.random() * 2 + 1}s`;
            
            particlesContainer.appendChild(particle);
            
            // Remove particle after animation completes
            setTimeout(() => {
                particle.remove();
            }, 2000);
        }

        // Create particles on mouse move
        document.addEventListener('mousemove', (e) => {
            if (Math.random() > 0.7) { // Only create particles sometimes
                createParticle(e.clientX, e.clientY);
            }
        });

        // Typing Animation
        const typingText = document.querySelector('.typing-text');
        const professions = ['Creative Developer', 'UI/UX Designer', 'Frontend Engineer', 'Problem Solver'];
        let professionIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let isEnd = false;

        function type() {
            const currentProfession = professions[professionIndex];
            
            if (isDeleting) {
                typingText.textContent = currentProfession.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentProfession.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentProfession.length) {
                isEnd = true;
                isDeleting = true;
                setTimeout(type, 1500);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                professionIndex = (professionIndex + 1) % professions.length;
                setTimeout(type, 500);
            } else {
                const typingSpeed = isDeleting ? 100 : 150;
                setTimeout(type, typingSpeed);
            }
        }

        // Start typing animation
        setTimeout(type, 1000);

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        