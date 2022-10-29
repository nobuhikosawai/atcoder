import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf-8').split('\n');

const vars = input[1].split(' ').map(s => parseInt(s, 10))

let max = 0
let maxIdx = 0

vars.forEach((v, idx) => {
  if (v > max) {
    max = v;
    maxIdx = idx;
  }
})

console.log(maxIdx + 1);
