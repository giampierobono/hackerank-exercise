const areInputsValid = ({ array, numOfRotations }) =>
  array.length >= 1 &&
  array.length <= Math.pow(10, 5) &&
  numOfRotations >= 1 &&
  numOfRotations <= array.length;

const rotLeft = (a, d) => {
  const clonedArray = [...a];

  if (!areInputsValid({ array: a, numOfRotations: d })) {
    return [];
  }

  for (let i = 0; i < d; i++) {
    clonedArray.push(clonedArray.shift());
  }

  return clonedArray;
};

// TESTS
const tests = [
  {
    a: [1, 2, 3, 4, 5],
    d: 4,
    expected: [5, 1, 2, 3, 4]
  },
  {
    a: [
      41,
      73,
      89,
      7,
      10,
      1,
      59,
      58,
      84,
      77,
      77,
      97,
      58,
      1,
      86,
      58,
      26,
      10,
      86,
      51
    ],
    d: 10,
    expected: [
      77,
      97,
      58,
      1,
      86,
      58,
      26,
      10,
      86,
      51,
      41,
      73,
      89,
      7,
      10,
      1,
      59,
      58,
      84,
      77
    ]
  },
  {
    a: [...Array(Math.pow(10, 5)).keys()],
    d: Math.pow(10, 6),
    expected: [...Array(Math.pow(10, 5)).keys()]
  },
  {
    a: [1, 2, 3, 4, 5],
    d: 5,
    expected: [1, 2, 3, 4, 5]
  },
  {
    a: [1, 2, 3, 4, 5],
    d: 6,
    expected: []
  },
  {
    a: [],
    d: 1,
    expected: []
  }
];

const isEqual = (arr1, arr2) => !!arr1.find((el, index) => el !== arr2[index]);

const runTests = tests => {
  tests.forEach(test => {
    console.log("************************************************");
    const start = new Date();
    const result = rotLeft(test.a, test.d);
    const end = new Date() - start;
    console.log(`a: ${test.a} d: ${test.d}`);
    console.log(`expected: ${test.expected}`);
    console.log(`received: ${result}`);

    if (isEqual(test.expected, result)) {
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
