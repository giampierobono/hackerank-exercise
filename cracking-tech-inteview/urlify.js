const urlifyJs = stringToUrlify =>
  stringToUrlify
    .split("")
    .map(currentChar => (currentChar === " " ? "%20" : currentChar))
    .join("");

const urlify = stringToUrlify => {
  let result = "";

  for (let i = 0; i < stringToUrlify.length; i++) {
    const currentChar = stringToUrlify.charAt(i);
    result += currentChar === " " ? "%20" : currentChar;
  }

  return result;
};

console.log(urlifyJs("prova prova sa sa       asdad  asd d asd "));
console.log(urlify("prova prova sa sa       asdad  asd d asd "));
