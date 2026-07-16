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
  {
    slug: 'ten-day-ai',
    title: 'Ten Day AI Builder',
    description: 'An intensive 10-day hands-on course that transforms beginners into capable AI builders. Master Custom GPTs, automation, AI assistants, and web app development — zero code required.',
    level: 'Beginner', duration: '10 days', lessonCount: 10, enrolled: 4210, rating: 4.9,
    lessons: [
      {
        slug: 'day-1-intro-custom-gpts', title: 'Day 1: Introduction to Custom GPTs', type: 'mixed',
        source: 'TenDayAI Original', sourceUrl: '', duration: '20 min',
        difficulty: 'beginner',
        description: 'Understand the fundamentals of Custom GPTs and learn how to access the tools needed to build them.',
        content: `## Welcome to Your 10-Day Journey to AI Mastery\n\nWelcome to Ten Day AI — an intensive, hands-on learning experience designed to transform you into a capable AI solutions builder in just 10 days. Forget dense theory and abstract concepts; here, you will learn by doing.\n\n### The TenDayAI Philosophy\n\n- **Chain Prompting**: A powerful technique that breaks down complex AI development into a series of simple, manageable, and interconnected prompts.\n- **Project-Based Learning**: You won't just be learning; you'll be building tangible projects that solve real-world problems.\n- **Rapid Skill Development**: An intensive sprint where each day's lesson builds directly on the last, creating powerful learning momentum.\n\n### Key Benefits of Custom GPTs\n\n- **Specialized Knowledge**: Train your GPT on your own data (PDFs, text files, etc.)\n- **Consistent Behavior**: Define a specific tone, style, and set of rules for its responses\n- **Extended Capabilities**: Enable web browsing, image generation, and data analysis\n- **No-Code Solution**: Build powerful tools without any programming\n\n### Your First Steps: Accessing the GPT Builder\n\n1. Log in to your ChatGPT account (Plus subscription required)\n2. In the top-left corner of the sidebar, click on "Explore GPTs"\n3. In the top-right corner of the "My GPTs" page, click "Create"`,
        topics: ['gpts', 'no-code', 'fundamentals', 'chatgpt'],
      },
      {
        slug: 'day-2-chain-prompting', title: 'Day 2: The Chain Prompting Method', type: 'article',
        source: 'TenDayAI Original', sourceUrl: '', duration: '25 min',
        difficulty: 'beginner',
        description: 'Learn the structured Chain Prompting workflow to design the "soul" of your Custom GPT.',
        content: `## The Chain Prompting Process\n\nInstead of staring at a blank 'Instructions' box, we'll use a structured process. Chain Prompting uses a series of specialized AI assistants to generate the core components.\n\n### The Four-Step Workflow\n\n1. **Define Your GPT's Purpose**: Get a clear idea of the problem your GPT will solve\n2. **Generate System Instructions**: Use an 'Instruction Architect' to create comprehensive instructions\n3. **Build a Knowledge Base**: Use a 'Knowledge Base Architect' to find and structure information\n4. **Define Functions (Optional)**: Define how your assistant can connect to external tools and APIs\n\n### Project: AI Content Writer\n\n**GPT Name**: AI Content Writer\n**Description**: A professional writing assistant that helps create high-quality blog posts, social media content, and marketing copy\n\n### Practice Prompt: Instruction Architect\n\n> I am creating a GPT called "AI Content Writer." Its purpose is to be a professional writing assistant that helps create high-quality blog posts, social media content, and marketing copy. Please generate comprehensive system instructions including: role/identity, purpose and tasks, tone and style (professional, creative, witty), detailed workflow, limitations, and preferred output format (Markdown).`,
        topics: ['chain-prompting', 'prompt-engineering', 'gpt-builder', 'workflow'],
      },
      {
        slug: 'day-3-build-publish-gpt', title: 'Day 3: Build & Publish Your AI Content Writer', type: 'mixed',
        source: 'TenDayAI Original', sourceUrl: '', duration: '20 min',
        difficulty: 'beginner',
        description: 'Assemble, test, and publish your first Custom GPT using the assets generated in Day 2.',
        content: `## Combine the Assets\n\nWith the system instructions from Day 2 and the knowledge sources from today, you can now build your GPT.\n\n### Build Checklist\n\n1. Open the GPT Builder and go to the "Configure" tab\n2. **Name and Description**: Fill in the AI Content Writer name and description\n3. **Instructions**: Paste the detailed system instructions you generated\n4. **Conversation Starters**: Add helpful prompts like "Write a blog post about..."\n5. **Knowledge**: Upload files based on your knowledge base research\n6. **Capabilities**: Enable Web Browsing and DALL-E Image Generation\n7. **Test in the Preview Pane**: Interact with your GPT to see if it follows instructions\n8. **Iterate and Refine**: Tweak instructions based on test results\n9. **Save and Publish**: Click "Save" and choose your publishing option\n\n### Practice Prompt: Knowledge Base Architect\n\n> I am building an "AI Content Writer" GPT. Create a list of 5 high-quality knowledge sources for copywriting, SEO, and social media content. For each: Title, Source Type, Description, URL, and why it is valuable. Format as a markdown table.\n\n🎉 **Congratulations!** You have successfully designed and built your first Custom GPT.`,
        topics: ['gpt-builder', 'publishing', 'testing', 'no-code'],
      },
      {
        slug: 'day-4-power-of-automation', title: 'Day 4: The Power of Automation', type: 'article',
        source: 'TenDayAI Original', sourceUrl: '', duration: '15 min',
        difficulty: 'beginner',
        description: 'Understand the fundamentals of automation and its importance in scaling AI capabilities.',
        content: `## Why Automation Matters for AI\n\nYour AI assistants are powerful, but they are most effective when connected to the other tools you use every day. Automation is the digital glue that makes this possible.\n\n### What Automation Enables\n\n- **Connect AI to Your World**: Feed data from forms, emails, or CRMs into your AI, and send AI-generated output to documents, databases, or marketing platforms\n- **Scale Your AI**: Go from processing one task at a time to processing thousands automatically\n- **Create End-to-End Solutions**: Chain multiple services together (e.g., new email → GPT drafts reply → saves to Google Doc for review)\n\n### Platform Comparison\n\n| Platform | Best For | Key Feature |\n|----------|----------|-------------|\n| **Make.com** (Our Choice) | Complex workflows | Visual builder, generous free tier |\n| **Zapier** | Beginners | Vast integrations, user-friendly |\n| **n8n** | Technical users | Open-source, self-hosted |`,
        topics: ['automation', 'make-com', 'zapier', 'n8n', 'workflows'],
      },
      {
        slug: 'day-5-mastering-make', title: 'Day 5: Mastering Make.com', type: 'mixed',
        source: 'TenDayAI Original', sourceUrl: '', duration: '20 min',
        difficulty: 'beginner',
        description: 'Learn the core concepts of Make.com and build your first automated workflow.',
        content: `## Core Concepts of Make.com\n\n- **Scenarios**: A complete workflow — the visual canvas where you build your automation\n- **Modules**: Building blocks representing apps (Gmail, Google Sheets, AI models) performing Trigger, Action, or Search functions\n- **Connections**: Links between modules showing how data ("bundles") flows\n\n### Mini-Tutorial: AI News Summarizer\n\nBuild an automation that monitors a news RSS feed, uses AI to summarize new articles, and emails the summary:\n\n1. RSS Feed Trigger → detects new article\n2. AI Module → summarizes the article\n3. Email Module → sends summary to your inbox\n\n### Practice Prompt\n\n> Please summarize the following article in 3 key bullet points:\n>\n> Title: "Global Tech Summit 2024 Unveils Breakthroughs in Quantum Computing"\n> Content: "The annual Global Tech Summit concluded today. The highlight was QuantumLeap Inc.'s demonstration of a new qubit stabilization technique that promises to dramatically reduce error rates in quantum computers..."`,
        topics: ['make-com', 'scenarios', 'modules', 'rss', 'automation'],
      },
      {
        slug: 'day-6-automation-design', title: 'Day 6: Designing Automations with Chain Prompting', type: 'article',
        source: 'TenDayAI Original', sourceUrl: '', duration: '20 min',
        difficulty: 'beginner',
        description: 'Apply the Chain Prompting method to design a more complex automation — the Social Media Monitor.',
        content: `## Project: Social Media Monitor\n\n**Goal**: Monitor Twitter for company mentions, analyze sentiment with AI, send daily summary to Slack.\n\n### The Workflow\n\n1. **Twitter** → Monitor for mentions of a keyword\n2. **AI Model** → Analyze sentiment (Positive, Negative, Neutral)\n3. **Slack** → Post original tweet + sentiment to #mentions channel\n\n### Practice Prompt: Automation Architect\n\n> I need to design an automation workflow in Make.com:\n> 1. Monitor Twitter for mentions of "TenDayAI"\n> 2. Use AI to analyze each mention's sentiment (Positive, Negative, Neutral)\n> 3. Post the original tweet + sentiment to a Slack channel called #mentions\n>\n> Provide step-by-step implementation plan including: specific modules for each step, configuration instructions, data mapping between modules, and error handling suggestions.`,
        topics: ['automation', 'sentiment-analysis', 'twitter', 'slack', 'make-com'],
      },
      {
        slug: 'day-7-ai-assistants', title: 'Day 7: Architecting Production AI Assistants', type: 'article',
        source: 'TenDayAI Original', sourceUrl: '', duration: '25 min',
        difficulty: 'intermediate',
        description: 'Learn the four-phase process for building a deployable, production-ready AI Assistant using an Assistants API.',
        content: `## The Four Phases of Assistant Building\n\n1. **Define (Chain Prompting)**: Design the assistant's "soul" — purpose, personality, tools\n2. **Deploy (AI Platform)**: Create the assistant on the AI provider's platform\n3. **Bundle (Assets)**: Prepare all materials for development (PRD, developer prompts)\n4. **Build (Application)**: Build the front-end and back-end application\n\n### Phase 1: Define Your Assistant's Master Prompt\n\nCreate a "Master Prompt" defining the assistant's vision, personality, capabilities, and boundaries.\n\n### Practice Prompt: Customer Support Bot\n\n> Based on this Master Prompt Idea, generate detailed instructions for an AI Assistant:\n>\n> "You are an AI Assistant for 'TenDayAI'. Your role is first-line customer support. Answer common questions from your knowledge base. If you cannot answer or the customer is frustrated, escalate to a human agent with a support ticket link."\n\n### Phase 2: Deploy on AI Platform\n\nNavigate to your AI provider's "Assistants" tab, create a new assistant, configure with generated instructions, enable "Retrieval" tool, and upload knowledge files.`,
        topics: ['assistants-api', 'production', 'architecture', 'master-prompt'],
      },
      {
        slug: 'day-8-deploy-assistant', title: 'Day 8: Building & Deploying Your Assistant', type: 'mixed',
        source: 'TenDayAI Original', sourceUrl: '', duration: '20 min',
        difficulty: 'intermediate',
        description: 'Understand how to bundle development assets and build an application that uses your new AI assistant.',
        content: `## Phase 3: Bundle Assets for Development\n\n### Product Requirements Document (PRD)\n\n- Project overview and goals\n- Target users and use cases\n- Feature requirements (MVP scope)\n- Technical constraints and preferences\n- Success metrics\n\n### Phase 4: Build and Deploy Your Application\n\nThis is where the assistant gets a "body" — a user interface. Use an AI coding assistant to generate the UI.\n\n### Practice Prompt: Chat Interface Builder\n\n> Generate HTML and CSS for a simple web chat interface:\n> 1. Main container with dark theme\n> 2. Chat window with lighter background for messages\n> 3. Message list showing 'User' and 'Assistant' messages\n> 4. Input area at bottom with text field and 'Send' button\n>\n> Make it clean and modern. Only HTML and a <style> tag, no JavaScript.`,
        topics: ['deployment', 'prd', 'chat-interface', 'frontend', 'html-css'],
      },
      {
        slug: 'day-9-web-app-dev', title: 'Day 9: Simplified Web App Development', type: 'article',
        source: 'TenDayAI Original', sourceUrl: '', duration: '20 min',
        difficulty: 'intermediate',
        description: 'Learn how to build a web application interface quickly and efficiently using AI-powered tools.',
        content: `## The Web App Chain Prompting Wizard\n\nA simplified Chain Prompting method tailored for building UIs. Our final project: a portfolio website.\n\n### Step 1: Define Purpose\n\n- **App Name**: My AI Portfolio\n- **Description**: A clean, professional single-page website showcasing the AI projects built during TenDayAI\n\n### Step 2: Define Requirements with HSP\n\nUse a specialized GPT to flesh out details by asking targeted questions about:\n1. Core features for an MVP\n2. UX and interface considerations\n3. Design direction (color scheme, layout)\n\n### Practice Prompt: HSP Requirements Builder\n\n> I want to create: A clean, professional, single-page website to showcase the AI projects I've built. Please ask 3-4 targeted questions to clarify the requirements for: core MVP features, UX and interface considerations, and overall design direction/recommendations (color scheme, layout).`,
        topics: ['web-dev', 'ui-design', 'mvp', 'portfolio', 'hsp'],
      },
      {
        slug: 'day-10-prompt-to-production', title: 'Day 10: From Prompt to Production', type: 'mixed',
        source: 'TenDayAI Original', sourceUrl: '', duration: '25 min',
        difficulty: 'intermediate',
        description: 'Use a Prompt Builder to generate, customize, and deploy your final project.',
        content: `## Final Project: AI Web Application\n\nCreate a professional portfolio website showcasing your AI development skills — without writing code from scratch.\n\n### Step 3: Create UI Prompts\n\nA "Prompt Builder" AI creates optimized text prompts for a UI generation tool like v0.dev.\n\n### Practice Prompt: v0.dev Prompt Builder\n\n> I'm planning a web app. Requirements: "The site should have a hero section with headline, a grid-based portfolio section, and a simple footer. Minimalist design with dark theme."\n>\n> Create a v0.dev prompt to generate the key component: a responsive hero section. Be specific and detailed.\n\n### Step 4: Generate, Assemble, Deploy\n\n1. **Paste Prompts**: Enter generated prompts into an AI UI builder\n2. **Get the Code**: Copy the React code for each component\n3. **Assemble and Deploy**: Combine components in a dev environment and deploy\n\n---\n\n## 🎉 Course Conclusion\n\nOver 10 days, you've journeyed from beginner to capable AI builder:\n\n- **Chain Prompting** — structured AI development method\n- **Custom GPTs** — built and published specialized AI assistants\n- **Automation** — connected AI to real-world tools with Make.com\n- **Production Assistants** — architecting deployable AI solutions\n- **Web Applications** — building complete apps with AI-powered tools\n\nThe world of AI is at your fingertips. Now, go build the future.`,
        topics: ['production', 'v0-dev', 'deployment', 'portfolio', 'graduation'],
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
