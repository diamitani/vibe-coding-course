# Lesson: LinkedIn Content Automation with ChatGPT & Make.com

## Overview
Build a custom marketing automation that generates and publishes LinkedIn (or any social media) content using AI. This lesson covers the full pipeline: content ideation with ChatGPT, scheduling with Google Sheets, and auto-posting with Make.com.

**Source Article:** How to Build a Custom LinkedIn Marketing Automation with ChatGPT & Make.com
**Duration:** 1.5-2 hours
**Difficulty:** Beginner-Intermediate
**Prerequisites:** Google account, ChatGPT account

## Learning Objectives
- Build a 30-day content calendar using AI
- Automate social media post generation and publishing
- Implement a review workflow before auto-posting
- Schedule recurring content pipelines

## Architecture

```
ChatGPT → 30-day content calendar
    ↓
Google Sheets (content storage + status tracking)
    ↓
Make.com (scheduled daily check)
    ↓
Post generation (ChatGPT or other LLM)
    ↓
LinkedIn API (auto-publish)
    ↓
Google Sheets (mark as posted)
```

## Step-by-Step Build

### Step 1: Generate a 30-Day Content Calendar

**Prompt for ChatGPT:**

```
Create a 30-day LinkedIn content calendar for [your niche/topic].
For each day, provide:
- Date
- Topic/theme
- Post angle
- Target audience insight
- 3-5 key points to cover

Tone: [professional, educational, conversational, thought leadership]
Goal: [build authority, drive engagement, generate leads]
Format: table
```

Review the output. Adjust topics, tone, or frequency as needed.

### Step 2: Set Up Google Sheets

Create a spreadsheet with these columns:

| Date | Topic | Post Draft | Status | Date Posted | Notes |

- **Date:** The scheduled posting date
- **Topic:** From ChatGPT calendar
- **Post Draft:** Will be filled by the automation
- **Status:** Ready / Posted / Skipped
- **Date Posted:** Auto-filled on publish

### Step 3: Create the Make.com Scenario

**Scenario trigger:** Schedule (daily at 9:00 AM)

**Module 1 — Google Sheets: Search Rows**
- Select your spreadsheet
- Filter: Date equals today, Status is empty
- Limit: 1 row (one post per day)

**Module 2 — AI Post Generator**
Option A: Use ChatGPT module (make.com's OpenAI connector)
Option B: Use HTTP module to call any LLM API

**Draft Prompt:**
```
Generate a LinkedIn post based on:
Topic: {{topic}}
Key points: {{key_points}}
Tone: professional, educational
Length: under 2700 characters

Include:
- Hook (first line)
- Value/insight
- Call to action
- 3-5 relevant hashtags
```

**Module 3 — LinkedIn: Create Post**
- Connect your LinkedIn account (via Make.com LinkedIn app)
- Map the generated post text
- Attach media if applicable (image, document)

**Module 4 — Google Sheets: Update Row**
- Mark Status as "Posted"
- Set Date Posted to `{{now}}`

### Step 4: Add Review Workflow (Optional but Recommended)

Instead of auto-posting, add an approval step:

1. Send draft via email/Slack for review
2. Add a "Approved" column in Google Sheets
3. Only post when Status = "Reviewed" AND Approved = "Yes"

## LinkedIn Post Best Practices

| Element | Best Practice |
|---------|---------------|
| Length | 1,500-2,700 characters |
| Hook | First 150 characters must grab attention |
| Line breaks | Short paragraphs (1-3 lines each) |
| Hashtags | 3-5 relevant tags, place at end |
| Media | Images get 2x engagement |
| Links | Avoid in-post links (hurts reach); put in comments |
| Posting time | 8-10 AM (target timezone) |
| Frequency | 3-5 times per week max |

## Common Issues and Fixes

| Issue | Fix |
|-------|-----|
| Post exceeds 2,700 chars | Add character limit to your prompt |
| LinkedIn API returns error | Check authentication, try LinkedIn's "Create Share" endpoint |
| Duplicate posts | Add filter: skip rows where Status = "Posted" |
| Wrong tone | Provide examples of previous posts in your prompt |
| AI generates off-brand content | Tighten system prompt with brand guidelines |

## Extensions

- **Multi-platform:** Add modules for Twitter/X, Threads, or Mastodon
- **Image generation:** Add DALL-E or Stable Diffusion to create post visuals
- **Analytics:** Track engagement per post and feed data back to improve prompts
- **Content batching:** Generate a week of posts in one run, review together
- **A/B testing:** Generate two variants per topic, test different hooks

## Key Takeaways
- AI-generated content calendars save hours of planning
- Make.com can bridge AI generation and social media APIs
- Always include human review for brand-appropriate content
- Start with LinkedIn, extend to other platforms
- Track what works and iterate your prompts

## Resources
- ChatGPT — Content ideation and drafting
- Make.com — Automation workflow
- Google Sheets — Content management
- LinkedIn API — Publishing

## Further Practice
1. Generate a 30-day calendar for your personal brand or company
2. Build the auto-posting workflow
3. Add multi-platform support
4. Track engagement and build a feedback loop to improve content
