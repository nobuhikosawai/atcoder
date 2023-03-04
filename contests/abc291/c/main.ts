import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const n = Number(inputs[0]);
const vals = inputs[1].split("");

let coord = [0, 0];

const vis = new Set<string>();
vis.add(coord.toString())

let ok = false;
for (const v of vals) {
  switch (v) {
    case "R":
      coord[0]++;
      break;
    case "L":
      coord[0]--;
      break;
    case "U":
      coord[1]++;
      break;
    case "D":
      coord[1]--;
      break;
    default:
      throw new Error("unknown" + v);
  }

  if (vis.has(coord.toString())) {
    ok = true;
    break;
  }

  vis.add(coord.toString());
}

console.log(ok ? "Yes" : "No");
