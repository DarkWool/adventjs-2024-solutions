/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  const len = Math.max(...nums);
  const completeNums = Array.from({ length: len }, (el, i) => i + 1);

  const serie = new Set(completeNums);
  const inputNums = new Set(nums);

  return [...serie.difference(inputNums)];
}
