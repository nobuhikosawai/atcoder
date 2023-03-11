import * as fs from "fs";

const s = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const parseNumber = (str: string, delimeter: string = " ") => {
  return str.split(delimeter).map(Number);
};

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

const [n, m] = parseNumber(s[0]);

const vals: number[][] = Array.from<number[]>({ length: n }).map(() => []);

for (let i = 1; i < s.length; i++) {
  let [l, r] = parseNumber(s[i]);
  l--;
  r--;

  if (l === r) {
    vals[l].push(r);
  } else {
    vals[l].push(r);
    vals[r].push(l);
  }
}

console.log(vals);

function dfs(n: number, params: any) {
  params.vis.add(n);
  if (params.vis.has(n)) {
    params.count++;
    return;
  }

  vals[n].forEach((v) => {
    dfs(v, params);
  });
}

let ok = true;

// for (const vs of vals) {
for (let i = 0; i < vals.length; i++) {
  const vs = vals[i]
  const vis = new Set<number>([i]);
  let count = 0;
  const params = {
    vis,
    count,
  };
  vs.forEach((v) => {
    dfs(v, params);
  });

  if (params.count !== params.vis.size) {
    ok = false;
    break;
  }
}

console.log(ok ? "Yes" : "No");
