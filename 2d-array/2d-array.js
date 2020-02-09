const hourglassSum = arr => {
  const MIN_POSSIBLE_VALUE = -64;
  const rowsCount = 6;
  const columnCount = 6;
  let maxHourGlassesSum = MIN_POSSIBLE_VALUE;

  if (arr.length !== rowsCount) {
    return maxHourGlassesSum;
  }

  for (let i = 0; i < rowsCount - 2; i++) {
    for (let j = 0; j < columnCount - 2; j++) {
      const sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];

      if (sum > maxHourGlassesSum) {
        maxHourGlassesSum = sum;
      }
    }
  }

  return maxHourGlassesSum;
};

// TESTS
const tests = [
  {
    matrix: [
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 2, 4, 4, 0],
      [0, 0, 0, 2, 0, 0],
      [0, 0, 1, 2, 4, 0]
    ],
    expected: 19
  },
  {
    matrix: [
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 9, 2, -4, -4, 0],
      [0, 0, 0, -2, 0, 0],
      [0, 0, -1, -2, -4, 0]
    ],
    expected: 13
  },
  {
    matrix: [
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 9, 2, -4, -4, 0],
      [0, 0, 0, -2, 0, 0],
      [0, 0, -1, -2, -4, 0],
      [0, 0, -1, -2, -4, 0]
    ],
    expected: -64
  },
  {
    matrix: [
      [-9, -9, -9, -9, -9, -9],
      [-9, -9, -9, -9, -9, -9],
      [-9, -9, -9, -9, -9, -9],
      [-9, -9, -9, -9, -9, -9],
      [-9, -9, -9, -9, -9, -9],
      [-9, -9, -9, -9, -9, -9]
    ],
    expected: -63
  },
  {
    matrix: [
      [9, 9, 9, 9, 9, 9],
      [9, 9, 9, 9, 9, 9],
      [9, 9, 9, 9, 9, 9],
      [9, 9, 9, 9, 9, 9],
      [9, 9, 9, 9, 9, 9],
      [9, 9, 9, 9, 9, 9]
    ],
    expected: 63
  }
];

const runTests = tests => {
  tests.forEach(test => {
    console.log("************************************************");
    const start = new Date();
    const result = hourglassSum(test.matrix);
    const end = new Date() - start;
    console.log(`matrix: ${test.matrix}`);
    console.log(`expected: ${test.expected}`);
    console.log(`received: ${result}`);

    if (result !== test.expected) {
      console.error(
        `Test failed :( expected: ${test.expected} - received: ${result}`
      );
    } else {
      console.log("Test success :)");
    }
    console.log("Algorithm executed in: %dms", end);
    console.log("************************************************");
  });
};

console.log(runTests(tests));
