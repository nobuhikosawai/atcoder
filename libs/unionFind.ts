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
