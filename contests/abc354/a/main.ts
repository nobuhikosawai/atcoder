import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim();

const data = Number(inputs);

let base = 1;
let count = 1;

while (base <= data) {
  base += 2 ** count;
  count++;
}

console.log(count);
