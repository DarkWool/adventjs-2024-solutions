/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
  let moves = 0;

  reindeer.sort((a, b) => a - b);
  stables.sort((a, b) => a - b);

  reindeer.forEach((el, i) => {
    moves += Math.abs(el - stables[i]);
  });

  return moves;
}
