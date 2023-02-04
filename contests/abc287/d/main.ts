import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const s = inputs[0];
const t = inputs[1];

for (let i = 0; i <= t.length; i++) {
  const s1 = i === 0 ? "" : s.slice(0, i);
  const s2 = s.slice(s.length - (t.length - i));

  const sdash = s1 + s2;

  const ans = Array.from({ length: t.length }).fill(false);

  for (let j = 0; j < sdash.length; j++) {
    const sc = sdash[j];
    const tc = t[j];

    if (sc === tc || sc === "?" || tc === "?") {
      ans[j] = true;
    } else {
      ans[j] = false;
    }
  }

  console.log(ans.every((v) => v) ? "Yes" : "No");
}
