import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

function main() {
  const node: { [key: string]: string } = {};

  for (let i = 1; i < inputs.length; i++) {
    const [l, r] = inputs[i].split(" ");

    node[l] = r;
  }

  const set = new Set<string>();
  for (const key of Object.keys(node)) {
    let ns = key;
    while (!set.has(key)) {
      if (!ns) {
        set.add(key);
        break;
      }

      ns = node[ns];

      if (ns === key) {
        console.log("No");
        return;
      }
    }
  }
  console.log("Yes");
}

main();
