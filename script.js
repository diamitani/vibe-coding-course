/* ========================================
   VIBE CODING MASTERCLASS — Shared JS
   ======================================== */

const CUSTOM_GPTS = [
  { name: 'Instruction Architect', desc: 'Setting the gold standard for AI system instruction design.', url: 'https://chatgpt.com/g/g-676964c88b088191b70dcd4133ae2595-1-system-instruction-architect', category: 'Expert GPT', tags: ['System Prompts', 'Logic'] },
  { name: '(PRD) Builder', desc: 'Generates PRDs, instructions, and custom resources.', url: 'https://chatgpt.com/g/g-67a465d99950819186563b257bac0d88-prd-product-requirements-document-builder', category: 'Expert GPT', tags: ['PRD', 'Planning'] },
  { name: 'SOP Architect', desc: 'Builds expert standard operating procedures.', url: 'https://chatgpt.com/g/g-68ae5f21a1608191bd68ed88850d7ab1-sop-architect-gpt', category: 'Expert GPT', tags: ['SOP', 'Operations'] },
  { name: 'GTM Engineer', desc: 'Builds secure GTM automations with Make/n8n blueprints.', url: 'https://chatgpt.com/g/g-68ae5687c9b881919c923a432f1fd086-gtm-engineer-automation-architect-gpt', category: 'Expert GPT', tags: ['Automation', 'Marketing'] },
  { name: 'KPI Architect', desc: 'Generates KPIs and activity metrics from business goals.', url: 'https://chatgpt.com/g/g-68ae5416b9848191831ef9943306451d-kpi-architect-gpt', category: 'Expert GPT', tags: ['KPI', 'Metrics'] },
  { name: 'Automation Architect', desc: 'Expert in Make, Zapier, n8n; builds custom automations.', url: 'https://chatgpt.com/g/g-681e8b22123881919856dcbd09b1765c-automation-architect', category: 'Expert GPT', tags: ['Make', 'n8n', 'Zapier'] },
  { name: 'v0.dev App Builder', desc: 'Delivers exactly 10 v0.dev prompts to build full stack app MVPs.', url: 'https://chatgpt.com/g/g-681685f291a48191a687c6dac28f4412-v0-dev-full-stack-app-builder', category: 'Expert GPT', tags: ['v0', 'App Builder'] },
  { name: 'Replit Builder', desc: 'Formats and refines prompts for efficient Replit project building.', url: 'https://chatgpt.com/g/g-67ebbfd9befc819187ed1174fd1d8289-replit-builder', category: 'Expert GPT', tags: ['Replit', 'Prompts'] },
  { name: 'PromptBuilder V2', desc: 'Breaks down app ideas into modular prompts for lovable.dev.', url: 'https://chatgpt.com/g/g-67ebbfd7c70c8191b0842c96d89af2ac-promptbuilder-architect-v2', category: 'Expert GPT', tags: ['Lovable', 'Architecture'] },
  { name: 'Site Mapper', desc: 'Converts app ideas into site maps, page specs, and prompts.', url: 'https://chatgpt.com/g/g-6865e200d8008191a43209a30d350ad2-site-mapper', category: 'Expert GPT', tags: ['Sitemap', 'UX'] },
  { name: 'Jobs to be Done', desc: 'Transforms prompts into AI-ready JTBD blueprints.', url: 'https://chatgpt.com/g/g-6802c7da3c688191875f67a5468d82e2-jobs-to-be-done', category: 'Expert GPT', tags: ['JTBD', 'Strategy'] },
  { name: 'Custom GPT Guide', desc: 'A step-by-step tutorial guide for building custom GPTs.', url: 'https://chatgpt.com/g/g-681003e70b4081919f5c7accc1096e21-custom-gpt-guide', category: 'Expert GPT', tags: ['Guides'] },
  { name: 'Full Stack Copilot', desc: 'Scaffolds components using React, Tailwind, and full-stack logic.', url: 'https://chatgpt.com/g/g-681003e70b4081919f5c7accc1096e21-custom-gpt-guide', category: 'Expert GPT', tags: ['React', 'Fullstack'] },
  { name: 'GPT Creator Pro', desc: 'Advanced GPT architect specializing in prompt optimization.', url: 'https://chatgpt.com/g/g-s9YtL560v-gpt-creator-pro', category: 'Expert GPT', tags: ['Optimizer', 'Advanced'] }
];

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
        if (s && s.offsetTop <= scrollY) current = s.id;
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

  // ---- Wizards ----
  initWizard();
});

// ========================================
// REPROMPT AGENT LOGIC
// ========================================

function startReprompt() {
  const input = document.getElementById('prompt-input').value;
  if (!input) { showToast('Please enter your idea first!'); return; }

  const statusEl = document.getElementById('lab-status');
  const resultEl = document.getElementById('lab-result');
  const outputEl = document.getElementById('prompt-output');
  const toolsEl = document.getElementById('recommended-gpts');

  statusEl.classList.add('visible');
  resultEl.style.display = 'none';

  // Step 1: Extract Intent
  updateStep(1, 'Extracting Intent...');

  setTimeout(() => {
    const intent = analyzeIntent(input);
    updateStep(1, 'Intent Extracted: ' + intent.type, true);

    // Step 2: Reference & Hypothesis
    updateStep(2, 'Generating Hypothesis...');
    setTimeout(() => {
      updateStep(2, 'Hypothesis: ' + intent.hypothesis, true);

      // Step 3: Generate Prompt
      updateStep(3, 'Building Master Prompt...');
      setTimeout(() => {
        const masterPrompt = buildMasterPrompt(input, intent);
        outputEl.value = masterPrompt;
        updateStep(3, 'Master Prompt Generated', true);

        // Step 4: Assign Prompt
        updateStep(4, 'Matching Expert Tools...');
        setTimeout(() => {
          const recs = matchGpts(intent);
          toolsEl.innerHTML = recs.map(g => `
            <a href="${g.url}" target="_blank" class="gpt-rec-card">
              <strong>${g.name}</strong>
              <p>${g.desc}</p>
            </a>
          `).join('');
          updateStep(4, 'Tools Assigned', true);

          resultEl.style.display = 'block';
          resultEl.classList.add('fade-in', 'visible');
          showToast('Reprompt Agent Complete! ⚡');
        }, 800);
      }, 1000);
    }, 800);
  }, 1000);
}

function updateStep(step, text, finished = false) {
  const el = document.querySelector(`.step-indicator[data-step="${step}"]`);
  if (!el) return;
  el.querySelector('.step-text').textContent = text;
  if (finished) el.classList.add('finished');
}

function analyzeIntent(input) {
  const low = input.toLowerCase();
  let type = 'Generic App';
  let hypothesis = 'Build a modern web application with polished UI.';
  let category = 'Development';

  if (low.includes('sale') || low.includes('gtm') || low.includes('market')) {
    type = 'Marketing/GTM';
    hypothesis = 'Create a growth strategy and landing page to drive conversions.';
    category = 'Marketing';
  } else if (low.includes('bot') || low.includes('agent') || low.includes('automate')) {
    type = 'AI Automation';
    hypothesis = 'Build an autonomous agent or workflow for efficiency.';
    category = 'Automation';
  } else if (low.includes('store') || low.includes('ecommerce') || low.includes('shop')) {
    type = 'E-Commerce';
    hypothesis = 'Develop a secure store with product listings and checkout flow.';
    category = 'E-Commerce';
  }

  return { type, hypothesis, category };
}

function buildMasterPrompt(input, intent) {
  return `### AI AGENT INSTRUCTION
Role: Principal Product Engineer & Prompt Architect
Context: ${input}

GOAL: Build a high-fidelity ${intent.type} that follows the "Vibe Coding" paradigm.

GUIDELINES:
1. Extract core functionality: ${intent.hypothesis}
2. Apply tool-specific best practices (OpenAI/Claude/Gemini).
3. Use situation-specific patterns for ${intent.category}.

SPECIFIC REQUIREMENTS:
- Mobile-first, responsive design.
- Clean code architecture following modern standards.
- Interactive elements and smooth transitions.

NEXT ACTIONS:
1. Brainstorm the technical stack.
2. Outline the PRD (Product Requirements Document).
3. Generate the implementation code.`;
}

function matchGpts(intent) {
  const filtered = CUSTOM_GPTS.filter(g => {
    if (intent.category === 'Marketing') return g.tags.includes('Marketing') || g.tags.includes('Strategy');
    if (intent.category === 'Automation') return g.tags.includes('Automation') || g.tags.includes('Make');
    if (intent.category === 'Development') return g.tags.includes('v0') || g.tags.includes('Fullstack');
    return g.tags.includes('Planning') || g.tags.includes('Strategy');
  });
  return (filtered.length > 0 ? filtered : CUSTOM_GPTS).slice(0, 3);
}

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

function copyPrompt() {
  const text = document.getElementById('prompt-output').value;
  navigator.clipboard.writeText(text).then(() => {
    showToast('Prompt copied to clipboard! 📋');
  });
}

// ========================================
// WIZARD
// ========================================

function initWizard() {
  const containers = document.querySelectorAll('.wizard-container');
  containers.forEach(container => {
    const steps = container.querySelectorAll('.wizard-step');
    const dotsContainer = container.querySelector('.wizard-progress');
    if (!steps.length) return;

    // Create dots
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      steps.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'progress-dot' + (i === 0 ? ' active' : '');
        dotsContainer.appendChild(dot);
      });
    }

    // Set first active
    steps.forEach(s => s.classList.remove('active'));
    steps[0].classList.add('active');
  });
}

window.nextWizardStep = function (containerId, nextIndex) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const steps = container.querySelectorAll('.wizard-step');
  const dots = container.querySelectorAll('.progress-dot');

  steps.forEach((s, idx) => {
    s.classList.remove('active');
    if (idx === nextIndex) s.classList.add('active');
  });

  if (dots.length > 0) {
    dots.forEach((d, idx) => {
      d.classList.remove('active');
      if (idx < nextIndex) d.classList.add('completed');
      if (idx === nextIndex) d.classList.add('active');
    });
  }
};

