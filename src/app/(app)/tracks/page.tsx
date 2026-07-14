import { tracks } from '@/lib/data';

export default function TracksPage() {
  return (
    <div className="page">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 style={{ fontSize: '1.125rem', fontWeight: 600, letterSpacing: '-0.015em' }}>Learning Tracks</h1>
          <p className="text-sm text-muted mt-1">Structured paths to master vibe coding — from fundamentals to shipping complex apps.</p>
        </div>
        <input className="input" placeholder="Search tracks..." style={{ width: 200 }} />
      </div>
      <div className="grid-3">
        {tracks.map(track => (
          <a key={track.slug} href={`/track/${track.slug}`} className="card" style={{ display: 'block' }}>
            <div className="card-body">
              <div className="flex items-center justify-between mb-4">
                <span className={`tag ${track.level === 'Beginner' ? 'tag-success' : track.level === 'Intermediate' ? 'tag-warning' : 'tag-primary'}`}>{track.level}</span>
                <span className="text-sm text-muted">{track.duration}</span>
              </div>
              <div className="card-title mb-4">{track.title}</div>
              <div className="card-desc" style={{ marginBottom: '1rem', minHeight: '3rem' }}>{track.description.slice(0, 130)}...</div>
              <div className="flex items-center gap-3 text-sm text-muted mb-4">
                <span>📚 {track.lessonCount} lessons</span>
                <span>👥 {track.enrolled.toLocaleString()}</span>
                <span>★ {track.rating}</span>
              </div>
              <span className="btn btn-primary btn-sm">View Track →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
