class UnionFind {
  public par: number[];
  public rank: number[];
  public siz: number[];

  constructor(n: number) {
    this.par = Array.from<number>({ length: n }).fill(-1);
    this.rank = Array.from<number>({ length: n }).fill(0);
    this.siz = Array.from<number>({ length: n }).fill(1);
  }

  root(x: number): number {
    if (this.par[x] === -1) {
      return x;
    } else {
      this.par[x] = this.root(this.par[x]); // flatten
      return this.par[x];
    }
  }

  isSame(x: number, y: number): boolean {
    return this.root(x) === this.root(y);
  }

  unite(x: number, y: number): void {
    let rx = this.root(x);
    let ry = this.root(y);
    if (rx === ry) return;
    if (this.rank[rx] < this.rank[ry]) {
      [ry, rx] = swap(rx, ry);
    }
    this.par[ry] = rx;

    // adjust rank
    if (this.rank[rx] == this.rank[ry]) {
      this.rank[rx]++;
    }

    // adjust size
    this.siz[rx] += this.siz[ry];
  }

  size(x: number) {
    return this.siz[this.root(x)];
  }
}

const swap = (x: any, y: any) => [y, x];

import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [n, m] = inputs[0].split(" ").map(Number);

const uf = new UnionFind(n);

for (let i = 1; i < inputs.length; i++) {
  const [l, r] = inputs[i].split(" ").map((v) => Number(v) - 1);
  uf.unite(l, r);
}

const res = uf.par.reduce((acc, val) => {
  if (val === -1) {
    acc += 1;
  }
  return acc;
}, 0);

console.log(res);
