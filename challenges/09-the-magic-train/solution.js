/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  const coords = [];

  board.some((line, y) => {
    const x = line.indexOf("@");
    if (x !== -1) {
      coords.push(y, x);
      return true;
    }
  });

  switch (mov) {
    case "U":
      coords[0] -= 1;
      break;
    case "D":
      coords[0] += 1;
      break;
    case "L":
      coords[1] -= 1;
      break;
    default:
      coords[1] += 1;
  }

  const movementResults = {
    "*": "eat",
    "·": "none",
    o: "crash",
    undefined: "crash",
  };

  return movementResults[board?.[coords[0]]?.[coords[1]]];
}
