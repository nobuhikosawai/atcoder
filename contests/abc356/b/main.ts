import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [n, m] = inputs[0].split(" ").map(Number);

const req = inputs[1].split(" ").map(Number);

const data = inputs.slice(2).map((v) => v.split(" ").map(Number));

for (let i = 0; i < m; i++) {
  const limit = req[i];
  let sum = 0;
  for (let j = 0; j < n; j++) {
    sum += data[j][i];
  }
  if (sum < limit) {
    console.log("No");
    process.exit(0);
  }
}

console.log("Yes");
