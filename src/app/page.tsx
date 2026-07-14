import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="landing">
      {/* ═══════════ ANNOUNCEMENT ═══════════ */}
      <div className="announcement">
        <span className="announcement-dot" />
        New: Our first cohort launches August 2026.{' '}
        <Link href="/dashboard">Join the waitlist →</Link>
      </div>

      {/* ═══════════ NAV ═══════════ */}
      <nav className="nav-landing">
        <div className="nav-inner">
          <Link href="/" className="nav-brand">
            <Image src="/logos/LVAI_Primary_Icon.svg" alt="letsvibeai" width={32} height={32} className="nav-logo-img" />
            <span className="nav-brand-text">letsvibeai</span>
          </Link>
          <div className="nav-links">
            <Link href="/tracks" className="nav-link">Tracks</Link>
            <Link href="/directory" className="nav-link">Directory</Link>
            <Link href="/workspace" className="nav-link">Workspace</Link>
            <Link href="/newsletter" className="nav-link">Newsletter</Link>
          </div>
          <Link href="/dashboard" className="nav-cta">Get Started</Link>
        </div>
      </nav>

      {/* ═══════════ HERO ═══════════ */}
      <section className="hero">
        <div className="hero-mesh" />
        <div className="hero-content container">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            The first platform built for vibe coders
          </div>
          <h1 className="hero-title display">
            Learn to<br />
            <span className="gradient-text">Vibe Code</span>
          </h1>
          <p className="hero-subtitle">
            Master AI-assisted development through curated tutorials, hands-on projects,
            and a community of builders who ship at the speed of thought.
          </p>
          <div className="hero-actions">
            <Link href="/dashboard" className="btn-primary">
              Start Learning Free
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/tracks" className="btn-ghost">Explore Tracks</Link>
          </div>
          <div className="hero-stats">
            <div><div className="hero-stat-value gradient-text">50+</div><div className="hero-stat-label">Curated Tutorials</div></div>
            <div><div className="hero-stat-value">12</div><div className="hero-stat-label">Learning Tracks</div></div>
            <div><div className="hero-stat-value gradient-text">10k+</div><div className="hero-stat-label">Newsletter Readers</div></div>
          </div>
        </div>
      </section>

      {/* ═══════════ TRACKS ═══════════ */}
      <section className="section-landing">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">📚 Learning Paths</div>
            <h2 className="section-title display-sm">Structured tracks for<br />every skill level</h2>
            <p className="body-lg">From your first AI prompt to shipping full applications. Each track combines YouTube gems, deep-dive articles, and original content into a coherent learning experience.</p>
          </div>
          <div className="tracks-grid">
            {[
              { level: 'Beginner', title: 'Vibe Coding 101', desc: 'Learn the fundamentals of AI-assisted development. Prompting patterns, tool selection, and your first AI-built app.', meta: '📺 12 videos · 📄 8 articles · ⏱ 4 weeks', slug: 'vibe-coding-101' },
              { level: 'Intermediate', title: 'Prompt Engineering Mastery', desc: 'Advanced techniques for steering AI outputs. Context windows, system prompts, and multi-turn reasoning patterns.', meta: '📺 18 videos · 📄 14 articles · ⏱ 6 weeks', slug: 'prompt-engineering-mastery' },
              { level: 'Advanced', title: 'Shipping with AI Agents', desc: 'Orchestrate multi-agent systems. Build production apps with Cursor, Copilot, and Claude — from idea to deployed.', meta: '📺 24 videos · 📄 20 articles · ⏱ 8 weeks', slug: 'shipping-with-ai-agents' },
            ].map(track => (
              <Link key={track.slug} href={`/track/${track.slug}`} className="track-card" style={{ display: 'block' }}>
                <div className="track-card-inner">
                  <div className="track-level">{track.level}</div>
                  <h3>{track.title}</h3>
                  <p>{track.desc}</p>
                  <div className="track-meta">{track.meta}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURES (BENTO) ═══════════ */}
      <section className="section-landing">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">✨ Platform</div>
            <h2 className="section-title display-sm">Everything you need<br />to master vibe coding</h2>
            <p className="body-lg">We aggregate the best content from across the web and layer original curriculum on top — so you get a structured path, not a firehose.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card span-2">
              <div className="feature-card-inner">
                <div className="feature-icon">🎬</div>
                <h3>YouTube Tutorial Aggregation</h3>
                <p>We curate the best vibe coding tutorials from YouTube, organize them by skill level and topic, and embed them directly into your learning path.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-card-inner">
                <div className="feature-icon">📝</div>
                <h3>Article Deep Dives</h3>
                <p>Hand-picked articles from the best engineering blogs, paired with our annotations and exercises.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-card-inner">
                <div className="feature-icon">🎯</div>
                <h3>Original Curriculum</h3>
                <p>Proprietary lessons written by experienced vibe coders who&apos;ve shipped real products with AI.</p>
              </div>
            </div>
            <div className="feature-card span-2">
              <div className="feature-card-inner">
                <div className="feature-icon">📬</div>
                <h3>Weekly Vibe Report</h3>
                <p>Every Sunday, get the top 5 vibe coding tutorials, 3 must-read articles, 2 new AI tools, and 1 challenge — curated by humans who actually code.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-card-inner">
                <div className="feature-icon">📊</div>
                <h3>Track Your Growth</h3>
                <p>See progress across tracks, earn badges, and build a portfolio of AI-built projects.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-card-inner">
                <div className="feature-icon">💬</div>
                <h3>Builder Community</h3>
                <p>Share projects, get code reviews, and vibe with other builders in our Discord community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ DASHBOARD PREVIEW ═══════════ */}
      <section className="section-landing">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">💻 Inside the Platform</div>
            <h2 className="section-title display-sm">Your learning command center</h2>
            <p className="body-lg">Track progress, queue up tutorials, and jump into projects — all from one clean dashboard.</p>
          </div>
          <div className="dashboard-preview">
            <div className="dashboard-bezel">
              <div className="dashboard-inner">
                <div className="dashboard-chrome">
                  <span className="chrome-dot" /><span className="chrome-dot" /><span className="chrome-dot" />
                  <span className="chrome-url">app.letsvibeai.com/dashboard</span>
                </div>
                <div className="dashboard-body">
                  <div className="dashboard-sidebar">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--accent)', background: 'rgba(34,211,238,0.1)', borderRadius: '8px' }}>
                      ◫ Dashboard
                    </div>
                    {['My Tracks', 'Continue', 'Projects'].map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="dashboard-main">
                    <div className="db-card">
                      <div className="db-card-row">
                        <span style={{ fontSize: '0.8125rem', fontWeight: 500 }}>Prompt Engineering Mastery</span>
                        <span className="db-tag">In Progress</span>
                      </div>
                      <div className="db-progress-bar"><div className="db-progress-fill" style={{ width: '67%' }} /></div>
                      <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', marginTop: '0.375rem' }}>8 / 12 modules complete</div>
                    </div>
                    <div className="db-card">
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Up Next</div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>→ Multi-turn Reasoning Patterns</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>3 videos · 2 articles · ~45 min</div>
                    </div>
                    <div className="db-card">
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>This Week&apos;s Challenge</div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>Build a CLI tool using only AI prompts</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--accent)', marginTop: '0.25rem' }}>Due Sunday · 48 submissions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PRICING ═══════════ */}
      <section className="section-landing">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">💎 Pricing</div>
            <h2 className="section-title display-sm">Start free, upgrade<br />when you&apos;re ready</h2>
            <p className="body-lg">No credit card required. Cancel anytime.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { name: 'Starter', price: 'Free', sub: 'Forever free. No catch.', features: ['3 learning tracks', 'Weekly newsletter', 'Community Discord', 'Basic progress tracking'], cta: 'Get Started', href: '/dashboard', popular: false },
              { name: 'Pro', price: '$19', sub: 'For serious vibe coders.', features: ['All 12 learning tracks', 'Project-based challenges', 'Code reviews & feedback', 'Priority Discord access', 'Downloadable resources', 'Certificate of completion'], cta: 'Start Pro', href: '/dashboard', popular: true },
              { name: 'Team', price: '$49', sub: 'Up to 5 seats. For teams.', features: ['Everything in Pro', 'Team dashboard & analytics', 'Custom learning paths', 'Priority support'], cta: 'Contact Sales', href: '/dashboard', popular: false },
            ].map(tier => (
              <div key={tier.name} className="double-bezel" style={{ height: '100%', position: 'relative' }}>
                {tier.popular && (
                  <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent)', color: '#050505', padding: '0.25rem 0.875rem', borderRadius: '9999px', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                    MOST POPULAR
                  </div>
                )}
                <div className="double-bezel-inner" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%', borderColor: tier.popular ? 'var(--accent-glow)' : undefined }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: tier.popular ? 'var(--accent)' : 'var(--text-muted)', marginBottom: '0.75rem' }}>{tier.name}</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '0.25rem' }}>
                    {tier.price}<span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--text-muted)' }}>{tier.price !== 'Free' ? '/mo' : ''}</span>
                  </div>
                  <div className="body-sm" style={{ marginBottom: '1.5rem' }}>{tier.sub}</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2rem', flex: 1 }}>
                    {tier.features.map(f => (
                      <li key={f} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--accent)' }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={tier.href} className={tier.popular ? 'btn-primary' : 'btn-ghost'} style={{ justifyContent: 'center', width: '100%' }}>
                    {tier.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA / NEWSLETTER ═══════════ */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="section-eyebrow" style={{ margin: '0 auto 1.25rem', display: 'inline-flex' }}>📬 Stay Sharp</div>
            <h2 className="section-title display-sm" style={{ marginBottom: '0.75rem' }}>The Vibe Report</h2>
            <p className="body-lg" style={{ marginBottom: 0 }}>
              Weekly curation of the best vibe coding content — tutorials, tools, and techniques. Written by builders, for builders.
            </p>
            <form className="cta-form" action="/newsletter">
              <input type="email" name="email" className="cta-input" placeholder="you@email.com" required />
              <button type="submit" className="cta-submit">Subscribe Free</button>
            </form>
            <p className="body-sm" style={{ marginTop: '0.75rem' }}>No spam. Unsubscribe anytime. 10,000+ readers and counting.</p>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link href="/" className="nav-brand" style={{ marginBottom: '0.75rem', display: 'inline-flex' }}>
                <Image src="/logos/LVAI_Primary_Icon.svg" alt="letsvibeai" width={28} height={28} />
                <span className="nav-brand-text">letsvibeai</span>
              </Link>
              <p className="body-sm">The platform that teaches you to harness AI and ship software faster than ever before.</p>
            </div>
            <div className="footer-col">
              <h4>Product</h4>
              <Link href="/tracks">Learning Tracks</Link>
              <Link href="/directory">Resource Directory</Link>
              <Link href="/workspace">AI Workspace</Link>
              <Link href="/newsletter">Newsletter</Link>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <a href="#">Blog</a>
              <a href="#">YouTube Channel</a>
              <a href="#">Community</a>
              <a href="#">Changelog</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 letsvibeai. All rights reserved.</span>
            <div className="footer-social">
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="YouTube">▶</a>
              <a href="#" aria-label="Discord">💬</a>
              <a href="#" aria-label="GitHub">⌨</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
