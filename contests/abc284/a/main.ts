import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const n = Number(inputs[0]);

for (let i = inputs.length - 1; i > 0; i--) {
  console.log(inputs[i]);
}
