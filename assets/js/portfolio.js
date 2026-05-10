(function () {
  'use strict';

  // ============================================================
  // 1. READING PROGRESS BAR
  // ============================================================
  function initProgressBar() {
    var bar = document.createElement('div');
    bar.id = 'reading-progress';
    document.body.insertBefore(bar, document.body.firstChild);

    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = Math.min(pct, 100) + '%';
    });
  }

  // ============================================================
  // 2. BACK TO TOP BUTTON
  // ============================================================
  function initBackToTop() {
    var btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '&#8679;';
    document.body.appendChild(btn);

    window.addEventListener('scroll', function () {
      if ((window.scrollY || document.documentElement.scrollTop) > 320) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============================================================
  // 3. SCROLL REVEAL ANIMATIONS
  // ============================================================
  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) return;

    var targets = document.querySelectorAll(
      '.page-content h2, .page-content h3, .page-content p, .page-content ul, .page-content blockquote, .page-content pre, .page-content hr'
    );

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('sr-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(function (el, i) {
      el.classList.add('sr-hidden');
      el.style.transitionDelay = (i % 4) * 60 + 'ms';
      observer.observe(el);
    });
  }

  // ============================================================
  // 4. ANIMATED COUNTERS
  // ============================================================
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateCounter(el, target, suffix, duration) {
    var startTime = null;
    function step(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      var value = Math.round(easeOutCubic(progress) * target);
      el.textContent = value.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    if (!('IntersectionObserver' in window)) return;

    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !entry.target.dataset.done) {
          entry.target.dataset.done = '1';
          var target = parseInt(entry.target.dataset.count, 10);
          var suffix = entry.target.dataset.suffix || '';
          animateCounter(entry.target, target, suffix, 1800);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  // ============================================================
  // 5. TYPING ANIMATION
  // ============================================================
  function initTypingEffect() {
    var el = document.getElementById('typing-text');
    if (!el) return;

    var phrases = [
      'Data Engineer',
      'Cloud Platform Builder',
      'Pipeline Architect',
      'Open Source Contributor',
      'Technical Writer',
      'DataOps Engineer'
    ];

    var phraseIdx = 0;
    var charIdx = 0;
    var deleting = false;

    function tick() {
      var phrase = phrases[phraseIdx];
      if (deleting) {
        charIdx--;
        el.textContent = phrase.substring(0, charIdx);
      } else {
        charIdx++;
        el.textContent = phrase.substring(0, charIdx);
      }

      var delay;
      if (!deleting && charIdx === phrase.length) {
        delay = 1800;
        deleting = true;
      } else if (deleting && charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        delay = 400;
      } else {
        delay = deleting ? 45 : 95;
      }

      setTimeout(tick, delay);
    }

    tick();
  }

  // ============================================================
  // 6. DARK MODE TOGGLE
  // ============================================================
  function initDarkMode() {
    var btn = document.createElement('button');
    btn.id = 'dark-mode-toggle';
    btn.setAttribute('aria-label', 'Toggle dark mode');
    btn.title = 'Toggle dark mode';
    btn.textContent = '🌙';

    // Insert at start of nav, or append to header
    var nav = document.querySelector('.site-nav');
    if (nav) {
      nav.insertBefore(btn, nav.firstChild);
    } else {
      var header = document.querySelector('.site-header');
      if (header) header.appendChild(btn);
    }

    if (localStorage.getItem('dk') === '1') {
      document.body.classList.add('dark-mode');
      btn.textContent = '☀️';
    }

    btn.addEventListener('click', function () {
      var dark = document.body.classList.toggle('dark-mode');
      btn.textContent = dark ? '☀️' : '🌙';
      localStorage.setItem('dk', dark ? '1' : '0');
    });
  }

  // ============================================================
  // 7. TECH STACK PILL BADGES
  // ============================================================
  function initTechTags() {
    // Find the Technical Stack h2
    var headings = document.querySelectorAll('.page-content h2');
    var techH2 = null;
    headings.forEach(function (h) {
      if (h.textContent.indexOf('Technical Stack') !== -1) techH2 = h;
    });
    if (!techH2) return;

    // Walk siblings until next h2
    var el = techH2.nextElementSibling;
    while (el && el.tagName !== 'H2') {
      if (el.tagName === 'P') {
        // Each <strong> is a category label; text after it (until next <strong>/br) are tags
        var html = el.innerHTML;

        // Replace the value portion (comma-separated text after <strong>...<\/strong>:) with badges
        html = html.replace(/(<strong>[^<]+<\/strong>:?\s*)([\s\S]*?)(?=<strong>|<br|$)/g, function (match, label, rest) {
          // Ignore empty rest
          var items = rest.replace(/<br\s*\/?>/gi, '').trim();
          if (!items) return match;

          var tags = items.split(',').map(function (t) {
            var clean = t.trim().replace(/&amp;/g, '&');
            if (!clean) return '';
            return '<span class="tech-tag">' + clean + '</span>';
          }).join('');

          return label + '<span class="tech-tag-group">' + tags + '</span>';
        });

        el.innerHTML = html;
        el.classList.add('tech-stack-row');
      }
      el = el.nextElementSibling;
    }
  }

  // ============================================================
  // 8. ACTIVE NAV LINK
  // ============================================================
  function initActiveNav() {
    var path = window.location.pathname.replace(/\/$/, '');
    var links = document.querySelectorAll('.site-nav .page-link');
    links.forEach(function (link) {
      var href = (link.getAttribute('href') || '').replace(/\/$/, '');
      if (href && path.endsWith(href)) {
        link.classList.add('nav-active');
      }
    });
  }

  // ============================================================
  // 9. SUBTLE PARTICLE EFFECT IN HEADER
  // ============================================================
  function initParticles() {
    var header = document.querySelector('.site-header');
    if (!header) return;

    // Make sure header has position relative/absolute context
    if (getComputedStyle(header).position === 'static') {
      header.style.position = 'relative';
    }

    var canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    header.insertBefore(canvas, header.firstChild);

    var ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = header.offsetWidth;
      canvas.height = header.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    var particles = [];
    for (var i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2.5 + 0.8,
        a: Math.random() * 0.35 + 0.08
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(function (p) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,' + p.a + ')';
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    draw();
  }

  // ============================================================
  // 10. HOVER GLOW ON SECTION HEADINGS
  // ============================================================
  function initSectionGlow() {
    document.querySelectorAll('.page-content h3').forEach(function (h3) {
      h3.classList.add('section-glow');
    });
  }

  // ============================================================
  // INIT
  // ============================================================
  document.addEventListener('DOMContentLoaded', function () {
    initProgressBar();
    initBackToTop();
    initScrollReveal();
    initCounters();
    initTypingEffect();
    initDarkMode();
    initTechTags();
    initActiveNav();
    initParticles();
    initSectionGlow();
  });
}());
