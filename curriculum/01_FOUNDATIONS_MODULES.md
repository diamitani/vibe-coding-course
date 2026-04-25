# Foundations — 6 Modules

Comprehensive module content for the Vibe Coding Masterclass. Each module follows a consistent structure: Learning Objectives → Core Content → Key Takeaways → Practice → Further Resources.

---

## Module 1 — What Is AI?

**Duration:** 2-3 hours | **Difficulty:** Beginner | **Prerequisites:** None

### Learning Objectives

- Distinguish between rule-based systems and machine learning
- Explain how large language models (LLMs) process and generate text
- Understand tokens, context windows, and their practical implications
- Identify the capabilities and limitations of modern generative AI
- Map the current landscape of AI models and their use cases

### Core Content

#### 1.1 Machine Learning vs. Rule-Based Systems

Traditional software follows explicit instructions: if X happens, do Y. Machine learning flips this model — instead of hardcoding rules, we train models on examples and let them infer the rules.

| Aspect | Rule-Based | Machine Learning |
|--------|------------|------------------|
| Logic | Explicitly programmed | Learned from data |
| Flexibility | Brittle to edge cases | Generalizes from patterns |
| Maintenance | Manual update per rule | Retrain with new data |
| Example | A spam filter with keyword lists | A spam filter trained on 100k emails |

#### 1.2 How Large Language Models Work

LLMs are neural networks trained on vast text corpora. They predict the next token (word fragment) given all previous tokens. Key concepts:

- **Training** — The model learns statistical patterns across billions of text examples
- **Inference** — Given a prompt, the model generates tokens one at a time
- **Emergent abilities** — At sufficient scale, models develop capabilities not explicitly trained (translation, reasoning, coding)

#### 1.3 Tokens and Context Windows

Tokens are the atomic unit LLMs process. A token is roughly 0.75 words in English.

| Model | Context Window | Approx. Words |
|-------|---------------|---------------|
| GPT-4 | 8K-128K tokens | 6K-96K words |
| Claude 3.5 Sonnet | 200K tokens | ~150K words |
| Gemini 1.5 Pro | 1M tokens | ~750K words |
| DeepSeek V3 | 128K tokens | ~96K words |

**Practical implications:**
- Stay within context limits or risk truncation
- Prioritize the most important information first
- Use structured formats (XML, JSON) to maximize useful content per token

#### 1.4 Generative AI and the Transformer Architecture

The transformer architecture (Vaswani et al., 2017) underlies all modern LLMs. Its key innovation is the **attention mechanism**, which allows the model to weigh the importance of different parts of the input when generating each output token.

**Why this matters for vibe coding:** Transformers excel at understanding relationships between distant parts of a prompt. This means you can reference earlier instructions, code patterns, or constraints and the model will honor them — if you structure your prompts well.

#### 1.5 Why AI Is Transforming Software Development

Three structural shifts:

1. **From writing to directing** — Developers describe intent; AI generates implementation
2. **From months to minutes** — Prototypes that took weeks now take hours
3. **From specialists to generalists** — Non-developers can build working software

#### 1.6 The Current Model Landscape

| Category | Examples | Best For |
|----------|----------|----------|
| Frontier | GPT-4, Claude 3.5, Gemini 1.5 | Complex reasoning, code generation |
| Open-weight | Llama 3, Mistral, DeepSeek | Local deployment, customization |
| Code-specialized | Claude 3.5 Sonnet, GPT-4o | Software development |
| Multimodal | GPT-4V, Gemini Pro Vision | Image understanding, design |

### Key Takeaways

- AI learns patterns from data rather than following hardcoded rules
- LLMs predict tokens — their power comes from scale and attention
- Context windows are a practical constraint you must design around
- The shift from writing code to directing AI is fundamental
- Different models suit different tasks; choose deliberately

### Practice

1. Count the tokens in a 500-word prompt using an online tokenizer (e.g., OpenAI's tokenizer)
2. Compare the output of three different models on the same prompt
3. Identify one task you currently do manually that an LLM could assist with

### Further Resources

- "Attention Is All You Need" (Vaswani et al., 2017) — The transformer paper
- resources.json — 27+ external courses from DeepLearning.AI, Coursera, etc.
- tutorials.json — 80+ YouTube tutorials categorized by topic

---

## Module 2 — What Is Vibe Coding?

**Duration:** 2 hours | **Difficulty:** Beginner | **Prerequisites:** Module 1

### Learning Objectives

- Define vibe coding and explain its origin
- Master the four-step vibe coding loop
- Distinguish vibe coding from traditional development
- Identify appropriate use cases for vibe coding
- Understand the paradigm shift from programmer to director

### Core Content

#### 2.1 Origin Story

The term "vibe coding" emerged from the AI coding community in 2024-2025 to describe a fundamentally new way of building software: describing what you want in natural language and letting AI generate the implementation. It's not about "vibes" in the casual sense — it's about maintaining a productive flow state where the AI handles syntax and the human handles intent.

#### 2.2 The Vibe Coding Loop

```
Describe ──> Generate ──> Review ──> Refine
    ↑                                |
    └────────────────────────────────┘
```

1. **Describe** — Explain what you want in natural language. Be specific about behavior, not implementation.
2. **Generate** — The AI produces code. This may take seconds to minutes depending on complexity.
3. **Review** — Examine the output. Does it match intent? Are there bugs or edge cases?
4. **Refine** — Provide feedback, corrections, or additional context. Loop back to step 1.

#### 2.3 Traditional Development vs. Vibe Coding

| Dimension | Traditional | Vibe Coding |
|-----------|-------------|-------------|
| Primary skill | Writing syntax | Describing intent |
| Debugging | Reading stack traces | Reading generated code |
| Speed | Hours for simple features | Minutes for complex features |
| Learning curve | Months to be productive | Hours to build something real |
| Control | Complete (you write everything) | Shared (AI generates, you approve) |
| Scalability | Linear with team size | Super-linear with prompt quality |

#### 2.4 Real-World Use Cases

- **Prototypes** — MVPs, landing pages, internal tools
- **Full applications** — SaaS products, e-commerce stores, marketplaces
- **Automation scripts** — Data processing, API integrations, web scraping
- **Design-to-code** — Turning mockups into responsive HTML/CSS
- **Legacy modernization** — Translating old codebases to modern frameworks

#### 2.5 The Paradigm Shift

Vibe coding represents a shift in software's fundamental bottleneck:

> **Before:** The scarce resource was *coding ability* — who can write the code?
>
> **After:** The scarce resource is *vision* — who knows what to build?

This has profound implications for who builds software, how fast they build it, and what gets built.

### Key Takeaways

- Vibe coding is Describe → Generate → Review → Refine
- The bottleneck shifts from coding skill to product vision
- Not every task suits vibe coding — choose deliberately
- Review is the most important step in the loop

### Practice

1. Describe a simple app (e.g., a todo list) to a friend without mentioning any code. See if they can understand what you want.
2. Use a vibe coding tool (Lovable, Bolt.new, or Claude) to generate a single-page landing page from a text description.
3. Identify three projects you've wanted to build but lacked the coding skills for.

### Further Resources

- Module 3 (The Toolkit) for hands-on tool selection
- tutorials.json — "Getting Started with Vibe Coding" video tutorials

---

## Module 3 — The Toolkit

**Duration:** 3 hours | **Difficulty:** All Levels | **Prerequisites:** Module 2

### Learning Objectives

- Categorize AI development tools by workflow type
- Compare hosted builders, AI IDEs, and CLI agents
- Select the right tool for any project type
- Build a personal tool stack combining complementary tools
- Understand deployment and backend service options

### Core Content

#### 3.1 Tool Categories

| Category | Examples | Best For |
|----------|----------|----------|
| Hosted Builders | Lovable, v0.dev, Bolt.new, Replit | Rapid prototypes, full apps from scratch |
| AI IDEs | Cursor, GitHub Copilot, Windsurf | Daily development, existing codebases |
| CLI Agents | Claude Code, Aider, Codex CLI | Terminal-native workflows, automation |
| Backend Services | Supabase, Firebase, Convex | Data storage, auth, real-time features |
| Deployment | Vercel, Netlify, Railway | Publishing and hosting |

#### 3.2 Hosted Builders

**Lovable** — Full-stack app builder with visual editing. Best for: complete applications from a single prompt. Generates React + Supabase apps with authentication and database.

**v0.dev** — Vercel's AI UI generator. Best for: React component generation, landing pages, and UI prototypes. Outputs production-ready Tailwind CSS.

**Bolt.new** — StackBlitz's AI app builder. Best for: full-stack web apps in the browser. Runs code in-browser so you can test immediately.

**Replit** — Online IDE with AI agent. Best for: collaborative development, learning, and quick prototypes. Integrated deployment.

#### 3.3 AI IDEs

**Cursor** — VS Code fork with deep AI integration. Features: inline editing, chat, Claude/GPT model choice, codebase-wide understanding. Best for: daily development workflow.

**GitHub Copilot** — Industry-standard AI pair programmer. Features: tab completion, chat, PR reviews. Best for: developers who want AI assistance within their existing editor.

**Windsurf** — AI-native IDE from Codeium. Features: agent mode, multi-file editing, cascade flows. Best for: AI-first development with minimal context switching.

#### 3.4 CLI Agents

**Claude Code** — Anthropic's terminal-based AI agent. Best for: complex codebase tasks, refactoring, testing. Works directly in your repository.

**Aider** — Open-source CLI pair programming. Best for: Git-aware AI coding with multi-model support. Tracks which files are changed.

**Codex CLI** — OpenAI's terminal agent. Best for: OpenAI ecosystem development, REPL-style coding.

#### 3.5 Building Your Stack

A recommended starter stack:

```
Frontend:      Lovable or v0.dev → Vercel
Backend:       Supabase (Postgres, Auth, Storage)
AI IDE:        Cursor or Claude Code
Prompting:     Claude or GPT-4
Domain:        Namecheap or Cloudflare
```

#### 3.6 Tool Selection Matrix

| Project Type | Recommended Tools |
|-------------|-------------------|
| Landing page | v0.dev → Netlify |
| Full-stack app | Lovable + Supabase |
| Browser game | Bolt.new |
| API/service | Claude Code + Railway |
| Dashboard | Replit + Convex |
| E-commerce | Lovable + Stripe |

### Key Takeaways

- Tool selection depends on project type, not personal preference
- Combine tools: hosted builder for frontend, Supabase for backend
- AI IDEs excel at ongoing development; hosted builders excel at greenfield projects
- CLI agents are most powerful for complex, multi-step codebase tasks

### Practice

1. Sign up for 3 tools from different categories (e.g., Lovable, Cursor, Supabase)
2. Build the same simple component in two different tools and compare the experience
3. Deploy a "Hello World" app using Vercel or Netlify

### Further Resources

- content-hub-data.js — 40+ tools with descriptions and categories
- resources.html — On-site tools directory with reviews
- tutorials.json — Tool-specific setup tutorials

---

## Module 4 — Prompt Chaining

**Duration:** 2-3 hours | **Difficulty:** Intermediate | **Prerequisites:** Module 3

### Learning Objectives

- Explain why prompt chaining outperforms one-shot prompts for complex tasks
- Structure multi-step AI workflows
- Implement error handling and retry strategies
- Apply real-world chaining patterns
- Chain outputs from one prompt as inputs to the next

### Core Content

#### 4.1 Why Chain?

Single prompts have inherent limitations:

- **Context dilution** — Too many instructions in one prompt reduces adherence
- **Error propagation** — A single error can corrupt the entire output
- **No intermediate validation** — You can't check work mid-generation
- **Token waste** — Unnecessary context carried through every step

Prompt chaining solves these by breaking complex tasks into sequential, verifiable steps.

#### 4.2 The Chain Pattern

```
Prompt 1 (Analyze) ──> Output 1 ──> Validate ──> Prompt 2 (Generate) ──> Output 2 ──> ...
                          ↑                                            ↑
                    Context seed                                  Context seed
```

Each prompt receives:
- The original task context
- The output from the previous step
- A specific instruction for its role in the chain

#### 4.3 Common Chain Patterns

**Pattern 1: Plan → Generate → Review**
```
Step 1: "Analyze this requirements document and create a spec"
Step 2: "Using this spec, generate the implementation"
Step 3: "Review this implementation against the spec for completeness"
```

**Pattern 2: Research → Draft → Polish**
```
Step 1: "Research the topic and provide key facts"
Step 2: "Draft a first version using these facts"
Step 3: "Polish the draft for tone, clarity, and conciseness"
```

**Pattern 3: Decompose → Execute → Merge**
```
Step 1: "Break this feature into independent subtasks"
Step 2: (Parallel) "Implement subtask X" (repeated per subtask)
Step 3: "Merge all implementations and resolve conflicts"
```

#### 4.4 Error Handling

Each link in the chain should include validation:

- **Format check** — Is the output in the expected structure?
- **Content check** — Does the output contain the required information?
- **Retry logic** — If validation fails, retry with more specific instructions
- **Fallback** — If retries fail, escalate to a different approach or model

#### 4.5 Context Seeding

Context seeding is the practice of providing relevant context from previous steps. Best practices:

- Pass only the essential output, not the entire conversation
- Structure passed data as XML or JSON for reliable parsing
- Include metadata: step number, confidence score, relevant files
- Trim irrelevant details before passing to the next step

### Key Takeaways

- Chaining breaks complex tasks into verifiable steps
- Each step should have a clear input, instruction, and output
- Validation between steps prevents error propagation
- Context seeding enables each step to build on previous work

### Practice

1. Take a complex task (e.g., "build a blog homepage") and break it into 3-5 chain steps
2. Execute the chain manually by running each prompt separately
3. Add validation checks between each step

### Further Resources

- Module 5 (Context Engineering) — Deeper dive on context management
- Module 6 (Process Engineering) — Scaling chains to production workflows

---

## Module 5 — Context Engineering

**Duration:** 3 hours | **Difficulty:** Intermediate | **Prerequisites:** Module 4

### Learning Objectives

- Master the mechanics of context windows and token budgets
- Structure information for maximum AI comprehension
- Prioritize content within limited context
- Engineer reference materials that fit without breaking context
- Iteratively refine context for better results

### Core Content

#### 5.1 Context Windows: A Practical Model

Think of the context window as a limited workspace. Everything in it competes for the model's attention. Understanding this competition is the key to context engineering.

**Context composition:**
```
System Prompt (rules, persona)        ─ 10-20%
Task Instructions (what to do)        ─ 10-20%
Input Data (what to work with)        ─ 40-60%
Reference Material (examples, docs)   ─ 10-30%
Output Format (how to respond)        ─ 5-10%
```

#### 5.2 What Matters Most

Models prioritize information based on:

1. **Recency** — Information near the beginning and end gets the most attention (the primacy/recency effect)
2. **Repetition** — Repeated instructions carry more weight
3. **Specificity** — Concrete instructions beat vague guidance
4. **Structure** — Well-formatted information is more reliably processed

#### 5.3 Structuring for Clarity

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

#### 5.4 Token Budgeting

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

#### 5.5 Iterative Refinement

Context engineering is not one-shot. The process:

1. **Draft** — Write your context based on best guesses
2. **Test** — Run the prompt and evaluate the output
3. **Audit** — What was missing? What was misinterpreted?
4. **Refine** — Adjust structure, content, and prioritization
5. **Repeat** — Until consistent quality is achieved

### Key Takeaways

- Context is a limited resource — budget it deliberately
- Structure, recency, and specificity drive model comprehension
- Allocate 30-40% of context for model output
- Refine iteratively; the first version is never the best

### Practice

1. Take a prompt you've written and calculate its token count
2. Rewrite it to use half the tokens while preserving all instructions
3. Structure the rewritten version using XML tags
4. Test both versions and compare output quality

### Further Resources

- Module 6 (Process Engineering) — Scaling context practices to teams
- tutorials.json — "Prompt Engineering Deep Dive" tutorials

---

## Module 6 — Process Engineering

**Duration:** 2-3 hours | **Difficulty:** Advanced | **Prerequisites:** Module 5

### Learning Objectives

- Design reproducible AI workflows that consistently produce quality results
- Document processes as standard operating procedures
- Implement quality gates and validation checkpoints
- Scale vibe coding practices from individual to team
- Build automation and tooling around standardized processes

### Core Content

#### 6.1 From Prompts to Processes

Casual vibe coding: open a chat, describe something, get code, move on.

Production vibe coding: define a workflow, document the steps, validate the output, iterate systematically.

The difference is process engineering — treating AI interaction as a designed system rather than a one-off conversation.

#### 6.2 The Process Blueprint

Every AI workflow should include:

```
1. Input Specification    — What information does this process need?
2. Context Assembly       — How do we prepare the context window?
3. Step Definitions       — What prompts, in what order, with what validation?
4. Quality Gates          — How do we verify output at each step?
5. Error Handling         — What happens when a step fails?
6. Output Formatting      — How is the final result structured?
7. Documentation          — How do others learn and repeat this process?
```

#### 6.3 Example Process: Feature Generation

```yaml
process: Generate Frontend Feature
inputs:
  - feature_spec: PRD or requirements document
  - design_ref: Figma or design mockup
  - existing_code: current repo structure

steps:
  - id: analyze
    prompt: "Analyze the feature spec and design ref. Identify components, data flow, and edge cases."
    validate: output contains component list and data flow diagram

  - id: plan
    prompt: "Based on the analysis, create an implementation plan with file list and dependencies."
    validate: output includes file paths and dependency graph

  - id: scaffold
    prompt: "Generate the component scaffold with TypeScript types, props interface, and empty handlers."
    validate: output compiles (TypeScript check)

  - id: implement
    prompt: "Using the scaffold, implement the full component with all logic and styling."
    validate: output passes linting and unit tests

quality_gates:
  - All generated files must compile
  - No console.log or debug statements
  - Follows project's existing patterns
  - Handles loading, empty, error states
```

#### 6.4 Quality Gates

Quality gates are automated or manual checkpoints that validate output before it moves to the next step:

| Gate Type | What It Checks | Tooling |
|-----------|---------------|---------|
| Syntax | Does the code parse? | Linter, TypeScript compiler |
| Style | Does it follow project conventions? | Prettier, ESLint |
| Logic | Does it pass tests? | Jest, Vitest |
| Security | No secrets, no vulnerabilities? | Secret scanners, SAST |
| Completeness | Are all requirements addressed? | Manual review checklist |

#### 6.5 Scaling to Teams

Key practices for team-wide vibe coding:

- **Shared prompt libraries** — Curated, version-controlled prompt templates
- **Standardized context packs** — Pre-assembled context for common tasks
- **Review protocols** — Clear rules for when AI output needs human review
- **Feedback loops** — Systematic capture of what works and what doesn't
- **Tool standardization** — Agreed-upon tools and configuration

#### 6.6 Automation Around Processes

Once a process is documented, it can be automated:

- **Custom CLI tools** — Scripts that assemble context, invoke AI, and run quality gates
- **Git hooks** — Pre-commit validation of AI-generated code
- **CI/CD integration** — Automated process execution in pipelines
- **Prompt management** — Version-controlled prompt repositories

### Key Takeaways

- Process engineering transforms casual prompting into reproducible workflows
- Every workflow needs: spec, context, steps, gates, error handling, output format, docs
- Quality gates prevent bad output from propagating
- Scaling requires standardization, documentation, and automation

### Practice

1. Document one of your current AI workflows using the process blueprint
2. Add a quality gate (e.g., linting check) to your workflow
3. Write the process documentation so another person could execute it
4. Identify one process you could automate with a custom script

### Further Resources

- Project Lab 3 (Marketplace) — End-to-end process engineering applied
- content-hub-data.js — Automation and workflow tools
- tutorials.json — Process automation tutorials
