import * as fs from 'fs';

const [_h, _m] = fs.readFileSync('/dev/stdin', 'utf-8').split(' ');
let h = Number(_h), m = Number(_m);

function isMisleading(h: number, m: number) {
  const [a, b] = h.toString().padStart(2, '0').split('');
  const [c, d] = m.toString().padStart(2, '0').split('');

  return  Number(a + c) <= 23 && Number(b + d) <= 59;
}

while(!isMisleading(h, m)) {
  m++;
  if(m > 59) {
    m = 0;
    h++;

    if (h > 23) {
      h = 0;
    }
  }
}
console.log([h, m].join(' '))

