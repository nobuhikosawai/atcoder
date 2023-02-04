import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

let f = 0;
let ag = 0;

for (let i = 1; i < inputs.length; i++) {
  const str = inputs[i];
  if (str === "For") {
    f++;
  } else if (str === "Against") {
    ag++;
  }
}

console.log(f > ag ? "Yes" : "No");
