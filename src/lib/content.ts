// Reads lesson and blog markdown files at build time.
import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

const CONTENT = path.join(process.cwd(), 'src', 'content');

export interface Doc {
  slug: string;
  meta: Record<string, string>;
  body: string;
}

function parse(file: string, slug: string): Doc {
  const raw = fs.readFileSync(file, 'utf8');
  const meta: Record<string, string> = {};
  let body = raw;
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (m) {
    for (const line of m[1].split('\n')) {
      const i = line.indexOf(':');
      if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    }
    body = raw.slice(m[0].length);
  }
  return { slug, meta, body };
}

function readDir(dir: string): Doc[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .sort()
    .map((f) => parse(path.join(dir, f), f.replace(/^\d+-/, '').replace(/\.md$/, '')));
}

export function getLessons(courseSlug: string) {
  return readDir(path.join(CONTENT, 'courses', courseSlug));
}

export function getLesson(courseSlug: string, lessonSlug: string) {
  const lessons = getLessons(courseSlug);
  const index = lessons.findIndex((l) => l.slug === lessonSlug);
  if (index === -1) return null;
  return { lesson: lessons[index], index, prev: lessons[index - 1], next: lessons[index + 1], total: lessons.length };
}

export function getPosts() {
  return readDir(path.join(CONTENT, 'blog')).sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime(),
  );
}

export function getPost(slug: string) {
  return getPosts().find((p) => p.slug === slug) || null;
}

export function toHtml(markdown: string) {
  return marked.parse(markdown, { async: false }) as string;
}

export function excerpt(markdown: string, length = 150) {
  const text = markdown
    .replace(/```[\s\S]*?```/g, '')
    .replace(/^#.*$/gm, '')
    .replace(/[*_`>#|-]/g, '')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > length ? text.slice(0, length).replace(/\s\S*$/, '') + '…' : text;
}
