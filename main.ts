// Seventeen Syllables of Debugging entry: writes one 5-7-5 haiku about
// debugging to entry.txt in the output directory.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const HAIKU = ['A missing bracket', 'hiding in four thousand lines —', 'the compiler knew'].join('\n');

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), HAIKU);
