import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [, k] = inputs[0].split(" ").map(Number);
const vals = inputs[1].split(" ").map(Number);

const s = new Set(vals);

let ans: null | number = null;
for (let i = 0; i < k; i++) {
  if (!s.has(i)) {
    ans = i;
    break;
  }
}

console.log(ans === null ? k : ans);
