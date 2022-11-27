import * as fs from 'fs';

const inputs = fs.readFileSync('/dev/stdin', 'utf-8').split('\n');

const [h, w] = inputs[0].split(' ').map(Number);

const s = inputs.slice(1, h + 1).map((col: string) => col.split(''));
const t = inputs.slice(h + 1).map((col: string) => col.split(''));


const sMap = new Map<string, number>();
for (let j = 0; j < w; j++) {
  let key = ''
  for (let i = 0; i < h; i++) {
    key += s[i][j];
  }
  let val = sMap.get(key);
  if (val !== undefined) {
    val++;
    sMap.set(key, val);
  } else {
    sMap.set(key, 1);
  }
}

for (let j = 0; j < w; j++) {
  let key = ''
  for (let i = 0; i < h; i++) {
    key += t[i][j];
  }

  let val = sMap.get(key);
  if (val === undefined) {
    break;
  } else {
    val--;
    if (val === 0) {
      sMap.delete(key);
    } else {
      sMap.set(key, val);
    }
  }
}

if (sMap.size === 0) {
  console.log('Yes');
} else {
  console.log('No');
}
