import { mkdirSync, writeFileSync } from "node:fs";

// Writes the entrant's own make.fun username, one word, nothing else.
// Deterministic: the same fixed text on every run, no input, no randomness,
// no network, no external tools. No trailing newline: the file holds exactly
// the 14 characters of the username, well inside the 1-30 character gate.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "calm-meteor-20", { encoding: "utf8", flag: "w" });
