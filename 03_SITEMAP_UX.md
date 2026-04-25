# LETSVIBEAI.COM - SITEMAP & UX FLOWS
## MVP Information Architecture & User Journey Maps

---

## 1. SITE STRUCTURE (Information Architecture)

```
letsvibeai.com/
│
├─ Home
│  ├─ Hero: "Learn AI by Doing"
│  ├─ 3 Value Props (Discover, Get Inspired, Learn by Doing)
│  ├─ Featured Courses (carousel)
│  ├─ This Week in AI (news feed preview)
│  ├─ CTA: "Sign Up Free" / "Start Learning"
│  └─ Footer (about, contact, links)
│
├─ AUTH
│  ├─ /signup
│  │  ├─ Email + password form
│  │  ├─ Google/GitHub OAuth option
│  │  ├─ 2-min onboarding (level, interests, goals)
│  │  └─ Redirect to dashboard
│  ├─ /login
│  │  ├─ Email + password
│  │  ├─ OAuth option
│  │  └─ Forgot password link
│  ├─ /reset-password
│  └─ /verify-email (email verification)
│
├─ AUTHENTICATED SECTION (requires login)
│
│  ├─ DASHBOARD (/dashboard)
│  │  ├─ Welcome banner (personalized)
│  │  ├─ Quick stats (courses saved, labs started, time spent)
│  │  ├─ Recommended for you (carousel)
│  │  ├─ Continue learning (in-progress items)
│  │  ├─ Recent activity feed
│  │  ├─ Upcoming events
│  │  └─ Suggested next action CTA
│  │
│  ├─ DISCOVERY (Directory)
│  │  ├─ /courses
│  │  │  ├─ Search bar + filters (level, price, duration, platform, tags)
│  │  │  ├─ Course grid (cards with title, platform, price, duration, rating)
│  │  │  ├─ Pagination
│  │  │  ├─ Save/bookmark button on each card
│  │  │  └─ Course detail page (/courses/:id)
│  │  │     ├─ Full description, instructor info
│  │  │     ├─ User reviews on LetsVibeAI
│  │  │     ├─ Link to external course
│  │  │     ├─ Related articles sidebar
│  │  │     └─ Save/unsave button
│  │  │
│  │  ├─ /events
│  │  │  ├─ Search + filters (date, location, type, cost)
│  │  │  ├─ Calendar view (month) + list view
│  │  │  ├─ Event cards (title, date, location, cost)
│  │  │  ├─ Event detail page (/events/:id)
│  │  │  │  ├─ Full description, organizer, registration link
│  │  │  │  └─ Save/bookmark
│  │  │  └─ Integration with Google Calendar (save to calendar)
│  │  │
│  │  └─ /platforms
│  │     ├─ Tool grid (ChatGPT, Claude, Perplexity, etc.)
│  │     ├─ Filter by category (LLM, image gen, code, etc.)
│  │     ├─ Tool cards (name, category, free/paid, link)
│  │     ├─ Tool detail page (/platforms/:id)
│  │     │  ├─ Description, pricing, use cases
│  │     │  ├─ Comparison with similar tools (link)
│  │     │  └─ Link to external tool
│  │     └─ Comparison matrix (side-by-side)
│  │
│  ├─ INSPIRATION (Media Hub)
│  │  ├─ /news
│  │  │  ├─ News feed (newest first)
│  │  │  ├─ Article cards:
│  │  │  │  ├─ Title, source, date, preview
│  │  │  │  ├─ AI-generated summary (Claude)
│  │  │  │  ├─ Tags/categories
│  │  │  │  └─ Bookmark/read full article link
│  │  │  ├─ Search + filter (source, date range, keyword)
│  │  │  └─ Article detail page (/news/:id)
│  │  │     ├─ Full summary (by Claude)
│  │  │     ├─ Original article link
│  │  │     └─ Related articles sidebar
│  │  │
│  │  ├─ /videos
│  │  │  ├─ Video grid (thumbnails, title, creator, duration)
│  │  │  ├─ Filter by creator, category, length
│  │  │  ├─ Video card with embedded player
│  │  │  ├─ Bookmark button
│  │  │  └─ Video detail page (/videos/:id)
│  │  │     ├─ Embedded YouTube player
│  │  │     ├─ Creator info + link to channel
│  │  │     ├─ Description + transcript (if available)
│  │  │     ├─ Related videos sidebar
│  │  │     └─ Bookmark + share
│  │  │
│  │  ├─ /podcasts
│  │  │  ├─ Podcast list + grid
│  │  │  ├─ Episode cards (title, podcast, date, duration)
│  │  │  ├─ Audio player
│  │  │  ├─ Filter by podcast, date
│  │  │  └─ Episode detail page (/podcasts/:id)
│  │  │     ├─ Audio player + transcript (if available)
│  │  │     ├─ Show notes
│  │  │     └─ Bookmark + share
│  │  │
│  │  └─ /original-content (Blog)
│  │     ├─ Article list
│  │     ├─ Article cards (title, date, author, preview)
│  │     ├─ Filter by topic
│  │     ├─ Article detail page (/blog/:id)
│  │     │  ├─ Full article content
│  │     │  ├─ Author bio + social links
│  │     │  ├─ Related articles
│  │     │  ├─ Newsletter signup CTA
│  │     │  └─ Comments section (future)
│  │     │
│  │     └─ /videos/original (Original videos)
│  │        ├─ Video series (e.g., "Weekly AI Digest")
│  │        ├─ Video cards
│  │        └─ Video detail page (/videos/original/:id)
│  │
│  ├─ WORKSPACE (Learning)
│  │  ├─ /workspace (main learning hub)
│  │  │  ├─ Tabs: Labs | Tutor | Prompt Builder | Document Builder
│  │  │  └─ Recently accessed items
│  │  │
│  │  ├─ LABS (Guided projects)
│  │  │  ├─ /labs (lab index)
│  │  │  │  ├─ Lab list (cards or grid)
│  │  │  │  ├─ Filter by difficulty (Beginner/Intermediate/Advanced)
│  │  │  │  ├─ Lab card: title, duration, difficulty, description
│  │  │  │  ├─ Status indicator (not started / in progress / completed)
│  │  │  │  └─ Start button
│  │  │  │
│  │  │  └─ /labs/:id (lab detail + code editor)
│  │  │     ├─ Left panel (instructions)
│  │  │     │  ├─ Objective
│  │  │     │  ├─ Step-by-step instructions
│  │  │     │  ├─ Expected output reference
│  │  │     │  └─ Example solution (collapsible)
│  │  │     │
│  │  │     ├─ Center panel (code editor)
│  │  │     │  ├─ Syntax highlighting
│  │  │     │  ├─ Starter code (pre-filled)
│  │  │     │  ├─ Run/test button
│  │  │     │  └─ Output display
│  │  │     │
│  │  │     └─ Right panel (AI tutor + hints)
│  │  │        ├─ "Stuck? Get a hint" button
│  │  │        ├─ Chat with tutor
│  │  │        ├─ Lab-specific resources (links to tutorials)
│  │  │        └─ Submit project button
│  │  │           ↓
│  │  │           Success page
│  │  │           ├─ Congratulations message
│  │  │           ├─ Project added to portfolio
│  │  │           ├─ Next recommended lab
│  │  │           └─ Share to social (future)
│  │  │
│  │  ├─ TUTOR (AI chat)
│  │  │  ├─ /tutor (chat interface)
│  │  │  │  ├─ Chat history (previous conversations)
│  │  │  │  ├─ Chat window
│  │  │  │  ├─ Quick prompt buttons (Explain, Debug, Career advice, etc.)
│  │  │  │  ├─ Message input + send button
│  │  │  │  ├─ Save conversation button
│  │  │  │  ├─ Clear history button
│  │  │  │  └─ Usage indicator (free: 10/10 messages remaining)
│  │  │  │
│  │  │  └─ /tutor/:conversation_id (saved conversation)
│  │  │     ├─ Full chat history
│  │  │     ├─ Export/share options
│  │  │     └─ Back to chat
│  │  │
│  │  ├─ PROMPT BUILDER
│  │  │  ├─ /prompts (prompt library)
│  │  │  │  ├─ Browse templates
│  │  │  │  ├─ Search by category
│  │  │  │  ├─ Prompt cards (title, category, description)
│  │  │  │  └─ Create new prompt button
│  │  │  │
│  │  │  └─ /prompts/:id (edit prompt)
│  │  │     ├─ Prompt template (editable text area)
│  │  │     ├─ Customization form (tone, length, etc.)
│  │  │     ├─ "Test prompt" button → test against Claude
│  │  │     ├─ Output display (Claude's response)
│  │  │     ├─ Save prompt button
│  │  │     ├─ Share prompt (optional)
│  │  │     └─ Rate this prompt (helpful/not helpful)
│  │  │
│  │  └─ DOCUMENT BUILDER
│  │     ├─ /documents (document list)
│  │     │  ├─ Browse document templates
│  │     │  ├─ Template cards (title, description)
│  │     │  ├─ Create new document button
│  │     │  └─ Recent documents
│  │     │
│  │     └─ /documents/:id (edit document)
│  │        ├─ Document editor (rich text)
│  │        ├─ AI-assist button → Claude generates content
│  │        ├─ Context panel (user profile, interests)
│  │        ├─ Export buttons (Markdown, PDF, Word)
│  │        ├─ Save + autosave indicator
│  │        ├─ Share document
│  │        └─ Version history (future)
│  │
│  ├─ PORTFOLIO (/portfolio)
│  │  ├─ User's projects + outputs
│  │  ├─ Labs completed
│  │  ├─ Documents created
│  │  ├─ Badges/certificates earned (future)
│  │  ├─ View as public profile (optional)
│  │  ├─ Share individual projects
│  │  └─ Settings (visibility, sharing)
│  │
│  └─ PROFILE & SETTINGS
│     ├─ /profile
│     │  ├─ Edit profile info (name, email, photo)
│     │  ├─ Edit interests (tags)
│     │  ├─ Edit experience level
│     │  ├─ Edit goals
│     │  ├─ Edit location
│     │  └─ Save changes
│     │
│     └─ /settings
│        ├─ Email preferences (notifications, weekly digest)
│        ├─ Privacy settings (portfolio visibility)
│        ├─ API keys (for advanced users)
│        ├─ Connected accounts (OAuth)
│        ├─ Delete account
│        └─ Log out
│
└─ PUBLIC PAGES (no login required)
   ├─ /about
   │  ├─ Mission + vision
   │  ├─ Team bios
   │  └─ Contact
   │
   ├─ /pricing (after MVP v1.1)
   │  ├─ Pricing tiers
   │  ├─ Feature comparison
   │  └─ FAQ
   │
   ├─ /blog/:id (publicly visible articles)
   │
   ├─ /404 (not found)
   │
   └─ /privacy, /terms, /contact (footer links)
```

---

## 2. USER JOURNEY MAPS

### 2.1 Journey 1: Newcomer Discovery (First-Time User)

**User:** Sarah, career-changer interested in AI; never used LetsVibeAI before

**Timeline:** 15 minutes | **Goal:** Find a beginner course and start a lab

```
PHASE 1: DISCOVERY (5 min)
─────────────────────────────
Sarah lands on homepage
   ↓
Reads headline: "Learn AI by Doing"
   ↓
Clicks "Explore Courses" 
   ↓
Sees course search interface
   ↓
Filters: "Beginner," "Free," "Chatbot / Prompt Engineering"
   ↓
Sees 20 results
   ↓
Clicks on "Prompt Engineering 101" course (Udemy)
   ↓
Reads description; sees it's 4 hours, free, highly rated
   ↓
Bookmarks it ("Save for later")


PHASE 2: INSPIRATION (5 min)
─────────────────────────────
Sarah notices "This Week in AI" section
   ↓
Clicks on trending article: "ChatGPT Passes 100M Users"
   ↓
Reads Claude-generated summary
   ↓
Clicks "Read full article" (opens external site)
   ↓
Returns to LetsVibeAI
   ↓
Watches featured video: "5 ChatGPT Prompts That Work" (Nick Saraev)
   ↓
Bookmarks video


PHASE 3: ACTION (5 min)
─────────────────────────────
Sarah clicks "Start a Lab" → sees lab list
   ↓
Sees "Prompt Engineering 101" lab (beginner, 30 min)
   ↓
Clicks start
   ↓
Lab loads with instructions + code editor
   ↓
Reads first objective: "Write a prompt that generates a story"
   ↓
Types prompt in editor
   ↓
Clicks "Test prompt" → sees Claude's output
   ↓
Realizes she's confused; clicks "Hint" button
   ↓
Gets Claude's hint (non-spoiler)
   ↓
Ah-ha moment; fixes her prompt
   ↓
Lab shows: "Great work! Next step..."
   ↓
Sarah is hooked; continues lab for 20 more minutes
   ↓
Submits project → added to portfolio


SARAH'S OUTCOME (at 45 min mark)
─────────────────────────────────
✓ Created account
✓ Found 1 course to take
✓ Read 1 news article
✓ Watched 1 video
✓ Started and partially completed 1 lab
✓ Saved 1 lab project to portfolio
✓ Ready to come back tomorrow

→ Platform win: Sarah has done 5 different activities, feels like she "did" something (not just watched)
```

---

### 2.2 Journey 2: Content Creator Partnership

**User:** Nick Saraev, AI YouTuber with 200K subscribers

**Timeline:** 3 weeks | **Goal:** Partner with LetsVibeAI; drive traffic to own channel

```
WEEK 1: OUTREACH
─────────────────
You: Reach out to Nick on Twitter/LinkedIn
   ↓
"Hey Nick, love your channel. We're building a hub for AI learners and featuring 
creators like you. Interested in a partnership? We'd promote your videos on our 
platform + share revenue from users who upgrade to premium."
   ↓
Nick: "Interesting, tell me more"
   ↓
You: Send partnership deck + revenue share example
   → "If 1,000 of your viewers come to LetsVibeAI and 5% convert to premium ($15/mo),
      that's $900/mo in revenue; you'd get 7% = $63/mo"
   ↓
Nick: "Let's do a pilot"


WEEK 2: INTEGRATION
─────────────────
Nick: Signs up on LetsVibeAI
   ↓
Provides list of his top 20 YouTube videos + channel link
   ↓
You: Add his videos to LetsVibeAI video library; tag as "Featured Creator"
   ↓
Create "Nick Saraev Hub" page with his bio + video list
   ↓
Set up revenue tracking (connect his conversion data)
   ↓
Nick: Reviews and approves page


WEEK 3: LAUNCH & PROMOTION
─────────────────
Nick: Tweets about partnership
   → "Excited to partner with @LetsVibeAI! Now when you watch my videos there, 
      you can jump straight into a guided lab. Let's learn by doing 🚀"
   ↓
You: Feature Nick on LetsVibeAI homepage + blog
   ↓
Write blog post: "Interview: How Nick Saraev Teaches AI to 200K Learners"
   ↓
Nick shares interview + LetsVibeAI link on his channels
   ↓
Traffic surge to LetsVibeAI from Nick's audience
   → Analytics: 500 clicks from Nick's Twitter
   → 100 new sign-ups from his referral
   → 5 convert to premium in week 1 = $75 revenue; Nick gets $5.25
   ↓
Nick is happy; ready for next month


ONGOING (Month 2+)
─────────────────
Monthly stats sent to Nick:
   → 300 clicks from his videos on LetsVibeAI
   → 50 new users
   → 2 premium conversions = $30 revenue; Nick gets $2.10/mo
   
   (Note: This is small initially, but compounds as platform grows.
    If we hit 50K MAU in year 2, Nick's revenue could be $500+/mo)
   ↓
Nick: "This is good; let's keep going"
   ↓
Both platforms win: Nick gets distribution + revenue; LetsVibeAI gets content + users
```

---

### 2.3 Journey 3: Enterprise User (Team Learning)

**User:** Marcus, learning operations manager at a Series B SaaS company

**Timeline:** 1 month | **Goal:** Train his team on AI; track progress; reduce training time

```
MONTH 1: DISCOVERY & NEGOTIATION
─────────────────────────────────
Marcus: Finds LetsVibeAI (you pitched at a sales event or he found organically)
   ↓
Explores platform as free user
   ↓
Sees potential; reaches out: "Can we use this for our team?"
   ↓
You: Schedule call; show team features (coming in v1.2)
   ↓
Demo:
   → Personal learning paths (custom to each person's role)
   → Admin dashboard: see who's completed what labs
   → Custom labs for company-specific use cases
   → SAML auth (team onboarding)
   → Certificates of completion
   ↓
Marcus: "Perfect. How much?"
   ↓
You: $1,500/month for up to 50 seats
   ↓
Marcus: Approves; signs contract


MONTH 1 CONTINUED: ONBOARDING
─────────────────────────────
You: Set up Marcus's team
   ↓
Create custom learning path: "AI for Product Managers (8 weeks)"
   ├─ Week 1-2: ChatGPT fundamentals + prompt engineering
   ├─ Week 3-4: Build with Claude API
   ├─ Week 5-6: LLMs in production (RAG, fine-tuning)
   └─ Week 7-8: Capstone project (apply to own work)
   ↓
Marcus: Invites 25 team members via email (SAML)
   ↓
25 people sign in → see personalized dashboard
   ↓
Kick-off: Marcus announces program; 20 people enroll


WEEK 2: ACTIVE LEARNING
──────────────────────
Team members on LetsVibeAI:
   ├─ Complete "Prompt Engineering 101" lab → 15 people
   ├─ Read news articles on LLMs → 18 people
   ├─ Watch Nick Saraev video on ChatGPT API → 12 people
   ├─ Ask AI tutor questions → 8 people
   └─ Build first personal project → 6 people
   ↓
Admin dashboard shows Marcus:
   ├─ Completion rate: 60% of team on-track
   ├─ Time spent: avg 2.5 hrs/week
   ├─ Most popular lab: "Build a Q&A Chatbot"
   ├─ Engagement trending up
   └─ Estimated ROI: $20K+ in reskilling cost savings
   ↓
Marcus: "This is working. Let's expand to 100 people next quarter."


OUTCOME
────────
✓ Team learns faster (structured vs. scattered)
✓ Marcus can prove ROI to CFO (completion rates, time saved)
✓ LetsVibeAI gets: $1,500/mo revenue, case study, larger deal pipeline
✓ Repeat: Other companies see case study; inquire about pricing
```

---

## 3. WIREFRAMES (Low-Fidelity UI Sketches)

### 3.1 Homepage (Public)

```
┌─────────────────────────────────────────────┐
│  LetsVibeAI.com (logo)  [Sign In] [Sign Up] │
├─────────────────────────────────────────────┤
│                                             │
│   "Learn AI by Doing"                       │
│   The platform between inspiration         │
│   and action for AI learners               │
│                                             │
│   [Search or Browse] [Sign Up Free]         │
│                                             │
├─────────────────────────────────────────────┤
│  3 VALUE PROPOSITIONS (cards)               │
│                                             │
│  📚 Discover            🎬 Get Inspired     │
│  500+ AI courses,       AI news, videos,    │
│  events, tools in      podcasts curated    │
│  one place             daily               │
│                        🧠 Learn by Doing   │
│                        Build projects in   │
│                        guided labs with AI │
│                        tutoring            │
├─────────────────────────────────────────────┤
│  FEATURED CONTENT (carousel)                │
│                                             │
│  [Course 1] [Course 2] [Course 3] [>]     │
│                                             │
│  "This Week in AI" news feed (preview)     │
│  Top story card with summary                │
│                                             │
├─────────────────────────────────────────────┤
│  FOOTER: About | Pricing | Blog | Contact   │
└─────────────────────────────────────────────┘
```

### 3.2 Dashboard (Authenticated User)

```
┌──────────────────────────────────────────────────┐
│ Logo  [Courses][News][Videos][Workspace][Profile]│
├──────────────────────────────────────────────────┤
│                                                  │
│  Welcome back, Sarah! 👋                         │
│  ├─ Courses saved: 3                            │
│  ├─ Labs started: 1                             │
│  └─ Time this week: 3.5 hours                   │
│                                                  │
│  RECOMMENDED FOR YOU                             │
│  [Course card] [Course card] [Course card]      │
│                                                  │
│  CONTINUE LEARNING                               │
│  [In-progress lab: Prompt Engineering...]       │
│  [Resume] [25% complete]                        │
│                                                  │
│  THIS WEEK IN AI                                 │
│  📰 [Article 1 - with summary]                   │
│  📰 [Article 2 - with summary]                   │
│                                                  │
│  UPCOMING EVENTS                                 │
│  🎪 [Event 1]  🎪 [Event 2]                     │
│                                                  │
└──────────────────────────────────────────────────┘
```

### 3.3 Lab Workspace

```
┌───────────────────────────────────────────────────┐
│ LetsVibeAI  [Courses][News][Videos][Workspace]    │
├───────────────────────────────────────────────────┤
│                                                   │
│  LAB: Prompt Engineering 101  [< Back]            │
│                                                   │
│  ┌─────────────────┬──────────────┬───────────┐  │
│  │  INSTRUCTIONS   │  CODE EDITOR │  AI TUTOR │  │
│  │                 │              │           │  │
│  │ Objective:      │ def prompt(): │ 💬 Stuck?│  │
│  │ Write a prompt  │   user_input  │    [Get  │  │
│  │ that generates  │   = "..."     │     hint]│  │
│  │ a story         │               │           │  │
│  │                 │ [Run Code]    │ [Chat]   │  │
│  │ Step 1: ...     │ [Test prompt] │           │  │
│  │ Step 2: ...     │               │ Message  │  │
│  │                 │ OUTPUT:       │ history  │  │
│  │ Expected:       │ "Once upon a  │           │  │
│  │ "Once upon..."  │  time..."     │ [Save]   │  │
│  │                 │               │           │  │
│  │ [Show example]  │               │           │  │
│  └─────────────────┴──────────────┴───────────┘  │
│                                                   │
│  [Submit Project]                                 │
│                                                   │
└───────────────────────────────────────────────────┘
```

### 3.4 Course Directory

```
┌─────────────────────────────────────────────┐
│ Logo  [Courses][News][Videos][Workspace]    │
├─────────────────────────────────────────────┤
│                                             │
│ COURSES                                     │
│                                             │
│ [Search: "ChatGPT"] [Filters ▼]             │
│ Level: [Beginner ▼]  Price: [Free ▼]       │
│ Platform: [All ▼]    Duration: [<5h ▼]     │
│                                             │
│ 127 results                                 │
│                                             │
│ ┌──────────┬──────────┬──────────┐         │
│ │ COURSE 1 │ COURSE 2 │ COURSE 3 │         │
│ │          │          │          │         │
│ │ Prompt   │ ChatGPT  │ LLMs 101 │         │
│ │ Eng 101  │ for Dev  │          │         │
│ │          │          │          │         │
│ │ Coursera │ Udemy    │ edX      │         │
│ │ $0       │ $15      │ Free     │         │
│ │ 4h       │ 8h       │ 6h       │         │
│ │ ⭐ 4.8   │ ⭐ 4.6   │ ⭐ 4.9   │         │
│ │ [Save]   │ [Save]   │ [Save]   │         │
│ └──────────┴──────────┴──────────┘         │
│                                             │
│ [< Prev]  [1] [2] [3] [Next >]              │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 4. INTERACTION PATTERNS

### 4.1 Save/Bookmark Pattern

**User wants to save a course for later**

```
1. User hovers over course card
2. "Save" button appears (heart icon)
3. Click → heart fills + checkmark appears
4. Toast notification: "Added to saved courses"
5. Course appears on user dashboard under "Saved"
6. User can unsave anytime (click again)
7. Saved courses appear in /dashboard and /profile
```

### 4.2 Filter & Search Pattern

**User wants to find beginner-level, free courses**

```
1. User navigates to /courses
2. Sees search bar + filter section
3. Enters "ChatGPT" in search
4. Results show (real-time filter)
5. Selects "Beginner" filter → results update
6. Selects "Free" filter → results update further
7. Results narrow from 500 → 127 → 43 → 12
8. User can clear filters one by one
9. Selected filters shown as "pills" (removable)
```

### 4.3 Lab Progress Pattern

**User starts a lab**

```
1. User clicks "Start Lab"
2. Lab loads; shows 0% progress
3. User reads instruction → sees "Step 1/5"
4. User completes task in code editor
5. Clicks "Test" → output appears
6. Progress bar updates: "Step 1/5 ✓"
7. User moves to Step 2
8. ... repeats ...
9. After Step 5, shows "Submit Project" button
10. Click submit → project added to portfolio
11. Celebration screen: "Congrats! You completed this lab"
12. Shows next recommended lab
13. Lab marked as "Completed" in dashboard
```

### 4.4 AI Tutor Interaction

**User gets stuck; asks tutor for help**

```
1. User is stuck on Step 2 of lab
2. Clicks "Stuck? Get help" button
3. Tutor chat opens in right panel
4. System message: "I'm your AI tutor. I can help explain concepts, 
   give hints without spoilers, or help debug. What's the issue?"
5. User: "I don't understand what this line of code does"
6. Tutor explains the concept in simple terms
7. User: "Got it, but how do I apply it?"
8. Tutor: "Try [hint, not full solution]"
9. User continues coding
10. User: "I got it! Thanks."
11. Tutor: "Awesome! Keep going to the next step"
12. User can save this conversation for later review
```

---

## 5. RESPONSE TIMES & PERFORMANCE

| Page | Expected Load Time | Notes |
|------|--------------------|-------|
| Homepage | < 2 sec | Mostly static; minimal API calls |
| Dashboard | 1-2 sec | User data + personalization |
| Course search (50 results) | 1-1.5 sec | Database query + rendering |
| News feed | 1-2 sec | RSS aggregation + summaries |
| Lab page | 2-3 sec | Code editor + AI context |
| Tutor response | 2-5 sec | Claude API latency |
| Video embed | 1-2 sec | YouTube iframe |

**Optimization strategy:**
- Cache frequently accessed data (courses, articles)
- Lazy-load images
- Use CDN for static assets
- Batch Claude API calls
- Pre-fetch next lab while user completes current one

---

## 6. MOBILE RESPONSIVENESS

**MVP Design Principle:** Mobile-first

All pages must work on:
- ✓ Mobile (375px - 480px)
- ✓ Tablet (768px - 1024px)
- ✓ Desktop (1200px+)

**Mobile-specific considerations:**
- Lab workspace: Stack vertically (instructions → editor → tutor)
- Course grid: 1-column on mobile, 2-3 on desktop
- Navigation: Mobile hamburger menu (or tab bar)
- Tutor: Full-screen chat on mobile
- Code editor: Smaller viewport; horizontal scroll if needed

---

## 7. ACCESSIBILITY (WCAG 2.1 AA)

**MVP Requirements:**
- ✓ Keyboard navigation (all interactive elements)
- ✓ Alt text on images
- ✓ Semantic HTML (headings, landmarks, etc.)
- ✓ Color contrast (4.5:1 for text)
- ✓ Focus indicators visible
- ✓ Aria labels where needed
- ✓ Video captions (for tutorials)

---

## 8. ERROR STATES & EDGE CASES

### 8.1 Network Error
```
User tries to load courses but internet is down

Display: "Couldn't load courses. Please check your connection 
and try again."
Actions: [Retry] [Go to dashboard]
```

### 8.2 Lab Code Error
```
User runs code; syntax error

Display: Error message from interpreter (e.g., "NameError: name 'x' is not defined")
Actions: [Debug hint] [Ask tutor] [Show example]
```

### 8.3 Tutor Rate Limit
```
Free user has used 10/10 daily messages

Display: "You've used your 10 daily tutor messages. 
Upgrade to premium for unlimited access."
Actions: [Upgrade] [Tomorrow I can ask again]
```

### 8.4 Empty States
```
New user with no saved courses

Display: Empty state illustration
Title: "No saved courses yet"
Description: "Start exploring and save courses to 
see them here."
Actions: [Browse courses] [Get recommendations]
```

---

## SUMMARY

This sitemap + UX flow document describes:

1. **Complete information architecture** (all pages and navigation)
2. **3 detailed user journey maps** (new user, creator partnership, enterprise)
3. **4 wireframes** (homepage, dashboard, lab, course directory)
4. **4 interaction patterns** (save, filter, lab progress, tutor)
5. **Performance + accessibility targets**

**Next step:** Build plan (Claude Code templates + dev guide)
