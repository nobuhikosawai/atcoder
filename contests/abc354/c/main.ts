import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const n = Number(inputs.shift());

const cards = inputs.map((v, i) => {
  const [a, c] = v.split(" ");
  return {
    index: i + 1,
    a: Number(a),
    c: Number(c),
  };
});

cards.sort((a, b) => {
  return b.a - a.a;
});

let i = 0;
let j = 1;
let res = new Set<number>();

while (j < cards.length) {
  const now = cards[i];
  const next = cards[j];

  if (now.c > next.c) {
    res.add(now.index);
    res.add(next.index);
    i = j;
    j++;
  } else {
    j++;
  }
}

if (res.size === 0) {
  res.add(cards[0].index);
}

console.log(
  res.size +
    "\n" +
    Array.from(res.values())
      .sort((a, b) => a - b)
      .join(" ")
);
