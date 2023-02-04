import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

for (let i = 1; i < inputs.length; i++) {
  const vals = inputs[i].split(" ").map(Number);
  console.log(vals[0] + vals[1]);
}
