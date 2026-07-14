'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const titles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/tracks': 'Learning Tracks',
  '/directory': 'Resource Directory',
  '/workspace': 'AI Workspace',
  '/newsletter': 'Newsletter',
};

export function Topbar() {
  const pathname = usePathname();

  const getTitle = () => {
    if (pathname.startsWith('/track/') && !pathname.includes('/lesson/')) return 'Track Details';
    if (pathname.includes('/lesson/')) return 'Lesson';
    return titles[pathname] || 'letsvibeai';
  };

  return (
    <div className="app-topbar">
      <span className="app-topbar-title">{getTitle()}</span>
      <div className="app-topbar-actions">
        <Link href="/" className="btn btn-secondary btn-xs">← Back to Site</Link>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6875rem', fontWeight: 700, color: '#fff' }}>P</div>
      </div>
    </div>
  );
}
