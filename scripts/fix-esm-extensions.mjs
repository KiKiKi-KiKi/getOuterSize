import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const distEsmDir = new URL('../dist-esm/', import.meta.url).pathname;

const relativeSpecifier = /((?:import|export)[^'"]*from\s+['"])(\.{1,2}\/[^'"]+)(['"])/g;

for (const file of readdirSync(distEsmDir)) {
  if (!file.endsWith('.js')) continue;

  const filePath = join(distEsmDir, file);
  const source = readFileSync(filePath, 'utf8');
  const fixed = source.replace(relativeSpecifier, (match, prefix, specifier, suffix) => {
    if (/\.[a-zA-Z0-9]+$/.test(specifier)) return match;
    return `${prefix}${specifier}.js${suffix}`;
  });

  if (fixed !== source) writeFileSync(filePath, fixed);
}
