import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const [n, q] = inputs[0].split(" ").map(Number);

let pos = Array.from<number>({ length: n }).map((_, i: number) => {
  return [i + 1, 0];
});

for (let i = 1; i < inputs.length; i++) {
  if (inputs[i].match(/^1/)) {
    const [_, cmd] = inputs[i].split(" ");

    let head: number[] = [];
    switch (cmd) {
      case "U":
        head = [pos[0][0], pos[0][1] + 1];
        break;
      case "D":
        head = [pos[0][0], pos[0][1] - 1];
        break;
      case "L":
        head = [pos[0][0] - 1, pos[0][1]];
        break;
      case "R":
        head = [pos[0][0] + 1, pos[0][1]];
        break;
    }
    pos = [head, ...pos.splice(0, pos.length - 1)];
  } else if (inputs[i].match(/^2/)) {
    const [_, x] = inputs[i].split(" ").map(Number);
    console.log(pos[x - 1][0], pos[x - 1][1]);
  }
}
