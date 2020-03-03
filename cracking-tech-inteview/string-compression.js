const createCharsMap = stringToMap => {
  const resultMap = new Map();
  for (let i = 0; i < stringToMap.length; i++) {
    const currentChar = stringToMap.charAt(i);
    resultMap.set(currentChar, (resultMap.get(currentChar) || 0) + 1);
  }

  return resultMap;
};

const printMap = charsMap => {
  let result = "";

  for (const [key, value] of charsMap.entries()) {
    result += `${key}${value}`;
  }

  return result;
};

const stringCompression = stringToCompress => {
  const compressedString = printMap(createCharsMap(stringToCompress));

  return compressedString.length < stringToCompress.length
    ? compressedString
    : stringToCompress;
};

console.log(stringCompression("aaaaaacbbdd"));
console.log(stringCompression("abcdefg"));
