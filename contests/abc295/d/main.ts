import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim();

const x: number[][] = Array.from({ length: inputs.length + 1 }).map(() =>
  Array.from<number>({ length: 10 }).fill(0)
);

inputs.split("").forEach((c, i) => {
  const num = Number(c);
  x[i + 1] = [...x[i]];
  x[i + 1][num] ^= 1;
});

const m = new Map<string, number>();

x.forEach((row) => {
  const key = row.join("");
  m.set(key, (m.get(key) || 0) + 1);
});

let ans = 0;
for (const p of m.values()) {
  ans += (p * (p - 1)) / 2;
}

console.log(ans);
