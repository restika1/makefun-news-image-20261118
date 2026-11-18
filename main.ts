// News image entry for 18 November 2026: the image is entry.png beside this
// file; the program copies it to /output/entry.png. Node 22, standard library.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputPath = join(outputDir, 'entry.png');

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(new URL('./entry.png', import.meta.url), outputPath);
  if (!existsSync(outputPath)) {
    throw new Error(`output file was not written: ${outputPath}`);
  }
} catch (error) {
  console.error(`failed to write ${outputPath}:`, error);
  process.exit(1);
}
