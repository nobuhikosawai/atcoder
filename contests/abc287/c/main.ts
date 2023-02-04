import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [n, m] = inputs[0].split(" ").map(Number);

let numPath = [0, 0]; // 1, 2

const main = () => {
  let g: number[][] = Array.from<number[]>({ length: n }).map(() => []);
  let vis: boolean[] = Array.from<boolean>({ length: n }).fill(false);

  for (let i = 1; i < inputs.length; i++) {
    let [u, v] = inputs[i].split(" ").map(Number);
    u--;
    v--;

    g[u].push(v);
    g[v].push(u);
  }

  const dfs = (i: number): void => {
    if (vis[i]) {
      return;
    }

    vis[i] = true;

    if (g[i].length === 1) {
      numPath[0]++;
    } else if (g[i].length === 2) {
      numPath[1]++;
    } else {
      throw new Error("not path graph");
    }

    for (const n of g[i]) {
      dfs(n);
    }
  };

  for (let i = 0; i < n; i++) {
    try {
      dfs(i);
    } catch (e) {
      console.log("No");
      return;
    }
  }

  if (
    numPath[0] !== 2 ||
    numPath[0] + numPath[1] !== n ||
    !vis.every((v) => v)
  ) {
    console.log("No");
    return;
  }

  console.log("Yes");
};

main();
