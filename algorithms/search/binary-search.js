const binarySearchRecursive = (array, start, end, toSearch) => {
  if (start > end) {
    return false;
  }

  const middle = start + Math.floor((end - start) / 2);

  if (array[middle] === toSearch) {
    return true;
  }
  return array[middle] > toSearch
    ? binarySearchRecursive(array, start, middle - 1, toSearch)
    : binarySearchRecursive(array, middle + 1, end, toSearch);
};

const binarySearchIterative = (array, start, end, toSearch) => {
  if (start > end) {
    return false;
  }

  let middle = Math.floor((end - start) / 2);

  while (start <= end) {
    if (array[middle] === toSearch) {
      return true;
    }

    if (array[middle] > toSearch) {
      // check the left side
      end = middle - 1;
    } else {
      // check the right side
      start = middle + 1;
    }
    middle = start + Math.floor((end - start) / 2);
  }

  return false;
};

const data = [1, 3, 5, 6, 7, 8];
const bigData = [...Array(10000000).keys()];
console.log(
  "binarySearchRecursive: ",
  binarySearchRecursive(data, 0, data.length - 1, 3)
);
console.log(
  "binarySearchRecursive (big array): ",
  binarySearchRecursive(bigData, 0, bigData.length - 1, 3)
);
console.log(
  "binarySearchIterative: ",
  binarySearchIterative(data, 0, data.length, 100000)
);
console.log(
  "binarySearchIterative (big array): ",
  binarySearchIterative(bigData, 0, bigData.length, 100000)
);
