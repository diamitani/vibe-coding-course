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

  // ---- Update auth UI across all pages ----
  updateAuthNav();

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

  // ---- Signup form ----
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = signupForm.querySelector('input[type=email]').value;
      const list = JSON.parse(localStorage.getItem('signupList') || '[]');
      if (list.includes(email)) { showToast('You\'re already on the list!'); return; }
      list.push(email);
      localStorage.setItem('signupList', JSON.stringify(list));
      signupForm.reset();
      showToast('You\'re on the list! 🎉');
    });
  }
});

// ========================================
// AUTH SYSTEM
// ========================================

function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return 'h_' + Math.abs(hash).toString(36);
}

function getUsers() {
  return JSON.parse(localStorage.getItem('vc_users') || '[]');
}

function saveUsers(users) {
  localStorage.setItem('vc_users', JSON.stringify(users));
}

function getCurrentUser() {
  const id = localStorage.getItem('vc_session');
  if (!id) return null;
  return getUsers().find(u => u.id === id) || null;
}

function registerUser(name, email, password) {
  const users = getUsers();
  if (users.find(u => u.email === email)) return { error: 'Email already registered' };
  const user = {
    id: 'u_' + Date.now().toString(36),
    name,
    email,
    passwordHash: simpleHash(password),
    avatar: ['🧑‍💻', '👩‍💻', '🧙', '🚀', '🎨', '🤖', '⚡', '🔮', '🌟', '💎'][Math.floor(Math.random() * 10)],
    bio: '',
    vibeType: 'Explorer',
    tools: [],
    projects: [],
    joinDate: new Date().toLocaleDateString()
  };
  users.push(user);
  saveUsers(users);
  localStorage.setItem('vc_session', user.id);
  return { user };
}

function loginUser(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email === email);
  if (!user) return { error: 'No account found with this email' };
  if (user.passwordHash !== simpleHash(password)) return { error: 'Incorrect password' };
  localStorage.setItem('vc_session', user.id);
  return { user };
}

function logoutUser() {
  localStorage.removeItem('vc_session');
  window.location.href = 'index.html';
}

function updateUser(updates) {
  const users = getUsers();
  const idx = users.findIndex(u => u.id === getCurrentUser()?.id);
  if (idx === -1) return;
  users[idx] = { ...users[idx], ...updates };
  saveUsers(users);
}

function getUserById(id) {
  return getUsers().find(u => u.id === id) || null;
}

function addProject(project) {
  const user = getCurrentUser();
  if (!user) return;
  const users = getUsers();
  const idx = users.findIndex(u => u.id === user.id);
  project.id = 'p_' + Date.now().toString(36);
  project.date = new Date().toLocaleDateString();
  users[idx].projects = users[idx].projects || [];
  users[idx].projects.unshift(project);
  saveUsers(users);
}

function deleteProject(projectId) {
  const user = getCurrentUser();
  if (!user) return;
  const users = getUsers();
  const idx = users.findIndex(u => u.id === user.id);
  users[idx].projects = (users[idx].projects || []).filter(p => p.id !== projectId);
  saveUsers(users);
}

// ---- Auth Nav Update ----
function updateAuthNav() {
  const user = getCurrentUser();
  const authSlot = document.getElementById('auth-nav-slot');
  if (!authSlot) return;

  if (user) {
    authSlot.innerHTML = `
      <a href="dashboard.html" class="nav-links-item" style="display:flex;align-items:center;gap:6px;">
        <span class="user-avatar-small">${user.avatar}</span>
        <span style="font-size:0.8125rem;">${escapeHTML(user.name.split(' ')[0])}</span>
      </a>`;
  } else {
    authSlot.innerHTML = `<a href="auth.html" style="font-size:0.8125rem;">Sign In</a>`;
  }
}

// ========================================
// SHOWCASE
// ========================================

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

// ========================================
// UTILITIES
// ========================================

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
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
