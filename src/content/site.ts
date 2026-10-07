// ─────────────────────────────────────────────────────────────
// Let's Vibe AI — site content
// Edit this file to change copy, prices, links and FAQs.
// Everything on the marketing pages reads from here.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Let's Vibe AI",
  tagline: 'Build tools, systems, and businesses with AI.',
  description:
    "Free, beginner-friendly courses that take you from \"I've never coded\" to shipping your own AI tools, automations and apps.",
  url: 'https://www.letsvibeai.com',
  email: 'hello@letsvibeai.com',
  location: 'Chicago, IL',
  // Optional: set NEXT_PUBLIC_CONTACT_ENDPOINT (e.g. a Formspree URL) in Vercel
  // to receive form submissions. Without it the form opens the visitor's email app.
  contactEndpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || '',
  socials: {
    linkedin: 'https://www.linkedin.com/in/diamitani',
    github: 'https://github.com/diamitani',
  },
  // Countdown on the "Ways to learn" section. Set to '' to hide the timer.
  offerDeadline: '2026-10-31T23:59:59-05:00',
  offerDeadlineLabel: 'Founding-member pricing ends in',
};

export const nav = [
  { label: 'Courses', href: '/courses' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const primaryCta = { label: 'Start Building Free', href: '/courses/zero-to-ship' };
export const secondaryCta = { label: 'Book a Build Call', href: '/contact' };

// "Ways to learn" — the paid offers (replace prices any time)
export const offers = [
  {
    badge: 'Popular',
    title: 'Live Build Nights',
    description: 'Build alongside other beginners in a guided, hands-on session — in Chicago or online.',
    priceLabel: 'Starting at just',
    price: '$49',
    per: '/ Session',
    href: '/contact?topic=build-night',
    art: 'laptop',
  },
  {
    badge: 'New',
    title: '1:1 AI Build Coaching',
    description: 'Bring your idea. Leave with a working tool, a clear plan, and the prompts to keep going.',
    priceLabel: 'Starting at just',
    price: '$149',
    per: '/ Hour',
    href: '/contact?topic=coaching',
    art: 'spark',
  },
  {
    badge: 'Teams',
    title: 'Team AI Workshop',
    description: 'A half-day workshop that gets your sales, marketing or ops team building with AI.',
    priceLabel: 'Starting at just',
    price: '$1,500',
    per: '/ Workshop',
    href: '/contact?topic=workshop',
    art: 'rocket',
  },
];

export const features = [
  {
    icon: 'build',
    title: 'Learn by Building',
    body: 'Every lesson ends with something real — a custom GPT, an automation, or a live web app you can share.',
  },
  {
    icon: 'chat',
    title: 'Plain-English Lessons',
    body: 'No jargon, no computer-science degree required. If you can write an email, you can follow along.',
  },
  {
    icon: 'tools',
    title: 'Real Tools, Real Projects',
    body: 'Work in the same tools pros use — ChatGPT, Claude, Make.com, v0, Lovable and Cursor — step by step.',
  },
];

export const guides = [
  {
    name: 'Pat Diamitani',
    role: 'Founder & Lead Instructor',
    bio: 'Self-taught from YouTube. Now runs GTM AI & automation for a 500+ person company and has built 150+ custom GPTs.',
    image: '', // add /images/guide-pat.jpg and put the path here
    initials: 'PD',
    links: [
      { kind: 'linkedin', href: 'https://www.linkedin.com/in/diamitani' },
      { kind: 'github', href: 'https://github.com/diamitani' },
    ],
  },
  {
    name: 'Sebastian Mertens',
    role: 'Guest Expert · Head of Applied AI, Make.com',
    bio: 'Featured on LiveBuildAI, sharing how real teams put AI automation to work.',
    image: '/images/guide-sebastian.jpg',
    initials: 'SM',
    links: [{ kind: 'web', href: 'https://www.make.com' }],
  },
  {
    name: 'Your Seat Is Open',
    role: 'Guest Instructor',
    bio: 'Built something great with AI? Teach a Build Night and share it with the community.',
    image: '',
    initials: '+',
    links: [{ kind: 'mail', href: 'mailto:hello@letsvibeai.com?subject=Guest%20instructor' }],
  },
];

// Carousel — real projects from the courses (no fake testimonials)
export const builds = [
  {
    image: '/images/build-gpt.jpg',
    tag: 'Zero to Ship · Day 3',
    title: 'Your own AI Content Writer',
    body: 'Design, test and publish a custom GPT that writes in your voice — without a line of code.',
    tools: ['ChatGPT', 'Chain Prompting'],
  },
  {
    image: '/images/build-automation.jpg',
    tag: 'Zero to Ship · Day 5',
    title: 'An AI news digest that runs itself',
    body: 'Pull articles from RSS, summarize them with AI and drop a clean digest in your inbox every morning.',
    tools: ['Make.com', 'OpenAI'],
  },
  {
    image: '/images/build-monitor.jpg',
    tag: 'Zero to Ship · Day 6',
    title: 'A social media sentiment monitor',
    body: 'Track mentions of your brand, score the sentiment with AI and post a daily summary to Slack.',
    tools: ['Make.com', 'Slack'],
  },
  {
    image: '/images/build-assistant.jpg',
    tag: 'Zero to Ship · Day 8',
    title: 'A production AI assistant',
    body: 'Turn a well-designed prompt into a deployable assistant with its own chat interface.',
    tools: ['Assistants API', 'PRD'],
  },
  {
    image: '/images/build-portfolio.jpg',
    tag: 'Zero to Ship · Day 10',
    title: 'Your AI portfolio website',
    body: 'Generate, customize and deploy a professional site that shows off everything you built.',
    tools: ['v0', 'Vercel'],
  },
  {
    image: '/images/build-outreach.jpg',
    tag: 'GTM Automation Labs',
    title: 'A personalized outreach engine',
    body: 'Research every prospect with AI and write emails that sound like you did the homework.',
    tools: ['Perplexity', 'Make.com'],
  },
];

export const faqs = [
  {
    q: 'Do I need to know how to code?',
    a: "No. Every course is written for people who've never coded. You describe what you want in plain English and the AI writes the code — we show you exactly how, step by step.",
  },
  {
    q: 'Are the courses really free?',
    a: 'Yes. Every lesson on this site is free to read and follow. Live Build Nights, 1:1 coaching and team workshops are paid, for when you want a guide in the room.',
  },
  {
    q: 'What tools do I need?',
    a: 'A laptop and a web browser. Most lessons use free tiers. A few (like building Custom GPTs) need a ChatGPT Plus account — we call it out before you start.',
  },
  {
    q: 'How long until I build something real?',
    a: 'Day 3 of Build with AI: Zero to Ship. By Day 10 you will have a custom GPT, two automations, an AI assistant and a live portfolio site.',
  },
  {
    q: 'Can you train my team?',
    a: 'Yes. Our Team AI Workshop gets sales, marketing and ops teams building their own AI tools and automations in a single session. Get in touch for details.',
  },
];

export const stats = [
  { value: '22', label: 'Free lessons' },
  { value: '4', label: 'Hands-on courses' },
  { value: '10', label: 'Days to your first shipped app' },
];

export const processSteps = [
  {
    title: 'Pick Your First Build',
    body: 'Choose something useful to you — a writing assistant, a workflow, a website. Motivation beats theory.',
  },
  {
    title: 'Learn the Method',
    body: 'Chain Prompting breaks big builds into small, simple prompts. You always know the next step.',
  },
  {
    title: 'Build It With AI',
    body: 'Follow the lesson in real tools. The AI writes the code; you make the decisions.',
  },
  {
    title: 'Ship & Share',
    body: 'Publish it, put it in your portfolio and bring your next idea to a Build Night.',
  },
];
