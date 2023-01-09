import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const tests = inputs.splice(1);

for (let i = 0; i < tests.length; i += 2) {
  const nums = tests[i + 1];
  const res = nums.split(" ").reduce((acc, val) => {
    if (Number(val) % 2 === 1) {
      acc += 1;
    }
    return acc;
  }, 0);
  console.log(res);
}
