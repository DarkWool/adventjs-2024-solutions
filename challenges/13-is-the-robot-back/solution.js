/**
 * @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
  const position = [0, 0]; // x, y
  const invertedMoves = {
    U: "D",
    R: "L",
    D: "U",
    L: "R",
  };

  for (let i = 0; i < moves.length; i++) {
    let move = moves[i];
    if (move === "*") move = moves[i + 1];
    else if (moves[i - 1] === "!") {
      move = invertedMoves[moves[i]];
      moves = moves.slice(0, i) + move + moves.slice(i + 1);
    } else if (move === "?") {
      if (moves.slice(0, i).includes(moves[i + 1])) {
        i++;
        continue;
      }
    }

    switch (move) {
      case "U":
        position[1] += 1; // 1 + variable?
        break;
      case "R":
        position[0] += 1;
        break;
      case "D":
        position[1] -= 1;
        break;
      case "L":
        position[0] -= 1;
        break;
    }
  }

  return position[0] === 0 && position[1] === 0 ? true : position;
}
