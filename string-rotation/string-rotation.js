// N -> s1.length, M -> s2.length | total time complexity O(N + M)
const stringRotation = (s1, s2) => {
  const occurrencies = new Map();

  if (s1.length !== s2.length) {
    return false;
  }

  for (let i = 0; i < s1.length; i++) {
    occurrencies.set(s1.charAt(i), true);
  }

  for (let i = 0; i < s2.length; i++) {
    if (!occurrencies.has(s2.charAt(i))) {
      return false;
    }
  }

  return true;
};

console.log(stringRotation("waterbottle", "erbottlewat")); // true
console.log(stringRotation("waterbottle", "erbottleat")); // false
