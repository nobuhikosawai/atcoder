import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim();
const chars = inputs.split("");

const bl = [];
let numR = 0;
let kok = false;

for (let i = 0; i < chars.length; i++) {
  if (chars[i] === "B") {
    bl.push(i);
  } else if (chars[i] === "R") {
    numR++;
  } else if (chars[i] === "K") {
    if (numR === 1) {
      kok = true;
    }
  }
}

console.log(kok && bl[0] % 2 !== bl[1] % 2 ? "Yes" : "No");
