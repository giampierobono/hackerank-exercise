const areInputsValid = ({ stringToRepeat, numOfChars }) =>
  stringToRepeat.length >= 1 &&
  stringToRepeat.length <= 100 &&
  numOfChars >= 1 &&
  numOfChars <= Math.pow(10, 12);

const repeatedString = (s, n) => {
  const asPositions = [];
  let asCount = 0;
  const repeatTimes = Math.floor(n / s.length);
  const repeatTimesModule = n % s.length;
  const deadOrAlive = "a";

  if (!areInputsValid({ stringToRepeat: s, numOfChars: n })) {
    return -1;
  }

  asCount =
    [...s].reduce((acc, current, index) => {
      if (current === deadOrAlive) {
        acc++;
        asPositions.push(index);
      }
      return acc;
    }, 0) * repeatTimes;

  if (repeatTimesModule !== 0) {
    return (
      asCount +
        (asPositions.filter(el => el < repeatTimesModule) || []).length || 0
    );
  }

  return asCount;
};

// TESTS
const tests = [
  {
    n: 10,
    s: "aba",
    expected: 7
  },
  {
    n: 1000000000000,
    s: "a",
    expected: 1000000000000
  },
  {
    n: 10,
    s: "",
    expected: -1
  },
  {
    n: 0,
    s: "aaasdasdfe",
    expected: -1
  },
  {
    n: 16,
    s: "aaasdasdfe",
    expected: 8
  },
  {
    n: 7000,
    s:
      "aaasdasdfeaaasdasdfeaaasdasdfeaaasdasdfeaaasdasdfeaaasdasdfeaaasdasdfeaaasdasdfeaaasdasdfe",
    expected: 2800
  },
  {
    n: Math.pow(10, 12),
    s:
      "aaasdasdfeaaasdasdfeaaasdasdfeaaasdasdfeaaasdasdfeaaasdasdfeaaasdasdfeaaasdasdfeaaasdasdfe",
    expected: 400000000000
  },
  {
    n: Math.pow(10, 6),
    s:
      "aaasdasdfeaaasdasdfeaaasdasdfeaaasdasdfeaaasdasdfeaaasdasdfeaaasdasdfeaaasdasdfeaaasdasdfe",
    expected: 400000
  },
  {
    n: 1,
    s: "a",
    expected: 1
  }
];

const runTests = tests => {
  tests.forEach(test => {
    console.log("************************************************");
    const start = new Date();
    const result = repeatedString(test.s, test.n);
    const end = new Date() - start;

    console.log(`n: ${test.n} s: ${test.s}`);
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
