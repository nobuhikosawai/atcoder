import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf-8").split(" ");

const a = BigInt(input[0]);
const b = BigInt(input[1]);
const c = BigInt(input[2]);
const d = BigInt(input[3]);
const e = BigInt(input[4]);
const f = BigInt(input[5]);

function getRes(num: bigint) {
  return num % BigInt(998244353);
}

const resA = getRes(a);
const resB = getRes(b);
const resC = getRes(c);
const resD = getRes(d);
const resE = getRes(e);
const resF = getRes(f);

const res = getRes(resA * resB * resC - resD * resE * resF);

console.log(res.toString());
