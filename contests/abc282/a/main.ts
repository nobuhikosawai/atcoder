import * as fs from 'fs';

const input = Number(fs.readFileSync('/dev/stdin', 'utf-8'));

const base = 65;

const res = Array.from({ length: input }).reduce((acc, _, index) => {
  acc += String.fromCharCode(index + base);
  return acc
}, '')

console.log(res)
