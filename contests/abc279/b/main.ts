import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf-8').split('\n');

const s = input[0];
const t = input[1];

console.log(s.includes(t) ? "Yes" : "No");
