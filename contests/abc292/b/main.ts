import * as fs from "fs";

const s = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const parseNumber = (str: string, delimeter: string = " ") => {
  return str.split(delimeter).map(Number);
};

const [n, _] = parseNumber(s[0]);

const players: number[] = Array.from<number>({ length: n }).fill(0);

for (let i = 1; i < s.length; i++) {
  let [k, p] = parseNumber(s[i]);
  p--;

  if (k === 3) {
    console.log(players[p] >= 2 ? "Yes" : "No");
  } else {
    players[p] += k;
  }
}
