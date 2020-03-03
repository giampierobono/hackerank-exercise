const isOnlyOneCharModified = (original, modified) => {
  let oneCharModified = false;

  for (let i = 0; i < original.length; i++) {
    if (original.charAt(i) !== modified.charAt(i)) {
      if (oneCharModified) {
        return false;
      }
      oneCharModified = true;
    }
  }

  return oneCharModified;
};

const oneCharMore = (original, modified) => {
  let originalIdx = 0;
  let modifiedIdx = 0;

  while (originalIdx < original.length && modifiedIdx < modified.length) {
    if (original[originalIdx] !== modified[modifiedIdx]) {
      if (
        originalIdx === original.length - 1 &&
        modifiedIdx === modified.length - 1
      ) {
        return true;
      }
      return false;
    }
    originalIdx += originalIdx === original.length - 1 ? 0 : 1;
    modifiedIdx++;
  }
  return false;
};

const oneAway = (original, modified) => {
  if (Math.abs(original.length - modified.length) > 1) {
    return false;
  }

  if (original.length === modified.length) {
    return isOnlyOneCharModified(original, modified);
  } else if (original.length + 1 === modified.length) {
    return oneCharMore(original.split(""), modified.split(""));
  } else {
    return oneCharMore(modified.split(""), original.split(""));
  }
};

console.log(oneAway("ada", "add")); // true
console.log(oneAway("adda", "addp")); // true
console.log(oneAway("addpa", "addp")); // true
console.log(oneAway("addpa", "addpa")); // false
console.log(oneAway("addpa", "addpaaaa")); // false
console.log(oneAway("addpa", "addp")); // true
