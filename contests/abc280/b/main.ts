import * as fs from 'fs';

const inputs = fs.readFileSync('/dev/stdin', 'utf-8').split('\n');

const nums = inputs[1].split(' ').map(Number);

let prev: number | null = null;

const res = nums.reduce<number[]>((acc, n) => {
  if (prev === null) {
    acc.push(n);
    prev = n;
    return acc;
  }

  acc.push(n - prev);
  prev = n;
  return acc;
}, [])

console.log(res.join(' '));
