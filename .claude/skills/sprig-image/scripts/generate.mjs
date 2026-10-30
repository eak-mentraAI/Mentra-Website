#!/usr/bin/env node
// Generate a new Sprig illustration with OpenAI's image edit endpoint, using existing Sprig art as style
// references. Writes transparent PNGs to a review folder; nothing goes onto the site from here.
//
// Usage (from the project root):
//   node .claude/skills/sprig-image/scripts/generate.mjs --name teacher-desk \
//     --prompt "Two Sprigs: a teacher Sprig with glasses pointing at a whiteboard, a student Sprig raising a leaf" \
//     [--ref public/images/sprig/blog-hero.png ...] [--n 2] [--size 1024x1024] [--quality high] [--dry-run]
//
// Key: OPENAI_API_KEY from the environment, or from .env.local (gitignored). The key is never printed.
// Model: OPENAI_IMAGE_MODEL (default gpt-image-1.5; gpt-image-2 can't do transparent backgrounds).

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';

// A character sheet built from the five How-it-works Sprigs comes first: models hold a character more tightly
// with a clean sheet than with busy scenes. Two light two-character scenes follow for scene style and scale.
const DEFAULT_REFS = [
  '.claude/skills/sprig-image/refs/character-sheet.png',
  'public/images/sprig/MENTRA_SPRIG_GIVE.png',
  'public/images/sprig/blog-hero.png',
];

// The house style, prepended to every prompt so new art matches the light two-character scenes.
const STYLE = [
  'Match the art style of the reference images exactly.',
  'The character is Sprig: a soft, rounded mint-teal seedling creature with two green leaves on top, small dot eyes,',
  'rosy cheeks, a bold, thick dark-teal outline (the same heavy line weight as the references, never thin or sketchy)',
  'and gentle cel shading. Characters are drawn large but every character and prop sits fully inside the frame,',
  'with clear margin on every side (nothing cropped). Keep Sprig on-model.',
  'Light mint palette, small friendly scene with one or two characters and a few props, generous empty space,',
  'transparent background, no text, no letters, no logos, no realistic people.',
].join(' ');

function parseArgs(argv) {
  const args = { refs: [], n: 1, size: '1024x1024', quality: 'high', background: 'transparent', dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const next = () => argv[++i];
    if (a === '--prompt') args.prompt = next();
    else if (a === '--name') args.name = next();
    else if (a === '--ref') args.refs.push(next());
    else if (a === '--n') args.n = Number(next());
    else if (a === '--size') args.size = next();
    else if (a === '--quality') args.quality = next();
    else if (a === '--out') args.out = next();
    else if (a === '--background') args.background = next();
    else if (a === '--dry-run') args.dryRun = true;
    else throw new Error(`Unknown argument: ${a}`);
  }
  if (!args.prompt) throw new Error('Missing --prompt');
  if (!args.name || !/^[a-z0-9-]+$/.test(args.name)) throw new Error('Missing or invalid --name (use lowercase-with-dashes)');
  if (!args.refs.length) args.refs = DEFAULT_REFS;
  if (!Number.isInteger(args.n) || args.n < 1 || args.n > 4) throw new Error('--n must be 1 to 4');
  return args;
}

async function loadKey() {
  if (process.env.OPENAI_API_KEY) return process.env.OPENAI_API_KEY.trim();
  for (const file of ['.env.local', '.env']) {
    if (!existsSync(file)) continue;
    const line = (await readFile(file, 'utf8')).split('\n').find((l) => l.startsWith('OPENAI_API_KEY='));
    if (line) return line.slice('OPENAI_API_KEY='.length).trim().replace(/^["']|["']$/g, '');
  }
  return null;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const model = process.env.OPENAI_IMAGE_MODEL || 'gpt-image-1.5';
  const outDir = resolve(args.out || '.claude/sprig-review');
  for (const r of args.refs) if (!existsSync(r)) throw new Error(`Reference not found: ${r}`);

  if (!['transparent', 'opaque'].includes(args.background)) throw new Error('--background must be transparent or opaque');
  // Opaque scenes get a soft illustrated environment instead of the transparent cut-out
  const style = args.background === 'opaque'
    ? STYLE.replace('small friendly scene with one or two characters and a few props, generous empty space,', 'a friendly scene that may hold several characters and background detail,').replace('transparent background,', 'a soft, light, warm illustrated environment in the same painterly style as the scene reference, with no hard frame or border,')
    : STYLE;
  const prompt = `${style}\n\nScene: ${args.prompt}`;
  if (args.dryRun) {
    console.log(JSON.stringify({ model, size: args.size, quality: args.quality, n: args.n, refs: args.refs, outDir, prompt }, null, 2));
    return;
  }

  const key = await loadKey();
  if (!key) throw new Error('No OPENAI_API_KEY found. Set it in your shell or in .env.local (gitignored).');

  const form = new FormData();
  form.append('model', model);
  form.append('prompt', prompt);
  form.append('n', String(args.n));
  form.append('size', args.size);
  form.append('quality', args.quality);
  form.append('background', args.background);
  form.append('output_format', 'png');
  for (const r of args.refs) {
    form.append('image[]', new Blob([await readFile(r)], { type: 'image/png' }), basename(r));
  }

  console.error(`Generating ${args.n} image(s) with ${model} from ${args.refs.length} reference(s)…`);
  const res = await fetch('https://api.openai.com/v1/images/edits', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}` },
    body: form,
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`OpenAI API ${res.status}: ${body?.error?.message || 'request failed'}`);

  await mkdir(outDir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const written = [];
  for (const [i, item] of (body.data || []).entries()) {
    if (!item.b64_json) continue;
    const file = join(outDir, `${args.name}-${stamp}-${i + 1}.png`);
    await writeFile(file, Buffer.from(item.b64_json, 'base64'));
    written.push(file);
  }
  await writeFile(join(outDir, `${args.name}-${stamp}.json`), JSON.stringify({ model, prompt, refs: args.refs, size: args.size, quality: args.quality, files: written, usage: body.usage }, null, 2));
  console.log(written.join('\n'));
}

main().catch((e) => {
  console.error(`sprig-image: ${e.message}`);
  process.exit(1);
});
