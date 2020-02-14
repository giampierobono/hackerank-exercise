const quickSort = (arrayToSort) => {
    const resultArray = [];
    const left = [];
    const right = [];
    const pivot = arrayToSort.pop();

    if(arrayToSort.length <= 1) {
        return arrayToSort;
    }

    for(let i = 0; i < arrayToSort.length; i++) {
        if(arrayToSort[i] <= pivot) {
            left.push(arrayToSort[i]);
        } else {
            right.push(arrayToSort[i]);
        }
    }
    return resultArray.concat(quickSort(left), pivot, quickSort(right))
};

console.log(quickSort([2,6,89,45,1]));
