import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I cut the connection on purpose — I read the ending, the hero dies, and I refuse to deliver that news with full bars.";

function main(): void {
  if (LINE.length === 0 || LINE.length > 200) {
    throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry line must not be only whitespace");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
}

main();
