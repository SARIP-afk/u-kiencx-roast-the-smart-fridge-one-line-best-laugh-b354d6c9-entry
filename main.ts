// Roast the Smart Fridge: One Line, Best Laugh Wins — written to /output/entry.txt.
//
// Node 22, no dependencies, deterministic, no network. The program writes one
// fixed string on every run, so the two server runs produce byte-identical
// output.
//
// The line (102 chars): the fridge's door-open beep, recast as a tiny landlord
// fining the writer for staring at their own food. It won a 10-candidate
// head-to-head against the judge brief (fastest setup, freshest image, sting
// landing on the last word, a real fridge behaviour) over the other finalists,
// the weather touchscreen ("now I know it's raining while my leftovers rot")
// and the recipe suggestions ("a chef who has never met my kitchen"). Full
// comparison:
// u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9-candidates.md.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My fridge beeps when I leave the door open, like a tiny landlord fining me for staring at my own food.";

// The sealed gate accepts UTF-8 text of 1-160 characters that is not only
// whitespace. Check the same bound here (counting code points, the way the
// gate counts characters) and refuse to write anything the gate would reject.
const length = [...LINE].length;
if (length < 1 || length > 160 || LINE.trim().length === 0) {
  throw new Error(`entry is ${length} chars, outside the 1-160 gate`);
}

// Write exactly LINE — no trailing newline, so the file holds 102 chars
// (102 code points, the way the gate counts) and nothing else.
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), LINE, "utf-8");
