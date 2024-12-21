/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  const regExp = new RegExp(/\(\w*\)/);
  let match = regExp.exec(packages);

  while (match) {
    const str = match[0].slice(1, -1);
    const start = packages.slice(0, match.index);
    const end = packages.slice(match.index + match[0].length);

    packages = `${start}${str.split("").reverse().join("")}${end}`;
    match = regExp.exec(packages);
  }

  return packages;
}
