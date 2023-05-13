import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const s = inputs[0].split("");
const t = inputs[0].split("");

const sset = new Set(s);
const tset = new Set(t);
