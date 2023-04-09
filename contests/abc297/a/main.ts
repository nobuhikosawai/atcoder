import * as fs from "fs";

function main(inputs: string[]): void {
  const [, d] = inputs[0].split(" ").map(Number);

  const vals = inputs[1].split(" ");

  let ans = -1;

  for (let i = 0; i < vals.length; i ++) {
    const p = Number(vals[i]);
    const q = Number(vals[i + 1]);

    if (q - p <= d) {
      ans = q;
      break;
    }
  }

  console.log(ans);
}

main(fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n"));
