---
title: The Toolkit
duration: 3 hours
description: Categorize AI development tools by workflow type.
---

## Learning Objectives

- Categorize AI development tools by workflow type
- Compare hosted builders, AI IDEs, and CLI agents
- Select the right tool for any project type
- Build a personal tool stack combining complementary tools
- Understand deployment and backend service options

## Core Content

### 3.1 Tool Categories

| Category | Examples | Best For |
|----------|----------|----------|
| Hosted Builders | Lovable, v0.dev, Bolt.new, Replit | Rapid prototypes, full apps from scratch |
| AI IDEs | Cursor, GitHub Copilot, Windsurf | Daily development, existing codebases |
| CLI Agents | Claude Code, Aider, Codex CLI | Terminal-native workflows, automation |
| Backend Services | Supabase, Firebase, Convex | Data storage, auth, real-time features |
| Deployment | Vercel, Netlify, Railway | Publishing and hosting |

### 3.2 Hosted Builders

**Lovable** — Full-stack app builder with visual editing. Best for: complete applications from a single prompt. Generates React + Supabase apps with authentication and database.

**v0.dev** — Vercel's AI UI generator. Best for: React component generation, landing pages, and UI prototypes. Outputs production-ready Tailwind CSS.

**Bolt.new** — StackBlitz's AI app builder. Best for: full-stack web apps in the browser. Runs code in-browser so you can test immediately.

**Replit** — Online IDE with AI agent. Best for: collaborative development, learning, and quick prototypes. Integrated deployment.

### 3.3 AI IDEs

**Cursor** — VS Code fork with deep AI integration. Features: inline editing, chat, Claude/GPT model choice, codebase-wide understanding. Best for: daily development workflow.

**GitHub Copilot** — Industry-standard AI pair programmer. Features: tab completion, chat, PR reviews. Best for: developers who want AI assistance within their existing editor.

**Windsurf** — AI-native IDE from Codeium. Features: agent mode, multi-file editing, cascade flows. Best for: AI-first development with minimal context switching.

### 3.4 CLI Agents

**Claude Code** — Anthropic's terminal-based AI agent. Best for: complex codebase tasks, refactoring, testing. Works directly in your repository.

**Aider** — Open-source CLI pair programming. Best for: Git-aware AI coding with multi-model support. Tracks which files are changed.

**Codex CLI** — OpenAI's terminal agent. Best for: OpenAI ecosystem development, REPL-style coding.

### 3.5 Building Your Stack

A recommended starter stack:

```
Frontend:      Lovable or v0.dev → Vercel
Backend:       Supabase (Postgres, Auth, Storage)
AI IDE:        Cursor or Claude Code
Prompting:     Claude or GPT-4
Domain:        Namecheap or Cloudflare
```

### 3.6 Tool Selection Matrix

| Project Type | Recommended Tools |
|-------------|-------------------|
| Landing page | v0.dev → Netlify |
| Full-stack app | Lovable + Supabase |
| Browser game | Bolt.new |
| API/service | Claude Code + Railway |
| Dashboard | Replit + Convex |
| E-commerce | Lovable + Stripe |

## Key Takeaways

- Tool selection depends on project type, not personal preference
- Combine tools: hosted builder for frontend, Supabase for backend
- AI IDEs excel at ongoing development; hosted builders excel at greenfield projects
- CLI agents are most powerful for complex, multi-step codebase tasks

## Practice

1. Sign up for 3 tools from different categories (e.g., Lovable, Cursor, Supabase)
2. Build the same simple component in two different tools and compare the experience
3. Deploy a "Hello World" app using Vercel or Netlify

## Further Resources

- content-hub-data.js — 40+ tools with descriptions and categories
- resources.html — On-site tools directory with reviews
- tutorials.json — Tool-specific setup tutorials
