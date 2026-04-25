# LETSVIBEAI.COM - TECHNICAL BUILD PLAN
## Phase 1: MVP Development in Claude Code + Next.js

**Status:** Ready to build  
**Timeline:** Weeks 1-12 (parallel with content bootstrap)  
**Tech Stack:** Next.js, TypeScript, Tailwind CSS, Supabase, Claude API  
**Learning Level:** Beginner (no complex backend knowledge required)

---

## 1. DEVELOPMENT ROADMAP (Week by Week)

### Week 1-2: Foundation & Setup

#### Week 1 Tasks
- [ ] Create Next.js 14 project
- [ ] Set up GitHub repo
- [ ] Configure Supabase project (database + auth)
- [ ] Set up environment variables (.env.local)
- [ ] Create project folder structure
- [ ] Deploy skeleton to Vercel

**Deliverable:** Blank Next.js app deployed; ready for development

#### Week 2 Tasks
- [ ] Set up Tailwind CSS + component library
- [ ] Create base layout + navigation
- [ ] Set up Supabase auth (signup, login, logout)
- [ ] Create user profile schema
- [ ] Build signup/login pages
- [ ] Create onboarding flow (2-min quiz)

**Deliverable:** Authentication working; users can sign up, log in, complete onboarding

---

### Week 3-4: Directory (Courses & Events)

#### Week 3 Tasks
- [ ] Create course database schema
- [ ] Manually input 500-1000 courses (or parse CSV)
- [ ] Build course page + database queries
- [ ] Create course search + filtering
- [ ] Build course cards + grid layout
- [ ] Create course detail page

**Deliverable:** Full course directory with search, filters, detail pages

#### Week 4 Tasks
- [ ] Create event database schema
- [ ] Manually input 100-200 events
- [ ] Build events page + search/filter
- [ ] Create calendar view (HTML calendar component)
- [ ] Create platforms/tools directory
- [ ] Add bookmark/save functionality for all

**Deliverable:** Complete directory (courses + events + platforms); users can search + save

---

### Week 5-6: Media Hub (News + Videos)

#### Week 5 Tasks
- [ ] Set up RSS feed aggregation (feed parser library)
- [ ] Create articles database schema
- [ ] Set up automated RSS pulls (Hacker News, ArXiv, etc.)
- [ ] Integrate Claude API for article summaries
- [ ] Build news feed page + filtering
- [ ] Create article detail page + full summary

**Deliverable:** News feed showing aggregated articles with Claude summaries

#### Week 6 Tasks
- [ ] Create video database schema
- [ ] Manually input 100-200 YouTube videos (with metadata)
- [ ] Build video library + search/filter
- [ ] Embed YouTube players (iframe)
- [ ] Create creator pages (e.g., "Nick Saraev's videos")
- [ ] Add bookmark functionality

**Deliverable:** Video library with embedded players; users can watch + bookmark

---

### Week 7-8: Workspace (Labs + Tutor)

#### Week 7 Tasks
- [ ] Create lab database schema
- [ ] Build 2 MVP labs (Prompt Engineering 101, Q&A Chatbot)
- [ ] Create lab page layout (3-panel UI)
- [ ] Integrate Monaco code editor (or Replit embed)
- [ ] Set up lab submission system
- [ ] Create portfolio/project showcase page

**Deliverable:** 2 fully functional labs; users can code + submit projects

#### Week 8 Tasks
- [ ] Integrate Claude API tutor (chat endpoint)
- [ ] Create tutor chat UI + conversation history storage
- [ ] Implement rate limiting (10 messages/day free)
- [ ] Build prompt builder with templates
- [ ] Create document builder with basic templates
- [ ] Add export functionality (Markdown, PDF)

**Deliverable:** Full workspace (labs, tutor, prompt builder, document builder)

---

### Week 9-10: Dashboard & UX Polish

#### Week 9 Tasks
- [ ] Create user dashboard (personalized recommendations)
- [ ] Build profile page + settings
- [ ] Implement user preferences (interests, level, goals)
- [ ] Create notification preferences
- [ ] Build leaderboard (simple version: most labs completed)
- [ ] Add progress tracking UI

**Deliverable:** Complete user experience; personalized dashboard

#### Week 10 Tasks
- [ ] Mobile responsiveness (all pages)
- [ ] Accessibility audit (keyboard nav, alt text, contrast)
- [ ] Performance optimization (caching, image optimization)
- [ ] Error state handling (network errors, edge cases)
- [ ] Empty state designs
- [ ] Security audit (XSS, CSRF, SQL injection prevention)

**Deliverable:** Polished, accessible, responsive UI

---

### Week 11-12: Testing & Launch Prep

#### Week 11 Tasks
- [ ] End-to-end testing (sign up → complete lab → submit)
- [ ] User testing with 10 beta testers
- [ ] Bug fixes based on feedback
- [ ] Performance profiling + optimization
- [ ] Set up analytics (Vercel Analytics, Google Analytics)
- [ ] Create onboarding help docs + video

**Deliverable:** Bug-free, tested product

#### Week 12 Tasks
- [ ] Final content bootstrap (1000+ courses, 200+ videos)
- [ ] Create landing page + SEO
- [ ] Set up email/contact form
- [ ] Deploy to production (vercel.com)
- [ ] Soft launch to 100 beta users (collect feedback)
- [ ] Public launch + marketing push

**Deliverable:** Live MVP accessible to public

---

## 2. PROJECT FOLDER STRUCTURE

```
letsvibeai/
├── public/
│   ├── images/
│   ├── icons/
│   └── videos/ (thumbnails)
├── src/
│   ├── app/ (Next.js app router)
│   │   ├── layout.tsx (root layout)
│   │   ├── page.tsx (homepage)
│   │   ├── globals.css
│   │   ├── (auth)/
│   │   │   ├── signup/page.tsx
│   │   │   ├── login/page.tsx
│   │   │   └── reset-password/page.tsx
│   │   ├── (dashboard)/
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── profile/page.tsx
│   │   │   └── settings/page.tsx
│   │   ├── (discovery)/
│   │   │   ├── courses/page.tsx
│   │   │   ├── courses/[id]/page.tsx
│   │   │   ├── events/page.tsx
│   │   │   └── platforms/page.tsx
│   │   ├── (media)/
│   │   │   ├── news/page.tsx
│   │   │   ├── videos/page.tsx
│   │   │   └── podcasts/page.tsx
│   │   ├── (workspace)/
│   │   │   ├── workspace/page.tsx
│   │   │   ├── labs/page.tsx
│   │   │   ├── labs/[id]/page.tsx
│   │   │   ├── tutor/page.tsx
│   │   │   ├── prompts/page.tsx
│   │   │   └── documents/page.tsx
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── signup/route.ts
│   │   │   │   ├── login/route.ts
│   │   │   │   └── logout/route.ts
│   │   │   ├── courses/
│   │   │   │   ├── route.ts (GET all, POST new)
│   │   │   │   └── [id]/route.ts (GET one, PUT update, DELETE)
│   │   │   ├── tutor/
│   │   │   │   └── chat/route.ts (POST to Claude API)
│   │   │   ├── labs/
│   │   │   │   └── [id]/submit/route.ts
│   │   │   └── articles/
│   │   │       └── route.ts (GET, with RSS aggregation)
│   │   └── portfolio/page.tsx
│   │
│   ├── components/ (reusable components)
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Footer.tsx
│   │   ├── cards/
│   │   │   ├── CourseCard.tsx
│   │   │   ├── EventCard.tsx
│   │   │   ├── VideoCard.tsx
│   │   │   └── ArticleCard.tsx
│   │   ├── forms/
│   │   │   ├── SearchForm.tsx
│   │   │   ├── FilterPanel.tsx
│   │   │   └── OnboardingForm.tsx
│   │   ├── tutor/
│   │   │   ├── ChatWindow.tsx
│   │   │   └── MessageBubble.tsx
│   │   ├── labs/
│   │   │   ├── LabEditor.tsx (code editor)
│   │   │   ├── LabInstructions.tsx
│   │   │   └── LabHints.tsx
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Toast.tsx
│   │   │   └── LoadingSpinner.tsx
│   │   └── dashboard/
│   │       ├── WelcomeBanner.tsx
│   │       ├── QuickStats.tsx
│   │       └── RecommendedItems.tsx
│   │
│   ├── lib/ (utilities)
│   │   ├── supabase.ts (Supabase client setup)
│   │   ├── api.ts (API calls)
│   │   ├── auth.ts (auth helpers)
│   │   ├── claude.ts (Claude API calls)
│   │   ├── rss.ts (RSS feed parsing)
│   │   ├── utils.ts (misc helpers)
│   │   └── constants.ts (hardcoded values)
│   │
│   ├── types/ (TypeScript types)
│   │   ├── index.ts
│   │   ├── user.ts
│   │   ├── course.ts
│   │   ├── lab.ts
│   │   └── article.ts
│   │
│   └── styles/ (global styles)
│       └── globals.css (Tailwind)
│
├── .env.local (secrets: API keys)
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

---

## 3. KEY CODE TEMPLATES (Copy-Paste Ready)

### 3.1 Supabase Setup (lib/supabase.ts)

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Helper to get current user
export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

// Helper to get user session
export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}
```

### 3.2 Course API Route (app/api/courses/route.ts)

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const level = searchParams.get('level');
    const price = searchParams.get('price');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');

    let query = supabase.from('courses').select('*', { count: 'exact' });

    // Apply filters
    if (search) {
      query = query.or(`title.ilike.%${search}%,description.ilike.%${search}%`);
    }
    if (level) {
      query = query.eq('level', level);
    }
    if (price === 'free') {
      query = query.eq('price', 0);
    }

    // Pagination
    const { data, count, error } = await query
      .range(offset, offset + limit - 1)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ data, count });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
```

### 3.3 Claude Tutor API Route (app/api/tutor/chat/route.ts)

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message, userId } = await request.json();

    // Get user context (interests, level, current course, etc.)
    const { data: user } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    // Store user message
    await supabase.from('chat_messages').insert({
      user_id: userId,
      role: 'user',
      message,
    });

    // Get recent chat history for context
    const { data: history } = await supabase
      .from('chat_messages')
      .select('role, message')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(5);

    // Build system prompt with user context
    const systemPrompt = `You are an AI tutor for LetsVibeAI, a platform for learning AI.
The student is:
- Name: ${user?.name}
- Level: ${user?.level}
- Interests: ${user?.interests?.join(', ')}
- Goal: ${user?.goal}

Be helpful, encouraging, and non-judgmental. Explain concepts simply. 
If they're stuck on a lab, give hints without spoiling the solution.
Keep responses concise (under 150 words unless they ask for more).`;

    // Call Claude API
    const response = await anthropic.messages.create({
      model: 'claude-opus-4-1-20250805',
      max_tokens: 500,
      system: systemPrompt,
      messages: [
        ...history.reverse().map((m) => ({
          role: m.role as 'user' | 'assistant',
          content: m.message,
        })),
        { role: 'user', content: message },
      ],
    });

    const assistantMessage =
      response.content[0].type === 'text' ? response.content[0].text : '';

    // Store assistant response
    await supabase.from('chat_messages').insert({
      user_id: userId,
      role: 'assistant',
      message: assistantMessage,
    });

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error('Tutor error:', error);
    return NextResponse.json(
      { error: 'Failed to get response from tutor' },
      { status: 500 }
    );
  }
}
```

### 3.4 Course Search Component (components/CourseSearch.tsx)

```typescript
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import CourseCard from './cards/CourseCard';
import FilterPanel from './forms/FilterPanel';

export default function CourseSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [courses, setCourses] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [level, setLevel] = useState(searchParams.get('level') || '');
  const [page, setPage] = useState(1);

  const pageSize = 20;

  useEffect(() => {
    async function fetchCourses() {
      setLoading(true);
      const params = new URLSearchParams({
        search,
        level,
        limit: pageSize.toString(),
        offset: ((page - 1) * pageSize).toString(),
      });

      const res = await fetch(`/api/courses?${params}`);
      const { data, count } = await res.json();
      setCourses(data);
      setTotal(count);
      setLoading(false);
    }

    fetchCourses();
  }, [search, level, page]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(1);
    router.push(`/courses?search=${search}`);
  };

  return (
    <div className="flex gap-6 p-6">
      {/* Filter Sidebar */}
      <aside className="w-64">
        <FilterPanel level={level} onLevelChange={setLevel} />
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <form onSubmit={handleSearch} className="mb-6">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </form>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <p className="text-gray-600 mb-4">{total} results</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center gap-2">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Previous
              </button>
              <span>Page {page}</span>
              <button
                onClick={() => setPage(p => p + 1)}
                disabled={page * pageSize >= total}
              >
                Next
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
```

### 3.5 Chat Component (components/tutor/ChatWindow.tsx)

```typescript
'use client';

import { useState, useRef, useEffect } from 'react';
import { useUser } from '@/lib/auth'; // Assuming you have a custom hook
import MessageBubble from './MessageBubble';

export default function ChatWindow() {
  const { user } = useUser();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !user) return;

    // Add user message to UI
    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Send to API
      const res = await fetch('/api/tutor/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          userId: user.id,
        }),
      });

      const { message: assistantMessage } = await res.json();

      // Add assistant response
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: assistantMessage },
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-96 border rounded-lg">
      {/* Message history */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} />
        ))}
        {loading && <div className="text-gray-500">Tutor is thinking...</div>}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-4 border-t flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your tutor..."
          className="flex-1 px-3 py-2 border rounded-lg"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
}
```

### 3.6 Database Schema (SQL for Supabase)

```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT auth.uid(),
  email VARCHAR UNIQUE,
  name VARCHAR,
  level VARCHAR CHECK (level IN ('Beginner', 'Intermediate', 'Advanced')),
  interests JSONB DEFAULT '[]',
  goal VARCHAR,
  location VARCHAR,
  created_at TIMESTAMP DEFAULT now()
);

-- Courses
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR NOT NULL,
  platform VARCHAR,
  instructor VARCHAR,
  description TEXT,
  category VARCHAR,
  difficulty VARCHAR CHECK (difficulty IN ('Beginner', 'Intermediate', 'Advanced')),
  price DECIMAL DEFAULT 0,
  duration_hours INT,
  url VARCHAR,
  tags JSONB DEFAULT '[]',
  rating FLOAT,
  review_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT now()
);

-- Bookmarks (courses, videos, articles)
CREATE TABLE bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  item_type VARCHAR CHECK (item_type IN ('course', 'video', 'event', 'article')),
  item_id UUID,
  created_at TIMESTAMP DEFAULT now(),
  UNIQUE(user_id, item_type, item_id)
);

-- Articles
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR NOT NULL,
  source VARCHAR,
  url VARCHAR UNIQUE,
  content TEXT,
  summary TEXT,
  date_published TIMESTAMP,
  tags JSONB,
  created_at TIMESTAMP DEFAULT now()
);

-- Labs
CREATE TABLE labs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR NOT NULL,
  description TEXT,
  difficulty VARCHAR,
  instructions TEXT,
  starter_code TEXT,
  expected_output TEXT,
  duration_minutes INT,
  created_at TIMESTAMP DEFAULT now()
);

-- Lab Progress
CREATE TABLE lab_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  lab_id UUID REFERENCES labs(id) ON DELETE CASCADE,
  status VARCHAR CHECK (status IN ('in_progress', 'completed')),
  submitted_code TEXT,
  submission_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT now(),
  UNIQUE(user_id, lab_id)
);

-- Chat Messages
CREATE TABLE chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  role VARCHAR CHECK (role IN ('user', 'assistant')),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

-- Create indexes for faster queries
CREATE INDEX idx_courses_difficulty ON courses(difficulty);
CREATE INDEX idx_courses_platform ON courses(platform);
CREATE INDEX idx_bookmarks_user ON bookmarks(user_id);
CREATE INDEX idx_lab_progress_user ON lab_progress(user_id);
CREATE INDEX idx_chat_messages_user ON chat_messages(user_id);
```

---

## 4. ENVIRONMENT VARIABLES (.env.local)

```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_KEY=your-service-key

# Claude API
ANTHROPIC_API_KEY=sk-ant-...

# Vercel Analytics (optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-id
```

---

## 5. DEPENDENCIES (package.json)

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@supabase/supabase-js": "^2.38.0",
    "@anthropic-ai/sdk": "^0.12.0",
    "tailwindcss": "^3.3.0",
    "typescript": "^5.3.0",
    "feed": "^4.2.2",
    "markdown-it": "^13.0.1",
    "react-markdown": "^9.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.8.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.31",
    "typescript": "^5.3.0"
  }
}
```

---

## 6. DEPLOYMENT CHECKLIST

### Pre-Launch (Week 11)
- [ ] All pages mobile-responsive
- [ ] Lighthouse score > 80
- [ ] No console errors
- [ ] All links working
- [ ] Database backups enabled
- [ ] Error logging set up (Sentry optional)
- [ ] Analytics connected

### Launch Day (Week 12)
- [ ] Domain configured (letsvibeai.com)
- [ ] SSL certificate active
- [ ] Vercel deployment checked
- [ ] Email system working (for password resets, newsletters)
- [ ] All 3rd-party APIs authenticated
- [ ] Load testing completed (simulate 1000 concurrent users)
- [ ] Scaling plan ready (database, API limits, CDN)

### Post-Launch
- [ ] Monitor uptime (Uptime Robot or similar)
- [ ] Track error rates (Sentry dashboard)
- [ ] Monitor performance (Vercel Analytics)
- [ ] Weekly backups scheduled
- [ ] Weekly reviews of user feedback
- [ ] Daily monitoring of free tier usage (API quotas)

---

## 7. COST BREAKDOWN (MVP Year 1)

| Service | Cost/Month | Annual |
|---------|-----------|--------|
| Supabase (Pro) | $25 | $300 |
| Vercel (Pro) | $20 | $240 |
| Claude API (est. 1M tokens/day) | $150 | $1,800 |
| Miscellaneous (monitoring, etc.) | $25 | $300 |
| **Total** | **$220** | **$2,640** |

*(Highly scalable; costs decrease per user as platform grows)*

---

## 8. TESTING STRATEGY

### Unit Tests (for critical functions)
```typescript
// Example: Test Claude tutor response generation
describe('Tutor API', () => {
  it('should return a helpful response', async () => {
    const response = await POST(mockRequest);
    expect(response.status).toBe(200);
    expect(response.body.message).toBeTruthy();
  });
});
```

### E2E Tests (user flows)
```typescript
// Example: Test user signup → course search → lab completion
describe('User Journey', () => {
  it('should complete full learning flow', async () => {
    // Sign up
    // Search for course
    // Start lab
    // Submit project
    // Check portfolio
  });
});
```

### Manual QA (Week 11)
- Sign up as new user; complete onboarding
- Search for courses; filter and bookmark
- Read articles and watch videos
- Start a lab; ask tutor for help
- Submit project; check portfolio
- Test on mobile + desktop
- Test error states (network down, rate limit, etc.)

---

## 9. PERFORMANCE OPTIMIZATION TIPS

### Frontend
- **Image optimization:** Use Next.js `Image` component (auto WebP)
- **Code splitting:** Dynamic imports for heavy components
- **Caching:** Cache course/event data for 1 hour
- **Lazy loading:** Videos + long lists

### Backend
- **Database indexes:** On commonly filtered fields (level, price, difficulty)
- **Query optimization:** Select only needed fields
- **Batch operations:** Fetch 50 courses at a time, not 1
- **Rate limiting:** 10 tutor messages/day free (prevent API overuse)

### API
- **Caching:** Claude responses for identical queries
- **Compression:** Enable gzip on all responses
- **CDN:** Serve static assets from Vercel's CDN

---

## 10. SECURITY BEST PRACTICES

1. **Authentication:** Use Supabase Auth (handles OAuth, email verification)
2. **Authorization:** Check user_id on every request before returning data
3. **SQL Injection:** Use parameterized queries (Supabase ORM handles this)
4. **XSS Prevention:** Sanitize user input; use React's built-in escaping
5. **CSRF Protection:** Use SameSite cookies (Next.js default)
6. **Rate Limiting:** Limit API calls per user per day
7. **Secrets:** Keep API keys in .env.local; never commit
8. **HTTPS:** Required for all traffic

---

## 11. MONITORING & ALERTS

Set up monitoring for:
- Uptime (goal: 99.9%)
- Error rate (goal: < 1%)
- API latency (goal: < 500ms)
- Database performance (goal: < 100ms queries)
- Claude API usage (prevent unexpected bills)

Tools: Vercel Analytics, Sentry, Uptime Robot

---

## 12. NEXT STEPS

1. **Week 1:** Create Next.js project; set up Supabase
2. **Week 2-3:** Build authentication + database
3. **Week 4-6:** Build directory (courses, events) + media hub (news, videos)
4. **Week 7-10:** Build workspace (labs, tutor) + dashboard
5. **Week 11-12:** Test, polish, launch

**You'll have a fully functional AI education platform in 12 weeks.**

---

## APPENDIX: HELPFUL LINKS

- **Next.js 14 Docs:** https://nextjs.org/docs
- **Supabase Docs:** https://supabase.com/docs
- **Claude API:** https://docs.anthropic.com/claude/reference/getting-started-with-the-api
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vercel Deployment:** https://vercel.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs

---

## FINAL THOUGHTS

This build plan is **realistic for a beginner programmer.** Every week has clear deliverables; every code snippet is copy-paste ready. The tech stack is beginner-friendly; no complex DevOps or backend magic.

**Key to success:**
1. Focus on MVP rigorously (don't add features beyond the PRD)
2. Use Claude Code liberally (I can write components, debug, optimize)
3. Test constantly (catch bugs early)
4. Ship early, iterate based on feedback

You've got this. Let's build something great.
