import * as fs from "fs";

const [a, b] = fs
  .readFileSync("/dev/stdin", "utf-8")
  .trim()
  .split(" ")
  .map(Number);

const tree: { [key: number]: [number, number] } = {
  1: [2, 3],
  2: [4, 5],
  3: [6, 7],
  4: [8, 9],
  5: [10, 11],
  6: [12, 13],
  7: [14, 15],
};

console.log(tree[a] && tree[a].includes(b) ? "Yes" : "No");
