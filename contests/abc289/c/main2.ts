import * as fs from "fs";

function main(inputs: string[]) {
  const [n, m] = inputs[0].split(" ").map(Number);

  // 各集合をbitで管理する
  const s: number[] = Array(m).fill(0);

  for (let i = 0; i < m; i++) {
    let a = inputs[i * 2 + 2].split(" ").map((v) => Number(v - 1));
    a.forEach((v) => {
      s[i] |= 1 << v;
    });
  }

  // 集合の組み合わせをbitで判定する
  let ans = 0;
  for (let i = 0; i < 1 << m; i++) {
    let t = 0;
    for (let j = 0; j < m; j++) {
      if ((i >> j) & 1) {
        t |= s[j];
      }
    }

    if (t === (1 << n) - 1) {
      ans++;
    }
  }
  return ans;
}

console.log(main(fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n")));
