/**
 * @param {Array<Object>} data
 * @returns {string}
 */

function drawTable(data) {
  // Get the maximum chars length for each column
  const columnsLength = {};
  for (const prop in data[0]) {
    columnsLength[prop] = prop.length;
  }

  data.forEach((line) => {
    for (const prop in line) {
      const valLen = line[prop].length;
      columnsLength[prop] =
        columnsLength[prop] < valLen ? valLen : columnsLength[prop];
    }
  });

  // Table's header
  let table = "";
  let divisionLine = "+";
  for (const prop in columnsLength) {
    const colName = prop[0].toUpperCase() + prop.slice(1);

    divisionLine = `${divisionLine}${"-".repeat(columnsLength[prop] + 2)}+`;
    table += `| ${colName}${" ".repeat(columnsLength[prop] - prop.length)} `;
  }

  // Table's body
  table = `${divisionLine}\n${table}|\n${divisionLine}\n`;
  data.forEach((obj) => {
    for (const prop in obj) {
      const propLen = String(obj[prop]).length;
      table += `| ${obj[prop]}${" ".repeat(columnsLength[prop] - propLen)} `;
    }

    table += "|\n";
  });

  table += divisionLine;
  return table;
}
