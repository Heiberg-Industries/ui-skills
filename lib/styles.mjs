import { readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const STYLES_DIR = join(__dirname, '..', 'styles');

export function getStylesDir() {
  return STYLES_DIR;
}

export async function listStyles() {
  const files = await readdir(STYLES_DIR);
  return files
    .filter(f => f.endsWith('.md') && !f.startsWith('_'))
    .map(f => f.replace('.md', ''))
    .sort();
}

export function resolveStylePath(styleName) {
  const normalized = styleName
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  return join(STYLES_DIR, normalized + '.md');
}
