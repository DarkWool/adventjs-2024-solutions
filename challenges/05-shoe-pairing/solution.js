/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */ rs;
// }

function organizeShoes(shoes) {
  const groupedShoes = {};
  const pairs = [];

  shoes.forEach((shoe) => {
    groupedShoes[shoe.size] ??= { I: 0, R: 0 };
    groupedShoes[shoe.size][shoe.type]++;

    if (groupedShoes[shoe.size]["I"] > 0 && groupedShoes[shoe.size]["R"] > 0) {
      pairs.push(shoe.size);
      groupedShoes[shoe.size]["I"]--;
      groupedShoes[shoe.size]["R"]--;
    }
  });

  return pairs;
}

//! Alternative solution
function altOrganizeShoes(shoes) {
  const groupedShoes = {};
  const pairs = [];

  shoes.forEach((shoe) => {
    groupedShoes[shoe.size] ??= { I: 0, R: 0 };
    groupedShoes[shoe.size][shoe.type]++;
  });

  for (const key in groupedShoes) {
    const numOfPairs = Math.min(groupedShoes[key]["I"], groupedShoes[key]["R"]);
    pairs.push(...Array.from({ length: numOfPairs }, () => +key));
  }

  pairs;
  return pairs;
}
