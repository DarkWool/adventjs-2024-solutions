/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
  const result = { missing: {}, extra: {} };

  received.forEach((elem) => {
    const index = expected.indexOf(elem);

    if (index !== -1) {
      expected.splice(index, 1);
    } else {
      result["extra"][elem] ??= 0;
      result["extra"][elem] += 1;
    }
  });

  expected.forEach((elem) => {
    result["missing"][elem] ??= 0;
    result["missing"][elem] += 1;
  });

  return result;
}
