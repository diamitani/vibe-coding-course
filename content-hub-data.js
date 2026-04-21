window.CONTENT_HUB_DATA = (() => {
  const mapTools = (rows) => rows.map(([name, url, category, pricing, desc, tags, icon]) => ({
    name,
    url,
    category,
    pricing,
    desc,
    tags,
    icon
  }));

  const mapLinks = (rows) => rows.map(([name, url, angle]) => ({ name, url, angle }));

  const tools = mapTools([
    ['Cursor', 'https://cursor.com', 'AI IDE', 'Free + paid', 'AI-first editor for multi-file coding, refactors, and pair-programming.', ['Editor', 'Agent', 'Refactors'], '📐'],
    ['Windsurf', 'https://windsurf.com', 'AI IDE', 'Free + paid', 'Codeium-powered IDE built for autonomous flows and large-codebase edits.', ['Cascade', 'IDE', 'Context'], '🏄'],
    ['GitHub Copilot', 'https://github.com/features/copilot', 'AI IDE', 'Free + paid', 'Mainstream AI coding assistant for IDEs, PRs, and chat.', ['Autocomplete', 'Agent', 'GitHub'], '🐙'],
    ['JetBrains AI Assistant', 'https://www.jetbrains.com/ai/', 'AI IDE', 'Paid', 'Native AI assistant across IntelliJ, WebStorm, and the JetBrains suite.', ['JetBrains', 'IDE', 'Workflow'], '🧠'],
    ['Amazon Q Developer', 'https://aws.amazon.com/q/developer/', 'AI IDE', 'Free + paid', 'AWS-focused coding assistant for cloud apps, chat, and code reviews.', ['AWS', 'Cloud', 'Review'], '☁️'],
    ['Tabnine', 'https://www.tabnine.com/', 'AI IDE', 'Free + paid', 'Private AI code completion and team knowledge assistance.', ['Completion', 'Private', 'Team'], '🔢'],
    ['Continue', 'https://continue.dev/', 'AI IDE', 'Free + paid', 'Open-source AI coding assistant you can plug into your own models.', ['Open Source', 'VS Code', 'Customization'], '🧩'],
    ['Cline', 'https://cline.bot', 'AI IDE', 'Free + API costs', 'Agentic VS Code extension for long-running coding tasks and tool use.', ['VS Code', 'Agent', 'Tool Use'], '🛠️'],
    ['Roo Code', 'https://roocode.com', 'AI IDE', 'Free + API costs', 'VS Code coding agent focused on structured plans and repo-level changes.', ['VS Code', 'Planning', 'Repo'], '🦘'],
    ['Sourcegraph Cody', 'https://sourcegraph.com/cody', 'AI IDE', 'Free + paid', 'Enterprise-friendly AI coding assistant with deep code search context.', ['Search', 'Enterprise', 'Context'], '🔎'],
    ['Qodo', 'https://www.qodo.ai', 'AI IDE', 'Free + paid', 'AI coding platform geared toward code quality, generation, and testing.', ['Quality', 'Tests', 'Generation'], '✅'],
    ['Codeium', 'https://codeium.com', 'AI IDE', 'Free + paid', 'Fast autocomplete and chat tooling across popular IDEs.', ['Autocomplete', 'IDE', 'Team'], '⚙️'],
    ['Augment Code', 'https://augmentcode.com', 'AI IDE', 'Paid', 'Codebase-aware AI coding assistant for larger engineering teams.', ['Team', 'Codebase', 'Assistant'], '📈'],
    ['Zed AI', 'https://zed.dev/ai', 'AI IDE', 'Free + paid', 'Lightning-fast editor with built-in AI coding workflows.', ['Fast', 'Editor', 'Native AI'], '⚡'],
    ['Pieces Copilot', 'https://pieces.app', 'AI IDE', 'Free + paid', 'Snippet memory plus AI assistance across desktop workflows.', ['Snippets', 'Memory', 'Desktop'], '🧠'],
    ['Gemini Code Assist', 'https://developers.google.com/gemini-code-assist', 'AI IDE', 'Free + paid', 'Google coding assistant for enterprise and IDE-based workflows.', ['Google', 'IDE', 'Enterprise'], '💎'],
    ['Claude Code', 'https://docs.anthropic.com/en/docs/claude-code', 'CLI Agent', 'API usage', 'Terminal-native coding agent for deep repo work and automation.', ['CLI', 'Agent', 'Terminal'], '🟠'],
    ['Aider', 'https://aider.chat', 'CLI Agent', 'Free + model costs', 'Terminal pair-programmer that edits your local git repo with AI.', ['CLI', 'Git', 'Pairing'], '👥'],
    ['OpenHands', 'https://www.all-hands.dev/', 'CLI Agent', 'Open source', 'Open-source software development agent for task execution and fixes.', ['Open Source', 'Agent', 'Tasks'], '👐'],
    ['Goose', 'https://block.github.io/goose/', 'CLI Agent', 'Open source', 'Developer agent for running tools and automating engineering workflows.', ['Agents', 'Tool Use', 'Automation'], '🪿'],
    ['Sweep', 'https://sweep.dev', 'CLI Agent', 'Paid', 'AI software engineer for issues, code changes, and PR loops.', ['PRs', 'Issues', 'Automation'], '🧹'],
    ['Open Interpreter', 'https://openinterpreter.com', 'CLI Agent', 'Open source', 'Natural-language interface for local code execution and task automation.', ['Local', 'Interpreter', 'Automation'], '🧪'],
    ['Plandex', 'https://plandex.ai', 'CLI Agent', 'Free + paid', 'Open-source AI coding agent built for multi-file implementation plans.', ['Plans', 'Multi-File', 'Agent'], '🗂️'],
    ['CodeRabbit', 'https://coderabbit.ai', 'CLI Agent', 'Paid', 'AI code review agent for pull requests and collaboration loops.', ['Review', 'PRs', 'Quality'], '🐇'],
    ['Greptile', 'https://greptile.com', 'CLI Agent', 'Paid', 'AI that understands repo history and answers engineering questions.', ['Repo Search', 'Context', 'Review'], '🧭'],
    ['Amp', 'https://ampcode.com', 'CLI Agent', 'Paid', 'Coding agent focused on speed, planning, and local development loops.', ['Agent', 'Local Dev', 'Speed'], '🔋'],
    ['Lovable', 'https://lovable.dev', 'Hosted Builder', 'Free + paid', 'Prompt-to-product app builder with full-stack scaffolding and previews.', ['Full-Stack', 'Builder', 'Shipping'], '💜'],
    ['v0', 'https://v0.dev', 'Hosted Builder', 'Free + paid', 'Vercel UI generator for React, Next.js, and design-to-code workflows.', ['UI', 'React', 'Next.js'], '▲'],
    ['Bolt.new', 'https://bolt.new', 'Hosted Builder', 'Free + paid', 'Browser-based full-stack builder using WebContainers and prompts.', ['Browser', 'Full-Stack', 'Instant'], '⚡'],
    ['Replit', 'https://replit.com', 'Hosted Builder', 'Free + paid', 'Cloud coding environment with AI assistance, hosting, and sharing.', ['Cloud IDE', 'Hosting', 'Agent'], '🔁'],
    ['Databutton', 'https://databutton.com', 'Hosted Builder', 'Paid', 'AI product builder for SaaS apps and internal tools.', ['SaaS', 'Builder', 'Business Apps'], '📦'],
    ['Tempo Labs', 'https://www.tempolabs.ai', 'Hosted Builder', 'Paid', 'Visual AI frontend builder for product teams and rapid app iteration.', ['Frontend', 'Visual', 'Product'], '🎛️'],
    ['Softgen', 'https://softgen.ai', 'Hosted Builder', 'Paid', 'AI app builder for startups shipping MVPs quickly.', ['MVP', 'Startup', 'Builder'], '🚀'],
    ['Builder.io', 'https://www.builder.io', 'Hosted Builder', 'Free + paid', 'Visual CMS and design-to-code tooling for production interfaces.', ['CMS', 'Design-to-Code', 'Visual'], '🧱'],
    ['Framer AI', 'https://www.framer.com/ai', 'Hosted Builder', 'Free + paid', 'Generate and refine marketing sites with AI-assisted web design.', ['Sites', 'Marketing', 'AI'], '🖼️'],
    ['Webflow AI', 'https://webflow.com/ai', 'Hosted Builder', 'Free + paid', 'Visual site building with CMS, hosting, and AI acceleration.', ['CMS', 'Sites', 'No-Code'], '🌐'],
    ['Wix Studio AI', 'https://www.wix.com/studio/ai', 'Hosted Builder', 'Free + paid', 'Agency-style site creation with AI help and managed hosting.', ['Agency', 'Sites', 'Hosting'], '🪄'],
    ['Dora', 'https://www.dora.run', 'Hosted Builder', 'Free + paid', 'Motion-heavy website builder with AI layout generation.', ['Motion', 'Web Design', 'Visual'], '🌊'],
    ['Figma', 'https://www.figma.com', 'Design/Media', 'Free + paid', 'Core design tool for interface systems, mockups, and AI-powered ideation.', ['Design', 'UI', 'Teams'], '🎨'],
    ['Uizard', 'https://uizard.io', 'Design/Media', 'Free + paid', 'Turn prompts and rough ideas into app and web designs.', ['Wireframes', 'UI', 'Prompting'], '🧭'],
    ['Magic Patterns', 'https://www.magicpatterns.com', 'Design/Media', 'Free + paid', 'Generate interfaces, flows, and UI concepts from prompts.', ['UI', 'Product', 'Patterns'], '✨'],
    ['Galileo AI', 'https://www.usegalileo.ai', 'Design/Media', 'Paid', 'Create polished UI mockups from product descriptions.', ['Mockups', 'UI', 'Prompt-to-Design'], '🪐'],
    ['Relume', 'https://relume.io', 'Design/Media', 'Free + paid', 'AI site maps, wireframes, and component libraries for web teams.', ['Wireframes', 'Sitemaps', 'Libraries'], '🗺️'],
    ['Spline', 'https://spline.design', 'Design/Media', 'Free + paid', '3D design tool for interactive scenes and product visuals.', ['3D', 'Visuals', 'Interactive'], '🧊'],
    ['Canva Magic Studio', 'https://www.canva.com/magic-studio/', 'Design/Media', 'Free + paid', 'AI-enhanced design suite for ads, decks, thumbnails, and social posts.', ['Marketing', 'Creative', 'Teams'], '🧰'],
    ['Midjourney', 'https://midjourney.com', 'Design/Media', 'Paid', 'High-end image generation for brand assets, mockups, and visuals.', ['Images', 'Branding', 'Concepts'], '🖌️'],
    ['Ideogram', 'https://ideogram.ai', 'Design/Media', 'Free + paid', 'Image generation with strong typography and poster-style output.', ['Typography', 'Images', 'Brand'], '🔤'],
    ['Runway', 'https://runwayml.com', 'Design/Media', 'Free + paid', 'Video generation and editing for launches, explainers, and ads.', ['Video', 'Creative', 'Editing'], '🎬'],
    ['Pika', 'https://pika.art', 'Design/Media', 'Free + paid', 'Prompt-based video creation for product storytelling and shorts.', ['Video', 'Shorts', 'Prompting'], '📹'],
    ['ElevenLabs', 'https://elevenlabs.io', 'Design/Media', 'Free + paid', 'Voice generation and dubbing for demos, tutorials, and narration.', ['Voice', 'Audio', 'Narration'], '🎙️'],
    ['HeyGen', 'https://heygen.com', 'Design/Media', 'Paid', 'Avatar and video generation for tutorials, ads, and onboarding.', ['Avatars', 'Video', 'Marketing'], '🧑‍💼'],
    ['Tavus', 'https://tavus.io', 'Design/Media', 'Paid', 'Personalized video generation for outbound and education flows.', ['Personalization', 'Video', 'Growth'], '📬'],
    ['Descript', 'https://descript.com', 'Design/Media', 'Free + paid', 'Edit podcasts and videos like documents with AI cleanup.', ['Podcast', 'Editing', 'Content'], '✂️'],
    ['Suno', 'https://suno.com', 'Design/Media', 'Free + paid', 'AI music creation for intros, reels, and brand experiments.', ['Audio', 'Music', 'Creative'], '🎵'],
    ['Luma AI', 'https://lumalabs.ai', 'Design/Media', 'Free + paid', '3D capture and video tools for richer product storytelling.', ['3D', 'Video', 'Capture'], '🌌'],
    ['Supabase', 'https://supabase.com', 'Backend/Hosting', 'Free + paid', 'Postgres backend with auth, storage, realtime, and edge functions.', ['Database', 'Auth', 'Realtime'], '⚡'],
    ['Firebase', 'https://firebase.google.com', 'Backend/Hosting', 'Free + paid', 'Google backend stack for auth, databases, hosting, and serverless.', ['Google', 'Mobile', 'Hosting'], '🔥'],
    ['Convex', 'https://convex.dev', 'Backend/Hosting', 'Free + paid', 'Reactive backend with functions, database, and real-time state.', ['Backend', 'Realtime', 'Functions'], '🔷'],
    ['Appwrite', 'https://appwrite.io', 'Backend/Hosting', 'Free + paid', 'Open-source backend platform for auth, DB, storage, and functions.', ['Open Source', 'Auth', 'Storage'], '🧳'],
    ['Nhost', 'https://nhost.io', 'Backend/Hosting', 'Free + paid', 'GraphQL backend with Postgres, auth, and storage for apps.', ['GraphQL', 'Postgres', 'Auth'], '🧵'],
    ['PocketBase', 'https://pocketbase.io', 'Backend/Hosting', 'Free', 'Tiny open-source backend for local-first and indie projects.', ['Lightweight', 'Open Source', 'Backend'], '🪙'],
    ['Neon', 'https://neon.tech', 'Backend/Hosting', 'Free + paid', 'Serverless Postgres built for branching, scale, and modern apps.', ['Database', 'Postgres', 'Serverless'], '🌱'],
    ['PlanetScale', 'https://planetscale.com', 'Backend/Hosting', 'Free + paid', 'Managed MySQL platform with branching for production teams.', ['MySQL', 'Database', 'Branching'], '🪐'],
    ['Xata', 'https://xata.io', 'Backend/Hosting', 'Free + paid', 'Serverless data platform for search, analytics, and apps.', ['Data', 'Search', 'Serverless'], '📚'],
    ['Turso', 'https://turso.tech', 'Backend/Hosting', 'Free + paid', 'SQLite-based edge database for low-latency app shipping.', ['SQLite', 'Edge', 'Data'], '🧿'],
    ['Railway', 'https://railway.com', 'Backend/Hosting', 'Free + paid', 'Fast deployment platform for services, databases, and jobs.', ['Deploy', 'Infra', 'Apps'], '🚂'],
    ['Render', 'https://render.com', 'Backend/Hosting', 'Free + paid', 'Cloud hosting for web apps, APIs, workers, and databases.', ['Hosting', 'APIs', 'Workers'], '🧱'],
    ['Fly.io', 'https://fly.io', 'Backend/Hosting', 'Free + paid', 'Global app deployment close to users for full-stack products.', ['Global', 'Deploy', 'Apps'], '🪁'],
    ['Netlify', 'https://netlify.com', 'Backend/Hosting', 'Free + paid', 'Frontend deployment with forms, edge functions, and previews.', ['Frontend', 'Deploy', 'Preview'], '🧷'],
    ['Vercel', 'https://vercel.com', 'Backend/Hosting', 'Free + paid', 'Deployment and frontend cloud platform for modern web products.', ['Deploy', 'Frontend', 'Edge'], '▲'],
    ['Cloudflare Workers', 'https://developers.cloudflare.com/workers/', 'Backend/Hosting', 'Free + paid', 'Edge compute and storage for fast AI and app workloads.', ['Edge', 'Workers', 'Scale'], '☁️'],
    ['Modal', 'https://modal.com', 'Backend/Hosting', 'Paid', 'Run AI inference and compute-heavy backend jobs with serverless ergonomics.', ['Compute', 'Inference', 'Jobs'], '🧠'],
    ['Baseten', 'https://baseten.co', 'Backend/Hosting', 'Paid', 'Deploy, serve, and monitor custom AI models and APIs.', ['Inference', 'Models', 'APIs'], '📡'],
    ['E2B', 'https://e2b.dev', 'Backend/Hosting', 'Free + paid', 'Secure cloud sandboxes for running agent-generated code.', ['Sandbox', 'Agents', 'Runtime'], '🧪'],
    ['Browserbase', 'https://browserbase.com', 'Backend/Hosting', 'Free + paid', 'Managed browser infrastructure for agents and web automation.', ['Browsers', 'Automation', 'Agents'], '🌍'],
    ['UploadThing', 'https://uploadthing.com', 'Backend/Hosting', 'Free + paid', 'Developer-friendly file upload system for modern apps.', ['Files', 'Frontend', 'DX'], '📤'],
    ['OpenAI', 'https://openai.com', 'Model/API', 'Usage-based', 'Frontier models, APIs, and platform tools for AI products.', ['LLMs', 'API', 'Models'], '◎'],
    ['Anthropic', 'https://anthropic.com', 'Model/API', 'Usage-based', 'Claude models and platform tooling for reasoning and coding.', ['Claude', 'API', 'Reasoning'], '🟠'],
    ['Google AI Studio', 'https://aistudio.google.com', 'Model/API', 'Free + paid', 'Fast Gemini prototyping environment with prompt and API tooling.', ['Gemini', 'Prototyping', 'Studio'], '💠'],
    ['Vertex AI', 'https://cloud.google.com/vertex-ai', 'Model/API', 'Paid', 'Google Cloud AI platform for enterprise training and inference.', ['Enterprise', 'MLOps', 'Cloud'], '🏢'],
    ['Azure AI Foundry', 'https://ai.azure.com', 'Model/API', 'Paid', 'Microsoft AI platform for model deployment and enterprise agents.', ['Microsoft', 'Enterprise', 'Agents'], '🪟'],
    ['Hugging Face', 'https://huggingface.co', 'Model/API', 'Free + paid', 'Open model hub, inference endpoints, and community ecosystem.', ['Open Models', 'Community', 'Inference'], '🤗'],
    ['Replicate', 'https://replicate.com', 'Model/API', 'Usage-based', 'Run hosted open-source models with clean APIs and predictable DX.', ['Inference', 'Models', 'APIs'], '🧬'],
    ['Together AI', 'https://together.ai', 'Model/API', 'Usage-based', 'Model hosting and inference layer for open-source AI stacks.', ['Open Models', 'Inference', 'Scale'], '🤝'],
    ['Groq', 'https://groq.com', 'Model/API', 'Usage-based', 'Ultra-fast inference for latency-sensitive chat and coding apps.', ['Speed', 'Inference', 'Realtime'], '⚙️'],
    ['Fireworks AI', 'https://fireworks.ai', 'Model/API', 'Usage-based', 'Inference platform for open models, fine-tuning, and scaling.', ['Inference', 'Fine-Tuning', 'Open Models'], '🎆'],
    ['OpenRouter', 'https://openrouter.ai', 'Model/API', 'Usage-based', 'One API for switching across many commercial and open models.', ['Routing', 'Multi-Model', 'API'], '🧭'],
    ['Mistral AI', 'https://mistral.ai', 'Model/API', 'Usage-based', 'European foundation models for chat, coding, and embeddings.', ['LLMs', 'Embeddings', 'Open Weights'], '🌪️'],
    ['Cohere', 'https://cohere.com', 'Model/API', 'Usage-based', 'Enterprise language models focused on retrieval and business apps.', ['Enterprise', 'RAG', 'Models'], '🔵'],
    ['Ollama', 'https://ollama.com', 'Model/API', 'Free', 'Run local LLMs on your machine for private experiments.', ['Local', 'LLMs', 'Open Models'], '🦙'],
    ['Perplexity API', 'https://www.perplexity.ai/api', 'Model/API', 'Usage-based', 'Search-grounded API for answer generation and research workflows.', ['Search', 'API', 'Research'], '🧠'],
    ['AssemblyAI', 'https://www.assemblyai.com', 'Model/API', 'Usage-based', 'Speech recognition and audio intelligence for products and content.', ['Speech', 'Audio', 'API'], '🗣️'],
    ['Deepgram', 'https://deepgram.com', 'Model/API', 'Usage-based', 'Speech-to-text and voice tooling for apps and agents.', ['Voice', 'Speech', 'API'], '🔊'],
    ['LangChain', 'https://www.langchain.com', 'Agent Stack', 'Free + paid', 'Core framework for chaining LLMs, tools, memory, and retrieval.', ['Framework', 'Agents', 'LLMs'], '🔗'],
    ['LangGraph', 'https://www.langchain.com/langgraph', 'Agent Stack', 'Free + paid', 'Stateful agent orchestration for long-running workflows.', ['State', 'Agents', 'Workflows'], '🕸️'],
    ['LlamaIndex', 'https://www.llamaindex.ai', 'Agent Stack', 'Free + paid', 'Data framework for connecting LLM apps to private knowledge.', ['RAG', 'Data', 'Framework'], '🦙'],
    ['CrewAI', 'https://crewai.com', 'Agent Stack', 'Free + paid', 'Multi-agent framework for coordinated tasks and roles.', ['Multi-Agent', 'Automation', 'Roles'], '👨‍👩‍👧‍👦'],
    ['AutoGen', 'https://microsoft.github.io/autogen/', 'Agent Stack', 'Open source', 'Microsoft framework for tool-using and conversational agents.', ['Microsoft', 'Agents', 'Tools'], '🛠️'],
    ['Haystack', 'https://haystack.deepset.ai', 'Agent Stack', 'Free + paid', 'Open-source LLM orchestration and retrieval toolkit.', ['RAG', 'Pipelines', 'Open Source'], '🌾'],
    ['Flowise', 'https://flowiseai.com', 'Agent Stack', 'Free + paid', 'Visual builder for LLM pipelines, RAG, and agents.', ['Visual', 'RAG', 'Agents'], '🧰'],
    ['Dify', 'https://dify.ai', 'Agent Stack', 'Free + paid', 'Open-source platform for AI apps, prompts, and workflows.', ['Open Source', 'Workflows', 'Apps'], '🌀'],
    ['Mastra', 'https://mastra.ai', 'Agent Stack', 'Open source', 'TypeScript agent framework for production AI systems.', ['TypeScript', 'Agents', 'Production'], '📦'],
    ['PydanticAI', 'https://ai.pydantic.dev', 'Agent Stack', 'Open source', 'Typed Python agent framework for reliable tool calling.', ['Python', 'Types', 'Agents'], '📐'],
    ['DSPy', 'https://dspy.ai', 'Agent Stack', 'Open source', 'Framework for programming and optimizing LM pipelines.', ['Optimization', 'Pipelines', 'Research'], '🧮'],
    ['Mem0', 'https://mem0.ai', 'Agent Stack', 'Free + paid', 'Memory layer for personalized AI experiences and agent recall.', ['Memory', 'Personalization', 'Agents'], '🧠'],
    ['Pinecone', 'https://pinecone.io', 'Agent Stack', 'Free + paid', 'Managed vector database for retrieval pipelines and search.', ['Vectors', 'RAG', 'Search'], '🌲'],
    ['Weaviate', 'https://weaviate.io', 'Agent Stack', 'Free + paid', 'Open-source vector database with hybrid search and modules.', ['Vectors', 'Search', 'Open Source'], '🧊'],
    ['Qdrant', 'https://qdrant.tech', 'Agent Stack', 'Free + paid', 'Vector database tuned for semantic search and filtering.', ['Vectors', 'Search', 'Filtering'], '🎯'],
    ['Chroma', 'https://trychroma.com', 'Agent Stack', 'Free + paid', 'Developer-friendly vector database for AI apps.', ['Vectors', 'Developer', 'Embeddings'], '🍇'],
    ['Milvus', 'https://milvus.io', 'Agent Stack', 'Open source', 'Scalable vector database for heavier retrieval workloads.', ['Vectors', 'Scale', 'Open Source'], '📶'],
    ['Tavily', 'https://tavily.com', 'Agent Stack', 'Usage-based', 'Search API built specifically for AI agents and research.', ['Search', 'Agents', 'API'], '🔍'],
    ['Exa', 'https://exa.ai', 'Agent Stack', 'Usage-based', 'Search and web knowledge APIs for building research products.', ['Search', 'Web', 'Knowledge'], '🗃️'],
    ['SerpAPI', 'https://serpapi.com', 'Agent Stack', 'Usage-based', 'Google Search API for scraping-free research and monitoring.', ['Search', 'SERP', 'Research'], '📈'],
    ['Prisma', 'https://prisma.io', 'Agent Stack', 'Free + paid', 'Database ORM and migration toolkit that AI tools understand well.', ['ORM', 'Database', 'DX'], '🧬'],
    ['Drizzle', 'https://orm.drizzle.team', 'Agent Stack', 'Free', 'Type-safe SQL toolkit popular in modern AI-generated app stacks.', ['ORM', 'TypeScript', 'SQL'], '🌧️'],
    ['n8n', 'https://n8n.io', 'Automation', 'Free + paid', 'Workflow automation platform with strong AI and agent support.', ['Workflows', 'AI', 'Automation'], '🔁'],
    ['Zapier', 'https://zapier.com', 'Automation', 'Free + paid', 'Massive app connector ecosystem for simple business automations.', ['Apps', 'Automation', 'No-Code'], '⚡'],
    ['Make', 'https://make.com', 'Automation', 'Free + paid', 'Visual automation engine for richer branching and app orchestration.', ['Visual', 'Automation', 'APIs'], '🧵'],
    ['Pipedream', 'https://pipedream.com', 'Automation', 'Free + paid', 'Developer-friendly workflow automation with code and AI steps.', ['Automation', 'Developers', 'APIs'], '🪄'],
    ['Gumloop', 'https://gumloop.com', 'Automation', 'Paid', 'AI workflow builder aimed at operators and growth teams.', ['Agents', 'Ops', 'Automation'], '🫧'],
    ['Bardeen', 'https://bardeen.ai', 'Automation', 'Free + paid', 'Automation assistant for browser actions, GTM, and repetitive work.', ['Browser', 'Automation', 'Ops'], '🤖'],
    ['Relay.app', 'https://relay.app', 'Automation', 'Paid', 'Human-in-the-loop automation for GTM and operations workflows.', ['Ops', 'Approvals', 'Automation'], '📨'],
    ['Lindy', 'https://lindy.ai', 'Automation', 'Paid', 'AI agents for scheduling, coordination, and operations routines.', ['Agents', 'Ops', 'Scheduling'], '📆'],
    ['Tines', 'https://www.tines.com', 'Automation', 'Paid', 'Secure workflow automation favored by IT, ops, and security teams.', ['Security', 'Ops', 'Automation'], '🛡️'],
    ['Retool Workflows', 'https://retool.com/products/workflows', 'Automation', 'Paid', 'Workflow automation tied to internal tools and business apps.', ['Internal Tools', 'Workflows', 'Ops'], '🧱'],
    ['Trigger.dev', 'https://trigger.dev', 'Automation', 'Free + paid', 'Background jobs and events for AI and app backends.', ['Jobs', 'Events', 'Developers'], '⏲️'],
    ['Temporal', 'https://temporal.io', 'Automation', 'Free + paid', 'Durable execution platform for reliable long-running workflows.', ['Durable', 'Workflows', 'Infra'], '🕰️'],
    ['AirOps', 'https://airops.com', 'Automation', 'Paid', 'AI workflows for SEO, content, and growth operations.', ['Content', 'SEO', 'Automation'], '📣'],
    ['Playwright', 'https://playwright.dev', 'Testing/Observability', 'Free', 'Browser automation and testing framework with AI-friendly workflows.', ['Testing', 'Browser', 'E2E'], '🎭'],
    ['Promptfoo', 'https://promptfoo.dev', 'Testing/Observability', 'Free + paid', 'Evaluate prompts, models, and agent outputs with test cases.', ['Evals', 'Prompts', 'Quality'], '🧪'],
    ['Langfuse', 'https://langfuse.com', 'Testing/Observability', 'Free + paid', 'Tracing, prompts, and analytics for LLM applications.', ['Tracing', 'Analytics', 'Prompts'], '📊'],
    ['Helicone', 'https://helicone.ai', 'Testing/Observability', 'Free + paid', 'AI gateway, analytics, and logging for LLM traffic.', ['Gateway', 'Logs', 'Analytics'], '🚁'],
    ['Braintrust', 'https://braintrustdata.com', 'Testing/Observability', 'Paid', 'Evaluations and observability platform for AI teams.', ['Evals', 'Observability', 'Quality'], '🧠'],
    ['Humanloop', 'https://humanloop.com', 'Testing/Observability', 'Paid', 'Prompt management, evaluation, and human feedback loops.', ['Prompts', 'Feedback', 'Evals'], '🧍'],
    ['Weights & Biases', 'https://wandb.ai', 'Testing/Observability', 'Free + paid', 'Experiment tracking, model ops, and AI workflow observability.', ['Experiments', 'MLOps', 'Tracking'], '📉'],
    ['Arize Phoenix', 'https://arize.com/phoenix/', 'Testing/Observability', 'Free + paid', 'Open-source AI observability and evaluation stack.', ['Open Source', 'Tracing', 'Evals'], '🔥'],
    ['Sentry', 'https://sentry.io', 'Testing/Observability', 'Free + paid', 'Error monitoring and performance data for shipped products.', ['Errors', 'Monitoring', 'Performance'], '🚨'],
    ['Checkly', 'https://checkly.com', 'Testing/Observability', 'Paid', 'Synthetic monitoring for APIs, flows, and production journeys.', ['Monitoring', 'Synthetic', 'Checks'], '✅'],
    ['Logfire', 'https://logfire.pydantic.dev', 'Testing/Observability', 'Free + paid', 'Structured observability for Python apps and agents.', ['Python', 'Logs', 'Observability'], '🪵'],
    ['PostHog', 'https://posthog.com', 'Testing/Observability', 'Free + paid', 'Product analytics, feature flags, and experimentation in one stack.', ['Analytics', 'Flags', 'Experiments'], '🦔'],
    ['Clerk', 'https://clerk.com', 'Auth/Payments/Data', 'Free + paid', 'Developer-first authentication for modern SaaS apps.', ['Auth', 'Users', 'Frontend'], '🔐'],
    ['Auth0', 'https://auth0.com', 'Auth/Payments/Data', 'Free + paid', 'Enterprise identity platform for authentication and authorization.', ['Identity', 'Enterprise', 'Auth'], '🪪'],
    ['WorkOS', 'https://workos.com', 'Auth/Payments/Data', 'Usage-based', 'Enterprise-ready auth, SSO, and user management APIs.', ['SSO', 'Enterprise', 'Auth'], '🏢'],
    ['Stytch', 'https://stytch.com', 'Auth/Payments/Data', 'Usage-based', 'Authentication APIs for consumer and B2B products.', ['Auth', 'API', 'Login'], '🧾'],
    ['Stripe', 'https://stripe.com', 'Auth/Payments/Data', 'Usage-based', 'Payments, billing, and subscriptions for digital businesses.', ['Billing', 'Payments', 'SaaS'], '💳'],
    ['Lemon Squeezy', 'https://lemonsqueezy.com', 'Auth/Payments/Data', 'Paid', 'Merchant of record platform for software sales and subscriptions.', ['Payments', 'MoR', 'Digital Products'], '🍋'],
    ['Polar', 'https://polar.sh', 'Auth/Payments/Data', 'Free + paid', 'Billing and monetization tooling for developer-first businesses.', ['Billing', 'Open Source', 'Developer'], '🐻‍❄️'],
    ['Resend', 'https://resend.com', 'Auth/Payments/Data', 'Free + paid', 'Developer email platform for transactional and lifecycle flows.', ['Email', 'API', 'Lifecycle'], '✉️'],
    ['Loops', 'https://loops.so', 'Auth/Payments/Data', 'Paid', 'Modern email marketing and lifecycle messaging for SaaS teams.', ['Email', 'Marketing', 'Lifecycle'], '🔄'],
    ['Algolia', 'https://algolia.com', 'Auth/Payments/Data', 'Free + paid', 'Search and discovery platform for apps, docs, and marketplaces.', ['Search', 'Discovery', 'Docs'], '🔍'],
    ['Typesense', 'https://typesense.org', 'Auth/Payments/Data', 'Open source', 'Fast open-source search engine for developer products.', ['Search', 'Open Source', 'DX'], '📚'],
    ['Sanity', 'https://sanity.io', 'Auth/Payments/Data', 'Free + paid', 'Structured content platform for blogs, docs, and marketplaces.', ['CMS', 'Content', 'Structured'], '📝'],
    ['Contentful', 'https://contentful.com', 'Auth/Payments/Data', 'Free + paid', 'Composable content platform for larger digital experiences.', ['CMS', 'Enterprise', 'Content'], '🗃️']
  ]);

  const sourceGroups = [
    {
      id: 'feeds',
      icon: '📡',
      title: 'RSS, blogs, and official feeds',
      intro: 'These are the highest-signal product, model, and ecosystem feeds to ingest every morning before drafting.',
      items: mapLinks([
        ['OpenAI News', 'https://openai.com/news/', 'Model launches, platform changes, safety notes, and product updates.'],
        ['Anthropic News', 'https://www.anthropic.com/news', 'Claude launches, API features, and enterprise announcements.'],
        ['Google DeepMind Blog', 'https://deepmind.google/discover/blog/', 'Research launches, Gemini ecosystem updates, and labs storytelling.'],
        ['Google Developers Blog AI', 'https://developers.googleblog.com/en/search/label/AI/', 'Developer-facing AI releases and platform notes from Google.'],
        ['Hugging Face Blog', 'https://huggingface.co/blog', 'Open-model launches, tooling, and hands-on implementation guides.'],
        ['GitHub Changelog', 'https://github.blog/changelog/', 'Copilot, Actions, and developer platform changes worth tracking.'],
        ['Vercel Changelog', 'https://vercel.com/changelog', 'Frontend, v0, AI SDK, and deployment workflow updates.'],
        ['Supabase Blog', 'https://supabase.com/blog', 'Backend releases, DX upgrades, and builder-stack announcements.'],
        ['Firebase Blog', 'https://firebase.blog', 'Google app platform updates and hosted builder opportunities.'],
        ['Cloudflare AI Blog', 'https://blog.cloudflare.com/tag/ai/', 'Edge AI, agents, workers, and inference infrastructure news.'],
        ['LangChain Blog', 'https://blog.langchain.com/', 'Agent frameworks, retrieval patterns, and orchestration updates.'],
        ['Replicate Blog', 'https://replicate.com/blog', 'Open-source model releases and practical deployment examples.'],
        ['Mistral AI News', 'https://mistral.ai/news/', 'Open-weight model launches and enterprise positioning.'],
        ['Modal Blog', 'https://modal.com/blog', 'Inference, serverless compute, and engineering case studies.'],
        ['Perplexity Hub', 'https://www.perplexity.ai/hub/blog', 'Search product direction and research-centric AI workflows.'],
        ['OpenRouter Blog', 'https://openrouter.ai/blog', 'Routing, provider comparisons, and model marketplace changes.']
      ])
    },
    {
      id: 'platforms',
      icon: '📰',
      title: 'News platforms and industry coverage',
      intro: 'Use these publications to round out the official-feed view with market framing, reporting, and operator analysis.',
      items: mapLinks([
        ['MIT Technology Review AI', 'https://www.technologyreview.com/topic/artificial-intelligence/', 'High-trust reporting on model economics, regulation, and risk.'],
        ['VentureBeat AI', 'https://venturebeat.com/ai/', 'Fast business coverage on enterprise AI and product launches.'],
        ['TechCrunch AI', 'https://techcrunch.com/category/artificial-intelligence/', 'Startup and funding news tied to the builder ecosystem.'],
        ['The Verge AI', 'https://www.theverge.com/ai-artificial-intelligence', 'Consumer-facing AI product stories and cultural shifts.'],
        ['The Decoder', 'https://the-decoder.com', 'Sharp reporting on European AI policy, launches, and labs.'],
        ['AI News', 'https://artificialintelligence-news.com/', 'Steady news flow for enterprise, tooling, and adoption trends.'],
        ['Machine Learning Mastery', 'https://machinelearningmastery.com/blog/', 'Practical explainers you can convert into educational content.'],
        ['Towards AI', 'https://pub.towardsai.net/', 'Community publishing pipeline for tutorials and trend pieces.'],
        ['arXiv cs.LG', 'https://arxiv.org/list/cs.LG/recent', 'Paper pipeline for benchmarking and model architecture tracking.'],
        ['Latent Space', 'https://www.latent.space', 'Operator-grade analysis bridging products, infra, and startups.']
      ])
    },
    {
      id: 'x',
      icon: '🐦',
      title: 'X / Twitter pages to watch daily',
      intro: 'This is where the vibe-coding and agent world breaks first, often hours before blogs catch up.',
      items: mapLinks([
        ['OpenAI', 'https://x.com/openai', 'Official launches, demos, and platform narrative.'],
        ['Anthropic', 'https://x.com/AnthropicAI', 'Claude launches, agent demos, and enterprise framing.'],
        ['Google DeepMind', 'https://x.com/GoogleDeepMind', 'Gemini, research launches, and ecosystem news.'],
        ['Hugging Face', 'https://x.com/huggingface', 'Open models, dev tools, and community releases.'],
        ['Vercel', 'https://x.com/vercel', 'v0, AI SDK, and frontend tooling updates.'],
        ['GitHub', 'https://x.com/github', 'Copilot, repos, and platform-level developer updates.'],
        ['Andrej Karpathy', 'https://x.com/karpathy', 'High-signal research and coding-agent perspective.'],
        ['Simon Willison', 'https://x.com/simonw', 'Agent tooling, evals, and rapid link-blogging.'],
        ['Swyx', 'https://x.com/swyx', 'AI engineer market commentary and operator takes.'],
        ['Guillermo Rauch', 'https://x.com/rauchg', 'Vercel, product direction, and frontend shipping notes.'],
        ['Nat Friedman', 'https://x.com/natfriedman', 'Ecosystem commentary, product bets, and AI investing signals.'],
        ['Harrison Chase', 'https://x.com/hwchase17', 'LangChain ecosystem moves and agent orchestration ideas.'],
        ['Amjad Masad', 'https://x.com/amasad', 'Replit, coding agents, and builder-economy commentary.'],
        ['Ethan Mollick', 'https://x.com/emollick', 'Practical AI adoption, education, and workflow framing.'],
        ['Andrew Ng', 'https://x.com/AndrewYNg', 'Course launches, learning resources, and broad AI trends.']
      ])
    },
    {
      id: 'linkedin',
      icon: '💼',
      title: 'LinkedIn company and operator pages',
      intro: 'Use LinkedIn for more enterprise-facing launches, partnership news, hiring moves, and adoption stories.',
      items: mapLinks([
        ['OpenAI on LinkedIn', 'https://www.linkedin.com/company/openai/', 'Enterprise product messaging and ecosystem credibility.'],
        ['Anthropic on LinkedIn', 'https://www.linkedin.com/company/anthropicresearch/', 'Claude launches, events, and enterprise trust signals.'],
        ['GitHub on LinkedIn', 'https://www.linkedin.com/company/github/', 'Copilot positioning, platform news, and developer audience reach.'],
        ['Vercel on LinkedIn', 'https://www.linkedin.com/company/vercel/', 'Product launches and partner narratives for modern web teams.'],
        ['Hugging Face on LinkedIn', 'https://www.linkedin.com/company/huggingface/', 'Open-source ecosystem and enterprise AI stories.'],
        ['Supabase on LinkedIn', 'https://www.linkedin.com/company/supabase/', 'Backend stack launches and startup-friendly messaging.'],
        ['Replit on LinkedIn', 'https://www.linkedin.com/company/replit/', 'Education, agents, and app-building momentum.'],
        ['LangChain on LinkedIn', 'https://www.linkedin.com/company/langchain/', 'Framework releases and enterprise agent demand signals.'],
        ['Mistral AI on LinkedIn', 'https://www.linkedin.com/company/mistralai/', 'Open-model product updates and business adoption.'],
        ['Perplexity on LinkedIn', 'https://www.linkedin.com/company/perplexity-ai/', 'Search-centric AI use cases and product rollouts.'],
        ['NVIDIA on LinkedIn', 'https://www.linkedin.com/company/nvidia/', 'Infra and enterprise AI demand context.'],
        ['DeepLearning.AI on LinkedIn', 'https://www.linkedin.com/company/deeplearningai/', 'Courses, learning partnerships, and audience growth ideas.']
      ])
    },
    {
      id: 'reddit',
      icon: '👀',
      title: 'Reddit communities and thread mines',
      intro: 'Reddit is where tool comparisons, pain points, prompts, and pricing reactions show up with less polish and more truth.',
      items: mapLinks([
        ['r/LocalLLaMA', 'https://www.reddit.com/r/LocalLLaMA/', 'Open-model launches, local stacks, benchmarks, and tooling.'],
        ['r/MachineLearning', 'https://www.reddit.com/r/MachineLearning/', 'Research discussion, papers, and engineering debate.'],
        ['r/artificial', 'https://www.reddit.com/r/artificial/', 'Broad AI launches, reactions, and market chatter.'],
        ['r/OpenAI', 'https://www.reddit.com/r/OpenAI/', 'Product changes, prompt ideas, and user reactions.'],
        ['r/ClaudeAI', 'https://www.reddit.com/r/ClaudeAI/', 'Claude workflows, pricing talk, and coding use cases.'],
        ['r/ChatGPT', 'https://www.reddit.com/r/ChatGPT/', 'Mainstream user behavior and feature perception.'],
        ['r/singularity', 'https://www.reddit.com/r/singularity/', 'Speculation, model hype, and adoption narratives.'],
        ['r/webdev', 'https://www.reddit.com/r/webdev/', 'Practical reactions from developers shipping websites and apps.'],
        ['r/SaaS', 'https://www.reddit.com/r/SaaS/', 'Monetization, acquisition, and product-market fit discussion.'],
        ['r/SideProject', 'https://www.reddit.com/r/SideProject/', 'Builder showcases, launch posts, and user feedback loops.']
      ])
    },
    {
      id: 'newsletters',
      icon: '📬',
      title: 'Substack, Beehiiv, and newsletter operators',
      intro: 'These newsletters are perfect for sourcing angles, ideas, sponsor targets, and daily recaps you can respond to fast.',
      items: mapLinks([
        ['Latent Space', 'https://www.latent.space', 'Deep operator analysis across models, infra, and startups.'],
        ['Import AI', 'https://importai.substack.com', 'Jack Clark’s long-running AI strategy and policy lens.'],
        ['The Rundown AI', 'https://www.therundown.ai', 'Daily AI recap format worth studying for growth.'],
        ['Superhuman AI', 'https://www.superhuman.ai', 'Fast-moving AI productivity and tool adoption framing.'],
        ['Ben\'s Bites', 'https://www.bensbites.co', 'Sharp aggregation with sponsor-friendly audience habits.'],
        ['TLDR AI', 'https://tldr.tech/ai', 'Daily summary format with strong developer crossover.'],
        ['The Neuron', 'https://www.theneuron.ai', 'Highly readable AI rundown with mass-market voice.'],
        ['Mindstream', 'https://www.mindstream.news', 'Quick-hit AI briefings designed for consistent reading.'],
        ['The Sequence', 'https://thesequence.ai', 'Technical AI coverage and market intelligence.'],
        ['Interconnects', 'https://www.interconnects.ai', 'Nathan Lambert’s model and open-source analysis.'],
        ['One Useful Thing', 'https://www.oneusefulthing.org', 'Practical AI workflow framing from Ethan Mollick.'],
        ['Future Tools Newsletter', 'https://www.futuretools.io/newsletter', 'Tool discovery with creator-style packaging.'],
        ['Every AI', 'https://every.to/ai', 'Narrative essays and product commentary on the AI shift.'],
        ['Last Week in AI', 'https://lastweekin.ai', 'Dense weekly briefing for people who want the full map.']
      ])
    },
    {
      id: 'youtube',
      icon: '📺',
      title: 'YouTube educators and builder channels',
      intro: 'These channels are great inputs for tutorials, affiliate-friendly walkthroughs, and product adoption patterns.',
      items: mapLinks([
        ['Tina Huang', 'https://www.youtube.com/@TinaHuang1', 'AI education, workflows, and practical career-oriented content.'],
        ['Matt Wolfe', 'https://www.youtube.com/@mattwx', 'AI tools and product roundups with strong discovery reach.'],
        ['Riley Brown', 'https://www.youtube.com/@rileybrown_ai', 'Vibe-coding evangelism and app-building walkthroughs.'],
        ['Theo', 'https://www.youtube.com/@t3dotgg', 'Fast reactions to developer tooling and startup software.'],
        ['Fireship', 'https://www.youtube.com/@Fireship', 'Short-form developer explainers and product trend spotting.'],
        ['Code with Ania Kubów', 'https://www.youtube.com/channel/UC5DNytAJ6_FISueUfzZCVsw', 'Frontend tutorials that pair well with generated apps.'],
        ['The Coding Train', 'https://www.youtube.com/@TheCodingTrain', 'Creative coding energy and community-friendly pedagogy.'],
        ['sentdex', 'https://www.youtube.com/@sentdex', 'Python, ML, and practical implementation depth.'],
        ['Nicholas Renotte', 'https://www.youtube.com/@NicholasRenotte', 'Hands-on AI projects and product-style walkthroughs.'],
        ['DeepLearning.AI', 'https://www.youtube.com/@Deeplearningai', 'Course launches, interviews, and short technical primers.']
      ])
    }
  ];

  const coverageRadar = [
    {
      icon: '🧠',
      title: 'Model launches and benchmarks',
      copy: 'Cover new model releases, pricing changes, eval results, and where each model actually fits in real vibe-coding workflows.',
      tags: ['Models', 'Benchmarks', 'Pricing']
    },
    {
      icon: '🛠️',
      title: 'Builder tools and IDE shipping notes',
      copy: 'Track Cursor, Windsurf, Claude Code, v0, Lovable, Bolt, Replit, GitHub Copilot, and every high-intent workflow tool.',
      tags: ['Builders', 'Agents', 'Workflow']
    },
    {
      icon: '📚',
      title: 'Tutorials, guides, and case studies',
      copy: 'Translate product launches into practical content: stack breakdowns, app teardowns, and “how to ship this today” explainers.',
      tags: ['Tutorials', 'Case Studies', 'How-To']
    },
    {
      icon: '🌐',
      title: 'Open-source repos and agent stacks',
      copy: 'Mine GitHub, Hugging Face, and framework blogs for the next workflow people will copy into production.',
      tags: ['Open Source', 'Agents', 'Repos']
    },
    {
      icon: '💬',
      title: 'Social pulse and community demand',
      copy: 'Use X, LinkedIn, Reddit, and YouTube comments to find pain points, hot takes, and monetizable “best tool for X” questions.',
      tags: ['X', 'Reddit', 'Demand']
    },
    {
      icon: '🤝',
      title: 'Monetization and partner fit',
      copy: 'Every daily recap should surface a relevant partner angle: a stack recommendation, workflow demo, or tool comparison that converts.',
      tags: ['Affiliate', 'Sponsor', 'Distribution']
    }
  ];

  const monetizationLanes = [
    {
      icon: '🧪',
      title: 'Comparison posts',
      copy: '“Cursor vs Windsurf vs Claude Code” and similar high-intent buying content can support affiliate, sponsor, and lead-gen motions.'
    },
    {
      icon: '🧰',
      title: 'Stack bundles',
      copy: 'Package tool stacks like “Lovable + Supabase + Vercel” into tutorial bundles, template kits, and partner-ready landing pages.'
    },
    {
      icon: '📣',
      title: 'Launch explainers',
      copy: 'When a tool ships a big feature, publish the breakdown the same day and position the post as the fastest way to understand it.'
    },
    {
      icon: '📰',
      title: 'Newsletter sponsorships',
      copy: 'A daily or weekly briefing creates recurring sponsor inventory and makes tool launches easy to feature without losing editorial shape.'
    },
    {
      icon: '🎓',
      title: 'Course and template cross-sells',
      copy: 'Turn tutorials into premium templates, learning products, or gated workflows that pair with the tools you cover.'
    },
    {
      icon: '📈',
      title: 'Evergreen SEO pages',
      copy: 'Keep a living directory of tools, feeds, and newsletters so your site compounds search traffic instead of only chasing news cycles.'
    }
  ];

  const partnerTracks = mapLinks([
    ['Cursor', 'https://cursor.com', 'Great fit for IDE comparisons, setup guides, and “how I code faster” style content.'],
    ['Windsurf', 'https://windsurf.com', 'Pair with agent workflow explainers and side-by-side productivity experiments.'],
    ['Lovable', 'https://lovable.dev', 'Ideal for “launch a SaaS in a weekend” and no-code-to-code hybrid tutorials.'],
    ['v0', 'https://v0.dev', 'Best surfaced through UI teardown posts, landing-page rebuilds, and frontend bundles.'],
    ['Bolt.new', 'https://bolt.new', 'Fits browser-based rapid build challenges, demos, and stack experiments.'],
    ['Replit', 'https://replit.com', 'Strong for beginner-to-builder content and educational partnerships.'],
    ['Supabase', 'https://supabase.com', 'Perfect anchor for backend tutorials, template stacks, and project walkthroughs.'],
    ['Vercel', 'https://vercel.com', 'High fit for deployment guides, v0 workflows, and next-step shipping content.'],
    ['Cloudflare Workers', 'https://developers.cloudflare.com/workers/', 'Use for agent infrastructure explainers and edge deployment tutorials.'],
    ['OpenAI', 'https://openai.com', 'Works well inside model comparisons, prompt guides, and app case studies.'],
    ['Anthropic', 'https://anthropic.com', 'Strong match for Claude coding workflows and enterprise-friendly tutorials.'],
    ['n8n', 'https://n8n.io', 'Great for workflow automation posts, agent chains, and ops playbooks.']
  ]);

  const dailyGuide = {
    title: '1,500-word daily “state of AI building and work” brief',
    deck: 'This is the repeatable editorial format for a daily blog post or newsletter that covers models, agents, workflows, and monetizable tool picks without feeling like random link spam.',
    sections: [
      ['Lead signal + why it matters', '120 words', 'Open with the single most important change and tell builders why they should care today.'],
      ['Model launches and pricing shifts', '220 words', 'Summarize labs, APIs, benchmarks, and what changed in practical terms.'],
      ['Builder tools and agent shipping notes', '220 words', 'Cover IDEs, hosted builders, workflows, and notable product updates.'],
      ['Open-source repos and workflow experiments', '220 words', 'Pull one or two repos, patterns, or stack ideas people can test immediately.'],
      ['Social pulse from X, LinkedIn, Reddit, and YouTube', '180 words', 'Quote the emerging questions, complaints, or hot takes to ground the piece in real demand.'],
      ['Stack of the day / tool of the day', '180 words', 'Recommend a concrete stack or tool combo with one clear use case.'],
      ['Affiliate or partner angle', '140 words', 'Add a transparent recommendation, sponsor slot, or callout that fits the editorial topic.'],
      ['Action checklist + CTA', '220 words', 'Close with what to test, what to watch next, and where readers should subscribe or click.']
    ],
    workflow: [
      ['07:00', 'Scan official feeds and product changelogs first.'],
      ['08:00', 'Cluster updates into models, tools, workflows, and community demand.'],
      ['09:00', 'Draft the main brief while the topic is still fresh on social.'],
      ['10:00', 'Insert one clear partner angle that matches the day’s topic.'],
      ['10:30', 'Repurpose into X, LinkedIn, newsletter, and directory updates.']
    ],
    distribution: [
      'Publish the full blog post on-site as the canonical URL.',
      'Turn the strongest take into an X thread with source links.',
      'Post a shorter LinkedIn operator summary for enterprise reach.',
      'Send the recap to a daily or twice-weekly newsletter segment.',
      'Update your living tool directory when a product meaningfully changes.'
    ]
  };

  const stats = {
    toolCount: tools.length,
    sourceCount: sourceGroups.reduce((sum, group) => sum + group.items.length, 0),
    newsletterCount: sourceGroups.find((group) => group.id === 'newsletters').items.length,
    partnerCount: partnerTracks.length
  };

  return {
    tools,
    sourceGroups,
    coverageRadar,
    monetizationLanes,
    partnerTracks,
    dailyGuide,
    stats
  };
})();
