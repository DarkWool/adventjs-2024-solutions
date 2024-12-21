/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  const registers = {};

  for (let i = 0; i < instructions.length; i++) {
    const [main, regA, regB] = instructions[i].split(" ");

    switch (main) {
      case "MOV":
        registers[regB] = isNaN(regA) ? registers[regA] : +regA;
        break;
      case "INC":
        registers[regA] ??= 0;
        registers[regA] += 1;
        break;
      case "DEC":
        registers[regA] ??= 0;
        registers[regA] -= 1;
        break;
      case "JMP":
        if (!registers[regA]) i = regB - 1;
    }
  }

  return registers["A"];
}
