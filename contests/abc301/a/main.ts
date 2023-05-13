import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const results = inputs[1].split("");

const aoki = results.reduce((ac, cur) => {
  if (cur === "A") {
    ac++;
  }

  return ac;
}, 0);

const takahashi = results.reduce((ac, cur) => {
  if (cur === "T") {
    ac++;
  }

  return ac;
}, 0);

if (aoki === takahashi) {
  results[results.length - 1] === "A" ? console.log("T") : console.log("A");
} else {
  console.log(aoki > takahashi ? "A" : "T");
}
