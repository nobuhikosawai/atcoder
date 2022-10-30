import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf-8').split(' ');

const [a, b, c, d, e, f] = input.map(BigInt);

const p = 998244353n

function getRes(num: bigint) {
  return num % p;
}

const [resA, resB, resC, resD, resE, resF] = [a, b, c, d, e, f].map(getRes);

const left = getRes(resA * resB * resC);
const right = getRes(resD * resE * resF);

const res = getRes((left - right) + p);

console.log(res.toString());
