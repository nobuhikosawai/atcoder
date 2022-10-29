import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf-8').split(' ');

const a = parseInt(input[0], 10);
const b = parseInt(input[1], 10);

console.log(a * b % 2 === 0 ? 'Even' : 'Odd');
