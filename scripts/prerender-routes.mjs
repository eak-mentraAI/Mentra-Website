// Postbuild: give every known route its own HTML file so GitHub Pages answers 200, not 404.
//
// GitHub Pages serves /about from about.html (no redirect), so each route becomes
// dist/<route>.html: a copy of dist/index.html with that page's title, description,
// canonical URL and social tags. The React app still boots and renders the page.
// Unknown paths keep falling through to dist/404.html. Old routes get small redirect
// pages, and dist/sitemap.xml lists every indexable page.
//
// Adding a route to src/App.tsx? Add it to PAGES or REDIRECTS below, or the build fails.

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const BLOG_DIR = join(ROOT, 'src/content/blog');
const SITE = 'https://www.mymentra.ai';

/** Indexable pages. Titles follow the "<Page> | Mentra" pattern used by AudiencePage. */
const PAGES = {
  '/': {
    title: 'Mentra - AI That Teaches Students to Think Without It',
    description:
      'Mentra measures how every child actually thinks — not just what they did — and turns it into insight teachers, parents, and students can act on. Support that fades as students grow.',
  },
  '/about': {
    title: 'About Mentra | Why We Built It',
    description:
      "Mentra's founder on why we built AI whose job is to make itself unnecessary: every interaction should leave students stronger, not more dependent.",
  },
  '/platform': {
    title: 'The Mentra Platform | Cognition Infrastructure for K–12',
    description:
      'Mentra sits downstream of the LMS as a learning tool and upstream of partners as a cognition platform, capturing how students think and sharing that signal safely with the systems districts already use.',
  },
  '/teachers': {
    title: 'Mentra for Teachers',
    description:
      "Mentra shows where each student's reasoning is growing, where it stalls, and what you might try next. You stay the one making the decisions.",
  },
  '/parents': {
    title: 'Mentra for Families',
    description:
      "Mentra is a learning companion designed not to do your child's homework. It coaches them through their own reasoning, tells you what's changing in plain words, and leaves you in control of their data.",
  },
  '/schools': {
    title: 'Mentra for Schools and Districts',
    description:
      'Mentra shows how students reason, where a class gets stuck and what to try next. A pilot then measures whether it is worth the cost, against measures you agree up front.',
  },
  '/sponsor-a-school': {
    title: 'Sponsor a School | Mentra',
    description:
      'Help fund Mentra for a Title I school serving a community that could not pay for it on its own. You cover the cost of running it; Mentra donates the rest.',
  },
  '/blog': {
    title: 'Blog | Mentra',
    description:
      'Ideas, research and stories from Mentra on AI, learning and teaching, for educators, district leaders and families.',
  },
  '/press': {
    title: 'Press | Mentra',
    description:
      'Fast facts, media kit and press contacts for Mentra, the K-12 learning platform that turns how students think into insight teachers can act on.',
  },
  '/privacy': {
    title: 'Privacy Policy | Mentra',
    description: 'How Mentra collects, uses and protects personal information, including student data.',
  },
  '/terms': {
    title: 'Terms of Use | Mentra',
    description: 'The terms that govern use of the Mentra website and services.',
  },
  '/cookies': {
    title: 'Cookie Policy | Mentra',
    description: 'Which cookies the Mentra website uses, why, and how to change your choices.',
  },
};

/** Old routes. Mirrors the redirects in src/App.tsx. */
const REDIRECTS = {
  '/how-it-works': '/#the-story',
  '/students': '/#the-story',
  '/institutions': '/schools',
  '/districts': '/schools',
  '/pricing': '/#pricing',
  '/faq': '/#faq',
};

/** Routes in App.tsx that are not single static pages. */
const DYNAMIC = new Set(['/blog/:slug', '*']);

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function assertRoutesCovered() {
  const app = readFileSync(join(ROOT, 'src/App.tsx'), 'utf8');
  const paths = [...app.matchAll(/<Route\s+path="([^"]+)"/g)].map((m) => m[1]);
  const missing = paths.filter((p) => !(p in PAGES) && !(p in REDIRECTS) && !DYNAMIC.has(p));
  if (missing.length) {
    throw new Error(
      `prerender-routes: no metadata for route(s) ${missing.join(', ')}. Add them to scripts/prerender-routes.mjs.`,
    );
  }
}

// Same rules as src/lib/blog.ts, reduced to the fields this script needs.
function readPosts() {
  return readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const source = readFileSync(join(BLOG_DIR, file), 'utf8');
      const match = /^---\s*\r?\n([\s\S]*?)\r?\n---/.exec(source);
      const data = {};
      for (const line of (match?.[1] ?? '').split(/\r?\n/)) {
        const i = line.indexOf(':');
        if (i === -1 || line.trim().startsWith('#')) continue;
        data[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^['"]|['"]$/g, '');
      }
      return {
        slug: file.replace(/\.md$/, ''),
        title: data.title || 'Untitled',
        excerpt: data.excerpt || '',
        date: data.date || '',
        image: data.image || '',
        canonicalUrl: data.canonicalUrl,
      };
    });
}

/** Replace a tag's content attribute, failing loudly if index.html changed shape. */
function setMeta(html, attr, key, value) {
  const re = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`prerender-routes: <meta ${attr}="${key}"> not found in index.html`);
  return html.replace(re, `$1${escapeHtml(value)}$2`);
}

function renderPage(template, { title, description, canonical, image, type = 'website' }) {
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = setMeta(html, 'name', 'description', description);
  html = setMeta(html, 'property', 'og:title', title);
  html = setMeta(html, 'property', 'og:description', description);
  html = setMeta(html, 'property', 'og:type', type);
  html = setMeta(html, 'name', 'twitter:title', title);
  html = setMeta(html, 'name', 'twitter:description', description);
  if (image) {
    html = setMeta(html, 'property', 'og:image', image);
    html = setMeta(html, 'name', 'twitter:image', image);
    // The default card's size and alt text describe a different image.
    html = html.replace(/\s*<meta property="og:image:(width|height|type|alt)"[^>]*>/g, '');
    html = html.replace(/\s*<meta name="twitter:image:alt"[^>]*>/, '');
  }
  const head =
    `    <link rel="canonical" href="${escapeHtml(canonical)}" />\n` +
    `    <meta property="og:url" content="${escapeHtml(canonical)}" />\n`;
  return html.replace(/\s*<\/head>/, `\n${head}  </head>`);
}

function renderRedirect(target) {
  const url = escapeHtml(target);
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Redirecting to Mentra</title>
    <link rel="canonical" href="${escapeHtml(SITE + target.split('#')[0])}" />
    <meta name="robots" content="noindex" />
    <meta http-equiv="refresh" content="0; url=${url}" />
    <script>location.replace(${JSON.stringify(target)});</script>
  </head>
  <body><a href="${url}">Continue to Mentra</a></body>
</html>
`;
}

function write(route, html) {
  const file = join(DIST, `${route.slice(1)}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

assertRoutesCovered();

const template = readFileSync(join(DIST, 'index.html'), 'utf8');
const posts = readPosts();
const sitemap = [];

for (const [route, meta] of Object.entries(PAGES)) {
  const canonical = SITE + route;
  const html = renderPage(template, { ...meta, canonical });
  if (route === '/') writeFileSync(join(DIST, 'index.html'), html);
  else write(route, html);
  sitemap.push({ loc: canonical });
}

for (const post of posts) {
  const route = `/blog/${post.slug}`;
  const canonical = post.canonicalUrl || SITE + route;
  write(
    route,
    renderPage(template, {
      title: `${post.title} | Mentra`,
      description: post.excerpt,
      canonical,
      image: post.image ? SITE + post.image : undefined,
      type: 'article',
    }),
  );
  // A post first published elsewhere belongs in that site's sitemap, not ours.
  if (!post.canonicalUrl) sitemap.push({ loc: canonical, lastmod: post.date });
}

for (const [route, target] of Object.entries(REDIRECTS)) write(route, renderRedirect(target));

// /blog is both blog.html and a folder of posts. If GitHub Pages ever prefers the folder
// (redirecting /blog to /blog/), its index.html keeps that a 200 on the right page.
writeFileSync(join(DIST, 'blog/index.html'), renderPage(template, { ...PAGES['/blog'], canonical: SITE + '/blog' }));

writeFileSync(
  join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap
  .map(({ loc, lastmod }) => `  <url><loc>${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`)
  .join('\n')}
</urlset>
`,
);

console.log(
  `prerender-routes: ${Object.keys(PAGES).length} pages, ${posts.length} posts, ${Object.keys(REDIRECTS).length} redirects, sitemap.xml`,
);
