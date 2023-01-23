import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const n = Number(inputs[0]);
const s = inputs[1];

for (let i = 1; i <= n - 1; i++) {
  if (s[0] === s[i]) {
    console.log(0);
    continue;
  }

  let l = 1;
  while (l + i < n) {
    if (s[l] === s[l + i]) {
      break;
    }
    l++;
  }
  console.log(l);
}
