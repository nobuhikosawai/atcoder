import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const vals = inputs[1].split(" ").map(Number);

const m = new Map<number, number>();

let res = 0;
vals.forEach((v) => {
  let newVal;
  if (m.get(v)) {
    newVal = m.get(v)! + 1;
    if (newVal >= 2) {
      newVal -= 2;
      res++;
    }
  } else {
    newVal = 1;
  }

  m.set(v, newVal);
});

console.log(res);
