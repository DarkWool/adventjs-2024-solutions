/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
  let moves = 0;

  reindeer.forEach((reindeer) => {
    const possibleMoves = stables.map((stable) => Math.abs(reindeer - stable));

    const minMov = Math.min(...possibleMoves);
    const movIndex = possibleMoves.indexOf(minMov);
    moves += minMov;

    stables.splice(movIndex, 1);
  });

  return moves;
}
