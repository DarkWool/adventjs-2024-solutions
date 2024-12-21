/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  let result = [];

  for (let i = 0; i < indices.length; i++) {
    let str = `${" ".repeat(indices.length - i - 1)}`;

    if (indices[i] !== 0) {
      const startHyphens = indices[i] < 0 ? length + indices[i] : indices[i];
      str += `${"~".repeat(startHyphens)}r${"~".repeat(
        length - startHyphens - 1
      )}`;
    } else {
      str += `${"~".repeat(length)}`;
    }

    str += ` /${i + 1}`;
    result.push(str);
  }

  return result.join("\n");
}
