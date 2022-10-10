const generatePositions = (currentPos) => {
  let x = currentPos[0];
  let y = currentPos[1];
  // prevent form out of board
  const check = (x, y) => {
    if (x > 7 || x < 0 || y > 7 || y < 0) return false;
    return true;
  };

  const offsets = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
  ];

  const positions = offsets.map((offset) => {
    if (check(x + offset[0], y + offset[1]))
      return [x + offset[0], y + offset[1]];
  });

  return positions;
};

const bfs = (root, goal) => {
  const queue = [];
  queue.push(root);

  const predecessors = [];
  predecessors[root] = null;

  const buildPath = () => {
    const stack = [];
    stack.push(goal);

    let u = predecessors[goal];

    while (u.toString() != root.toString()) {
      stack.push(u);
      u = predecessors[u];
    }

    stack.push(root);

    let path = stack.reverse();

    return path;
  };

  while (queue.length) {
    let v = queue.shift();

    if (v.toString() === goal.toString()) return buildPath();

    generatePositions(v).forEach((pos) => {
      if (pos) {
        queue.push(pos);
        predecessors[pos] = v;
      }
    });
  }
  return false;
};

export default bfs;
