import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [n, m] = inputs[0].split(" ").map(Number);

let s = new Set();

for (let i = n + 1; i < inputs.length; i++) {
  const val = inputs[i];
  s.add(val);
}

let ans = 0;
for (let i = 1; i <= n; i++) {
  const val = inputs[i];
  const str = val.slice(val.length - 3);
  if (s.has(str)) {
    ans++;
  }
}

console.log(ans);
