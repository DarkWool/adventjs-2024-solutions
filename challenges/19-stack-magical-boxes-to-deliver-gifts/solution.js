/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
  const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };

  const weights = [10, 5, 2, 1];
  const boxes = {};
  let arr = [];

  weights.forEach((curr) => {
    while (weight >= curr) {
      weight -= curr;

      boxes[curr] ??= 0;
      boxes[curr]++;
    }
  });

  Object.keys(boxes).forEach((key) => {
    while (boxes[key] > 0) {
      if (arr.length > 0) {
        const lastElem = arr[arr.length - 1];
        const lastElemLen = lastElem.length;

        arr[arr.length - 1] += boxRepresentations[key][0]
          .slice(lastElemLen)
          .trimEnd();
        arr = arr.concat(boxRepresentations[key].slice(1));
      } else {
        arr = arr.concat(boxRepresentations[key]);
      }

      boxes[key]--;
    }
  });

  return arr.join("\n");
}
