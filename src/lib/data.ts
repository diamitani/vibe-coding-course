// Mock data for letsvibeai — tracks, lessons, and newsletter content

export interface Lesson {
  slug: string;
  title: string;
  type: 'video' | 'article' | 'mixed';
  source: string;
  sourceUrl: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  content: string;
  youtubeId?: string;
  topics: string[];
}

export interface Track {
  slug: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessonCount: number;
  lessons: Lesson[];
  enrolled: number;
  rating: number;
}

export interface NewsletterIssue {
  slug: string;
  title: string;
  date: string;
  number: number;
  summary: string;
  topLinks: { title: string; url: string; type: string }[];
  tool: { name: string; url: string; description: string };
  challenge: string;
}

export const tracks: Track[] = [
  {
    slug: 'vibe-coding-101',
    title: 'Vibe Coding 101',
    description: 'Learn the fundamentals of AI-assisted development. Prompting patterns, tool selection, and building your first AI-powered app.',
    level: 'Beginner', duration: '4 weeks', lessonCount: 12, enrolled: 3240, rating: 4.8,
    lessons: [
      {
        slug: 'what-is-vibe-coding', title: 'What Is Vibe Coding?', type: 'video',
        source: 'Fireship', sourceUrl: 'https://youtube.com/@Fireship', duration: '8 min',
        difficulty: 'beginner', youtubeId: 'dQw4w9WgXcQ',
        description: 'Understanding the paradigm shift from traditional coding to AI-assisted development.',
        content: `## The Paradigm Shift\n\nVibe coding represents a fundamental change in how we build software. Instead of writing every line manually, you describe what you want and iterate with AI to refine the output.\n\n### What Makes It Different?\n\n- **Intent-driven**: You focus on what you want to build, not how to build it\n- **Iterative**: You refine through conversation, not debugging\n- **Accelerated**: What took days now takes hours\n\n### The Core Loop\n\n1. **Describe** your intent in natural language\n2. **Review** the AI-generated code\n3. **Refine** through follow-up prompts\n4. **Ship** when it meets your requirements`,
        topics: ['fundamentals', 'ai-tools', 'mindset'],
      },
      {
        slug: 'choosing-your-ai-tools', title: 'Choosing Your AI Coding Tools', type: 'mixed',
        source: 'Theo - t3.gg', sourceUrl: 'https://youtube.com/@t3dotgg', duration: '15 min',
        difficulty: 'beginner', youtubeId: 'dQw4w9WgXcQ',
        description: 'A practical comparison of Cursor, Copilot, Claude Code, and other AI coding assistants.',
        content: `## The AI Coding Tool Landscape\n\n### Cursor\n- **Best for**: Full-project context, refactoring\n- **Price**: Free tier + Pro at $20/mo\n\n### GitHub Copilot\n- **Best for**: IDE-native completion\n- **Price**: $10/mo individual\n\n### Claude Code (Terminal)\n- **Best for**: Complex multi-file changes\n- **Price**: API usage based\n\n### Windsurf\n- **Best for**: Beginners, visual approach\n- **Price**: Free tier + Pro\n\n## Which Should You Start With?\n\nFor beginners, start with **Cursor** — best balance of power and UX. Layer in Claude Code for complex tasks.`,
        topics: ['tools', 'comparison', 'setup'],
      },
      {
        slug: 'your-first-prompt', title: 'Writing Your First Effective Prompt', type: 'article',
        source: 'letsvibeai Original', sourceUrl: '', duration: '10 min',
        difficulty: 'beginner',
        description: 'Master the art of crafting prompts that produce exactly what you need.',
        content: `## The Anatomy of a Good Prompt\n\n### The 5-Part Prompt Template\n\n1. **Context**: What project, what stack?\n2. **Goal**: What specific thing to build or change?\n3. **Constraints**: Any limitations?\n4. **Format**: How should output be structured?\n5. **Edge cases**: What about error states?\n\n### Example: Bad vs Good\n\n**Bad**: "Make a login form"\n\n**Good**: "I'm building a Next.js 15 app with Tailwind. Create a login form that has email/password validation, inline error messages, loading state on submit, server actions, accessible labels, and mobile-responsive."`,
        topics: ['prompting', 'fundamentals', 'technique'],
      },
    ],
  },
  {
    slug: 'prompt-engineering-mastery',
    title: 'Prompt Engineering Mastery',
    description: 'Advanced techniques for steering AI outputs. Context windows, system prompts, multi-turn reasoning, and chain-of-thought patterns.',
    level: 'Intermediate', duration: '6 weeks', lessonCount: 18, enrolled: 1820, rating: 4.9,
    lessons: [
      {
        slug: 'context-window-mastery', title: 'Context Window Mastery', type: 'article',
        source: 'Anthropic Engineering Blog', sourceUrl: 'https://anthropic.com/engineering', duration: '12 min',
        difficulty: 'intermediate',
        description: 'How to manage large contexts effectively for maximum AI output quality.',
        content: `## Understanding Context Windows\n\n### Current Context Window Sizes\n\n| Model | Context Window |\n|-------|---------------|\n| Claude Sonnet 4 | 200K tokens |\n| GPT-4o | 128K tokens |\n| Gemini 2.5 Pro | 1M tokens |\n\n### The 80/20 Rule\n\nFill 80% of context with high-signal info. Leave 20% for generation.\n\n### What to Include\n- Project structure overview\n- Key files being edited\n- Relevant conventions\n- Recent decisions\n- Error messages\n\n### What to Exclude\n- Irrelevant code\n- Stale conversation history\n- Default configs`,
        topics: ['context', 'advanced', 'technique'],
      },
    ],
  },
  {
    slug: 'shipping-with-ai-agents',
    title: 'Shipping with AI Agents',
    description: 'Orchestrate multi-agent systems. Build production apps from idea to deployed — entirely through AI collaboration.',
    level: 'Advanced', duration: '8 weeks', lessonCount: 24, enrolled: 890, rating: 4.7,
    lessons: [
      {
        slug: 'multi-agent-architecture', title: 'Multi-Agent Architecture Patterns', type: 'video',
        source: 'AI Engineer', sourceUrl: 'https://youtube.com/@ai_engineer', duration: '22 min',
        difficulty: 'advanced', youtubeId: 'dQw4w9WgXcQ',
        description: 'Design patterns for orchestrating multiple AI agents on complex software projects.',
        content: `## Multi-Agent Systems\n\n### Common Patterns\n\n**Orchestrator Pattern**: One agent coordinates, specialized agents execute.\n**Peer-to-Peer**: Agents communicate directly.\n**Hierarchical**: Layers with escalating authority.\n\n### The ROSTR Approach\n\n- PAL: Compile intent into agent manifests\n- NPAO: Phase-aware task routing\n- RAG DAL: Knowledge retrieval with source credibility`,
        topics: ['agents', 'architecture', 'advanced'],
      },
    ],
  },
];

export const newsletterIssues: NewsletterIssue[] = [
  {
    slug: 'issue-12', title: 'Cursor Rules That Actually Work',
    date: 'July 13, 2026', number: 12,
    summary: 'This week: .cursorrules patterns that ship, Claude 4.5 review, and a new AI debugging technique.',
    topLinks: [
      { title: 'The Complete Guide to .cursorrules', url: '#', type: '📄 Article' },
      { title: 'Claude 4.5: What Changed', url: '#', type: '📄 Article' },
      { title: 'Building a SaaS in 48 Hours with Windsurf', url: '#', type: '🎬 Video' },
      { title: 'AI Debugging Evolved', url: '#', type: '📄 Article' },
      { title: 'Why Your AI Prompts Fail', url: '#', type: '🎬 Video' },
    ],
    tool: { name: 'Repomix', url: 'https://github.com/yamadashy/repomix', description: 'Pack your entire repo into a single AI-friendly file.' },
    challenge: 'Take a project you built manually and rebuild it using only AI prompts. Document what you learned.',
  },
  {
    slug: 'issue-11', title: 'The Vibe Coding Manifesto',
    date: 'July 6, 2026', number: 11,
    summary: 'Karpathy\'s original thread analyzed, plus community response and where vibe coding is headed.',
    topLinks: [
      { title: 'Karpathy on Vibe Coding: Full Breakdown', url: '#', type: '📄 Article' },
      { title: 'From Junior to 10x: AI Journey', url: '#', type: '🎬 Video' },
      { title: 'Open Source AI Coding Tools Compared', url: '#', type: '📄 Article' },
      { title: 'Building Accessible UIs with AI', url: '#', type: '📄 Article' },
      { title: 'Economics of AI-Assisted Development', url: '#', type: '📄 Article' },
    ],
    tool: { name: 'Aider', url: 'https://aider.chat', description: 'AI pair programming in your terminal. Open source, model-agnostic.' },
    challenge: 'Try vibe coding for one full day. No manual code — everything through AI. Share your experience.',
  },
  {
    slug: 'issue-10', title: 'Ship Fast, Don\'t Break Things',
    date: 'June 29, 2026', number: 10,
    summary: 'How top indie hackers use AI to ship 3x faster while maintaining code quality.',
    topLinks: [
      { title: 'The Indie Hacker AI Stack: 2026', url: '#', type: '📄 Article' },
      { title: 'Claude Code Agents: Deep Dive', url: '#', type: '🎬 Video' },
      { title: 'Testing AI-Generated Code', url: '#', type: '📄 Article' },
      { title: 'Design Systems for AI-First Dev', url: '#', type: '📄 Article' },
      { title: 'Zero to Deployed: Case Study', url: '#', type: '🎬 Video' },
    ],
    tool: { name: 'v0 by Vercel', url: 'https://v0.dev', description: 'Generate production-ready React/Tailwind components from text prompts.' },
    challenge: 'Build and deploy a complete micro-SaaS in one weekend using only AI tools.',
  },
];
