/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  const regExp = new RegExp(/#.*\*.*#/);

  for (let i = 0; i < box.length; i++) {
    if (regExp.test(box[i]))
      return i === 0 || i === box.length - 1 ? false : true;
  }

  return false;
}
