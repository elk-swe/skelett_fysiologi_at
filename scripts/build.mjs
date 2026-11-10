import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'dist');
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
const omit = new Set(['.git', '.openai', '.sites-checkout', 'dist', 'node_modules', 'scripts', 'README.md']);
for (const name of await readdir(root)) {
  if (omit.has(name) || name.startsWith('.')) continue;
  await cp(path.join(root, name), path.join(out, name), { recursive: true });
}
console.log('Static files copied to dist/.');
