import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf-8').split('');
const res = input.reduce((acc, v) => {
  if (v === 'v') {
    acc += 1;
    return acc
  } else if (v === 'w') {
    acc += 2;
    return acc
  }
  return acc;
}, 0);
console.log(res);

