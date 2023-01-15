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

function sqrt(value: bigint): bigint {
  if (value < 0n) {
    throw "square root of negative numbers is not supported";
  }

  if (value < 2n) {
    return value;
  }

  function newtonIteration(n: bigint, x0: bigint): bigint {
    const x1 = (n / x0 + x0) >> 1n;
    if (x0 === x1 || x0 === x1 - 1n) {
      return x0;
    }
    return newtonIteration(n, x1);
  }

  return newtonIteration(value, 1n);
}

const solvePQ = (x: bigint) => {
  let i = 2n;
  while (true) {
    if (x % i) {
      i++;
      continue;
    }

    x /= i;
    if (x % i === 0n) {
      // i is p
      console.log(`${i} ${x / i}`);
      return;
    } else {
      // i is q
      console.log(`${sqrt(x)} ${i}`);
      return;
    }
  }
};

for (let i = 1; i < inputs.length; i++) {
  const val = BigInt(inputs[i]);

  solvePQ(val);
}
