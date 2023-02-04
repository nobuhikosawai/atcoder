import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [_, k] = inputs[0].split(" ").map(Number);

const vals = inputs.slice(1, 1 + k);

vals.sort();

vals.forEach((v) => console.log(v));
