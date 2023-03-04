import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const n = Number(inputs[0]);
const cards = inputs.splice(1);

let prev: Record<number, number>[] = [];

let ans = 2 ** n;

for (let i = 0; i < cards.length - 1; i++) {
  let next = [];
  const f = cards[i].split(" ").map(Number);
  const s = cards[i + 1].split(" ").map(Number);

  if (f[0] === s[0]) {
    ans -= 2 ** (n - 2);

    const count = prev.filter((p) => p[i] === 0).length;
    ans += count * 2 ** (n - 3);

    next.push({ i: 0, [i + 1]: 0 });
  } else if (f[0] === s[1]) {
    ans -= 2 ** (n - 2);

    const count = prev.filter((p) => p[i] === 0).length;
    ans += count * 2 ** (n - 3);

    next.push({ i: 0, [i + 1]: 1 });
  } else if (f[1] === s[0]) {
    ans -= 2 ** (n - 2);
    const count = prev.filter((p) => p[i] === 1).length;
    ans += count * 2 ** (n - 3);
    next.push({ i: 1, [i + 1]: 0 });
  } else if (f[1] === s[1]) {
    ans -= 2 ** (n - 2);
    const count = prev.filter((p) => p[i] === 1).length;
    ans += count * 2 ** (n - 3);
    next.push({ i: 1, [i + 1]: 1 });
  }

  prev = next;
}

console.log(ans)
