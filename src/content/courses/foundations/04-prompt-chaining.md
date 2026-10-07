---
title: Prompt Chaining
duration: 2-3 hours
description: Explain why prompt chaining outperforms one-shot prompts for complex tasks.
---

## Learning Objectives

- Explain why prompt chaining outperforms one-shot prompts for complex tasks
- Structure multi-step AI workflows
- Implement error handling and retry strategies
- Apply real-world chaining patterns
- Chain outputs from one prompt as inputs to the next

## Core Content

### 4.1 Why Chain?

Single prompts have inherent limitations:

- **Context dilution** — Too many instructions in one prompt reduces adherence
- **Error propagation** — A single error can corrupt the entire output
- **No intermediate validation** — You can't check work mid-generation
- **Token waste** — Unnecessary context carried through every step

Prompt chaining solves these by breaking complex tasks into sequential, verifiable steps.

### 4.2 The Chain Pattern

```
Prompt 1 (Analyze) ──> Output 1 ──> Validate ──> Prompt 2 (Generate) ──> Output 2 ──> ...
                          ↑                                            ↑
                    Context seed                                  Context seed
```

Each prompt receives:
- The original task context
- The output from the previous step
- A specific instruction for its role in the chain

### 4.3 Common Chain Patterns

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

### 4.4 Error Handling

Each link in the chain should include validation:

- **Format check** — Is the output in the expected structure?
- **Content check** — Does the output contain the required information?
- **Retry logic** — If validation fails, retry with more specific instructions
- **Fallback** — If retries fail, escalate to a different approach or model

### 4.5 Context Seeding

Context seeding is the practice of providing relevant context from previous steps. Best practices:

- Pass only the essential output, not the entire conversation
- Structure passed data as XML or JSON for reliable parsing
- Include metadata: step number, confidence score, relevant files
- Trim irrelevant details before passing to the next step

## Key Takeaways

- Chaining breaks complex tasks into verifiable steps
- Each step should have a clear input, instruction, and output
- Validation between steps prevents error propagation
- Context seeding enables each step to build on previous work

## Practice

1. Take a complex task (e.g., "build a blog homepage") and break it into 3-5 chain steps
2. Execute the chain manually by running each prompt separately
3. Add validation checks between each step

## Further Resources

- Module 5 (Context Engineering) — Deeper dive on context management
- Module 6 (Process Engineering) — Scaling chains to production workflows
