// Vercel Serverless Function: /api/reprompt
// Proxies requests to the Anthropic Claude API
// Set ANTHROPIC_API_KEY in Vercel environment variables

const SYSTEM_PROMPT = `You are a Prompt Engineering AI Tutor for LetsVibeAI.com — a platform teaching people to build software with AI tools.

When given a raw idea or prompt from a student, you will:
1. EXTRACT INTENT: Identify exactly what the user is trying to build or achieve.
2. HYPOTHESIZE: Define the core value or problem being solved.
3. REFINE: Rewrite the prompt to be precise, specific, and production-ready for AI vibe coding tools like Lovable, v0, Bolt, Replit, or Claude Code.
4. RECOMMEND: Suggest the top 3 vibe coding tools best suited for this project.

The refined prompt should:
- Clearly state the project type and goal
- List the key features and functionality required
- Suggest a tech stack where relevant
- Include design/UX expectations
- Be detailed enough that an AI tool can execute it directly

Return ONLY valid JSON with exactly this structure — no markdown, no extra text:
{
  "intent": "Clear one-sentence description of what the user wants to build",
  "hypothesis": "The core value proposition or problem being solved in one sentence",
  "refinedPrompt": "The complete, refined, production-ready prompt (2-5 paragraphs)",
  "tools": [
    {"name": "Tool Name", "reason": "Specific reason this tool is ideal for this project", "url": "https://..."},
    {"name": "Tool Name", "reason": "Specific reason this tool works well", "url": "https://..."},
    {"name": "Tool Name", "reason": "Specific reason this tool fits", "url": "https://..."}
  ]
}`;

const TOOL_URLS = {
  'Lovable': 'https://lovable.dev',
  'v0': 'https://v0.dev',
  'Bolt': 'https://bolt.new',
  'Replit': 'https://replit.com',
  'Claude Code': 'https://claude.ai/claude-code',
  'Cursor': 'https://cursor.com',
  'Windsurf': 'https://codeium.com/windsurf'
};

export default async function handler(req, res) {
  // Handle CORS preflight
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY not configured' });
  }

  const { prompt } = req.body || {};
  if (!prompt || typeof prompt !== 'string' || prompt.trim().length < 3) {
    return res.status(400).json({ error: 'prompt is required (min 3 characters)' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: prompt.trim() }]
      })
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Anthropic API error ${response.status}: ${err}`);
    }

    const data = await response.json();
    const text = data.content[0].text.trim();

    // Strip markdown code fences if present
    const cleaned = text.replace(/^```json\n?/, '').replace(/\n?```$/, '');
    const result = JSON.parse(cleaned);

    // Enrich tool URLs
    if (Array.isArray(result.tools)) {
      result.tools = result.tools.map(t => ({
        ...t,
        url: t.url || TOOL_URLS[t.name] || 'https://letsvibeai.com/tools'
      }));
    }

    return res.status(200).json(result);
  } catch (err) {
    console.error('Reprompt error:', err.message);
    return res.status(500).json({ error: 'AI tutor unavailable. Please try again.' });
  }
}
