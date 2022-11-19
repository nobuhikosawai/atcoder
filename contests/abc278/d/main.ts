import * as fs from 'fs';

const inputs = fs.readFileSync('/dev/stdin', 'utf-8').split('\n');
const numOp = 3 + Number(inputs[2]);

const nums = inputs[1].split(' ').map((i: string) => Number(i));
const numMap = new Map<number, number>();
let isFilled = false;
let filledNum: number | null = null;

const getNumber = (i: number): number => {
  if (!isFilled) {
    return nums[i];
  }
  return numMap.has(i) ? numMap.get(i)! : filledNum!;
}

const addNumber = (i: number, v: number) => {
  if (!isFilled) {
    nums[i]+= v;
    return;
  }

  if (numMap.has(i)) {
    let value = numMap.get(i)!;
    value += v;
    numMap.set(i, value);
  } else {
    numMap.set(i, filledNum! + v);
  }
}

const fillNumber = (v: number) => {
  isFilled = true;
  filledNum = v;
  numMap.clear();
}

for (let i = 3; i < numOp; i++) {
  const query = inputs[i].split(' ');

  switch(query[0]) {
    case '1': {
      const v = Number(query[1]);
      fillNumber(v);
      break;
    }
    case '2': {
      const i = Number(query[1]) - 1;
      const v = Number(query[2]);
      addNumber(i, v);
      break;
    }
    case '3': {
      const i = Number(query[1]) - 1;
      console.log(getNumber(i));
      break;
    }
  }
}
