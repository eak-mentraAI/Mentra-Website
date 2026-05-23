export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  readTime: number;
  canonicalUrl?: string;
}

interface RawFrontmatter {
  title?: string;
  excerpt?: string;
  author?: string;
  date?: string;
  category?: string;
  tags?: string[] | string;
  image?: string;
  featured?: boolean;
  readTime?: number;
  canonicalUrl?: string;
}

const FRONTMATTER_RE = /^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?([\s\S]*)$/;

function parseFrontmatterValue(raw: string): unknown {
  const value = raw.trim();
  if (value === '') return '';
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
  if (value.startsWith('[') && value.endsWith(']')) {
    return value
      .slice(1, -1)
      .split(',')
      .map(s => s.trim().replace(/^['"]|['"]$/g, ''))
      .filter(Boolean);
  }
  return value.replace(/^['"]|['"]$/g, '');
}

function parseFrontmatter(source: string): { data: RawFrontmatter; body: string } {
  const match = FRONTMATTER_RE.exec(source);
  if (!match) return { data: {}, body: source };

  const data: Record<string, unknown> = {};
  const lines = match[1].split(/\r?\n/);
  for (const line of lines) {
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1);
    data[key] = parseFrontmatterValue(value);
  }
  return { data: data as RawFrontmatter, body: match[2] };
}

function slugFromPath(path: string): string {
  return path.split('/').pop()!.replace(/\.md$/, '');
}

function toPost(path: string, source: string): BlogPost {
  const { data, body } = parseFrontmatter(source);
  const tags = Array.isArray(data.tags)
    ? data.tags
    : typeof data.tags === 'string' && data.tags
      ? [data.tags]
      : [];

  return {
    slug: slugFromPath(path),
    title: data.title ?? 'Untitled',
    excerpt: data.excerpt ?? '',
    content: body.trim(),
    author: data.author ?? 'Mentra',
    date: data.date ?? '1970-01-01',
    category: data.category ?? 'Uncategorized',
    tags,
    image: data.image ?? '',
    featured: data.featured === true,
    readTime: typeof data.readTime === 'number' ? data.readTime : 5,
    canonicalUrl: data.canonicalUrl,
  };
}

const modules = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const posts: BlogPost[] = Object.entries(modules)
  .map(([path, source]) => toPost(path, source))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug);
}
