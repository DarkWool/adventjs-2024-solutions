function prepareGifts(gifts) {
  const x = new Set(gifts);

  return [...x].sort((a, b) => a - b);
}
