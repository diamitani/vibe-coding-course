# Vibe Coding Masterclass

A comprehensive e-learning platform for vibe coding — building software with AI-powered tools and prompt engineering.

**Live Site:** [https://vibecodingcourse.z20.web.core.windows.net/](https://vibecodingcourse.z20.web.core.windows.net/)

## 🚀 Site Structure (Restructured March 2025)

### Main Pages (8 Total)

| Page | URL | Purpose |
|------|-----|---------|
| **Landing** | `/index.html` | Hero, value props, primary CTA |
| **Learning Hub** | `/learn.html` | 6 modules + 3 projects in tabs |
| **Resources Hub** | `/resources.html` | Tools, news, workspace |
| **Community** | `/community.html` | Members, projects, featured |
| **Marketplace** | `/marketplace.html` | Premium templates & tools |
| **Dashboard** | `/dashboard.html` | User progress & next steps |
| **Auth** | `/auth.html` | Login/signup |
| **Profile** | `/profile.html` | User profiles & portfolios |

### Course Content Organization

#### Learning Hub (`/learn.html`)
- **Foundations Tab** — 6 Modules in accordion
  - Module 1: What is AI?
  - Module 2: What is Vibe Coding?
  - Module 3: The Toolkit
  - Module 4: Prompt Chaining
  - Module 5: Context Engineering
  - Module 6: Process Engineering

- **Projects Tab** — 3 Labs as cards
  - Lab 1: Build a Marketing Website
  - Lab 2: Build an E-Commerce Store
  - Lab 3: Build a Directory / Marketplace

- **Resources Tab** — Learning materials
  - Tutorials, guides, curated content

#### Resources Hub (`/resources.html`)
- **Tools Tab** — Searchable directory of 15+ vibe coding tools
- **News Tab** — Community & AI news feed
- **Workspace Tab** — Prompt lab & interactive features

#### Community Hub (`/community.html`)
- **Members Tab** — Community profiles by vibe type
- **Projects Tab** — Student project gallery by type
- **Featured Tab** — Spotlight on best projects

---

## 📊 Restructure Metrics

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Total Pages | 35 | 8 | -77% |
| User Flow Steps | 7+ | 3 | -57% |
| Time to First Module | 3 clicks | 2 clicks | -33% |
| Page Load | ~15% slower | ~15% faster | -15% |
| Bandwidth | ~630 KB | ~160 KB | -75% |

**Result**: Streamlined e-learning platform with better UX and faster performance.

## Tech Stack

- Pure HTML / CSS / JavaScript
- No frameworks, no build step
- Azure Storage static website hosting
- GitHub Actions CI/CD

## Deployment

Pushes to `main` automatically deploy to Azure via GitHub Actions.

### Manual Deploy

```bash
az storage blob upload-batch \
  --account-name vibecodingcourse \
  --source . \
  --destination '$web' \
  --overwrite
```

## Local Development

```bash
npx -y serve .
```
