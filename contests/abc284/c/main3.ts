// BFS solution
import assert from "assert";
import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [n, _m] = inputs[0].split(" ").map(Number);

const g: number[][] = Array.from({ length: n }).map((_) => []);
const v = Array.from({ length: n }).fill(false);

for (let i = 1; i < inputs.length; i++) {
  const [l, r] = inputs[i].split(" ").map((v) => Number(v) - 1);

  g[l].push(r);
  g[r].push(l);
}

let ans = 0;

const bfs = (i: number) => {
  v[i] = true;
  const queue = g[i];

  while (queue.length > 0) {
    const n = queue.shift();
    assert(n !== undefined);

    if (v[n]) continue;

    v[n] = true;
    queue.push(...g[n]);
  }
};

for (let i = 0; i < n; i++) {
  if (!v[i]) {
    ans++;
  }
  bfs(i);
}

console.log(ans);
