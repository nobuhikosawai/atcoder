import * as fs from 'fs';

const inputs = fs.readFileSync('/dev/stdin', 'utf-8').split('\n');
const str = inputs[1]

let inside = false
const res = str.split('').reduce((acc, char) => {
  if(char === '"') {
    inside = !inside
  }

  acc += (!inside && char === ',') ? '.' : char
  return acc
},'')

console.log(res)
