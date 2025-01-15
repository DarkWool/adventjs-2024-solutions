/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
  const subsets = [];

  function backtrack(startIndex, curr) {
    for (let i = startIndex; i < gifts.length; i++) {
      curr.push(gifts[i]);

      subsets.push([...curr]);
      backtrack(i + 1, curr);

      curr.pop();
    }
  }

  backtrack(0, []);

  subsets.sort((a, b) => a.length - b.length);

  return subsets;
}
