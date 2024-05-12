import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const [n, k] = inputs[0].split(" ").map(Number);
const data = inputs[1].split(" ").map(Number);

let gap = 1;
let sum = 0;
let i = 0;

while (data.length > k % 2) {
  const d0 = data[i];
  const d1 = data[i + 1];

  if (d1 - d0 === gap) {
    sum += d1 - d0;
    data.splice(i, 2);
  } else {
    i++;
  }

  if (i === data.length - 1) {
    i = 0;
    gap++;
  }
}

console.log(sum);
