import * as fs from "fs";

const s = fs.readFileSync("/dev/stdin", "utf-8").trim();

console.log(s.split('').map(v => v.toUpperCase()).join(''))
