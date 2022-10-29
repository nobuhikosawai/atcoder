import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf-8').split('\n');

let nums = input[1].split(' ').map(s => parseInt(s, 10));

let count = 0;

while (true) {
  const dividable = nums.every((n) => {
    return n % 2 === 0;
  })
  if (dividable) {
    count++;
    nums = nums.map((n) => {
      return n / 2;
    })
  } else {
    break;
  }
}

console.log(count);
