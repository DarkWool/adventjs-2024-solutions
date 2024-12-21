/**
 * @param {string} s
 * @returns {string}
 */

function removeSnow(s) {
  for (let i = 1; i < s.length; i++) {
    const prev = s[i - 1];
    if (prev === s[i]) {
      s = s.slice(0, i - 1) + s.slice(i + 1);
      i = 0;
    }
  }

  return s;
}
