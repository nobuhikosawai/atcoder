import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

inputs.splice(1).forEach((input) => {
  const [N, D, K] = input.split(" ").map(Number);
  const p = Math.floor(N / D);
  let ans = ((K - 1) * D) % N;
  if (p !== 0 && K > p) {
    let delta = Math.floor(K / p);

    if (K % p === 0) {
      delta--;
    }
    ans += delta;
  }
  console.log(ans);
});
