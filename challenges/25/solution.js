/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
  let value = 0;
  for (let i = 0; i < code.length; i++) {
    switch (code[i]) {
      case "+":
        value++;
        break;
      case "-":
        value--;
        break;
      case "{":
        if (value === 0) {
          const subStr = code.slice(i + 1);
          const conditionalEnd = subStr.indexOf("}");
          i += conditionalEnd + 1;
        }
        break;
      case "[":
        value = 0;
        const subStr = code.slice(i + 1);
        const loopEnd = subStr.indexOf("]");
        i += loopEnd + 1;
        break;
      default:
        continue;
    }
  }

  return value;
}
