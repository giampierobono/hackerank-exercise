const computeArea = (startHeight, endHeight, start, end) => {
  const containerHeigth = Math.min(startHeight, endHeight);
  const waterQuantity = Math.abs(start - end) * containerHeigth;

  return waterQuantity;
};

var maxArea = function(height) {
  let maxWater = 0;
  let start = 0;

  if (!height || height.length === 0) {
    return -1;
  }

  for (let i = 1; i < height.length; i++) {
    const waterQuantityCurrent = computeArea(
      height[start],
      height[i],
      start,
      i
    );
    maxWater = Math.max(waterQuantityCurrent, maxWater);
    if (start < height.length - 1 && start + 1 !== i) {
      const waterQuantityNewStart = computeArea(
        height[start + 1],
        height[i],
        start + 1,
        i
      );

      maxWater = Math.max(waterQuantityNewStart, maxWater);
      if (waterQuantityCurrent < waterQuantityNewStart) {
        start = start + 1;
      }
    }
  }

  return maxWater;
};

const acqua = height => {
  let maxWater = 0;
  let start = 0;
  const pivot = height[0];

  for (let i = 1; i < height.length; i++) {
    const waterFromFirst = computeArea(pivot, height[i], 0, i);
    const waterFromStart = computeArea(height[start], height[i], start, i);
    if (height[i] > height[start]) {
      start = i;
    }
    maxWater = Math.max(waterFromFirst, waterFromStart, maxWater);
  }

  return maxWater;
};

//console.log(acqua([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49

// console.log(acqua([2, 3, 4, 5, 18, 17, 6])); // 17
// console.log(acqua([1,2,1])); // 2

console.log(acqua([1, 2, 3, 4])); // 4
