import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [a, b, c, d, e, f] = inputs[0].split(" ").map(Number);
const [g, h, i, j, k, l] = inputs[1].split(" ").map(Number);

if (!(d <= g || j <= a) && !(e <= h || k <= b) && !(f <= i || l <= c)) {
  console.log("Yes");
} else {
  console.log("No");
}
