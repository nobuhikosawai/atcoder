import * as fs from "fs";

const inputs = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const g: string[][] = [];

for (let i = 1; i < inputs.length; i++) {
  g.push(inputs[i].split(""));
}

type Point = [number, number];
const bomb = (b: number, origin: Point) => {
  const queue: Point[] = [];
  const vis = g.map((row) => {
    return row.map((_) => false);
  });

  const pushAround = (origin: Point) => {
    queue.push(
      [origin[0] - 1, origin[1]],
      [origin[0] - 1, origin[1] + 1],
      [origin[0], origin[1] + 1],
      [origin[0] + 1, origin[1] + 1],
      [origin[0] + 1, origin[1]],
      [origin[0] + 1, origin[1] - 1],
      [origin[0], origin[1] - 1],
      [origin[0] - 1, origin[1] - 1]
    );
  };

  queue.push(origin);
  pushAround(origin);

  while (queue.length > 0) {
    const current = queue.pop() as Point;
    if (
      current[0] < 0 ||
      current[0] >= g.length ||
      current[1] < 0 ||
      current[1] >= g[0].length
    ) {
      continue;
    }

    if (vis[current[0]][current[1]]) {
      continue;
    }

    const d =
      Math.abs(origin[0] - current[0]) + Math.abs(origin[1] - current[1]);

    if (d > b) {
      continue;
    }

    g[current[0]][current[1]] = ".";
    vis[current[0]][current[1]] = true;

    pushAround(current);
  }
};

const bombs: [number, Point][] = [];

for (let i = 0; i < g.length; i++) {
  for (let j = 0; j < g[0].length; j++) {
    if (g[i][j] !== "#" && g[i][j] !== ".") {
      const b = Number(g[i][j]);
      bombs.push([b, [i, j]]);
    }
  }
}

bombs.forEach((b) => {
  bomb(...b);
});

g.map((row) => {
  console.log(row.join(""));
});
