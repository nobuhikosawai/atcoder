import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf-8').split('\n');

const [_, k] = input[0].split(' ');
const values = input[1].split(' ');

for (let i = 0; i < Number(k); i++) {
  values.shift();
  values.push('0');
}

console.log(values.join(' '))
