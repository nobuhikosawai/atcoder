import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const points = inputs[1].split(" ").map(Number);
const solved = inputs[2].split(" ").map(Number);

let ans = 0;
solved.forEach((s) => {
  ans += points[s - 1];
});

console.log(ans);
