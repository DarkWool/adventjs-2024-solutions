/**
 * @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
  const values = {
    "*": 1,
    o: 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };

  let price = 0;
  for (let i = 0; i < ornaments.length; i++) {
    let currOrn = ornaments[i];
    let val =
      values[ornaments[i + 1]] > values[currOrn]
        ? -values[currOrn]
        : values[currOrn];

    price += val;
  }

  return price || undefined;
}
