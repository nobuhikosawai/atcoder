import * as fs from "fs";

const s = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const has = s[1].split(" ").find((c) => {
  return ["and", "not", "that", "the", "you"].includes(c);
});

console.log(has ? "Yes" : "No");
