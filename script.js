/* ============================================================
   PORTFOLIO SCRIPTS — Premium Dark Theme
   Author: Bhoopendra Vishwakarma
   ============================================================ */

(function () {
    'use strict';

    /* ===== Page Loader ===== */
    function initPageLoader() {
        const loader = document.getElementById('pageLoader');
        if (!loader) return;
        window.addEventListener('load', function () {
            setTimeout(function () {
                loader.classList.add('hidden');
            }, 1600);
        });
    }

    /* ===== Scroll Progress Bar ===== */
    function initScrollProgress() {
        const progressBar = document.getElementById('scrollProgress');
        if (!progressBar) return;
        window.addEventListener('scroll', function () {
            var scrollTop = window.scrollY;
            var docHeight = document.documentElement.scrollHeight - window.innerHeight;
            var scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }

    /* ===== Cursor Glow Effect ===== */
    function initCursorGlow() {
        var cursorGlow = document.getElementById('cursorGlow');
        if (!cursorGlow) return;
        document.addEventListener('mousemove', function (e) {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    }

    /* ===== Navbar Scroll Effect ===== */
    function initNavbar() {
        var navbar = document.getElementById('navbar');
        if (!navbar) return;
        window.addEventListener('scroll', function () {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    /* ===== Active Nav Link on Scroll ===== */
    function initActiveNav() {
        var sections = document.querySelectorAll('section[id]');
        var navLinks = document.querySelectorAll('.nav-link');

        function updateActiveNav() {
            var scrollPos = window.scrollY + 150;
            sections.forEach(function (section) {
                var top = section.offsetTop;
                var height = section.offsetHeight;
                var id = section.getAttribute('id');
                if (scrollPos >= top && scrollPos < top + height) {
                    navLinks.forEach(function (link) {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', updateActiveNav);
    }

    /* ===== Mobile Menu Toggle ===== */
    function initMobileMenu() {
        var hamburger = document.getElementById('hamburger');
        var navLinks = document.getElementById('navLinks');
        if (!hamburger || !navLinks) return;

        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close on link click
        navLinks.querySelectorAll('.nav-link').forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close on outside click
        document.addEventListener('click', function (e) {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    /* ===== Typing Animation ===== */
    function initTypingEffect() {
        var typingElement = document.getElementById('typingText');
        if (!typingElement) return;

        var phrases = [
            'Data Analyst',
            'SQL Enthusiast',
            'Power BI Developer',
            'Python Programmer',
            'Data Storyteller',
            'Insight Generator'
        ];

        var phraseIndex = 0;
        var charIndex = 0;
        var isDeleting = false;
        var typingSpeed = 100;

        function typeEffect() {
            var currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                typingSpeed = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 500;
            }

            setTimeout(typeEffect, typingSpeed);
        }

        // Start after loader finishes
        setTimeout(typeEffect, 1800);
    }

    /* ===== Skill Category Fade-In ===== */
    function initSkillAnimations() {
        var categories = document.querySelectorAll('.skill-category');

        function animateSkills() {
            categories.forEach(function (cat, index) {
                var rect = cat.getBoundingClientRect();
                if (rect.top < window.innerHeight - 60) {
                    setTimeout(function () {
                        cat.classList.add('visible');
                    }, index * 100);
                }
            });
        }

        window.addEventListener('scroll', animateSkills);
        window.addEventListener('load', animateSkills);
    }

    /* ===== Counter Animation ===== */
    function initCounterAnimation() {
        var counters = document.querySelectorAll('.stat-number');

        function animateCounters() {
            counters.forEach(function (counter) {
                var target = parseInt(counter.getAttribute('data-target'));
                var rect = counter.getBoundingClientRect();
                if (rect.top < window.innerHeight - 60 && !counter.classList.contains('counted')) {
                    counter.classList.add('counted');
                    var current = 0;
                    var increment = target / 60;
                    var timer = setInterval(function () {
                        current += increment;
                        if (current >= target) {
                            counter.textContent = target.toLocaleString();
                            clearInterval(timer);
                        } else {
                            counter.textContent = Math.floor(current).toLocaleString();
                        }
                    }, 30);
                }
            });
        }

        window.addEventListener('scroll', animateCounters);
        window.addEventListener('load', animateCounters);
    }

    /* ===== Scroll Reveal Animation ===== */
    function initScrollReveal() {
        var revealElements = document.querySelectorAll(
            '.timeline-item, .project-card, .stat-card, .why-card, .resource-card, .cert-card, .contact-card'
        );

        // Set initial state
        revealElements.forEach(function (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });

        function revealOnScroll() {
            revealElements.forEach(function (el) {
                var rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 80) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }
            });
        }

        window.addEventListener('scroll', revealOnScroll);
        window.addEventListener('load', revealOnScroll);
    }

    /* ===== Back to Top Button ===== */
    function initBackToTop() {
        var backToTop = document.getElementById('backToTop');
        if (!backToTop) return;

        window.addEventListener('scroll', function () {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ===== Contact Form — Web3Forms Integration ===== */
    function initContactForm() {
        var form = document.getElementById('contactForm');
        var submitBtn = document.getElementById('submitBtn');
        var toast = document.getElementById('toast');
        var toastMessage = document.getElementById('toastMessage');
        if (!form || !submitBtn) return;

        function showToast(message, type) {
            if (!toast || !toastMessage) return;
            toastMessage.textContent = message;
            toast.className = 'toast ' + type + ' show';
            setTimeout(function () {
                toast.classList.remove('show');
            }, 4000);
        }

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var formData = new FormData(form);

            // Loading state
            submitBtn.classList.add('loading');
            submitBtn.innerHTML = '<span>Sending...</span>';

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(function (response) { return response.json(); })
            .then(function (data) {
                submitBtn.classList.remove('loading');
                if (data.success) {
                    submitBtn.classList.add('success');
                    submitBtn.innerHTML = '<span>Message Sent!</span><i class="fas fa-check"></i>';
                    showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
                    form.reset();
                    setTimeout(function () {
                        submitBtn.classList.remove('success');
                        submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
                    }, 3000);
                } else {
                    submitBtn.classList.add('error');
                    submitBtn.innerHTML = '<span>Failed to Send</span><i class="fas fa-times"></i>';
                    showToast('Something went wrong. Please try again.', 'error');
                    setTimeout(function () {
                        submitBtn.classList.remove('error');
                        submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
                    }, 3000);
                }
            })
            .catch(function () {
                submitBtn.classList.remove('loading');
                submitBtn.classList.add('error');
                submitBtn.innerHTML = '<span>Network Error</span><i class="fas fa-times"></i>';
                showToast('Network error. Please check your connection.', 'error');
                setTimeout(function () {
                    submitBtn.classList.remove('error');
                    submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
                }, 3000);
            });
        });
    }

    /* ===== Smooth Scroll for Anchor Links ===== */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                var targetId = this.getAttribute('href');
                if (targetId === '#') return;
                var target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    /* ===== Parallax Floating Shapes ===== */
    function initParallax() {
        window.addEventListener('scroll', function () {
            var scrolled = window.scrollY;
            var shapes = document.querySelectorAll('.shape');
            shapes.forEach(function (shape, i) {
                var speed = (i + 1) * 0.04;
                shape.style.transform = 'translateY(' + (scrolled * speed) + 'px)';
            });
        });
    }

    /* ===== Initialize Everything ===== */
    function init() {
        initPageLoader();
        initScrollProgress();
        initCursorGlow();
        initNavbar();
        initActiveNav();
        initMobileMenu();
        initTypingEffect();
        initSkillAnimations();
        initCounterAnimation();
        initScrollReveal();
        initBackToTop();
        initContactForm();
        initSmoothScroll();
        initParallax();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
