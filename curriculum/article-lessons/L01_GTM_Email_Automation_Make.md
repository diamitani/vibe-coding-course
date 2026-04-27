# Lesson: GTM Email Automation with Make.com

## Overview
Build a simple "Go-to-Market" email automation using Make.com. This lesson introduces GTM engineering — the practice of building AI-powered automations for sales and marketing — and walks through setting up a cold email outreach engine.

**Source Article:** LiveBuildAI - Sales Automation Guide
**Duration:** 1.5-2 hours
**Difficulty:** Beginner-Intermediate
**Prerequisites:** Google account, basic spreadsheet skills

## Learning Objectives
- Understand GTM engineering as a discipline
- Build an automated email outreach pipeline using Make.com
- Implement proper email deliverability (SPF, DKIM, DMARC)
- Track outreach status systematically in Google Sheets
- Design scalable cold outreach workflows

## What Is GTM Engineering?

GTM (Go-to-Market) engineering is the practice of building AI and automation systems for sales and marketing activities. Unlike most buzzwords, this one has real substance: it describes a fundamental shift in how sales professionals work. People are no longer just salespeople — they are Go-to-Market Engineers. They develop systems, whether through prompts or code, to accomplish their goals in increasingly competitive and saturated markets.

## Architecture

```
Google Sheet (leads)
    ↓
Make.com → Search Rows (find uncontacted leads)
    ↓
Make.com → Filter (email exists, date sent is empty)
    ↓
Make.com → Resend API (send personalized email)
    ↓
Make.com → Sleep (3s delay to avoid throttling)
    ↓
Google Sheet → Update Row (timestamp + status)
```

## Step-by-Step Build

### Step 1: Prepare Your Lead Sheet

Create a Google Sheet with these columns:

| Name | Email | Company | Email 1 Date | Email 2 Date | Email 3 Date | Notes |

Populate with your prospect data. The "Email X Date" columns will track which messages have been sent.

### Step 2: Create Make.com Scenario

1. **Google Sheets → Search Rows**
   - Connect your Google account
   - Select your spreadsheet and sheet
   - Leave query empty (we'll filter next)

2. **Tools → Filter**
   - Condition: `email` exists AND `email 1 date` does not exist
   - This ensures you only contact prospects who haven't received the first email

3. **Resend → Send Email**
   - Connect your Resend API key (free tier: 100 emails/day)
   - Map recipient email from sheet row
   - Set sender address (use your domain)
   - Write subject line (can be personalized with {{first_name}})
   - Write email body (keep it plain text for deliverability)
   - Configure tracking (open/click tracking optional)

4. **Tools → Sleep**
   - Duration: 3 seconds
   - Prevents bulk sending and outbox throttling

5. **Google Sheets → Update Row**
   - Map the row number
   - Find the "email 1 date" column
   - Set value: `{{now}}` (current timestamp)

### Step 3: Schedule the Scenario

Set your scenario to run on a schedule:
- Every 30-60 minutes during business hours
- Respect sending limits (start with 20-50 emails/day)
- Gradually increase volume as domain warms up

## Email Deliverability Essentials

| Setting | Purpose | How to Set |
|---------|---------|------------|
| SPF | Authorizes which servers can send from your domain | Add TXT record: `v=spf1 include:resend.com ~all` |
| DKIM | Signs emails cryptographically | Generate DKIM key in Resend, add as TXT record |
| DMARC | Policy for unauthenticated email | Start with `p=none`, monitor, then `p=quarantine` |

**Critical:** Use a subdomain for cold outreach (e.g., `outreach.yourdomain.com`) to protect your primary domain's reputation.

## Extensions

Once the basic pipeline works, extend it:

- **Personalization:** Add an HTTP module to fetch prospect LinkedIn data, then use an LLM (Claude, GPT) to generate personalized email body
- **Multi-touch sequences:** Add follow-up emails at day 3, day 7, day 14
- **Reply detection:** Monitor for replies and automatically remove responders from the sequence
- **Analytics dashboard:** Sync send data to a visualization tool

## Key Takeaways
- GTM engineering combines AI, automation, and sales strategy
- A simple email outreach engine can be built in under an hour with Make.com + Resend
- Domain reputation management is critical for email deliverability
- Start simple, then layer on personalization and multi-touch sequences
- Always include tracking and status columns in your lead sheet

## Resources
- Make.com — Integration platform (free tier available)
- Resend.com — Email API (free tier: 100 emails/day)
- Claude/GPT — Email body personalization
- LinkedIn Sales Navigator — Lead sourcing

## Further Practice
1. Add an LLM call to personalize each email body based on prospect company info
2. Build a 3-email follow-up sequence
3. Add reply detection and auto-remove responders
4. Create a dashboard showing outreach metrics
