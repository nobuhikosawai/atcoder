import * as fs from 'fs';

const inputs = fs.readFileSync('/dev/stdin', 'utf-8').split('\n');

const s = inputs[0];
const t = inputs[1];


for(let i = 0; i < t.length; i++) {
  if (t[i] !== s[i]) {
    console.log(i + 1)
    break;
  }
}
