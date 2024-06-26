class BigIntMath {
  static sqrt(value: bigint): bigint {
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
  static abs(x: bigint): bigint {
    if (x < 0n) {
      return -1n * x;
    }
    return x;
  }
}
