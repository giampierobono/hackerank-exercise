const sortStringChars = stringToSort =>
  stringToSort
    .split("")
    .sort((charA, charB) => charA.toLowerCase().localeCompare(charB.toLowerCase()))
    .join("");

const checkPermutations = (firstString, secondString) => {
  if (
    !firstString ||
    !secondString ||
    firstString.length !== secondString.length
  ) {
    return false;
  }

  return sortStringChars(firstString) === sortStringChars(secondString);
};

console.log(checkPermutations("ciao", "oaic"));
