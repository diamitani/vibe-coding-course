# Vibe Coding Masterclass

A comprehensive course website on vibe coding — building software with AI-powered tools and prompt engineering.

**Live Site:** [https://vibecodingcourse.z20.web.core.windows.net/](https://vibecodingcourse.z20.web.core.windows.net/)

## Course Structure

| Section | Content |
|---|---|
| **Module 1** | What is AI — LLMs, generative AI, the paradigm shift |
| **Module 2** | What is Vibe Coding — origin, use cases, mindset |
| **Module 3** | The Toolkit — Lovable, v0, Bolt, Replit, Claude Code, Codex, Antigravity |
| **Module 4** | Prompt Chaining — refine prompts with AI before building |
| **Module 5** | Context Engineering — PRDs, design systems, brand guidelines |
| **Module 6** | Process Engineering — observe, analyze, automate workflows |
| **Lab 1** | Build a Marketing Website |
| **Lab 2** | Build an E-Commerce Store |
| **Lab 3** | Build a Directory / Marketplace |
| **Showcase** | Student project gallery with submission form |

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
