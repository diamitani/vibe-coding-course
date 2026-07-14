'use client';

import { useState } from 'react';
import { directoryData } from '@/lib/directory';

const categoryIcons: Record<string, string> = {
  'AI Platforms & Tools': '🛠️',
  'Online Courses': '🎓',
  'Newsletters': '📬',
  'Accelerators & Bootcamps': '🚀',
  'AI Investors & VCs': '💰',
  'YouTube Channels': '🎬',
  'Events & Hackathons': '🎪',
};

export default function DirectoryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('AI Platforms & Tools');
  const [search, setSearch] = useState('');

  const categories = Object.keys(directoryData);
  const items = directoryData[activeCategory] || [];
  const filtered = search
    ? items.filter(i =>
        i.name.toLowerCase().includes(search.toLowerCase()) ||
        i.description.toLowerCase().includes(search.toLowerCase()) ||
        i.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
      )
    : items;

  return (
    <div className="page">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 style={{ fontSize: '1.125rem', fontWeight: 600, letterSpacing: '-0.015em' }}>Resource Directory</h1>
          <p className="text-sm text-muted mt-1">
            Curated AI platforms, tools, courses, investors, events, and more. Everything you need to build with AI.
          </p>
        </div>
      </div>

      {/* Category tabs */}
      <div className="tabs mb-6" style={{ overflowX: 'auto', flexWrap: 'nowrap' }}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
            style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.375rem' }}
          >
            <span>{categoryIcons[cat] || '📂'}</span>
            <span>{cat}</span>
            <span className="text-xs text-muted" style={{ marginLeft: '0.25rem' }}>
              {directoryData[cat].length}
            </span>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          className="input"
          placeholder={`Search ${activeCategory.toLowerCase()}...`}
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ maxWidth: 360 }}
        />
      </div>

      {/* Directory grid */}
      <div className="grid-3">
        {filtered.map(item => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{ display: 'block' }}
          >
            <div className="card-body">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold">{item.name}</span>
                {'free' in item && (
                  <span className={`tag ${item.free ? 'tag-success' : 'tag-primary'}`} style={{ fontSize: '0.625rem' }}>
                    {item.free ? 'Free' : 'Paid'}
                  </span>
                )}
              </div>
              <div className="card-desc" style={{ marginBottom: '0.75rem', minHeight: '2.5rem' }}>
                {item.description}
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="tag" style={{ fontSize: '0.625rem' }}>{item.category}</span>
                {item.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="tag" style={{ fontSize: '0.625rem', background: 'var(--muted)' }}>{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center p-8 text-muted text-sm">
          No results found. Try a different search.
        </div>
      )}
    </div>
  );
}
