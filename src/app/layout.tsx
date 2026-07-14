import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'letsvibeai — Learn to Vibe Code',
  description: 'Master AI-assisted development through curated tutorials, hands-on projects, and a community of builders.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
