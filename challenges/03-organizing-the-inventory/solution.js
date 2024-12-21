/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
  const inv = {};

  for (const item of inventory) {
    const { name, quantity, category } = item;

    inv[category] ??= {};
    inv[category][name] ??= 0;
    inv[category][name] += quantity;
  }

  return inv;
}
