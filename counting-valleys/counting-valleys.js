const areInputsValid = ({ numOfSteps, steps }) =>
  numOfSteps >= 2 &&
  numOfSteps <= Math.pow(10, 6) &&
  steps &&
  steps.length === numOfSteps;

const countingValleys = (n, s) => {
  let isPossibleValley = false;
  let unitsFromSeaLevel = 0;

  if (!areInputsValid({ numOfSteps: n, steps: s })) {
    return 0;
  }

  return [...s].reduce((valleys, currentStep) => {
    if (currentStep === "U") {
      unitsFromSeaLevel++;
      if (unitsFromSeaLevel === 0 && isPossibleValley) {
        valleys++;
        isPossibleValley = false;
      }
    } else if (currentStep === "D") {
      if (unitsFromSeaLevel === 0) {
        isPossibleValley = true;
      }
      unitsFromSeaLevel--;
    }
    return valleys;
  }, 0);
};

// TESTS
const tests = [
    {
      n: 8,
      s: "UDDDUDUU",
      expected: 1
    },
    {
      n: 8,
      s: "UDDDUDUD",
      expected: 0
    },
    {
      n: 101,
      s: "UDUDUDUU",
      expected: 0
    },
    {
      n: 8,
      s: "UDUDUDUU",
      expected: 0
    },
    {
      n: 16,
      s: "UDDDUDUUDDDUDDUU",
      expected: 1
    },
    {
      n: 7,
      s: "UDUDZDU",
      expected: 1
    },
    {
      n: 1,
      s: "U",
      expected: 0
    }
  ];
  
  const runTests = tests => {
    tests.forEach(test => {
      console.log("************************************************");
      const result = countingValleys(test.n, test.s);
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
      console.log("************************************************");
    });
  };
  
  console.log(runTests(tests));