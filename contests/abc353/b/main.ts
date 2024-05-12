import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const cap = inputs[0].split(" ").map(Number)[1];
const data = inputs[1].split(" ").map(Number);

let res = 0;
let space = cap;

data.forEach((d, i) => {
  if (space >= d) {
    space -= d;
  } else {
    res++;
    space = cap - d;
  }
});

console.log(res + 1);
