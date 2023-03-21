import * as fs from "fs";

class UnionFind {
  public par: number[]; // list of parent nodes
  public rank: number[]; // list of tree hight
  public siz: number[]; // num of nodes

  constructor(n: number) {
    this.par = Array.from<number>({ length: n }).fill(-1);
    this.rank = Array.from<number>({ length: n }).fill(0);
    this.siz = Array.from<number>({ length: n }).fill(1);
  }

  root(x: number) {
    if (this.par[x] === -1) {
      return x;
    } else {
      this.par[x] = this.root(this.par[x]); // flatten the tree
      return this.par[x];
    }
  }

  isSame(x: number, y: number) {
    return this.root(x) === this.root(y);
  }

  unite(x: number, y: number) {
    let rx = this.root(x);
    let ry = this.root(y);

    if (rx === ry) return;

    // merge into bigger rank(which is rx)
    if (this.rank[rx] < this.rank[ry]) {
      [ry, rx] = [rx, ry]; //make ry smaller
    }
    this.par[ry] = rx;

    // adjust rank
    if (this.rank[rx] === this.rank[ry]) {
      this.rank[rx]++;
    }

    // adjust size
    this.siz[rx] += this.siz[ry];
  }

  size(x: number) {
    return this.siz[this.root(x)];
  }
}

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [n, m] = inputs[0].split(" ").map(Number);

type Graph = number[][];

let g: Graph = Array.from<number[]>({ length: n }).map(() => []);
let vis: boolean[] = Array.from<boolean>({ length: n }).fill(false);

for (let i = 1; i < inputs.length; i++) {
  let [u, v] = inputs[i].split(" ").map(Number);
  u--;
  v--;

  g[u].push(v);
  g[v].push(u);
}

const isPathGraph = (g: Graph) => {
  let edge = 0;
  const uf = new UnionFind(n);
  for (let i = 0; i < n; i++) {
    const node = g[i];
    if (node.length === 0 || node.length > 2) {
      return false;
    }
    if (node.length === 1) {
      edge++;
    }
    node.forEach((v) => {
      uf.unite(i, v)
    })
  }

  if (edge !== 2) {
    return false;
  }

  if (uf.size(0) !== n) {
    return false;
  }

  return true;
};

const main = () => {
  if (isPathGraph(g)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

main();
