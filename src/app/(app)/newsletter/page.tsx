import { newsletterIssues } from '@/lib/data';

export default function NewsletterPage() {
  return (
    <div className="page">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 style={{ fontSize: '1.125rem', fontWeight: 600, letterSpacing: '-0.015em' }}>The Vibe Report</h1>
          <p className="text-sm text-muted mt-1">Weekly curation of the best vibe coding content. Every Sunday.</p>
        </div>
        <button className="btn btn-primary btn-sm">Subscribe Free</button>
      </div>

      <div className="card mb-6" style={{ background: 'linear-gradient(135deg, oklch(0.485 0.291 264.121 / 0.08), transparent)' }}>
        <div className="card-body" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ fontSize: '2.5rem' }}>📬</div>
          <div className="flex-1">
            <div className="card-title" style={{ marginBottom: '0.25rem' }}>Stay ahead of the curve</div>
            <div className="card-desc">Get the top 5 tutorials, 3 articles, 2 tools, and 1 challenge every Sunday.</div>
          </div>
          <div className="flex gap-2" style={{ minWidth: 280 }}>
            <input className="input" placeholder="you@email.com" style={{ flex: 1 }} />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>

      <h2 style={{ fontSize: '0.9375rem', fontWeight: 600, marginBottom: '1rem' }}>Past Issues</h2>
      <div className="flex flex-col gap-4">
        {newsletterIssues.map(issue => (
          <div key={issue.slug} className="card">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <span className="tag tag-primary">Issue #{issue.number}</span>
                <span className="text-sm text-muted">{issue.date}</span>
              </div>
              <div className="card-title" style={{ marginBottom: '0.5rem' }}>{issue.title}</div>
              <div className="card-desc mb-4">{issue.summary}</div>
              <div className="text-xs text-muted font-semibold mb-4" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>Top Picks</div>
              <div className="flex flex-col gap-1 mb-4">
                {issue.topLinks.map(link => (
                  <div key={link.title} className="flex items-center gap-2 text-sm" style={{ padding: '0.25rem 0' }}>
                    <span style={{ minWidth: '5rem' }} className="text-muted">{link.type}</span>
                    <a href={link.url} className="text-muted" style={{ borderBottom: '1px solid var(--border)' }}>{link.title}</a>
                  </div>
                ))}
              </div>
              <div className="card" style={{ background: 'var(--muted)', marginBottom: '1rem' }}>
                <div className="card-body" style={{ padding: '0.75rem 1rem' }}>
                  <div className="text-xs font-semibold mb-4" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--primary)' }}>🔧 Tool of the Week</div>
                  <a href={issue.tool.url} className="font-semibold" style={{ fontSize: '0.8125rem', display: 'block', marginBottom: '0.25rem' }}>{issue.tool.name}</a>
                  <div className="text-sm text-muted">{issue.tool.description}</div>
                </div>
              </div>
              <div className="text-xs text-muted font-semibold mb-4" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>💪 Challenge</div>
              <div className="text-sm">{issue.challenge}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
