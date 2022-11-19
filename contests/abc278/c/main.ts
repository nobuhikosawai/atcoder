import * as fs from 'fs';

const inputs = fs.readFileSync('/dev/stdin', 'utf-8').split('\n');
const [_, numOp] = inputs[0].split(' ');

const relations = new Map<string, Set<string>>();

for (let i = 1; i <= Number(numOp); i++) {
  const [t, a, b] = inputs[i].split(' ');

  switch(t) {
    case '1':
      if (relations.has(a)) {
        const v = relations.get(a)
        v!.add(b);
      } else {
        relations.set(a, new Set([b]));
      }
      break;
    case '2':
      if (relations.has(a)) {
        const v = relations.get(a)
        v!.delete(b);
      }
      break;
    case '3':
      const mutualFollow = relations.has(a) && relations.get(a)!.has(b) && relations.has(b) && relations.get(b)!.has(a);
      console.log(mutualFollow ? 'Yes' : 'No');
      break;
  }
}
