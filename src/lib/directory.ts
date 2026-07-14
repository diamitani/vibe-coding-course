// Directory data: platforms, courses, newsletters, investors, events
// Part of the broader letsvibeai vision

export interface DirectoryItem {
  name: string;
  url: string;
  description: string;
  category: string;
  tags: string[];
  free?: boolean;
}

export const directoryData: Record<string, DirectoryItem[]> = {
  'AI Platforms & Tools': [
    { name: 'Cursor', url: 'https://cursor.com', description: 'AI-first code editor with full-project context and tab-to-accept', category: 'Code Editor', tags: ['code', 'editor', 'paid'], free: false },
    { name: 'Claude Code', url: 'https://claude.ai', description: 'Terminal-native AI agent for complex multi-file changes', category: 'Agent', tags: ['code', 'agent', 'terminal'], free: false },
    { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', description: 'IDE-native AI pair programmer from GitHub', category: 'Code Assistant', tags: ['code', 'ide', 'completion'], free: false },
    { name: 'Windsurf', url: 'https://codeium.com/windsurf', description: 'AI-powered IDE with flow state and visual context', category: 'IDE', tags: ['code', 'ide', 'visual'], free: true },
    { name: 'v0 by Vercel', url: 'https://v0.dev', description: 'Generate production-ready React/Tailwind components from text', category: 'UI Generator', tags: ['ui', 'react', 'generation'], free: true },
    { name: 'Replit Agent', url: 'https://replit.com', description: 'Build and deploy full-stack apps with natural language', category: 'Platform', tags: ['fullstack', 'deploy', 'browser'], free: true },
    { name: 'Lovable', url: 'https://lovable.dev', description: 'AI app builder for full-stack web applications', category: 'App Builder', tags: ['fullstack', 'web', 'builder'], free: false },
    { name: 'Bolt.new', url: 'https://bolt.new', description: 'Prompt-to-full-stack-app in the browser', category: 'App Builder', tags: ['fullstack', 'browser', 'instant'], free: true },
    { name: 'Aider', url: 'https://aider.chat', description: 'AI pair programming in your terminal, open source', category: 'Agent', tags: ['code', 'terminal', 'open-source'], free: true },
    { name: 'Repomix', url: 'https://github.com/yamadashy/repomix', description: 'Pack your entire repo into a single AI-friendly file', category: 'Utility', tags: ['context', 'open-source', 'utility'], free: true },
    { name: 'OpenCode', url: 'https://opencode.ai', description: 'Open-source AI coding agent with full terminal access', category: 'Agent', tags: ['code', 'agent', 'open-source'], free: true },
    { name: 'Cline', url: 'https://github.com/cline/cline', description: 'Autonomous coding agent for VS Code', category: 'Agent', tags: ['code', 'agent', 'vscode'], free: true },
  ],
  'Online Courses': [
    { name: 'Coursera AI Specializations', url: 'https://coursera.org', description: 'University-backed AI and ML courses from Stanford, DeepLearning.AI, and more', category: 'Academic', tags: ['university', 'certificate', 'structured'], free: false },
    { name: 'Fast.ai', url: 'https://fast.ai', description: 'Free practical deep learning courses for coders', category: 'Practical', tags: ['deep-learning', 'free', 'practical'], free: true },
    { name: 'DeepLearning.AI', url: 'https://deeplearning.ai', description: 'Andrew Ng\'s AI courses covering fundamentals to advanced topics', category: 'Academic', tags: ['fundamentals', 'certificate', 'structured'], free: false },
    { name: 'Scrimba AI Engineering', url: 'https://scrimba.com', description: 'Interactive coding courses with AI-assisted learning paths', category: 'Interactive', tags: ['interactive', 'browser', 'practical'], free: false },
    { name: 'FreeCodeCamp', url: 'https://freecodecamp.org', description: 'Free coding curriculum including AI and ML sections', category: 'Free', tags: ['free', 'comprehensive', 'community'], free: true },
  ],
  'Newsletters': [
    { name: 'The Batch (DeepLearning.AI)', url: 'https://www.deeplearning.ai/the-batch/', description: 'Weekly AI newsletter covering research, industry, and tutorials', category: 'AI News', tags: ['weekly', 'research', 'industry'] },
    { name: 'Ben\'s Bites', url: 'https://bensbites.beehiiv.com', description: 'Daily AI news digest covering tools, research, and funding', category: 'AI News', tags: ['daily', 'tools', 'funding'] },
    { name: 'AI Valley', url: 'https://aivalley.ai', description: 'Curated AI news, tools, and prompts for builders', category: 'Builder', tags: ['weekly', 'tools', 'prompts'] },
    { name: 'The Rundown AI', url: 'https://www.therundown.ai', description: 'Daily 5-minute AI news briefing', category: 'AI News', tags: ['daily', 'brief', 'news'] },
    { name: 'Prompt Engineering Daily', url: 'https://promptengineeringdaily.com', description: 'Daily tips and techniques for better AI prompting', category: 'Technique', tags: ['daily', 'prompts', 'technique'] },
  ],
  'Accelerators & Bootcamps': [
    { name: 'Y Combinator', url: 'https://ycombinator.com', description: 'Premier startup accelerator funding AI companies', category: 'Accelerator', tags: ['funding', 'startup', 'network'] },
    { name: 'AI Grant', url: 'https://aigrant.com', description: 'Grants for AI-native startups and projects', category: 'Grant', tags: ['funding', 'grant', 'startup'] },
    { name: 'Antler AI', url: 'https://antler.co', description: 'Global VC and startup generator with strong AI focus', category: 'Accelerator', tags: ['funding', 'global', 'early-stage'] },
    { name: 'Neo', url: 'https://neo.com', description: 'Accelerator and community for technical founders building with AI', category: 'Accelerator', tags: ['technical', 'community', 'mentorship'] },
    { name: 'Maven', url: 'https://maven.com', description: 'Cohort-based courses from top AI practitioners', category: 'Cohort', tags: ['cohort', 'expert', 'structured'] },
  ],
  'AI Investors & VCs': [
    { name: 'a16z AI', url: 'https://a16z.com/ai/', description: 'Major AI investor with deep technical and market expertise', category: 'VC', tags: ['vc', 'large-fund', 'network'] },
    { name: 'Sequoia Capital', url: 'https://sequoiacap.com', description: 'Leading VC with significant AI portfolio', category: 'VC', tags: ['vc', 'large-fund', 'network'] },
    { name: 'Felicis', url: 'https://felicis.com', description: 'Early-stage VC backing AI infrastructure and applications', category: 'VC', tags: ['vc', 'early-stage', 'infrastructure'] },
    { name: 'AIX Ventures', url: 'https://aixventures.com', description: 'AI-focused VC fund by AI researchers and operators', category: 'VC', tags: ['vc', 'ai-native', 'research'] },
    { name: 'Gradient Ventures', url: 'https://gradient.com', description: 'Google\'s AI-focused venture fund', category: 'VC', tags: ['vc', 'google', 'corporate'] },
  ],
  'YouTube Channels': [
    { name: 'Fireship', url: 'https://youtube.com/@Fireship', description: 'Fast-paced code reports and AI tool breakdowns', category: 'News', tags: ['code', 'news', 'fast'] },
    { name: 'Theo - t3.gg', url: 'https://youtube.com/@t3dotgg', description: 'Developer tool reviews, AI coding, and web dev', category: 'Review', tags: ['tools', 'code', 'review'] },
    { name: 'Nick Saraev', url: 'https://youtube.com/@nicksaraev', description: 'AI workflow automation and no-code AI tools', category: 'Tutorial', tags: ['automation', 'no-code', 'workflow'] },
    { name: 'Liam Ottley', url: 'https://youtube.com/@liamottley', description: 'AI SaaS building and AI agent development', category: 'Tutorial', tags: ['saas', 'agents', 'business'] },
    { name: 'Nate Herk', url: 'https://youtube.com/@nateherk', description: 'AI tools, tutorials, and productivity with AI', category: 'Tutorial', tags: ['tools', 'tutorial', 'productivity'] },
    { name: 'Jono Catliff', url: 'https://youtube.com/@jonocatliff', description: 'AI coding workflows and developer productivity', category: 'Tutorial', tags: ['code', 'workflow', 'productivity'] },
  ],
  'Events & Hackathons': [
    { name: 'AI Engineer Summit', url: 'https://ai.engineer', description: 'The premier conference for AI engineers and builders', category: 'Conference', tags: ['conference', 'engineering', 'annual'] },
    { name: 'LabLab.ai Hackathons', url: 'https://lablab.ai', description: 'Regular AI hackathons with new models and tools', category: 'Hackathon', tags: ['hackathon', 'online', 'regular'] },
    { name: 'AI Tinkerers', url: 'https://aitinkerers.org', description: 'Local meetups for active AI builders in major cities', category: 'Meetup', tags: ['meetup', 'local', 'builders'] },
    { name: 'MLOps World', url: 'https://mlopsworld.com', description: 'Conference for production ML and AI operations', category: 'Conference', tags: ['conference', 'mlops', 'production'] },
  ],
};
