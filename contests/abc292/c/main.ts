import * as fs from "fs";

const s = fs.readFileSync("/dev/stdin", "utf-8").trim();
const n = Number(s);

const cache: Record<number, number> = {};

const numOfCombination = (n: number) => {
  if (cache[n]) {
    return cache[n];
  }

  let i = 1;
  let ans = 0;
  while (i <= n) {
    if (n % i === 0) {
      ans++;
    }
    i++;
  }
  cache[n] = ans;
  return ans;
};

let ans = 0;
for (let i = 1; i < n; i++) {
  const left = i;
  const right = n - i;

  ans += numOfCombination(left) * numOfCombination(right);
}

console.log(ans);
