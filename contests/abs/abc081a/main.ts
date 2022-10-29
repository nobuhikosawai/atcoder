import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf-8');

// const count = input.split('').reduce((acc, v) => {
//   if (v === '1') {
//     acc++;
//   }
//   return acc;
// }, 0)

let count = 0;

if (input[0] === '1') {
  count++;
}

if (input[1] === '1') {
  count++;
}

if (input[2] === '1') {
  count++;
}

console.log(count)
