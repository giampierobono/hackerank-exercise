const createCharsMap = stringToMap => {
  const resultMap = new Map();

  for (let i = 0; i < stringToMap.length; i++) {
    const currentChar = stringToMap.charAt(i);
    resultMap.set(currentChar, (resultMap.get(currentChar) || 0) + 1);
  }

  return resultMap;
};

const palindromePermutation = stringToCheck => {
  const charsMap = createCharsMap(stringToCheck);
  let findOddValue = false;

  for (const [key, value] of charsMap.entries()) {
    if (value % 2 !== 0) {
      if (findOddValue) {
        return false;
      }
      findOddValue = true;
    }
  }
  return true;
};

const palindromePermutationArray = stringToCheck => {
  const occurrencies = [];

  for (let i = 0; i < stringToCheck.length; i++) {
    const pos = stringToCheck.charAt(i).charCodeAt();
    occurrencies[pos]++;
  }
  return occurrencies.filter(el => !!el && el % 2 !== 0) <= 1;
};

console.log(palindromePermutation("ciico"));
console.log(palindromePermutationArray("ciico"));
