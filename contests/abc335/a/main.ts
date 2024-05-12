import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf-8").trim();

console.log(input.replace(/2023$/, "2024"));
