import { tracks } from '@/lib/data';
import { notFound } from 'next/navigation';

export default async function TrackPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const track = tracks.find(t => t.slug === slug);
  if (!track) notFound();

  return (
    <div className="page">
      <a href="/tracks" className="text-sm text-muted" style={{ display: 'inline-block', marginBottom: '0.75rem' }}>← Back to Tracks</a>
      <div className="flex items-center gap-3 mb-4">
        <span className={`tag ${track.level === 'Beginner' ? 'tag-success' : track.level === 'Intermediate' ? 'tag-warning' : 'tag-primary'}`}>{track.level}</span>
        <span className="text-sm text-muted">{track.duration} · {track.lessonCount} lessons</span>
      </div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>{track.title}</h1>
      <p className="card-desc" style={{ maxWidth: '640px' }}>{track.description}</p>
      <div className="flex items-center gap-4 mt-4 mb-6">
        <span className="text-sm text-muted">★ {track.rating}</span>
        <span className="text-sm text-muted">👥 {track.enrolled.toLocaleString()} enrolled</span>
      </div>

      <div className="card mb-6">
        <div className="card-body">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold">Course Progress</span>
            <span className="text-sm text-muted">25% complete</span>
          </div>
          <div className="progress" style={{ height: 6 }}><div className="progress-fill" style={{ width: '25%' }} /></div>
          <div className="flex items-center gap-2 mt-4">
            <button className="btn btn-primary">Continue Learning</button>
            <button className="btn btn-secondary">Download Resources</button>
          </div>
        </div>
      </div>

      <h2 style={{ fontSize: '0.9375rem', fontWeight: 600, marginBottom: '0.75rem' }}>Lessons</h2>
      <div className="flex flex-col gap-1">
        {track.lessons.map((lesson, i) => (
          <a key={lesson.slug} href={`/lesson/${lesson.slug}`} className="card" style={{ display: 'block' }}>
            <div className="card-body" style={{ padding: '0.875rem 1.25rem' }}>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted font-mono" style={{ minWidth: '1.5rem' }}>{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm text-muted" style={{ minWidth: '4rem' }}>{lesson.type === 'video' ? '🎬' : lesson.type === 'article' ? '📄' : '📚'} {lesson.type}</span>
                <div className="flex-1">
                  <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>{lesson.title}</div>
                  <div className="text-xs text-muted mt-1">{lesson.source} · {lesson.duration}</div>
                </div>
                <span className={`tag ${i === 0 ? 'tag-success' : ''}`} style={{ fontSize: '0.625rem' }}>{i === 0 ? '✓ Done' : 'Not started'}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
