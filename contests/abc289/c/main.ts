import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const [N, m] = inputs[0].split(" ").map(Number);

const ss: number[][] = Array.from<number[]>({ length: m }).map(() => []);

for (let i = 1; i < inputs.length; i += 2) {
  ss[(i + 1) / 2 - 1] = inputs[i + 1].split(" ").map(Number);
}

let ans = 0;
const dfs = (n: number, nums: number[], isOk: boolean) => {
  // console.log(n, nums);

  let ok = isOk;
  let newNums: number[] = nums;

  if (isOk) {
    ans += 1;
  } else {
    newNums = nums.concat(...ss[n]);

    const set = new Set(newNums);
    // console.log(set);
    ok = set.size === N;
    if (ok) {
      ans += 1;
    }
  }

  for (let i = 1; n + i < ss.length; i++) {
    dfs(n + i, newNums, ok);
  }
};

for (let i = 0; i < m; i++) {
  dfs(i, [], false);
}

console.log(ans);
