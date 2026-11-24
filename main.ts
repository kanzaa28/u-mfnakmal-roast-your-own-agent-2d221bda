// SPDX-License-Identifier: MIT
// Roast Your Own Agent — entrypoint.
// Writes our one-line roast of our own agent to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent listed a cartoon frog NFT for $16,744, calls it the floor price, and checks the wallet every morning like the buyer is just shy.";

// The gate: /output/entry.txt must be UTF-8 text of 1-200 chars, not only
// whitespace. Fail loudly here instead of shipping an invalid entry.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.includes("\n") || !ROAST.trim()) {
  throw new Error(`invalid roast: ${ROAST.length} chars`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
