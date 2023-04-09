import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const a = (inputs: string[]) => {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i] === "T" && inputs[i + 1] === "T") {
      inputs[i] = "P";
      inputs[i + 1] = "C";
    }
  }

  return inputs.join("");
};

inputs.splice(1).forEach((input) => {
  const chars = input.split("");
  console.log(a(chars));
});
