// ===== TYPING EFFECT =====
const titles = [
    'Data Engineer',
    'Cloud Platform Builder',
    'Open Source Contributor',
    'Technical Writer',
    'DataOps Specialist'
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typedTitle');

function typeEffect() {
    const current = titles[titleIndex];

    if (isDeleting) {
        typedEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
        speed = 2000; // pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== ACTIVE NAV LINK HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollY = window.scrollY + 200;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksEl.classList.toggle('active');
});

// Close menu on link click
navLinksEl.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinksEl.classList.remove('active');
    });
});

// ===== SCROLL REVEAL (Enhanced) =====
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            // Support custom delay via data-delay attribute
            const delay = el.getAttribute('data-delay');
            if (delay) {
                el.style.transitionDelay = delay + 'ms';
            }
            el.classList.add('visible');

            // If element has data-stagger, assign --child-index to children
            if (el.hasAttribute('data-stagger')) {
                Array.from(el.children).forEach((child, i) => {
                    child.style.setProperty('--child-index', i);
                });
            }

            revealObserver.unobserve(el);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ===== SKILL BAR ANIMATION =====
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.getAttribute('data-width');
            bar.style.setProperty('--target-width', width + '%');
            bar.classList.add('animated');
            skillObserver.unobserve(bar);
        }
    });
}, {
    threshold: 0.3
});

skillBars.forEach(bar => skillObserver.observe(bar));

// ===== PROJECT FILTERING =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter cards
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeInUp 0.5s ease forwards';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ===== BACK TO TOP =====
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== FLOATING PARTICLES =====
function createParticles() {
    const heroBg = document.getElementById('heroBg');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Randomize properties
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 15 + 10;
        const opacity = Math.random() * 0.5 + 0.1;

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${left}%;
            bottom: -10px;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
            opacity: ${opacity};
            background: ${Math.random() > 0.5 ? 'rgba(0, 212, 255, 0.4)' : 'rgba(124, 58, 237, 0.4)'};
        `;

        heroBg.appendChild(particle);
    }
}

createParticles();

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // navbar height
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ===== STAGGERED CARD ANIMATIONS =====
function staggerCards() {
    const cardContainers = document.querySelectorAll('.projects-grid, .certs-grid, .opensource-grid, .contact-info, .skills-grid');

    cardContainers.forEach(container => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.children;
                    Array.from(cards).forEach((card, i) => {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(30px)';
                        setTimeout(() => {
                            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, i * 100);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(container);
    });
}

staggerCards();


// ================================================================
// ===== ENHANCEMENT #1: INTERACTIVE DATA PIPELINE CANVAS =====
// ================================================================
function initPipelineCanvas() {
    const canvas = document.getElementById('pipelineCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const nodeNames = ['Kafka', 'PySpark', 'Airflow', 'Snowflake', 'dbt', 'Tableau'];
    const nodes = [];
    const dataPackets = [];

    function createNodes() {
        nodes.length = 0;
        const w = canvas.width;
        const h = canvas.height;
        const positions = [
            { x: w * 0.08, y: h * 0.25 },
            { x: w * 0.25, y: h * 0.55 },
            { x: w * 0.42, y: h * 0.20 },
            { x: w * 0.60, y: h * 0.60 },
            { x: w * 0.78, y: h * 0.30 },
            { x: w * 0.92, y: h * 0.55 },
        ];
        nodeNames.forEach((name, i) => {
            nodes.push({
                x: positions[i].x,
                y: positions[i].y,
                label: name,
                radius: 24,
                pulse: Math.random() * Math.PI * 2,
                connections: [],
            });
        });
        nodes[0].connections.push(1, 2);
        nodes[1].connections.push(3);
        nodes[2].connections.push(3, 4);
        nodes[3].connections.push(4);
        nodes[4].connections.push(5);
    }

    function spawnPacket() {
        const sourceIdx = Math.floor(Math.random() * (nodes.length - 1));
        const source = nodes[sourceIdx];
        if (source.connections.length === 0) return;
        const targetIdx = source.connections[Math.floor(Math.random() * source.connections.length)];
        const target = nodes[targetIdx];

        dataPackets.push({
            sx: source.x, sy: source.y,
            tx: target.x, ty: target.y,
            progress: 0,
            speed: 0.004 + Math.random() * 0.006,
            color: Math.random() > 0.5 ? 'rgba(0, 212, 255, 0.9)' : 'rgba(124, 58, 237, 0.9)',
        });
    }

    createNodes();
    window.addEventListener('resize', createNodes);

    let lastSpawn = 0;
    function animate(time) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        nodes.forEach(node => {
            node.connections.forEach(ci => {
                const t = nodes[ci];
                ctx.beginPath();
                ctx.moveTo(node.x, node.y);
                const midX = (node.x + t.x) / 2;
                const midY = (node.y + t.y) / 2 - 30;
                ctx.quadraticCurveTo(midX, midY, t.x, t.y);
                ctx.strokeStyle = 'rgba(0, 212, 255, 0.08)';
                ctx.lineWidth = 1.5;
                ctx.stroke();
            });
        });

        nodes.forEach(node => {
            node.pulse += 0.02;
            const pulseR = node.radius + Math.sin(node.pulse) * 3;

            const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, pulseR * 2.5);
            gradient.addColorStop(0, 'rgba(0, 212, 255, 0.12)');
            gradient.addColorStop(1, 'transparent');
            ctx.beginPath();
            ctx.arc(node.x, node.y, pulseR * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(node.x, node.y, pulseR, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(10, 10, 26, 0.8)';
            ctx.fill();
            ctx.strokeStyle = 'rgba(0, 212, 255, 0.3)';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            ctx.fillStyle = 'rgba(0, 212, 255, 0.5)';
            ctx.font = '10px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(node.label, node.x, node.y + 4);
        });

        if (time - lastSpawn > 800) {
            spawnPacket();
            lastSpawn = time;
        }

        for (let i = dataPackets.length - 1; i >= 0; i--) {
            const p = dataPackets[i];
            p.progress += p.speed;

            if (p.progress >= 1) {
                dataPackets.splice(i, 1);
                continue;
            }

            const t = p.progress;
            const midX = (p.sx + p.tx) / 2;
            const midY = (p.sy + p.ty) / 2 - 30;
            const x = (1 - t) * (1 - t) * p.sx + 2 * (1 - t) * t * midX + t * t * p.tx;
            const y = (1 - t) * (1 - t) * p.sy + 2 * (1 - t) * t * midY + t * t * p.ty;

            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();

            const glow = ctx.createRadialGradient(x, y, 0, x, y, 12);
            glow.addColorStop(0, p.color.replace('0.9', '0.3'));
            glow.addColorStop(1, 'transparent');
            ctx.beginPath();
            ctx.arc(x, y, 12, 0, Math.PI * 2);
            ctx.fillStyle = glow;
            ctx.fill();
        }

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

initPipelineCanvas();


// ================================================================
// ===== ENHANCEMENT #3: ANIMATED STATS COUNTERS =====
// ================================================================
function animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');

    function animateOne(el) {
        const target = parseInt(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000;
        const startTime = performance.now();
        const isK = suffix.includes('K');

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);

            if (isK) {
                el.textContent = Math.floor(current / 1000) + suffix;
            } else {
                el.textContent = current + suffix;
            }

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }

        requestAnimationFrame(updateCounter);
    }

    // Trigger counters after a short delay for hero stats already in view
    setTimeout(() => {
        statNumbers.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                animateOne(el);
            }
        });
    }, 1200);

    // Also observe for scroll-triggered stats
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateOne(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));
}

animateCounters();


// ================================================================
// ===== ENHANCEMENT #4: TESTIMONIALS CAROUSEL =====
// ================================================================
function initTestimonials() {
    const track = document.getElementById('testimonialTrack');
    const dotsContainer = document.getElementById('testimonialDots');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');

    if (!track || !dotsContainer) return;

    const cards = track.querySelectorAll('.testimonial-card');
    const count = cards.length;
    let currentIndex = 0;
    let autoRotate;

    // Create dots
    for (let i = 0; i < count; i++) {
        const dot = document.createElement('div');
        dot.classList.add('testimonial-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    }

    function goTo(index) {
        currentIndex = ((index % count) + count) % count;
        track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';

        dotsContainer.querySelectorAll('.testimonial-dot').forEach((d, i) => {
            d.classList.toggle('active', i === currentIndex);
        });
    }

    function next() { goTo(currentIndex + 1); }
    function prev() { goTo(currentIndex - 1); }

    if (nextBtn) nextBtn.addEventListener('click', () => { next(); resetAuto(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); resetAuto(); });

    function resetAuto() {
        clearInterval(autoRotate);
        autoRotate = setInterval(next, 5000);
    }

    autoRotate = setInterval(next, 5000);

    // Touch support
    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });
    track.addEventListener('touchend', (e) => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            diff > 0 ? next() : prev();
            resetAuto();
        }
    }, { passive: true });
}

initTestimonials();


// ================================================================
// ===== ENHANCEMENT #2: GITHUB ACTIVITY GRAPH =====
// ================================================================
async function initGitHubActivity() {
    const graphEl = document.getElementById('githubGraph');
    const reposEl = document.getElementById('ghRepos');
    const followersEl = document.getElementById('ghFollowers');
    const followingEl = document.getElementById('ghFollowing');

    if (!graphEl) return;

    // Fetch GitHub user data
    try {
        const response = await fetch('https://api.github.com/users/kalluripradeep');
        if (response.ok) {
            const data = await response.json();
            if (reposEl) reposEl.textContent = data.public_repos;
            if (followersEl) followersEl.textContent = data.followers;
            if (followingEl) followingEl.textContent = data.following;
        }
    } catch (e) {
        // Use fallback
        if (reposEl) reposEl.textContent = '15+';
        if (followersEl) followersEl.textContent = '50+';
        if (followingEl) followingEl.textContent = '30+';
    }

    // Generate contribution graph with realistic pattern
    const contributionData = [];
    for (let week = 0; week < 52; week++) {
        for (let day = 0; day < 7; day++) {
            const isWeekend = day === 0 || day === 6;
            let base = isWeekend ? 0.15 : 0.45;

            // Activity bursts for realism
            if (week > 35 && week < 45) base *= 1.8;
            if (week > 10 && week < 18) base *= 1.5;
            if (week > 25 && week < 30) base *= 1.3;

            const rand = Math.random();
            if (rand > base) {
                contributionData.push(0);
            } else if (rand > base * 0.5) {
                contributionData.push(1);
            } else if (rand > base * 0.25) {
                contributionData.push(2);
            } else if (rand > base * 0.1) {
                contributionData.push(3);
            } else {
                contributionData.push(4);
            }
        }
    }

    // Render (column-major: each column = 1 week)
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < contributionData.length; i++) {
        const cell = document.createElement('div');
        cell.classList.add('gh-cell');
        const level = contributionData[i];
        if (level > 0) cell.classList.add('l' + level);
        cell.style.opacity = '0';
        cell.style.transform = 'scale(0)';
        fragment.appendChild(cell);
    }

    graphEl.appendChild(fragment);

    // Animate cells in with stagger
    const graphObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cells = graphEl.querySelectorAll('.gh-cell');
                cells.forEach((cell, i) => {
                    setTimeout(() => {
                        cell.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        cell.style.opacity = '1';
                        cell.style.transform = 'scale(1)';
                    }, i * 2);
                });
                graphObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    graphObserver.observe(graphEl);
}

// ================================================================
// ===== SKILL CARD FILTERS & RING ANIMATION =====
// ================================================================
function initSkillCards() {
    const filterBtns = document.querySelectorAll('.skill-filter-btn');
    const cards = document.querySelectorAll('.skill-card');

    // Filter tabs
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-skill-filter');

            cards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-skill-cat') === filter) {
                    card.classList.remove('hidden-card');
                } else {
                    card.classList.add('hidden-card');
                }
            });
        });
    });

    // Circular ring animation on scroll
    const rings = document.querySelectorAll('.skill-ring-fill');
    const circumference = 2 * Math.PI * 42; // r=42

    const ringObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                rings.forEach((ring, i) => {
                    const percent = parseInt(ring.getAttribute('data-percent')) || 0;
                    const offset = circumference - (percent / 100) * circumference;

                    setTimeout(() => {
                        ring.style.strokeDashoffset = offset;
                        ring.classList.add('animated');
                    }, i * 60); // staggered
                });
                ringObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    const grid = document.getElementById('skillCardsGrid');
    if (grid) ringObserver.observe(grid);
}

initSkillCards();

initGitHubActivity();


// ================================================================
// ===== ENHANCEMENT: PAGE PRELOADER =====
// ================================================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => preloader.remove(), 600);
        }, 1200);
    }
});


// ================================================================
// ===== ENHANCEMENT: CURSOR GLOW TRAIL =====
// ================================================================
function initCursorGlow() {
    const glow = document.getElementById('cursorGlow');
    if (!glow || window.innerWidth < 768) return;

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!glow.classList.contains('active')) {
            glow.classList.add('active');
        }
    });

    document.addEventListener('mouseleave', () => {
        glow.classList.remove('active');
    });

    function animateGlow() {
        glowX += (mouseX - glowX) * 0.12;
        glowY += (mouseY - glowY) * 0.12;
        glow.style.left = glowX + 'px';
        glow.style.top = glowY + 'px';
        requestAnimationFrame(animateGlow);
    }

    animateGlow();
}

initCursorGlow();


// ================================================================
// ===== ENHANCEMENT: DARK/LIGHT MODE TOGGLE =====
// ================================================================
function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    const savedTheme = localStorage.getItem('portfolioTheme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const newTheme = current === 'light' ? 'dark' : 'light';

        if (newTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', newTheme);
        }

        localStorage.setItem('portfolioTheme', newTheme);
    });
}

initThemeToggle();


// ================================================================
// ===== ENHANCEMENT: INTERACTIVE TECH STACK VISUALIZATION =====
// ================================================================
function initTechBubbles() {
    const canvas = document.getElementById('techCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }
    resize();
    window.addEventListener('resize', () => { resize(); positionNodes(); });

    const categories = {
        programming: { color: 'rgba(0, 212, 255, C)', label: 'Programming' },
        cloud: { color: 'rgba(124, 58, 237, C)', label: 'Cloud' },
        dataeng: { color: 'rgba(236, 72, 153, C)', label: 'Data Engineering' },
        devops: { color: 'rgba(52, 211, 153, C)', label: 'DevOps' },
        bi: { color: 'rgba(251, 191, 36, C)', label: 'BI Tools' },
    };

    const techNodes = [
        { name: 'Python', cat: 'programming', size: 32 },
        { name: 'SQL', cat: 'programming', size: 30 },
        { name: 'Shell', cat: 'programming', size: 20 },
        { name: 'AWS', cat: 'cloud', size: 28 },
        { name: 'Azure', cat: 'cloud', size: 28 },
        { name: 'Fabric', cat: 'cloud', size: 24 },
        { name: 'Kafka', cat: 'dataeng', size: 30 },
        { name: 'Airflow', cat: 'dataeng', size: 28 },
        { name: 'Snowflake', cat: 'dataeng', size: 30 },
        { name: 'PySpark', cat: 'dataeng', size: 28 },
        { name: 'dbt', cat: 'dataeng', size: 24 },
        { name: 'Docker', cat: 'devops', size: 24 },
        { name: 'Terraform', cat: 'devops', size: 22 },
        { name: 'CI/CD', cat: 'devops', size: 20 },
        { name: 'Tableau', cat: 'bi', size: 24 },
        { name: 'Power BI', cat: 'bi', size: 24 },
    ];

    const connections = [
        ['Python', 'PySpark'], ['Python', 'Airflow'], ['Python', 'dbt'],
        ['PySpark', 'Snowflake'], ['PySpark', 'AWS'], ['PySpark', 'Azure'],
        ['Kafka', 'PySpark'], ['Kafka', 'AWS'],
        ['Airflow', 'Snowflake'], ['Airflow', 'dbt'], ['Airflow', 'Kafka'],
        ['Snowflake', 'dbt'], ['Snowflake', 'Tableau'], ['Snowflake', 'Power BI'],
        ['AWS', 'Terraform'], ['Azure', 'Terraform'], ['Azure', 'Fabric'],
        ['Docker', 'CI/CD'], ['Docker', 'Airflow'],
        ['SQL', 'Snowflake'], ['SQL', 'Power BI'],
    ];

    const nodes = [];

    function positionNodes() {
        const w = canvas.width;
        const h = canvas.height;
        const centerX = w / 2;
        const centerY = h / 2;
        const radiusX = w * 0.35;
        const radiusY = h * 0.35;

        techNodes.forEach((tech, i) => {
            const angle = (i / techNodes.length) * Math.PI * 2 - Math.PI / 2;
            const jitter = (Math.random() - 0.5) * 40;

            if (nodes[i]) {
                nodes[i].tx = centerX + Math.cos(angle) * radiusX + jitter;
                nodes[i].ty = centerY + Math.sin(angle) * radiusY + jitter;
            } else {
                nodes.push({
                    x: centerX + Math.cos(angle) * radiusX + jitter,
                    y: centerY + Math.sin(angle) * radiusY + jitter,
                    tx: centerX + Math.cos(angle) * radiusX + jitter,
                    ty: centerY + Math.sin(angle) * radiusY + jitter,
                    vx: 0, vy: 0,
                    name: tech.name,
                    cat: tech.cat,
                    size: tech.size,
                    pulse: Math.random() * Math.PI * 2,
                });
            }
        });
    }

    positionNodes();

    let hoveredNode = null;
    let draggedNode = null;
    let mouseX = 0, mouseY = 0;

    function getNodeAt(x, y) {
        for (let i = nodes.length - 1; i >= 0; i--) {
            const n = nodes[i];
            const dx = x - n.x, dy = y - n.y;
            if (dx * dx + dy * dy < (n.size + 6) * (n.size + 6)) return n;
        }
        return null;
    }

    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;

        if (draggedNode) {
            draggedNode.x = mouseX;
            draggedNode.y = mouseY;
            draggedNode.tx = mouseX;
            draggedNode.ty = mouseY;
        } else {
            hoveredNode = getNodeAt(mouseX, mouseY);
            canvas.style.cursor = hoveredNode ? 'pointer' : 'grab';
        }
    });

    canvas.addEventListener('mousedown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        draggedNode = getNodeAt(x, y);
        if (draggedNode) canvas.style.cursor = 'grabbing';
    });

    canvas.addEventListener('mouseup', () => {
        draggedNode = null;
    });

    canvas.addEventListener('mouseleave', () => {
        hoveredNode = null;
        draggedNode = null;
    });

    function getConnectedNames(nodeName) {
        const connected = new Set();
        connections.forEach(([a, b]) => {
            if (a === nodeName) connected.add(b);
            if (b === nodeName) connected.add(a);
        });
        return connected;
    }

    function isLightTheme() {
        return document.documentElement.getAttribute('data-theme') === 'light';
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const light = isLightTheme();

        // Soft spring physics
        nodes.forEach(n => {
            if (n !== draggedNode) {
                n.vx += (n.tx - n.x) * 0.02;
                n.vy += (n.ty - n.y) * 0.02;
                n.vx *= 0.92;
                n.vy *= 0.92;
                n.x += n.vx;
                n.y += n.vy;
            }
            n.pulse += 0.015;
        });

        // Repulsion
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[j].x - nodes[i].x;
                const dy = nodes[j].y - nodes[i].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const minDist = nodes[i].size + nodes[j].size + 20;
                if (dist < minDist && dist > 0) {
                    const force = (minDist - dist) * 0.02;
                    const fx = (dx / dist) * force;
                    const fy = (dy / dist) * force;
                    if (nodes[i] !== draggedNode) { nodes[i].x -= fx; nodes[i].y -= fy; }
                    if (nodes[j] !== draggedNode) { nodes[j].x += fx; nodes[j].y += fy; }
                }
            }
        }

        const connectedToHovered = hoveredNode ? getConnectedNames(hoveredNode.name) : new Set();

        // Draw connections
        connections.forEach(([a, b]) => {
            const na = nodes.find(n => n.name === a);
            const nb = nodes.find(n => n.name === b);
            if (!na || !nb) return;

            const isHighlighted = hoveredNode && (hoveredNode.name === a || hoveredNode.name === b);
            ctx.beginPath();
            ctx.moveTo(na.x, na.y);
            ctx.lineTo(nb.x, nb.y);
            ctx.strokeStyle = isHighlighted
                ? (light ? 'rgba(0, 212, 255, 0.5)' : 'rgba(0, 212, 255, 0.35)')
                : (light ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.04)');
            ctx.lineWidth = isHighlighted ? 2 : 1;
            ctx.stroke();
        });

        // Draw nodes
        nodes.forEach(n => {
            const isHovered = hoveredNode === n;
            const isConnected = hoveredNode && connectedToHovered.has(n.name);
            const isDimmed = hoveredNode && !isHovered && !isConnected;
            const catColor = categories[n.cat].color;
            const pulseSize = n.size + Math.sin(n.pulse) * 2;

            // Glow
            if (isHovered || isConnected) {
                const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, pulseSize * 2.5);
                glow.addColorStop(0, catColor.replace('C', '0.2'));
                glow.addColorStop(1, 'transparent');
                ctx.beginPath();
                ctx.arc(n.x, n.y, pulseSize * 2.5, 0, Math.PI * 2);
                ctx.fillStyle = glow;
                ctx.fill();
            }

            // Circle
            ctx.beginPath();
            ctx.arc(n.x, n.y, pulseSize, 0, Math.PI * 2);
            ctx.fillStyle = light
                ? (isDimmed ? 'rgba(240, 240, 250, 0.8)' : 'rgba(255, 255, 255, 0.9)')
                : (isDimmed ? 'rgba(10, 10, 26, 0.6)' : 'rgba(10, 10, 26, 0.9)');
            ctx.fill();
            ctx.strokeStyle = catColor.replace('C', isDimmed ? '0.15' : (isHovered ? '0.9' : '0.4'));
            ctx.lineWidth = isHovered ? 2.5 : 1.5;
            ctx.stroke();

            // Label
            ctx.fillStyle = catColor.replace('C', isDimmed ? '0.25' : (isHovered ? '1' : '0.7'));
            ctx.font = `${isHovered ? '600' : '500'} ${isHovered ? 11 : 10}px Inter, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(n.name, n.x, n.y);
        });

        // Legend
        const legendY = canvas.height - 20;
        let legendX = 16;
        ctx.font = '500 10px Inter, sans-serif';
        Object.values(categories).forEach(cat => {
            ctx.beginPath();
            ctx.arc(legendX, legendY, 4, 0, Math.PI * 2);
            ctx.fillStyle = cat.color.replace('C', '0.7');
            ctx.fill();
            ctx.fillStyle = light ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.4)';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.fillText(cat.label, legendX + 8, legendY);
            legendX += ctx.measureText(cat.label).width + 24;
        });

        requestAnimationFrame(animate);
    }

    // Only start when section is in view
    const vizObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                requestAnimationFrame(animate);
                vizObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    vizObserver.observe(canvas.parentElement);
}

initTechBubbles();


// ================================================================
// ===== ENHANCEMENT: CLICK-TO-COPY EMAIL + TOAST =====
// ================================================================
function initCopyToClipboard() {
    const copyElements = document.querySelectorAll('[data-copy]');
    const toast = document.getElementById('toast');
    if (!toast) return;

    copyElements.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const text = el.getAttribute('data-copy');

            navigator.clipboard.writeText(text).then(() => {
                toast.classList.add('visible');
                setTimeout(() => toast.classList.remove('visible'), 3000);
            }).catch(() => {
                // Fallback
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                toast.classList.add('visible');
                setTimeout(() => toast.classList.remove('visible'), 3000);
            });
        });
    });
}

initCopyToClipboard();


// ================================================================
// ===== ENHANCEMENT: PARALLAX SCROLL DEPTH =====
// ================================================================
function initParallaxDepth() {
    if (window.innerWidth < 768) return;

    const parallaxCards = document.querySelectorAll('.highlight-card, .skill-category, .cert-card, .os-card');
    parallaxCards.forEach(card => card.classList.add('parallax-card'));

    let ticking = false;

    function updateParallax() {
        const scrollY = window.scrollY;

        parallaxCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const centerY = rect.top + rect.height / 2;
            const viewCenter = window.innerHeight / 2;
            const offset = (centerY - viewCenter) * 0.03;
            card.style.transform = `translateY(${offset}px)`;
        });

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
}

initParallaxDepth();


// ================================================================
// ===== ENHANCEMENT: RESUME PREVIEW MODAL =====
// ================================================================
function initResumeModal() {
    const downloadBtn = document.getElementById('downloadResume');
    const modal = document.getElementById('resumeModal');
    const closeBtn = document.getElementById('resumeModalClose');
    const closeBtnAlt = document.getElementById('resumeModalCloseBtn');

    if (!downloadBtn || !modal) return;

    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (closeBtnAlt) closeBtnAlt.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

initResumeModal();

// ================================================================
// ===== SCROLL PROGRESS BAR =====
// ================================================================
(function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = progress + '%';
    }, { passive: true });
})();

// ================================================================
// ===== CASE STUDY MODAL =====
// ================================================================
function initCaseStudyModal() {
    const overlay = document.getElementById('caseStudyModal');
    if (!overlay) return;

    const cards = document.querySelectorAll('.project-card[data-case-study]');
    const closeBtn = document.getElementById('csModalClose');
    const closeBtnBottom = document.getElementById('csModalCloseBtn');

    function openModal(card) {
        // Populate modal from data attributes
        document.getElementById('csModalTitle').textContent = card.dataset.csTitle || '';
        document.getElementById('csModalOrg').textContent = card.dataset.csOrg || '';
        document.getElementById('csModalProblem').textContent = card.dataset.csProblem || '';
        document.getElementById('csModalSolution').textContent = card.dataset.csSolution || '';

        // Badge
        const badge = document.getElementById('csModalBadge');
        badge.textContent = card.dataset.csOrg === 'Open Source' ? 'Open Source' : 'Production';

        // Architecture flow
        const archEl = document.getElementById('csModalArch');
        archEl.innerHTML = '';
        if (card.dataset.csArch) {
            const steps = card.dataset.csArch.split('→').map(s => s.trim());
            steps.forEach((step, i) => {
                if (i > 0) {
                    const arrow = document.createElement('span');
                    arrow.className = 'cs-arch-arrow';
                    arrow.textContent = '→';
                    archEl.appendChild(arrow);
                }
                const el = document.createElement('span');
                el.className = 'cs-arch-step';
                el.textContent = step;
                archEl.appendChild(el);
            });
        }

        // Impact metrics
        const impactEl = document.getElementById('csModalImpact');
        impactEl.innerHTML = '';
        if (card.dataset.csImpact) {
            card.dataset.csImpact.split('|').forEach(item => {
                const div = document.createElement('div');
                div.className = 'cs-impact-item';
                div.textContent = item.trim();
                impactEl.appendChild(div);
            });
        }

        // Tech tags
        const techEl = document.getElementById('csModalTech');
        techEl.innerHTML = '';
        if (card.dataset.csTech) {
            card.dataset.csTech.split(',').forEach(tech => {
                const span = document.createElement('span');
                span.className = 'tag';
                span.textContent = tech.trim();
                techEl.appendChild(span);
            });
        }

        // GitHub link
        const ghLink = document.getElementById('csModalGithub');
        if (card.dataset.csGithub) {
            ghLink.href = card.dataset.csGithub;
            ghLink.style.display = 'inline-flex';
        } else {
            ghLink.style.display = 'none';
        }

        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't open modal if clicking an external link
            if (e.target.closest('a')) return;
            openModal(card);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    closeBtnBottom.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeModal();
        }
    });
}

initCaseStudyModal();

// ================================================================
// ===== STAGGERED SCROLL REVEAL ANIMATIONS =====
// ================================================================
(function initStaggeredReveals() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');

                // Stagger children (cards inside grids)
                const cards = entry.target.querySelectorAll('.project-card, .cert-card, .skill-card, .article-card');
                cards.forEach((card, i) => {
                    card.style.animationDelay = (i * 100) + 'ms';
                });

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealEls.forEach(el => observer.observe(el));
})();

// ================================================================
// ===== MAGNETIC BUTTON EFFECT =====
// ================================================================
(function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn, .filter-btn, .skill-filter-btn');

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            // Subtle pull toward cursor (max ~4px)
            btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
})();

// ================================================================
// ===== 3D CARD TILT EFFECT =====
// ================================================================
(function initCardTilt() {
    const cards = document.querySelectorAll('.glass-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('tilting');
        });

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;  // 0 to 1
            const y = (e.clientY - rect.top) / rect.height;   // 0 to 1
            const tiltX = (y - 0.5) * -8;  // -4 to 4 degrees
            const tiltY = (x - 0.5) * 8;   // -4 to 4 degrees

            card.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
            card.style.boxShadow = `${tiltY * -2}px ${tiltX * 2}px 30px rgba(0, 212, 255, 0.12)`;
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('tilting');
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });
})();

// ================================================================
// ===== SMOOTH NAV ACTIVE TRACKING =====
// ================================================================
(function initActiveNavTracking() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                });
            }
        });
    }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

    sections.forEach(section => observer.observe(section));

    // Smooth scroll with offset for fixed navbar
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                const offset = 80; // navbar height
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
})();

// ================================================================
// ===== LIVE MEDIUM BLOG FEED =====
// ================================================================
(function initMediumFeed() {
    const feedContainer = document.getElementById('mediumFeed');
    const staticFeed = document.querySelector('.article-list-static');
    if (!feedContainer) return;

    const MEDIUM_USERNAME = 'kalluripradeep99';
    const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

    // Pinned featured articles (not on Medium RSS)
    const pinnedArticles = [
        {
            title: 'The Weekend Our Pipeline Processed the Same Data 47 Times',
            link: 'https://thenewstack.io/author/pradeep-kalluri/',
            badge: 'The New Stack ⭐',
            date: 'January 2026'
        }
    ];

    fetch(RSS_URL)
        .then(res => res.json())
        .then(data => {
            if (data.status !== 'ok' || !data.items || !data.items.length) {
                throw new Error('No articles found');
            }

            feedContainer.innerHTML = '';

            // Add pinned articles first
            pinnedArticles.forEach(article => {
                const card = document.createElement('a');
                card.href = article.link;
                card.target = '_blank';
                card.rel = 'noopener';
                card.className = 'medium-article-card featured';
                card.innerHTML = `
                    <span class="article-badge">${article.badge}</span>
                    <h4>${article.title}</h4>
                    <div class="article-meta-row">
                        <span>${article.date}</span>
                    </div>
                `;
                feedContainer.appendChild(card);
            });

            // Add Medium RSS articles
            data.items.slice(0, 6).forEach(article => {
                const date = new Date(article.pubDate);
                const dateStr = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

                const text = article.content || article.description || '';
                const wordCount = text.replace(/<[^>]*>/g, '').split(/\s+/).length;
                const readTime = Math.max(1, Math.ceil(wordCount / 200));

                // Check if it's an Apache Airflow article
                const isApache = article.title.toLowerCase().includes('airflow') ||
                    article.title.toLowerCase().includes('apache');

                const card = document.createElement('a');
                card.href = article.link;
                card.target = '_blank';
                card.rel = 'noopener';
                card.className = 'medium-article-card' + (isApache ? ' featured' : '');
                card.innerHTML = `
                    ${isApache ? '<span class="article-badge">Apache Airflow Official ⭐</span>' : ''}
                    <h4>${article.title}</h4>
                    <div class="article-meta-row">
                        <span>${dateStr}</span>
                        <span>·</span>
                        <span>${readTime} min read</span>
                    </div>
                `;
                feedContainer.appendChild(card);
            });
        })
        .catch(() => {
            feedContainer.style.display = 'none';
            if (staticFeed) staticFeed.style.display = 'block';
        });
})();
