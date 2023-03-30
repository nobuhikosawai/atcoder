import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const s = inputs[0].split("");
const t = inputs[1].split("");

const ans = Array.from({ length: t.length + 1 }).fill(true);

for (let i = 0; i < 2; i++) {
  let ok = true;
  for (let i = 0; i < t.length; i++) {
    if (s[i] !== t[i] && s[i] !== "?" && t[i] !== "?") {
      ok = false; // once ok is false then never return to be true
    }
    if (!ok) ans[i + 1] = ok;
  }

  s.reverse();
  t.reverse();
  ans.reverse();
}

ans.forEach((v) => {
  console.log(v ? "Yes" : "No");
});
