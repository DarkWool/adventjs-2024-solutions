/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  const len = Math.max(...nums);
  const numsSeries = Array.from({ length: len }, (el, i) => i + 1);

  return numsSeries.filter((el) => nums.indexOf(el) === -1);
}
