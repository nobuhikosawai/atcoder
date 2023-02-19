import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [, k] = inputs[0].split(" ").map(Number);

const orders = inputs[1].split("");

let passed = 0;
const ans = orders.map((order) => {
  if (order === "o" && passed < k) {
    passed++;
    return "o";
  } else {
    return "x";
  }
});

console.log(ans.join(""));
