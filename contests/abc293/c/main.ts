import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

let [h, w] = inputs[0].split(" ").map(Number);
h--;
w--;

const g: number[][] = [];

for (let i = 1; i < inputs.length; i++) {
  g.push(inputs[i].split(" ").map(Number));
}

console.log(g);

let ans = 0;

const dfs = (i: number, j: number, vis: Set<number>) => {
  console.log(i, j);

  const num = g[i][j];
  if (vis.has(num)) {
    return;
  }

  vis.add(num);

  if (i === h && j === w) {
    ans++;
    return;
  }

  if(i + 1 < h) {

  dfs(i + 1, j, vis);
  }
  if (j + 1 < w) {

  dfs(i, j + 1, vis);
  }
};

const vis = new Set<number>();
dfs(0, 0, vis);
console.log(ans);
