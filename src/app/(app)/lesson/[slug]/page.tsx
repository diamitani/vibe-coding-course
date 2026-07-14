import { tracks } from '@/lib/data';
import { notFound } from 'next/navigation';

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let lesson = null, track = null, lessonIndex = -1;
  for (const t of tracks) {
    const idx = t.lessons.findIndex(l => l.slug === slug);
    if (idx !== -1) { lesson = t.lessons[idx]; track = t; lessonIndex = idx; break; }
  }
  if (!lesson || !track) notFound();

  const prevLesson = lessonIndex > 0 ? track.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < track.lessons.length - 1 ? track.lessons[lessonIndex + 1] : null;

  return (
    <div className="page">
      <div className="flex items-center gap-2 text-sm text-muted mb-6">
        <a href="/tracks">Tracks</a><span>/</span>
        <a href={`/tracks/${track.slug}`}>{track.title}</a><span>/</span>
        <span>{lesson.title}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '1.5rem' }}>
        <div>
          {lesson.type !== 'article' && lesson.youtubeId && (
            <div className="video-embed mb-6">
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎬</div>
                <div style={{ fontWeight: 500 }}>{lesson.title}</div>
                <div className="text-sm text-muted mt-1">{lesson.source} · {lesson.duration}</div>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3 mb-6">
            <span className={`tag ${lesson.type === 'video' ? 'tag-warning' : lesson.type === 'article' ? 'tag-primary' : 'tag-success'}`}>{lesson.type}</span>
            <span className="text-sm text-muted">{lesson.source}</span>
            <span className="text-sm text-muted">{lesson.duration}</span>
            <span className="text-sm text-muted">{lesson.difficulty}</span>
          </div>

          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>{lesson.title}</h1>
          <p className="card-desc mb-6">{lesson.description}</p>

          <div className="card mb-6">
            <div className="card-body">
              <div className="article-content">
                {lesson.content.split('\n').map((line, i) => {
                  if (line.startsWith('## ')) return <h2 key={i}>{line.slice(3)}</h2>;
                  if (line.startsWith('### ')) return <h3 key={i}>{line.slice(4)}</h3>;
                  if (line.startsWith('- ')) return <li key={i}>{line.slice(2)}</li>;
                  if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ')) return <li key={i}>{line}</li>;
                  if (line.startsWith('| ')) return <pre key={i}>{line}</pre>;
                  if (line.trim() === '') return <br key={i} />;
                  return <p key={i}>{line}</p>;
                })}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            {prevLesson ? <a href={`/lesson/${prevLesson.slug}`} className="btn btn-secondary">← {prevLesson.title}</a> : <div />}
            {nextLesson ? <a href={`/lesson/${nextLesson.slug}`} className="btn btn-primary">{nextLesson.title} →</a> : <div />}
          </div>
        </div>

        <div>
          <div className="card mb-6">
            <div className="card-body">
              <div className="text-sm font-semibold mb-4">{track.title}</div>
              <div className="progress mb-4"><div className="progress-fill" style={{ width: `${((lessonIndex + 1) / track.lessonCount) * 100}%` }} /></div>
              <div className="text-xs text-muted mb-4">{lessonIndex + 1} of {track.lessonCount} lessons</div>
              <div className="flex flex-col gap-0">
                {track.lessons.map((l, i) => (
                  <a key={l.slug} href={`/lesson/${l.slug}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 0.5rem', borderRadius: 'var(--radius-sm)', fontSize: '0.75rem', color: i === lessonIndex ? 'var(--foreground)' : 'var(--muted-foreground)', background: i === lessonIndex ? 'var(--muted)' : 'transparent' }}>
                    <span style={{ minWidth: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.625rem' }}>{String(i + 1).padStart(2, '0')}</span>
                    <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="card mb-6">
            <div className="card-body">
              <div className="text-sm font-semibold mb-4">Topics</div>
              <div className="flex flex-wrap gap-2">
                {lesson.topics.map(topic => <span key={topic} className="tag tag-primary">{topic}</span>)}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="text-sm font-semibold mb-4">Resources</div>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-sm text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>📎 Download Notes</a>
                <a href="#" className="text-sm text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>💬 Discuss in Discord</a>
                <a href="#" className="text-sm text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>📋 Mark Complete</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
