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
