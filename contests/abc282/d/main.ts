import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const [n, m] = inputs[0].split(" ").map(Number);

const graph: number[][] = Array.from({ length: n }).map(() => []);
inputs.splice(1).forEach((input) => {
  const [l, r] = input.split(" ").map((s) => Number(s) - 1);
  graph[l].push(r);
  graph[r].push(l);
});

const c2 = (n: number) => {
  return (n * (n - 1)) / 2;
};

let ans = c2(n) - m;
const cvs: [number, number] = [0, 0];

const dfs = (idx: number, nc: number = 0): boolean => {
  if (c[idx] !== -1) {
    return c[idx] === nc;
  }

  c[idx] = nc;
  cvs[nc]++;

  for (const v of graph[idx]) {
    if (!dfs(v, 1 - nc)) {
      return false;
    }
  }
  return true;
};

const c: number[] = Array.from<number>({ length: n }).fill(-1);

for (let i = 0; i < n; i++) {
  if (c[i] === -1) {
    if (!dfs(i)) {
      ans = 0;
      break;
    }

    cvs.forEach((s) => {
      ans -= c2(s);
    });
  }
}

console.log(ans);
