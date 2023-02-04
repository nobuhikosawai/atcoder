import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const splitNumber = (str: string): number[] => {
  return str.split(" ").map(Number);
};

let [n, _m] = splitNumber(inputs[0]);

const arrA = splitNumber(inputs[1]);
const arrC = splitNumber(inputs[2]);
const arrX = splitNumber(inputs[3]);

const prices: number[] = Array.from<number>({ length: n }).fill(0);
const costs: number[] = Array.from<number>({ length: n }).fill(0);
const items: number[][] = Array.from<number>({ length: n }).map(() => []);

for (let i = 0; i < n; i++) {
  if (i === 0) {
    prices[0] = arrA[i] + arrC[i];
    costs[0] = arrC[i];
    items[0] = [i];
  }

  const p1 = prices[i - 1] + arrA[i] + costs[i - 1];
  const p2 = arrA[i] + arrC[i];

  if (p1 < p2) {
    prices[i] = p1;
    costs[i] = costs[i - 1];
    items[i] = [...items[i - 1], i];
  } else {
    prices[i] = p2;
    costs[i] = arrC[i];
    items[i] = [i];
  }
}

let ans = 0;
const bought = new Set<number>();

for (let i = arrX.length - 1; i > -1; i--) {
  let x = arrX[i];
  x--;

  if (!bought.has(x)) {
    ans += prices[x];
  }

  items[x].forEach((v) => {
    bought.add(v);
  });
}

console.log(ans);
