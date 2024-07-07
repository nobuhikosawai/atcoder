import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [_, k] = inputs[0].split(" ").map(Number);
const arr = inputs[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const gap = arr.length - k - 1;

let min = Infinity;
for (let i = 0; i < arr.length - gap; i++) {
  const diff = arr[i + gap] - arr[i];
  if (min > diff) {
    min = diff;
  }
}

console.log(min);
