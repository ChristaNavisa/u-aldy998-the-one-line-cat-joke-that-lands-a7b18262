import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// The joke is a three-beat escalation: the cat has a will (absurd),
// the owner is cut out (insult), and the sole heir has been dead for
// three years (dark twist landing on the last words).
const entry =
  "My cat wrote a will. I'm not in it. The dog is \u2014 and the dog's been dead for three years.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
