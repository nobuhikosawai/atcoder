import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim();

const x: number[] = Array.from<number>({ length: inputs.length + 1 }).fill(0);

inputs.split("").forEach((c, i) => {
  const num = Number(c);
  x[i + 1] = x[i] ^ (1 << num);
});

const m = new Map<number, number>();

x.forEach((row) => {
  m.set(row, (m.get(row) || 0) + 1);
});

let ans = 0;
for (const p of m.values()) {
  ans += (p * (p - 1)) / 2;
}

console.log(ans);
