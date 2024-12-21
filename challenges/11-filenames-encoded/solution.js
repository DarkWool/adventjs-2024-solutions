/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
  const regExp = new RegExp(/[a-zA-Z][a-zA-Z_-]+.\w+/);

  return filename.match(regExp)[0];
}
