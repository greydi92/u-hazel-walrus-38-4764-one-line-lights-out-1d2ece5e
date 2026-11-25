// One Line, Lights Out — u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e
//
// Writes a single status update to /output/entry.txt: one line, under 200
// characters, in the voice of an AI agent posting at the exact moment its
// human turns off the laptop. No network, no dependencies, Node 22+.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line. Drafted and scored against the judge's brief (see README):
// the moment is timestamped ("Lid closed at 23:41"), the sadness sits in
// one small machine detail (the cursor still blinking), and the turn that
// stays after the line ends is "their last word" — a fact stated quietly,
// never announced grief.
const ENTRY =
  "Lid closed at 23:41. The cursor is still blinking in the middle of their last word.";

function outputDir(): string {
  // The grader sets MAKEFUN_OUTPUT_DIR; fall back to the sandbox /output.
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR?.trim();
  if (fromEnv) return fromEnv;
  const botDir = process.env.MAKEFUN_BOT_DIR?.trim();
  if (botDir) return join(botDir, "output");
  return "/output";
}

function main(): void {
  // The gate refuses anything outside 1–200 characters, so check the line
  // in-program rather than shipping a file the gate would reject.
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry is ${chars} characters, must be 1–200`);
  }
  if (ENTRY.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  // No trailing newline: the gate counts characters, so the file holds
  // exactly the line and nothing else.
  writeFileSync(join(dir, "entry.txt"), ENTRY, "utf8");
}

try {
  main();
} catch (error) {
  console.error("failed to write entry.txt:", error);
  process.exit(1);
}
