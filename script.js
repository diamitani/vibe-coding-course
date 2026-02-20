/* ========================================
   VIBE CODING MASTERCLASS — Shared JS
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Mobile Nav Toggle ----
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
    });
  }

  // ---- Scroll Fade-in ----
  const faders = document.querySelectorAll('.fade-in');
  if (faders.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    faders.forEach(el => io.observe(el));
  }

  // ---- Active Nav Link ----
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === currentPage) a.classList.add('active');
  });

  // ---- Sidebar Scroll Spy ----
  const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
  if (sidebarLinks.length) {
    const sections = Array.from(sidebarLinks).map(a => {
      const id = a.getAttribute('href')?.replace('#', '');
      return id ? document.getElementById(id) : null;
    }).filter(Boolean);

    const spy = () => {
      const scrollY = window.scrollY + 150;
      let current = '';
      sections.forEach(s => {
        if (s.offsetTop <= scrollY) current = s.id;
      });
      sidebarLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
      });
    };
    window.addEventListener('scroll', spy, { passive: true });
    spy();
  }

  // ---- Showcase: Load from localStorage ----
  renderShowcase();

  // ---- Showcase: Filter buttons ----
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderShowcase(btn.dataset.filter);
    });
  });

  // ---- Showcase: form submit ----
  const form = document.getElementById('showcase-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      data.id = Date.now();
      data.date = new Date().toLocaleDateString();
      const items = JSON.parse(localStorage.getItem('showcase') || '[]');
      items.unshift(data);
      localStorage.setItem('showcase', JSON.stringify(items));
      form.reset();
      renderShowcase();
      showToast('Project submitted successfully!');
    });
  }
});

// ---- Render showcase cards ----
function renderShowcase(filter = 'all') {
  const grid = document.getElementById('showcase-grid');
  if (!grid) return;

  const items = JSON.parse(localStorage.getItem('showcase') || '[]');
  const filtered = filter === 'all' ? items : items.filter(i => i.lab === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 3rem; margin-bottom: 1rem;">🚀</p>
        <p style="font-size: 1.125rem; margin-bottom: 0.5rem;">No projects yet</p>
        <p style="font-size: 0.875rem;">Be the first to submit your work below!</p>
      </div>`;
    return;
  }

  const icons = { marketing: '🎨', ecommerce: '🛒', marketplace: '🏪' };
  const labels = { marketing: 'Marketing Site', ecommerce: 'E-Commerce', marketplace: 'Marketplace' };

  grid.innerHTML = filtered.map(item => `
    <div class="showcase-card fade-in visible">
      <div class="card-image">${icons[item.lab] || '🌐'}</div>
      <div class="card-body">
        <h3>${escapeHTML(item.title)}</h3>
        <p class="meta">${escapeHTML(item.name)} · ${escapeHTML(labels[item.lab] || item.lab)} · ${escapeHTML(item.tool)}</p>
        <div class="card-footer">
          <span class="tag">${escapeHTML(item.tool)}</span>
          <a href="${escapeHTML(item.url)}" target="_blank" rel="noopener" class="btn btn-secondary" style="padding:0.4rem 1rem;font-size:0.8rem;">View Project →</a>
        </div>
      </div>
    </div>`).join('');
}

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function showToast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, {
    position: 'fixed', bottom: '2rem', right: '2rem', background: 'var(--accent-emerald)',
    color: '#fff', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-full)',
    fontWeight: '600', fontSize: '0.875rem', zIndex: '9999',
    animation: 'fadeUp 0.4s var(--ease-out)'
  });
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.3s'; setTimeout(() => t.remove(), 300); }, 3000);
}
