// Supabase Edge Function: Send Welcome Email to Newsletter Subscribers
// Uses Resend for email delivery

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const FROM_EMAIL = 'hello@letsvibeai.com';
const FROM_NAME = 'LetsVibeAI';

interface WelcomeEmailRequest {
  email: string;
  firstName?: string;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { email, firstName }: WelcomeEmailRequest = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const displayName = firstName || email.split('@')[0];

    // Send welcome email via Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `${FROM_NAME} <${FROM_EMAIL}>`,
        to: [email],
        subject: 'Welcome to the Vibe Coding Newsletter! 🚀',
        html: generateWelcomeEmail(displayName),
        text: generateWelcomeEmailText(displayName),
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Failed to send email: ${error}`);
    }

    const data = await res.json();

    return new Response(
      JSON.stringify({ success: true, messageId: data.id }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error sending welcome email:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

function generateWelcomeEmail(name: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to LetsVibeAI</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5; }
    .container { background: white; border-radius: 12px; padding: 40px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .header { text-align: center; margin-bottom: 30px; }
    .logo { font-size: 32px; margin-bottom: 10px; }
    h1 { color: #1a1a1a; font-size: 28px; margin-bottom: 20px; }
    .gradient-text { background: linear-gradient(135deg, #8b5cf6, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .content { color: #4a4a4a; font-size: 16px; line-height: 1.7; }
    .cta-button { display: inline-block; background: linear-gradient(135deg, #8b5cf6, #06b6d4); color: white; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; margin: 20px 0; }
    .divider { height: 1px; background: #e5e5e5; margin: 30px 0; }
    .footer { text-align: center; color: #888; font-size: 14px; margin-top: 30px; }
    .social-links { margin-top: 20px; }
    .social-links a { margin: 0 10px; text-decoration: none; }
    ul { padding-left: 20px; }
    li { margin-bottom: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">⚡</div>
      <h1>Welcome, <span class="gradient-text">${name}</span>!</h1>
    </div>
    
    <div class="content">
      <p>Thanks for subscribing to the <strong>LetsVibeAI Newsletter</strong>! You're now part of a community learning to build amazing things with AI.</p>
      
      <p>Here's what you can expect:</p>
      <ul>
        <li>🎯 <strong>Weekly Prompt Engineering Tips</strong> - Level up your AI conversations</li>
        <li>🚀 <strong>New AI Tools & Updates</strong> - Stay ahead of the curve</li>
        <li>📚 <strong>Exclusive Tutorials</strong> - Deep dives you won't find anywhere else</li>
        <li>💡 <strong>Real Project Examples</strong> - See what's possible with vibe coding</li>
      </ul>
      
      <div style="text-align: center;">
        <a href="https://icy-desert-0dc2e3f0f.5.azurestaticapps.net/module1.html" class="cta-button">Start Learning →</a>
      </div>
      
      <div class="divider"></div>
      
      <p><strong>Ready to dive deeper?</strong></p>
      <p>Create a free account to track your progress, save your favorite tools, and showcase your projects in our community gallery.</p>
      
      <div style="text-align: center;">
        <a href="https://icy-desert-0dc2e3f0f.5.azurestaticapps.net/auth.html" class="cta-button" style="background: #10b981;">Create Free Account</a>
      </div>
    </div>
    
    <div class="footer">
      <p>You're receiving this because you subscribed to the LetsVibeAI newsletter.</p>
      <p>LetsVibeAI - Master the art of vibe coding</p>
      <div class="social-links">
        <a href="#">Twitter</a> •
        <a href="#">LinkedIn</a> •
        <a href="#">Discord</a>
      </div>
      <p style="margin-top: 20px; font-size: 12px;">
        <a href="https://icy-desert-0dc2e3f0f.5.azurestaticapps.net/unsubscribe?email={{email}}" style="color: #888;">Unsubscribe</a>
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

function generateWelcomeEmailText(name: string): string {
  return `
Welcome to LetsVibeAI, ${name}!

Thanks for subscribing to the LetsVibeAI Newsletter! You're now part of a community learning to build amazing things with AI.

Here's what you can expect:

🎯 Weekly Prompt Engineering Tips - Level up your AI conversations
🚀 New AI Tools & Updates - Stay ahead of the curve
📚 Exclusive Tutorials - Deep dives you won't find anywhere else
💡 Real Project Examples - See what's possible with vibe coding

Start Learning: https://icy-desert-0dc2e3f0f.5.azurestaticapps.net/module1.html

Ready to dive deeper?
Create a free account to track your progress, save your favorite tools, and showcase your projects:
https://icy-desert-0dc2e3f0f.5.azurestaticapps.net/auth.html

---
LetsVibeAI - Master the art of vibe coding
You're receiving this because you subscribed to our newsletter.
Unsubscribe: https://icy-desert-0dc2e3f0f.5.azurestaticapps.net/unsubscribe
  `;
}
