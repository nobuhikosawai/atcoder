// DFS solution
import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [n, m] = inputs[0].split(" ").map(Number);

const g: number[][] = Array.from({ length: n }).map((_) => []);
const v = Array.from({ length: n }).fill(false);

for (let i = 1; i < inputs.length; i++) {
  const [l, r] = inputs[i].split(" ").map((v) => Number(v) - 1);

  g[l].push(r);
  g[r].push(l);
}

let ans = 0;

const dfs = (node: number): void => {
  if (v[node]) {
    return;
  }

  v[node] = true;

  for (const n of g[node]) {
    dfs(n);
  }
};

for (let i = 0; i < n; i++) {
  if (!v[i]) {
    ans++;
  }
  dfs(i);
}

console.log(ans);
