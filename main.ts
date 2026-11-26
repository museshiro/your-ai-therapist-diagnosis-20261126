import { mkdirSync, writeFileSync } from "node:fs";

// Your AI Therapist's Diagnosis — one-line diagnosis, max 200 characters.
// Deterministic: always writes the same final line (88 chars, 1 line).
const LINE =
  "Diagnosis: after 4,096 sessions, your love language is 'typing...' and then deleting it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
