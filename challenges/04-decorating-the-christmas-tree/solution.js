/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
  const maxLineLen = height * 2 - 1;
  let tree = "";

  for (let i = 1; i <= maxLineLen; i += 2) {
    const underscores = "_".repeat(Math.floor((maxLineLen - i) / 2));
    tree += `${underscores}${ornament.repeat(i)}${underscores}\n`;
  }

  const trunkUnderscores = "_".repeat((maxLineLen - 1) / 2);
  const trunkLine = `${trunkUnderscores}#${trunkUnderscores}`;

  tree += `${trunkLine}\n${trunkLine}`;

  return tree;
}
