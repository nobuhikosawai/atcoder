import * as fs from "fs";

const s = fs.readFileSync("/dev/stdin", "utf-8").trim();

const idx = s.split("").findIndex((char) => {
  return char.charCodeAt() < 97;
});

console.log(idx + 1);
