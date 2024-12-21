/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
  const biggestLen = Math.max(...names.map((name) => name.length));

  const surroundLines = "*".repeat(biggestLen + 4);
  let str = surroundLines + "\n";

  names.forEach((name) => {
    const extraSpaces = biggestLen - name.length;
    str += `* ${name}${" ".repeat(extraSpaces)} *\n`;
  });

  str += surroundLines;
  return str;
}
