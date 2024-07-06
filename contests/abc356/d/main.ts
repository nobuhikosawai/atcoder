import * as fs from "fs";

const [n, m] = fs
  .readFileSync("/dev/stdin", "utf-8")
  .trim()
  .split(" ")
  .map(Number);

const popCount = (x: number): number => {
  const a = x - ((x >>> 1) & 0x55555555);
  const b = (a & 0x33333333) + ((a >>> 2) & 0x33333333);
  const c = (b + (b >>> 4)) & 0x0f0f0f0f;
  const y = (c * 0x01010101) >>> 24;
  return y;
};

let sum = 0;
for (let i = 0; i <= n; i++) {
  sum += popCount(i & m);
}

console.log(sum % 998244353);
