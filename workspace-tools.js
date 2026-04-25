/**
 * LETSVIBEAI - Workspace Tools Engine
 * Handles AI Tutor, Prompt Builder, Document Builder, and Lab Copilot.
 */

const GEMINI_KEY = 'AIzaSyCBA0oSoiVrekgP9wstRbHxczbBLxg08qE';

// --- SHARED UTILS ---
async function askGemini(prompt, systemInstruction = "") {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`;
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ 
                parts: [{ text: (systemInstruction ? systemInstruction + "\n\n" : "") + prompt }] 
            }]
        })
    });
    const data = await response.json();
    if (data.error) throw new Error(data.error.message);
    return data.candidates[0].content.parts[0].text;
}

// --- AI TUTOR ---
function openTutor() {
    const container = document.getElementById('ai-tutor-container');
    if (!container) return;
    container.style.display = 'block';
    document.getElementById('workspace-grid').style.opacity = '0.5';
    document.getElementById('workspace-grid').style.pointerEvents = 'none';
    document.getElementById('tutor-input').focus();
}

function closeTutor() {
    document.getElementById('ai-tutor-container').style.display = 'none';
    document.getElementById('workspace-grid').style.opacity = '1';
    document.getElementById('workspace-grid').style.pointerEvents = 'auto';
}

function addTutorMessage(text, role) {
    const container = document.getElementById('tutor-messages');
    if (!container) return;
    const div = document.createElement('div');
    div.className = `tutor-msg ${role}`;
    div.textContent = text;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return div;
}

// --- PROMPT BUILDER ---
function openPromptBuilder() {
    showOverlay('Prompt Builder', `
        <div style="padding: 1.5rem;">
            <p style="color:var(--text-secondary); margin-bottom: 1.5rem;">Describe what you want to achieve, and I'll help you engineer a high-signal prompt.</p>
            <textarea id="prompt-builder-input" class="form-input" style="width:100%; height: 120px; margin-bottom: 1rem;" placeholder="e.g., I need a prompt to help me analyze customer feedback for a SaaS product..."></textarea>
            <button onclick="generatePrompt()" class="btn btn-primary" id="prompt-gen-btn">Generate Engineered Prompt →</button>
            <div id="prompt-result" style="margin-top: 1.5rem; display:none;">
                <h4 style="color:var(--accent-cyan); margin-bottom: 0.5rem;">Engineered Prompt:</h4>
                <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--border-subtle); padding: 1rem; border-radius: var(--radius-md); font-family: monospace; font-size: 0.9rem; white-space: pre-wrap;" id="prompt-output"></div>
                <button onclick="copyToClipboard('prompt-output')" class="btn btn-secondary" style="margin-top: 1rem; padding: 0.4rem 0.8rem; font-size: 0.8rem;">Copy to Clipboard</button>
            </div>
        </div>
    `);
}

async function generatePrompt() {
    const input = document.getElementById('prompt-builder-input');
    const output = document.getElementById('prompt-output');
    const resultDiv = document.getElementById('prompt-result');
    const btn = document.getElementById('prompt-gen-btn');
    
    if (!input.value.trim()) return;
    
    btn.textContent = 'Engineering...';
    btn.disabled = true;
    
    try {
        const sys = "You are a world-class Prompt Engineer. Your goal is to transform rough user ideas into highly effective, structured prompts using frameworks like ROLE, CONTEXT, TASK, and CONSTRAINTS. Wrap the final prompt in a clean block.";
        const response = await askGemini(input.value, sys);
        output.textContent = response;
        resultDiv.style.display = 'block';
    } catch (err) {
        alert("Failed to generate prompt: " + err.message);
    } finally {
        btn.textContent = 'Generate Engineered Prompt →';
        btn.disabled = false;
    }
}

// --- DOCUMENT BUILDER ---
function openDocBuilder() {
    showOverlay('Document Builder', `
        <div style="padding: 1.5rem;">
            <p style="color:var(--text-secondary); margin-bottom: 1.5rem;">Select a document type and provide context. I'll generate a professional draft for you.</p>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
                <select id="doc-type" class="form-input">
                    <option value="PRD">Product Requirements Document (PRD)</option>
                    <option value="SiteMap">Sitemap & IA Plan</option>
                    <option value="Implementation">Implementation Roadmap</option>
                    <option value="Marketing">GTM & Marketing Strategy</option>
                </select>
            </div>
            <textarea id="doc-builder-input" class="form-input" style="width:100%; height: 120px; margin-bottom: 1rem;" placeholder="Provide details about your project, target audience, and key features..."></textarea>
            <button onclick="generateDoc()" class="btn btn-primary" id="doc-gen-btn">Generate Document →</button>
            <div id="doc-result" style="margin-top: 1.5rem; display:none;">
                <h4 style="color:var(--accent-violet); margin-bottom: 0.5rem;">Generated Document:</h4>
                <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--border-subtle); padding: 1.5rem; border-radius: var(--radius-md); font-size: 0.95rem; line-height: 1.6; white-space: pre-wrap;" id="doc-output"></div>
                <button onclick="copyToClipboard('doc-output')" class="btn btn-secondary" style="margin-top: 1rem; padding: 0.4rem 0.8rem; font-size: 0.8rem;">Copy to Clipboard</button>
            </div>
        </div>
    `);
}

async function generateDoc() {
    const type = document.getElementById('doc-type').value;
    const input = document.getElementById('doc-builder-input');
    const output = document.getElementById('doc-output');
    const resultDiv = document.getElementById('doc-result');
    const btn = document.getElementById('doc-gen-btn');
    
    if (!input.value.trim()) return;
    
    btn.textContent = 'Generating...';
    btn.disabled = true;
    
    try {
        const sys = `You are a Senior Product Manager and Architect. Generate a professional, highly detailed ${type} based on the user's input. Use professional formatting, headers, and bullet points.`;
        const response = await askGemini(input.value, sys);
        output.textContent = response;
        resultDiv.style.display = 'block';
    } catch (err) {
        alert("Failed to generate document: " + err.message);
    } finally {
        btn.textContent = 'Generate Document →';
        btn.disabled = false;
    }
}

// --- OVERLAY HELPERS ---
function showOverlay(title, content) {
    let overlay = document.getElementById('workspace-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'workspace-overlay';
        overlay.className = 'builder-overlay';
        document.body.appendChild(overlay);
    }
    
    overlay.innerHTML = `
        <div class="builder-modal">
            <div style="padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.02);">
                <h3 style="margin:0; font-size: 1.25rem; color: var(--text-primary);">${title}</h3>
                <button onclick="closeOverlay()" style="background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:1.75rem; line-height:1;">&times;</button>
            </div>
            ${content}
        </div>
    `;
    overlay.style.display = 'flex';
}

function closeOverlay() {
    const overlay = document.getElementById('workspace-overlay');
    if (overlay) overlay.style.display = 'none';
}

function copyToClipboard(id) {
    const text = document.getElementById(id).textContent;
    navigator.clipboard.writeText(text).then(() => {
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = originalText, 2000);
    });
}

// --- NEWS SUMMARIZER ---
async function generateDailyBrief() {
    const btn = document.getElementById('brief-gen-btn');
    const container = document.getElementById('ai-brief-container');
    const content = document.getElementById('brief-content');
    const title = document.getElementById('brief-title');
    
    btn.textContent = 'Scanning Feeds...';
    btn.disabled = true;
    
    try {
        const sources = (window.CONTENT_HUB_DATA?.sourceGroups || []).map(g => g.items.map(i => `${i.name}: ${i.angle}`).join('\n')).join('\n');
        const sys = "You are the LetsVibeAI News Summarizer. Analyze the provided news sources and generate a high-level 'Daily Brief' for AI Developers. Include: 1. Key Trends, 2. Tools to Watch, 3. Actionable Advice. Use professional but energetic 'vibe coding' tone.";
        const response = await askGemini(`Here are the sources for today:\n${sources}`, sys);
        
        title.textContent = `The Daily Signal — ${new Date().toLocaleDateString()}`;
        content.textContent = response;
        container.style.display = 'block';
        container.scrollIntoView({ behavior: 'smooth' });
    } catch (err) {
        alert("Failed to generate brief: " + err.message);
    } finally {
        btn.textContent = '✨ Generate AI Daily Brief';
        btn.disabled = false;
    }
}

// --- INITIALIZE TUTOR SUBMIT ---
document.addEventListener('DOMContentLoaded', () => {
    const tutorForm = document.getElementById('tutor-form');
    if (tutorForm) {
        tutorForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const input = document.getElementById('tutor-input');
            const text = input.value.trim();
            if (!text) return;

            addTutorMessage(text, 'user');
            input.value = '';
            
            const loadingMsg = addTutorMessage('Thinking...', 'bot');
            
            try {
                const systemPrompt = "You are the Vibe AI Tutor for LetsVibeAI, an educational platform for 'Vibe Coding' (AI-assisted web development). Be helpful, concise, and encourage building. If asked for code, provide clean snippets.";
                const response = await askGemini(text, systemPrompt);
                loadingMsg.textContent = response;
            } catch (err) {
                loadingMsg.textContent = "Error: " + err.message;
            }
        });
    }
});
