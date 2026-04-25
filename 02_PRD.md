# LETSVIBEAI.COM - PRODUCT REQUIREMENTS DOCUMENT (PRD)
## MVP Phase 1: Discovery + Inspiration + Workspace (Months 1-4)

**Product Owner:** You  
**Version:** 1.0  
**Status:** Ready for Claude Code build  
**Last Updated:** April 2026

---

## EXECUTIVE SUMMARY

**Goal:** Launch a functional MVP of LetsVibeAI with three core features:
1. **Directory** - Search and discover AI courses, events, platforms
2. **Media Hub** - Aggregated AI news, videos, podcasts, original content
3. **Workspace** - AI-powered tutor, guided labs, prompt builder, document generator

**Target Launch:** 8-12 weeks  
**Target MVP Users:** 1,000-5,000 sign-ups in first 90 days  
**Technical Approach:** Next.js + Claude API + Supabase (all beginner-friendly, no complex backend)

---

## 1. FEATURE SPECIFICATIONS (MVP)

### 1.1 DIRECTORY (Discover Courses, Events, Platforms)

**Purpose:** Central index of AI learning opportunities so users don't have to hunt across 20 sites.

#### 1.1.1 Course Directory
| Feature | Scope | MVP Status |
|---------|-------|-----------|
| **Course database** | Manually aggregated list of 500-1000 courses from Coursera, Udemy, Skillshare, Edx, LinkedIn Learning | ✓ Include |
| **Search + filter** | Search by keyword, filter by: price (free/paid), duration, level (beginner/intermediate/advanced), platform, tags (ChatGPT, LLMs, etc.) | ✓ Include |
| **Course cards** | Title, platform, instructor, price, duration, description, link to course, rating (if available) | ✓ Include |
| **Save for later** | User can bookmark courses; saved list appears in dashboard | ✓ Include |
| **User reviews** | Users can rate/comment on courses on LetsVibeAI (separate from platform rating) | ⊘ Post-MVP (v1.1) |
| **AI recommendations** | "Recommended for you" based on user history and interests | ⊘ Post-MVP (v1.2) |

**Data Source Strategy:**
- **Initial (Bootstrap):** Manually research and input top 500-1000 courses from major platforms (you can do this in 2-3 weeks)
- **Mid-term (Month 4-6):** Build web scrapers or partner APIs with Coursera, Udemy (they have partner APIs)
- **Long-term (Year 2):** Custom API integrations with every major platform

**Database Schema (simplified):**
```
Course:
  - id (unique)
  - title
  - platform (Coursera, Udemy, etc.)
  - instructor
  - description
  - category (LLM, Prompt Engineering, etc.)
  - difficulty (Beginner/Intermediate/Advanced)
  - price
  - duration (hours)
  - url (link to course)
  - tags (array: ["ChatGPT", "LLMs", "Prompting"])
  - rating_letsvibeai (out of 5)
  - review_count
  - created_at
```

---

#### 1.1.2 Events & Meetups
| Feature | Scope | MVP Status |
|---------|-------|-----------|
| **Event database** | Aggregated list of AI hackathons, meetups, conferences (virtual + local), bootcamps | ✓ Include |
| **Search + filter** | Filter by: date, location (or virtual), event type (hackathon/meetup/conference), cost | ✓ Include |
| **Calendar view** | See events on a calendar by month | ✓ Include |
| **Event cards** | Title, date, location, description, link to registration, cost | ✓ Include |
| **Save for later** | Bookmark events | ✓ Include |
| **Integration with API.events** | Auto-pull events from EventBrite, Meetup, Lunchclub | ⊘ Post-MVP |

**Data Source Strategy:**
- **Initial:** Manually aggregate from Meetup, Eventbrite, AngelList (100-200 events to start)
- **Mid-term:** Build Meetup API integration to auto-sync events
- **Long-term:** Partner with university registrars, accelerators (Y Combinator, Techstars) for event feeds

---

#### 1.1.3 Platforms & Tools Index
| Feature | Scope | MVP Status |
|---------|-------|-----------|
| **Tool database** | Index of AI tools: ChatGPT, Claude, Perplexity, Hugging Face, Replicate, Colab, etc. (50-100) | ✓ Include |
| **Categories** | LLM platforms, code execution, image generation, data, deployment, etc. | ✓ Include |
| **Tool cards** | Name, category, description, free/paid, link | ✓ Include |
| **Comparison matrix** | Side-by-side compare tools (e.g., ChatGPT vs Claude vs Gemini) | ⊘ Post-MVP (v1.2) |

---

### 1.2 MEDIA HUB (Inspiration & Curation)

**Purpose:** Aggregated feed of AI news, videos, and podcasts so users stay informed without YouTube algorithm fatigue.

#### 1.2.1 News Feed
| Feature | Scope | MVP Status |
|---------|-------|-----------|
| **RSS aggregator** | Pull articles from: The Verge, Hacker News, ArXiv, Product Hunt, r/MachineLearning, LinkedIn | ✓ Include |
| **News cards** | Title, source, preview, date, link to original | ✓ Include |
| **Search + filter** | Search by keyword; filter by source, date range | ✓ Include |
| **Original articles** | Your own written pieces (from Live Build AI newsletter) | ✓ Include |
| **Curation** | Manually flag articles as "trending," "must-read," "deep-dive" | ✓ Include (manual) |
| **AI-powered summaries** | Claude summarizes articles automatically (show in card, full summary on click) | ✓ Include (MVP feature) |

**Data Source Strategy:**
- **RSS feeds:** HackerNews, ArXiv, The Verge RSS feeds (free)
- **Reddit:** r/MachineLearning, r/LanguageModels (API)
- **Original:** Your Live Build AI newsletter archives (re-post)
- **LinkedIn:** Manual curation of posts (or API if you have access)
- **YouTube:** Links to key videos from your creator partners

---

#### 1.2.2 Video Library
| Feature | Scope | MVP Status |
|---------|-------|-----------|
| **Curated video index** | Manually categorized YouTube videos from: Nick Saraev, Liam Ottley, Jono Catliff, Nate Herk, etc. (100-200 to start) | ✓ Include |
| **Video cards** | Thumbnail, title, creator, duration, embed option, link | ✓ Include |
| **Categories** | ChatGPT, LLMs, Prompt Engineering, Tools & Products, Careers | ✓ Include |
| **Search + filter** | Search by keyword; filter by creator, length, category | ✓ Include |
| **Watch later** | Users can bookmark videos | ✓ Include |
| **Video transcripts** | Auto-generate transcripts via YouTube API or Claude | ⊘ Post-MVP (v1.1) |
| **YouTube API integration** | Auto-fetch videos from selected creators' channels | ⊘ Post-MVP (Month 3-4) |

**Data Source Strategy:**
- **Initial:** Manually research and link to 200+ best videos from your creator list (1-2 weeks of work)
- **Mid-term:** YouTube API integration to auto-pull from selected channels
- **Long-term:** Partner with creators for exclusive clips/early access

---

#### 1.2.3 Podcast Aggregator
| Feature | Scope | MVP Status |
|---------|-------|-----------|
| **Podcast feed** | Pull from Spotify, Apple Podcasts, RSS of AI-focused podcasts (AI Alignment, Machine Learning Street Talk, Gradient Descent, etc.) | ✓ Include |
| **Podcast cards** | Title, host, episode number, description, link, audio player | ✓ Include |
| **Search + filter** | Search by keyword; filter by podcast, date | ✓ Include |
| **Save episodes** | Bookmark for later listening | ✓ Include |

---

#### 1.2.4 Original Content
| Feature | Scope | MVP Status |
|---------|-------|-----------|
| **Blog/Articles** | Your written pieces (from Live Build AI newsletter, GPTPat, Medium) | ✓ Include |
| **Video series** | Weekly "AI News Digest" video (5-10 min) summarizing the week's AI news; you record, HeyGen or Remotion for production | ✓ Include (Month 2) |
| **Podcast/Audio** | Record weekly podcast interviewing creators, entrepreneurs, or summarizing news | ⊘ Post-MVP (Month 4+) |
| **Interactive tutorials** | Step-by-step guides with screenshots (Claude can help write these) | ⊘ Post-MVP (Month 3+) |

---

### 1.3 WORKSPACE (Interactive Learning)

**Purpose:** Where learners *do* things—not just watch. This is your differentiation.

#### 1.3.1 AI Tutor
| Feature | Scope | MVP Status |
|---------|-------|-----------|
| **Chat interface** | User asks questions about AI, course content, career; Claude API responds | ✓ Include |
| **Student context** | System remembers: user's level, interests, courses they're taking, projects they're working on | ✓ Include (simple version) |
| **Pre-built prompts** | Quick buttons for common questions: "Explain this concept," "Help me debug," "Check my prompt," "Career advice" | ✓ Include |
| **Conversation history** | User can see past chats; save specific conversations | ✓ Include |
| **Feedback** | User thumbs-up/down responses to help improve | ✓ Include |
| **Rate limiting** | Free users: 10 messages/day; premium: unlimited | ✓ Include |

**Technical Details:**
- Backend: Store conversation history in Supabase
- Use Claude API with system prompt customized to "AI tutor" role
- Embed user profile data in system prompt for personalization

---

#### 1.3.2 Structured Labs (Guided Projects)
| Feature | Scope | MVP Status |
|---------|-------|-----------|
| **Lab structure** | Step-by-step guided projects; each step has: objective, instructions, code template, expected output | ✓ Include (MVP: 5 labs) |
| **Code editor** | Browser-based code editor (Replit or CodePen embed) | ✓ Include |
| **AI assistance** | "Stuck?" button → Claude generates hint; can ask for help in tutor | ✓ Include |
| **Output showcase** | User submits project; appears in portfolio | ✓ Include |
| **Examples** | Pre-filled examples showing how to solve the lab | ✓ Include |
| **Difficulty levels** | Beginner, Intermediate, Advanced | ✓ Include |

**MVP Labs (5 to start):**
1. **Prompt Engineering 101** - Learn to write better ChatGPT prompts; build your own "prompt library"
2. **Build a Q&A Chatbot** - Use Claude API to build a simple chatbot (beginner Python)
3. **Analyze News with AI** - Use Claude to summarize and analyze articles (intermediate)
4. **Image + Text to Summary** - Use Claude Vision to analyze images and generate summaries (intermediate)
5. **Autonomous AI Agent** - Build a simple agent that can use tools (advanced; stretch goal)

Each lab takes 30-90 min; completable in one sitting.

---

#### 1.3.3 Prompt Builder
| Feature | Scope | MVP Status |
|---------|-------|-----------|
| **Template library** | Pre-built prompts for common tasks: summarize article, explain concept, write code, brainstorm ideas, give career advice | ✓ Include |
| **Prompt editor** | Interactive form to customize templates (e.g., select tone, length, detail level) | ✓ Include |
| **Test prompts** | User can test their prompt against Claude API in real-time | ✓ Include |
| **Save + share** | Users can save favorite prompts; optionally share with community | ✓ Include |
| **Prompt examples** | Show "before/after" of good vs bad prompts | ✓ Include |
| **Community prompts** | Browse and use prompts from other users | ⊘ Post-MVP (v1.2) |

---

#### 1.3.4 Document Builder
| Feature | Scope | MVP Status |
|---------|-------|-----------|
| **Document templates** | Pre-built for: PRD, Sitemap, Project Proposal, Brainstorm Doc, Learning Plan, Career Goal Tracker | ✓ Include |
| **AI-assisted writing** | User provides outline/prompt; Claude generates first draft | ✓ Include |
| **Real-time editing** | User can edit the document; re-generate if needed | ✓ Include |
| **Export options** | Download as markdown, PDF, Word doc | ✓ Include (Markdown + PDF) |
| **Prompt context** | Document builder inherits context from user's profile (their interests, level, goals) | ✓ Include |

**MVP Templates (5 to start):**
1. **AI Project Proposal** - Template for pitching an AI project
2. **Learning Plan** - 12-week personalized AI learning roadmap
3. **Career Transition Plan** - For career changers wanting to enter AI
4. **Prompt Library** - Personal collection of useful prompts
5. **Weekly Learning Summary** - Reflect on what you learned

---

### 1.4 USER DASHBOARD & PROFILE

| Feature | Scope | MVP Status |
|---------|-------|-----------|
| **Dashboard** | Home page showing: saved courses, bookmarked events, recent activity, recommended courses, featured articles | ✓ Include |
| **User profile** | User sets: name, email, interests (tags), experience level, goals, location | ✓ Include |
| **Learning progress** | Track: labs completed, projects built, courses started, hours spent | ✓ Include |
| **Portfolio** | Showcase projects built in labs; can be made public (future hiring signal) | ✓ Include |
| **Settings** | Email preferences, privacy, API keys (for advanced users) | ✓ Include |
| **Notifications** | Weekly digest of new courses/articles matching user interests | ⊘ Post-MVP (v1.1) |

---

### 1.5 AUTHENTICATION & ONBOARDING

| Feature | Scope | MVP Status |
|---------|-------|-----------|
| **Sign-up** | Email + password, or OAuth (Google, GitHub) | ✓ Include |
| **Onboarding flow** | 2-min quiz: experience level, interests, goals; shows personalized recommendations | ✓ Include |
| **Email verification** | Send confirmation email | ✓ Include |
| **Free trial** | All features free for 30 days; then some features go premium | ✓ Include |

---

## 2. USER EXPERIENCE FLOW

### 2.1 NEW USER JOURNEY (First 10 minutes)

```
1. Land on letsvibeai.com homepage
2. See 3 sections: "Discover Courses," "Get Inspired," "Learn by Doing"
3. Click "Sign Up" → create account (email or Google)
4. 2-min onboarding: 
   - What's your experience level? (Beginner/Intermediate/Advanced)
   - What interests you? (Select 3 tags: ChatGPT, LLMs, Prompt Engineering, etc.)
   - What's your goal? (Learn for my job / Transition careers / Build projects / Just explore)
5. Personalized dashboard appears with:
   - "Recommended for you" courses
   - "This week in AI" news digest
   - "Get started" suggested labs
6. User can explore, or start a lab immediately
```

### 2.2 DISCOVERY FLOW (10-20 min sessions)

```
User arrives at letsvibeai.com
├─ Click "Courses" tab
│  ├─ See featured courses + search bar
│  ├─ Search "ChatGPT" → 50 results
│  ├─ Filter: "Beginner, Free, <5 hours"
│  ├─ Click course → see details + reviews
│  ├─ "Save for later" → added to dashboard
│  └─ Read related articles in sidebar
├─ Click "News" tab
│  ├─ See latest AI news + summaries
│  ├─ Expand article → Claude-generated summary appears
│  ├─ Click "Full article" → opens on original site
│  └─ Bookmark articles
├─ Click "Videos" tab
│  ├─ See curated videos from favorite creators
│  ├─ Embed video player
│  ├─ Suggested videos in sidebar
│  └─ Bookmark for later
└─ Spend 20 min exploring; leave with 3-5 bookmarked items
```

### 2.3 LEARNING FLOW (30-90 min per lab)

```
User clicks "Start a Lab"
├─ See lab list (beginner → advanced)
├─ Click "Build a Q&A Chatbot" (intermediate, 45 min)
├─ Lab loads with:
│  ├─ Left panel: Instructions + objectives
│  ├─ Middle panel: Code editor
│  ├─ Right panel: AI tutor chat + hints
│  └─ Bottom: Expected output reference
├─ User reads objective
├─ User codes in editor
│  ├─ If stuck, clicks "Hint" → Claude generates hint (no spoilers)
│  ├─ If still stuck, asks in tutor → Claude explains
│  └─ Uses Claude API to test code
├─ User submits project
├─ Project added to portfolio
└─ User sees next recommended lab or course
```

### 2.4 CONTENT CREATION FLOW (Creator partnerships, v1.1+)

```
Creator (e.g., Nick Saraev) contacts LetsVibeAI
├─ Fill out form: channel info, video URLs, audience stats
├─ Agree to rev-share terms (7% of premium subscriptions attributed)
├─ Videos automatically aggregated into library
├─ Featured on creator spotlight section
├─ Analytics dashboard: see how many clicks → conversions
└─ Paid monthly based on performance
```

---

## 3. TECHNICAL ARCHITECTURE (MVP)

### 3.1 Tech Stack (Beginner-Friendly)

| Layer | Technology | Why | Cost |
|-------|-----------|-----|------|
| **Frontend** | Next.js 14 (React) | Easiest for beginners; full-stack capable | Free |
| **Styling** | Tailwind CSS | Low learning curve; pre-built components | Free |
| **Database** | Supabase (PostgreSQL) | Managed DB; real-time features; free tier | Free-$25/mo |
| **Auth** | Supabase Auth | Built-in; supports OAuth | Free-$25/mo |
| **AI API** | Claude API (Anthropic) | Primary; you know it well | $0.50-$2/K tokens |
| **Deployment** | Vercel | Seamless Next.js deployment; free tier | Free-$20/mo |
| **File storage** | Supabase Storage (S3-backed) | Store user documents, exports | Free-$10/mo |
| **Code editor (labs)** | Replit embed or simple Monaco | Beginners can code in browser | Free-$50/mo (Replit) |

**Total Monthly Cost (MVP):**
- Supabase: $25
- Claude API: $50-200 (scales with usage)
- Vercel: $20
- Miscellaneous: $25
- **Total: $120-250/month** (very affordable)

---

### 3.2 Database Schema (Simplified)

```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR UNIQUE,
  name VARCHAR,
  level VARCHAR (Beginner/Intermediate/Advanced),
  interests JSONB (array of tags),
  created_at TIMESTAMP
);

-- Courses
CREATE TABLE courses (
  id UUID PRIMARY KEY,
  title VARCHAR,
  platform VARCHAR,
  instructor VARCHAR,
  price DECIMAL,
  duration_hours INT,
  level VARCHAR,
  tags JSONB (array),
  url VARCHAR,
  rating FLOAT,
  created_at TIMESTAMP
);

-- User Bookmarks
CREATE TABLE bookmarks (
  id UUID PRIMARY KEY,
  user_id UUID (FK to users),
  course_id UUID (FK to courses),
  created_at TIMESTAMP
);

-- News Articles
CREATE TABLE articles (
  id UUID PRIMARY KEY,
  title VARCHAR,
  source VARCHAR,
  url VARCHAR,
  content TEXT,
  summary_by_claude TEXT,
  date_published TIMESTAMP,
  tags JSONB,
  created_at TIMESTAMP
);

-- Labs
CREATE TABLE labs (
  id UUID PRIMARY KEY,
  title VARCHAR,
  description TEXT,
  difficulty VARCHAR,
  instructions TEXT,
  starter_code TEXT,
  expected_output TEXT,
  created_at TIMESTAMP
);

-- User Lab Progress
CREATE TABLE lab_progress (
  id UUID PRIMARY KEY,
  user_id UUID (FK to users),
  lab_id UUID (FK to labs),
  status VARCHAR (in_progress/completed),
  submitted_code TEXT,
  submission_date TIMESTAMP,
  created_at TIMESTAMP
);

-- Chat History
CREATE TABLE chat_messages (
  id UUID PRIMARY KEY,
  user_id UUID (FK to users),
  role VARCHAR (user/assistant),
  message TEXT,
  created_at TIMESTAMP
);
```

---

### 3.3 API Endpoints (Backend, Next.js API routes)

```
Authentication
POST   /api/auth/signup          → Create account
POST   /api/auth/login           → Log in
POST   /api/auth/logout          → Log out
GET    /api/auth/me              → Current user info

Courses (Directory)
GET    /api/courses              → List all courses (with pagination, filters)
GET    /api/courses/:id          → Get single course details
POST   /api/courses/search       → Search courses by keyword
POST   /api/bookmarks            → Save course
DELETE /api/bookmarks/:id        → Remove bookmark
GET    /api/bookmarks            → Get user's saved courses

News & Articles
GET    /api/articles             → List all articles
GET    /api/articles/:id         → Get single article + summary
POST   /api/articles/search      → Search articles

Videos
GET    /api/videos               → List all videos
GET    /api/videos/:id           → Get video details

Events
GET    /api/events               → List events (with filters)
GET    /api/events/:id           → Get event details

User Dashboard
GET    /api/dashboard            → User's personalized dashboard
POST   /api/profile              → Update profile
GET    /api/profile              → Get user profile

AI Tutor (Workspace)
POST   /api/tutor/chat           → Send message to Claude tutor
GET    /api/tutor/history        → Get chat history
DELETE /api/tutor/history/:id    → Clear chat

Labs
GET    /api/labs                 → List all labs
GET    /api/labs/:id             → Get lab details
POST   /api/labs/:id/submit      → Submit lab project
GET    /api/labs/:id/progress    → Get user's progress on lab

Document Builder
POST   /api/documents            → Create new document
PUT    /api/documents/:id        → Edit document
POST   /api/documents/:id/export → Export as PDF/Markdown
```

---

## 4. CONTENT & DATA STRATEGY

### 4.1 Initial Data Bootstrap (Week 1-3)

| Content | Source | Volume | Effort | Owner |
|---------|--------|--------|--------|-------|
| **Courses** | Coursera, Udemy, Skillshare (manual research) | 500-1000 | 2 weeks | You |
| **Events** | Meetup, Eventbrite (manual list) | 100-200 | 3 days | You |
| **Videos** | YouTube (manual curation) | 100-200 | 1 week | You |
| **Articles** | Your newsletter archives + aggregated RSS | 50-100 | 3 days | You |
| **Tools** | Manual index of 50-100 AI tools | 50-100 | 2 days | You |

**Total Bootstrap Effort: 3-4 weeks (if full-time)**

**Pro tip:** Make this fun. Spend a few hours per day exploring these tools and building the database. Treat it like research for the platform itself.

### 4.2 Ongoing Content (Month 2+)

| Content | Frequency | Effort | Owner |
|---------|-----------|--------|-------|
| **Original articles** | 2-4 per week | 2-3 hrs/article | You |
| **Weekly AI digest video** | 1 per week | 2-3 hrs (record + edit with HeyGen) | You |
| **News feed updates** | Automatic (RSS) | 0 | Automation |
| **Creator partnerships** | Rolling | Outreach + onboarding | You + partners |
| **New labs** | 1 new lab per month | 4-6 hrs/lab | You |

---

## 5. MONETIZATION ROADMAP (Post-MVP)

### 5.1 Phase 1 (Months 1-4): Free Growth
- Everything is free
- Goal: PMF (product-market fit) validation; 1,000+ active users

### 5.2 Phase 2 (Months 5-8): Freemium
| Feature | Free | Premium ($9-19/mo) |
|---------|------|-------------------|
| Course directory | ✓ | ✓ |
| News/video feed | ✓ | ✓ |
| AI tutor | 10 messages/day | Unlimited |
| Labs | 1 free lab/mo | Unlimited |
| Document builder | Basic templates | Premium templates + export to Word |
| Portfolio/projects | Public, limited | Private, unlimited, shareable |
| Certificates | — | ✓ |

### 5.3 Phase 3 (Months 9+): B2B
| Segment | Price | Features |
|---------|-------|----------|
| **Team/Enterprise** | $500-2000/mo | Custom learning paths, team dashboards, admin controls, SAML auth |
| **Creator Revenue Share** | 7% of premium revenue | Featured on creator page, analytics, direct audience |
| **University Partnerships** | Custom | White-label, accredited certificates, branded instance |

---

## 6. SUCCESS METRICS (MVP)

### 6.1 User Acquisition
- **Week 4:** 200 sign-ups
- **Week 8:** 500 sign-ups
- **Week 12:** 1,000+ sign-ups

### 6.2 Engagement
- **Daily Active Users (DAU):** 20-30% of sign-ups
- **Weekly Time on Site:** 2+ hours/week
- **Courses Saved:** Avg 3-5 per user
- **Labs Started:** 5-10% of users start a lab

### 6.3 Content
- **Courses Indexed:** 500-1000
- **Videos Aggregated:** 100-200
- **Original Articles:** 20+

### 6.4 Creator Partnerships
- **Creator Sign-ups:** 5-10 (goal for month 4)

---

## 7. LAUNCH TIMELINE

| Phase | Timeline | Deliverables | Owner |
|-------|----------|--------------|-------|
| **Research & Design** | Week 1-2 | Sitemap, wireframes, database schema | You |
| **Bootstrap Content** | Week 2-4 | 500 courses, 100 events, 100 videos indexed | You |
| **Build MVP** | Week 4-8 | Frontend (Next.js), backend (API routes), database | Claude Code |
| **Testing & Polish** | Week 8-10 | Bug fixes, UI improvements, performance optimization | Claude Code + You |
| **Beta Launch** | Week 10 | Soft launch to 100 friends/network | You |
| **Public Launch** | Week 12 | Full public launch; marketing push | You |

---

## 8. POST-MVP ROADMAP (v1.1 - 1.5)

### v1.1 (Month 4-6)
- [ ] YouTube API integration (auto-pull from creators)
- [ ] User reviews on courses
- [ ] Podcast API integration (Spotify, Apple Podcasts)
- [ ] Email digests (weekly newsletter)
- [ ] Video transcripts (Claude Vision)

### v1.2 (Month 6-9)
- [ ] AI-powered recommendations
- [ ] Tool comparison matrix
- [ ] Community prompts (users share + vote on best prompts)
- [ ] Freemium tier transition + subscription
- [ ] 5-10 new labs
- [ ] First creator revenue share (pilot with 2-3 creators)

### v1.3 (Month 9-12)
- [ ] University partnerships (accredited certificates)
- [ ] B2B team features (dashboards, admin controls)
- [ ] First corporate customers (pilot)
- [ ] Blockchain certificates (beta)
- [ ] Creator marketplace (white-label for top creators)

---

## 9. RISKS & DEPENDENCIES

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| **Content creation is slow** | High | Low growth; churn increases | Hire content contractor or start with aggregation-only |
| **Claude API costs scale badly** | Medium | Margins compress; profitability delayed | Use rate limiting; caching; move to batch API |
| **Creators won't partner** | Medium | Content velocity drops | Start with organic audience; prove traffic first |
| **Building takes longer than planned** | High | Delay launch | Scope creep is the killer; stick to MVP rigorously |
| **User churn is high** | High | Unsustainable growth | Focus on engagement; track retention weekly |

---

## 10. GLOSSARY & DEFINITIONS

| Term | Definition |
|------|-----------|
| **MVP** | Minimum Viable Product: core 3 features (directory, media hub, workspace) |
| **PMF** | Product-Market Fit: users love it; retention is high; growth is organic |
| **DAU** | Daily Active Users |
| **MAU** | Monthly Active Users |
| **Freemium** | Free tier + paid premium tier |
| **CAC** | Customer Acquisition Cost |
| **LTV** | Lifetime Value (how much a user is worth over time) |
| **Rev-share** | Revenue share (percentage of subscription revenue paid to creators) |

---

## CONCLUSION

This PRD describes a **lean, achievable MVP** that you can launch in 8-12 weeks without hiring a big team. The tech stack is beginner-friendly; the initial content requires effort but is doable; the business model is straightforward.

**Next steps:**
1. Share this PRD with 3-5 trusted people for feedback
2. Read the Sitemap + UX Flow doc (next file)
3. Start Claude Code build (see Build Plan doc)

Let's go.
