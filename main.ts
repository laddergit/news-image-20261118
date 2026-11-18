// news-image-20261118 entry (Node 22, standard library only):
// the poster is drawn in entry.png beside this file; this program
// copies that image to the output directory the grader provides.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = fileURLToPath(new URL('./entry.png', import.meta.url));
const dest = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
copyFileSync(source, dest);
console.log(`copied ${source} -> ${dest} (${statSync(dest).size} bytes)`);
