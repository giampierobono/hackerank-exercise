const areInputsValid = inputs =>
  inputs &&
  inputs.colors &&
  inputs.numOfSocks &&
  inputs.colors.length >= 0 &&
  inputs.colors.length <= inputs.numOfSocks &&
  inputs.numOfSocks >= 1 &&
  inputs.numOfSocks <= 100;

const sockMerchant = (n, ar) => {
  const occurrency = {};
  let pairs = 0;

  if (!areInputsValid({ numOfSocks: n, colors: ar })) {
    return 0;
  }

  for (let i = 0; i < n; i++) {
    if (ar[i] >= 1 && ar[i] <= 100) {
      occurrency[ar[i]] = ++occurrency[ar[i]] || 1;
      if (occurrency[ar[i]] % 2 === 0) {
        pairs++;
      }
    }
  }
  return pairs;
};

// TESTS
const tests = [
  {
    n: 9,
    ar: [10, 20, 20, 10, 10, 30, 50, 10, 20],
    expected: 3
  },
  {
    n: 8,
    ar: [10, 20, 20, 10, 10, 30, 50, 10, 20],
    expected: 0
  },
  {
    n: 101,
    ar: [10, 20, 20, 10, 10, 30, 50, 10, 20],
    expected: 0
  },
  {
    n: 9,
    ar: [101, 20, 20, 101, 10, 30, 50, 10, 20],
    expected: 2
  },
  {
    n: 9,
    ar: [10, 20, 30, 40, 50, 60, 70, 80, 90],
    expected: 0
  },
  {
    n: 4,
    ar: [10, 20, 20, 30],
    expected: 1
  },
  {
    n: 4,
    ar: [],
    expected: 0
  }
];

const runTests = tests => {
  tests.forEach(test => {
    console.log("************************************************");
    const start = new Date();
    const result = sockMerchant(test.n, test.ar);
    const end = new Date() - start;
    console.log(`n: ${test.n} ar: ${test.ar}`);
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
