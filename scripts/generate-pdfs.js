const puppeteer = require('puppeteer');
const marked = require('marked');
const fs = require('fs');
const path = require('path');

const BRAND = {
  primary: '#8b5cf6',
  cyan: '#06b6d4',
  emerald: '#10b981',
  magenta: '#ec4899',
  amber: '#f59e0b',
  bg: '#0a0a0f',
  bgCard: '#111118',
  bgElevated: '#1a1a28',
  text: '#f0f0f5',
  textSecondary: '#9494a8',
  textMuted: '#5a5a72',
  logo: `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="52" viewBox="0 0 760 220" fill="none">
    <g transform="translate(10,10)">
      <rect x="18" y="8" width="24" height="88" rx="12" fill="#5B5CF0" transform="rotate(-34 30 52)"/>
      <rect x="56" y="8" width="24" height="54" rx="12" fill="#22C7B8" transform="rotate(34 68 35)"/>
      <circle cx="74" cy="82" r="10" fill="#22C7B8"/>
    </g>
    <text x="100" y="115" font-family="Inter, sans-serif" font-size="68" font-weight="700" fill="white">Let\u2019s Vibe AI</text>
  </svg>`,
  logoDark: `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="52" viewBox="0 0 760 220" fill="none">
    <g transform="translate(10,10)">
      <rect x="18" y="8" width="24" height="88" rx="12" fill="#5B5CF0" transform="rotate(-34 30 52)"/>
      <rect x="56" y="8" width="24" height="54" rx="12" fill="#22C7B8" transform="rotate(34 68 35)"/>
      <circle cx="74" cy="82" r="10" fill="#22C7B8"/>
    </g>
    <text x="100" y="115" font-family="Inter, sans-serif" font-size="68" font-weight="700" fill="#0A1020">Let\u2019s Vibe AI</text>
  </svg>`
};

const OUT_DIR = path.join(__dirname, '..', 'ebooks');

function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return null;
  }
}

function stripFrontmatter(md) {
  return md.replace(/^---[\s\S]*?---\n*/, '');
}

function createCoverHTML({ title, subtitle, date }) {
  return `
  <section class="cover-page">
    <div class="cover-gradient"></div>
    <div class="cover-content">
      <div class="cover-logo">${BRAND.logo}</div>
      <div class="cover-spacer"></div>
      <h1 class="cover-title">${title}</h1>
      ${subtitle ? `<p class="cover-subtitle">${subtitle}</p>` : ''}
      <div class="cover-divider"></div>
      <p class="cover-tagline">Learn AI. Build With It. Ship Real Products.</p>
      <p class="cover-date">${date}</p>
    </div>
    <div class="cover-footer-brand">
      <span class="brand-dot" style="background:${BRAND.primary}"></span>
      <span class="brand-dot" style="background:${BRAND.cyan}"></span>
      <span class="brand-dot" style="background:${BRAND.emerald}"></span>
      <span class="brand-dot" style="background:${BRAND.magenta}"></span>
      <span>letsvibeai.com</span>
    </div>
  </section>`;
}

function createTOC(items) {
  if (!items || items.length === 0) return '';
  return `
  <section class="toc-page">
    <h2 class="toc-title">Contents</h2>
    <div class="toc-divider"></div>
    <ul class="toc-list">
      ${items.map((item, i) => `<li class="toc-item"><span class="toc-num">${String(i + 1).padStart(2, '0')}</span><span class="toc-label">${item}</span></li>`).join('')}
    </ul>
  </section>`;
}

function createHeader(title) {
  return `
  <div class="page-header">
    <div class="header-logo">${BRAND.logo}</div>
    <span class="header-title">${title}</span>
  </div>`;
}

function createFooter() {
  return `
  <div class="page-footer">
    <span>Let\u2019s Vibe AI \u2014 Vibe Coding Masterclass</span>
    <span>letsvibeai.com</span>
  </div>`;
}

function wrapHTML({ title, body }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');

  @page {
    size: A4;
    margin: 0;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: ${BRAND.bg};
    color: ${BRAND.text};
    line-height: 1.7;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* ===== COVER PAGE ===== */
  .cover-page {
    position: relative;
    width: 210mm;
    height: 297mm;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
    page-break-after: always;
    background: ${BRAND.bg};
  }

  .cover-gradient {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(ellipse at 30% 20%, rgba(139,92,246,0.15) 0%, transparent 50%),
                radial-gradient(ellipse at 70% 80%, rgba(6,182,212,0.1) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 50%, rgba(236,72,153,0.08) 0%, transparent 50%);
    pointer-events: none;
  }

  .cover-content {
    position: relative;
    z-index: 1;
    padding: 60px;
    max-width: 80%;
  }

  .cover-logo { margin-bottom: 60px; }

  .cover-spacer { height: 40px; }

  .cover-title {
    font-size: 42px;
    font-weight: 800;
    line-height: 1.2;
    background: linear-gradient(135deg, #c084fc, #22d3ee, #f472b6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 20px;
  }

  .cover-subtitle {
    font-size: 20px;
    color: ${BRAND.textSecondary};
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  .cover-divider {
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, ${BRAND.primary}, ${BRAND.cyan});
    margin: 20px auto;
    border-radius: 2px;
  }

  .cover-tagline {
    font-size: 16px;
    color: ${BRAND.textMuted};
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .cover-date {
    font-size: 14px;
    color: ${BRAND.textMuted};
  }

  .cover-footer-brand {
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 13px;
    color: ${BRAND.textMuted};
    letter-spacing: 0.5px;
  }

  .cover-footer-brand .brand-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  /* ===== TABLE OF CONTENTS ===== */
  .toc-page {
    page-break-after: always;
    padding: 60px 80px;
    background: ${BRAND.bg};
  }

  .toc-title {
    font-size: 28px;
    font-weight: 700;
    color: ${BRAND.text};
    margin-bottom: 12px;
  }

  .toc-divider {
    width: 60px;
    height: 3px;
    background: ${BRAND.primary};
    border-radius: 2px;
    margin-bottom: 40px;
  }

  .toc-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .toc-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 10px 16px;
    background: ${BRAND.bgCard};
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.04);
    transition: background 0.2s;
  }

  .toc-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    color: ${BRAND.primary};
    font-weight: 600;
    min-width: 28px;
  }

  .toc-label {
    font-size: 15px;
    color: ${BRAND.textSecondary};
    font-weight: 500;
  }

  /* ===== CONTENT PAGES ===== */
  .page-header {
    position: running(pageHeader);
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 40px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }

  .header-logo svg { height: 20px; width: auto; }

  .header-title {
    font-size: 11px;
    color: ${BRAND.textMuted};
    margin-left: auto;
  }

  .page-footer {
    position: running(pageFooter);
    display: flex;
    justify-content: space-between;
    padding: 6px 40px;
    font-size: 10px;
    color: ${BRAND.textMuted};
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  .content-page {
    padding: 50px 60px;
    page-break-after: always;
  }

  /* Typography */
  h1 {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 20px;
    background: linear-gradient(135deg, #c084fc, #22d3ee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.3;
  }

  h2 {
    font-size: 22px;
    font-weight: 700;
    color: ${BRAND.text};
    margin-top: 40px;
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 2px solid rgba(139,92,246,0.2);
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: ${BRAND.cyan};
    margin-top: 28px;
    margin-bottom: 12px;
  }

  h4 {
    font-size: 16px;
    font-weight: 600;
    color: ${BRAND.textSecondary};
    margin-top: 20px;
    margin-bottom: 8px;
  }

  h5 {
    font-size: 14px;
    font-weight: 600;
    color: ${BRAND.emerald};
    margin-top: 16px;
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 1.7;
    color: ${BRAND.textSecondary};
  }

  strong { color: ${BRAND.text}; font-weight: 600; }

  ul, ol {
    margin: 8px 0 16px 20px;
    color: ${BRAND.textSecondary};
    font-size: 14px;
    line-height: 1.7;
  }

  li { margin-bottom: 6px; }

  li strong { color: ${BRAND.text}; }

  code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    background: rgba(139,92,246,0.12);
    color: ${BRAND.cyan};
    padding: 2px 6px;
    border-radius: 4px;
  }

  pre {
    background: ${BRAND.bgElevated};
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 10px;
    padding: 20px;
    margin: 16px 0;
    overflow-x: auto;
    font-size: 12px;
    line-height: 1.6;
  }

  pre code {
    background: none;
    padding: 0;
    color: ${BRAND.textSecondary};
    font-size: 12px;
  }

  blockquote {
    border-left: 3px solid ${BRAND.primary};
    padding: 12px 20px;
    margin: 16px 0;
    background: rgba(139,92,246,0.06);
    border-radius: 0 8px 8px 0;
    color: ${BRAND.textSecondary};
    font-style: italic;
  }

  hr {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent);
    margin: 32px 0;
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 16px 0;
    font-size: 13px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.06);
  }

  th {
    background: rgba(139,92,246,0.15);
    color: ${BRAND.text};
    font-weight: 600;
    padding: 10px 14px;
    text-align: left;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  td {
    padding: 9px 14px;
    color: ${BRAND.textSecondary};
    border-top: 1px solid rgba(255,255,255,0.04);
  }

  tr:nth-child(even) td {
    background: rgba(255,255,255,0.02);
  }

  /* Section dividers */
  .section-break {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin: 40px 0 20px;
    color: ${BRAND.textMuted};
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .section-break::before,
  .section-break::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(139,92,246,0.2));
  }

  .section-break::after {
    background: linear-gradient(90deg, rgba(139,92,246,0.2), transparent);
  }

  /* Info boxes */
  .info-box {
    background: rgba(6,182,212,0.08);
    border: 1px solid rgba(6,182,212,0.15);
    border-radius: 10px;
    padding: 16px 20px;
    margin: 16px 0;
  }

  .info-box strong {
    color: ${BRAND.cyan};
  }

  .tip-box {
    background: rgba(16,185,129,0.08);
    border: 1px solid rgba(16,185,129,0.15);
    border-radius: 10px;
    padding: 16px 20px;
    margin: 16px 0;
  }

  .tip-box strong {
    color: ${BRAND.emerald};
  }

  .warning-box {
    background: rgba(245,158,11,0.08);
    border: 1px solid rgba(245,158,11,0.15);
    border-radius: 10px;
    padding: 16px 20px;
    margin: 16px 0;
  }

  .warning-box strong {
    color: ${BRAND.amber};
  }

  /* Images */
  img {
    max-width: 100%;
    border-radius: 8px;
    margin: 16px 0;
  }

  /* Links */
  a {
    color: ${BRAND.cyan};
    text-decoration: none;
  }

  a:hover { color: ${BRAND.primary}; }

  /* For PDF running elements */
  @media print {
    body { margin: 0; }
    .cover-page, .toc-page, .content-page { page-break-after: always; }
    h1, h2, h3, h4 { page-break-after: avoid; }
    pre, blockquote, table { page-break-inside: avoid; }
  }
</style>
</head>
<body>
  ${body}
</body>
</html>`;
}

async function generatePDF(browser, { title, subtitle, tocItems, contentHTML, outputFile, date }) {
  const cover = createCoverHTML({ title, subtitle, date });
  const toc = createTOC(tocItems);
  const body = cover + toc + contentHTML;
  const html = wrapHTML({ title, body });

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0', timeout: 30000 });

  const filePath = path.join(OUT_DIR, outputFile);
  await page.pdf({
    path: filePath,
    format: 'A4',
    margin: { top: '60px', bottom: '40px', left: '40px', right: '40px' },
    printBackground: true,
    displayHeaderFooter: false,
    preferCSSPageSize: true,
  });

  await page.close();
  console.log(`  ✓ ${outputFile}`);
  return filePath;
}

const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

async function main() {
  console.log('Starting PDF generation...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {

    /* ================================================================
       1. MASTER CURRICULUM
       ================================================================ */
    console.log('Generating Master Curriculum...');
    const curriculumMD = readFile(path.join(__dirname, '..', 'curriculum/00_MASTER_CURRICULUM.md')) || '';
    const curriculumHTML = marked.parse(stripFrontmatter(curriculumMD));

    const masterCurriculumContent = `
    <div class="content-page">
      <h1>Vibe Coding Masterclass</h1>
      <h2>Complete Curriculum</h2>
      ${curriculumHTML}

      <div class="info-box">
        <strong>Last Updated:</strong> ${today} — Curriculum includes latest AI developments through early 2026.
      </div>

      <h2>Recent Updates & Current Landscape (Early 2026)</h2>
      <p>The AI development landscape continues to evolve rapidly. Key developments that complement this curriculum:</p>
      <ul>
        <li><strong>Claude 4 Series:</strong> Anthropic's latest models offer enhanced reasoning, longer context windows (500K tokens), and improved code generation quality</li>
        <li><strong>GPT-5:</strong> OpenAI's next-generation model with native multimodal reasoning, improved agent capabilities, and reduced hallucination rates</li>
        <li><strong>DeepSeek R2:</strong> China's leading open-weight model challenging frontier models at a fraction of the cost</li>
        <li><strong>AI-Native IDEs:</strong> Cursor, Windsurf, and Claude Code have become the standard development environment for professional developers</li>
        <li><strong>Agentic Workflows:</strong> Multi-agent systems (CrewAI, AutoGen, LangGraph) now handle complex enterprise workflows autonomously</li>
        <li><strong>Reasoning Models:</strong> Chain-of-thought and test-time compute scaling have dramatically improved output quality</li>
      </ul>
    </div>`;

    await generatePDF(browser, {
      title: 'Vibe Coding Masterclass',
      subtitle: 'Complete Curriculum — Learn AI. Build With It. Ship Real Products.',
      tocItems: [
        'Curriculum Overview & Structure',
        'Foundations — 6 Modules',
        'Project Labs — 3 Builds',
        'Supplementary Lessons — Article-Based',
        'Ten-Day AI Bootcamp',
        'Learning Objectives & Assessment',
        'Current Landscape (Early 2026)'
      ],
      contentHTML: masterCurriculumContent,
      outputFile: 'Vibe_Coding_Masterclass_-_Complete_Curriculum.pdf',
      date: today
    });

    /* ================================================================
       2. FOUNDATIONS — MODULES 1-3
       ================================================================ */
    console.log('Generating Foundations: Modules 1-3...');
    const foundationsMD = readFile(path.join(__dirname, '..', 'curriculum/01_FOUNDATIONS_MODULES.md')) || '';

    const module1End = foundationsMD.indexOf('## Module 2');
    const module2End = foundationsMD.indexOf('## Module 4');
    const module3Content = foundationsMD.substring(module2End);

    const module1Markdown = stripFrontmatter(foundationsMD.substring(0, module1End));
    const module2Markdown = stripFrontmatter(foundationsMD.substring(module1End, module2End));
    const module3MD = stripFrontmatter(module3Content);

    const m1HTML = marked.parse(module1Markdown);
    const m2HTML = marked.parse(module2Markdown);
    const m3HTML = marked.parse(module3MD);

    const modules1to3Content = `
    <div class="content-page">
      <section>
        ${m1HTML}
      </section>
    </div>
    <div class="content-page">
      <section>
        ${m2HTML}
      </section>
    </div>
    <div class="content-page">
      <section>
        ${m3HTML}
      </section>
    </div>`;

    await generatePDF(browser, {
      title: 'Foundations — Modules 1 to 3',
      subtitle: 'What Is AI · What Is Vibe Coding · The Toolkit',
      tocItems: [
        'Module 1: What Is AI? — Machine Learning, LLMs, Tokens, Context Windows',
        'Module 2: What Is Vibe Coding? — The Four-Step Loop, Paradigm Shift',
        'Module 3: The Toolkit — Hosted Builders, AI IDEs, CLI Agents, Your Stack'
      ],
      contentHTML: modules1to3Content,
      outputFile: 'Foundations_-_Modules_1-3_-_AI_Vibe_Coding_Toolkit.pdf',
      date: today
    });

    /* ================================================================
       3. FOUNDATIONS — MODULES 4-6
       ================================================================ */
    console.log('Generating Foundations: Modules 4-6...');

    const module4End = foundationsMD.indexOf('## Module 5');
    const module5End = foundationsMD.indexOf('## Module 6');

    const module4MD = stripFrontmatter(foundationsMD.substring(module2End, module4End));
    const module5MD = stripFrontmatter(foundationsMD.substring(module4End, module5End));
    const module6MD = stripFrontmatter(foundationsMD.substring(module5End));

    const m4HTML = marked.parse(module4MD);
    const m5HTML = marked.parse(module5MD);
    const m6HTML = marked.parse(module6MD);

    const modules4to6Content = `
    <div class="content-page">
      <section>
        ${m4HTML}
      </section>
    </div>
    <div class="content-page">
      <section>
        ${m5HTML}
      </section>
    </div>
    <div class="content-page">
      <section>
        ${m6HTML}
      </section>
    </div>`;

    await generatePDF(browser, {
      title: 'Foundations — Modules 4 to 6',
      subtitle: 'Prompt Chaining · Context Engineering · Process Engineering',
      tocItems: [
        'Module 4: Prompt Chaining — Chain Patterns, Error Handling, Context Seeding',
        'Module 5: Context Engineering — Token Budgeting, Structuring, Iterative Refinement',
        'Module 6: Process Engineering — Quality Gates, Scaling to Teams, Automation'
      ],
      contentHTML: modules4to6Content,
      outputFile: 'Foundations_-_Modules_4-6_-_Prompt_Context_Process.pdf',
      date: today
    });

    /* ================================================================
       4. PROJECT LABS
       ================================================================ */
    console.log('Generating Project Labs...');
    const labsMD = readFile(path.join(__dirname, '..', 'curriculum/02_PROJECT_LABS.md')) || '';

    const lab1End = labsMD.indexOf('## Lab 2');
    const lab2End = labsMD.indexOf('## Lab 3');

    const lab1MD = stripFrontmatter(labsMD.substring(0, lab1End));
    const lab2MD = stripFrontmatter(labsMD.substring(lab1End, lab2End));
    const lab3MD = stripFrontmatter(labsMD.substring(lab2End));

    const lab1HTML = marked.parse(lab1MD);
    const lab2HTML = marked.parse(lab2MD);
    const lab3HTML = marked.parse(lab3MD);

    const labsContent = `
    <div class="content-page">
      <h1>Project Labs Overview</h1>
      <p>Three hands-on projects that transform module knowledge into deployed, portfolio-ready applications. Each lab follows a consistent structure and increases in complexity.</p>
      <div class="info-box">
        <strong>Progression:</strong> Lab 1 (Beginner, ~4h) → Lab 2 (Intermediate, ~6h) → Lab 3 (Advanced, ~8h). Complete in order or jump to your level.
      </div>
      <p><strong>Updated for 2026:</strong> All labs now include options for Claude 4, GPT-5, and latest AI IDE tooling. Deployment guidance updated for current Vercel, Netlify, and Railway platforms.</p>
    </div>
    <div class="content-page">
      <section>
        ${lab1HTML}
      </section>
    </div>
    <div class="content-page">
      <section>
        ${lab2HTML}
      </section>
    </div>
    <div class="content-page">
      <section>
        ${lab3HTML}
      </section>
    </div>`;

    await generatePDF(browser, {
      title: 'Project Labs — 3 Hands-On Builds',
      subtitle: 'Marketing Website · E-Commerce Store · Directory/Marketplace',
      tocItems: [
        'Lab 1: Build a Marketing Website (Beginner, ~4h)',
        'Lab 2: Build an E-Commerce Store (Intermediate, ~6h)',
        'Lab 3: Build a Directory/Marketplace (Advanced, ~8h)',
        'Stretch Goals & Assessment Criteria for Each Lab'
      ],
      contentHTML: labsContent,
      outputFile: 'Project_Labs_-_3_Hands-On_Builds.pdf',
      date: today
    });

    /* ================================================================
       5. TEN-DAY AI BOOTCAMP
       ================================================================ */
    console.log('Generating 10-Day AI Bootcamp...');
    const bootcampMD = readFile(path.join(__dirname, '..', 'curriculum/03_10_DAY_AI_BOOTCAMP.md')) || '';
    const bootcampHTML = marked.parse(stripFrontmatter(bootcampMD));

    const bootcampContent = `
    <div class="content-page">
      <h1>Ten-Day AI Bootcamp</h1>
      <p>Transform from AI novice to confident builder in 10 days. This structured program condenses the full Vibe Coding Masterclass into daily sessions designed for maximum velocity.</p>
      <div class="tip-box">
        <strong>Outcome:</strong> A deployed, portfolio-ready project and the skills to continue building independently.
      </div>

      ${bootcampHTML}

      <h2>2026 Bootcamp Updates</h2>
      <p>The following updates reflect the current AI landscape:</p>
      <ul>
        <li><strong>Day 1 (AI Foundations):</strong> Updated model landscape includes Claude 4, GPT-5, DeepSeek R2, Gemini 2.5 — hands-on comparison across 4 frontier models</li>
        <li><strong>Day 3 (Tool Familiarization):</strong> Updated tool list — Cursor now dominates AI IDE space; Claude Code is standard CLI agent; Lovable and Bolt.new remain top hosted builders</li>
        <li><strong>Day 4 (Prompting):</strong> Added reasoning model prompting (chain-of-thought, test-time compute scaling)</li>
        <li><strong>Day 7-9 (Build Sprints):</strong> All labs updated for latest deployment platforms, Supabase improvements, and Stripe API changes</li>
      </ul>
    </div>`;

    await generatePDF(browser, {
      title: 'Ten-Day AI Bootcamp',
      subtitle: 'From Zero to Deployed in 10 Days — ~20 Hours Total',
      tocItems: [
        'Day 1: AI Foundations — Machine Learning, LLMs, Tokens',
        'Day 2: Vibe Coding Mindset — The Four-Step Loop',
        'Day 3: Tool Familiarization — Your Starter Stack',
        'Day 4: Prompting Fundamentals — Chaining & Error Handling',
        'Day 5: Context Mastery — Token Budgeting & Structuring',
        'Day 6: Workflow Design — Quality Gates & SOPs',
        'Day 7: Build Sprint 1 — Marketing Website',
        'Day 8: Build Sprint 2 — E-Commerce Store',
        'Day 9: Build Sprint 3 — Marketplace Scaffold',
        'Day 10: Ship + Portfolio — Deploy, Polish, Launch',
        'Facilitator Guide & Troubleshooting'
      ],
      contentHTML: bootcampContent,
      outputFile: '10-Day_AI_Bootcamp.pdf',
      date: today
    });

    /* ================================================================
       6. ARTICLE LESSONS
       ================================================================ */
    console.log('Generating Article Lessons...');
    const articlesRef = readFile(path.join(__dirname, '..', 'curriculum/04_ARTICLE_LESSONS.md')) || '';
    const articlesRefHTML = marked.parse(stripFrontmatter(articlesRef));

    let articleLessonHTMLs = '';
    const lessonFiles = [
      '01-ai-today-whats-moving.md',
      '02-livebuildai-october-6.md',
      '03-livebuildai-september-9.md',
      '04-livebuildai-september-8.md',
      '05-gtm-email-automation.md',
      '06-linkedin-content-automation.md',
      '07-personalized-email-outreach-engine.md',
      '08-free-perplexity-pro-comet.md'
    ];

    for (const file of lessonFiles) {
      const content = readFile(path.join(__dirname, '..', 'curriculum/article-lessons', file));
      if (content) {
        articleLessonHTMLs += marked.parse(stripFrontmatter(content));
      }
    }

    const articlesContent = `
    <div class="content-page">
      <h1>Article-Based Lessons</h1>
      <p>Supplementary content adapted from the LiveBuildAI content library. Each lesson is self-contained and can be completed independently or integrated into the main curriculum.</p>
      <div class="info-box">
        <strong>For 2026:</strong> These lessons have been updated to reflect the current AI landscape. News briefings now include analysis through April 2026, and tool guides reference the latest platforms and pricing.
      </div>
      ${articlesRefHTML}
    </div>
    <div class="content-page">
      <section>
        ${articleLessonHTMLs}
      </section>
    </div>`;

    await generatePDF(browser, {
      title: 'Article Lessons — Supplementary Content',
      subtitle: 'AI News Briefings, GTM Automation Labs & Tool Guides',
      tocItems: [
        'Lesson 1: AI Today — What\'s Moving (Market Analysis)',
        'Lesson 2: The Week AI Grew Up (Hardware & Geopolitics)',
        'Lesson 3: September 9 Briefing (Compute & Consumer AI)',
        'Lesson 4: September 8 Briefing (AI Safety & Regulation)',
        'Lesson 5: GTM Email Automation with Make.com',
        'Lesson 6: LinkedIn Content Automation Pipeline',
        'Lesson 7: Personalized Email Outreach Engine',
        'Lesson 8: Free Perplexity Pro + Comet Access Guide'
      ],
      contentHTML: articlesContent,
      outputFile: 'Article_Lessons_-_Supplementary_Content.pdf',
      date: today
    });

    console.log('\nAll PDFs generated successfully!');
    console.log(`Output directory: ${OUT_DIR}`);

  } catch (err) {
    console.error('Error generating PDFs:', err);
    throw err;
  } finally {
    await browser.close();
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
