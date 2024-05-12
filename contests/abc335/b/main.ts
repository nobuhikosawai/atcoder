import * as fs from "fs";

const input = Number(fs.readFileSync("/dev/stdin", "utf-8").trim());

const sum = (arr: number[]) => {
  return arr.reduce((a, b) => a + b, 0);
};

for (let i = 0; i <= input; i++) {
  for (let j = 0; j <= input; j++) {
    for (let k = 0; k <= input; k++) {
      if (sum([i, j, k]) <= input) {
        console.log(`${i} ${j} ${k}`);
      }
    }
  }
}
