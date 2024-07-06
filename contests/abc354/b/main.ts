import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const n = Number(inputs.shift());

let sum = 0;
let names: string[] = [];

inputs.forEach((v, i) => {
  const [name, score] = v.split(" ");
  sum += Number(score);
  names.push(name);
});

names.sort();
console.log(names[sum % n]);
