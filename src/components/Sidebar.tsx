'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/dashboard') return pathname === '/dashboard';
    return pathname.startsWith(path);
  };

  return (
    <aside className="app-sidebar">
      <Link href="/" className="app-sidebar-brand">
        <Image src="/logos/LVAI_Primary_Icon.svg" alt="letsvibeai" width={28} height={28} style={{ borderRadius: '7px' }} />
        <span className="app-sidebar-brand-text">letsvibeai</span>
      </Link>

      <nav className="app-sidebar-nav">
        <div className="app-sidebar-section">Main</div>
        <Link href="/dashboard" className={`nav-item ${isActive('/dashboard') ? 'active' : ''}`}>
          <span className="nav-item-icon">◫</span>Dashboard
        </Link>
        <Link href="/tracks" className={`nav-item ${isActive('/tracks') && !pathname.includes('/track/') ? 'active' : ''}`}>
          <span className="nav-item-icon">☰</span>Learning Tracks
          <span className="nav-item-badge">3</span>
        </Link>
        <Link href="/directory" className={`nav-item ${isActive('/directory') ? 'active' : ''}`}>
          <span className="nav-item-icon">📂</span>Resource Directory
          <span className="nav-item-badge">7</span>
        </Link>
        <Link href="/workspace" className={`nav-item ${isActive('/workspace') ? 'active' : ''}`}>
          <span className="nav-item-icon">⚡</span>AI Workspace
        </Link>

        <div className="app-sidebar-section">Content</div>
        <Link href="/newsletter" className={`nav-item ${isActive('/newsletter') ? 'active' : ''}`}>
          <span className="nav-item-icon">📬</span>Newsletter
        </Link>

        <div className="app-sidebar-section">Quick Links</div>
        <Link href="/track/vibe-coding-101" className={`nav-item ${isActive('/track/vibe-coding-101') ? 'active' : ''}`}>
          <span className="nav-item-icon">🚀</span>Vibe Coding 101
        </Link>
        <Link href="/track/prompt-engineering-mastery" className={`nav-item ${isActive('/track/prompt-engineering-mastery') ? 'active' : ''}`}>
          <span className="nav-item-icon">⚡</span>Prompt Mastery
        </Link>
        <Link href="/track/shipping-with-ai-agents" className={`nav-item ${isActive('/track/shipping-with-ai-agents') ? 'active' : ''}`}>
          <span className="nav-item-icon">🤖</span>Shipping with Agents
        </Link>
      </nav>

      <div style={{ marginTop: 'auto', padding: '0.75rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontSize: '0.6875rem', color: 'var(--muted-foreground)', marginBottom: '0.25rem' }}>Pro Plan</div>
        <div className="progress" style={{ marginBottom: '0.25rem' }}><div className="progress-fill" style={{ width: '67%' }} /></div>
        <div style={{ fontSize: '0.625rem', color: 'var(--muted-foreground)' }}>8/12 modules complete</div>
      </div>
    </aside>
  );
}
