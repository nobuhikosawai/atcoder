import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const vals = inputs[1].split(" ").map(Number);

const res = [];

for (let i = 0; i < vals.length; i++) {
  const now = vals[i];
  const next = vals[i + 1];

  if (next === undefined) {
    res.push(now);
    break;
  }

  if (Math.abs(now - next) === 1) {
    res.push(now);
    continue;
  }

  if (now > next) {
    for (let j = now; j > next; j--) {
      res.push(j);
    }
  } else {
    for (let j = now; j < next; j++) {
      res.push(j);
    }
  }
}

console.log(res.join(" "));
