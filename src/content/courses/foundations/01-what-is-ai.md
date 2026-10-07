---
title: What Is AI?
duration: 2-3 hours
description: Distinguish between rule-based systems and machine learning.
---

## Learning Objectives

- Distinguish between rule-based systems and machine learning
- Explain how large language models (LLMs) process and generate text
- Understand tokens, context windows, and their practical implications
- Identify the capabilities and limitations of modern generative AI
- Map the current landscape of AI models and their use cases

## Core Content

### 1.1 Machine Learning vs. Rule-Based Systems

Traditional software follows explicit instructions: if X happens, do Y. Machine learning flips this model — instead of hardcoding rules, we train models on examples and let them infer the rules.

| Aspect | Rule-Based | Machine Learning |
|--------|------------|------------------|
| Logic | Explicitly programmed | Learned from data |
| Flexibility | Brittle to edge cases | Generalizes from patterns |
| Maintenance | Manual update per rule | Retrain with new data |
| Example | A spam filter with keyword lists | A spam filter trained on 100k emails |

### 1.2 How Large Language Models Work

LLMs are neural networks trained on vast text corpora. They predict the next token (word fragment) given all previous tokens. Key concepts:

- **Training** — The model learns statistical patterns across billions of text examples
- **Inference** — Given a prompt, the model generates tokens one at a time
- **Emergent abilities** — At sufficient scale, models develop capabilities not explicitly trained (translation, reasoning, coding)

### 1.3 Tokens and Context Windows

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

### 1.4 Generative AI and the Transformer Architecture

The transformer architecture (Vaswani et al., 2017) underlies all modern LLMs. Its key innovation is the **attention mechanism**, which allows the model to weigh the importance of different parts of the input when generating each output token.

**Why this matters for vibe coding:** Transformers excel at understanding relationships between distant parts of a prompt. This means you can reference earlier instructions, code patterns, or constraints and the model will honor them — if you structure your prompts well.

### 1.5 Why AI Is Transforming Software Development

Three structural shifts:

1. **From writing to directing** — Developers describe intent; AI generates implementation
2. **From months to minutes** — Prototypes that took weeks now take hours
3. **From specialists to generalists** — Non-developers can build working software

### 1.6 The Current Model Landscape

| Category | Examples | Best For |
|----------|----------|----------|
| Frontier | GPT-4, Claude 3.5, Gemini 1.5 | Complex reasoning, code generation |
| Open-weight | Llama 3, Mistral, DeepSeek | Local deployment, customization |
| Code-specialized | Claude 3.5 Sonnet, GPT-4o | Software development |
| Multimodal | GPT-4V, Gemini Pro Vision | Image understanding, design |

## Key Takeaways

- AI learns patterns from data rather than following hardcoded rules
- LLMs predict tokens — their power comes from scale and attention
- Context windows are a practical constraint you must design around
- The shift from writing code to directing AI is fundamental
- Different models suit different tasks; choose deliberately

## Practice

1. Count the tokens in a 500-word prompt using an online tokenizer (e.g., OpenAI's tokenizer)
2. Compare the output of three different models on the same prompt
3. Identify one task you currently do manually that an LLM could assist with

## Further Resources

- "Attention Is All You Need" (Vaswani et al., 2017) — The transformer paper
- resources.json — 27+ external courses from DeepLearning.AI, Coursera, etc.
- tutorials.json — 80+ YouTube tutorials categorized by topic
