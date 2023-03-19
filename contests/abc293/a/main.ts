import * as fs from "fs";

const s = fs.readFileSync("/dev/stdin", "utf-8").trim().split("");

let res = "";
for (let i = 0; i < s.length; i += 2) {
  res += s[i + 1] + s[i];
}

console.log(res);
