/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
  const regExp = RegExp(phone);

  let arr = agenda.split("\n");
  arr = arr.filter((elem) => regExp.test(elem));

  if (!arr.length || arr.length > 1) return null;

  const matches = arr[0].match(
    /(\+*\d{1,2}-\d+-\d+-\d{3,})*([ \w]*)*(<[\w ]*>)*/
  );
  const name = matches[3].slice(1, matches[3].length - 1);
  const address = matches[2].trimStart().trimEnd();

  return { name, address };
}

/*
We can also use this regExp to get the name without the '<' and '>' signs
const name = arr[0].match(/(?<=<)[\w ]*(?=>)/);
*/
