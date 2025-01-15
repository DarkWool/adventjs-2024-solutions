/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  const parenthesesIndices = {
    "(": [],
    ")": [],
  };

  const regExp = new RegExp(/([\(\)])/gim);
  const arr = packages.match(regExp);
  console.log(arr);

  for (let i = 0; i < packages.length; i++) {
    const curr = packages[i];

    if (curr === "(") parenthesesIndices[curr].unshift(i);
    if (curr === ")") parenthesesIndices[curr].push(i);
  }

  for (let i = 0; i < parenthesesIndices["("].length; i++) {
    const startPos = parenthesesIndices["("][i];
    const endPos = parenthesesIndices[")"][i];

    let subStr = packages.slice(startPos, endPos);
    subStr = subStr.split("").reverse("").join("");

    packages = packages.slice(0, startPos) + subStr + packages.slice(endPos);
  }

  packages = packages.replaceAll(/[\(\)]/g, "");
  return packages;
}
