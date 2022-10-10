import bfs from "./script";

test("0,0 to 3,3 moves", () => {
  expect(bfs([0, 0], [3, 3])).toEqual([
    [0, 0],
    [1, 2],
    [3, 3],
  ]);
});

test("1,2 to 6,6 moves", () => {
  expect(bfs([1, 2], [6, 6])).toEqual([
    [1, 2],
    [3, 3],
    [4, 5],
    [6, 6],
  ]);
});
