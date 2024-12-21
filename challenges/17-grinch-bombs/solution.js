/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */

function detectBombs(grid) {
  return grid.map((row, y) => {
    return row.map((el, x) => {
      let adjacentBombs = 0;

      const adjacentPositions = [
        [y - 1, x - 1],
        [y - 1, x],
        [y - 1, x + 1],
        [y, x - 1],
        [y, x + 1],
        [y + 1, x - 1],
        [y + 1, x],
        [y + 1, x + 1],
      ];

      adjacentPositions.forEach((coords) => {
        adjacentBombs += grid?.[coords[0]]?.[coords[1]] ? 1 : 0;
      });

      return adjacentBombs;
    });
  });
}
