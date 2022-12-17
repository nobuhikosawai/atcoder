import * as fs from 'fs';

const input = Number(fs.readFileSync('/dev/stdin', 'utf-8'));

const primeFactorize = (x: number): [number, number][] => {
  const res: [number, number][] = [];

  for (let i = 2; i * i <= x; i++) {
    if (x % i) {
      continue;
    }

    let cnt = 0;

    while(x % i === 0) {
      x /= i;
      cnt++;
    }

    res.push([i, cnt]);
  }

  if (x !== 1) {
    res.push([x ,1]);
  }

  return res;
}

let ac = input, wa = 0;

const primeFactorized = primeFactorize(input);

const f = (n: number, p: number): number => {
  if (n === 0) {
    return 0;
  }
  n = Math.floor(n / p);
  return n + f(n, p);
};

while(ac - wa > 1) {
  const wj = Math.floor((ac + wa) / 2);
  let ok = true;
  for(const [p, cnt] of primeFactorized) {
    if (f(wj, p) < cnt) {
      ok = false;
      break;
    }
  }
  if(ok) {
    ac = wj;
  } else {
    wa = wj;
  }
}

console.log(ac)

