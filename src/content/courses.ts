// ─────────────────────────────────────────────────────────────
// Course catalog. Lesson text lives in src/content/courses/<slug>/*.md
// (files are ordered by their number prefix: 01-, 02-, …).
// ─────────────────────────────────────────────────────────────

export interface Course {
  slug: string;
  title: string;
  heroTitle: string;
  summary: string;
  image: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  price: string;
  per: string;
  featured: boolean;
  intro: { heading: string; body: string };
  approach: string[];
  helpsWith: string[];
  benefits: string[];
  whoFor: string;
  closing: string;
}

export const courses: Course[] = [
  {
    slug: 'zero-to-ship',
    title: 'Build with AI: Zero to Ship',
    heroTitle: 'Zero to Ship in 10 Days',
    summary: 'Go from "never coded" to a custom GPT, two automations, an AI assistant and a live website in 10 days.',
    image: '/images/course-zero-to-ship.jpg',
    level: 'Beginner',
    duration: '10 days',
    price: 'Free',
    per: '/ Self-paced',
    featured: true,
    intro: {
      heading: 'Your First Real AI Builds, One Day at a Time',
      body: 'Zero to Ship is a 10-day sprint where every lesson builds on the last. You start with a custom GPT on Day 1 and finish with your own AI portfolio site live on the internet on Day 10 — all using no-code tools and the Chain Prompting method.',
    },
    approach: [
      'Short daily lessons you can finish in 15–25 minutes.',
      'Chain Prompting: big builds broken into small, simple prompts.',
      'Project-based — every day produces something you can use.',
      'Real tools: ChatGPT, Make.com, the Assistants API, v0 and Vercel.',
      'Copy-paste prompts and checklists for every step.',
    ],
    helpsWith: [
      'Building and publishing your first custom GPT.',
      'Automating repetitive work with Make.com.',
      'Designing a production-ready AI assistant.',
      'Turning an idea into a live web app.',
    ],
    benefits: [
      'Confidence using AI for real work, not just chat.',
      'A portfolio of 5 working projects by Day 10.',
      'A repeatable method for any future build.',
      'The vocabulary to talk to developers and vendors.',
    ],
    whoFor: 'Anyone curious — or a little intimidated — by AI. Marketers, founders, operators, students and career-changers who want to build useful things without learning to code first.',
    closing: 'Ten days from now you can be the person on your team who builds with AI. Start Day 1 today — it is free.',
  },
  {
    slug: 'foundations',
    title: 'Vibe Coding Foundations',
    heroTitle: 'Vibe Coding Foundations',
    summary: 'The six core ideas behind building with AI: how models work, the vibe coding loop, tools, prompting and process.',
    image: '/images/course-foundations.jpg',
    level: 'Beginner',
    duration: '6 modules',
    price: 'Free',
    per: '/ Self-paced',
    featured: true,
    intro: {
      heading: 'Understand the Ideas That Make AI Building Click',
      body: 'Foundations explains what is actually happening when you build with AI — in plain English. Six modules take you from "what is an LLM?" to designing reliable, repeatable AI workflows.',
    },
    approach: [
      'Clear explanations with everyday analogies.',
      'Key takeaways and a practice exercise in every module.',
      'Curated further resources for going deeper.',
      'Builds directly into the Project Labs.',
    ],
    helpsWith: [
      'Knowing what AI can and cannot do.',
      'Choosing the right tool for each job.',
      'Writing prompts that get consistent results.',
      'Managing context so the AI stays on track.',
    ],
    benefits: [
      'Fewer frustrating "the AI broke it" moments.',
      'Faster builds through better prompts.',
      'A mental model you can apply to any new tool.',
    ],
    whoFor: 'Beginners who want to understand the "why" behind AI building, and anyone who has tried vibe coding and hit a wall.',
    closing: 'Strong foundations make every future build faster. Start with Module 1.',
  },
  {
    slug: 'project-labs',
    title: 'Vibe Coding Project Labs',
    heroTitle: 'Three Hands-On Project Labs',
    summary: 'Build and deploy a marketing site, an e-commerce store and a directory marketplace — portfolio-ready.',
    image: '/images/course-project-labs.jpg',
    level: 'Intermediate',
    duration: '3 labs',
    price: 'Free',
    per: '/ Self-paced',
    featured: true,
    intro: {
      heading: 'Turn What You Know Into Shipped Products',
      body: 'Each lab is a complete build with steps, stretch goals and assessment criteria. You finish each one with a live URL you can show clients, employers or investors.',
    },
    approach: [
      'Step-by-step build plans with time estimates.',
      'Uses hosted builders like Lovable, v0 and Bolt.',
      'Stretch goals for when you want more.',
      'Clear criteria so you know when it is "done".',
    ],
    helpsWith: [
      'Scaffolding multi-page sites from a single prompt.',
      'Adding carts, checkout and authentication.',
      'Designing a database and search experience.',
      'Deploying to a public URL.',
    ],
    benefits: [
      'Three portfolio projects you can demo.',
      'Experience with real-world app features.',
      'The confidence to take on client or side-project work.',
    ],
    whoFor: 'Learners who have finished Foundations or Zero to Ship and want bigger, more realistic projects.',
    closing: 'The best way to learn is to ship. Pick a lab and start building.',
  },
  {
    slug: 'gtm-automation',
    title: 'GTM Automation Labs',
    heroTitle: 'AI Automation for Sales & Marketing',
    summary: 'Build the email, LinkedIn and outreach automations that go-to-market teams actually use.',
    image: '/images/course-gtm-automation.jpg',
    level: 'Intermediate',
    duration: '3 labs',
    price: 'Free',
    per: '/ Self-paced',
    featured: false,
    intro: {
      heading: 'Put AI to Work on Pipeline',
      body: 'GTM engineering is building AI and automation for sales and marketing. These labs walk you through the same systems used by modern revenue teams — built with Make.com, Google Sheets and AI.',
    },
    approach: [
      'Real-world workflows from a working GTM team.',
      'Deliverability best practices built in.',
      'Review steps so nothing goes out unchecked.',
    ],
    helpsWith: [
      'Automated email outreach pipelines.',
      'AI-generated LinkedIn content calendars.',
      'Research-driven personalized cold email.',
    ],
    benefits: [
      'Hours saved every week on manual outreach.',
      'More personal messages at higher volume.',
      'A skill set companies are hiring for right now.',
    ],
    whoFor: 'Sales reps, marketers, founders and RevOps folks who want to automate prospecting and content.',
    closing: 'Automate the busywork and spend your time on conversations that close.',
  },
];

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}
