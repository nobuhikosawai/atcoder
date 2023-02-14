import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const [n, m] = inputs[0].split(" ").map(Number);

const ps: number[] = Array.from<number>({ length: n }).fill(-1);

if (m === 0) {
  console.log(ps.map((_, i) => i + 1).join(" "));
} else {
  const as = inputs[1].split(" ").map((n) => Number(n) - 1);

  as.forEach((a) => {
    ps[a + 1] = a;
  });

  const read = (node: number): number[] => {
    if (ps[node] === -1) {
      return [node + 1];
    }

    const parents = read(ps[node]);

    return [node + 1, ...parents];
  };

  const ans: number[] = [];
  for (let i = 0; i < ps.length; i++) {
    if (ps[i + 1] === -1 || i === ps.length - 1) {
      ans.push(...read(i));
    }
  }

  console.log(ans.join(" "));
}
