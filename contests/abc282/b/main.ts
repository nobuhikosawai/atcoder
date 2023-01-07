import * as fs from 'fs';

const inputs = fs.readFileSync('/dev/stdin', 'utf-8').split('\n');
const [n, m] = inputs[0].split(' ').map(Number);

const bits = inputs.splice(1).map((input) => {
  const str = input.split('').reduce((acc, char) => {
    let bit
    if(char === 'o') {
      bit= '1'
    } else {
      bit= '0'
    }
    acc+= bit
    return acc
  }, '')
  return parseInt(str, 2);
})

const allTrue = parseInt(Array.from({length: m}).map(() => '1').join(''), 2)

let count = 0;
for(let i = 0; i < n; i++) {
  for(let j = i + 1; j < n; j++) {
    const sum = bits[i] | bits[j]
    if(sum === allTrue) {
      count++
    }
  }
}

console.log(count)
