import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const n = Number(inputs[0]);
const vals = inputs[1].split(" ").map(Number);
vals.sort((a, b) => a - b);

const arr = vals.splice(n, vals.length - 2 * n);

let res = arr.reduce((acc, val) => {
  acc += val;
  return acc;
}, 0);

res = res / arr.length;

console.log(res);
