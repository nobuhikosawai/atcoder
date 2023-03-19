import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const n = Number(inputs[0]);
const ns = inputs[1].split(" ").map(Number);

const vis = Array.from({ length: n }).fill(false);

ns.forEach((n, i) => {
  if (!vis[i]) {
    vis[n - 1] = true;
  } else {
    // do nothing
  }
});

const res = vis.reduce<number[]>((acc, v, i) => {
  if (!v) {
    acc.push(i + 1);
  }
  return acc;
}, []);

console.log(res.length);
console.log(res.join(" "));
