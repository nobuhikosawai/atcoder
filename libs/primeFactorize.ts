export tonst primeFactorize = (x: number): [number, number][] => {
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
