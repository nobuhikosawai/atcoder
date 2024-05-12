import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const data = inputs[1].split(" ").map(Number);

const base = data[0];

data.forEach((v, i) => {
  if (v > base) {
    console.log(i + 1);
    process.exit(0);
  }
});

console.log(-1);
