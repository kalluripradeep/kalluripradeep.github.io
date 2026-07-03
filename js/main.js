/* PK Control Room — shared behaviour */

/* ---------- active tab ---------- */
(() => {
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.tabs a').forEach(a => {
    const target = a.getAttribute('href');
    if (target === here || (here === '' && target === 'index.html')) {
      a.setAttribute('aria-current', 'page');
    }
  });
})();

/* ---------- telemetry counters ---------- */
(() => {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  els.forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    if (reduced) { el.textContent = target + suffix; return; }
    const t0 = performance.now(), dur = 1400;
    const tick = now => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
})();

/* ---------- pipeline canvas (home) ----------
   Particles flow Kafka → Airflow → Spark → dbt → Snowflake.
   Passing dbt upgrades them bronze → silver → gold (medallion). */
(() => {
  const canvas = document.getElementById('pipelineCanvas');
  if (!canvas) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ctx = canvas.getContext('2d');
  const DPR = Math.min(2, devicePixelRatio || 1);

  const STAGES = ['Kafka', 'Airflow', 'Spark', 'dbt', 'Snowflake'];
  const BRONZE = '#C08A5A', SILVER = '#B9C4CC', GOLD = '#F2C14E';
  const CYAN = '#4FD6DB', LINE = '#1C3947', TEXT = '#8FADB6';
  const MONO = '11px "IBM Plex Mono", monospace';

  let W, H, nodes, particles = [], processed = 0;
  const counterEl = document.getElementById('eventsProcessed');

  function layout() {
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W * DPR; canvas.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    const pad = Math.max(46, W * 0.06);
    const span = W - pad * 2;
    nodes = STAGES.map((label, i) => ({
      label,
      x: pad + (span * i) / (STAGES.length - 1),
      y: H * 0.46
    }));
  }

  function spawn() {
    particles.push({
      x: nodes[0].x - 30 - Math.random() * 40,
      y: nodes[0].y + (Math.random() - 0.5) * 26,
      v: 1.1 + Math.random() * 0.9,
      color: BRONZE,
      r: 2 + Math.random() * 1.6
    });
  }

  function step() {
    ctx.clearRect(0, 0, W, H);

    // rail
    ctx.strokeStyle = LINE;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(nodes[0].x, nodes[0].y);
    ctx.lineTo(nodes[nodes.length - 1].x, nodes[0].y);
    ctx.stroke();

    // particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.v;
      // medallion upgrades
      if (p.color === BRONZE && p.x > nodes[2].x) p.color = SILVER; // past Spark
      if (p.color === SILVER && p.x > nodes[3].x) p.color = GOLD;   // past dbt
      // gentle drift toward the rail
      p.y += (nodes[0].y - p.y) * 0.02;
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.9;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      if (p.x > nodes[nodes.length - 1].x + 26) {
        particles.splice(i, 1);
        processed++;
        if (counterEl) counterEl.textContent = processed.toLocaleString();
      }
    }

    // stations
    nodes.forEach((n, i) => {
      ctx.beginPath();
      ctx.fillStyle = '#0B1F29';
      ctx.strokeStyle = i === 3 ? GOLD : CYAN; // dbt ring gold: the transform stage
      ctx.lineWidth = 2;
      ctx.arc(n.x, n.y, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.fillStyle = i === 3 ? GOLD : CYAN;
      ctx.arc(n.x, n.y, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = TEXT;
      ctx.font = MONO;
      ctx.textAlign = 'center';
      ctx.fillText(n.label, n.x, n.y + 38);
    });

    if (!reduced) {
      if (Math.random() < 0.28) spawn();
      requestAnimationFrame(step);
    }
  }

  layout();
  addEventListener('resize', () => { layout(); });
  if (reduced) {
    // static frame with a few resting particles
    for (let i = 0; i < 14; i++) spawn();
    particles.forEach(p => { p.x = nodes[0].x + Math.random() * (nodes[4].x - nodes[0].x); });
    step();
  } else {
    step();
  }
})();

/* ---------- case-study modal (projects) ---------- */
(() => {
  const overlay = document.getElementById('csOverlay');
  if (!overlay) return;
  const modal = overlay.querySelector('.cs-modal');
  const q = id => overlay.querySelector(id);
  let lastFocus = null;

  function open(card) {
    lastFocus = document.activeElement;
    const d = card.dataset;
    q('#csTitle').textContent = d.csTitle;
    q('#csOrg').textContent = d.csOrg;
    q('#csProblem').textContent = d.csProblem;
    q('#csSolution').textContent = d.csSolution;
    q('#csArch').textContent = d.csArch;

    const shots = q('#csShots');
    shots.innerHTML = '';
    if (d.csImg) {
      d.csImg.split(',').map(s => s.trim()).filter(Boolean).forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = d.csTitle + ' — screenshot';
        img.loading = 'lazy';
        shots.appendChild(img);
      });
    }

    const impact = q('#csImpact');
    impact.innerHTML = '';
    (d.csImpact || '').split('|').forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      impact.appendChild(li);
    });

    const chips = q('#csTech');
    chips.innerHTML = '';
    (d.csTech || '').split(',').forEach(t => {
      const s = document.createElement('span');
      s.className = 'chip';
      s.textContent = t.trim();
      chips.appendChild(s);
    });

    const gh = q('#csGithub');
    if (d.csGithub) { gh.href = d.csGithub; gh.style.display = 'inline-block'; }
    else gh.style.display = 'none';

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    q('.cs-close').focus();
  }

  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  document.querySelectorAll('.proj-card').forEach(card => {
    card.addEventListener('click', () => open(card));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(card); }
    });
  });
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  q('.cs-close').addEventListener('click', close);
  addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('active')) close(); });

  // focus trap
  modal.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const focusables = modal.querySelectorAll('button, a[href]');
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
})();

/* ---------- copy email (contact) ---------- */
(() => {
  const btn = document.getElementById('copyEmail');
  if (!btn) return;
  btn.addEventListener('click', e => {
    e.preventDefault();
    navigator.clipboard.writeText('kalluripradeep99@gmail.com').then(() => {
      const hint = btn.querySelector('.hint');
      const prev = hint.textContent;
      hint.textContent = 'copied to clipboard ✓';
      setTimeout(() => { hint.textContent = prev; }, 1800);
    });
  });
})();
