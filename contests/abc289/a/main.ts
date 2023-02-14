import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim();

console.log(
  inputs
    .split("")
    .map((v) => {
      if (v === "0") {
        return "1";
      } else {
        return "0";
      }
    })
    .join("")
);
