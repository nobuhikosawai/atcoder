import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [, k] = inputs[0].split(" ").map(Number);
const a = inputs[1].split(" ").map(Number);

const s: number[][] = Array.from({ length: k }, () =>
  Array(a.length + 1).fill(0)
); // array of cumulative sum

a.forEach((_, i) => {
  s[i % k][i + 1] = a[i];
});

s.forEach((v) => {
  v.forEach((_, i) => {
    v[i + 1] += v[i];
  });
});

for (let qi = 3; qi < inputs.length; qi++) {
  let [l, r] = inputs[qi].split(" ").map(Number);
  l--;

  const ns: number[] = [];
  s.forEach((v, i) => {
    ns[i] = v[r] - v[l];
  });
  // check if ns is the same
  ns.sort((a, b) => a - b);

  if (ns[0] === ns[ns.length - 1]) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
