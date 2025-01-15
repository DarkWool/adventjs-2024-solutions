/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  return grid.map((row, y) => {
    return row.map((el, x) => {
      let adjBombs = 0;

      for (let adjCol = y - 1; adjCol <= y + 1; adjCol++) {
        if (y < 0) continue;

        for (let adjRow = x - 1; adjRow <= x + 1; adjRow++) {
          if ((adjCol === y && adjRow === x) || x < 0) continue;

          grid?.[adjCol]?.[adjRow] && adjBombs++;
        }
      }

      return adjBombs;
    });
  });
}
