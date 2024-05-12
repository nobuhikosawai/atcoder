import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split(" ");

if (Number(inputs[0]) > Number(inputs[1])) {
  console.log("Bat");
} else {
  console.log("Glove");
}
