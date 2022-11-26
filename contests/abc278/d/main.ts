import * as fs from 'fs';

const inputs = fs.readFileSync('/dev/stdin', 'utf-8').split('\n');
const numOp = 3 + Number(inputs[2]);

const nums = inputs[1].split(' ').map((i: string) => Number(i));

const diffMap = new Map<number, number>();
nums.map((n, i) => {
  diffMap.set(i, n);
})
let filledNum = 0;

for (let i = 3; i < numOp; i++) {
  const query = inputs[i].split(' ');

  switch(query[0]) {
    case '1': {
      const v = Number(query[1]);
      diffMap.clear();
      filledNum = v;
      break;
    }
    case '2': {
      const i = Number(query[1]) - 1;
      const v = Number(query[2]);
      const value = diffMap.get(i) || 0;
      diffMap.set(i, value + v);
      break;
    }
    case '3': {
      const i = Number(query[1]) - 1;
      console.log(filledNum + (diffMap.get(i) || 0));
      break;
    }
  }
}
