const primeFactorize = (x: bigint): [bigint, bigint][] => {
  const res: [bigint, bigint][] = [];

  for (let i = 2n; i * i <= x; i++) {
    if (x % i) {
      continue;
    }

    let cnt = 0n;

    while (x % i === 0n) {
      x /= i;
      cnt++;
    }

    res.push([i, cnt]);
  }

  if (x !== 1n) {
    res.push([x, 1n]);
  }

  return res;
};

import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

for (let i = 1; i < inputs.length; i++) {
  const val = BigInt(inputs[i]);

  const primes = primeFactorize(val);

  let p = 0n,
    q = 0n;
  primes.forEach((prime) => {
    if (prime[1] === 2n) {
      p = prime[0];
    } else {
      q = prime[0];
    }
  });

  console.log(p.toString(), q.toString());
}
