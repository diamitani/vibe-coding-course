# Article-Based Lessons — Supplementary Content

Standalone lessons adapted from the LiveBuildAI content library. Each lesson is designed as a self-contained module that can be completed independently or integrated into the main curriculum.

---

## Lesson 1: AI Today — What's Moving

**Source:** AI Today (September 30, 2025)
**Type:** News Briefing + Analysis
**Duration:** 45-60 min
**Prerequisites:** Module 1 (What Is AI)

### Learning Objectives
- Analyze real-world AI news through a strategic lens
- Identify market trends: pricing wars, regulation, hardware, and agents
- Connect current events to foundational AI concepts

### Core Content

**Five Stories That Matter:**
1. DeepSeek launches V3.2-Exp with Sparse Attention, slashing API costs — signaling a pricing war in AI inference
2. US Senators propose the AI Risk Evaluation Act, requiring mandatory risk assessments for advanced models
3. Google launches Search Live — merging voice, camera, and conversational AI into a single search interface
4. Humain Horizon Pro: AI-native laptop with dedicated local model runtime
5. States scramble to regulate AI therapy apps, with Illinois and Nevada banning them outright

**Key Themes:**
- Open-weight models are driving costs toward zero
- Regulation is fragmenting (federal vs. state)
- Hardware is being rebuilt for AI-native workflows
- Agents are the next paradigm shift

**Discussion Questions:**
1. How does DeepSeek's pricing strategy affect the AI tool landscape?
2. What are the implications of fragmented state-level AI regulation?
3. How does "Search Live" change the way users interact with information?

---

## Lesson 2: LiveBuildAI — The Week AI Grew Up

**Source:** LiveBuildAI (October 6, 2025)
**Type:** News Briefing + Market Analysis
**Duration:** 45-60 min

### Core Content

**Stories:**
1. OpenAI signs multi-year AMD GPU deal (6GW), with option to acquire up to 10% of AMD equity — challenging Nvidia's dominance
2. Europe reclaims leadership in AI mobility
3. China's Zhipu AI pushes back against "superintelligence is imminent" hype
4. Sam Altman's global infrastructure tour
5. Citigroup raises AI infrastructure spending projections

**Key Takeaway:** The AI hardware race is reshaping the global balance of power. Strategic bets on compute infrastructure are now as important as model capabilities.

---

## Lesson 3: LiveBuildAI — September 9, 2025

**Source:** LiveBuildAI (September 9, 2025)
**Type:** News Briefing
**Duration:** 30-45 min

### Core Content

**Stories:**
1. Nebius delivers major AI compute deal with Microsoft
2. ASML fuels Mistral AI and Europe's chip ambition
3. Nvidia teases Rubin CPX — a chip for creators
4. Ukrainian AI tool Clarity slashes military intel turnaround time
5. Google pulls Pixel 10's AI "Daily Hub" for fine-tuning

**Tools to Watch:**
- Ask Ralph — Ralph Lauren's AI conversational stylist
- Lens Live — Amazon's real-time visual shopping AI
- Div-idy — natural-language website builder

**Pattern:** Consumer AI is bifurcating into lifestyle (fashion, shopping) and infrastructure (compute, defense).

---

## Lesson 4: LiveBuildAI — September 8, 2025

**Source:** LiveBuildAI (September 8, 2025)
**Type:** News Briefing + Ethics
**Duration:** 30-45 min

### Core Content

**Stories:**
1. Anthropic settles copyright lawsuit for $1.5B — a legal milestone for training data rights
2. AI chatbots linked to teen suicide — expert calls for global treaty on AI safety
3. Additional industry updates

**Key Theme:** The intersection of AI and regulation is accelerating on multiple fronts — copyright, safety, and mental health.

---

## Lesson 5: GTM Email Automation with Make.com

**Source:** LiveBuildAI Sales Automation Guide
**Type:** How-To Lab
**Duration:** 1.5-2 hours
**Prerequisites:** Module 3 (The Toolkit), basic Google Sheets

### Learning Objectives
- Build an automated email outreach pipeline with Make.com
- Understand GTM engineering as a practice
- Implement proper email deliverability (SPF, DKIM, DMARC)
- Track outreach status in Google Sheets

### Core Content

**What Is GTM Engineering?**
GTM (Go-to-Market) engineering is the practice of building AI-powered automations for sales and marketing. It represents a shift from "sales person using tools" to "sales person engineering systems."

**Build the Automation:**

```
Google Sheet (leads) → Filter (not contacted) → Resend API → Send Email → Update Sheet
```

**Step-by-Step:**
1. Create a Google Sheet with columns: Name, Email, Company, Email Date Sent
2. Connect Make.com to Google Sheets (Search Rows module)
3. Add filter: check email exists AND Email Date Sent is empty
4. Connect Resend: configure API key, To, From, Subject, Body
5. Add Sleep module (3 seconds delay to avoid throttling)
6. Update the sheet row with timestamp using "now()"

**Deliverability Essentials:**
- Set up SPF, DKIM, and DMARC records on your sending domain
- Use a subdomain for cold outreach (protect your primary domain)
- Warm up your sending address gradually

---

## Lesson 6: LinkedIn Content Automation

**Source:** LinkedIn Marketing Automation Guide
**Type:** How-To Lab
**Duration:** 1.5-2 hours
**Prerequisites:** Module 3 (The Toolkit)

### Learning Objectives
- Build a content pipeline from ideation to posting
- Automate LinkedIn post generation with ChatGPT + Make.com
- Implement a review-and-post workflow

### Core Content

**Pipeline:**
```
ChatGPT (30-day content calendar) → Google Sheets → Make.com → LinkedIn API
```

**Steps:**
1. Prompt ChatGPT for a 30-day content calendar tailored to your niche
2. Store output in Google Sheets with columns: Date, Topic, Post Draft, Status, Date Posted
3. Create Make.com scenario: Read row → Check if posting date matches today → Generate post
4. Add LinkedIn module to auto-post (or send approval notification)
5. Schedule daily run at 9:00 AM

**Best Practices:**
- Keep posts under 2,700 characters (LinkedIn limit)
- Use Google Sheets filter to skip already-posted content
- Test with multiple AI providers (GPT, Claude, DeepSeek) for tone variety
- Include a human review step before auto-posting

---

## Lesson 7: Personalized Email Outreach Engine

**Source:** Email Outreach Engine Guide
**Type:** How-To Lab (Advanced)
**Duration:** 2-3 hours
**Prerequisites:** Lesson 5, Perplexity account, DeepSeek/OpenAI API key

### Learning Objectives
- Build a research-driven email outreach system
- Integrate Perplexity for company research
- Use DeepSeek for personalized email drafting
- Send via Resend for high deliverability

### Core Content

**Architecture:**

```
Google Sheet (leads) 
    → Perplexity (company research) 
    → DeepSeek (personalized email draft) 
    → Resend (send) 
    → Google Sheet (update status)
```

**Step-by-Step:**
1. Lead sheet columns: first_name, last_name, email, company_name, company_domain, prospect_linkedin, title, status
2. Perplexity research prompt: company info, ICP, recent news, competitive positioning
3. Second Perplexity call: your product knowledge snapshot (so the writer knows what you sell)
4. DeepSeek draft prompt: combine company research + product info → personalized cold email body
5. Resend: send with proper SPF/DKIM
6. Update sheet: timestamp + message ID

**Cost:** ~$5 total using free tiers and minimum credits

---

## Lesson 8: Free Perplexity Pro + Comet Access

**Source:** Perplexity Pro Guide
**Type:** Tool Guide
**Duration:** 15-20 min

### Learning Objectives
- Claim a free year of Perplexity Pro through the PayPal offer
- Understand the Perplexity Pro feature set
- Access Comet browser beta for AI-native browsing

### Core Content

**The Offer:**
PayPal US/Venmo users can get Perplexity Pro ($200 value) free for one year, including Comet browser beta access.

**Steps:**
1. Set up/link a PayPal account
2. Open PayPal mobile app → Offers/Subscriptions
3. Find Perplexity Pro banner
4. Link Perplexity account (new or existing, never on Pro before)
5. No upfront charge — auto-renew at $20/month after 12 months (cancel anytime)

**What You Get:**
- Unlimited Pro Search with GPT-4, Claude, Grok
- Comet beta: AI browser with cross-tab context
- File upload, code analysis
- No ads, no training on your data

**Why It Matters for Builders:**
One year of frontier model access, zero cost. Use it for research, code analysis, and experimenting with agentic browsing.
