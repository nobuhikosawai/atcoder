import * as fs from "fs";

const s = fs.readFileSync("/dev/stdin", "utf-8").trim();

const numDigits = BigInt(s.length);

const ans: bigint = s.split("").reduce((acc, char, i) => {
  const val = BigInt(char.charCodeAt(0) - 64);

  acc += 26n ** (numDigits - 1n - BigInt(i)) * val;
  return acc;
}, 0n);

console.log(ans.toString());
