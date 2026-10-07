---
title: Context Engineering
duration: 3 hours
description: Master the mechanics of context windows and token budgets.
---

## Learning Objectives

- Master the mechanics of context windows and token budgets
- Structure information for maximum AI comprehension
- Prioritize content within limited context
- Engineer reference materials that fit without breaking context
- Iteratively refine context for better results

## Core Content

### 5.1 Context Windows: A Practical Model

Think of the context window as a limited workspace. Everything in it competes for the model's attention. Understanding this competition is the key to context engineering.

**Context composition:**
```
System Prompt (rules, persona)        ─ 10-20%
Task Instructions (what to do)        ─ 10-20%
Input Data (what to work with)        ─ 40-60%
Reference Material (examples, docs)   ─ 10-30%
Output Format (how to respond)        ─ 5-10%
```

### 5.2 What Matters Most

Models prioritize information based on:

1. **Recency** — Information near the beginning and end gets the most attention (the primacy/recency effect)
2. **Repetition** — Repeated instructions carry more weight
3. **Specificity** — Concrete instructions beat vague guidance
4. **Structure** — Well-formatted information is more reliably processed

### 5.3 Structuring for Clarity

**Good:**
```xml
<task>
  Build a navigation component with:
  - 4 links: Home, About, Services, Contact
  - Mobile hamburger menu
  - Active state highlighting
  - Sticky on scroll
</task>

<constraints>
  - Use Tailwind CSS only (no additional libraries)
  - Must be responsive (mobile-first)
  - Max 50 lines of code
</constraints>
```

**Poor:**
```
I need you to build a navigation. It should have some links and work on mobile too. Probably use Tailwind. Keep it simple. Make it sticky maybe. The links are Home, About, Services, Contact. Actually make sure the active one is highlighted. Oh and hamburger menu on mobile.
```

### 5.4 Token Budgeting

For a 128K token model targeting 25K tokens of context:

```
System prompt:          2K tokens  (8%)
Project context:        3K tokens  (12%)
Codebase references:    5K tokens  (20%)
Current task:           3K tokens  (12%)
Output example:         2K tokens  (8%)
Generated output:       10K tokens (40%)
```

**Rules of thumb:**
- Spend your budget on what the model needs to succeed
- Cut boilerplate and redundant instructions
- Use files/attachments for reference material when available
- Reserve 30-40% of the window for the model's output

### 5.5 Iterative Refinement

Context engineering is not one-shot. The process:

1. **Draft** — Write your context based on best guesses
2. **Test** — Run the prompt and evaluate the output
3. **Audit** — What was missing? What was misinterpreted?
4. **Refine** — Adjust structure, content, and prioritization
5. **Repeat** — Until consistent quality is achieved

## Key Takeaways

- Context is a limited resource — budget it deliberately
- Structure, recency, and specificity drive model comprehension
- Allocate 30-40% of context for model output
- Refine iteratively; the first version is never the best

## Practice

1. Take a prompt you've written and calculate its token count
2. Rewrite it to use half the tokens while preserving all instructions
3. Structure the rewritten version using XML tags
4. Test both versions and compare output quality

## Further Resources

- Module 6 (Process Engineering) — Scaling context practices to teams
- tutorials.json — "Prompt Engineering Deep Dive" tutorials
