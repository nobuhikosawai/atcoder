import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [n, k, x] = inputs[0].split(" ").map(Number);
const arr = inputs[1].split(" ").map(Number);
arr.splice(k, 0, x);
console.log(arr.join(" "));
