import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim();

let [a, b] = inputs
  .split(" ")
  .map(BigInt)
  .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

let ans = 0n;
let m = 0n;

while (true) {
  m = b % a;
  ans += b / a;

  if (m === 0n) {
    break;
  }

  b = a;
  a = m;
}

console.log((ans - 1n).toString());
