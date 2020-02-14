const merge = (left, right) => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const mergeSort = (arrayToSort) => {
    let clone = [...arrayToSort];

    if(arrayToSort.length <= 1) {
        return arrayToSort;
    }

    const middle = Math.floor((arrayToSort.length / 2));

    const left = clone.slice(0, middle);
    const right = clone.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([4,3,7,6,1,9]));
