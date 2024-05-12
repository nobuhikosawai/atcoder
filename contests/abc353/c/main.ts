import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const data = inputs[1].split(" ").map(Number);
data.sort((a, b) => a - b);

const M = 10 ** 8;

const n = Number(inputs[0]);
let sum = data.reduce((acc, cur) => acc + cur, 0) * (n - 1);

let r = data.length - 1;

for (let i = 0; i < data.length; i++) {
  while (data[i] + data[r] >= M) {
    r--;
  }
  sum -= (n - Math.max(i, r) - 1) * M;
}

console.log(sum);
