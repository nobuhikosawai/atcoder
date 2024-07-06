import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim();

const [n, l, r] = inputs.split(" ").map(Number);

let left = [];
let rev = [];
let right = [];

for (let i = r; i >= l; i--) {
  rev.push(i);
}

for (let i = 1; i < l; i++) {
  left.push(i);
}

for (let i = r + 1; i <= n; i++) {
  right.push(i);
}

console.log(...[...left, ...rev, ...right]);
