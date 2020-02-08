const areCloudsArrayElementsValid = clouds =>
  !clouds.some(el => el < 0 || el > 1);

const isCloudsArrayValid = (clouds, fullCheck) =>
  clouds.length >= 2 &&
  clouds.length <= 100 &&
  clouds[0] === 0 &&
  clouds[clouds.length - 1] === 0 &&
  (fullCheck ? areCloudsArrayElementsValid(clouds) : true);

const jumpingOnClouds = c => {
  const SAFE = 0;
  let counter = 0;
  let jumps = 0;

  if (!isCloudsArrayValid(c, true)) {
    return 0;
  }

  while (counter < c.length - 1) {
    if (typeof c[counter + 2] !== "undefined" && c[counter + 2] === SAFE) {
      counter += 2;
    } else {
      counter++;
    }
    jumps++;
  }

  return jumps;
};

// TESTS
const tests = [
  {
    clouds: [0, 0, 1, 0, 0, 1, 0],
    expected: 4
  },
  {
    clouds: [0, 0, 0, 1, 0, 0],
    expected: 3
  },
  {
    clouds: [0, 0],
    expected: 1
  },
  {
    clouds: [0, 1, 0],
    expected: 1
  },
  {
    clouds: [0, 0, 1, 0],
    expected: 2
  },
  {
    clouds: [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    expected: 8
  },
  {
    clouds: [
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      1,
      0
    ],
    expected: 16
  },
  {
    clouds: [0],
    expected: 0
  }
];

const runTests = tests => {
  tests.forEach(test => {
    console.log("************************************************");
    const start = new Date();
    const result = jumpingOnClouds(test.clouds);
    const end = new Date() - start;
    console.log(`clouds: ${test.clouds}`);
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
