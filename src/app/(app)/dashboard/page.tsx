import { tracks, newsletterIssues } from '@/lib/data';

export default function DashboardPage() {
  const totalLessons = tracks.reduce((sum, t) => sum + t.lessonCount, 0);
  const totalEnrolled = tracks.reduce((sum, t) => sum + t.enrolled, 0);

  return (
    <div className="page">
      {/* Mission banner */}
      <div className="card mb-6" style={{ background: 'linear-gradient(135deg, oklch(0.485 0.291 264.121 / 0.08), transparent)' }}>
        <div className="card-body">
          <div className="flex items-center gap-4 flex-wrap">
            <div style={{ fontSize: '2rem' }}>🎯</div>
            <div className="flex-1">
              <div className="card-title mb-4">Mission: 1 Million AI Builders</div>
              <div className="card-desc">
                We&apos;re building the platform that turns AI curiosity into AI capability.
                Resources, courses, tools, and community — everything you need to build with AI.
              </div>
            </div>
            <a href="/tracks" className="btn btn-primary">Start Learning →</a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid-4 mb-6">
        <div className="card"><div className="card-body">
          <div className="stat-value">{tracks.length}</div><div className="stat-label">Learning Tracks</div>
        </div></div>
        <div className="card"><div className="card-body">
          <div className="stat-value">{totalLessons}+</div><div className="stat-label">Curated Lessons</div>
        </div></div>
        <div className="card"><div className="card-body">
          <div className="stat-value">{totalEnrolled.toLocaleString()}+</div><div className="stat-label">Learners</div>
        </div></div>
        <div className="card"><div className="card-body">
          <div className="stat-value">50+</div><div className="stat-label">Directory Resources</div>
        </div></div>
      </div>

      {/* Continue + Newsletter */}
      <div className="grid-2 mb-6">
        {/* Continue Learning */}
        <div>
          <h2 style={{ fontSize: '0.9375rem', fontWeight: 600, marginBottom: '1rem' }}>Continue Learning</h2>
          <div className="flex flex-col gap-2">
            {tracks.map(track => (
              <a key={track.slug} href={`/track/${track.slug}`} className="card" style={{ display: 'block' }}>
                <div className="card-body" style={{ padding: '1rem' }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="card-title" style={{ fontSize: '0.875rem' }}>{track.title}</div>
                    <span className={`tag ${track.level === 'Beginner' ? 'tag-success' : track.level === 'Intermediate' ? 'tag-warning' : 'tag-primary'}`}>
                      {track.level}
                    </span>
                  </div>
                  <div className="progress">
                    <div className="progress-fill" style={{ width: track.slug === 'vibe-coding-101' ? '67%' : '25%' }} />
                  </div>
                  <div className="text-xs text-muted mt-2">{track.lessonCount} lessons · {track.duration}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Latest Newsletter */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 style={{ fontSize: '0.9375rem', fontWeight: 600 }}>Latest Newsletter</h2>
            <a href="/newsletter" className="btn btn-secondary btn-sm">View All</a>
          </div>
          <div className="card" style={{ height: 'calc(100% - 2.5rem)' }}>
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <span className="tag tag-primary">Issue #{newsletterIssues[0].number}</span>
                <span className="text-sm text-muted">{newsletterIssues[0].date}</span>
              </div>
              <div className="card-title mb-4">{newsletterIssues[0].title}</div>
              <div className="card-desc mb-4">{newsletterIssues[0].summary}</div>
              <div className="flex flex-col gap-1 mb-4">
                {newsletterIssues[0].topLinks.slice(0, 3).map(link => (
                  <div key={link.title} className="flex items-center gap-2 text-sm text-muted">
                    <span>{link.type}</span><span>{link.title}</span>
                  </div>
                ))}
              </div>
              <div className="card" style={{ background: 'var(--muted)', marginBottom: '1rem' }}>
                <div className="card-body" style={{ padding: '0.75rem 1rem' }}>
                  <div className="text-xs font-semibold mb-4" style={{ color: 'var(--primary)' }}>🔧 Tool: {newsletterIssues[0].tool.name}</div>
                  <div className="text-sm text-muted">{newsletterIssues[0].tool.description}</div>
                </div>
              </div>
              <a href="/newsletter" className="btn btn-secondary btn-sm">Read Full Issue →</a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Directory Access */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 style={{ fontSize: '0.9375rem', fontWeight: 600 }}>Explore the Directory</h2>
          <a href="/directory" className="btn btn-secondary btn-sm">Browse All</a>
        </div>
        <div className="grid-4">
          {[
            { label: 'AI Platforms', desc: 'Tools & editors', icon: '🛠️', href: '/directory' },
            { label: 'Courses', desc: 'Online & accredited', icon: '🎓', href: '/directory' },
            { label: 'Newsletters', desc: 'Stay informed', icon: '📬', href: '/directory' },
            { label: 'Investors', desc: 'Funding & accelerators', icon: '💰', href: '/directory' },
          ].map(item => (
            <a key={item.label} href={item.href} className="card" style={{ display: 'block' }}>
              <div className="card-body">
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <div className="card-title" style={{ fontSize: '0.875rem' }}>{item.label}</div>
                <div className="text-xs text-muted mt-1">{item.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
