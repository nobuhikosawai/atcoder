import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const nodes: { [key: string]: string } = {};
const vis: { [key: string]: boolean } = {};

for (let i = 1; i < inputs.length; i++) {
  const [l, r] = inputs[i].split(" ");

  nodes[l] = r;
  vis[l] = false;
}

const dfs = (node: string | undefined): boolean => {
  if (!node) {
    return true;
  }

  if (vis[node]) {
    return false;
  }

  vis[node] = true;
  return dfs(nodes[node]);
};

let cannot = false;
for (const key of Object.keys(nodes)) {
  if (!dfs(key)) {
    cannot = true;
    break;
  }
}

console.log(cannot ? "No" : "Yes");
